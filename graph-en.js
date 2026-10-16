// Name: Γράφημα / Graph (English)
// ID: stemgraph
// Description: Live graphs on the stage and CSV export, for micro:bit, WeDo or any value.
// License: MIT

(function (Scratch) {
  'use strict';

  const LANG = 'en';
  const STRINGS = {
    el: {
      name: 'Γράφημα',
      sandbox: '⚠ Ξαναφόρτωσε τη σελίδα και τσέκαρε «Run without sandbox»',
      lRec: 'Καταγραφή', lGraph: 'Γράφημα', lData: 'Δεδομένα',
      bStart: 'ξεκίνα νέα καταγραφή', bStop: 'σταμάτα την καταγραφή', bIsRec: 'καταγραφή σε εξέλιξη;',
      bEvery: 'κάθε [SEC] δευτερόλεπτα καταγραφής',
      bRecord: 'κατέγραψε [VALUE] στη σειρά [SERIES]',
      bRecordXY: 'κατέγραψε x [X] y [Y] στη σειρά [SERIES]',
      bShow: 'δείξε το γράφημα', bHide: 'κρύψε το γράφημα',
      bTitle: 'όρισε τίτλο γραφήματος σε [TEXT]',
      bYAxis: 'όρισε άξονα y: όνομα [NAME] μονάδα [UNIT]',
      bXAxis: 'όρισε άξονα x: όνομα [NAME] μονάδα [UNIT]',
      bYRange: 'όρισε κλίμακα y από [MIN] έως [MAX]', bYAuto: 'αυτόματη κλίμακα y',
      bWindow: 'δείξε τα τελευταία [SEC] δευτερόλεπτα (0 = όλα)',
      bCSV: 'κατέβασε τα δεδομένα ως CSV με όνομα [NAME]',
      bElapsed: 'χρόνος καταγραφής (s)', bStat: '[STAT] της σειράς [SERIES]',
      stLast: 'τελευταία τιμή', stMin: 'ελάχιστη τιμή', stMax: 'μέγιστη τιμή', stMean: 'μέση τιμή', stCount: 'πλήθος μετρήσεων',
      defSeries: 'μέτρηση', defY: 'τιμή', defX: 'χρόνος', defXUnit: 's', defTitle: 'Μετρήσεις', defFile: 'μετρήσεις',
      noData: 'Δεν υπάρχουν μετρήσεις ακόμα', csvSeries: 'σειρά',
      locale: 'el-GR', decimal: ','
    },
    en: {
      name: 'Graph',
      sandbox: '⚠ Reload the page and tick “Run without sandbox”',
      lRec: 'Recording', lGraph: 'Graph', lData: 'Data',
      bStart: 'start new recording', bStop: 'stop recording', bIsRec: 'recording?',
      bEvery: 'every [SEC] seconds while recording',
      bRecord: 'record [VALUE] in series [SERIES]',
      bRecordXY: 'record x [X] y [Y] in series [SERIES]',
      bShow: 'show graph', bHide: 'hide graph',
      bTitle: 'set graph title to [TEXT]',
      bYAxis: 'set y axis: name [NAME] unit [UNIT]',
      bXAxis: 'set x axis: name [NAME] unit [UNIT]',
      bYRange: 'set y scale from [MIN] to [MAX]', bYAuto: 'automatic y scale',
      bWindow: 'show the last [SEC] seconds (0 = all)',
      bCSV: 'download data as CSV named [NAME]',
      bElapsed: 'recording time (s)', bStat: '[STAT] of series [SERIES]',
      stLast: 'last value', stMin: 'minimum', stMax: 'maximum', stMean: 'mean', stCount: 'number of values',
      defSeries: 'data', defY: 'value', defX: 'time', defXUnit: 's', defTitle: 'Measurements', defFile: 'measurements',
      noData: 'No data yet', csvSeries: 'series',
      locale: 'en-GB', decimal: '.'
    }
  };
  const T = STRINGS[LANG];

  if (!Scratch.extensions.unsandboxed) {
    Scratch.extensions.register({
      getInfo: () => ({
        id: 'stemgraph',
        name: T.name,
        color1: '#4C97FF', color2: '#3373CC', color3: '#2E5EA6',
        blocks: [{ blockType: Scratch.BlockType.LABEL, text: T.sandbox }]
      })
    });
    return;
  }

  const vm = Scratch.vm;
  const toNum = (v) => Scratch.Cast.toNumber(v);
  const toStr = (v) => Scratch.Cast.toString(v);
  const COLORS = ['#E5413B', '#2E7DE1', '#1E9E5A', '#F28C1B', '#8A4FD8', '#0FA3A3', '#D6338A', '#6B7A8F'];
  const MAX_POINTS = 20000;
  const RES = 2; // ανάλυση του καμβά σε σχέση με τη σκηνή

  // «Ωραίες» υποδιαιρέσεις αξόνων
  function niceNum (range, round) {
    const exp = Math.floor(Math.log10(range));
    const f = range / Math.pow(10, exp);
    let nf;
    if (round) nf = f < 1.5 ? 1 : f < 3 ? 2 : f < 7 ? 5 : 10;
    else nf = f <= 1 ? 1 : f <= 2 ? 2 : f <= 5 ? 5 : 10;
    return nf * Math.pow(10, exp);
  }
  function niceTicks (min, max, count) {
    const step = niceNum((max - min) / (count - 1), true);
    const start = Math.ceil(min / step - 1e-9) * step;
    const ticks = [];
    for (let v = start; v <= max + step * 1e-6; v += step) ticks.push(Math.abs(v) < step * 1e-9 ? 0 : v);
    return { ticks, step };
  }
  function fmt (v, step) {
    const d = step > 0 && step < 1 ? Math.min(6, Math.ceil(-Math.log10(step) - 1e-9)) : 0;
    return v.toLocaleString(T.locale, { minimumFractionDigits: d, maximumFractionDigits: d });
  }

  class StemGraph {
    constructor () {
      this.series = new Map();
      this.recording = true;
      this.t0 = null;
      this.xMode = 'time';
      this.title = T.defTitle;
      this.yName = T.defY;
      this.yUnit = '';
      this.xName = T.defX;
      this.xUnit = T.defXUnit;
      this.yFixed = null;
      this.windowSec = 0;
      this.hatLast = {};

      this.visible = false;
      this.canvas = null;
      this.ctx = null;
      this.skinId = null;
      this.drawableId = null;
      this.dirty = true;
      this.raf = null;
      this.lastDraw = 0;
    }

    getInfo () {
      const seriesArg = { type: Scratch.ArgumentType.STRING, defaultValue: T.defSeries };
      return {
        id: 'stemgraph',
        name: T.name,
        color1: '#4C97FF',
        color2: '#3373CC',
        color3: '#2E5EA6',
        blocks: [
          { blockType: Scratch.BlockType.LABEL, text: T.lRec },
          { opcode: 'startRecording', blockType: Scratch.BlockType.COMMAND, text: T.bStart },
          { opcode: 'stopRecording', blockType: Scratch.BlockType.COMMAND, text: T.bStop },
          { opcode: 'isRecording', blockType: Scratch.BlockType.BOOLEAN, text: T.bIsRec },
          {
            opcode: 'everyInterval', blockType: Scratch.BlockType.HAT, text: T.bEvery,
            arguments: { SEC: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0.1 } }
          },
          {
            opcode: 'record', blockType: Scratch.BlockType.COMMAND, text: T.bRecord,
            arguments: { VALUE: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 }, SERIES: seriesArg }
          },
          {
            opcode: 'recordXY', blockType: Scratch.BlockType.COMMAND, text: T.bRecordXY,
            arguments: {
              X: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 },
              Y: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 },
              SERIES: seriesArg
            }
          },

          { blockType: Scratch.BlockType.LABEL, text: T.lGraph },
          { opcode: 'showGraph', blockType: Scratch.BlockType.COMMAND, text: T.bShow },
          { opcode: 'hideGraph', blockType: Scratch.BlockType.COMMAND, text: T.bHide },
          {
            opcode: 'setTitle', blockType: Scratch.BlockType.COMMAND, text: T.bTitle,
            arguments: { TEXT: { type: Scratch.ArgumentType.STRING, defaultValue: T.defTitle } }
          },
          {
            opcode: 'setYAxis', blockType: Scratch.BlockType.COMMAND, text: T.bYAxis,
            arguments: {
              NAME: { type: Scratch.ArgumentType.STRING, defaultValue: T.defY },
              UNIT: { type: Scratch.ArgumentType.STRING, defaultValue: '' }
            }
          },
          {
            opcode: 'setXAxis', blockType: Scratch.BlockType.COMMAND, text: T.bXAxis,
            arguments: {
              NAME: { type: Scratch.ArgumentType.STRING, defaultValue: T.defX },
              UNIT: { type: Scratch.ArgumentType.STRING, defaultValue: T.defXUnit }
            }
          },
          {
            opcode: 'setYRange', blockType: Scratch.BlockType.COMMAND, text: T.bYRange,
            arguments: {
              MIN: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 },
              MAX: { type: Scratch.ArgumentType.NUMBER, defaultValue: 100 }
            }
          },
          { opcode: 'autoY', blockType: Scratch.BlockType.COMMAND, text: T.bYAuto },
          {
            opcode: 'setWindow', blockType: Scratch.BlockType.COMMAND, text: T.bWindow,
            arguments: { SEC: { type: Scratch.ArgumentType.NUMBER, defaultValue: 10 } }
          },

          { blockType: Scratch.BlockType.LABEL, text: T.lData },
          {
            opcode: 'downloadCSV', blockType: Scratch.BlockType.COMMAND, text: T.bCSV,
            arguments: { NAME: { type: Scratch.ArgumentType.STRING, defaultValue: T.defFile } }
          },
          { opcode: 'elapsed', blockType: Scratch.BlockType.REPORTER, text: T.bElapsed },
          {
            opcode: 'stat', blockType: Scratch.BlockType.REPORTER, text: T.bStat,
            arguments: {
              STAT: { type: Scratch.ArgumentType.STRING, menu: 'stat', defaultValue: 'last' },
              SERIES: seriesArg
            }
          }
        ],
        menus: {
          stat: {
            acceptReporters: false,
            items: [
              { text: T.stLast, value: 'last' }, { text: T.stMin, value: 'min' },
              { text: T.stMax, value: 'max' }, { text: T.stMean, value: 'mean' },
              { text: T.stCount, value: 'count' }
            ]
          }
        }
      };
    }

    // ---------- Καταγραφή ----------

    _now () { return performance.now() / 1000; }

    _getSeries (name) {
      const key = toStr(name) || T.defSeries;
      let s = this.series.get(key);
      if (!s) {
        s = { color: COLORS[this.series.size % COLORS.length], pts: [] };
        this.series.set(key, s);
      }
      return s;
    }

    _add (name, x, y) {
      if (!Number.isFinite(x) || !Number.isFinite(y)) return;
      const s = this._getSeries(name);
      if (s.pts.length >= MAX_POINTS) s.pts.shift();
      s.pts.push([x, y]);
      this._invalidate();
    }

    startRecording () {
      this.series.clear();
      this.t0 = this._now();
      this.recording = true;
      this.xMode = 'time';
      this.hatLast = {};
      this._invalidate();
    }

    stopRecording () { this.recording = false; }
    isRecording () { return this.recording; }

    everyInterval (args, util) {
      if (!this.recording) return false;
      const iv = Math.max(0.05, toNum(args.SEC));
      const key = (util && util.thread && util.thread.topBlock) || String(iv);
      const now = this._now();
      const last = this.hatLast[key];
      if (last === undefined || now - last >= iv - 0.005) {
        this.hatLast[key] = now;
        return true;
      }
      return false;
    }

    record (args) {
      if (!this.recording) return;
      if (this.t0 === null) this.t0 = this._now();
      const t = Math.round((this._now() - this.t0) * 1000) / 1000;
      this._add(args.SERIES, t, toNum(args.VALUE));
    }

    recordXY (args) {
      if (!this.recording) return;
      if (this.xMode !== 'xy') {
        this.xMode = 'xy';
        if (this.xName === T.defX && this.xUnit === T.defXUnit) { this.xName = 'x'; this.xUnit = ''; }
      }
      this._add(args.SERIES, toNum(args.X), toNum(args.Y));
    }

    elapsed () {
      if (this.t0 === null) return 0;
      return Math.round((this._now() - this.t0) * 100) / 100;
    }

    stat (args) {
      const s = this.series.get(toStr(args.SERIES) || T.defSeries);
      if (!s || s.pts.length === 0) return args.STAT === 'count' ? 0 : '';
      const ys = s.pts.map((p) => p[1]);
      switch (args.STAT) {
      case 'min': return Math.min(...ys);
      case 'max': return Math.max(...ys);
      case 'mean': return Math.round((ys.reduce((a, b) => a + b, 0) / ys.length) * 1000) / 1000;
      case 'count': return ys.length;
      default: return ys[ys.length - 1];
      }
    }

    // ---------- Ρυθμίσεις γραφήματος ----------

    setTitle (args) { this.title = toStr(args.TEXT); this._invalidate(); }
    setYAxis (args) { this.yName = toStr(args.NAME); this.yUnit = toStr(args.UNIT); this._invalidate(); }
    setXAxis (args) { this.xName = toStr(args.NAME); this.xUnit = toStr(args.UNIT); this._invalidate(); }

    setYRange (args) {
      let a = toNum(args.MIN);
      let b = toNum(args.MAX);
      if (a === b) b = a + 1;
      this.yFixed = [Math.min(a, b), Math.max(a, b)];
      this._invalidate();
    }

    autoY () { this.yFixed = null; this._invalidate(); }
    setWindow (args) { this.windowSec = Math.max(0, toNum(args.SEC)); this._invalidate(); }

    showGraph () {
      if (!this._ensureDrawable()) return;
      this.visible = true;
      Scratch.renderer.updateDrawableVisible(this.drawableId, true);
      this._invalidate();
    }

    hideGraph () {
      this.visible = false;
      if (this.drawableId !== null) Scratch.renderer.updateDrawableVisible(this.drawableId, false);
      this._requestRedraw();
    }

    // ---------- CSV ----------

    _csv () {
      const num = (v) => String(Math.round(v * 1e6) / 1e6).replace('.', T.decimal);
      const label = (name, unit) => (unit ? `${name} (${unit})` : name);
      const lines = [];
      const entries = [...this.series.entries()];
      if (entries.length === 1) {
        lines.push(label(this.xName, this.xUnit) + ';' + label(this.yName, this.yUnit));
        for (const [x, y] of entries[0][1].pts) lines.push(num(x) + ';' + num(y));
      } else {
        lines.push(T.csvSeries + ';' + label(this.xName, this.xUnit) + ';' + label(this.yName, this.yUnit));
        for (const [name, s] of entries) {
          for (const [x, y] of s.pts) lines.push(name.replace(/;/g, ',') + ';' + num(x) + ';' + num(y));
        }
      }
      return '\uFEFF' + lines.join('\r\n') + '\r\n';
    }

    downloadCSV (args) {
      const name = (toStr(args.NAME) || T.defFile).replace(/[\\/:*?"<>|]/g, '_');
      const blob = new Blob([this._csv()], { type: 'text/csv;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = name.toLowerCase().endsWith('.csv') ? name : name + '.csv';
      document.body.appendChild(a);
      a.click();
      a.remove();
      setTimeout(() => URL.revokeObjectURL(url), 5000);
    }

    // ---------- Σχεδίαση πάνω στη σκηνή ----------

    _ensureDrawable () {
      if (this.drawableId !== null) return true;
      const r = Scratch.renderer;
      if (!r) return false;
      this.canvas = document.createElement('canvas');
      this.ctx = this.canvas.getContext('2d');
      this._resizeCanvas();
      this._render();
      this.skinId = r.createBitmapSkin(this.canvas, RES);
      this.drawableId = r.createDrawable('pen');
      r.updateDrawableSkinId(this.drawableId, this.skinId);
      r.updateDrawableVisible(this.drawableId, false);
      return true;
    }

    _resizeCanvas () {
      const w = (vm.runtime.stageWidth || 480) * RES;
      const h = (vm.runtime.stageHeight || 360) * RES;
      if (this.canvas.width !== w || this.canvas.height !== h) {
        this.canvas.width = w;
        this.canvas.height = h;
        return true;
      }
      return false;
    }

    _invalidate () {
      this.dirty = true;
      if (this.visible && !this.raf) this.raf = requestAnimationFrame(() => this._frame());
    }

    _frame () {
      this.raf = null;
      if (!this.visible || !this.dirty) return;
      const now = performance.now();
      if (now - this.lastDraw < 50) {
        this.raf = requestAnimationFrame(() => this._frame());
        return;
      }
      this.lastDraw = now;
      this.dirty = false;
      this._resizeCanvas();
      this._render();
      Scratch.renderer.updateBitmapSkin(this.skinId, this.canvas, RES);
      this._requestRedraw();
    }

    _requestRedraw () {
      if (vm.runtime.requestRedraw) vm.runtime.requestRedraw();
    }

    _visiblePoints () {
      let xmin = Infinity;
      let xmax = -Infinity;
      for (const s of this.series.values()) {
        for (const p of s.pts) {
          if (p[0] < xmin) xmin = p[0];
          if (p[0] > xmax) xmax = p[0];
        }
      }
      if (xmin === Infinity) return null;
      if (this.xMode === 'time') {
        if (this.windowSec > 0) {
          xmax = Math.max(xmax, this.windowSec);
          xmin = xmax - this.windowSec;
        } else {
          xmin = 0;
          xmax = Math.max(xmax, 1);
        }
      } else if (xmin === xmax) {
        xmin -= 1;
        xmax += 1;
      }
      let ymin = Infinity;
      let ymax = -Infinity;
      for (const s of this.series.values()) {
        for (const p of s.pts) {
          if (p[0] < xmin || p[0] > xmax) continue;
          if (p[1] < ymin) ymin = p[1];
          if (p[1] > ymax) ymax = p[1];
        }
      }
      if (this.yFixed) {
        [ymin, ymax] = this.yFixed;
      } else if (ymin === Infinity) {
        ymin = 0;
        ymax = 1;
      } else if (ymin === ymax) {
        ymin -= 1;
        ymax += 1;
      } else {
        const pad = (ymax - ymin) * 0.08;
        ymin -= pad;
        ymax += pad;
      }
      return { xmin, xmax, ymin, ymax };
    }

    _render () {
      const ctx = this.ctx;
      const W = this.canvas.width;
      const H = this.canvas.height;
      const k = RES;
      ctx.clearRect(0, 0, W, H);

      // Φόντο
      const m = 6 * k;
      ctx.fillStyle = 'rgba(255,255,255,0.94)';
      ctx.strokeStyle = '#C9D3DD';
      ctx.lineWidth = 1 * k;
      ctx.beginPath();
      if (ctx.roundRect) ctx.roundRect(m, m, W - 2 * m, H - 2 * m, 8 * k);
      else ctx.rect(m, m, W - 2 * m, H - 2 * m);
      ctx.fill();
      ctx.stroke();

      const font = (size, weight) => `${weight || 400} ${size * k}px "Helvetica Neue", Arial, sans-serif`;
      const L = 62 * k;
      const R = W - 18 * k;
      const TOP = 36 * k;
      const B = H - 42 * k;

      // Τίτλος
      ctx.fillStyle = '#1D2B3A';
      ctx.font = font(15, 700);
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(this.title, W / 2, 21 * k);

      const range = this._visiblePoints();
      const label = (name, unit) => (unit ? `${name} (${unit})` : name);

      // Ονόματα αξόνων
      ctx.font = font(12, 600);
      ctx.fillStyle = '#3B4B5C';
      ctx.fillText(label(this.xName, this.xUnit), (L + R) / 2, H - 16 * k);
      ctx.save();
      ctx.translate(18 * k, (TOP + B) / 2);
      ctx.rotate(-Math.PI / 2);
      ctx.fillText(label(this.yName, this.yUnit), 0, 0);
      ctx.restore();

      if (!range) {
        ctx.strokeStyle = '#3B4B5C';
        ctx.lineWidth = 1.5 * k;
        ctx.strokeRect(L, TOP, R - L, B - TOP);
        ctx.font = font(13);
        ctx.fillStyle = '#6B7A8F';
        ctx.fillText(T.noData, (L + R) / 2, (TOP + B) / 2);
        return;
      }

      const { xmin, xmax, ymin, ymax } = range;
      const sx = (x) => L + ((x - xmin) / (xmax - xmin)) * (R - L);
      const sy = (y) => B - ((y - ymin) / (ymax - ymin)) * (B - TOP);

      // Πλέγμα και υποδιαιρέσεις
      ctx.font = font(11);
      ctx.lineWidth = 1 * k;
      const yt = niceTicks(ymin, ymax, 6);
      ctx.textAlign = 'right';
      for (const v of yt.ticks) {
        const y = sy(v);
        ctx.strokeStyle = v === 0 ? '#9AA8B6' : '#E3E8EE';
        ctx.beginPath(); ctx.moveTo(L, y); ctx.lineTo(R, y); ctx.stroke();
        ctx.fillStyle = '#3B4B5C';
        ctx.fillText(fmt(v, yt.step), L - 6 * k, y);
      }
      const xt = niceTicks(xmin, xmax, 7);
      ctx.textAlign = 'center';
      ctx.textBaseline = 'top';
      for (const v of xt.ticks) {
        const x = sx(v);
        ctx.strokeStyle = '#E3E8EE';
        ctx.beginPath(); ctx.moveTo(x, TOP); ctx.lineTo(x, B); ctx.stroke();
        ctx.fillStyle = '#3B4B5C';
        ctx.fillText(fmt(v, xt.step), x, B + 6 * k);
      }

      // Καμπύλες
      ctx.save();
      ctx.beginPath();
      ctx.rect(L, TOP, R - L, B - TOP);
      ctx.clip();
      for (const s of this.series.values()) {
        ctx.strokeStyle = s.color;
        ctx.fillStyle = s.color;
        ctx.lineWidth = 2.2 * k;
        ctx.lineJoin = 'round';
        ctx.beginPath();
        let started = false;
        let shown = 0;
        for (const [x, y] of s.pts) {
          if (x < xmin || x > xmax) { started = false; continue; }
          shown++;
          if (!started) { ctx.moveTo(sx(x), sy(y)); started = true; } else ctx.lineTo(sx(x), sy(y));
        }
        ctx.stroke();
        if (shown <= 60) {
          for (const [x, y] of s.pts) {
            if (x < xmin || x > xmax) continue;
            ctx.beginPath();
            ctx.arc(sx(x), sy(y), 2.6 * k, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }
      ctx.restore();

      // Πλαίσιο
      ctx.strokeStyle = '#3B4B5C';
      ctx.lineWidth = 1.5 * k;
      ctx.strokeRect(L, TOP, R - L, B - TOP);

      // Υπόμνημα
      if (this.series.size > 1) {
        ctx.font = font(11, 600);
        ctx.textAlign = 'left';
        ctx.textBaseline = 'middle';
        const names = [...this.series.keys()];
        const width = Math.max(...names.map((n) => ctx.measureText(n).width)) + 30 * k;
        const lx = R - width - 6 * k;
        let ly = TOP + 8 * k;
        ctx.fillStyle = 'rgba(255,255,255,0.9)';
        ctx.fillRect(lx - 4 * k, ly - 4 * k, width + 4 * k, names.length * 16 * k + 4 * k);
        for (const [name, s] of this.series) {
          ctx.strokeStyle = s.color;
          ctx.lineWidth = 3 * k;
          ctx.beginPath(); ctx.moveTo(lx, ly + 4 * k); ctx.lineTo(lx + 16 * k, ly + 4 * k); ctx.stroke();
          ctx.fillStyle = '#1D2B3A';
          ctx.fillText(name, lx + 22 * k, ly + 4 * k);
          ly += 16 * k;
        }
      }
    }
  }

  Scratch.extensions.register(new StemGraph());
})(Scratch);
