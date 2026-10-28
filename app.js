/**
 * चित्रम् • CHITRAM
 * The Artist's Studio Radio — Music for Drawing, Painting & Sketching
 */

// ==========================================================================
// 1. STUDIO SESSIONS & PLAYLIST ARCHIVE (For Drawing Artists)
// ==========================================================================
const SESSIONS = [
  {
    id: 'late-night',
    labelHi: 'देर रात',
    labelEn: 'Late Night',
    slot: '12:00 AM – 05:00 AM IST',
    startHour: 0,
    endHour: 5,
    tagline: 'Two brushes moving under the quiet hum of the studio lamp.',
    cue: '3 AM • City lights blinking outside, smudged colors, quiet melodies',
    image: 'assets/scenes/late-night.jpg',
    audioSrc: 'assets/audio/session-late-night.mp3',
    palette: ['#f2b451', '#426bb3', '#d96347', '#8e58bd', '#f7efe6'],
    playlist: [
      {
        videoId: 'Il7Nv270zNk',
        title: 'cold/mess',
        artist: 'Prateek Kuhad',
        album: 'cold/mess EP',
        year: 2018,
        composer: 'Prateek Kuhad',
        blurb: 'The modern anthem of late-night longing. Written on an acoustic piano with lines that feel like whispers exchanged in a quiet art loft at 3 AM.'
      },
      {
        videoId: 'sFMRqxCexDk',
        title: 'Choo Lo',
        artist: 'The Local Train',
        album: 'Aalas Ka Pedh',
        year: 2015,
        composer: 'The Local Train',
        blurb: 'A slow-burning Hindi rock ballad about holding on to moments slipping like wet pigment between fingers. Raman Negi’s raw vocals carry pure emotional honesty.'
      },
      {
        videoId: 'gJLVTKhTnog',
        title: 'Husn',
        artist: 'Anuv Jain',
        album: 'Single Release',
        year: 2023,
        composer: 'Anuv Jain',
        blurb: 'A tender acoustic meditation on loving someone without validation. Plucked strings and soft poetry that resonate through quiet studio corners.'
      },
      {
        videoId: '4sMdGz8rbcs',
        title: 'Iktara',
        artist: 'Kavita Seth, Amitabh Bhattacharya',
        album: 'Wake Up Sid',
        year: 2009,
        composer: 'Amit Trivedi',
        blurb: 'A Sufi-soaked reflection on quiet love blooming under the Mumbai rain. Kavita Seth’s rustic drone feels like warm tea warming cold hands at midnight.'
      },
      {
        videoId: 'dWqb-WqbGh8',
        title: 'O Sanam',
        artist: 'Lucky Ali',
        album: 'Sunoh',
        year: 1996,
        composer: 'Lucky Ali',
        blurb: 'The acoustic guitar strum that defined 90s Indian independence. Recorded with unhurried soul for roads and paintings under starry night skies.'
      }
    ]
  },
  {
    id: 'dawn',
    labelHi: 'भोर',
    labelEn: 'Dawn Light',
    slot: '05:00 AM – 07:00 AM IST',
    startHour: 5,
    endHour: 7,
    tagline: '5:30 AM. First light through mist. Sitting cross-legged with sketchpads.',
    cue: '5:30 AM • First purple rays through arches, coffee steam, quiet pencil lines',
    image: 'assets/scenes/dawn.jpg',
    audioSrc: 'assets/audio/session-dawn.mp3',
    palette: ['#e69885', '#b499db', '#8ab8d6', '#f3d5b5', '#ffffff'],
    playlist: [
      {
        videoId: 'T94PHkuydcw',
        title: 'Kun Faya Kun',
        artist: 'A.R. Rahman, Javed Ali, Mohit Chauhan',
        album: 'Rockstar',
        year: 2011,
        composer: 'A.R. Rahman',
        blurb: 'Recorded at the Nizamuddin Dargah. Rahman’s sacred masterpiece about divine creation, healing an unsettled soul as morning sun breaks through the windows.'
      },
      {
        videoId: 'dXdD1_AGBZg',
        title: 'Arziyan',
        artist: 'Javed Ali, Kailash Kher',
        album: 'Delhi-6',
        year: 2009,
        composer: 'A.R. Rahman',
        blurb: 'A morning prayer of surrender on the steps of Jama Masjid. The interplay between honeyed tone and rustic earthiness creates pure spiritual solace.'
      },
      {
        videoId: 'JJ5r5Z6G2Zo',
        title: 'Noor E Khuda',
        artist: 'Shankar Mahadevan, Shreya Ghoshal',
        album: 'My Name Is Khan',
        year: 2010,
        composer: 'Shankar-Ehsaan-Loy',
        blurb: 'A plea for light in times of darkness. Shreya Ghoshal’s alaap at dawn feels like early rays melting frost on a quiet easel.'
      },
      {
        videoId: 'OF688uk3Il0',
        title: 'Roobaroo',
        artist: 'A.R. Rahman, Naresh Iyer',
        album: 'Rang De Basanti',
        year: 2006,
        composer: 'A.R. Rahman',
        blurb: 'The sound of awakening and inner clarity. Acoustic guitar grooves paired with Rahman singing of illuminating horizons.'
      },
      {
        videoId: 'bw7bVpI5VcM',
        title: 'Love You Zindagi',
        artist: 'Jasleen Royal',
        album: 'Dear Zindagi',
        year: 2016,
        composer: 'Amit Trivedi',
        blurb: 'Simple, unpretentious joy. Jasleen’s sweet and breezy vocal feels like taking the first deep breath of crisp morning air before opening sketchpads.'
      }
    ]
  },
  {
    id: 'morning',
    labelHi: 'सुबह',
    labelEn: 'Morning Sketch',
    slot: '07:00 AM – 12:00 PM IST',
    startHour: 7,
    endHour: 12,
    tagline: 'Bright sunlight on monstera leaves. Laughter, charcoal dust, and fresh chai.',
    cue: 'Morning • Sunbeams on the portrait easel, fresh adrak chai, upbeat strumming',
    image: 'assets/scenes/morning.jpg',
    audioSrc: 'assets/audio/session-morning.mp3',
    palette: ['#e27b4b', '#48b888', '#f3a15b', '#3d789e', '#f7efe6'],
    playlist: [
      {
        videoId: 'hG7dg7dX4hg',
        title: 'Ilahi',
        artist: 'Arijit Singh',
        album: 'Yeh Jawaani Hai Deewani',
        year: 2013,
        composer: 'Pritam',
        blurb: 'The restless spirit of a wanderer packing a camera bag and running into the world. Infectious tempo, cheerful guitars, and infectious creative energy.'
      },
      {
        videoId: 'TRfosj3JvOo',
        title: 'Safarnama',
        artist: 'Lucky Ali',
        album: 'Tamasha',
        year: 2015,
        composer: 'A.R. Rahman',
        blurb: 'Finding your true creative voice after years of playing a character. Lucky Ali’s warm voice feels like an encouraging pat from an old friend.'
      },
      {
        videoId: '-3gQ6HIkRys',
        title: 'Phir Se Ud Chala',
        artist: 'Mohit Chauhan',
        album: 'Rockstar',
        year: 2011,
        composer: 'A.R. Rahman',
        blurb: 'Floating above the clouds with no destination in mind. Mohit Chauhan’s airy falsetto captures pure creative liberation.'
      },
      {
        videoId: 'kSRfhKWmiwQ',
        title: 'Khaabon Ke Parinday',
        artist: 'Alyssa Mendonsa, Mohit Chauhan',
        album: 'Zindagi Na Milegi Dobara',
        year: 2011,
        composer: 'Shankar-Ehsaan-Loy',
        blurb: 'Driving with the top down along open roads under bright blue skies. Acoustic jazz brushwork and floating vocals.'
      },
      {
        videoId: 'iSUK1QoK9-E',
        title: 'Pehla Nasha',
        artist: 'Udit Narayan, Sadhana Sargam',
        album: 'Jo Jeeta Wohi Sikandar',
        year: 1992,
        composer: 'Jatin-Lalit',
        blurb: 'The timeless innocence of young love. The piano arpeggio that made an entire generation fall in love with art and romance.'
      }
    ]
  },
  {
    id: 'afternoon',
    labelHi: 'दोपहर',
    labelEn: 'Afternoon Acrylics',
    slot: '12:00 PM – 04:00 PM IST',
    startHour: 12,
    endHour: 16,
    tagline: 'Paint on our cheeks. Sun through blinds. Carefree laughter on a giant canvas.',
    cue: 'Afternoon • Acrylic tubes in every shade, playful paint fights, golden classics',
    image: 'assets/scenes/afternoon.jpg',
    audioSrc: 'assets/audio/session-afternoon.mp3',
    palette: ['#e5a338', '#df6948', '#349b8c', '#e7c062', '#f7efe6'],
    playlist: [
      {
        videoId: 'OkhjzAfaH0I',
        title: 'Mere Samne Wali Khidki Mein',
        artist: 'Kishore Kumar',
        album: 'Padosan',
        year: 1968,
        composer: 'R.D. Burman',
        blurb: 'Sunlight, neighborly glances, and Kishore Kumar having the time of his life. Pure unadulterated retro charm that brightens any painting session.'
      },
      {
        videoId: 'mQfCEq0KSaI',
        title: 'Chura Liya Hai Tumne Jo Dil Ko',
        artist: 'Asha Bhosle, Mohammed Rafi',
        album: 'Yaadon Ki Baaraat',
        year: 1973,
        composer: 'R.D. Burman',
        blurb: 'The iconic glass-clinking intro that transformed Indian cinema orchestration. Sultry, stylish, and eternally cool.'
      },
      {
        videoId: 'I16sBVq18Ss',
        title: 'Abhi Na Jao Chhod Kar',
        artist: 'Mohammed Rafi, Asha Bhosle',
        album: 'Hum Dono',
        year: 1961,
        composer: 'Jaidev',
        blurb: 'Sahir Ludhianvi’s immortal plea to stretch a conversation five minutes longer. The golden standard of romantic Indian playback dialogue.'
      },
      {
        videoId: '5eyflIV8pzM',
        title: 'O Mere Dil Ke Chain',
        artist: 'Kishore Kumar',
        album: 'Mere Jeevan Saathi',
        year: 1972,
        composer: 'R.D. Burman',
        blurb: 'A smooth afternoon lounge classic. Kishore Kumar sailing smoothly over Pancham Da’s bossa-nova rhythms.'
      },
      {
        videoId: 'tHK7f4VpJ48',
        title: 'Tujhse Naraz Nahin Zindagi',
        artist: 'Lata Mangeshkar',
        album: 'Masoom',
        year: 1983,
        composer: 'R.D. Burman',
        blurb: 'Gulzar’s poetic dialogue with existence. Lata Di’s maternal tenderness makes every brushstroke feel deeply grounded.'
      }
    ]
  },
  {
    id: 'golden-hour',
    labelHi: 'गोधूलि',
    labelEn: 'Golden Hour',
    slot: '04:00 PM – 07:00 PM IST',
    startHour: 16,
    endHour: 19,
    tagline: 'Sunset in amber and honey. Side by side at the easel.',
    cue: 'Golden Hour • Long golden rays, warming the turntable, honeyed harmonies',
    image: 'assets/scenes/golden-hour.jpg',
    audioSrc: 'assets/audio/session-golden-hour.mp3',
    palette: ['#f59733', '#d64620', '#dd7355', '#f3eece', '#f0c482'],
    playlist: [
      {
        videoId: 'W4rSh7R-KP8',
        title: 'Sawaar Loon',
        artist: 'Monali Thakur',
        album: 'Lootera',
        year: 2013,
        composer: 'Amit Trivedi',
        blurb: 'Vintage Bengal aesthetics set to strings and retro harmonium. Monali Thakur’s sweetest vocal, capturing the nervous thrill of dressing up.'
      },
      {
        videoId: 'EiItLWWxgOI',
        title: 'Pani Da Rang',
        artist: 'Ayushmann Khurrana',
        album: 'Vicky Donor',
        year: 2012,
        composer: 'Rochak Kohli, Ayushmann Khurrana',
        blurb: 'College dorm songwriting that touched the entire nation. Warm Punjabi folk lyrics over gentle acoustic strumming.'
      },
      {
        videoId: 'RFx4g4GunYw',
        title: 'Nazm Nazm',
        artist: 'Arko',
        album: 'Bareilly Ki Barfi',
        year: 2017,
        composer: 'Arko',
        blurb: 'Folding paper planes and writing notes in quiet sketchbooks. Arko’s warm gravelly voice turns simple thoughts into timeless poetry.'
      },
      {
        videoId: '39_UkSRzQrQ',
        title: 'Bolna',
        artist: 'Arijit Singh, Asees Kaur',
        album: 'Kapoor & Sons',
        year: 2016,
        composer: 'Tanishk Bagchi',
        blurb: 'A duet that floats like evening mist over tea estates. The harmony between Arijit and Asees creates an irresistible emotional pull.'
      },
      {
        videoId: '9L_b01OJMJo',
        title: 'Monta Re',
        artist: 'Swanand Kirkire, Amitabh Bhattacharya',
        album: 'Lootera',
        year: 2013,
        composer: 'Amit Trivedi',
        blurb: 'Baul folk rhythms meet lush orchestrations. Swanand Kirkire singing about an untamed, stubborn artistic heart.'
      }
    ]
  },
  {
    id: 'dusk',
    labelHi: 'शाम',
    labelEn: 'Dusk & Rain',
    slot: '07:00 PM – 09:00 PM IST',
    startHour: 19,
    endHour: 21,
    tagline: 'Rain trickling down the glass. Warm floor lamps casting soft shadows.',
    cue: 'Dusk • Watercolors on floor cushions, rain-soaked ballads, indigo twilight',
    image: 'assets/scenes/dusk.jpg',
    audioSrc: 'assets/audio/session-dusk.mp3',
    palette: ['#df9b42', '#6c08ad', '#3c58df', '#ee1e7c', '#f7efe6'],
    playlist: [
      {
        videoId: 'tNrpDUn9vxI',
        title: 'Yeh Shaam Mastani',
        artist: 'Kishore Kumar',
        album: 'Kati Patang',
        year: 1970,
        composer: 'R.D. Burman',
        blurb: 'The greatest sunset melody in Indian film history. Kishore’s iconic whistle and enduring warmth as evening turns the sky purple.'
      },
      {
        videoId: 'BMSC--pmpb0',
        title: 'Kahin Door Jab Din Dhal Jaye',
        artist: 'Mukesh',
        album: 'Anand',
        year: 1971,
        composer: 'Salil Chowdhury',
        blurb: 'Salil Chowdhury’s melancholic masterpiece. Mukesh’s heavy, compassionate vocal celebrating life even as shadows lengthen.'
      },
      {
        videoId: 'pba_YmWDAIU',
        title: 'Ranjish Hi Sahi',
        artist: 'Ali Sethi',
        album: 'Coke Studio Season 10',
        year: 2017,
        composer: 'Nisar Bazmi, Ali Sethi',
        blurb: 'Ahmad Faraz’s legendary ghazal rendered with accordion and upright piano. Asking a lost muse to return even if to break one’s heart again.'
      },
      {
        videoId: 't-fB79h3WqA',
        title: 'Saiyaan',
        artist: 'Kailash Kher',
        album: 'Jhoomo Re',
        year: 2006,
        composer: 'Paresh-Naresh, Kailash Kher',
        blurb: 'Pure Sufi vocal ascension. Kailash Kher singing of deep devotion while rain beats against the studio glass.'
      },
      {
        videoId: 'PQm7-m0vqNk',
        title: 'Mora Saiyaan',
        artist: 'Fuzön',
        album: 'Saagar',
        year: 2002,
        composer: 'Shallum Asher Xavier',
        blurb: 'Classical thumri seamlessly fused with alternative rock acoustic guitars. Shafqat Amanat Ali’s vocal prowess at its peak.'
      }
    ]
  },
  {
    id: 'night',
    labelHi: 'रात',
    labelEn: 'Starry Night',
    slot: '09:00 PM – 12:00 AM IST',
    startHour: 21,
    endHour: 24,
    tagline: 'Fairy lights overhead. Acoustic guitar chords. Painting till late.',
    cue: 'Night • Skyline twinkling outside, acoustic guitar between brushstrokes, celebrating art',
    image: 'assets/scenes/night.jpg',
    audioSrc: 'assets/audio/session-night.mp3',
    palette: ['#f2b544', '#dd3442', '#3fbcd6', '#9ed2d4', '#ffffff'],
    playlist: [
      {
        videoId: 'TpMSsbzvRe4',
        title: 'Matargashti',
        artist: 'Mohit Chauhan',
        album: 'Tamasha',
        year: 2015,
        composer: 'A.R. Rahman',
        blurb: 'Carefree European street accordion meeting vintage Dev Anand swagger. An instant mood lifter that sparks spontaneous dancing in the loft.'
      },
      {
        videoId: '5Eqb_-j3FDA',
        title: 'Pasoori',
        artist: 'Ali Sethi, Shae Gill',
        album: 'Coke Studio Season 14',
        year: 2022,
        composer: 'Ali Sethi, Xulfi',
        blurb: 'A cross-border cultural phenomenon. Punjabi folk poetry dancing over reggaeton and Turkish baglama grooves.'
      },
      {
        videoId: 'RLzC55ai0eo',
        title: 'Heeriye',
        artist: 'Jasleen Royal, Arijit Singh',
        album: 'Single Release',
        year: 2023,
        composer: 'Jasleen Royal',
        blurb: 'Modern Punjabi romance with soaring choruses and dreamy synth arpeggios that capture the magic of starry city nights.'
      },
      {
        videoId: 'ilNt2bikxDI',
        title: 'Jo Tum Mere Ho',
        artist: 'Anuv Jain',
        album: 'Single Release',
        year: 2024,
        composer: 'Anuv Jain',
        blurb: 'A joyful, reassuring acoustic lullaby about finding a quiet home in another person’s presence amidst the noise of the world.'
      },
      {
        videoId: 'SyrGMw3fsZ0',
        title: 'Ghungroo',
        artist: 'Arijit Singh, Shilpa Rao',
        album: 'War',
        year: 2019,
        composer: 'Vishal-Shekhar',
        blurb: 'Smooth retro-funk with modern groove. Shilpa Rao’s sultry timbre trading off with Arijit Singh in playful syncopation.'
      }
    ]
  }
];

