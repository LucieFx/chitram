/**
 * चित्रम् • CHITRAM Audio Synthesizer (MP3 Engine)
 * Generates 7 high-fidelity 44.1kHz stereo studio master MP3 tracks (60 seconds each)
 * for the 7 creative sessions.
 * 
 * MP3 benefits for iOS Safari & Android:
 * 1. Highly compressed (~960 KB per minute): buffers 100% in memory within 200ms.
 * 2. Dedicated hardware decoding in low-power lock-screen mode.
 * 3. Never starves network or stalls on display lock.
 */

const fs = require('fs');
const path = require('path');

// Load LameJS from bundled all.js
const lameCode = fs.readFileSync(path.join(__dirname, '..', 'node_modules', 'lamejs', 'lame.all.js'), 'utf8');
const lameFactory = new Function(lameCode + '; return lamejs;');
const lamejs = lameFactory();

const SAMPLE_RATE = 44100;
const DURATION_SEC = 56; // 56 seconds (exact multiple of 4 chord cycles for seamless looping)
const TOTAL_SAMPLES = SAMPLE_RATE * DURATION_SEC;

const SESSIONS_DATA = [
  {
    filename: 'session-late-night.mp3',
    name: 'Late Night (12 AM - 5 AM)',
    // Dmaj7, F#m7, Bm9, Gmaj7 (Introspective warm piano & acoustic nylon picking)
    chords: [
      [146.83, 220.00, 293.66, 369.99, 440.00, 554.37], // Dmaj7
      [185.00, 220.00, 277.18, 369.99, 440.00, 554.37], // F#m7
      [123.47, 185.00, 246.94, 293.66, 369.99, 440.00], // Bm9
      [98.00,  146.83, 196.00, 246.94, 293.66, 369.99]  // Gmaj7
    ],
    pluckSpeed: 0.5,
    pluckDecay: 3.5,
    dronePitch: 73.42,
    droneMix: 0.28,
    shimmerFreq: 587.33
  },
  {
    filename: 'session-dawn.mp3',
    name: 'Dawn Light (5 AM - 7 AM)',
    // Cmaj9, Em7, Am7, Fmaj7 (Morning Raga Bhairav / Bilawal sacred ambience)
    chords: [
      [130.81, 196.00, 261.63, 329.63, 392.00, 493.88], // Cmaj9
      [164.81, 196.00, 246.94, 329.63, 392.00, 493.88], // Em7
      [110.00, 164.81, 220.00, 261.63, 329.63, 392.00], // Am7
      [87.31,  130.81, 174.61, 261.63, 329.63, 392.00]  // Fmaj7
    ],
    pluckSpeed: 0.6,
    pluckDecay: 4.2,
    dronePitch: 65.41,
    droneMix: 0.32,
    shimmerFreq: 523.25
  },
  {
    filename: 'session-morning.mp3',
    name: 'Morning Sketch (7 AM - 12 PM)',
    // G, D/F#, Em7, Cadd9 (Upbeat acoustic steel strumming)
    chords: [
      [98.00,  146.83, 196.00, 246.94, 293.66, 392.00], // G
      [92.50,  146.83, 220.00, 293.66, 369.99, 440.00], // D/F#
      [82.41,  123.47, 164.81, 246.94, 329.63, 392.00], // Em7
      [130.81, 196.00, 261.63, 293.66, 329.63, 392.00]  // Cadd9
    ],
    pluckSpeed: 0.35,
    pluckDecay: 4.8,
    dronePitch: 98.00,
    droneMix: 0.22,
    shimmerFreq: 783.99
  },
  {
    filename: 'session-afternoon.mp3',
    name: 'Afternoon Acrylics (12 PM - 4 PM)',
    // Fmaj7, Dm7, Gm7, C7 (Vintage 70s Kishore / Rafi melodic cadence)
    chords: [
      [87.31,  130.81, 174.61, 220.00, 261.63, 349.23], // Fmaj7
      [73.42,  110.00, 146.83, 220.00, 261.63, 349.23], // Dm7
      [98.00,  146.83, 196.00, 233.08, 293.66, 349.23], // Gm7
      [130.81, 164.81, 196.00, 233.08, 261.63, 329.63]  // C7
    ],
    pluckSpeed: 0.45,
    pluckDecay: 3.8,
    dronePitch: 87.31,
    droneMix: 0.24,
    shimmerFreq: 698.46
  },
  {
    filename: 'session-golden-hour.mp3',
    name: 'Golden Hour (4 PM - 7 PM)',
    // E, B/D#, C#m7, Aadd9 (Warm sunset indie acoustic fingerstyle)
    chords: [
      [82.41,  123.47, 164.81, 207.65, 246.94, 329.63], // E
      [77.78,  123.47, 185.00, 246.94, 311.13, 392.00], // B/D#
      [69.30,  110.00, 138.59, 164.81, 246.94, 329.63], // C#m7
      [110.00, 164.81, 220.00, 277.18, 329.63, 440.00]  // Aadd9
    ],
    pluckSpeed: 0.48,
    pluckDecay: 3.6,
    dronePitch: 82.41,
    droneMix: 0.26,
    shimmerFreq: 659.25
  },
  {
    filename: 'session-dusk.mp3',
    name: 'Dusk & Rain (7 PM - 9:30 PM)',
    // Am9, Fmaj7, Dm9, E7sus4 (Evocative Sufi dusk rain meditation)
    chords: [
      [110.00, 164.81, 220.00, 261.63, 329.63, 440.00], // Am9
      [87.31,  130.81, 174.61, 220.00, 261.63, 349.23], // Fmaj7
      [73.42,  110.00, 146.83, 220.00, 261.63, 329.63], // Dm9
      [82.41,  123.47, 164.81, 220.00, 246.94, 329.63]  // E7sus4
    ],
    pluckSpeed: 0.52,
    pluckDecay: 4.0,
    dronePitch: 55.00,
    droneMix: 0.30,
    shimmerFreq: 440.00
  },
  {
    filename: 'session-night.mp3',
    name: 'Starry Night (9:30 PM - 12 AM)',
    // Gm7, Ebmaj7, Bb, F (Deep midnight creative painting groove)
    chords: [
      [98.00,  146.83, 196.00, 233.08, 293.66, 392.00], // Gm7
      [77.78,  116.54, 155.56, 196.00, 233.08, 311.13], // Ebmaj7
      [116.54, 146.83, 174.61, 233.08, 293.66, 349.23], // Bb
      [87.31,  130.81, 174.61, 220.00, 261.63, 349.23]  // F
    ],
    pluckSpeed: 0.42,
    pluckDecay: 3.7,
    dronePitch: 98.00,
    droneMix: 0.25,
    shimmerFreq: 587.33
  }
];

