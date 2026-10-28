# चित्रम् Studio Audio Assets

To play local MP3 / M4A / WAV music tracks that continue playing when the phone screen is locked:

1. Copy your audio files into this folder:
   e.g. `assets/audio/cold-mess.mp3`

2. Open `app.js` and set the `audioSrc` property in the `SESSIONS` playlist array:
   ```javascript
   {
     videoId: 'Il7Nv270zNk',
     audioSrc: 'assets/audio/cold-mess.mp3', // <-- Add your audio file here
     title: 'cold/mess',
     artist: 'Prateek Kuhad',
     ...
   }
   ```

When `audioSrc` is provided:
- High-fidelity native audio plays through the persistent HTML5 `<audio>` element.
- Music continues playing without interruption when your iPhone or Android screen is locked.
- The Lock Screen widget, Dynamic Island, and Control Center display track title, artist, album name, and artwork with full play, pause, next, and scrubber controls.
- When a track finishes, the next track automatically plays.

When `audioSrc` is empty (default):
- Video plays via the YouTube companion embed.
- Synthesized Web Audio Ambience (rain, vinyl crackle, loft hum) continues playing even when the screen is locked via the background audio anchor.