// ==========================================================================
// 2. STATE & DOM REFERENCES
// ==========================================================================
const state = {
  currentSession: null,
  activeSessionId: null,
  isLiveTime: true,
  playlist: [],
  currentTrackIndex: 0,
  isPlaying: false,
  isMuted: false,
  isShuffle: true,
  volume: 85,
  artistsCount: 24,
  paintMode: true,

  // Playback & Interruption State
  userPaused: false,
  isAudioUnlocked: false,

  // YouTube
  ytPlayer: null,
  ytReady: false,
  progressTimer: null
};

const el = {
  // Persistent Studio HTML5 Audio Player
  studioAudio: document.getElementById('studio-audio'),

  // Masthead
  liveIstClock: document.getElementById('live-ist-clock'),
  mastheadSessionTitle: document.getElementById('masthead-session-title'),
  liveArtistsCount: document.getElementById('live-artists-count'),

  // Backdrop
  artCurrent: document.getElementById('backdrop-image-current'),
  artNext: document.getElementById('backdrop-image-next'),

  // Turntable Console
  unmuteNotice: document.getElementById('unmute-notice'),
  unmuteStartBtn: document.getElementById('unmute-start-btn'),
  deckSessionName: document.getElementById('deck-session-name'),
  sessionDot: document.getElementById('session-dot'),
  vinylRecord: document.getElementById('vinyl-record'),
  turntableTonearm: document.getElementById('turntable-tonearm'),
  paletteSwatchesStrip: document.getElementById('palette-swatches-strip'),

  // Linen Track Card
  deckMoodCue: document.getElementById('deck-mood-cue'),
  audioEngineBadge: document.getElementById('audio-engine-badge'),
  deckTrackTitle: document.getElementById('deck-track-title'),
  deckTrackArtist: document.getElementById('deck-track-artist'),
  deckTrackAlbum: document.getElementById('deck-track-album'),
  deckTrackBlurb: document.getElementById('deck-track-blurb'),
  trackScrubContainer: document.getElementById('track-scrub-container'),
  trackScrubFill: document.getElementById('track-scrub-fill'),
  deckTimeCurrent: document.getElementById('deck-time-current'),
  deckTimeDuration: document.getElementById('deck-time-duration'),
  deckYtOut: document.getElementById('deck-yt-out'),

  // Keypad
  deckPrevBtn: document.getElementById('deck-prev-btn'),
  deckPlayBtn: document.getElementById('deck-play-btn'),
  deckPlayIcon: document.getElementById('deck-play-icon'),
  deckPauseIcon: document.getElementById('deck-pause-icon'),
  playKeyLabel: document.getElementById('play-key-label'),
  deckNextBtn: document.getElementById('deck-next-btn'),
  deckShuffleBtn: document.getElementById('deck-shuffle-btn'),
  deckMuteBtn: document.getElementById('deck-mute-btn'),
  deckVolIconHigh: document.getElementById('deck-vol-icon-high'),
  deckVolIconMuted: document.getElementById('deck-vol-icon-muted'),
  deckVolSlider: document.getElementById('deck-vol-slider'),

  // Sessions & Soundtrack
  sessionsGrid: document.getElementById('sessions-grid'),
  clockResyncBtn: document.getElementById('clock-resync-btn'),
  resyncClockReadout: document.getElementById('resync-clock-readout'),
  soundtrackTabs: document.getElementById('soundtrack-tabs'),
  soundtrackLedger: document.getElementById('soundtrack-ledger')
};

