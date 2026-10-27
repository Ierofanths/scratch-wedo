// Name: Nezha + PlanetX (Ελληνικά)
// ID: microbitnezha, microbitplanetx
// Description: Elecfreaks Nezha και PlanetX μέσω micro:bit. Φόρτωσέ το μαζί με το microbit-gr.js.
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
      bMap: 'αντιστοίχισε [V] από χαμηλό [FL] υψηλό [FH] σε χαμηλό [TL] υψηλό [TH]',
      bConstrain: 'περιόρισε [V] μεταξύ [LOW] και [HIGH]',
      bWhenLevel: 'όταν ο [PIN] γίνει [LEVEL]', bPull: 'όρισε αντίσταση [PIN] σε [MODE]', bDisplayOn: 'οθόνη LED [STATE]',
      dispOff: 'σβηστή οθόνη', high: 'υψηλός (1)', low: 'χαμηλός (0)',
      pullUp: 'pull-up', pullDown: 'pull-down', pullNone: 'καμία', on: 'ενεργή', off: 'ανενεργή',
      lNezha: 'Nezha', lPlanetX: 'PlanetX',
      bNzMotor: 'Nezha μοτέρ [M] ταχύτητα [SPEED] %', bNzStop: 'Nezha σταμάτα μοτέρ [M]', bNzStopAll: 'Nezha σταμάτα όλα τα μοτέρ',
      bNzServo: 'Nezha servo [S] [TYPE] σε γωνία [ANGLE]°', bNzServoSpeed: 'Nezha servo συνεχούς περιστροφής [S] ταχύτητα [SPEED] %',
      bUltra: 'αισθητήρας απόστασης [J] (cm)', bTrack: 'αισθητήρας γραμμής [J] είναι [STATE];',
      bWhenTrack: 'όταν ο αισθητήρας γραμμής [J] γίνει [STATE]', bTrackSide: 'αισθητήρας γραμμής [J] [SIDE] βλέπει γραμμή;',
      bCrash: 'αισθητήρας σύγκρουσης [J] πατημένος;', bWhenCrash: 'όταν πατηθεί ο αισθητήρας σύγκρουσης [J]',
      bSoil: 'υγρασία εδάφους [J] (0-100)', bTrimpot: 'ποτενσιόμετρο [J] (0-1023)',
      bLed: 'LED [J] [STATE] φωτεινότητα [BRIGHT] %', left: 'αριστερός', right: 'δεξιός', ledOn: 'άναψε', ledOff: 'σβήσε',
      bSim: 'προσομοίωση;', lSim: 'Προσομοιώσεις',
      bNzMirrorServo: 'αυτό το sprite δείχνει το servo [S]', bNzMirrorMotor: 'αυτό το sprite δείχνει το μοτέρ [M]',
      bNzServoAngle: 'γωνία servo [S]', bNzMotorSpeed: 'ταχύτητα μοτέρ [M]',
      bMirrorLed: 'αυτό το sprite δείχνει το LED [J]', bLedBright: 'φωτεινότητα LED [J]',
      bVirtTrim: 'αυτό το sprite είναι εικονικό ποτενσιόμετρο [J]',
      bVirtCrash: 'αυτό το sprite είναι εικονικός αισθητήρας σύγκρουσης [J]',
      bVirtDist: 'αυτό το sprite είναι εικονικός αισθητήρας απόστασης [J] προς [SPRITE]',
      bSetSim: 'όρισε εικονική τιμή [SENSOR] [J] σε [V]',
      simDist: 'απόσταση (cm)', simSoil: 'υγρασία εδάφους (0-100)', simTrim: 'ποτενσιόμετρο (0-1023)',
      simCrash: 'σύγκρουση (0/1)', simLine: 'γραμμή (0=●● 1=●◌ 2=◌● 3=◌◌)', noSprite: '(κανένα sprite)',
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
      bMap: 'map [V] from low [FL] high [FH] to low [TL] high [TH]',
      bConstrain: 'constrain [V] between [LOW] and [HIGH]',
      bWhenLevel: 'when [PIN] becomes [LEVEL]', bPull: 'set pull [PIN] to [MODE]', bDisplayOn: 'LED display [STATE]',
      dispOff: 'display off', high: 'high (1)', low: 'low (0)',
      pullUp: 'up', pullDown: 'down', pullNone: 'none', on: 'on', off: 'off',
      lNezha: 'Nezha', lPlanetX: 'PlanetX',
      bNzMotor: 'Nezha motor [M] speed [SPEED] %', bNzStop: 'Nezha stop motor [M]', bNzStopAll: 'Nezha stop all motors',
      bNzServo: 'Nezha servo [S] [TYPE] to [ANGLE]°', bNzServoSpeed: 'Nezha continuous servo [S] speed [SPEED] %',
      bUltra: 'ultrasonic [J] distance (cm)', bTrack: 'line-tracking [J] is [STATE]?',
      bWhenTrack: 'when line-tracking [J] becomes [STATE]', bTrackSide: 'line-tracking [J] [SIDE] sees line?',
      bCrash: 'crash sensor [J] pressed?', bWhenCrash: 'when crash sensor [J] pressed',
      bSoil: 'soil moisture [J] (0-100)', bTrimpot: 'trimpot [J] (0-1023)',
      bLed: 'LED [J] [STATE] brightness [BRIGHT] %', left: 'left', right: 'right', ledOn: 'on', ledOff: 'off',
      bSim: 'simulation mode?', lSim: 'Simulations',
      bNzMirrorServo: 'this sprite shows servo [S]', bNzMirrorMotor: 'this sprite shows motor [M]',
      bNzServoAngle: 'servo [S] angle', bNzMotorSpeed: 'motor [M] speed',
      bMirrorLed: 'this sprite shows LED [J]', bLedBright: 'LED [J] brightness',
      bVirtTrim: 'this sprite is a virtual trimpot [J]',
      bVirtCrash: 'this sprite is a virtual crash sensor [J]',
      bVirtDist: 'this sprite is a virtual distance sensor [J] towards [SPRITE]',
      bSetSim: 'set simulated [SENSOR] [J] to [V]',
      simDist: 'distance (cm)', simSoil: 'soil moisture (0-100)', simTrim: 'trimpot (0-1023)',
      simCrash: 'crash (0/1)', simLine: 'line (0=●● 1=●◌ 2=◌● 3=◌◌)', noSprite: '(no sprite)',
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

  // Ποιες κατηγορίες φορτώνει αυτό το αρχείο: main = micro:bit, nezha = Nezha + PlanetX, sim = Προσομοιώσεις
  const PARTS = 'nezha'.split(',');

  if (!Scratch.extensions.unsandboxed) {
    const ids = { main: ['microbitstem', 'micro:bit'], nezha: ['microbitnezha', 'Nezha'], sim: ['microbitsim', 'Sim'] };
    for (const p of PARTS) {
      Scratch.extensions.register({
        getInfo: () => ({
          id: ids[p][0], name: ids[p][1],
          color1: '#0FBD8C', color2: '#0DA57A', color3: '#0B8E69',
          blocks: [{ blockType: Scratch.BlockType.LABEL, text: T.sandbox }]
        })
      });
    }
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
  const toStr = (v) => Scratch.Cast.toString(v);
  const menuItems = (arr) => arr.map((text, i) => ({ text, value: String(i) }));

  const shade = (hex, f) => {
    const n = parseInt(hex.slice(1), 16);
    const c = (v) => Math.round(v * f).toString(16).padStart(2, '0');
    return '#' + c((n >> 16) & 255) + c((n >> 8) & 255) + c(n & 255);
  };
  const mc = (hex) => ({ color1: hex, color2: shade(hex, 0.85), color3: shade(hex, 0.7) });
  const MC = {
    basic: mc('#1E90FF'), input: mc('#D400D4'), music: mc('#E63022'),
    led: mc('#5C2D91'), pins: mc('#B22222'), bluetooth: mc('#007EF4')
  };
  const MB_BLOCK_COLORS = {};
  const assign = (cat, ops) => ops.forEach((op) => { MB_BLOCK_COLORS[op] = MC[cat]; });
  assign('bluetooth', ['getStatus', 'isConnectedBlock']);
  assign('input', ['whenButton', 'buttonPressed', 'whenGesture', 'whenPinTouched', 'pinTouched', 'acceleration',
    'rotation', 'heading', 'temperature', 'lightLevel', 'soundLevel', 'whenSensor']);
  assign('basic', ['showIcon', 'showArrow', 'showText', 'clearScreen']);
  assign('led', ['plot', 'unplot', 'setBrightness', 'setDisplay']);
  assign('music', ['playNote', 'playTone', 'playMelody', 'playEffect', 'stopSounds', 'setVolume']);
  assign('pins', ['digitalWrite', 'analogWrite', 'servoWrite', 'digitalRead', 'whenPinLevel', 'analogRead', 'setPull',
    'mapValue', 'constrainValue']);

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

      this.nezhaUsed = false;
      // Τελευταίες τιμές εξόδων (για τα sprites-καθρέφτες) και εικονικές τιμές αισθητήρων
      this.nz = {
        speed: [0, 0, 0, 0, 0], servo: [0, 90, 90, 90, 90], servoMode: ['', 'angle', 'angle', 'angle', 'angle'],
        servoSpeed: [0, 0, 0, 0, 0]
      };
      this.ledState = [0, 0, 0, 0];
      this.sim = { dist: [100, 100, 100, 100], soil: [50, 50], trim: [512, 512], crash: [false, false, false, false], line: [3, 3, 3, 3] };
      this.mirrors = new Map();
      this.mirrorRaf = null;
      this.lastTick = 0;
      this.lastDown = false;
      this._mirrorLoop = this._mirrorLoop.bind(this);
      vm.runtime.on('PROJECT_STOP_ALL', () => {
        for (let m = 1; m <= 4; m++) {
          this.nz.speed[m] = 0;
          this.nz.servoSpeed[m] = 0;
        }
        if (!this.isConnected()) return;
        this._sendLine('z');
        if (this.nezhaUsed) for (let m = 1; m <= 4; m++) this._sendLine('N,' + m + ',0', 'nzm' + m);
      });
    }

    // Χρώματα ίδια με τις κατηγορίες του MakeCode (pxt-microbit)
    getInfo () {
      const info = this._baseInfo();
      for (const b of info.blocks) {
        if (b.opcode && MB_BLOCK_COLORS[b.opcode]) Object.assign(b, MB_BLOCK_COLORS[b.opcode]);
      }
      return info;
    }

    _baseInfo () {
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
            opcode: 'mapValue', blockType: Scratch.BlockType.REPORTER, text: T.bMap,
            arguments: {
              V: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 },
              FL: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 },
              FH: { type: Scratch.ArgumentType.NUMBER, defaultValue: 1023 },
              TL: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 },
              TH: { type: Scratch.ArgumentType.NUMBER, defaultValue: 180 }
            }
          },
          {
            opcode: 'constrainValue', blockType: Scratch.BlockType.REPORTER, text: T.bConstrain,
            arguments: {
              V: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 },
              LOW: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 },
              HIGH: { type: Scratch.ArgumentType.NUMBER, defaultValue: 180 }
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
          icon: { acceptReporters: false, items: menuItems(T.icons) },
          arrow: { acceptReporters: false, items: menuItems(T.arrows) },
          melody: { acceptReporters: false, items: menuItems(T.melodies) },
          sound: { acceptReporters: false, items: menuItems(T.sounds) },
          note: {
            acceptReporters: false,
            items: ['60', '62', '64', '65', '67', '69', '71', '72'].map((v, i) => ({ text: T.notes[i], value: v }))
          },
          onoff: { acceptReporters: false, items: ['0', '1'] },
          ioPin: {
            acceptReporters: false,
            items: [0, 1, 2, 8, 13, 14, 15, 16].map((n) => ({ text: 'P' + n, value: String(n) })).concat(
              [3, 4, 6, 7, 9, 10].map((n) => ({ text: `P${n} (${T.dispOff})`, value: String(n) })))
          },
          analogPin: {
            acceptReporters: false,
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

    // Ίδιο με το «map» του MakeCode: γραμμική αντιστοίχιση χωρίς περιορισμό
    mapValue (args) {
      const v = toNum(args.V);
      const fl = toNum(args.FL);
      const fh = toNum(args.FH);
      const tl = toNum(args.TL);
      const th = toNum(args.TH);
      if (fh === fl) return tl;
      return ((v - fl) * (th - tl)) / (fh - fl) + tl;
    }

    constrainValue (args) {
      const lo = toNum(args.LOW);
      const hi = toNum(args.HIGH);
      return clamp(toNum(args.V), Math.min(lo, hi), Math.max(lo, hi));
    }

    setDisplay (args) { return this._sendLine('y,' + (toNum(args.STATE) ? 1 : 0), 'displayEnable'); }

    // ---------- Nezha ----------

    _nzIdx (v) { return clamp(Math.round(toNum(v)), 1, 4); }

    nzMotor (args) {
      this.nezhaUsed = true;
      const m = this._nzIdx(args.M);
      const speed = clamp(Math.round(toNum(args.SPEED)), -100, 100);
      this.nz.speed[m] = speed;
      return this._sendLine('N,' + m + ',' + speed, 'nzm' + m);
    }

    nzStop (args) {
      const m = this._nzIdx(args.M);
      this.nz.speed[m] = 0;
      return this._sendLine('N,' + m + ',0', 'nzm' + m);
    }

    nzStopAll () {
      for (let m = 1; m <= 4; m++) {
        this.nz.speed[m] = 0;
        this._sendLine('N,' + m + ',0', 'nzm' + m);
      }
    }

    nzServo (args) {
      const sv = this._nzIdx(args.S);
      const range = toNum(args.TYPE) || 180;
      const angle = clamp(toNum(args.ANGLE), 0, range);
      this.nz.servo[sv] = angle;
      this.nz.servoMode[sv] = 'angle';
      return this._sendLine('S,' + sv + ',' + Math.round((angle * 180) / range), 'nzs' + sv);
    }

    nzServoSpeed (args) {
      const sv = this._nzIdx(args.S);
      const speed = clamp(toNum(args.SPEED), -100, 100);
      this.nz.servoSpeed[sv] = speed;
      this.nz.servoMode[sv] = 'speed';
      return this._sendLine('S,' + sv + ',' + Math.round(((speed + 100) * 180) / 200), 'nzs' + sv);
    }

    // ---------- PlanetX (θύρες J1–J4) ----------

    _port (v, max) { return clamp(Math.round(toNum(v)), 0, max); }

    // Παρακολούθηση ακροδέκτη με pull-up (για αισθητήρες γραμμής και σύγκρουσης)
    _watchPullUp (pin) {
      if (!this.watched.has(pin)) {
        this._sendLine('h,' + pin + ',1');
        this._watch(pin);
      }
    }

    _bit (pin) { return (this.pinMask >> pin) & 1; }

    pxUltrasonic (args) {
      const port = this._port(args.J, 3);
      if (!this.isConnected()) return this.sim.dist[port];
      [[1, 8], [2, 12], [13, 14], [15, 16]][port].forEach((p) => this._unwatch(p));
      return this._read('u', port);
    }

    _trackState (args) {
      const port = this._port(args.J, 3);
      const [l, r] = [[1, 8], [2, 12], [13, 14], [15, 16]][port];
      this._watchPullUp(l);
      this._watchPullUp(r);
      if (!this.pinMaskKnown) return -1;
      return this._bit(l) * 2 + this._bit(r); // 0 = ● ●, 1 = ● ◌, 2 = ◌ ●, 3 = ◌ ◌
    }

    pxTrack (args) {
      if (!this.isConnected()) return this.sim.line[this._port(args.J, 3)] === toNum(args.STATE);
      return this._trackState(args) === toNum(args.STATE);
    }

    pxWhenTrack (args) { return this.pxTrack(args); }

    pxTrackSide (args) {
      const st = this.isConnected() ? this._trackState(args) : this.sim.line[this._port(args.J, 3)];
      if (st < 0) return false;
      return args.SIDE === 'r' ? (st & 1) === 0 : (st & 2) === 0;
    }

    pxCrash (args) {
      if (!this.isConnected()) return this.sim.crash[this._port(args.J, 3)];
      const pin = [8, 12, 14, 16][this._port(args.J, 3)];
      this._watchPullUp(pin);
      return this.pinMaskKnown && this._bit(pin) === 0;
    }

    pxWhenCrash (args) { return this.pxCrash(args); }

    pxSoil (args) {
      if (!this.isConnected()) return this.sim.soil[this._port(args.J, 1)];
      const pin = this._port(args.J, 1) + 1; // J1 = P1, J2 = P2
      this._unwatch(pin);
      return Promise.resolve(this._read('a', pin)).then((v) => Math.round(100 - (toNum(v) * 100) / 1023));
    }

    pxTrimpot (args) {
      if (!this.isConnected()) return this.sim.trim[this._port(args.J, 1)];
      const pin = this._port(args.J, 1) + 1;
      this._unwatch(pin);
      return this._read('a', pin);
    }

    pxLed (args) {
      const port = this._port(args.J, 3);
      const pin = [1, 2, 13, 15][port];
      this.ledState[port] = toNum(args.STATE) ? clamp(Math.round(toNum(args.BRIGHT)), 0, 100) : 0;
      this._unwatch(pin);
      const v = toNum(args.STATE) ? Math.round((clamp(toNum(args.BRIGHT), 0, 100) * 1023) / 100) : 0;
      return this._sendLine('a,' + pin + ',' + v, 'pin' + pin);
    }

    // ---------- Τιμές εξόδων, sprites-καθρέφτες και εικονικοί αισθητήρες ----------

    isSimulation () { return !this.isConnected(); }
    nzServoAngle (args) { return this.nz.servo[this._nzIdx(args.S)]; }
    nzMotorSpeed (args) { return this.nz.speed[this._nzIdx(args.M)]; }
    pxLedBright (args) { return this.ledState[this._port(args.J, 3)]; }

    _register (util, entry) {
      const t = util && util.target;
      if (!t || t.isStage) return;
      const old = this.mirrors.get(t.id);
      entry.phase = old && old.kind === entry.kind ? old.phase : 0;
      entry.home = { x: t.x, y: t.y };
      entry.pressed = false;
      this.mirrors.set(t.id, entry);
      if (!this.mirrorRaf) this.mirrorRaf = requestAnimationFrame(this._mirrorLoop);
    }

    nzMirrorServo (args, util) { this._register(util, { kind: 'servo', idx: this._nzIdx(args.S) }); }
    nzMirrorMotor (args, util) { this._register(util, { kind: 'motor', idx: this._nzIdx(args.M) }); }
    pxMirrorLed (args, util) { this._register(util, { kind: 'led', idx: this._port(args.J, 3) }); }
    pxVirtTrim (args, util) { this._register(util, { kind: 'trim', idx: this._port(args.J, 1) }); }
    pxVirtCrash (args, util) { this._register(util, { kind: 'crash', idx: this._port(args.J, 3) }); }
    pxVirtDist (args, util) {
      this._register(util, { kind: 'dist', idx: this._port(args.J, 3), other: toStr(args.SPRITE) });
    }

    pxSetSim (args) {
      const v = toNum(args.V);
      switch (args.SENSOR) {
      case 'dist': this.sim.dist[this._port(args.J, 3)] = clamp(Math.round(v), 0, 430); break;
      case 'soil': this.sim.soil[this._port(args.J, 1)] = clamp(Math.round(v), 0, 100); break;
      case 'trim': this.sim.trim[this._port(args.J, 1)] = clamp(Math.round(v), 0, 1023); break;
      case 'crash': this.sim.crash[this._port(args.J, 3)] = v !== 0; break;
      case 'line': this.sim.line[this._port(args.J, 3)] = clamp(Math.round(v), 0, 3); break;
      }
    }

    spriteMenu () {
      const names = vm.runtime.targets.filter((t) => t.isOriginal && !t.isStage).map((t) => t.getName());
      return names.length ? names : [{ text: T.noSprite, value: '' }];
    }

    _costume (t, name) {
      const i = t.getCostumeIndexByName(name);
      if (i >= 0 && t.currentCostume !== i) t.setCostume(i);
      return i >= 0;
    }

    // Πατήθηκε το ποντίκι πάνω στο sprite; (μένει πατημένο μέχρι να αφεθεί)
    _press (t, m, down) {
      if (down && !this.lastDown && t.isTouchingObject('_mouse_')) {
        m.pressed = true;
        m.home = { x: t.x, y: t.y };
      }
      if (m.pressed && !down) {
        m.pressed = false;
        t.setXY(m.home.x, m.home.y); // στον editor το sprite μπορεί να μετακινήθηκε με το σύρσιμο
      }
      return m.pressed;
    }

    _mirrorLoop (now) {
      this.mirrorRaf = null;
      const dt = this.lastTick ? Math.min(0.1, (now - this.lastTick) / 1000) : 0;
      this.lastTick = now;
      const rt = vm.runtime;
      const mouse = rt.ioDevices && rt.ioDevices.mouse;
      const down = mouse ? mouse.getIsDown() : false;
      for (const [id, m] of this.mirrors) {
        const t = rt.getTargetById(id);
        if (!t) {
          this.mirrors.delete(id);
          continue;
        }
        try {
          this._mirrorOne(t, m, dt, down, mouse);
        } catch (e) {
          console.warn('mirror', e);
        }
      }
      this.lastDown = down;
      if (this.mirrors.size) this.mirrorRaf = requestAnimationFrame(this._mirrorLoop);
      else this.lastTick = 0;
    }

    _mirrorOne (t, m, dt, down, mouse) {
      switch (m.kind) {
      case 'servo': {
        let angle;
        if (this.nz.servoMode[m.idx] === 'speed') {
          m.phase -= this.nz.servoSpeed[m.idx] * 3.6 * dt;
          angle = m.phase;
        } else {
          angle = this.nz.servo[m.idx];
        }
        const name = String((((Math.round(angle / 5) * 5) % 360) + 360) % 360);
        if (!this._costume(t, name)) t.setDirection(90 - angle);
        break;
      }
      case 'motor': {
        m.phase += this.nz.speed[m.idx] * 3.6 * dt; // 100 % = μία στροφή το δευτερόλεπτο
        t.setDirection(90 + (m.phase % 360));
        break;
      }
      case 'led': {
        const b = this.ledState[m.idx];
        if (this._costume(t, 'b' + Math.round(b / 10) * 10)) break; // στολές b0, b10 … b100
        if (b > 0) {
          this._costume(t, 'on');
          t.setEffect('ghost', Math.round((100 - b) * 0.7));
        } else {
          if (!this._costume(t, 'off')) t.setEffect('ghost', 70);
          else t.setEffect('ghost', 0);
        }
        break;
      }
      case 'trim': {
        if (this.isConnected()) {
          // Με συνδεδεμένο micro:bit: το sprite ακολουθεί το πραγματικό ποτενσιόμετρο (≈10 αναγνώσεις/s)
          const now = performance.now();
          if (!m.reading && now - (m.lastRead || 0) > 100) {
            m.reading = true;
            m.lastRead = now;
            Promise.resolve(this._read('a', m.idx + 1)).then((v) => {
              m.real = toNum(v);
              m.reading = false;
            });
          }
          if (m.real !== undefined) t.setDirection((m.real / 1023) * 270 - 135);
          break;
        }
        if (this._press(t, m, down) && mouse) {
          const dx = mouse.getScratchX() - m.home.x;
          const dy = mouse.getScratchY() - m.home.y;
          if (dx * dx + dy * dy > 4) {
            const dir = clamp((Math.atan2(dx, dy) * 180) / Math.PI, -135, 135);
            this.sim.trim[m.idx] = Math.round(((dir + 135) / 270) * 1023);
          }
        }
        t.setDirection((this.sim.trim[m.idx] / 1023) * 270 - 135);
        break;
      }
      case 'crash': {
        const pressedByMouse = this._press(t, m, down);
        let pressed;
        if (this.isConnected()) {
          const pin = [8, 12, 14, 16][m.idx];
          pressed = this.watched.has(pin) && this.pinMaskKnown && this._bit(pin) === 0;
        } else {
          this.sim.crash[m.idx] = pressedByMouse;
          pressed = pressedByMouse;
        }
        this._costume(t, pressed ? 'pressed' : 'released');
        break;
      }
      case 'dist': {
        const other = m.other ? vm.runtime.getSpriteTargetByName(m.other) : null;
        if (other && !this.isConnected()) {
          this.sim.dist[m.idx] = clamp(Math.round(Math.hypot(other.x - t.x, other.y - t.y)), 0, 430);
        }
        break;
      }
      }
    }

    getStatus () { return this.status; }
    isConnectedBlock () { return this.isConnected(); }
  }


  // ---------- Ξεχωριστές κατηγορίες: Nezha και PlanetX (μοιράζονται τη σύνδεση του micro:bit) ----------
  const COL_RED = { color1: '#FF0000', color2: '#D90000', color3: '#B30000' };
  const COL_YELLOW = { color1: '#FFCE1B', color2: '#E0B000', color3: '#B88F00' };
  const COL_ORANGE = { color1: '#F94D00', color2: '#D44100', color3: '#AD3500' };

  const subMenus = () => ({
          nzMotor: { acceptReporters: true, items: ['1', '2', '3', '4'].map((v) => ({ text: 'M' + v, value: v })) },
          nzServo: { acceptReporters: true, items: ['1', '2', '3', '4'].map((v) => ({ text: 'S' + v, value: v })) },
          nzMotorF: { acceptReporters: false, items: ['1', '2', '3', '4'].map((v) => ({ text: 'M' + v, value: v })) },
          nzServoF: { acceptReporters: false, items: ['1', '2', '3', '4'].map((v) => ({ text: 'S' + v, value: v })) },
          sprites: { acceptReporters: false, items: 'spriteMenu' },
          simSensor: {
            acceptReporters: false,
            items: [
              { text: T.simDist, value: 'dist' }, { text: T.simSoil, value: 'soil' }, { text: T.simTrim, value: 'trim' },
              { text: T.simCrash, value: 'crash' }, { text: T.simLine, value: 'line' }
            ]
          },
          nzServoType: { acceptReporters: false, items: ['180', '270', '360'].map((v) => ({ text: v + '°', value: v })) },
          portJ4: { acceptReporters: false, items: ['J1', 'J2', 'J3', 'J4'].map((t, i) => ({ text: t, value: String(i) })) },
          portJ2: { acceptReporters: false, items: ['J1', 'J2'].map((t, i) => ({ text: t, value: String(i) })) },
          trackState: {
            acceptReporters: false,
            items: [
              { text: '● ●', value: '0' }, { text: '● ◌', value: '1' },
              { text: '◌ ●', value: '2' }, { text: '◌ ◌', value: '3' }
            ]
          },
          side: { acceptReporters: false, items: [{ text: T.left, value: 'l' }, { text: T.right, value: 'r' }] },
          ledState: { acceptReporters: false, items: [{ text: T.ledOn, value: '1' }, { text: T.ledOff, value: '0' }] }
  });

  const delegate = (ext, main, opcodes) => {
    for (const op of opcodes) ext[op] = (args, util) => main[op](args, util);
    return ext;
  };

  // Μία κοινή σύνδεση για όλα τα αρχεία (micro:bit, Nezha/PlanetX, Προσομοιώσεις)
  const microbit = globalThis.__stemMicrobit || (globalThis.__stemMicrobit = new MicrobitSTEM());
  if (PARTS.includes('main')) Scratch.extensions.register(microbit);

  if (PARTS.includes('nezha')) Scratch.extensions.register(delegate({
    getInfo: () => ({
      id: 'microbitnezha',
      name: 'Nezha',
      color1: '#FF0000',
      color2: '#D90000',
      color3: '#B30000',
      blocks: [
          {
            opcode: 'nzMotor', ...COL_RED, blockType: Scratch.BlockType.COMMAND, text: T.bNzMotor,
            arguments: {
              M: { type: Scratch.ArgumentType.STRING, menu: 'nzMotor', defaultValue: '1' },
              SPEED: { type: Scratch.ArgumentType.NUMBER, defaultValue: 50 }
            }
          },
          {
            opcode: 'nzStop', ...COL_RED, blockType: Scratch.BlockType.COMMAND, text: T.bNzStop,
            arguments: { M: { type: Scratch.ArgumentType.STRING, menu: 'nzMotor', defaultValue: '1' } }
          },
          { opcode: 'nzStopAll', ...COL_RED, blockType: Scratch.BlockType.COMMAND, text: T.bNzStopAll },
          {
            opcode: 'nzServo', ...COL_RED, blockType: Scratch.BlockType.COMMAND, text: T.bNzServo,
            arguments: {
              S: { type: Scratch.ArgumentType.STRING, menu: 'nzServo', defaultValue: '1' },
              TYPE: { type: Scratch.ArgumentType.STRING, menu: 'nzServoType', defaultValue: '180' },
              ANGLE: { type: Scratch.ArgumentType.NUMBER, defaultValue: 90 }
            }
          },
          {
            opcode: 'nzServoSpeed', ...COL_RED, blockType: Scratch.BlockType.COMMAND, text: T.bNzServoSpeed,
            arguments: {
              S: { type: Scratch.ArgumentType.STRING, menu: 'nzServo', defaultValue: '1' },
              SPEED: { type: Scratch.ArgumentType.NUMBER, defaultValue: 50 }
            }
          }
      ],
      menus: subMenus()
    })
  }, microbit, ['nzMotor', 'nzStop', 'nzStopAll', 'nzServo', 'nzServoSpeed']));

  if (PARTS.includes('nezha')) Scratch.extensions.register(delegate({
    getInfo: () => ({
      id: 'microbitplanetx',
      name: 'PlanetX',
      color1: '#00FFFF',
      color2: '#00D6D6',
      color3: '#00ADAD',
      blocks: [
          {
            opcode: 'pxUltrasonic', ...COL_ORANGE, blockType: Scratch.BlockType.REPORTER, text: T.bUltra,
            arguments: { J: { type: Scratch.ArgumentType.STRING, menu: 'portJ4', defaultValue: '0' } }
          },
          {
            opcode: 'pxTrack', ...COL_ORANGE, blockType: Scratch.BlockType.BOOLEAN, text: T.bTrack,
            arguments: {
              J: { type: Scratch.ArgumentType.STRING, menu: 'portJ4', defaultValue: '0' },
              STATE: { type: Scratch.ArgumentType.STRING, menu: 'trackState', defaultValue: '0' }
            }
          },
          {
            opcode: 'pxWhenTrack', ...COL_ORANGE, blockType: Scratch.BlockType.HAT, text: T.bWhenTrack,
            arguments: {
              J: { type: Scratch.ArgumentType.STRING, menu: 'portJ4', defaultValue: '0' },
              STATE: { type: Scratch.ArgumentType.STRING, menu: 'trackState', defaultValue: '0' }
            }
          },
          {
            opcode: 'pxTrackSide', ...COL_ORANGE, blockType: Scratch.BlockType.BOOLEAN, text: T.bTrackSide,
            arguments: {
              J: { type: Scratch.ArgumentType.STRING, menu: 'portJ4', defaultValue: '0' },
              SIDE: { type: Scratch.ArgumentType.STRING, menu: 'side', defaultValue: 'l' }
            }
          },
          {
            opcode: 'pxCrash', ...COL_ORANGE, blockType: Scratch.BlockType.BOOLEAN, text: T.bCrash,
            arguments: { J: { type: Scratch.ArgumentType.STRING, menu: 'portJ4', defaultValue: '0' } }
          },
          {
            opcode: 'pxWhenCrash', ...COL_ORANGE, blockType: Scratch.BlockType.HAT, text: T.bWhenCrash,
            arguments: { J: { type: Scratch.ArgumentType.STRING, menu: 'portJ4', defaultValue: '0' } }
          },
          {
            opcode: 'pxSoil', ...COL_YELLOW, blockType: Scratch.BlockType.REPORTER, text: T.bSoil,
            arguments: { J: { type: Scratch.ArgumentType.STRING, menu: 'portJ2', defaultValue: '0' } }
          },
          {
            opcode: 'pxTrimpot', ...COL_YELLOW, blockType: Scratch.BlockType.REPORTER, text: T.bTrimpot,
            arguments: { J: { type: Scratch.ArgumentType.STRING, menu: 'portJ2', defaultValue: '0' } }
          },
          {
            opcode: 'pxLed', ...COL_ORANGE, blockType: Scratch.BlockType.COMMAND, text: T.bLed,
            arguments: {
              J: { type: Scratch.ArgumentType.STRING, menu: 'portJ4', defaultValue: '0' },
              STATE: { type: Scratch.ArgumentType.STRING, menu: 'ledState', defaultValue: '1' },
              BRIGHT: { type: Scratch.ArgumentType.NUMBER, defaultValue: 100 }
            }
          }
      ],
      menus: subMenus()
    })
  }, microbit, ['pxUltrasonic', 'pxTrack', 'pxWhenTrack', 'pxTrackSide', 'pxCrash', 'pxWhenCrash',
    'pxSoil', 'pxTrimpot', 'pxLed']));
  if (PARTS.includes('sim')) Scratch.extensions.register(delegate({
    getInfo: () => ({
      id: 'microbitsim',
      name: T.lSim,
      color1: '#8A4FD8',
      color2: '#7443B8',
      color3: '#5E3696',
      blocks: [
          { opcode: 'isSimulation', ...MC.bluetooth, blockType: Scratch.BlockType.BOOLEAN, text: T.bSim },
          { blockType: Scratch.BlockType.LABEL, text: 'Nezha' },
          {
            opcode: 'nzMirrorServo', ...COL_RED, blockType: Scratch.BlockType.COMMAND, text: T.bNzMirrorServo,
            arguments: { S: { type: Scratch.ArgumentType.STRING, menu: 'nzServoF', defaultValue: '1' } }
          },
          {
            opcode: 'nzMirrorMotor', ...COL_RED, blockType: Scratch.BlockType.COMMAND, text: T.bNzMirrorMotor,
            arguments: { M: { type: Scratch.ArgumentType.STRING, menu: 'nzMotorF', defaultValue: '1' } }
          },
          {
            opcode: 'nzServoAngle', ...COL_RED, blockType: Scratch.BlockType.REPORTER, text: T.bNzServoAngle,
            arguments: { S: { type: Scratch.ArgumentType.STRING, menu: 'nzServoF', defaultValue: '1' } }
          },
          {
            opcode: 'nzMotorSpeed', ...COL_RED, blockType: Scratch.BlockType.REPORTER, text: T.bNzMotorSpeed,
            arguments: { M: { type: Scratch.ArgumentType.STRING, menu: 'nzMotorF', defaultValue: '1' } }
          },
          { blockType: Scratch.BlockType.LABEL, text: 'PlanetX' },
          {
            opcode: 'pxMirrorLed', ...COL_ORANGE, blockType: Scratch.BlockType.COMMAND, text: T.bMirrorLed,
            arguments: { J: { type: Scratch.ArgumentType.STRING, menu: 'portJ4', defaultValue: '0' } }
          },
          {
            opcode: 'pxLedBright', ...COL_ORANGE, blockType: Scratch.BlockType.REPORTER, text: T.bLedBright,
            arguments: { J: { type: Scratch.ArgumentType.STRING, menu: 'portJ4', defaultValue: '0' } }
          },
          {
            opcode: 'pxVirtTrim', ...COL_YELLOW, blockType: Scratch.BlockType.COMMAND, text: T.bVirtTrim,
            arguments: { J: { type: Scratch.ArgumentType.STRING, menu: 'portJ2', defaultValue: '0' } }
          },
          {
            opcode: 'pxVirtCrash', ...COL_ORANGE, blockType: Scratch.BlockType.COMMAND, text: T.bVirtCrash,
            arguments: { J: { type: Scratch.ArgumentType.STRING, menu: 'portJ4', defaultValue: '0' } }
          },
          {
            opcode: 'pxVirtDist', ...COL_ORANGE, blockType: Scratch.BlockType.COMMAND, text: T.bVirtDist,
            arguments: {
              J: { type: Scratch.ArgumentType.STRING, menu: 'portJ4', defaultValue: '0' },
              SPRITE: { type: Scratch.ArgumentType.STRING, menu: 'sprites' }
            }
          },
          {
            opcode: 'pxSetSim', ...COL_ORANGE, blockType: Scratch.BlockType.COMMAND, text: T.bSetSim,
            arguments: {
              SENSOR: { type: Scratch.ArgumentType.STRING, menu: 'simSensor', defaultValue: 'soil' },
              J: { type: Scratch.ArgumentType.STRING, menu: 'portJ4', defaultValue: '0' },
              V: { type: Scratch.ArgumentType.NUMBER, defaultValue: 50 }
            }
          }
      ],
      menus: subMenus()
    })
  }, microbit, ['isSimulation', 'nzMirrorServo', 'nzMirrorMotor', 'nzServoAngle', 'nzMotorSpeed',
    'pxMirrorLed', 'pxLedBright', 'pxVirtTrim', 'pxVirtCrash', 'pxVirtDist', 'pxSetSim', 'spriteMenu']));
})(Scratch);
