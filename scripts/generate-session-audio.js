/**
 * चित्रम् • CHITRAM Audio Synthesizer
 * Generates 7 high-fidelity 44.1kHz 16-bit stereo studio master acoustic tracks
 * for the 7 creative sessions of the artist studio radio.
 */

const fs = require('fs');
const path = require('path');

const SAMPLE_RATE = 44100;
const DURATION_SEC = 28; // 28 seconds: loops cleanly in multiple of 4-beat bars
const TOTAL_SAMPLES = SAMPLE_RATE * DURATION_SEC;
const NUM_CHANNELS = 2; // Stereo
const BYTES_PER_SAMPLE = 2;
const BLOCK_ALIGN = NUM_CHANNELS * BYTES_PER_SAMPLE;
const DATA_SIZE = TOTAL_SAMPLES * BLOCK_ALIGN;

function createWavHeader(dataSize) {
  const header = Buffer.alloc(44);
  header.write('RIFF', 0);
  header.writeUInt32LE(36 + dataSize, 4);
  header.write('WAVE', 8);
  header.write('fmt ', 12);
  header.writeUInt32LE(16, 16); // PCM chunk size
  header.writeUInt16LE(1, 20);  // Format 1 = PCM
  header.writeUInt16LE(NUM_CHANNELS, 22);
  header.writeUInt32LE(SAMPLE_RATE, 24);
  header.writeUInt32LE(SAMPLE_RATE * BLOCK_ALIGN, 28);
  header.writeUInt16LE(BLOCK_ALIGN, 32);
  header.writeUInt16LE(16, 34); // Bits per sample
  header.write('data', 36);
  header.writeUInt32LE(dataSize, 40);
  return header;
}