// ==========================================================================
// 3. TIME & CLOCK UTILITIES (Indian Standard Time)
// ==========================================================================
function getKolkataDate() {
  try {
    const s = new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' });
    return new Date(s);
  } catch (e) {
    return new Date();
  }
}

function getLiveKolkataHour() {
  return getKolkataDate().getHours();
}

function formatClockString() {
  const d = getKolkataDate();
  let h = d.getHours();
  let m = d.getMinutes();
  const ampm = h >= 12 ? 'PM' : 'AM';
  h = h % 12 || 12;
  return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')} ${ampm} IST`;
}

function formatMinutesSeconds(sec) {
  if (isNaN(sec) || sec < 0) return '0:00';
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return `${m}:${s.toString().padStart(2, '0')}`;
}

function findSessionForHour(hour) {
  hour = (hour % 24 + 24) % 24;
  for (const s of SESSIONS) {
    if (s.startHour <= s.endHour) {
      if (hour >= s.startHour && hour < s.endHour) return s;
    } else {
      if (hour >= s.startHour || hour < s.endHour) return s;
    }
  }
  return SESSIONS[0];
}

// ==========================================================================
// 4. SESSION & PLAYLIST MANAGEMENT
// ==========================================================================
function shuffle(arr) {
  const c = [...arr];
  for (let i = c.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [c[i], c[j]] = [c[j], c[i]];
  }
  return c;
}