function synthesizeSessionMp3(sessionConfig, outPath) {
  const numChords = sessionConfig.chords.length;
  const chordDuration = DURATION_SEC / numChords;

  const leftPCM = new Int16Array(TOTAL_SAMPLES);
  const rightPCM = new Int16Array(TOTAL_SAMPLES);

  const delaySamples = Math.floor(SAMPLE_RATE * 0.18);
  const delayLineL = new Float32Array(delaySamples);
  const delayLineR = new Float32Array(delaySamples);
  let delayIndex = 0;

  for (let i = 0; i < TOTAL_SAMPLES; i++) {
    const t = i / SAMPLE_RATE;
    const chordIndex = Math.floor(t / chordDuration) % numChords;
    const chord = sessionConfig.chords[chordIndex];
    const chordTime = t % chordDuration;

    let dryL = 0;
    let dryR = 0;

    // 1. Warm Drone
    const droneFreq = sessionConfig.dronePitch;
    const droneEnv = 0.85 + 0.15 * Math.sin(2 * Math.PI * 0.15 * t);
    const drone = (
      Math.sin(2 * Math.PI * droneFreq * t) * 0.65 +
      Math.sin(2 * Math.PI * droneFreq * 2 * t) * 0.25 +
      Math.sin(2 * Math.PI * droneFreq * 3 * t) * 0.10
    ) * sessionConfig.droneMix * droneEnv;
    dryL += drone * 0.95;
    dryR += drone * 1.05;

    // 2. Pluck Sequence
    const pluckSpeed = sessionConfig.pluckSpeed;
    const noteInBar = Math.floor(chordTime / pluckSpeed);
    const noteIdx = noteInBar % chord.length;
    const noteFreq = chord[noteIdx];
    const noteTime = chordTime % pluckSpeed;

    const attack = Math.min(1, noteTime * 120);
    const decay = Math.exp(-noteTime * sessionConfig.pluckDecay);
    const pluckEnv = attack * decay;

    const pluckSound = (
      Math.sin(2 * Math.PI * noteFreq * t) * 0.50 +
      Math.sin(2 * Math.PI * noteFreq * 2 * t) * 0.26 +
      Math.sin(2 * Math.PI * noteFreq * 3 * t) * 0.14 +
      Math.sin(2 * Math.PI * noteFreq * 4 * t) * 0.07 +
      Math.sin(2 * Math.PI * noteFreq * 5 * t) * 0.03
    ) * pluckEnv * 0.32;

    const pan = 0.3 + 0.4 * ((noteInBar % 3) / 2);
    dryL += pluckSound * (1 - pan);
    dryR += pluckSound * pan;

    // 3. Bass root
    if (chordTime < 2.2) {
      const bassFreq = chord[0];
      const bassEnv = Math.exp(-chordTime * 1.4);
      const bassNote = (
        Math.sin(2 * Math.PI * bassFreq * t) * 0.55 +
        Math.sin(2 * Math.PI * bassFreq * 2 * t) * 0.30
      ) * bassEnv * 0.25;
      dryL += bassNote * 0.6;
      dryR += bassNote * 0.6;
    }

    // 4. Overtones
    const shimmerMod = 0.5 + 0.5 * Math.sin(2 * Math.PI * 0.25 * t);
    const shimmer = Math.sin(2 * Math.PI * sessionConfig.shimmerFreq * t) * 0.035 * shimmerMod;
    dryL += shimmer * 0.7;
    dryR += shimmer * 0.3;

    // 5. Studio air
    const air = (Math.random() * 2 - 1) * 0.003;
    dryL += air;
    dryR += air;

    // 6. Acoustic room reflection
    const echoL = delayLineL[delayIndex];
    const echoR = delayLineR[delayIndex];
    delayLineL[delayIndex] = dryL + echoR * 0.22;
    delayLineR[delayIndex] = dryR + echoL * 0.22;
    delayIndex = (delayIndex + 1) % delaySamples;

    let outL = dryL * 0.85 + echoL * 0.25;
    let outR = dryR * 0.85 + echoR * 0.25;

    // Zero-crossing fade at edges for 100% click-free loop
    const boundaryFade = 0.06 * SAMPLE_RATE;
    if (i < boundaryFade) {
      const f = i / boundaryFade;
      outL *= f;
      outR *= f;
    } else if (i > TOTAL_SAMPLES - boundaryFade) {
      const f = (TOTAL_SAMPLES - i) / boundaryFade;
      outL *= f;
      outR *= f;
    }

    const finalL = Math.max(-0.95, Math.min(0.95, outL));
    const finalR = Math.max(-0.95, Math.min(0.95, outR));

    leftPCM[i] = Math.round(finalL * 32767);
    rightPCM[i] = Math.round(finalR * 32767);
  }

  // Encode to 128 kbps Stereo MP3
  const encoder = new lamejs.Mp3Encoder(2, SAMPLE_RATE, 128);
  const mp3Chunks = [];
  const chunkSize = 1152;

  for (let i = 0; i < TOTAL_SAMPLES; i += chunkSize) {
    const l = leftPCM.subarray(i, i + chunkSize);
    const r = rightPCM.subarray(i, i + chunkSize);
    const buf = encoder.encodeBuffer(l, r);
    if (buf.length > 0) mp3Chunks.push(Buffer.from(buf));
  }
  const endBuf = encoder.flush();
  if (endBuf.length > 0) mp3Chunks.push(Buffer.from(endBuf));

  const finalMp3 = Buffer.concat(mp3Chunks);
  fs.writeFileSync(outPath, finalMp3);
  console.log(`Generated MP3: ${path.basename(outPath)} (${(finalMp3.length / 1024).toFixed(1)} KB)`);
}

const outDir = path.join(__dirname, '..', 'assets', 'audio');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

console.log('Generating 7 High-Fidelity MP3 Session Audio Tracks...');
for (const session of SESSIONS_DATA) {
  const filePath = path.join(outDir, session.filename);
  synthesizeSessionMp3(session, filePath);
}
console.log('All 7 MP3 session tracks generated successfully!');

