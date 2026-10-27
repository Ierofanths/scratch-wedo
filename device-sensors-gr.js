// Name: Αισθητήρες συσκευής / Device sensors (Ελληνικά)
// ID: stemdevicesensors
// Description: Επιταχυνσιόμετρο, γυροσκόπιο, προσανατολισμός, φως και GPS του tablet ή του κινητού.
// License: MIT

(function (Scratch) {
  'use strict';

  const LANG = 'el';
  const STRINGS = {
    el: {
      name: 'Αισθητήρες συσκευής',
      sandbox: '⚠ Ξαναφόρτωσε τη σελίδα και τσέκαρε «Run without sandbox»',
      bEnable: '▶ Ενεργοποίηση αισθητήρων', bWorking: 'οι αισθητήρες λειτουργούν;',
      lMotion: 'Κίνηση', lOrient: 'Προσανατολισμός', lGps: 'Θέση (GPS)', lExtra: 'Συσκευή',
      bAccel: 'επιτάχυνση [AXIS] [MODE] (m/s²)', bRot: 'ρυθμός περιστροφής [AXIS] (°/s)',
      bWhenShaken: 'όταν ταρακουνηθεί η συσκευή',
      bOrient: '[ANGLE] (°)', bWhenSensor: 'όταν [SENSOR] [OP] [VALUE]',
      bLat: 'γεωγραφικό πλάτος', bLon: 'γεωγραφικό μήκος', bSpeed: 'ταχύτητα [UNIT]', bAlt: 'υψόμετρο (m)',
      bAcc: 'ακρίβεια θέσης (m)', bDist: 'απόσταση από την αρχή (m)', bResetDist: 'μηδένισε την απόσταση',
      bHasFix: 'υπάρχει θέση GPS;',
      bVibrate: 'δόνηση για [SEC] δευτερόλεπτα', bWake: 'η οθόνη να μένει αναμμένη [STATE]',
      withG: 'με βαρύτητα', withoutG: 'χωρίς βαρύτητα', total: 'συνολική',
      heading: 'πυξίδα (προς βορρά)', beta: 'κλίση μπρος-πίσω', gamma: 'κλίση αριστερά-δεξιά',
      sTotal: 'συνολική επιτάχυνση', sX: 'επιτάχυνση x', sY: 'επιτάχυνση y', sZ: 'επιτάχυνση z',
      sHeading: 'πυξίδα', sBeta: 'κλίση μπρος-πίσω', sGamma: 'κλίση αριστερά-δεξιά', sSpeed: 'ταχύτητα (km/h)',
      on: 'ναι', off: 'όχι',
      lLight: 'Φως', bLux: 'φωτεινότητα (lux)', bHasLux: 'υπάρχει αισθητήρας φωτός;',
      bCamLight: 'φωτεινότητα από την κάμερα [CAM] (0-100)', bCamStop: 'κλείσε την κάμερα',
      camBack: 'πίσω', camFront: 'μπροστά', sLux: 'φωτεινότητα (lux)',
      noLux: 'Ο αισθητήρας φωτός δεν είναι ενεργός. Στο Chrome (Android) άνοιξε chrome://flags, ενεργοποίησε το «Generic Sensor Extra Classes» και κάνε επανεκκίνηση. Μέχρι τότε χρησιμοποίησε τη φωτεινότητα από την κάμερα.',
      noSensors: 'Αυτή η συσκευή δεν έχει αισθητήρες κίνησης ή ο browser δεν επιτρέπει την πρόσβαση.'
    },
    en: {
      name: 'Device sensors',
      sandbox: '⚠ Reload the page and tick “Run without sandbox”',
      bEnable: '▶ Enable sensors', bWorking: 'sensors working?',
      lMotion: 'Motion', lOrient: 'Orientation', lGps: 'Location (GPS)', lExtra: 'Device',
      bAccel: 'acceleration [AXIS] [MODE] (m/s²)', bRot: 'rotation rate [AXIS] (°/s)',
      bWhenShaken: 'when device is shaken',
      bOrient: '[ANGLE] (°)', bWhenSensor: 'when [SENSOR] [OP] [VALUE]',
      bLat: 'latitude', bLon: 'longitude', bSpeed: 'speed [UNIT]', bAlt: 'altitude (m)',
      bAcc: 'location accuracy (m)', bDist: 'distance from start (m)', bResetDist: 'reset distance',
      bHasFix: 'GPS location available?',
      bVibrate: 'vibrate for [SEC] seconds', bWake: 'keep screen on [STATE]',
      withG: 'with gravity', withoutG: 'without gravity', total: 'total',
      heading: 'compass heading', beta: 'front-back tilt', gamma: 'left-right tilt',
      sTotal: 'total acceleration', sX: 'acceleration x', sY: 'acceleration y', sZ: 'acceleration z',
      sHeading: 'compass heading', sBeta: 'front-back tilt', sGamma: 'left-right tilt', sSpeed: 'speed (km/h)',
      on: 'on', off: 'off',
      lLight: 'Light', bLux: 'light level (lux)', bHasLux: 'light sensor available?',
      bCamLight: 'brightness from [CAM] camera (0-100)', bCamStop: 'turn camera off',
      camBack: 'back', camFront: 'front', sLux: 'light level (lux)',
      noLux: 'The light sensor is not active. In Chrome (Android) open chrome://flags, enable “Generic Sensor Extra Classes” and restart. Until then, use the brightness from the camera.',
      noSensors: 'This device has no motion sensors, or the browser does not allow access to them.'
    }
  };
  const T = STRINGS[LANG];
  const COLORS = { color1: '#5CB1D6', color2: '#47A6CE', color3: '#2E8EB8' }; // χρώματα «Αισθητήρων» του Scratch

  if (!Scratch.extensions.unsandboxed) {
    Scratch.extensions.register({
      getInfo: () => ({
        id: 'stemdevicesensors', name: T.name, ...COLORS,
        blocks: [{ blockType: Scratch.BlockType.LABEL, text: T.sandbox }]
      })
    });
    return;
  }

  const toNum = (v) => Scratch.Cast.toNumber(v);
  const round = (v, d) => Math.round(v * Math.pow(10, d)) / Math.pow(10, d);
  const G = 9.80665;

  class DeviceSensors {
    constructor () {
      this.acc = { x: 0, y: 0, z: 0 };      // με βαρύτητα
      this.lin = { x: 0, y: 0, z: 0 };      // χωρίς βαρύτητα
      this.grav = { x: 0, y: 0, z: G };     // εκτίμηση βαρύτητας (αν ο browser δεν δίνει γραμμική επιτάχυνση)
      this.rot = { alpha: 0, beta: 0, gamma: 0 };
      this.orient = { heading: 0, beta: 0, gamma: 0 };
      this.motionSeen = false;
      this.lastShake = 0;
      this.geo = null;
      this.geoWatch = null;
      this.distStart = null;
      this.lastGeo = null;
      this.travelled = 0;
      this.wakeLock = null;
      this.wantWake = false;
      this.started = false;
      this.luxSensor = null;
      this.luxValue = 0;
      this.luxOk = false;
      this.luxTried = false;
      this.luxWarned = false;
      this.cam = null;          // { stream, video, canvas, ctx, facing, timer }
      this.camValue = 0;
      this.camStarting = false;

      this._onMotion = this._onMotion.bind(this);
      this._onOrientation = this._onOrientation.bind(this);
      this._start(); // στο Android δεν χρειάζεται άδεια
      document.addEventListener('visibilitychange', () => {
        if (this.wantWake && document.visibilityState === 'visible') this._requestWake();
      });
    }

    getInfo () {
      const c = COLORS;
      return {
        id: 'stemdevicesensors',
        name: T.name,
        ...c,
        blocks: [
          { func: 'enable', blockType: Scratch.BlockType.BUTTON, text: T.bEnable },
          { opcode: 'working', ...c, blockType: Scratch.BlockType.BOOLEAN, text: T.bWorking },

          { blockType: Scratch.BlockType.LABEL, text: T.lMotion },
          {
            opcode: 'acceleration', blockType: Scratch.BlockType.REPORTER, text: T.bAccel,
            arguments: {
              AXIS: { type: Scratch.ArgumentType.STRING, menu: 'axis', defaultValue: 'z' },
              MODE: { type: Scratch.ArgumentType.STRING, menu: 'gmode', defaultValue: 'with' }
            }
          },
          {
            opcode: 'rotationRate', blockType: Scratch.BlockType.REPORTER, text: T.bRot,
            arguments: { AXIS: { type: Scratch.ArgumentType.STRING, menu: 'rotAxis', defaultValue: 'z' } }
          },
          { opcode: 'whenShaken', blockType: Scratch.BlockType.HAT, text: T.bWhenShaken },

          { blockType: Scratch.BlockType.LABEL, text: T.lOrient },
          {
            opcode: 'orientation', blockType: Scratch.BlockType.REPORTER, text: T.bOrient,
            arguments: { ANGLE: { type: Scratch.ArgumentType.STRING, menu: 'angle', defaultValue: 'beta' } }
          },
          {
            opcode: 'whenSensor', blockType: Scratch.BlockType.HAT, text: T.bWhenSensor,
            arguments: {
              SENSOR: { type: Scratch.ArgumentType.STRING, menu: 'sensor', defaultValue: 'total' },
              OP: { type: Scratch.ArgumentType.STRING, menu: 'op', defaultValue: '>' },
              VALUE: { type: Scratch.ArgumentType.NUMBER, defaultValue: 15 }
            }
          },

          { blockType: Scratch.BlockType.LABEL, text: T.lLight },
          { opcode: 'hasLux', blockType: Scratch.BlockType.BOOLEAN, text: T.bHasLux },
          { opcode: 'lux', blockType: Scratch.BlockType.REPORTER, text: T.bLux },
          {
            opcode: 'cameraLight', blockType: Scratch.BlockType.REPORTER, text: T.bCamLight,
            arguments: { CAM: { type: Scratch.ArgumentType.STRING, menu: 'camera', defaultValue: 'environment' } }
          },
          { opcode: 'cameraStop', blockType: Scratch.BlockType.COMMAND, text: T.bCamStop },

          { blockType: Scratch.BlockType.LABEL, text: T.lGps },
          { opcode: 'hasFix', blockType: Scratch.BlockType.BOOLEAN, text: T.bHasFix },
          {
            opcode: 'speed', blockType: Scratch.BlockType.REPORTER, text: T.bSpeed,
            arguments: { UNIT: { type: Scratch.ArgumentType.STRING, menu: 'speedUnit', defaultValue: 'kmh' } }
          },
          { opcode: 'distance', blockType: Scratch.BlockType.REPORTER, text: T.bDist },
          { opcode: 'resetDistance', blockType: Scratch.BlockType.COMMAND, text: T.bResetDist },
          { opcode: 'latitude', blockType: Scratch.BlockType.REPORTER, text: T.bLat },
          { opcode: 'longitude', blockType: Scratch.BlockType.REPORTER, text: T.bLon },
          { opcode: 'altitude', blockType: Scratch.BlockType.REPORTER, text: T.bAlt },
          { opcode: 'accuracy', blockType: Scratch.BlockType.REPORTER, text: T.bAcc },

          { blockType: Scratch.BlockType.LABEL, text: T.lExtra },
          {
            opcode: 'vibrate', blockType: Scratch.BlockType.COMMAND, text: T.bVibrate,
            arguments: { SEC: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0.2 } }
          },
          {
            opcode: 'keepScreenOn', blockType: Scratch.BlockType.COMMAND, text: T.bWake,
            arguments: { STATE: { type: Scratch.ArgumentType.STRING, menu: 'onoff', defaultValue: 'on' } }
          }
        ],
        menus: {
          axis: {
            acceptReporters: false,
            items: [{ text: 'x', value: 'x' }, { text: 'y', value: 'y' }, { text: 'z', value: 'z' },
              { text: T.total, value: 'total' }]
          },
          gmode: {
            acceptReporters: false,
            items: [{ text: T.withG, value: 'with' }, { text: T.withoutG, value: 'without' }]
          },
          rotAxis: { acceptReporters: false, items: ['x', 'y', 'z'] },
          angle: {
            acceptReporters: false,
            items: [{ text: T.beta, value: 'beta' }, { text: T.gamma, value: 'gamma' }, { text: T.heading, value: 'heading' }]
          },
          sensor: {
            acceptReporters: false,
            items: [
              { text: T.sTotal, value: 'total' }, { text: T.sX, value: 'x' }, { text: T.sY, value: 'y' },
              { text: T.sZ, value: 'z' }, { text: T.sBeta, value: 'beta' }, { text: T.sGamma, value: 'gamma' },
              { text: T.sHeading, value: 'heading' }, { text: T.sSpeed, value: 'speed' }, { text: T.sLux, value: 'lux' }
            ]
          },
          op: { acceptReporters: false, items: ['>', '<'] },
          speedUnit: { acceptReporters: false, items: [{ text: 'km/h', value: 'kmh' }, { text: 'm/s', value: 'ms' }] },
          camera: { acceptReporters: false, items: [{ text: T.camBack, value: 'environment' }, { text: T.camFront, value: 'user' }] },
          onoff: { acceptReporters: false, items: [{ text: T.on, value: 'on' }, { text: T.off, value: 'off' }] }
        }
      };
    }

    // ---------- Εκκίνηση ----------

    _start () {
      if (this.started) return;
      this.started = true;
      window.addEventListener('devicemotion', this._onMotion);
      if ('ondeviceorientationabsolute' in window) {
        window.addEventListener('deviceorientationabsolute', this._onOrientation);
      } else {
        window.addEventListener('deviceorientation', this._onOrientation);
      }
    }

    // Σε iPhone/iPad χρειάζεται άδεια που ζητείται με πάτημα κουμπιού
    async enable () {
      try {
        if (typeof DeviceMotionEvent !== 'undefined' && typeof DeviceMotionEvent.requestPermission === 'function') {
          await DeviceMotionEvent.requestPermission();
        }
        if (typeof DeviceOrientationEvent !== 'undefined' &&
            typeof DeviceOrientationEvent.requestPermission === 'function') {
          await DeviceOrientationEvent.requestPermission();
        }
      } catch (e) { /* ο χρήστης αρνήθηκε */ }
      this.started = false;
      window.removeEventListener('devicemotion', this._onMotion);
      this._start();
      setTimeout(() => { if (!this.motionSeen) alert(T.noSensors); }, 1500);
    }

    _onMotion (e) {
      const a = e.accelerationIncludingGravity;
      if (!a || a.x === null || a.x === undefined) return;
      this.motionSeen = true;
      this.acc = { x: a.x || 0, y: a.y || 0, z: a.z || 0 };
      const l = e.acceleration;
      if (l && l.x !== null && l.x !== undefined) {
        this.lin = { x: l.x || 0, y: l.y || 0, z: l.z || 0 };
      } else {
        // Χωρίς γραμμική επιτάχυνση από τον browser: αφαιρούμε μια αργή εκτίμηση της βαρύτητας
        const k = 0.9;
        for (const ax of ['x', 'y', 'z']) {
          this.grav[ax] = k * this.grav[ax] + (1 - k) * this.acc[ax];
          this.lin[ax] = this.acc[ax] - this.grav[ax];
        }
      }
      const r = e.rotationRate;
      if (r) this.rot = { alpha: r.alpha || 0, beta: r.beta || 0, gamma: r.gamma || 0 };
      const mag = Math.hypot(this.lin.x, this.lin.y, this.lin.z);
      const now = Date.now();
      if (mag > 12 && now - this.lastShake > 500) this.lastShake = now;
    }

    _onOrientation (e) {
      if (e.beta !== null && e.beta !== undefined) this.orient.beta = e.beta;
      if (e.gamma !== null && e.gamma !== undefined) this.orient.gamma = e.gamma;
      if (typeof e.webkitCompassHeading === 'number') {
        this.orient.heading = e.webkitCompassHeading; // iPhone/iPad
      } else if (e.alpha !== null && e.alpha !== undefined && (e.absolute || e.type === 'deviceorientationabsolute')) {
        this.orient.heading = (360 - e.alpha) % 360;
      }
    }

    working () { return this.motionSeen; }

    // ---------- Κίνηση ----------

    _vec (mode) { return mode === 'without' ? this.lin : this.acc; }

    acceleration (args) {
      const v = this._vec(args.MODE);
      if (args.AXIS === 'total') return round(Math.hypot(v.x, v.y, v.z), 2);
      return round(v[args.AXIS] || 0, 2);
    }

    // Γυροσκόπιο: alpha = γύρω από z, beta = γύρω από x, gamma = γύρω από y
    rotationRate (args) {
      const map = { x: 'beta', y: 'gamma', z: 'alpha' };
      return round(this.rot[map[args.AXIS]] || 0, 1);
    }

    whenShaken () { return Date.now() - this.lastShake < 150; }

    // ---------- Προσανατολισμός ----------

    orientation (args) { return round(this.orient[args.ANGLE] || 0, 1); }

    whenSensor (args) {
      let v;
      switch (args.SENSOR) {
      case 'total': v = Math.hypot(this.acc.x, this.acc.y, this.acc.z); break;
      case 'x': case 'y': case 'z': v = this.acc[args.SENSOR]; break;
      case 'beta': case 'gamma': case 'heading': v = this.orient[args.SENSOR]; break;
      case 'speed': this._startGeo(); v = this._speedMs() * 3.6; break;
      case 'lux': this._startLux(); v = this.luxValue; break;
      default: v = 0;
      }
      const ref = toNum(args.VALUE);
      return args.OP === '<' ? v < ref : v > ref;
    }

    // ---------- GPS ----------

    _startGeo () {
      if (this.geoWatch !== null || !navigator.geolocation) return;
      this.geoWatch = navigator.geolocation.watchPosition((pos) => {
        this.geo = pos.coords;
        const p = [pos.coords.latitude, pos.coords.longitude];
        if (!this.distStart) this.distStart = p;
        // απόσταση που διανύθηκε: αθροίζονται μόνο μετακινήσεις μεγαλύτερες από την ακρίβεια (για να μη μετράει «θόρυβο»)
        if (this.lastGeo) {
          const d = this._haversine(this.lastGeo, p);
          if (d > Math.max(3, pos.coords.accuracy || 0)) {
            this.travelled += d;
            this.lastGeo = p;
          }
        } else {
          this.lastGeo = p;
        }
      }, () => {}, { enableHighAccuracy: true, maximumAge: 1000, timeout: 20000 });
    }

    _haversine (a, b) {
      const R = 6371000;
      const rad = (d) => (d * Math.PI) / 180;
      const dLat = rad(b[0] - a[0]);
      const dLon = rad(b[1] - a[1]);
      const h = Math.sin(dLat / 2) ** 2 + Math.cos(rad(a[0])) * Math.cos(rad(b[0])) * Math.sin(dLon / 2) ** 2;
      return 2 * R * Math.asin(Math.sqrt(h));
    }

    _speedMs () { return this.geo && typeof this.geo.speed === 'number' ? this.geo.speed : 0; }

    hasFix () { this._startGeo(); return !!this.geo; }
    speed (args) {
      this._startGeo();
      const v = this._speedMs();
      return round(args.UNIT === 'ms' ? v : v * 3.6, 1);
    }
    distance () { this._startGeo(); return Math.round(this.travelled); }
    resetDistance () { this._startGeo(); this.travelled = 0; this.lastGeo = null; this.distStart = null; }
    latitude () { this._startGeo(); return this.geo ? round(this.geo.latitude, 6) : 0; }
    longitude () { this._startGeo(); return this.geo ? round(this.geo.longitude, 6) : 0; }
    altitude () { this._startGeo(); return this.geo && typeof this.geo.altitude === 'number' ? Math.round(this.geo.altitude) : 0; }
    accuracy () { this._startGeo(); return this.geo ? Math.round(this.geo.accuracy) : 0; }

    // ---------- Φως: αισθητήρας φωτός (αν είναι ενεργός) ----------

    _startLux () {
      if (this.luxTried) return;
      this.luxTried = true;
      if (typeof AmbientLightSensor === 'undefined') return;
      try {
        const sensor = new AmbientLightSensor({ frequency: 10 });
        sensor.addEventListener('reading', () => {
          this.luxValue = Math.round(sensor.illuminance);
          this.luxOk = true;
        });
        sensor.addEventListener('error', () => { this.luxOk = false; });
        sensor.start();
        this.luxSensor = sensor;
      } catch (e) { /* μη διαθέσιμο */ }
    }

    hasLux () { this._startLux(); return this.luxOk; }

    lux () {
      this._startLux();
      if (!this.luxOk && !this.luxWarned && typeof AmbientLightSensor === 'undefined') {
        this.luxWarned = true;
        alert(T.noLux);
      }
      return this.luxValue;
    }

    // ---------- Φως: η κάμερα ως φωτόμετρο ----------

    async _startCamera (facing) {
      if (this.camStarting) return;
      if (this.cam && this.cam.facing === facing) return;
      this.camStarting = true;
      this.cameraStop();
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: facing, width: { ideal: 160 }, height: { ideal: 120 } }, audio: false
        });
        const track = stream.getVideoTracks()[0];
        // Κλείδωμα έκθεσης, ώστε η κάμερα να μην «διορθώνει» μόνη της το σκοτάδι
        setTimeout(async () => {
          try {
            const caps = track.getCapabilities ? track.getCapabilities() : {};
            const adv = {};
            if (caps.exposureMode && caps.exposureMode.includes('manual')) adv.exposureMode = 'manual';
            if (caps.whiteBalanceMode && caps.whiteBalanceMode.includes('manual')) adv.whiteBalanceMode = 'manual';
            if (Object.keys(adv).length) await track.applyConstraints({ advanced: [adv] });
          } catch (e) { /* η κάμερα δεν το υποστηρίζει */ }
        }, 1000);
        const video = document.createElement('video');
        video.muted = true;
        video.playsInline = true;
        video.srcObject = stream;
        await video.play();
        const canvas = document.createElement('canvas');
        canvas.width = 32;
        canvas.height = 24;
        const ctx = canvas.getContext('2d', { willReadFrequently: true });
        const timer = setInterval(() => {
          if (video.readyState < 2) return;
          ctx.drawImage(video, 0, 0, 32, 24);
          const d = ctx.getImageData(0, 0, 32, 24).data;
          let sum = 0;
          for (let i = 0; i < d.length; i += 4) sum += 0.2126 * d[i] + 0.7152 * d[i + 1] + 0.0722 * d[i + 2];
          this.camValue = Math.round((sum / (d.length / 4) / 255) * 100);
        }, 100);
        this.cam = { stream, video, canvas, ctx, facing, timer };
      } catch (e) {
        console.warn('camera', e);
      }
      this.camStarting = false;
    }

    cameraLight (args) {
      this._startCamera(args.CAM === 'user' ? 'user' : 'environment');
      return this.camValue;
    }

    cameraStop () {
      if (!this.cam) return;
      clearInterval(this.cam.timer);
      this.cam.stream.getTracks().forEach((t) => t.stop());
      this.cam = null;
    }

    // ---------- Συσκευή ----------

    vibrate (args) {
      if (navigator.vibrate) navigator.vibrate(Math.max(0, Math.round(toNum(args.SEC) * 1000)));
    }

    async _requestWake () {
      try {
        if (navigator.wakeLock) this.wakeLock = await navigator.wakeLock.request('screen');
      } catch (e) { /* δεν υποστηρίζεται */ }
    }

    keepScreenOn (args) {
      this.wantWake = args.STATE === 'on';
      if (this.wantWake) {
        if (!this.wakeLock || this.wakeLock.released) this._requestWake();
      } else if (this.wakeLock) {
        this.wakeLock.release().catch(() => {});
        this.wakeLock = null;
      }
    }
  }

  Scratch.extensions.register(new DeviceSensors());
})(Scratch);