let activeArtIsNext = false;
function transitionArt(imgUrl) {
  const front = activeArtIsNext ? el.artNext : el.artCurrent;
  const back = activeArtIsNext ? el.artCurrent : el.artNext;

  back.style.backgroundImage = `url('${imgUrl}')`;
  back.classList.add('current');
  front.classList.remove('current');

  activeArtIsNext = !activeArtIsNext;
}

function getTrackAudioSrc(track, session) {
  if (track && track.audioSrc) return track.audioSrc;
  if (session && session.audioSrc) return session.audioSrc;
  const sess = session || state.currentSession;
  const id = sess ? sess.id : 'late-night';
  return `assets/audio/session-${id}.mp3`;
}

function setSession(session, isManual = false) {
  if (state.currentSession && state.currentSession.id === session.id && !isManual) {
    return;
  }

  state.currentSession = session;
  transitionArt(session.image);

  // Update Status & Console
  el.mastheadSessionTitle.textContent = `${session.labelHi} • ${session.labelEn}`;
  el.deckSessionName.textContent = `${session.labelEn} Session (${session.slot})`;
  el.deckMoodCue.textContent = session.cue;

  // Render Palette Swatches
  renderPaletteSwatches(session.palette);

  // Prepare playlist
  state.playlist = state.isShuffle ? shuffle(session.playlist) : [...session.playlist];
  state.currentTrackIndex = 0;

  renderTrackInfo();
  updateSessionsGrid();

  loadTrack(state.isPlaying);
}

