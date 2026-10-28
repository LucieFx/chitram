# चित्रम् Studio Audio Assets

चित्रम् (Chitram) includes 7 handcrafted, high-fidelity 44.1kHz stereo studio master tracks for the creative hours of the studio:

- `session-late-night.wav` — Late Night (12 AM – 5 AM IST)
- `session-dawn.wav` — Dawn Light (5 AM – 7 AM IST)
- `session-morning.wav` — Morning Sketch (7 AM – 12 PM IST)
- `session-afternoon.wav` — Afternoon Acrylics (12 PM – 4 PM IST)
- `session-golden-hour.wav` — Golden Hour (4 PM – 7 PM IST)
- `session-dusk.wav` — Dusk & Rain (7 PM – 9 PM IST)
- `session-night.wav` — Starry Night (9 PM – 12 AM IST)

## Features
- **Universal Mobile Playback**: 100% native HTML5 `<audio>` engine that plays immediately on iOS Safari (iPhone/iPad) and Android Chrome with loud, crystal-clear sound.
- **Lock Screen Persistence**: Integrated with `navigator.audioSession.type = 'playback'` and Apple WebKit standards so audio never pauses when your phone screen locks or turns off.
- **Continuous Infinite Loop**: Tracks and sessions automatically transition without pause or interruption.
- **Lock Screen Controls**: Media Session API provides lock screen / Dynamic Island / Control Center controls with track title, artist, album, and full scrubbing.

## Adding Custom MP3 Tracks
To play your own MP3 / M4A / WAV music:
1. Copy your audio files into this folder: e.g. `assets/audio/cold-mess.mp3`
2. In `app.js`, set `audioSrc` for any track in the session's playlist:
   ```javascript
   {
     videoId: 'Il7Nv270zNk',
     audioSrc: 'assets/audio/cold-mess.mp3',
     title: 'cold/mess',
     artist: 'Prateek Kuhad',
     ...
   }
   ```
If `audioSrc` is not specified for an individual track, it automatically plays the session's high-fidelity studio master track.