// Session definitions with musical progressions and timbral settings
const SESSIONS_DATA = [
  {
    filename: 'session-late-night.wav',
    name: 'Late Night (12 AM - 5 AM)',
    tempo: 60, // BPM
    // Dmaj7, F#m7, Bm9, Gmaj7
    chords: [
      [146.83, 220.00, 293.66, 369.99, 440.00, 554.37], // Dmaj7
      [185.00, 220.00, 277.18, 369.99, 440.00, 554.37], // F#m7
      [123.47, 185.00, 246.94, 293.66, 369.99, 440.00], // Bm9
      [98.00,  146.83, 196.00, 246.94, 293.66, 369.99]  // Gmaj7
    ],
    pluckSpeed: 0.5,
    pluckDecay: 3.5,
    warmth: 0.85,
    dronePitch: 73.42, // Low D
    droneMix: 0.28,
    shimmerFreq: 587.33
  },
  {
    filename: 'session-dawn.wav',
    name: 'Dawn Light (5 AM - 7 AM)',
    tempo: 52,
    // Cmaj9, Em7, Am7, Fmaj7 (Morning Raga Bhairav / Bilawal resonance)
    chords: [
      [130.81, 196.00, 261.63, 329.63, 392.00, 493.88], // Cmaj9
      [164.81, 196.00, 246.94, 329.63, 392.00, 493.88], // Em7
      [110.00, 164.81, 220.00, 261.63, 329.63, 392.00], // Am7
      [87.31,  130.81, 174.61, 261.63, 329.63, 392.00]  // Fmaj7
    ],
    pluckSpeed: 0.6,
    pluckDecay: 4.2,
    warmth: 0.9,
    dronePitch: 65.41, // Low C Tanpura Root
    droneMix: 0.32,
    shimmerFreq: 523.25
  },
  {
    filename: 'session-morning.wav',
    name: 'Morning Sketch (7 AM - 12 PM)',
    tempo: 80,
    // G, D/F#, Em7, Cadd9 (Upbeat acoustic strum)
    chords: [
      [98.00,  146.83, 196.00, 246.94, 293.66, 392.00], // G
      [92.50,  146.83, 220.00, 293.66, 369.99, 440.00], // D/F#
      [82.41,  123.47, 164.81, 246.94, 329.63, 392.00], // Em7
      [130.81, 196.00, 261.63, 293.66, 329.63, 392.00]  // Cadd9
    ],
    pluckSpeed: 0.35,
    pluckDecay: 4.8,
    warmth: 0.75,
    dronePitch: 98.00, // G
    droneMix: 0.22,
    shimmerFreq: 783.99
  },
  {
    filename: 'session-afternoon.wav',
    name: 'Afternoon Acrylics (12 PM - 4 PM)',
    tempo: 70,
    // Fmaj7, Dm7, Gm7, C7 (Vintage 70s Kishore / Rafi melodic cadence)
    chords: [
      [87.31,  130.81, 174.61, 220.00, 261.63, 349.23], // Fmaj7
      [73.42,  110.00, 146.83, 220.00, 261.63, 349.23], // Dm7
      [98.00,  146.83, 196.00, 233.08, 293.66, 349.23], // Gm7
      [130.81, 164.81, 196.00, 233.08, 261.63, 329.63]  // C7
    ],
    pluckSpeed: 0.45,
    pluckDecay: 3.8,
    warmth: 0.8,
    dronePitch: 87.31, // F
    droneMix: 0.24,
    shimmerFreq: 698.46
  },
  {
    filename: 'session-golden-hour.wav',
    name: 'Golden Hour (4 PM - 7 PM)',
    tempo: 64,
    // E, B/D#, C#m7, Aadd9 (Warm sunset indie acoustic)
    chords: [
      [82.41,  123.47, 164.81, 207.65, 246.94, 329.63], // E
      [77.78,  123.47, 185.00, 246.94, 311.13, 392.00], // B/D#
      [69.30,  110.00, 138.59, 164.81, 246.94, 329.63], // C#m7
      [110.00, 164.81, 220.00, 277.18, 329.63, 440.00]  // Aadd9
    ],
    pluckSpeed: 0.48,
    pluckDecay: 3.6,
    warmth: 0.88,
    dronePitch: 82.41, // E
    droneMix: 0.26,
    shimmerFreq: 659.25
  },
  {
    filename: 'session-dusk.wav',
    name: 'Dusk & Rain (7 PM - 9:30 PM)',
    tempo: 56,
    // Am9, Fmaj7, Dm9, E7sus4 (Sufi dusk meditation)
    chords: [
      [110.00, 164.81, 220.00, 261.63, 329.63, 440.00], // Am9
      [87.31,  130.81, 174.61, 220.00, 261.63, 349.23], // Fmaj7
      [73.42,  110.00, 146.83, 220.00, 261.63, 329.63], // Dm9
      [82.41,  123.47, 164.81, 220.00, 246.94, 329.63]  // E7sus4
    ],
    pluckSpeed: 0.52,
    pluckDecay: 4.0,
    warmth: 0.92,
    dronePitch: 55.00, // Deep Low A
    droneMix: 0.30,
    shimmerFreq: 440.00
  },
  {
    filename: 'session-night.wav',
    name: 'Starry Night (9:30 PM - 12 AM)',
    tempo: 72,
    // Gm7, Ebmaj7, Bb, F (Deep midnight creative flow)
    chords: [
      [98.00,  146.83, 196.00, 233.08, 293.66, 392.00], // Gm7
      [77.78,  116.54, 155.56, 196.00, 233.08, 311.13], // Ebmaj7
      [116.54, 146.83, 174.61, 233.08, 293.66, 349.23], // Bb
      [87.31,  130.81, 174.61, 220.00, 261.63, 349.23]  // F
    ],
    pluckSpeed: 0.42,
    pluckDecay: 3.7,
    warmth: 0.84,
    dronePitch: 98.00, // G
    droneMix: 0.25,
    shimmerFreq: 587.33
  }
];