function renderPaletteSwatches(palette) {
  el.paletteSwatchesStrip.innerHTML = '';
  palette.forEach(color => {
    const chip = document.createElement('span');
    chip.className = 'swatch-chip';
    chip.style.backgroundColor = color;
    chip.title = `Pigment ${color}`;
    el.paletteSwatchesStrip.appendChild(chip);
  });
}

function renderTrackInfo() {
  const track = state.playlist[state.currentTrackIndex] || (state.currentSession ? state.currentSession.playlist[0] : null);
  if (!track) return;

  el.deckTrackTitle.textContent = track.title;
  el.deckTrackArtist.textContent = track.artist;
  el.deckTrackAlbum.textContent = `${track.album} (${track.year})`;
  el.deckTrackBlurb.textContent = track.blurb;
  el.deckYtOut.href = `https://www.youtube.com/watch?v=${track.videoId}`;

  el.trackScrubFill.style.width = '0%';
  el.deckTimeCurrent.textContent = '0:00';
  el.deckTimeDuration.textContent = '0:00';

  if (el.audioEngineBadge) {
    el.audioEngineBadge.textContent = '● Continuous Loop Active';
    el.audioEngineBadge.title = 'Songs loop continuously without stopping. Lock Screen Media Controls & Background playback enabled.';
    el.audioEngineBadge.style.color = '#1a744e';
    el.audioEngineBadge.style.borderColor = 'rgba(72, 184, 136, 0.4)';
  }

  updateMediaSession(track);
}

function updatePlayState(playing) {
  state.isPlaying = playing;
  if (playing) {
    el.deckPlayIcon.classList.add('hidden');
    el.deckPauseIcon.classList.remove('hidden');
    el.playKeyLabel.textContent = 'PAUSE';
    el.deckPlayBtn.classList.add('active-key');
    el.vinylRecord.classList.add('spinning');
    el.turntableTonearm.classList.add('playing');
    startTrackProgress();
  } else {
    el.deckPlayIcon.classList.remove('hidden');
    el.deckPauseIcon.classList.add('hidden');
    el.playKeyLabel.textContent = 'PLAY';
    el.vinylRecord.classList.remove('spinning');
    el.turntableTonearm.classList.remove('playing');
    stopTrackProgress();
  }

  if ('mediaSession' in navigator) {
    try {
      navigator.mediaSession.playbackState = playing ? 'playing' : 'paused';
    } catch (e) {}
  }
}

function getCurrentPlaybackTime() {
  if (el.studioAudio && !isNaN(el.studioAudio.currentTime)) {
    return el.studioAudio.currentTime || 0;
  }
  return 0;
}

function getCurrentPlaybackDuration() {
  if (el.studioAudio && !isNaN(el.studioAudio.duration) && isFinite(el.studioAudio.duration)) {
    return el.studioAudio.duration || 0;
  }
  return 0;
}

function seekToTime(seconds) {
  if (el.studioAudio && !isNaN(seconds)) {
    const dur = getCurrentPlaybackDuration();
    el.studioAudio.currentTime = Math.max(0, Math.min(dur > 0 ? dur : 99999, seconds));
  }
  updateTrackProgressDisplay();
  updateMediaSessionPositionState();
}

function updateTrackProgressDisplay() {
  const cur = getCurrentPlaybackTime();
  const dur = getCurrentPlaybackDuration();
  el.deckTimeCurrent.textContent = formatMinutesSeconds(cur);
  el.deckTimeDuration.textContent = formatMinutesSeconds(dur);
  if (dur > 0) {
    const pct = Math.min(100, Math.max(0, (cur / dur) * 100));
    el.trackScrubFill.style.width = `${pct}%`;
  }
}

function startTrackProgress() {
  stopTrackProgress();
  updateTrackProgressDisplay();
  state.progressTimer = setInterval(() => {
    updateTrackProgressDisplay();
    updateMediaSessionPositionState();
  }, 350);
}

function stopTrackProgress() {
  if (state.progressTimer) {
    clearInterval(state.progressTimer);
    state.progressTimer = null;
  }
}

// ==========================================================================
// 5. UNIFIED AUDIO ENGINE, MEDIA SESSION & CONTINUOUS LOOP
// ==========================================================================
let screenWakeLock = null;

async function requestWakeLock() {
  if ('wakeLock' in navigator) {
    try {
      if (!screenWakeLock) {
        screenWakeLock = await navigator.wakeLock.request('screen');
        screenWakeLock.addEventListener('release', () => {
          screenWakeLock = null;
        });
      }
    } catch (e) {}
  }
}

