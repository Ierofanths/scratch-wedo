// Name: micro:bit V2 (Ελληνικά, απευθείας Bluetooth)
// ID: microbitstem
// Description: micro:bit V2 μέσω Web Bluetooth (UART), χωρίς Scratch Link. Χρειάζεται το πρόγραμμα-γέφυρα microbit-bridge στο micro:bit.
// License: MIT

(function (Scratch) {
  'use strict';

  const LANG = 'el';
  const STRINGS = {
    el: {
      sandbox: '⚠ Ξαναφόρτωσε τη σελίδα και τσέκαρε «Run without sandbox»',
      noBt: 'Αυτός ο browser δεν υποστηρίζει Bluetooth.\nΆνοιξε τον editor σε Chrome ή Edge.',
      connErr: 'Δεν έγινε σύνδεση με το micro:bit:\n',
      connHint: '\n\nΈλεγξε ότι έχει το πρόγραμμα-γέφυρα και ότι δείχνει το όνομά του στην οθόνη.',
      stDisconnected: 'Αποσυνδεδεμένο', stSearching: 'Αναζήτηση…', stConnecting: 'Σύνδεση…',
      stConnected: 'Συνδεδεμένο: ', stError: 'Σφάλμα σύνδεσης',
      stReconnect: 'Η σύνδεση χάθηκε – επανασύνδεση', stLost: 'Η σύνδεση χάθηκε',
      bConnect: '🔗 Σύνδεση με micro:bit', bDisconnect: '✖ Αποσύνδεση',
      bStatus: 'κατάσταση σύνδεσης', bIsConnected: 'συνδεδεμένο;',
      lInput: 'Είσοδος', lDisplay: 'Οθόνη', lMusic: 'Μουσική', lPins: 'Ακροδέκτες',
      bWhenButton: 'όταν πατηθεί [BTN]', bButton: '[BTN] πατημένο;',
      bWhenGesture: 'όταν [GESTURE]', bWhenPin: 'όταν αγγιχτεί ο [PIN]', bPinTouched: '[PIN] αγγιγμένος;',
      bAccel: 'επιτάχυνση [AXIS] (mg)', bRotation: 'κλίση [ROT] (°)', bHeading: 'πυξίδα (°)',
      bTemp: 'θερμοκρασία (°C)', bLight: 'στάθμη φωτός', bSound: 'στάθμη ήχου',
      bWhenSensor: 'όταν [SENSOR] [OP] [VALUE]',
      bIcon: 'δείξε εικονίδιο [ICON]', bArrow: 'δείξε βέλος [ARROW]', bText: 'δείξε κείμενο [TEXT]',
      bPlot: 'άναψε LED x [X] y [Y]', bUnplot: 'σβήσε LED x [X] y [Y]', bClear: 'καθάρισε την οθόνη',
      bBrightness: 'όρισε φωτεινότητα σε [B] (0-255)',
      bNote: 'παίξε νότα [NOTE] για [SEC] δευτερόλεπτα', bTone: 'παίξε ήχο [HZ] Hz για [SEC] δευτερόλεπτα',
      bMelody: 'παίξε μελωδία [MELODY]', bEffect: 'παίξε εφέ [SOUND]', bStop: 'σταμάτα όλους τους ήχους',
      bVolume: 'όρισε ένταση σε [V] (0-255)',
      bDWrite: 'ψηφιακή έξοδος [PIN] σε [V]', bAWrite: 'αναλογική έξοδος [PIN] σε [V] (0-1023)',
      bServo: 'servo στον [PIN] σε γωνία [ANGLE]', bDRead: 'ψηφιακή είσοδος [PIN]', bARead: 'αναλογική είσοδος [PIN]',
      bWhenLevel: 'όταν ο [PIN] γίνει [LEVEL]', bPull: 'όρισε αντίσταση [PIN] σε [MODE]', bDisplayOn: 'οθόνη LED [STATE]',
      dispOff: 'σβηστή οθόνη', high: 'υψηλός (1)', low: 'χαμηλός (0)',
      pullUp: 'pull-up', pullDown: 'pull-down', pullNone: 'καμία', on: 'ενεργή', off: 'ανενεργή',
      logo: 'λογότυπο', strength: 'ένταση', pitch: 'μπρος-πίσω (pitch)', roll: 'αριστερά-δεξιά (roll)',
      sTemp: 'θερμοκρασία', sLight: 'στάθμη φωτός', sSound: 'στάθμη ήχου', sHeading: 'πυξίδα',
      gestures: ['ανακινηθεί', 'λογότυπο πάνω', 'λογότυπο κάτω', 'οθόνη πάνω', 'οθόνη κάτω',
        'γείρει αριστερά', 'γείρει δεξιά', 'ελεύθερη πτώση', 'χτύπημα 3g'],
      icons: ['καρδιά', 'μικρή καρδιά', 'ναι ✓', 'όχι ✗', 'χαρούμενο', 'λυπημένο', 'μπερδεμένο', 'θυμωμένο',
        'κοιμάται', 'έκπληκτο', 'χαζούλικο', 'φανταστικό', 'αδιάφορο', 'μπλουζάκι', 'πατίνι', 'πάπια', 'σπίτι',
        'χελώνα', 'πεταλούδα', 'ανθρωπάκι', 'φάντασμα', 'σπαθί', 'καμηλοπάρδαλη', 'νεκροκεφαλή', 'ομπρέλα',
        'φίδι', 'κουνέλι', 'αγελάδα', 'νότα', 'όγδοο', 'δίκρανο', 'στόχος', 'τρίγωνο', 'αριστερό τρίγωνο',
        'σκακιέρα', 'ρόμβος', 'μικρός ρόμβος', 'τετράγωνο', 'μικρό τετράγωνο', 'ψαλίδι'],
      arrows: ['βορράς ↑', 'βορειοανατολικά ↗', 'ανατολή →', 'νοτιοανατολικά ↘', 'νότος ↓',
        'νοτιοδυτικά ↙', 'δύση ←', 'βορειοδυτικά ↖'],
      melodies: ['Dadadadum', 'Entertainer', 'Prelude', 'Ωδή στη χαρά', 'Nyan', 'Ringtone', 'Funk', 'Blues',
        'Χρόνια πολλά', 'Γαμήλιο εμβατήριο', 'Πένθιμο εμβατήριο', 'Punchline', 'Baddy', 'Καταδίωξη', 'Ba ding',
        'Wawawawaa', 'Άλμα πάνω', 'Άλμα κάτω', 'Power up', 'Power down'],
      sounds: ['γέλιο', 'χαρά', 'γεια', 'μυστήριο', 'λύπη', 'γλίστρημα', 'πέταγμα', 'ελατήριο', 'λαμπύρισμα', 'χασμουρητό'],
      notes: ['Ντο', 'Ρε', 'Μι', 'Φα', 'Σολ', 'Λα', 'Σι', 'Ντο (ψηλό)'],
      defText: 'Γεια!'
    },
    en: {
      sandbox: '⚠ Reload the page and tick “Run without sandbox”',
      noBt: 'This browser does not support Bluetooth.\nOpen the editor in Chrome or Edge.',
      connErr: 'Could not connect to the micro:bit:\n',
      connHint: '\n\nCheck that it runs the bridge program and shows its name on the display.',
      stDisconnected: 'Disconnected', stSearching: 'Searching…', stConnecting: 'Connecting…',
      stConnected: 'Connected: ', stError: 'Connection error',
      stReconnect: 'Connection lost – reconnecting', stLost: 'Connection lost',
      bConnect: '🔗 Connect micro:bit', bDisconnect: '✖ Disconnect',
      bStatus: 'connection status', bIsConnected: 'connected?',
      lInput: 'Input', lDisplay: 'Display', lMusic: 'Music', lPins: 'Pins',
      bWhenButton: 'when [BTN] pressed', bButton: '[BTN] pressed?',
      bWhenGesture: 'when [GESTURE]', bWhenPin: 'when [PIN] touched', bPinTouched: '[PIN] touched?',
      bAccel: 'acceleration [AXIS] (mg)', bRotation: 'rotation [ROT] (°)', bHeading: 'compass heading (°)',
      bTemp: 'temperature (°C)', bLight: 'light level', bSound: 'sound level',
      bWhenSensor: 'when [SENSOR] [OP] [VALUE]',
      bIcon: 'show icon [ICON]', bArrow: 'show arrow [ARROW]', bText: 'show text [TEXT]',
      bPlot: 'plot x [X] y [Y]', bUnplot: 'unplot x [X] y [Y]', bClear: 'clear screen',
      bBrightness: 'set brightness to [B] (0-255)',
      bNote: 'play note [NOTE] for [SEC] seconds', bTone: 'play tone [HZ] Hz for [SEC] seconds',
      bMelody: 'play melody [MELODY]', bEffect: 'play sound [SOUND]', bStop: 'stop all sounds',
      bVolume: 'set volume to [V] (0-255)',
      bDWrite: 'digital write [PIN] to [V]', bAWrite: 'analog write [PIN] to [V] (0-1023)',
      bServo: 'servo write [PIN] to [ANGLE]°', bDRead: 'digital read [PIN]', bARead: 'analog read [PIN]',
      bWhenLevel: 'when [PIN] becomes [LEVEL]', bPull: 'set pull [PIN] to [MODE]', bDisplayOn: 'LED display [STATE]',
      dispOff: 'display off', high: 'high (1)', low: 'low (0)',
      pullUp: 'up', pullDown: 'down', pullNone: 'none', on: 'on', off: 'off',
      logo: 'logo', strength: 'strength', pitch: 'pitch', roll: 'roll',
      sTemp: 'temperature', sLight: 'light level', sSound: 'sound level', sHeading: 'compass heading',
      gestures: ['shaken', 'logo up', 'logo down', 'screen up', 'screen down', 'tilted left', 'tilted right',
        'free fall', '3g impact'],
      icons: ['heart', 'small heart', 'yes ✓', 'no ✗', 'happy', 'sad', 'confused', 'angry', 'asleep', 'surprised',
        'silly', 'fabulous', 'meh', 't-shirt', 'rollerskate', 'duck', 'house', 'tortoise', 'butterfly',
        'stick figure', 'ghost', 'sword', 'giraffe', 'skull', 'umbrella', 'snake', 'rabbit', 'cow',
        'quarter note', 'eighth note', 'pitchfork', 'target', 'triangle', 'left triangle', 'chessboard',
        'diamond', 'small diamond', 'square', 'small square', 'scissors'],
      arrows: ['north ↑', 'north-east ↗', 'east →', 'south-east ↘', 'south ↓', 'south-west ↙', 'west ←', 'north-west ↖'],
      melodies: ['Dadadadum', 'Entertainer', 'Prelude', 'Ode to Joy', 'Nyan', 'Ringtone', 'Funk', 'Blues',
        'Birthday', 'Wedding', 'Funeral', 'Punchline', 'Baddy', 'Chase', 'Ba ding', 'Wawawawaa',
        'Jump up', 'Jump down', 'Power up', 'Power down'],
      sounds: ['giggle', 'happy', 'hello', 'mysterious', 'sad', 'slide', 'soaring', 'spring', 'twinkle', 'yawn'],
      notes: ['C', 'D', 'E', 'F', 'G', 'A', 'B', 'C (high)'],
      defText: 'Hello!'
    }
  };
  const T = STRINGS[LANG];

  if (!Scratch.extensions.unsandboxed) {
    Scratch.extensions.register({
      getInfo: () => ({
        id: 'microbitstem',
        name: 'micro:bit',
        color1: '#0FBD8C', color2: '#0DA57A', color3: '#0B8E69',
        blocks: [{ blockType: Scratch.BlockType.LABEL, text: T.sandbox }]
      })
    });
    return;
  }

  const vm = Scratch.vm;
  const UART_SERVICE = '6e400001-b5a3-f393-e0a9-e50e24dcca9e';
  const ACCEL_SERVICE = 'e95d0753-251d-470a-a062-fa1922dfa9a8';
  const ACCEL_DATA = 'e95dca4b-251d-470a-a062-fa1922dfa9a8';
  const ACCEL_PERIOD = 'e95dfb24-251d-470a-a062-fa1922dfa9a8';
  const BUTTON_SERVICE = 'e95d9882-251d-470a-a062-fa1922dfa9a8';
  const BUTTON_A = 'e95dda90-251d-470a-a062-fa1922dfa9a8';
  const BUTTON_B = 'e95dda91-251d-470a-a062-fa1922dfa9a8';
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));
  const toNum = (v) => Scratch.Cast.toNumber(v);
  const menuItems = (arr) => arr.map((text, i) => ({ text, value: String(i) }));

  class MicrobitSTEM {
    constructor () {
      this.device = null;
      this.rx = null; // ειδοποιήσεις από το micro:bit
      this.tx = null; // εγγραφή προς το micro:bit
      this.status = T.stDisconnected;
      this.userDisconnect = false;
      this.queue = [];
      this.busy = false;
      this.buffer = '';
      this.pending = {};
      this.s = {
        ax: 0, ay: 0, az: 0, btnA: false, btnB: false, touch: 0,
        temp: 0, light: 0, sound: 0, heading: -1
      };
      this.lastGestureSeq = null;
      this.gestureTime = {};
      this.pinValues = {};
      this.watched = new Set();
      this.pinMask = 0;
      this.pinMaskKnown = false;
      this.maskWaiters = [];
      this.compassRequested = false;
      this.soundRequested = false;
      this.lightRequested = false;

      this._onDisconnected = this._onDisconnected.bind(this);
      this._onData = this._onData.bind(this);
      this._onAccel = this._onAccel.bind(this);

      vm.runtime.on('PROJECT_STOP_ALL', () => {
        if (this.isConnected()) this._sendLine('z');
      });
    }

    getInfo () {
      const pinMenu = { acceptReporters: false, items: ['P0', 'P1', 'P2'].map((p, i) => ({ text: p, value: String(i) })) };
      return {
        id: 'microbitstem',
        name: 'micro:bit',
        color1: '#0FBD8C',
        color2: '#0DA57A',
        color3: '#0B8E69',
        blocks: [
          { func: 'connect', blockType: Scratch.BlockType.BUTTON, text: T.bConnect },
          { func: 'disconnect', blockType: Scratch.BlockType.BUTTON, text: T.bDisconnect },
          { opcode: 'getStatus', blockType: Scratch.BlockType.REPORTER, text: T.bStatus },
          { opcode: 'isConnectedBlock', blockType: Scratch.BlockType.BOOLEAN, text: T.bIsConnected },

          { blockType: Scratch.BlockType.LABEL, text: T.lInput },
          {
            opcode: 'whenButton', blockType: Scratch.BlockType.HAT, text: T.bWhenButton,
            arguments: { BTN: { type: Scratch.ArgumentType.STRING, menu: 'button', defaultValue: 'A' } }
          },
          {
            opcode: 'buttonPressed', blockType: Scratch.BlockType.BOOLEAN, text: T.bButton,
            arguments: { BTN: { type: Scratch.ArgumentType.STRING, menu: 'button', defaultValue: 'A' } }
          },
          {
            opcode: 'whenGesture', blockType: Scratch.BlockType.HAT, text: T.bWhenGesture,
            arguments: { GESTURE: { type: Scratch.ArgumentType.STRING, menu: 'gesture', defaultValue: '0' } }
          },
          {
            opcode: 'whenPinTouched', blockType: Scratch.BlockType.HAT, text: T.bWhenPin,
            arguments: { PIN: { type: Scratch.ArgumentType.STRING, menu: 'pin', defaultValue: '0' } }
          },
          {
            opcode: 'pinTouched', blockType: Scratch.BlockType.BOOLEAN, text: T.bPinTouched,
            arguments: { PIN: { type: Scratch.ArgumentType.STRING, menu: 'pin', defaultValue: '0' } }
          },
          {
            opcode: 'acceleration', blockType: Scratch.BlockType.REPORTER, text: T.bAccel,
            arguments: { AXIS: { type: Scratch.ArgumentType.STRING, menu: 'axis', defaultValue: 'x' } }
          },
          {
            opcode: 'rotation', blockType: Scratch.BlockType.REPORTER, text: T.bRotation,
            arguments: { ROT: { type: Scratch.ArgumentType.STRING, menu: 'rotation', defaultValue: 'pitch' } }
          },
          { opcode: 'heading', blockType: Scratch.BlockType.REPORTER, text: T.bHeading },
          { opcode: 'temperature', blockType: Scratch.BlockType.REPORTER, text: T.bTemp },
          { opcode: 'lightLevel', blockType: Scratch.BlockType.REPORTER, text: T.bLight },
          { opcode: 'soundLevel', blockType: Scratch.BlockType.REPORTER, text: T.bSound },
          {
            opcode: 'whenSensor', blockType: Scratch.BlockType.HAT, text: T.bWhenSensor,
            arguments: {
              SENSOR: { type: Scratch.ArgumentType.STRING, menu: 'sensor', defaultValue: 'sound' },
              OP: { type: Scratch.ArgumentType.STRING, menu: 'op', defaultValue: '>' },
              VALUE: { type: Scratch.ArgumentType.NUMBER, defaultValue: 128 }
            }
          },

          { blockType: Scratch.BlockType.LABEL, text: T.lDisplay },
          {
            opcode: 'showIcon', blockType: Scratch.BlockType.COMMAND, text: T.bIcon,
            arguments: { ICON: { type: Scratch.ArgumentType.STRING, menu: 'icon', defaultValue: '0' } }
          },
          {
            opcode: 'showArrow', blockType: Scratch.BlockType.COMMAND, text: T.bArrow,
            arguments: { ARROW: { type: Scratch.ArgumentType.STRING, menu: 'arrow', defaultValue: '0' } }
          },
          {
            opcode: 'showText', blockType: Scratch.BlockType.COMMAND, text: T.bText,
            arguments: { TEXT: { type: Scratch.ArgumentType.STRING, defaultValue: T.defText } }
          },
          {
            opcode: 'plot', blockType: Scratch.BlockType.COMMAND, text: T.bPlot,
            arguments: {
              X: { type: Scratch.ArgumentType.NUMBER, defaultValue: 2 },
              Y: { type: Scratch.ArgumentType.NUMBER, defaultValue: 2 }
            }
          },
          {
            opcode: 'unplot', blockType: Scratch.BlockType.COMMAND, text: T.bUnplot,
            arguments: {
              X: { type: Scratch.ArgumentType.NUMBER, defaultValue: 2 },
              Y: { type: Scratch.ArgumentType.NUMBER, defaultValue: 2 }
            }
          },
          { opcode: 'clearScreen', blockType: Scratch.BlockType.COMMAND, text: T.bClear },
          {
            opcode: 'setBrightness', blockType: Scratch.BlockType.COMMAND, text: T.bBrightness,
            arguments: { B: { type: Scratch.ArgumentType.NUMBER, defaultValue: 255 } }
          },

          { blockType: Scratch.BlockType.LABEL, text: T.lMusic },
          {
            opcode: 'playNote', blockType: Scratch.BlockType.COMMAND, text: T.bNote,
            arguments: {
              NOTE: { type: Scratch.ArgumentType.STRING, menu: 'note', defaultValue: '60' },
              SEC: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0.5 }
            }
          },
          {
            opcode: 'playTone', blockType: Scratch.BlockType.COMMAND, text: T.bTone,
            arguments: {
              HZ: { type: Scratch.ArgumentType.NUMBER, defaultValue: 440 },
              SEC: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0.5 }
            }
          },
          {
            opcode: 'playMelody', blockType: Scratch.BlockType.COMMAND, text: T.bMelody,
            arguments: { MELODY: { type: Scratch.ArgumentType.STRING, menu: 'melody', defaultValue: '0' } }
          },
          {
            opcode: 'playEffect', blockType: Scratch.BlockType.COMMAND, text: T.bEffect,
            arguments: { SOUND: { type: Scratch.ArgumentType.STRING, menu: 'sound', defaultValue: '0' } }
          },
          { opcode: 'stopSounds', blockType: Scratch.BlockType.COMMAND, text: T.bStop },
          {
            opcode: 'setVolume', blockType: Scratch.BlockType.COMMAND, text: T.bVolume,
            arguments: { V: { type: Scratch.ArgumentType.NUMBER, defaultValue: 128 } }
          },

          { blockType: Scratch.BlockType.LABEL, text: T.lPins },
          {
            opcode: 'digitalWrite', blockType: Scratch.BlockType.COMMAND, text: T.bDWrite,
            arguments: {
              PIN: { type: Scratch.ArgumentType.STRING, menu: 'ioPin', defaultValue: '0' },
              V: { type: Scratch.ArgumentType.STRING, menu: 'onoff', defaultValue: '1' }
            }
          },
          {
            opcode: 'analogWrite', blockType: Scratch.BlockType.COMMAND, text: T.bAWrite,
            arguments: {
              PIN: { type: Scratch.ArgumentType.STRING, menu: 'ioPin', defaultValue: '0' },
              V: { type: Scratch.ArgumentType.NUMBER, defaultValue: 512 }
            }
          },
          {
            opcode: 'servoWrite', blockType: Scratch.BlockType.COMMAND, text: T.bServo,
            arguments: {
              PIN: { type: Scratch.ArgumentType.STRING, menu: 'ioPin', defaultValue: '0' },
              ANGLE: { type: Scratch.ArgumentType.NUMBER, defaultValue: 90 }
            }
          },
          {
            opcode: 'digitalRead', blockType: Scratch.BlockType.REPORTER, text: T.bDRead,
            arguments: { PIN: { type: Scratch.ArgumentType.STRING, menu: 'ioPin', defaultValue: '0' } }
          },
          {
            opcode: 'whenPinLevel', blockType: Scratch.BlockType.HAT, text: T.bWhenLevel,
            arguments: {
              PIN: { type: Scratch.ArgumentType.STRING, menu: 'ioPin', defaultValue: '8' },
              LEVEL: { type: Scratch.ArgumentType.STRING, menu: 'level', defaultValue: '1' }
            }
          },
          {
            opcode: 'analogRead', blockType: Scratch.BlockType.REPORTER, text: T.bARead,
            arguments: { PIN: { type: Scratch.ArgumentType.STRING, menu: 'analogPin', defaultValue: '0' } }
          },
          {
            opcode: 'setPull', blockType: Scratch.BlockType.COMMAND, text: T.bPull,
            arguments: {
              PIN: { type: Scratch.ArgumentType.STRING, menu: 'ioPin', defaultValue: '8' },
              MODE: { type: Scratch.ArgumentType.STRING, menu: 'pull', defaultValue: '1' }
            }
          },
          {
            opcode: 'setDisplay', blockType: Scratch.BlockType.COMMAND, text: T.bDisplayOn,
            arguments: { STATE: { type: Scratch.ArgumentType.STRING, menu: 'displayState', defaultValue: '0' } }
          }
        ],
        menus: {
          button: {
            acceptReporters: false,
            items: [
              { text: 'A', value: 'A' }, { text: 'B', value: 'B' },
              { text: 'A+B', value: 'AB' }, { text: T.logo, value: 'logo' }
            ]
          },
          gesture: { acceptReporters: false, items: menuItems(T.gestures) },
          pin: pinMenu,
          axis: {
            acceptReporters: false,
            items: [{ text: 'x', value: 'x' }, { text: 'y', value: 'y' }, { text: 'z', value: 'z' },
              { text: T.strength, value: 'strength' }]
          },
          rotation: {
            acceptReporters: false,
            items: [{ text: T.pitch, value: 'pitch' }, { text: T.roll, value: 'roll' }]
          },
          sensor: {
            acceptReporters: false,
            items: [{ text: T.sSound, value: 'sound' }, { text: T.sLight, value: 'light' },
              { text: T.sTemp, value: 'temp' }, { text: T.sHeading, value: 'heading' }]
          },
          op: { acceptReporters: false, items: ['>', '<'] },
          icon: { acceptReporters: true, items: menuItems(T.icons) },
          arrow: { acceptReporters: true, items: menuItems(T.arrows) },
          melody: { acceptReporters: true, items: menuItems(T.melodies) },
          sound: { acceptReporters: true, items: menuItems(T.sounds) },
          note: {
            acceptReporters: true,
            items: ['60', '62', '64', '65', '67', '69', '71', '72'].map((v, i) => ({ text: T.notes[i], value: v }))
          },
          onoff: { acceptReporters: true, items: ['0', '1'] },
          ioPin: {
            acceptReporters: true,
            items: [0, 1, 2, 8, 13, 14, 15, 16].map((n) => ({ text: 'P' + n, value: String(n) })).concat(
              [3, 4, 6, 7, 9, 10].map((n) => ({ text: `P${n} (${T.dispOff})`, value: String(n) })))
          },
          analogPin: {
            acceptReporters: true,
            items: [0, 1, 2].map((n) => ({ text: 'P' + n, value: String(n) })).concat(
              [3, 4, 10].map((n) => ({ text: `P${n} (${T.dispOff})`, value: String(n) })))
          },
          level: { acceptReporters: false, items: [{ text: T.high, value: '1' }, { text: T.low, value: '0' }] },
          pull: {
            acceptReporters: false,
            items: [{ text: T.pullUp, value: '1' }, { text: T.pullDown, value: '2' }, { text: T.pullNone, value: '0' }]
          },
          displayState: { acceptReporters: false, items: [{ text: T.off, value: '0' }, { text: T.on, value: '1' }] }
        }
      };
    }

    // ---------- Σύνδεση ----------

    isConnected () {
      return !!(this.device && this.device.gatt.connected && this.tx);
    }

    async connect () {
      if (!navigator.bluetooth) {
        alert(T.noBt);
        return;
      }
      try {
        this.status = T.stSearching;
        const device = await navigator.bluetooth.requestDevice({
          filters: [{ namePrefix: 'BBC micro:bit' }],
          optionalServices: [UART_SERVICE, ACCEL_SERVICE, BUTTON_SERVICE]
        });
        if (this.device && this.device !== device) this.disconnect();
        this.device = device;
        this.userDisconnect = false;
        device.removeEventListener('gattserverdisconnected', this._onDisconnected);
        device.addEventListener('gattserverdisconnected', this._onDisconnected);
        await this._setup();
      } catch (e) {
        if (e && e.name === 'NotFoundError') {
          this.status = this.isConnected() ? this.status : T.stDisconnected;
        } else {
          console.error('micro:bit', e);
          this.status = T.stError;
          alert(T.connErr + (e && e.message ? e.message : e) + T.connHint);
        }
      }
    }

    async _setup () {
      this.status = T.stConnecting;
      const server = await this.device.gatt.connect();
      const service = await server.getPrimaryService(UART_SERVICE);
      const chars = await service.getCharacteristics();
      let rx = null;
      let tx = null;
      for (const c of chars) {
        if (!rx && (c.properties.notify || c.properties.indicate)) rx = c;
        else if (!tx && (c.properties.write || c.properties.writeWithoutResponse)) tx = c;
      }
      if (!rx || !tx) throw new Error('UART characteristics not found');
      this.buffer = '';
      this.lastGestureSeq = null;
      this.watched.clear();
      this.pinMaskKnown = false;
      this.rx = rx;
      rx.addEventListener('characteristicvaluechanged', this._onData);
      await rx.startNotifications();
      this.tx = tx;

      // Επιτάχυνση: notifications κάθε 20 ms
      try {
        const acc = await server.getPrimaryService(ACCEL_SERVICE);
        try {
          const period = await acc.getCharacteristic(ACCEL_PERIOD);
          await period.writeValue(new Uint8Array([20, 0]));
        } catch (e) { /* μένει η προεπιλογή */ }
        const data = await acc.getCharacteristic(ACCEL_DATA);
        data.addEventListener('characteristicvaluechanged', this._onAccel);
        await data.startNotifications();
      } catch (e) {
        console.warn('micro:bit accelerometer service', e);
      }

      // Κουμπιά A/B
      try {
        const btn = await server.getPrimaryService(BUTTON_SERVICE);
        for (const [uuid, key] of [[BUTTON_A, 'btnA'], [BUTTON_B, 'btnB']]) {
          const c = await btn.getCharacteristic(uuid);
          c.addEventListener('characteristicvaluechanged', (e) => {
            this.s[key] = e.target.value.getUint8(0) > 0;
          });
          await c.startNotifications();
        }
      } catch (e) {
        console.warn('micro:bit button service', e);
      }

      if (this.compassRequested) this._sendLine('k,1');
      if (this.soundRequested) this._sendLine('u,1');
      if (this.lightRequested) this._sendLine('l,1');
      const m = /\[(.*)\]/.exec(this.device.name || '');
      this.status = T.stConnected + (m ? m[1] : (this.device.name || 'micro:bit'));
    }

    disconnect () {
      this.userDisconnect = true;
      if (this.device && this.device.gatt.connected) this.device.gatt.disconnect();
      this.status = T.stDisconnected;
    }

    async _onDisconnected () {
      this.tx = null;
      this.rx = null;
      this.queue.splice(0).forEach((q) => q.resolve());
      Object.values(this.pending).forEach((p) => p.resolve(null));
      this.pending = {};
      this.s.btnA = false;
      this.s.btnB = false;
      this.s.touch = 0;
      if (this.userDisconnect) {
        this.status = T.stDisconnected;
        return;
      }
      for (let i = 1; i <= 5; i++) {
        this.status = `${T.stReconnect} (${i}/5)…`;
        await sleep(1500);
        if (this.userDisconnect) return;
        try {
          await this._setup();
          return;
        } catch (e) { /* ξαναδοκίμασε */ }
      }
      this.status = T.stLost;
    }

    // ---------- Αποστολή (μία λειτουργία Bluetooth τη φορά, κομμάτια των 20 bytes) ----------

    _enqueue (key, fn) {
      if (key) {
        const existing = this.queue.find((q) => q.key === key);
        if (existing) {
          existing.fn = fn;
          return existing.promise;
        }
      }
      const item = { key, fn, resolve: null, promise: null };
      item.promise = new Promise((r) => { item.resolve = r; });
      this.queue.push(item);
      this._pump();
      return item.promise;
    }

    async _pump () {
      if (this.busy) return;
      this.busy = true;
      while (this.queue.length) {
        const item = this.queue.shift();
        try {
          if (this.isConnected()) await item.fn();
        } catch (e) {
          console.warn('micro:bit BLE', e);
        }
        item.resolve();
      }
      this.busy = false;
    }

    _sendLine (line, key) {
      if (!this.isConnected()) return Promise.resolve();
      const bytes = new TextEncoder().encode(String(line).replace(/\n/g, ' ') + '\n');
      return this._enqueue(key, async () => {
        const tx = this.tx;
        for (let i = 0; i < bytes.length; i += 20) {
          const chunk = bytes.slice(i, i + 20);
          if (tx.properties.write) await tx.writeValueWithResponse(chunk);
          else await tx.writeValueWithoutResponse(chunk);
        }
      });
    }

    // ---------- Λήψη ----------

    _onData (e) {
      const v = e.target.value;
      this.buffer += new TextDecoder().decode(new Uint8Array(v.buffer, v.byteOffset, v.byteLength));
      let idx;
      while ((idx = this.buffer.indexOf('\n')) >= 0) {
        const line = this.buffer.slice(0, idx).replace(/\r/g, '');
        this.buffer = this.buffer.slice(idx + 1);
        this._handleLine(line);
      }
      if (this.buffer.length > 500) this.buffer = '';
    }

    _onAccel (e) {
      const v = e.target.value;
      this.s.ax = v.getInt16(0, true);
      this.s.ay = v.getInt16(2, true);
      this.s.az = v.getInt16(4, true);
    }

    _handleLine (line) {
      const p = line.split(',');
      const n = (i) => Number(p[i]) || 0;
      if (p[0] === 't' && p.length >= 2) {
        this.s.touch = n(1);
      } else if (p[0] === 'g' && p.length >= 3) {
        const seq = n(1);
        if (this.lastGestureSeq !== null && seq !== this.lastGestureSeq) {
          this.gestureTime[n(2)] = Date.now();
        }
        this.lastGestureSeq = seq;
      } else if (p[0] === 'e' && p.length >= 5) {
        this.s.temp = n(1);
        if (n(2) >= 0) this.s.light = n(2);
        if (n(3) >= 0) this.s.sound = n(3);
        if (n(4) >= 0) this.s.heading = n(4);
      } else if (p[0] === 'w' && p.length >= 2) {
        this.pinMask = n(1);
        this.pinMaskKnown = true;
        this.maskWaiters.splice(0).forEach((r) => r());
      } else if (p[0] === 'r' && p.length >= 4) {
        const key = p[1] + p[2];
        this.pinValues[key] = n(3);
        if (this.pending[key]) {
          this.pending[key].resolve(n(3));
          delete this.pending[key];
        }
      }
    }

    // ---------- Είσοδος ----------

    _button (btn) {
      if (btn === 'A') return this.s.btnA;
      if (btn === 'B') return this.s.btnB;
      if (btn === 'AB') return this.s.btnA && this.s.btnB;
      if (btn === 'logo') return (this.s.touch & 1) !== 0;
      return false;
    }

    whenButton (args) { return this._button(args.BTN); }
    buttonPressed (args) { return this._button(args.BTN); }

    whenGesture (args) {
      const t = this.gestureTime[toNum(args.GESTURE)];
      return !!t && Date.now() - t < 150;
    }

    _pinTouched (pin) { return (this.s.touch & (2 << clamp(toNum(pin), 0, 2))) !== 0; }
    whenPinTouched (args) { return this._pinTouched(args.PIN); }
    pinTouched (args) { return this._pinTouched(args.PIN); }

    acceleration (args) {
      const { ax, ay, az } = this.s;
      if (args.AXIS === 'x') return ax;
      if (args.AXIS === 'y') return ay;
      if (args.AXIS === 'z') return az;
      return Math.round(Math.sqrt(ax * ax + ay * ay + az * az));
    }

    // Υπολογίζεται από την επιτάχυνση (έρχεται κάθε 20 ms)
    rotation (args) {
      const { ax, ay, az } = this.s;
      const deg = (r) => Math.round((r * 180) / Math.PI);
      if (args.ROT === 'roll') return deg(Math.atan2(ax, Math.sqrt(ay * ay + az * az)));
      return deg(Math.atan2(-ay, Math.sqrt(ax * ax + az * az)));
    }

    _ensureCompass () {
      if (!this.compassRequested) {
        this.compassRequested = true;
        this._sendLine('k,1');
      }
    }

    heading () {
      this._ensureCompass();
      return this.s.heading;
    }

    _ensureSound () {
      if (!this.soundRequested) {
        this.soundRequested = true;
        this._sendLine('u,1');
      }
    }

    _ensureLight () {
      if (!this.lightRequested) {
        this.lightRequested = true;
        this._sendLine('l,1');
      }
    }

    temperature () { return this.s.temp; }
    lightLevel () { this._ensureLight(); return this.s.light; }
    soundLevel () { this._ensureSound(); return this.s.sound; }

    whenSensor (args) {
      let v;
      switch (args.SENSOR) {
      case 'light': this._ensureLight(); v = this.s.light; break;
      case 'temp': v = this.s.temp; break;
      case 'heading': this._ensureCompass(); v = this.s.heading; break;
      default: this._ensureSound(); v = this.s.sound;
      }
      const ref = toNum(args.VALUE);
      return args.OP === '<' ? v < ref : v > ref;
    }

    // ---------- Οθόνη ----------

    showIcon (args) { return this._sendLine('i,' + clamp(Math.round(toNum(args.ICON)), 0, 39), 'display'); }
    showArrow (args) { return this._sendLine('w,' + clamp(Math.round(toNum(args.ARROW)), 0, 7), 'display'); }
    showText (args) { return this._sendLine('t,' + Scratch.Cast.toString(args.TEXT).slice(0, 100)); }

    _xy (args) {
      return clamp(Math.round(toNum(args.X)), 0, 4) + ',' + clamp(Math.round(toNum(args.Y)), 0, 4);
    }

    plot (args) { const xy = this._xy(args); return this._sendLine('p,' + xy + ',255', 'p' + xy); }
    unplot (args) { const xy = this._xy(args); return this._sendLine('p,' + xy + ',0', 'p' + xy); }
    clearScreen () { return this._sendLine('c', 'display'); }
    setBrightness (args) { return this._sendLine('b,' + clamp(Math.round(toNum(args.B)), 0, 255), 'brightness'); }

    // ---------- Μουσική ----------

    _tone (hz, sec) {
      const ms = clamp(Math.round(sec * 1000), 0, 10000);
      if (ms === 0) return Promise.resolve();
      this._sendLine('n,' + clamp(Math.round(hz), 20, 20000) + ',' + ms);
      return sleep(ms);
    }

    playNote (args) {
      const note = clamp(toNum(args.NOTE), 25, 125);
      return this._tone(440 * Math.pow(2, (note - 69) / 12), toNum(args.SEC));
    }

    playTone (args) { return this._tone(toNum(args.HZ), toNum(args.SEC)); }
    playMelody (args) { return this._sendLine('m,' + clamp(Math.round(toNum(args.MELODY)), 0, 19)); }
    playEffect (args) { return this._sendLine('x,' + clamp(Math.round(toNum(args.SOUND)), 0, 9)); }
    stopSounds () { return this._sendLine('z'); }
    setVolume (args) { return this._sendLine('v,' + clamp(Math.round(toNum(args.V)), 0, 255), 'volume'); }

    // ---------- Ακροδέκτες ----------

    _pin (v) {
      const n = Math.round(toNum(v));
      return [5, 11, 12].includes(n) ? 0 : clamp(n, 0, 16);
    }

    _unwatch (pin) { this.watched.delete(pin); }

    _watch (pin) {
      if (!this.watched.has(pin)) {
        this.watched.add(pin);
        this.pinMaskKnown = false;
        this._sendLine('j,' + pin);
      }
    }

    digitalWrite (args) {
      const pin = this._pin(args.PIN);
      this._unwatch(pin);
      return this._sendLine('d,' + pin + ',' + (toNum(args.V) ? 1 : 0), 'pin' + pin);
    }

    analogWrite (args) {
      const pin = this._pin(args.PIN);
      this._unwatch(pin);
      return this._sendLine('a,' + pin + ',' + clamp(Math.round(toNum(args.V)), 0, 1023), 'pin' + pin);
    }

    servoWrite (args) {
      const pin = this._pin(args.PIN);
      this._unwatch(pin);
      return this._sendLine('o,' + pin + ',' + clamp(Math.round(toNum(args.ANGLE)), 0, 180), 'pin' + pin);
    }

    _read (kind, pinArg) {
      const pin = this._pin(pinArg);
      const key = kind + pin;
      if (!this.isConnected()) return this.pinValues[key] || 0;
      if (!this.pending[key]) {
        let resolve;
        const promise = new Promise((r) => { resolve = r; });
        this.pending[key] = { promise, resolve };
        this._sendLine('q,' + kind + ',' + pin);
        setTimeout(() => {
          if (this.pending[key]) {
            this.pending[key].resolve(null);
            delete this.pending[key];
          }
        }, 1000);
      }
      return this.pending[key].promise.then((v) => (v === null ? (this.pinValues[key] || 0) : v));
    }

    // Ψηφιακή ανάγνωση: ο ακροδέκτης «παρακολουθείται» και οι αλλαγές έρχονται αμέσως
    digitalRead (args) {
      const pin = this._pin(args.PIN);
      const bit = () => ((this.pinMask >> pin) & 1);
      if (!this.isConnected()) return 0;
      const fresh = !this.watched.has(pin);
      this._watch(pin);
      if (!fresh && this.pinMaskKnown) return bit();
      return new Promise((resolve) => {
        const timer = setTimeout(() => resolve(bit()), 500);
        this.maskWaiters.push(() => { clearTimeout(timer); resolve(bit()); });
      });
    }

    whenPinLevel (args) {
      if (!this.isConnected()) return false;
      const pin = this._pin(args.PIN);
      this._watch(pin);
      if (!this.pinMaskKnown) return false;
      return ((this.pinMask >> pin) & 1) === (toNum(args.LEVEL) ? 1 : 0);
    }

    analogRead (args) {
      const pin = this._pin(args.PIN);
      this._unwatch(pin);
      return this._read('a', pin);
    }

    setPull (args) {
      const pin = this._pin(args.PIN);
      return this._sendLine('h,' + pin + ',' + clamp(Math.round(toNum(args.MODE)), 0, 2));
    }

    setDisplay (args) { return this._sendLine('y,' + (toNum(args.STATE) ? 1 : 0), 'displayEnable'); }

    getStatus () { return this.status; }
    isConnectedBlock () { return this.isConnected(); }
  }

  Scratch.extensions.register(new MicrobitSTEM());
})(Scratch);