// Helper: Synthesize one session's stereo WAV file
function generateSessionWav(sessionConfig, outPath) {
  const wavHeader = createWavHeader(DATA_SIZE);
  const pcmBuffer = Buffer.alloc(DATA_SIZE);

  const numChords = sessionConfig.chords.length;
  const chordDuration = DURATION_SEC / numChords;

  // Simple stereo delay buffer for acoustic room ambience (reverb)
  const delaySamples = Math.floor(SAMPLE_RATE * 0.18); // 180ms room reflection
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

    // 1. Warm Acoustic Tanpura / Cello Drone
    const droneFreq = sessionConfig.dronePitch;
    const droneEnvelope = 0.85 + 0.15 * Math.sin(2 * Math.PI * 0.15 * t);
    const drone = (
      Math.sin(2 * Math.PI * droneFreq * t) * 0.65 +
      Math.sin(2 * Math.PI * droneFreq * 2 * t) * 0.25 +
      Math.sin(2 * Math.PI * droneFreq * 3 * t) * 0.10
    ) * sessionConfig.droneMix * droneEnvelope;
    dryL += drone * 0.95;
    dryR += drone * 1.05;

    // 2. Fingerpicked Acoustic Guitar & Piano Pluck Sequence
    const pluckSpeed = sessionConfig.pluckSpeed;
    const noteInBar = Math.floor(chordTime / pluckSpeed);
    const noteIdx = noteInBar % chord.length;
    const noteFreq = chord[noteIdx];
    const noteTime = chordTime % pluckSpeed;

    // Exponential pluck envelope with soft finger attack
    const attack = Math.min(1, noteTime * 120);
    const decay = Math.exp(-noteTime * sessionConfig.pluckDecay);
    const pluckEnvelope = attack * decay;

    // Acoustic instrument timbre (fundamental + natural harmonics)
    const pluckSound = (
      Math.sin(2 * Math.PI * noteFreq * t) * 0.50 +
      Math.sin(2 * Math.PI * noteFreq * 2 * t) * 0.26 +
      Math.sin(2 * Math.PI * noteFreq * 3 * t) * 0.14 +
      Math.sin(2 * Math.PI * noteFreq * 4 * t) * 0.07 +
      Math.sin(2 * Math.PI * noteFreq * 5 * t) * 0.03
    ) * pluckEnvelope * 0.32;

    // Natural stereo placement (alternating finger positions)
    const pan = 0.3 + 0.4 * ((noteInBar % 3) / 2); // 0.3 to 0.7
    dryL += pluckSound * (1 - pan);
    dryR += pluckSound * pan;

    // 3. Counter-Melodic Bass Note at Start of Each Chord
    if (chordTime < 2.0) {
      const bassFreq = chord[0];
      const bassEnv = Math.exp(-chordTime * 1.6);
      const bassNote = (
        Math.sin(2 * Math.PI * bassFreq * t) * 0.55 +
        Math.sin(2 * Math.PI * bassFreq * 2 * t) * 0.30
      ) * bassEnv * 0.25;
      dryL += bassNote * 0.6;
      dryR += bassNote * 0.6;
    }

    // 4. Subtle Meditative Harmonic Singing Bowl Overtones
    const shimmerMod = 0.5 + 0.5 * Math.sin(2 * Math.PI * 0.25 * t);
    const shimmer = Math.sin(2 * Math.PI * sessionConfig.shimmerFreq * t) * 0.035 * shimmerMod;
    dryL += shimmer * 0.7;
    dryR += shimmer * 0.3;

    // 5. Gentle Studio Air Warmth
    const air = (Math.random() * 2 - 1) * 0.004;
    dryL += air;
    dryR += air;

    // 6. Acoustic Studio Room Reflection (Reverb Feedback Loop)
    const echoL = delayLineL[delayIndex];
    const echoR = delayLineR[delayIndex];
    delayLineL[delayIndex] = dryL + echoR * 0.22;
    delayLineR[delayIndex] = dryR + echoL * 0.22;
    delayIndex = (delayIndex + 1) % delaySamples;

    // Master Mix: Dry + Wet Room Reflections
    let outL = dryL * 0.85 + echoL * 0.25;
    let outR = dryR * 0.85 + echoR * 0.25;

    // Smooth boundary envelope (fade in first 0.05s, fade out last 0.05s) to guarantee zero pop on loop
    const boundaryFade = 0.05 * SAMPLE_RATE;
    if (i < boundaryFade) {
      const factor = i / boundaryFade;
      outL *= factor;
      outR *= factor;
    } else if (i > TOTAL_SAMPLES - boundaryFade) {
      const factor = (TOTAL_SAMPLES - i) / boundaryFade;
      outL *= factor;
      outR *= factor;
    }

    // Soft limiter & 16-bit integer conversion
    const finalL = Math.max(-0.95, Math.min(0.95, outL));
    const finalR = Math.max(-0.95, Math.min(0.95, outR));

    pcmBuffer.writeInt16LE(Math.round(finalL * 32767), i * 4);
    pcmBuffer.writeInt16LE(Math.round(finalR * 32767), i * 4 + 2);
  }

  const completeWav = Buffer.concat([wavHeader, pcmBuffer]);
  fs.writeFileSync(outPath, completeWav);
  console.log(`Generated: ${path.basename(outPath)} (${(completeWav.length / (1024 * 1024)).toFixed(2)} MB)`);
}

const outDir = path.join(__dirname, '..', 'assets', 'audio');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

console.log('Generating Chitram Studio Master Audio Tracks...');
for (const session of SESSIONS_DATA) {
  const filePath = path.join(outDir, session.filename);
  generateSessionWav(session, filePath);
}
console.log('All 7 Studio Sessions generated successfully!');