function releaseWakeLock() {
  if (screenWakeLock) {
    try {
      screenWakeLock.release();
    } catch (e) {}
    screenWakeLock = null;
  }
}

function setupAudioSession() {
  if ('audioSession' in navigator) {
    try {
      navigator.audioSession.type = 'playback';
    } catch (err) {
      console.warn('AudioSession setup warning:', err);
    }
  }
}

function initMediaSessionHandlers() {
  if (!('mediaSession' in navigator)) return;

  const safeSet = (act, fn) => {
    try {
      navigator.mediaSession.setActionHandler(act, fn);
    } catch (e) {}
  };

  safeSet('play', () => {
    startPlaybackWithSound();
  });

  safeSet('pause', () => {
    pausePlayback();
  });

  safeSet('previoustrack', () => {
    playPrev(true);
  });

  safeSet('nexttrack', () => {
    playNext(true);
  });

  safeSet('seekto', (details) => {
    if (details.seekTime !== undefined) {
      seekToTime(details.seekTime);
    }
  });

  safeSet('seekbackward', (details) => {
    const cur = getCurrentPlaybackTime();
    seekToTime(Math.max(0, cur - (details.seekOffset || 10)));
  });

  safeSet('seekforward', (details) => {
    const cur = getCurrentPlaybackTime();
    const dur = getCurrentPlaybackDuration();
    seekToTime(Math.min(dur || 99999, cur + (details.seekOffset || 10)));
  });

  safeSet('stop', () => {
    pausePlayback();
  });
}

function updateMediaSession(track) {
  if (!('mediaSession' in navigator) || !track) return;

  const session = state.currentSession || findSessionForHour(getLiveKolkataHour());
  let artworkUrl = '';
  try {
    artworkUrl = new URL(session.image, window.location.href).href;
  } catch (e) {
    artworkUrl = session.image;
  }

  try {
    navigator.mediaSession.metadata = new MediaMetadata({
      title: track.title,
      artist: track.artist,
      album: `${track.album || session.labelEn} • चित्रम् Atelier Radio`,
      artwork: [
        { src: artworkUrl, sizes: '512x512', type: 'image/jpeg' },
        { src: artworkUrl, sizes: '256x256', type: 'image/jpeg' },
        { src: artworkUrl, sizes: '128x128', type: 'image/jpeg' }
      ]
    });
    navigator.mediaSession.playbackState = state.isPlaying ? 'playing' : 'paused';
    updateMediaSessionPositionState();
  } catch (err) {
    console.warn('MediaSession metadata error:', err);
  }
}

function updateMediaSessionPositionState() {
  if (!('mediaSession' in navigator) || typeof navigator.mediaSession.setPositionState !== 'function') return;
  try {
    const dur = getCurrentPlaybackDuration();
    const pos = getCurrentPlaybackTime();
    if (dur > 0 && pos >= 0 && pos <= dur) {
      navigator.mediaSession.setPositionState({
        duration: dur,
        playbackRate: 1,
        position: pos
      });
    }
  } catch (e) {}
}

function setAppVolume(volumePct) {
  state.volume = Math.max(0, Math.min(100, volumePct));
  if (el.studioAudio) {
    el.studioAudio.volume = state.isMuted ? 0 : (state.volume / 100);
  }
  updateMuteIcons();
}

function setupAudioElementListeners() {
  if (!el.studioAudio) return;

  el.studioAudio.loop = true;

  el.studioAudio.addEventListener('timeupdate', () => {
    updateTrackProgressDisplay();
    updateMediaSessionPositionState();
  });

  el.studioAudio.addEventListener('durationchange', () => {
    updateTrackProgressDisplay();
    updateMediaSessionPositionState();
  });

  el.studioAudio.addEventListener('play', () => {
    updatePlayState(true);
  });

  el.studioAudio.addEventListener('pause', () => {
    if (state.userPaused) {
      updatePlayState(false);
    } else if (state.isPlaying) {
      // Interruption recovery: if paused by system without user intention, resume
      setTimeout(() => {
        if (!state.userPaused && state.isPlaying && el.studioAudio.paused) {
          el.studioAudio.play().catch(() => {});
        }
      }, 50);
    }
  });

  // Endless continuous loop across tracks
  el.studioAudio.addEventListener('ended', () => {
    playNext(true);
  });

  // Auto-recovery to keep radio playing if an audio file fails
  el.studioAudio.addEventListener('error', (err) => {
    console.warn('Track audio warning, recovering next track:', err);
    setTimeout(() => playNext(true), 600);
  });
}

function loadTrack(autoPlay = true) {
  const track = state.playlist[state.currentTrackIndex];
  if (!track) return;

  renderTrackInfo();
  updateMediaSession(track);
  setupAudioSession();

  const audioSrc = getTrackAudioSrc(track, state.currentSession);
  if (el.studioAudio) {
    const currentSrc = el.studioAudio.getAttribute('src');
    if (currentSrc !== audioSrc) {
      el.studioAudio.src = audioSrc;
      el.studioAudio.load();
    }
    el.studioAudio.volume = state.isMuted ? 0 : (state.volume / 100);
    el.studioAudio.muted = state.isMuted;

    if (autoPlay || state.isPlaying) {
      state.userPaused = false;
      const playPromise = el.studioAudio.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            updatePlayState(true);
            requestWakeLock();
            if (el.unmuteNotice) el.unmuteNotice.classList.add('hidden');
          })
          .catch((err) => {
            console.warn('Playback deferred until user interaction:', err);
            if (el.unmuteNotice) el.unmuteNotice.classList.remove('hidden');
            updatePlayState(false);
          });
      }
    } else {
      updatePlayState(false);
    }
  }
}

function playNext(autoPlay = true) {
  state.currentTrackIndex = (state.currentTrackIndex + 1) % state.playlist.length;
  loadTrack(autoPlay);
}

function playPrev(autoPlay = true) {
  state.currentTrackIndex = (state.currentTrackIndex - 1 + state.playlist.length) % state.playlist.length;
  loadTrack(autoPlay);
}

function startPlaybackWithSound() {
  state.userPaused = false;
  state.isMuted = false;
  if (!state.volume || state.volume === 0) state.volume = 85;

  setupAudioSession();
  initMediaSessionHandlers();
  requestWakeLock();

  const track = state.playlist[state.currentTrackIndex];
  const audioSrc = getTrackAudioSrc(track, state.currentSession);

  if (el.studioAudio) {
    el.studioAudio.loop = true;
    const currentSrc = el.studioAudio.getAttribute('src');
    if (!currentSrc || currentSrc !== audioSrc) {
      el.studioAudio.src = audioSrc;
      el.studioAudio.load();
    }
    el.studioAudio.muted = false;
    el.studioAudio.volume = state.volume / 100;

    const playPromise = el.studioAudio.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          updatePlayState(true);
        })
        .catch((err) => {
          console.warn('Playback error:', err);
        });
    }
  }

  if (el.unmuteNotice) el.unmuteNotice.classList.add('hidden');
  updateMuteIcons();
  updatePlayState(true);

  if (track) updateMediaSession(track);
}

function pausePlayback() {
  state.userPaused = true;
  if (el.studioAudio) {
    el.studioAudio.pause();
  }
  updatePlayState(false);
  releaseWakeLock();
}

function togglePlay() {
  if (state.isPlaying) {
    pausePlayback();
  } else {
    startPlaybackWithSound();
  }
}

// ==========================================================================
// 6. SESSIONS & SOUNDTRACK ARCHIVE (Editorial Broadsheet)
// ==========================================================================
function renderSessionsSection() {
  el.sessionsGrid.innerHTML = '';

  SESSIONS.forEach(session => {
    const card = document.createElement('button');
    card.type = 'button';
    card.className = 'session-card';
    card.dataset.id = session.id;

    card.innerHTML = `
      <span class="card-hindi-title">${session.labelHi}</span>
      <span class="card-english-title">${session.labelEn}</span>
      <p class="card-desc">${session.tagline}</p>
      <span class="card-time-slot">${session.slot}</span>
    `;

    card.addEventListener('click', () => {
      state.isLiveTime = false;
      state.activeSessionId = session.id;
      setSession(session, true);
      el.clockResyncBtn.classList.remove('hidden');
    });

    el.sessionsGrid.appendChild(card);
  });
}

function updateSessionsGrid() {
  const currentId = state.currentSession ? state.currentSession.id : '';
  document.querySelectorAll('.session-card').forEach(c => {
    c.classList.toggle('is-active', c.dataset.id === currentId);
  });
  el.resyncClockReadout.textContent = formatClockString();
}

function resyncToLiveClock() {
  state.isLiveTime = true;
  state.activeSessionId = null;
  el.clockResyncBtn.classList.add('hidden');
  const live = findSessionForHour(getLiveKolkataHour());
  setSession(live);
}

// Soundtrack Archive
let currentFilter = 'all';

function renderSoundtrackSection() {
  el.soundtrackTabs.innerHTML = '';

  const allTab = document.createElement('button');
  allTab.type = 'button';
  allTab.className = 'soundtrack-tab-btn active';
  allTab.textContent = 'All Tracks (सभी गीत)';
  allTab.addEventListener('click', () => {
    currentFilter = 'all';
    updateSoundtrackTabs();
    renderSoundtrackTracks();
  });
  el.soundtrackTabs.appendChild(allTab);

  SESSIONS.forEach(s => {
    const tab = document.createElement('button');
    tab.type = 'button';
    tab.className = 'soundtrack-tab-btn';
    tab.dataset.id = s.id;
    tab.textContent = `${s.labelHi} (${s.labelEn})`;
    tab.addEventListener('click', () => {
      currentFilter = s.id;
      updateSoundtrackTabs();
      renderSoundtrackTracks();
    });
    el.soundtrackTabs.appendChild(tab);
  });

  renderSoundtrackTracks();
}

function updateSoundtrackTabs() {
  el.soundtrackTabs.querySelectorAll('.soundtrack-tab-btn').forEach(btn => {
    if (btn.dataset.id) {
      btn.classList.toggle('active', btn.dataset.id === currentFilter);
    } else {
      btn.classList.toggle('active', currentFilter === 'all');
    }
  });
}

function renderSoundtrackTracks() {
  el.soundtrackLedger.innerHTML = '';

  let list = [];
  if (currentFilter === 'all') {
    SESSIONS.forEach(s => {
      s.playlist.forEach(t => list.push({ track: t, session: s }));
    });
  } else {
    const s = SESSIONS.find(x => x.id === currentFilter);
    if (s) {
      s.playlist.forEach(t => list.push({ track: t, session: s }));
    }
  }

  list.forEach(({ track, session }) => {
    const card = document.createElement('button');
    card.type = 'button';
    card.className = 'track-ledger-card';
    const isPlaying = state.playlist[state.currentTrackIndex]?.videoId === track.videoId;
    if (isPlaying) card.classList.add('active-song');

    card.innerHTML = `
      <div class="ledger-text">
        <h3 class="ledger-title">${track.title}</h3>
        <p class="ledger-credits">${track.artist} — ${track.album}, ${track.year}</p>
        <p class="ledger-blurb">"${track.blurb}"</p>
      </div>
      <span class="ledger-play-stamp">${isPlaying ? 'ON DECK' : 'PLAY'}</span>
    `;

    card.addEventListener('click', () => {
      if (state.currentSession.id !== session.id) {
        state.isLiveTime = false;
        state.activeSessionId = session.id;
        setSession(session, true);
        el.clockResyncBtn.classList.remove('hidden');
      }

      const idx = state.playlist.findIndex(t => t.videoId === track.videoId);
      if (idx !== -1) {
        state.currentTrackIndex = idx;
      } else {
        state.playlist.unshift(track);
        state.currentTrackIndex = 0;
      }

      state.userPaused = false;
      loadTrack(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    el.soundtrackLedger.appendChild(card);
  });
}

// ==========================================================================
// 9. EVENT LISTENERS & INITIALIZATION
// ==========================================================================
function setupDeckControls() {
  el.deckPlayBtn.addEventListener('click', togglePlay);
  el.deckNextBtn.addEventListener('click', () => playNext(true));
  el.deckPrevBtn.addEventListener('click', () => playPrev(true));

  el.deckShuffleBtn.addEventListener('click', () => {
    state.isShuffle = !state.isShuffle;
    el.deckShuffleBtn.classList.toggle('toggled', state.isShuffle);
    state.playlist = state.isShuffle ? shuffle(state.currentSession.playlist) : [...state.currentSession.playlist];
    state.currentTrackIndex = 0;
    loadTrack();
  });

  el.deckVolSlider.addEventListener('input', (e) => {
    const vol = parseInt(e.target.value, 10);
    setAppVolume(vol);
    if (vol > 0 && state.isMuted) {
      state.isMuted = false;
      updateMuteIcons();
    }
  });

  el.deckMuteBtn.addEventListener('click', () => {
    state.isMuted = !state.isMuted;
    setAppVolume(state.volume || 85);
    if (state.isMuted) {
      el.deckVolSlider.value = 0;
    } else {
      el.deckVolSlider.value = state.volume || 85;
    }
    updateMuteIcons();
  });

  // Track scrub click (Unified native audio & YouTube)
  el.trackScrubContainer.addEventListener('click', (e) => {
    const dur = getCurrentPlaybackDuration();
    if (dur <= 0) return;
    const rect = el.trackScrubContainer.getBoundingClientRect();
    const ratio = Math.min(1, Math.max(0, (e.clientX - rect.left) / rect.width));
    seekToTime(dur * ratio);
  });

  // Resync Clock button
  el.clockResyncBtn.addEventListener('click', resyncToLiveClock);

  // Footer navigation
  document.querySelectorAll('.footer-jump-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const sess = SESSIONS.find(s => s.id === btn.dataset.session);
      if (sess) {
        state.isLiveTime = false;
        state.activeSessionId = sess.id;
        setSession(sess, true);
        el.clockResyncBtn.classList.remove('hidden');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  });

  // Audio policy unlock for iOS / Android user gesture compliance
  function unlockAudio() {
    setupAudioSession();
    initMediaSessionHandlers();

    if (el.studioAudio && !state.isAudioUnlocked) {
      state.isAudioUnlocked = true;
      if (state.isPlaying && el.studioAudio.paused) {
        el.studioAudio.play().catch(() => {});
      }
    }
  }

  ['pointerdown', 'keydown', 'touchend', 'click'].forEach(evt => {
    document.addEventListener(evt, unlockAudio, { passive: true });
  });
  el.unmuteStartBtn.addEventListener('click', startPlaybackWithSound);

  // Background & Lock Screen audio persistence & recovery
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      // Screen locked or tab backgrounded:
      // Ensure audio element continues playing and is not paused by the lock transition
      if (state.isPlaying && !state.userPaused && el.studioAudio && el.studioAudio.paused) {
        el.studioAudio.play().catch(() => {});
      }
    } else {
      // Screen unlocked or tab returned to foreground:
      if (state.isPlaying && !state.userPaused && el.studioAudio && el.studioAudio.paused) {
        el.studioAudio.play().catch(() => {});
        requestWakeLock();
        updatePlayState(true);
      }
    }
  });

  window.addEventListener('pageshow', () => {
    if (state.isPlaying && !state.userPaused && el.studioAudio && el.studioAudio.paused) {
      el.studioAudio.play().catch(() => {});
      requestWakeLock();
    }
  });

  // Global Keyboard Shortcuts
  window.addEventListener('keydown', (e) => {
    if (['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) return;
    if (e.code === 'Space') {
      e.preventDefault();
      togglePlay();
    } else if (e.code === 'ArrowRight') {
      e.preventDefault();
      playNext();
    } else if (e.code === 'ArrowLeft') {
      e.preventDefault();
      playPrev();
    } else if (e.key === 'm' || e.key === 'M') {
      el.deckMuteBtn.click();
    }
  });
}

function updateMuteIcons() {
  if (state.isMuted || state.volume === 0) {
    el.deckVolIconHigh.classList.add('hidden');
    el.deckVolIconMuted.classList.remove('hidden');
  } else {
    el.deckVolIconHigh.classList.remove('hidden');
    el.deckVolIconMuted.classList.add('hidden');
  }
}

function init() {
  renderSessionsSection();
  renderSoundtrackSection();
  setupDeckControls();
  setupAudioElementListeners();
  setupAudioSession();
  initMediaSessionHandlers();

  // Initial Session
  const liveSession = findSessionForHour(getLiveKolkataHour());
  setSession(liveSession);

  // Live IST Clock Loop
  setInterval(() => {
    const str = formatClockString();
    el.liveIstClock.textContent = str;
    el.resyncClockReadout.textContent = str;

    if (state.isLiveTime) {
      const expSession = findSessionForHour(getLiveKolkataHour());
      if (!state.currentSession || state.currentSession.id !== expSession.id) {
        setSession(expSession);
      }
    }
  }, 1000);
  el.liveIstClock.textContent = formatClockString();

  // Artists in Studio Natural Jitter (18–42 artists)
  setInterval(() => {
    const delta = (Math.random() > 0.5 ? 1 : -1) * (Math.random() > 0.7 ? 2 : 1);
    state.artistsCount = Math.max(16, Math.min(42, state.artistsCount + delta));
    el.liveArtistsCount.textContent = state.artistsCount;
  }, 9000);
}

window.addEventListener('DOMContentLoaded', init);
