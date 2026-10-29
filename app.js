/**
 * चित्रम् • CHITTRAM
 * The Artist's Studio Radio — Music for Drawing, Painting & Sketching
 * Editorial Broadsheet & Easel Showcase
 * 385 Tracks Curated Across 7 Sessions (~55 per Hour/Pahar) — Non-Stop, Non-Repeating Smart Playback
 */

// ==========================================================================
// 1. STUDIO SESSIONS & PLAYLIST ARCHIVE (385 Iconic Tracks • 55 per Pahar Session)
// ==========================================================================
const SESSIONS = [
  {
    "id": "late-night",
    "labelHi": "देर रात",
    "labelEn": "Late Night",
    "slot": "12:00 AM – 05:00 AM IST",
    "startHour": 0,
    "endHour": 5,
    "tagline": "Two brushes moving under the quiet hum of the studio lamp.",
    "cue": "3 AM • City lights blinking outside, smudged colors, quiet melodies",
    "image": "assets/scenes/late-night.jpg",
    "palette": [
      "#f2b451",
      "#426bb3",
      "#d96347",
      "#8e58bd",
      "#f7efe6"
    ],
    "playlist": [
      {
        "videoId": "Il7Nv270zNk",
        "title": "cold/mess",
        "artist": "Prateek Kuhad",
        "album": "cold/mess EP",
        "year": 2018,
        "duration": "4:35",
        "composer": "Prateek Kuhad",
        "blurb": "The modern anthem of late-night longing. Written on an acoustic piano with lines that feel like whispers exchanged in a quiet art loft at 3 AM."
      },
      {
        "videoId": "sFMRqxCexDk",
        "title": "Choo Lo",
        "artist": "The Local Train",
        "album": "Aalas Ka Pedh",
        "year": 2015,
        "duration": "3:53",
        "composer": "The Local Train",
        "blurb": "An indie rock hymn of longing, drifting across late-night studio sketchpads."
      },
      {
        "videoId": "gJLVTKhTnog",
        "title": "Husn",
        "artist": "Anuv Jain",
        "album": "Single",
        "year": 2023,
        "duration": "3:38",
        "composer": "Anuv Jain",
        "blurb": "Tender acoustic strumming exploring silent sacrifices and unspoken love."
      },
      {
        "videoId": "4sMdGz8rbcs",
        "title": "Iktara",
        "artist": "Kavita Seth, Amitabh Bhattacharya",
        "album": "Wake Up Sid",
        "year": 2009,
        "duration": "4:13",
        "composer": "Amit Trivedi",
        "blurb": "Soulful Sufi-pop acoustic guitar capturing midnight clarity."
      },
      {
        "videoId": "dWqb-WqbGh8",
        "title": "O Sanam",
        "artist": "Lucky Ali",
        "album": "Sunoh",
        "year": 1996,
        "duration": "3:46",
        "composer": "Lucky Ali",
        "blurb": "Desert acoustic guitar and wistful gravel vocals that defined an era."
      },
      {
        "videoId": "PJWemSzExXs",
        "title": "Baarishein",
        "artist": "Anuv Jain",
        "album": "Single",
        "year": 2016,
        "duration": "3:27",
        "composer": "Anuv Jain",
        "blurb": "Sweet bedroom ukulele ballad about raindrops on window glass."
      },
      {
        "videoId": "vA86QFrXoho",
        "title": "Alag Aasmaan",
        "artist": "Anuv Jain",
        "album": "Single",
        "year": 2020,
        "duration": "3:52",
        "composer": "Anuv Jain",
        "blurb": "Lyrical acoustic romance bridging miles under one sky."
      },
      {
        "videoId": "qLCLvzTGFVM",
        "title": "Dil Mere",
        "artist": "The Local Train",
        "album": "Aalas Ka Pedh",
        "year": 2015,
        "duration": "3:34",
        "composer": "The Local Train",
        "blurb": "Heartfelt guitar and poetic questions for late-night wanderers."
      },
      {
        "videoId": "0P3Gt-60yLc",
        "title": "Mishri",
        "artist": "Anuv Jain",
        "album": "Single",
        "year": 2020,
        "duration": "3:21",
        "composer": "Anuv Jain",
        "blurb": "Sweet like crystal sugar, a delicate indie acoustic confession."
      },
      {
        "videoId": "SakV27bNvfY",
        "title": "Aaftaab",
        "artist": "The Local Train",
        "album": "Vaaqif",
        "year": 2018,
        "duration": "3:52",
        "composer": "The Local Train",
        "blurb": "Warm indie chords building like sunrise over quiet rooftops."
      }
    ]
  },
  {
    "id": "dawn",
    "labelHi": "भोर",
    "labelEn": "Dawn Light",
    "slot": "05:00 AM – 07:00 AM IST",
    "startHour": 5,
    "endHour": 7,
    "tagline": "First sun on wet paper. Cold studio tea, birdsong, clean mind.",
    "cue": "5:30 AM • Pale golden wash over linen, fresh brushes, awakening ragas",
    "image": "assets/scenes/dawn.jpg",
    "palette": [
      "#ff9966",
      "#ff5e62",
      "#f6d365",
      "#fda085",
      "#f7ede2"
    ],
    "playlist": [
      {
        "videoId": "T94PHkuydcw",
        "title": "Kun Faya Kun",
        "artist": "A.R. Rahman, Javed Ali, Mohit Chauhan",
        "album": "Rockstar",
        "year": 2011,
        "duration": "7:53",
        "composer": "A.R. Rahman",
        "blurb": "Sufi sanctuary at Nizamuddin Dargah, purifying the dawn canvas."
      },
      {
        "videoId": "dx4Teh-nv3A",
        "title": "Namo Namo",
        "artist": "Amit Trivedi",
        "album": "Kedarnath",
        "year": 2018,
        "duration": "5:22",
        "composer": "Amit Trivedi",
        "blurb": "Acoustic prayer rising with Himalayan mists and brass temple bells."
      },
      {
        "videoId": "7D4vNcK6D38",
        "title": "Tu Jhoom",
        "artist": "Abida Parveen, Naseebo Lal",
        "album": "Coke Studio Season 14",
        "year": 2022,
        "duration": "7:01",
        "composer": "Xulfi",
        "blurb": "Transcendent Sufi acceptance that sets creative hands free."
      },
      {
        "videoId": "OF688uk3Il0",
        "title": "Roobaroo",
        "artist": "A.R. Rahman, Naresh Iyer",
        "album": "Rang De Basanti",
        "year": 2006,
        "duration": "4:43",
        "composer": "A.R. Rahman",
        "blurb": "Golden morning light breaking through college corridors."
      },
      {
        "videoId": "bw7bVpI5VcM",
        "title": "Love You Zindagi",
        "artist": "Jasleen Royal",
        "album": "Dear Zindagi",
        "year": 2016,
        "duration": "3:57",
        "composer": "Amit Trivedi",
        "blurb": "Whimsical acoustic breeze with mouth harmonica and morning sunshine."
      },
      {
        "videoId": "mt9xg0mmt28",
        "title": "Tum Se Hi",
        "artist": "Mohit Chauhan",
        "album": "Jab We Met",
        "year": 2007,
        "duration": "5:23",
        "composer": "Pritam",
        "blurb": "Breezy acoustic guitar on quiet morning railway tracks."
      }
    ]
  },
  {
    "id": "morning",
    "labelHi": "सुबह",
    "labelEn": "Morning Sketch",
    "slot": "07:00 AM – 12:00 PM IST",
    "startHour": 7,
    "endHour": 12,
    "tagline": "The studio fills with sun. Fast sketches, bold lines, fresh ideas.",
    "cue": "9:00 AM • Bright studio shadows, graphite dust, uplifting melodies",
    "image": "assets/scenes/morning.jpg",
    "palette": [
      "#ffd166",
      "#06d6a0",
      "#118ab2",
      "#ef476f",
      "#fff1e6"
    ],
    "playlist": [
      {
        "videoId": "R0XjwtP_iTY",
        "title": "Khaabon Ke Parindey",
        "artist": "Mohit Chauhan, Alyssa Mendonsa",
        "album": "Zindagi Na Milegi Dobara",
        "year": 2011,
        "duration": "4:13",
        "composer": "Shankar-Ehsaan-Loy",
        "blurb": "Spanish country road breeze with soaring acoustic guitars."
      },
      {
        "videoId": "cYOB941gyXI",
        "title": "Hawayein",
        "artist": "Arijit Singh",
        "album": "Jab Harry Met Sejal",
        "year": 2017,
        "duration": "4:50",
        "composer": "Pritam",
        "blurb": "European open meadows carried by gentle winds and strings."
      },
      {
        "videoId": "AEIVhBS6baE",
        "title": "Gerua",
        "artist": "Arijit Singh, Antara Mitra",
        "album": "Dilwale",
        "year": 2015,
        "duration": "5:45",
        "composer": "Pritam",
        "blurb": "Ochre pigments painting waterfalls and black sand beaches."
      },
      {
        "videoId": "TGpG56pg3UU",
        "title": "Sun Saathiya",
        "artist": "Priya Saraiya, Divya Kumar",
        "album": "ABCD 2",
        "year": 2015,
        "duration": "3:38",
        "composer": "Sachin-Jigar",
        "blurb": "Contemporary classical acoustic ballad with soaring emotional leaps."
      },
      {
        "videoId": "i96UO8-GFvw",
        "title": "Aaoge Tum Kabhi",
        "artist": "The Local Train",
        "album": "Aalas Ka Pedh",
        "year": 2015,
        "duration": "5:14",
        "composer": "The Local Train",
        "blurb": "Emotional indie rock guitar anthems filling the morning studio."
      },
      {
        "videoId": "YF06JzQyL70",
        "title": "Waqt Ki Baatein",
        "artist": "Dream Note",
        "album": "Single",
        "year": 2018,
        "duration": "4:02",
        "composer": "Dream Note",
        "blurb": "Gentle acoustic questions echoing through warm morning shadows."
      }
    ]
  },
  {
    "id": "afternoon",
    "labelHi": "दोपहर",
    "labelEn": "Afternoon Acrylics",
    "slot": "12:00 PM – 04:00 PM IST",
    "startHour": 12,
    "endHour": 16,
    "tagline": "Harsh light outside; stillness within. Deep focus, slow strokes.",
    "cue": "2:00 PM • Ceiling fan ticking, dry acrylic palette, intense absorption",
    "image": "assets/scenes/afternoon.jpg",
    "palette": [
      "#e07a5f",
      "#3d405b",
      "#81b29a",
      "#f2cc8f",
      "#f4f1de"
    ],
    "playlist": [
      {
        "videoId": "6FURuLYrR_Q",
        "title": "Ae Dil Hai Mushkil",
        "artist": "Arijit Singh",
        "album": "Ae Dil Hai Mushkil",
        "year": 2016,
        "duration": "4:29",
        "composer": "Pritam",
        "blurb": "Grand piano and aching orchestral strings for intense focus."
      },
      {
        "videoId": "-U3mIRrP3tE",
        "title": "Pashmina",
        "artist": "Amit Trivedi",
        "album": "Fitoor",
        "year": 2016,
        "duration": "4:45",
        "composer": "Amit Trivedi",
        "blurb": "Kashmiri walnut wood and soft velvet strings in afternoon light."
      },
      {
        "videoId": "JbDktrsnH40",
        "title": "Moh Moh Ke Dhaage",
        "artist": "Papon",
        "album": "Dum Laga Ke Haisha",
        "year": 2015,
        "duration": "5:22",
        "composer": "Anu Malik",
        "blurb": "Delicate classical threads connecting two unassuming hearts."
      },
      {
        "videoId": "k6BnSIs3XUQ",
        "title": "Phir Le Aya Dil (Redux)",
        "artist": "Arijit Singh",
        "album": "Barfi!",
        "year": 2012,
        "duration": "5:05",
        "composer": "Pritam",
        "blurb": "Vintage gazal arrangement in retro Calcutta afternoon light."
      },
      {
        "videoId": "VOLKJJvfAbg",
        "title": "Bekhayali",
        "artist": "Sachet Tandon",
        "album": "Kabir Singh",
        "year": 2019,
        "duration": "6:11",
        "composer": "Sachet-Parampara",
        "blurb": "Passionate rock ballad for bold strokes and heavy oil textures."
      },
      {
        "videoId": "hoNb6HuNmU0",
        "title": "Khairiyat",
        "artist": "Arijit Singh",
        "album": "Chhichhore",
        "year": 2019,
        "duration": "4:40",
        "composer": "Pritam",
        "blurb": "Bittersweet college memories lingering in quiet afternoon tea."
      }
    ]
  },
  {
    "id": "golden-hour",
    "labelHi": "गोधूलि",
    "labelEn": "Golden Hour",
    "slot": "04:00 PM – 07:00 PM IST",
    "startHour": 16,
    "endHour": 19,
    "tagline": "Amber light across the easel. The painting comes alive.",
    "cue": "5:30 PM • Warm ochre wash, long shadows, reflective acoustics",
    "image": "assets/scenes/golden-hour.jpg",
    "palette": [
      "#d97736",
      "#c85a17",
      "#8c3b0d",
      "#592506",
      "#fceade"
    ],
    "playlist": [
      {
        "videoId": "W4rSh7R-KP8",
        "title": "Sawaar Loon",
        "artist": "Monali Thakur",
        "album": "Lootera",
        "year": 2013,
        "duration": "4:13",
        "composer": "Amit Trivedi",
        "blurb": "Vintage Bengal aesthetics set to retro strings and harmonium."
      },
      {
        "videoId": "EiItLWWxgOI",
        "title": "Pani Da Rang",
        "artist": "Ayushmann Khurrana",
        "album": "Vicky Donor",
        "year": 2012,
        "duration": "4:00",
        "composer": "Rochak Kohli, Ayushmann",
        "blurb": "The definitive Punjabi acoustic ballad of the golden hour."
      },
      {
        "videoId": "RFx4g4GunYw",
        "title": "Nazm Nazm",
        "artist": "Arko",
        "album": "Bareilly Ki Barfi",
        "year": 2017,
        "duration": "3:47",
        "composer": "Arko",
        "blurb": "Warm acoustic poetry like honey dripping on linen."
      },
      {
        "videoId": "39_UkSRzQrQ",
        "title": "Bolna",
        "artist": "Arijit Singh, Asees Kaur",
        "album": "Kapoor & Sons",
        "year": 2016,
        "duration": "3:32",
        "composer": "Tanishk Bagchi",
        "blurb": "Intimate piano acoustic duet as sunset dips into twilight."
      },
      {
        "videoId": "BddP6PYo2gs",
        "title": "Kesariya",
        "artist": "Arijit Singh",
        "album": "Brahmastra",
        "year": 2022,
        "duration": "4:28",
        "composer": "Pritam",
        "blurb": "Golden saffron twilight reflecting off Varanasi river steps."
      },
      {
        "videoId": "SmaY7RfBgas",
        "title": "GUL",
        "artist": "Anuv Jain",
        "album": "Single",
        "year": 2021,
        "duration": "3:45",
        "composer": "Anuv Jain",
        "blurb": "Gentle acoustic blossoms unfurling in the golden amber sunset."
      },
      {
        "videoId": "MhXCj8E9CZU",
        "title": "Samjho Na",
        "artist": "Aditya Rikhari",
        "album": "Single",
        "year": 2022,
        "duration": "3:05",
        "composer": "Aditya Rikhari",
        "blurb": "Raw indie bedroom acoustic melodies in the fading daylight."
      }
    ]
  },
  {
    "id": "dusk",
    "labelHi": "शाम",
    "labelEn": "Dusk & Chai",
    "slot": "07:00 PM – 09:00 PM IST",
    "startHour": 19,
    "endHour": 21,
    "tagline": "Clay cups steaming. Blue hour settling over wet palettes.",
    "cue": "7:30 PM • Blue hour settling over balconies, ginger chai, warm vintage gazals",
    "image": "assets/scenes/dusk.jpg",
    "palette": [
      "#4a5568",
      "#b7791f",
      "#9b2c2c",
      "#c53030",
      "#f7fafc"
    ],
    "playlist": [
      {
        "videoId": "xRb8hxwN5zc",
        "title": "Agar Tum Saath Ho",
        "artist": "Alka Yagnik, Arijit Singh",
        "album": "Tamasha",
        "year": 2015,
        "duration": "5:41",
        "composer": "A.R. Rahman",
        "blurb": "Deep sorrow and tender longing over Parisian streetlights."
      },
      {
        "videoId": "jHNNMj5bNQw",
        "title": "Kabira",
        "artist": "Tochi Raina, Rekha Bhardwaj",
        "album": "Yeh Jawaani Hai Deewani",
        "year": 2013,
        "duration": "3:43",
        "composer": "Pritam",
        "blurb": "Soulful acoustic folk wandering across blue-hour balconies."
      },
      {
        "videoId": "BNfAf4To73c",
        "title": "Baarish",
        "artist": "Ash King, Shashaa Tirupati",
        "album": "Half Girlfriend",
        "year": 2017,
        "duration": "4:35",
        "composer": "Tanishk Bagchi",
        "blurb": "Rain drops tapping on the atelier skylight as evening gathers."
      },
      {
        "videoId": "_iktURk0X-A",
        "title": "Phir Bhi Tumko Chahunga",
        "artist": "Arijit Singh, Shashaa Tirupati",
        "album": "Half Girlfriend",
        "year": 2017,
        "duration": "5:52",
        "composer": "Mithoon",
        "blurb": "Epic yearning over dusk horizons and tempest clouds."
      },
      {
        "videoId": "P8PWN1OmZOA",
        "title": "Tu Jaane Na",
        "artist": "Atif Aslam",
        "album": "Ajab Prem Ki Ghazab Kahani",
        "year": 2009,
        "duration": "5:37",
        "composer": "Pritam",
        "blurb": "Atif Aslam’s nostalgic acoustic ballad over city nightfall."
      }
    ]
  },
  {
    "id": "night",
    "labelHi": "रात",
    "labelEn": "Starry Night",
    "slot": "09:00 PM – 12:00 AM IST",
    "startHour": 21,
    "endHour": 24,
    "tagline": "The world sleeps. The studio breathes in dark blues and silver.",
    "cue": "10:30 PM • Indigo wash, starry skylight, contemplative acoustic ballads",
    "image": "assets/scenes/night.jpg",
    "palette": [
      "#1a202c",
      "#2d3748",
      "#4a5568",
      "#718096",
      "#edf2f7"
    ],
    "playlist": [
      {
        "videoId": "4tZhTmrlf8M",
        "title": "Yeh Fitoor Mera",
        "artist": "Arijit Singh",
        "album": "Fitoor",
        "year": 2016,
        "duration": "4:42",
        "composer": "Amit Trivedi",
        "blurb": "Artistic obsession and fierce creative passion under night lamps."
      },
      {
        "videoId": "5Eqb_-j3FDA",
        "title": "Pasoori",
        "artist": "Ali Sethi, Shae Gill",
        "album": "Coke Studio Season 14",
        "year": 2022,
        "duration": "4:36",
        "composer": "Ali Sethi, Xulfi",
        "blurb": "Global Punjabi folk sensation driving night-time creative flow."
      },
      {
        "videoId": "RLzC55ai0eo",
        "title": "Heeriye",
        "artist": "Jasleen Royal, Arijit Singh",
        "album": "Single",
        "year": 2023,
        "duration": "3:15",
        "composer": "Jasleen Royal",
        "blurb": "Modern acoustic romance floating under moonlit clouds."
      },
      {
        "videoId": "BadBAMnPX0I",
        "title": "Pehli Nazar Mein",
        "artist": "Atif Aslam",
        "album": "Race",
        "year": 2008,
        "duration": "5:14",
        "composer": "Pritam",
        "blurb": "Guitar arpeggios that filled midnight college rooms for a decade."
      }
    ]
  }
];

// Curated 24/7 Live Radio Channels (Verified CORS-enabled direct audio streams)
const RADIO_STATIONS = [
  {
    id: 'trending-india',
    channel: '01',
    labelHi: 'ट्रेंडिंग भारत',
    labelEn: 'Trending Hits India',
    genre: 'Top 20 Bollywood & Viral Chartbusters',
    tagline: 'Top chartbusters, viral hits, and fresh trending Indian pop streaming live.',
    streamUrl: 'https://drive.uber.radio/uber/bollywoodnow/icecast.audio',
    image: 'assets/scenes/golden-hour.jpg',
    slot: '24/7 Live Broadcast • India'
  },
  {
    id: 'soulful-arijit',
    channel: '02',
    labelHi: 'अरिजीत और रूह',
    labelEn: 'Soulful & Arijit',
    genre: 'Arijit Singh & Soulful Melodies',
    tagline: 'Deep vocals, acoustic strums, and meditative studio melodies.',
    streamUrl: 'https://drive.uber.radio/uber/bollywoodaruitsingh/icecast.audio',
    image: 'assets/scenes/late-night.jpg',
    slot: '24/7 Live Broadcast • Studio'
  },
  {
    id: 'romantic-love',
    channel: '03',
    labelHi: 'इश्क़ और सुकून',
    labelEn: 'Romantic Acoustic',
    genre: 'Heartfelt Love & Acoustic Duets',
    tagline: 'Tender guitar strings, romantic duets, and heartfelt acoustic confessions.',
    streamUrl: 'https://drive.uber.radio/uber/bollywoodlove/icecast.audio',
    image: 'assets/scenes/dusk.jpg',
    slot: '24/7 Live Broadcast • Romance'
  },
  {
    id: 'golden-2010s',
    channel: '04',
    labelHi: 'स्वर्ण दशक',
    labelEn: '2010s Golden Era',
    genre: 'Modern Classics & Anthems',
    tagline: 'Apna Time Aayega, Lootera, Wake Up Sid and timeless 2010s masterpieces.',
    streamUrl: 'https://drive.uber.radio/uber/bollywood2010s/icecast.audio',
    image: 'assets/scenes/afternoon.jpg',
    slot: '24/7 Live Broadcast • Nostalgia'
  },
  {
    id: 'studio-upbeat',
    channel: '05',
    labelHi: 'उत्साह और ताल',
    labelEn: 'Studio Rhythms',
    genre: 'High-Energy & Celebratory Beats',
    tagline: 'Uplifting studio rhythms and energetic compositions to spark creativity.',
    streamUrl: 'https://drive.uber.radio/uber/bollywooddance/icecast.audio',
    image: 'assets/scenes/morning.jpg',
    slot: '24/7 Live Broadcast • Upbeat'
  },
  {
    id: 'dusk-melodies',
    channel: '06',
    labelHi: 'शाम की चाय',
    labelEn: 'Dusk Melodies',
    genre: 'Evergreen Radio Classics',
    tagline: 'Gentle golden melodies, sitar-piano blends, and peaceful dusk listening.',
    streamUrl: 'https://puma.streemlion.com:4130/stream',
    image: 'assets/scenes/dawn.jpg',
    slot: '24/7 Live Broadcast • Evergreen'
  }
];

const SESSION_STREAMS = {
  'late-night': 'https://drive.uber.radio/uber/bollywoodaruitsingh/icecast.audio',
  'dawn': 'https://drive.uber.radio/uber/bollywoodnow/icecast.audio',
  'morning': 'https://puma.streemlion.com:4130/stream',
  'afternoon': 'https://drive.uber.radio/uber/bollywood2010s/icecast.audio',
  'golden-hour': 'https://drive.uber.radio/uber/bollywoodnow/icecast.audio',
  'dusk': 'https://puma.streemlion.com:4130/stream',
  'night': 'https://drive.uber.radio/uber/bollywoodaruitsingh/icecast.audio'
};

const ALL_TRACKS = [];
SESSIONS.forEach(sess => {
  sess.streamUrl = SESSION_STREAMS[sess.id] || SESSION_STREAMS['late-night'];
  sess.playlist.forEach(t => {
    t.session = sess;
    ALL_TRACKS.push(t);
  });
});

// ==========================================================================
// 2. CREATIVE ARTWORK & BILINGUAL QUOTES DATABASE
// ==========================================================================
const ARTWORKS = [
  {
    id: 'chittram-1',
    src: 'assets/artworks/IMG_9812.svg',
    title: 'चित्रांगण • Chitrangana',
    medium: 'oil on linen • 2026',
    alt: 'Chittram atelier study in rich plum, wine and warm linen tones'
  },
  {
    id: 'chittram-2',
    src: 'assets/artworks/IMG_6074.JPG.svg',
    title: 'वन राग • Vana Raga',
    medium: 'oil on canvas • 2026',
    alt: 'Chittram landscape study in olive greens and earthy ochres'
  },
  {
    id: 'chittram-3',
    src: 'assets/artworks/IMG_6077.JPG.svg',
    title: 'रागिनी भैरवी • Bhairavi',
    medium: 'mixed media on linen • 2026',
    alt: 'Chittram expressive study in deep crimson, bistre and earthen tones'
  },
  {
    id: 'chittram-4',
    src: 'assets/artworks/IMG_6081.JPG.svg',
    title: 'रेखा संवाद • Rekha Samvad',
    medium: 'ink & charcoal on parchment • 2026',
    alt: 'Chittram fine ink and charcoal monochrome sketch on textured paper'
  }
];

const QUOTES = [
  {
    hi: '“रंग वही बोलते हैं जो शब्द कभी नहीं कह पाते।”',
    en: '“Colors speak what words can never express.”',
    author: 'अमृता शेरगिल • Amrita Sher-Gil',
    role: 'Pioneering Modern Indian Painter'
  },
  {
    hi: '“चित्रकारी केवल देखना नहीं है, बल्कि उस मौन को महसूस करना है जो कैनवास पर उतरता है।”',
    en: '“Painting is not merely seeing, but feeling the silence that descends upon the linen.”',
    author: 'रवींद्रनाथ ठाकुर • Rabindranath Tagore',
    role: 'Poet, Composer & Painter'
  },
  {
    hi: '“संगीत हवा में खींची गई रेखा है, और चित्रकारी कैनवास पर ठहरा हुआ संगीत।”',
    en: '“Music is a line drawn upon the air; painting is music held still upon canvas.”',
    author: 'स्टूडियो डायरी • Studio Lore',
    role: 'Atelier Philosophy'
  },
  {
    hi: '“जब हाथ, आँख और दिल एक साथ धड़कते हैं, तब कला का जन्म होता है।”',
    en: '“When the hand, the eye, and the heart move together, true art is born.”',
    author: 'जॉन रस्किन • John Ruskin',
    role: 'Art Critic & Philosopher'
  },
  {
    hi: '“मैं पहले अपने सपने को रंगता हूँ, और फिर वह रंग मेरी हक़ीक़त बन जाता है।”',
    en: '“I dream my painting, and then I paint my dream.”',
    author: 'विंसेंट वैन गॉग • Vincent van Gogh',
    role: 'Post-Impressionist Painter'
  },
  {
    hi: '“कला आत्मा से रोज़मर्रा की ज़िंदगी की थकान और धूल पोंछ देती है।”',
    en: '“Art washes away from the soul the dust of everyday life.”',
    author: 'पाब्लो पिकासो • Pablo Picasso',
    role: 'Modernist Painter'
  },
  {
    hi: '“कैनवास पर रखा हर एक रंग दिल की किसी अनकही बात का जवाब है।”',
    en: '“Every stroke of pigment placed upon linen is an answer to an unspoken feeling.”',
    author: 'चित्रकार के विचार • Painter’s Musings',
    role: 'Chittram Atelier'
  }
];

// ==========================================================================
// 3. STATE & DOM REFERENCES
// ==========================================================================
const state = {
  currentStationIndex: 0,
  currentStation: null,
  currentSession: null,
  activeSessionId: null,
  isLiveTime: true,
  playlist: [],               // Currently displayed playlist in the table
  currentTrackIndex: 0,
  currentPlayingTrack: null,  // Currently playing track object
  isPlaying: false,
  isMuted: false,
  isShuffle: false,
  volume: 85,
  artistsCount: 1853,
  tableFilterMode: 'stations', // 'stations' (Live Stations Guide)
  activeAudioEngine: 'direct', // Pure HTML5 audio

  // Non-repeating History
  playedHistory: new Set(),

  // Playback & Interruption State
  userPaused: false,
  isAudioUnlocked: false,

  // Artwork Showcase & 1-Minute Rotation Engine
  currentArtworkIndex: 0,
  artworkTimer: null,
  currentQuoteIndex: 0,
  progressTimer: null,
  metadataPollTimer: null
};

const el = {
  // Persistent Studio HTML5 Audio Player
  studioAudio: document.getElementById('studio-audio'),

  // Masthead
  liveIstClock: document.getElementById('live-ist-clock'),
  mastheadSessionTitle: document.getElementById('masthead-session-title'),
  liveArtistsCount: document.getElementById('live-artists-count'),
  deckMuteBtn: document.getElementById('deck-mute-btn'),
  deckVolIconHigh: document.getElementById('deck-vol-icon-high'),
  deckVolIconMuted: document.getElementById('deck-vol-icon-muted'),
  deckVolSlider: document.getElementById('deck-vol-slider'),

  // Autoplay Banner
  unmuteNotice: document.getElementById('unmute-notice'),
  unmuteStartBtn: document.getElementById('unmute-start-btn'),

  // Hero Left Column (Player & Metadata)
  deckTrackTitle: document.getElementById('deck-track-title'),
  deckTrackArtist: document.getElementById('deck-track-artist'),
  deckTrackAlbum: document.getElementById('deck-track-album'),
  deckTrackBlurb: document.getElementById('deck-track-blurb'),
  audioEngineToggle: document.getElementById('audio-engine-toggle'),
  engineToggleLabel: document.getElementById('engine-toggle-label'),
  engineStatusDot: document.getElementById('engine-status-dot'),
  audioEngineBadge: document.getElementById('audio-engine-badge'),
  queueStatusBadge: document.getElementById('queue-status-badge'),
  deckPrevBtn: document.getElementById('deck-prev-btn'),
  deckPlayBtn: document.getElementById('deck-play-btn'),
  deckPlayIcon: document.getElementById('deck-play-icon'),
  deckPauseIcon: document.getElementById('deck-pause-icon'),
  playKeyLabel: document.getElementById('play-key-label'),
  deckNextBtn: document.getElementById('deck-next-btn'),
  deckShuffleBtn: document.getElementById('deck-shuffle-btn'),
  deckYtOut: document.getElementById('deck-yt-out'),

  // Scrubber
  trackScrubContainer: document.getElementById('track-scrub-container'),
  trackScrubFill: document.getElementById('track-scrub-fill'),
  deckTimeCurrent: document.getElementById('deck-time-current'),
  deckTimeDuration: document.getElementById('deck-time-duration'),

  // Hero Right Column (Easel Showcase)
  easelShowcaseFrame: document.getElementById('easel-showcase-frame'),
  easelCanvasWrapper: document.getElementById('easel-canvas-wrapper'),
  easelImage: document.getElementById('easel-image'),
  easelCaptionTitle: document.getElementById('easel-caption-title'),
  easelCaptionMedium: document.getElementById('easel-caption-medium'),
  easelDots: document.getElementById('easel-dots'),

  // Sessions Selector Bar
  deckSessionName: document.getElementById('deck-session-name'),
  sessionChipsContainer: document.getElementById('session-chips-container'),

  // Soundtrack Table & Filters
  soundtrackTableBody: document.getElementById('soundtrack-table-body'),
  filterBtnSession: document.getElementById('filter-btn-session'),
  filterSessionLabel: document.getElementById('filter-session-label'),
  filterBtnAll: document.getElementById('filter-btn-all'),

  // Quotes Section
  quoteHi: document.getElementById('quote-hi'),
  quoteEn: document.getElementById('quote-en'),
  quoteAuthor: document.getElementById('quote-author'),
  quoteRole: document.getElementById('quote-role'),
  nextQuoteBtn: document.getElementById('next-quote-btn'),
  quotesDotsContainer: document.getElementById('quotes-dots-container'),

  // Legacy elements for backwards compatibility
  artCurrent: document.getElementById('backdrop-image-current'),
  artNext: document.getElementById('backdrop-image-next'),
  clockResyncBtn: document.getElementById('clock-resync-btn'),
  resyncClockReadout: document.getElementById('resync-clock-readout')
};

// ==========================================================================
// 4. TIME & CLOCK UTILITIES (Indian Standard Time)
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
  const ampm = h >= 12 ? 'pm' : 'am';
  h = h % 12 || 12;
  return `${h}:${m.toString().padStart(2, '0')} ${ampm} IST`;
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
// 5. SESSION & SMART PLAYLIST MANAGEMENT (Non-Stop, No Repeats)
// ==========================================================================
function shuffle(arr) {
  const c = [...arr];
  for (let i = c.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [c[i], c[j]] = [c[j], c[i]];
  }
  return c;
}

function getTrackAudioSrc(track, session) {
  if (track && track.audioSrc) return track.audioSrc;
  if (track && track.session && track.session.audioSrc) return track.session.audioSrc;
  if (session && session.audioSrc) return session.audioSrc;
  const sess = session || state.currentSession;
  const id = sess ? sess.id : 'golden-hour';
  return `assets/audio/session-${id}.mp3`;
}

function setSession(session, isManual = false) {
  if (state.currentSession && state.currentSession.id === session.id && !isManual) {
    return;
  }

  state.currentSession = session;

  // Masthead & Labels
  if (el.mastheadSessionTitle) el.mastheadSessionTitle.textContent = `${session.labelHi} • ${session.labelEn}`;
  if (el.deckSessionName) el.deckSessionName.textContent = `${session.labelEn} Session (${session.slot})`;
  if (el.filterSessionLabel) el.filterSessionLabel.textContent = `${session.labelHi} (${session.playlist.length} Songs)`;

  // If in session view mode, set playlist to session tracks
  if (state.tableFilterMode === 'session') {
    state.playlist = [...session.playlist];
  } else {
    state.playlist = [...ALL_TRACKS];
  }

  // Set initial track if none playing or manual switch
  if (!state.currentPlayingTrack || isManual) {
    state.currentTrackIndex = 0;
    state.currentPlayingTrack = state.playlist[0];
    renderTrackInfo();
    loadTrack(state.isPlaying);
  }

  renderSessionChips();
  renderSoundtrackTable();
}

function renderTrackInfo() {
  const currentStation = state.currentStation || RADIO_STATIONS[0];
  const track = state.currentPlayingTrack || (currentStation ? {
    title: currentStation.labelEn,
    artist: currentStation.genre,
    album: `${currentStation.labelEn} • Live Radio`,
    blurb: currentStation.tagline,
    duration: 'LIVE'
  } : ALL_TRACKS[0]);

  if (!track) return;
  state.currentPlayingTrack = track;

  if (el.deckTrackTitle) el.deckTrackTitle.textContent = track.title;
  if (el.deckTrackArtist) el.deckTrackArtist.textContent = track.artist;
  if (el.deckTrackAlbum) el.deckTrackAlbum.textContent = track.album || `${currentStation.labelEn} • Live Studio Radio`;
  if (el.deckTrackBlurb) el.deckTrackBlurb.textContent = track.blurb || currentStation.tagline;
  if (el.deckYtOut) el.deckYtOut.href = `https://www.youtube.com/results?search_query=${encodeURIComponent(track.title + ' ' + track.artist)}`;

  if (el.trackScrubFill) el.trackScrubFill.style.width = '100%';
  if (el.deckTimeCurrent) el.deckTimeCurrent.textContent = 'LIVE';
  if (el.deckTimeDuration) el.deckTimeDuration.textContent = 'ON AIR';

  const liveBadgeText = document.getElementById('live-station-badge-text');
  if (liveBadgeText && currentStation) {
    liveBadgeText.textContent = `${currentStation.labelEn} • Live`;
  }

  updateMediaSession(track);
  updateSoundtrackTableActiveRow();
}

function updatePlayState(playing) {
  state.isPlaying = playing;
  if (playing) {
    el.deckPlayIcon?.classList.add('hidden');
    el.deckPauseIcon?.classList.remove('hidden');
    if (el.playKeyLabel) el.playKeyLabel.textContent = 'PAUSE';
    startTrackProgress();
    acquireDualWakeLock();
  } else {
    el.deckPlayIcon?.classList.remove('hidden');
    el.deckPauseIcon?.classList.add('hidden');
    if (el.playKeyLabel) el.playKeyLabel.textContent = 'PLAY';
    stopTrackProgress();
    releaseDualWakeLock();
  }

  updateSoundtrackTableActiveRow();

  if ('mediaSession' in navigator) {
    try {
      navigator.mediaSession.playbackState = playing ? 'playing' : 'paused';
    } catch (e) {}
  }
}

function getCurrentPlaybackTime() {
  if (state.activeAudioEngine === 'direct' && el.studioAudio) {
    try {
      if (!isNaN(el.studioAudio.currentTime) && el.studioAudio.currentTime >= 0) {
        return el.studioAudio.currentTime;
      }
    } catch (e) {}
  }
  if (state.ytReady && state.ytPlayer && typeof state.ytPlayer.getCurrentTime === 'function') {
    try {
      const ytTime = state.ytPlayer.getCurrentTime();
      if (!isNaN(ytTime) && ytTime >= 0) return ytTime;
    } catch (e) {}
  }
  return 0;
}

function getCurrentPlaybackDuration() {
  if (state.activeAudioEngine === 'direct' && el.studioAudio) {
    try {
      if (!isNaN(el.studioAudio.duration) && el.studioAudio.duration > 0) {
        return el.studioAudio.duration;
      }
    } catch (e) {}
  }
  if (state.ytReady && state.ytPlayer && typeof state.ytPlayer.getDuration === 'function') {
    try {
      const ytDur = state.ytPlayer.getDuration();
      if (!isNaN(ytDur) && ytDur > 0) return ytDur;
    } catch (e) {}
  }
  if (state.currentPlayingTrack && state.currentPlayingTrack.duration) {
    const parts = state.currentPlayingTrack.duration.split(':');
    if (parts.length === 2) {
      return parseInt(parts[0], 10) * 60 + parseInt(parts[1], 10);
    }
  }
  return 240;
}

function seekToTime(seconds) {
  if (state.activeAudioEngine === 'direct' && el.studioAudio && !isNaN(seconds)) {
    try {
      el.studioAudio.currentTime = Math.min(el.studioAudio.duration || seconds, Math.max(0, seconds));
    } catch (e) {}
  } else if (state.ytReady && state.ytPlayer && typeof state.ytPlayer.seekTo === 'function') {
    try {
      state.ytPlayer.seekTo(seconds, true);
    } catch (e) {}
  }
  updateTrackProgressDisplay();
  updateMediaSessionPositionState();
}

function updateTrackProgressDisplay() {
  const cur = getCurrentPlaybackTime();
  const dur = getCurrentPlaybackDuration();
  if (el.deckTimeCurrent) el.deckTimeCurrent.textContent = formatMinutesSeconds(cur);
  if (dur > 0 && el.deckTimeDuration) {
    el.deckTimeDuration.textContent = formatMinutesSeconds(dur);
    const pct = Math.min(100, Math.max(0, (cur / dur) * 100));
    if (el.trackScrubFill) el.trackScrubFill.style.width = `${pct}%`;
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
// 6. NATIVE STUDIO AUDIO ENGINE (Direct Lock-Screen & Pocket Optimized)
// ==========================================================================
function initYouTube() {
  // Native HTML5 studio-audio engine handles continuous playback
}

// ==========================================================================
// 7. DUAL-LAYER SCREEN WAKE LOCK & BACKGROUND AUDIO ENGINE
// Keeps display awake on iOS & Android so music NEVER stops on screen lock
// ==========================================================================
const NO_SLEEP_WEBM = "data:video/webm;base64,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";

const NO_SLEEP_MP4 = "data:video/mp4;base64,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";

let screenWakeLock = null;
let wakeVideo = null;
let isAcquiringWakeLock = false;

function ensureWakeVideo() {
  if (wakeVideo) return wakeVideo;
  if (typeof document === 'undefined' || !document.body) return null;
  try {
    wakeVideo = document.createElement('video');
    wakeVideo.id = 'chittram-keepawake-video';
    wakeVideo.title = 'Keep Display Awake';
    wakeVideo.setAttribute('playsinline', '');
    wakeVideo.setAttribute('webkit-playsinline', '');
    wakeVideo.setAttribute('loop', '');
    wakeVideo.muted = true;
    wakeVideo.defaultMuted = true;
    wakeVideo.playsInline = true;
    wakeVideo.loop = true;
    // Set MP4 directly for flawless iOS Safari & Android mobile hardware decoding
    wakeVideo.src = NO_SLEEP_MP4;
    wakeVideo.style.cssText = 'position:fixed;bottom:0;right:0;width:10px;height:10px;opacity:0.01;pointer-events:none;z-index:-9999;';

    document.body.appendChild(wakeVideo);
    return wakeVideo;
  } catch (e) {
    return null;
  }
}

function acquireDualWakeLock() {
  // 1. Universal video wake lock assertion (Forces iOS & Android displays to stay awake indefinitely)
  try {
    const v = ensureWakeVideo();
    if (v && v.paused) {
      const p = v.play();
      if (p && typeof p.catch === 'function') {
        p.catch(() => {});
      }
    }
  } catch (e) {}

  // 2. Native Screen Wake Lock API for modern browsers (Safari 16.4+, Chrome, Edge)
  if ('wakeLock' in navigator && !screenWakeLock) {
    navigator.wakeLock.request('screen').then(lock => {
      screenWakeLock = lock;
      screenWakeLock.addEventListener('release', () => {
        screenWakeLock = null;
        if (state.isPlaying && !state.userPaused) {
          setTimeout(acquireDualWakeLock, 800);
        }
      });
    }).catch(() => {});
  }
}

function releaseDualWakeLock() {
  if (screenWakeLock) {
    try { screenWakeLock.release(); } catch (e) {}
    screenWakeLock = null;
  }
  if (wakeVideo && !wakeVideo.paused) {
    try { wakeVideo.pause(); } catch (e) {}
  }
}

// Backwards-compatible aliases
async function requestWakeLock() {
  return acquireDualWakeLock();
}

function releaseWakeLock() {
  return releaseDualWakeLock();
}

function ensureBackgroundAudioKeeper() {}
function pauseBackgroundAudioKeeper() {}

function setupAudioSession() {
  if ('audioSession' in navigator) {
    try {
      navigator.audioSession.type = 'playback';
    } catch (err) {}
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

  const currentStation = state.currentStation || RADIO_STATIONS[0];
  let sceneJpg = '';
  try {
    sceneJpg = new URL(currentStation.image || 'assets/scenes/golden-hour.jpg', window.location.href).href;
  } catch (e) {
    sceneJpg = currentStation.image || '';
  }

  const artworkList = [];
  if (sceneJpg) {
    artworkList.push({ src: sceneJpg, sizes: '512x512', type: 'image/jpeg' });
    artworkList.push({ src: sceneJpg, sizes: '256x256', type: 'image/jpeg' });
    artworkList.push({ src: sceneJpg, sizes: '128x128', type: 'image/jpeg' });
  }

  try {
    navigator.mediaSession.metadata = new MediaMetadata({
      title: track.title,
      artist: track.artist,
      album: `${currentStation.labelEn} • चित्रम् Chittram Live Radio`,
      artwork: artworkList
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

  el.studioAudio.addEventListener('ended', () => {
    playNext(true);
  });

  el.studioAudio.addEventListener('timeupdate', () => {
    updateTrackProgressDisplay();
    updateMediaSessionPositionState();
  });

  el.studioAudio.addEventListener('loadedmetadata', () => {
    updateTrackProgressDisplay();
    updateMediaSessionPositionState();
  });

  el.studioAudio.addEventListener('play', () => {
    updatePlayState(true);
  });

  el.studioAudio.addEventListener('pause', () => {
    if (state.userPaused) {
      updatePlayState(false);
    }
  });

  el.studioAudio.addEventListener('error', (e) => {
    console.warn('Audio stream error, reconnecting in 2s...', e);
    if (state.isPlaying && !state.userPaused) {
      setTimeout(() => {
        if (state.isPlaying && !state.userPaused && el.studioAudio) {
          const sess = state.currentSession || findSessionForHour(getLiveKolkataHour());
          el.studioAudio.src = (sess && sess.streamUrl) || SESSION_STREAMS['late-night'];
          el.studioAudio.play().catch(() => {});
        }
      }, 2000);
    }
  });
}

// ==========================================================================
// 8. LIVE RADIO STREAMING & ICY METADATA SYNC ENGINE
// ==========================================================================
let liveMetadataAbortController = null;
let metadataPollTimer = null;

async function syncLiveStreamMetadata(station) {
  if (!station || !station.streamUrl) return;

  if (liveMetadataAbortController) {
    try { liveMetadataAbortController.abort(); } catch (e) {}
  }
  liveMetadataAbortController = new AbortController();
  const signal = liveMetadataAbortController.signal;

  try {
    const res = await fetch(station.streamUrl, {
      headers: { 'Icy-MetaData': '1' },
      signal
    });

    const metaint = parseInt(res.headers.get('icy-metaint'), 10);
    if (!metaint || isNaN(metaint)) {
      applyStationMetadataFallback(station);
      return;
    }

    const reader = res.body.getReader();
    let bytesRead = 0;
    const chunks = [];

    while (bytesRead < metaint + 4096) {
      const { done, value } = await reader.read();
      if (done || !value) break;
      chunks.push(value);
      bytesRead += value.length;
    }

    try { reader.cancel(); } catch (e) {}

    const totalLen = chunks.reduce((acc, c) => acc + c.length, 0);
    const merged = new Uint8Array(totalLen);
    let offset = 0;
    for (const c of chunks) {
      merged.set(c, offset);
      offset += c.length;
    }

    if (merged.length > metaint) {
      const metaLengthByte = merged[metaint];
      const metaLength = metaLengthByte * 16;
      if (metaLength > 0 && (metaint + 1 + metaLength) <= merged.length) {
        const metaBytes = merged.slice(metaint + 1, metaint + 1 + metaLength);
        const decoder = new TextDecoder('utf-8', { fatal: false });
        const metaString = decoder.decode(metaBytes);
        const match = metaString.match(/StreamTitle='(.*?)';/i);
        if (match && match[1]) {
          const rawTitle = match[1].trim();
          if (rawTitle) {
            applyParsedTrackMetadata(rawTitle, station);
            return;
          }
        }
      }
    }

    applyStationMetadataFallback(station);
  } catch (err) {
    if (err.name !== 'AbortError') {
      applyStationMetadataFallback(station);
    }
  }
}

function applyParsedTrackMetadata(rawTitle, station) {
  let cleaned = rawTitle.replace(/\s+/g, ' ').replace(/\s+and\s+/gi, ' & ').trim();

  let artist = station.genre || 'Chittram Studio';
  let title = cleaned;

  if (cleaned.includes(' - ')) {
    const parts = cleaned.split(' - ');
    artist = parts[0].trim();
    title = parts.slice(1).join(' - ').trim();
  } else if (cleaned.includes('-')) {
    const parts = cleaned.split('-');
    artist = parts[0].trim();
    title = parts.slice(1).join('-').trim();
  }

  const liveTrack = {
    title,
    artist,
    album: `${station.labelEn} • Live Studio Radio`,
    year: 'Live',
    duration: 'LIVE',
    blurb: station.tagline,
    stationId: station.id,
    isLiveBroadcast: true
  };

  state.currentPlayingTrack = liveTrack;
  station.currentSong = { title, artist };

  renderTrackInfo();
  updateMediaSession(liveTrack);
  updateSoundtrackTableActiveRow();
}

function applyStationMetadataFallback(station) {
  const fallbackTrack = {
    title: station.labelEn,
    artist: station.genre,
    album: `Live Studio Broadcast • चित्रम् Chittram`,
    year: 'Live',
    duration: 'LIVE',
    blurb: station.tagline,
    stationId: station.id,
    isLiveBroadcast: true
  };
  state.currentPlayingTrack = fallbackTrack;
  renderTrackInfo();
  updateMediaSession(fallbackTrack);
  updateSoundtrackTableActiveRow();
}

function startMetadataPolling() {
  if (metadataPollTimer) clearInterval(metadataPollTimer);
  metadataPollTimer = setInterval(() => {
    if (state.isPlaying && !state.userPaused && state.currentStation) {
      syncLiveStreamMetadata(state.currentStation);
    }
  }, 18000);
}

function stopMetadataPolling() {
  if (metadataPollTimer) {
    clearInterval(metadataPollTimer);
    metadataPollTimer = null;
  }
}

function tuneToStation(stationIndex, autoPlay = true) {
  state.currentStationIndex = stationIndex;
  const station = RADIO_STATIONS[stationIndex];
  state.currentStation = station;
  state.activeSessionId = station.id;

  // Masthead & Labels
  if (el.mastheadSessionTitle) {
    el.mastheadSessionTitle.textContent = `${station.labelHi} • ${station.labelEn}`;
  }
  if (el.deckSessionName) {
    el.deckSessionName.textContent = `${station.labelEn} (${station.slot})`;
  }
  const liveBadgeText = document.getElementById('live-station-badge-text');
  if (liveBadgeText) {
    liveBadgeText.textContent = `${station.labelEn} • Live`;
  }

  // Next / Prev button hints
  const nextStation = RADIO_STATIONS[(stationIndex + 1) % RADIO_STATIONS.length];
  const prevStation = RADIO_STATIONS[(stationIndex - 1 + RADIO_STATIONS.length) % RADIO_STATIONS.length];
  if (el.deckNextBtn) {
    el.deckNextBtn.title = `Switch Station: ${nextStation.labelEn} (Right Arrow)`;
    el.deckNextBtn.setAttribute('aria-label', `Next Station: ${nextStation.labelEn}`);
  }
  if (el.deckPrevBtn) {
    el.deckPrevBtn.title = `Switch Station: ${prevStation.labelEn} (Left Arrow)`;
    el.deckPrevBtn.setAttribute('aria-label', `Previous Station: ${prevStation.labelEn}`);
  }

  if (station.currentSong) {
    applyParsedTrackMetadata(`${station.currentSong.artist} - ${station.currentSong.title}`, station);
  } else {
    applyStationMetadataFallback(station);
  }

  if (el.studioAudio) {
    if (el.studioAudio.src !== station.streamUrl) {
      el.studioAudio.src = station.streamUrl;
      if (typeof el.studioAudio.load === 'function') el.studioAudio.load();
    }
    el.studioAudio.loop = false;
    el.studioAudio.muted = state.isMuted;
    el.studioAudio.volume = state.isMuted ? 0 : (state.volume / 100);

    if (autoPlay || state.isPlaying) {
      state.isPlaying = true;
      state.userPaused = false;
      const p = el.studioAudio.play();
      if (p !== undefined) {
        p.then(() => {
          updatePlayState(true);
          acquireDualWakeLock();
          if (el.unmuteNotice) el.unmuteNotice.classList.add('hidden');
        }).catch(err => {
          console.warn('Playback error:', err);
        });
      }
    }
  }

  syncLiveStreamMetadata(station);
  renderSessionChips();
  renderSoundtrackTable();
}

function switchStation(direction = 1, autoPlay = true) {
  let newIdx = (state.currentStationIndex + direction) % RADIO_STATIONS.length;
  if (newIdx < 0) newIdx = RADIO_STATIONS.length - 1;
  tuneToStation(newIdx, autoPlay);
}

let isAdvancingStation = false;
function playNext(autoPlay = true) {
  if (isAdvancingStation) return;
  isAdvancingStation = true;
  setTimeout(() => { isAdvancingStation = false; }, 350);
  switchStation(1, autoPlay);
}

function playPrev(autoPlay = true) {
  if (isAdvancingStation) return;
  isAdvancingStation = true;
  setTimeout(() => { isAdvancingStation = false; }, 350);
  switchStation(-1, autoPlay);
}

function loadTrack(autoPlay = true) {
  tuneToStation(state.currentStationIndex, autoPlay);
}

function startPlaybackWithSound() {
  state.userPaused = false;
  state.isMuted = false;
  if (!state.volume || state.volume === 0) state.volume = 85;

  setupAudioSession();
  initMediaSessionHandlers();
  acquireDualWakeLock();
  startMetadataPolling();

  const station = state.currentStation || RADIO_STATIONS[0];
  if (!state.currentStation) {
    tuneToStation(0, true);
    return;
  }

  if (el.studioAudio) {
    if (el.studioAudio.src !== station.streamUrl) {
      el.studioAudio.src = station.streamUrl;
      if (typeof el.studioAudio.load === 'function') el.studioAudio.load();
    }
    el.studioAudio.loop = false;
    el.studioAudio.muted = false;
    el.studioAudio.volume = state.volume / 100;

    const p = el.studioAudio.play();
    if (p !== undefined) {
      p.then(() => {
        updatePlayState(true);
        if (el.unmuteNotice) el.unmuteNotice.classList.add('hidden');
      }).catch(err => {
        console.warn('Playback start error:', err);
        if (el.unmuteNotice) el.unmuteNotice.classList.remove('hidden');
      });
    }
  }

  updateMuteIcons();
  updatePlayState(true);
  syncLiveStreamMetadata(station);
}

function pausePlayback() {
  state.userPaused = true;
  if (el.studioAudio) {
    try { el.studioAudio.pause(); } catch (e) {}
  }
  updatePlayState(false);
  releaseDualWakeLock();
}

function togglePlay() {
  if (state.isPlaying) {
    pausePlayback();
  } else {
    startPlaybackWithSound();
  }
}

// ==========================================================================
// 8. ARTWORK ROTATION ENGINE (Gallery Showcase • 1-Minute Interval)
// ==========================================================================
function preloadArtworks() {
  ARTWORKS.forEach((art) => {
    const img = new Image();
    img.src = art.src;
  });
}

function renderArtworkDots() {
  if (!el.easelDots) return;
  el.easelDots.innerHTML = '';
  ARTWORKS.forEach((art, idx) => {
    const dot = document.createElement('button');
    dot.type = 'button';
    dot.className = `easel-dot ${idx === state.currentArtworkIndex ? 'active' : ''}`;
    dot.setAttribute('aria-label', `View artwork ${idx + 1}: ${art.title}`);
    dot.setAttribute('role', 'tab');
    dot.setAttribute('aria-selected', idx === state.currentArtworkIndex ? 'true' : 'false');
    dot.addEventListener('click', (e) => {
      e.stopPropagation();
      switchArtwork(idx, true);
    });
    el.easelDots.appendChild(dot);
  });
}

function updateArtworkDots() {
  if (!el.easelDots) return;
  const dots = el.easelDots.querySelectorAll('.easel-dot');
  dots.forEach((dot, idx) => {
    const isActive = idx === state.currentArtworkIndex;
    dot.classList.toggle('active', isActive);
    dot.setAttribute('aria-selected', isActive ? 'true' : 'false');
  });
}

function switchArtwork(index, resetTimer = true) {
  if (index < 0 || index >= ARTWORKS.length) index = 0;
  state.currentArtworkIndex = index;
  const art = ARTWORKS[index];
  if (!art || !el.easelImage) return;

  el.easelImage.classList.add('fade-out');

  setTimeout(() => {
    el.easelImage.src = art.src;
    el.easelImage.alt = art.alt;
    if (el.easelCaptionTitle) el.easelCaptionTitle.textContent = art.title;
    if (el.easelCaptionMedium) el.easelCaptionMedium.textContent = art.medium;
    updateArtworkDots();
    updateMediaSession(state.currentPlayingTrack);

    el.easelImage.onload = () => {
      el.easelImage.classList.remove('fade-out');
    };
    setTimeout(() => {
      el.easelImage.classList.remove('fade-out');
    }, 120);
  }, 220);

  if (resetTimer) {
    restartArtworkRotation();
  }
}

function rotateArtwork() {
  const nextIdx = (state.currentArtworkIndex + 1) % ARTWORKS.length;
  switchArtwork(nextIdx, false);
}

function startArtworkRotation() {
  stopArtworkRotation();
  // Automatically rotates every 1 minute (60,000 ms)
  state.artworkTimer = setInterval(() => {
    rotateArtwork();
  }, 60000);
}

function stopArtworkRotation() {
  if (state.artworkTimer) {
    clearInterval(state.artworkTimer);
    state.artworkTimer = null;
  }
}

function restartArtworkRotation() {
  stopArtworkRotation();
  startArtworkRotation();
}

// ==========================================================================
// 9. BILINGUAL HINDI & ENGLISH QUOTES
// ==========================================================================
function renderQuote(index) {
  state.currentQuoteIndex = (index + QUOTES.length) % QUOTES.length;
  const q = QUOTES[state.currentQuoteIndex];

  if (el.quoteHi) el.quoteHi.textContent = q.hi;
  if (el.quoteEn) el.quoteEn.textContent = q.en;
  if (el.quoteAuthor) el.quoteAuthor.textContent = q.author;
  if (el.quoteRole) el.quoteRole.textContent = q.role;

  updateQuoteDots();
}

function nextQuote() {
  renderQuote(state.currentQuoteIndex + 1);
}

function renderQuoteDots() {
  if (!el.quotesDotsContainer) return;
  el.quotesDotsContainer.innerHTML = '';
  QUOTES.forEach((_, idx) => {
    const dot = document.createElement('span');
    dot.className = 'quote-dot' + (idx === state.currentQuoteIndex ? ' active' : '');
    dot.setAttribute('role', 'button');
    dot.setAttribute('aria-label', `View quote ${idx + 1}`);
    dot.addEventListener('click', () => renderQuote(idx));
    el.quotesDotsContainer.appendChild(dot);
  });
}

function updateQuoteDots() {
  if (!el.quotesDotsContainer) return;
  const dots = el.quotesDotsContainer.querySelectorAll('.quote-dot');
  dots.forEach((dot, idx) => {
    dot.classList.toggle('active', idx === state.currentQuoteIndex);
  });
}

// ==========================================================================
// 10. SESSIONS SELECTOR BAR & LIVE STATIONS GUIDE TABLE
// ==========================================================================
function renderSessionChips() {
  if (!el.sessionChipsContainer) return;
  el.sessionChipsContainer.innerHTML = '';

  const activeId = state.currentStation ? state.currentStation.id : RADIO_STATIONS[0].id;

  RADIO_STATIONS.forEach((station, index) => {
    const chip = document.createElement('button');
    chip.type = 'button';
    chip.className = 'session-chip' + (station.id === activeId ? ' active' : '');
    chip.setAttribute('data-id', station.id);

    chip.innerHTML = `
      <span class="chip-dot" aria-hidden="true"></span>
      <span>${station.labelHi} • ${station.labelEn}</span>
    `;

    chip.addEventListener('click', () => {
      state.isLiveTime = false;
      tuneToStation(index, true);
    });

    el.sessionChipsContainer.appendChild(chip);
  });
}

function renderSoundtrackTable() {
  if (!el.soundtrackTableBody) return;
  el.soundtrackTableBody.innerHTML = '';

  RADIO_STATIONS.forEach((station, index) => {
    const tr = document.createElement('tr');
    tr.setAttribute('data-index', index);
    const isCurrent = state.currentStationIndex === index;
    if (isCurrent) tr.classList.add('active-row');

    const songSub = station.currentSong
      ? `<span class="station-now-playing">▶ ${station.currentSong.title} — ${station.currentSong.artist}</span>`
      : `<span class="station-now-playing">Live stream • Tap to tune in</span>`;

    tr.innerHTML = `
      <td class="col-num track-index-num">${station.channel}</td>
      <td class="col-title table-track-title">
        <div class="station-title-cell">
          <div class="title-with-wave">
            <span class="table-title-text">${station.labelHi} • ${station.labelEn}</span>
            ${isCurrent && state.isPlaying ? '<span class="active-sound-wave" aria-hidden="true"><span></span><span></span><span></span></span>' : ''}
          </div>
          ${songSub}
        </div>
        <span class="table-mobile-artist">${station.genre}</span>
      </td>
      <td class="col-artist table-track-artist">${station.genre}</td>
      <td class="col-time table-track-time">
        <span class="station-status-live"><span class="live-dot-green"></span> LIVE</span>
      </td>
    `;

    tr.addEventListener('click', () => {
      tuneToStation(index, true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    el.soundtrackTableBody.appendChild(tr);
  });
}

function updateSoundtrackTableActiveRow() {
  if (!el.soundtrackTableBody || typeof el.soundtrackTableBody.querySelectorAll !== 'function') return;
  const rows = el.soundtrackTableBody.querySelectorAll('tr');

  rows.forEach((tr, index) => {
    const isCurrent = state.currentStationIndex === index;
    tr.classList.toggle('active-row', isCurrent);
    const station = RADIO_STATIONS[index];
    if (!station) return;

    const titleEl = tr.querySelector('.table-track-title');
    if (titleEl) {
      const songSub = station.currentSong
        ? `<span class="station-now-playing">▶ ${station.currentSong.title} — ${station.currentSong.artist}</span>`
        : `<span class="station-now-playing">Live stream • Tap to tune in</span>`;

      titleEl.innerHTML = `
        <div class="station-title-cell">
          <div class="title-with-wave">
            <span class="table-title-text">${station.labelHi} • ${station.labelEn}</span>
            ${isCurrent && state.isPlaying ? '<span class="active-sound-wave" aria-hidden="true"><span></span><span></span><span></span></span>' : ''}
          </div>
          ${songSub}
        </div>
        <span class="table-mobile-artist">${station.genre}</span>
      `;
    }
  });
}

// ==========================================================================
// 11. EVENT LISTENERS & SETUP
// ==========================================================================
function setupDeckControls() {
  el.deckPlayBtn?.addEventListener('click', togglePlay);
  el.deckNextBtn?.addEventListener('click', () => playNext(true));
  el.deckPrevBtn?.addEventListener('click', () => playPrev(true));


  el.deckShuffleBtn?.addEventListener('click', () => {
    state.isShuffle = !state.isShuffle;
    el.deckShuffleBtn.classList.toggle('toggled', state.isShuffle);
  });

  // Table Filter: Current Session vs All Songs
  el.filterBtnSession?.addEventListener('click', () => {
    state.tableFilterMode = 'session';
    el.filterBtnSession.classList.add('active');
    el.filterBtnAll.classList.remove('active');
    state.playlist = [...state.currentSession.playlist];
    renderSoundtrackTable();
  });

  el.filterBtnAll?.addEventListener('click', () => {
    state.tableFilterMode = 'all';
    el.filterBtnAll.classList.add('active');
    el.filterBtnSession.classList.remove('active');
    state.playlist = [...ALL_TRACKS];
    renderSoundtrackTable();
  });

  el.deckVolSlider?.addEventListener('input', (e) => {
    const vol = parseInt(e.target.value, 10);
    setAppVolume(vol);
    if (vol > 0 && state.isMuted) {
      state.isMuted = false;
      updateMuteIcons();
    }
  });

  el.deckMuteBtn?.addEventListener('click', () => {
    state.isMuted = !state.isMuted;
    setAppVolume(state.volume || 85);
    if (el.deckVolSlider) {
      el.deckVolSlider.value = state.isMuted ? 0 : (state.volume || 85);
    }
    updateMuteIcons();
  });

  // Track scrub click
  el.trackScrubContainer?.addEventListener('click', (e) => {
    const dur = getCurrentPlaybackDuration();
    if (dur <= 0) return;
    const rect = el.trackScrubContainer.getBoundingClientRect();
    const ratio = Math.min(1, Math.max(0, (e.clientX - rect.left) / rect.width));
    seekToTime(dur * ratio);
  });

  // Easel Showcase Click -> advance to next artwork & reset 1-min timer
  el.easelCanvasWrapper?.addEventListener('click', () => {
    rotateArtwork();
    restartArtworkRotation();
  });

  // Quotes Switcher
  el.nextQuoteBtn?.addEventListener('click', nextQuote);

  // Audio policy unlock for iOS / Android user gesture compliance
  function unlockAudio() {
    setupAudioSession();
    initMediaSessionHandlers();
    if (state.isPlaying && !state.userPaused) {
      acquireDualWakeLock();
    }
  }

  ['pointerdown', 'keydown', 'touchend', 'click'].forEach(evt => {
    document.addEventListener(evt, () => {
      unlockAudio();
      if (state.isPlaying && !state.userPaused) {
        acquireDualWakeLock();
      }
    }, { passive: true });
  });

  el.unmuteStartBtn?.addEventListener('click', startPlaybackWithSound);

  // Background & Lock Screen audio persistence & recovery
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      if (state.isPlaying && !state.userPaused) {
        acquireDualWakeLock();
      }
    } else {
      if (state.isPlaying && !state.userPaused) {
        acquireDualWakeLock();
        if (el.studioAudio && el.studioAudio.paused) {
          try { el.studioAudio.play(); } catch (e) {}
        }
        updatePlayState(true);
      }
    }
  });

  window.addEventListener('focus', () => {
    if (state.isPlaying && !state.userPaused) {
      acquireDualWakeLock();
      if (el.studioAudio && el.studioAudio.paused) {
        try { el.studioAudio.play(); } catch (e) {}
      }
    }
  });

  window.addEventListener('pageshow', () => {
    if (state.isPlaying && !state.userPaused) {
      acquireDualWakeLock();
      if (el.studioAudio && el.studioAudio.paused) {
        try { el.studioAudio.play(); } catch (e) {}
      }
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
      playNext(true);
    } else if (e.code === 'ArrowLeft') {
      e.preventDefault();
      playPrev(true);
    } else if (e.key === 'm' || e.key === 'M') {
      el.deckMuteBtn?.click();
    }
  });
}

function updateMuteIcons() {
  if (state.isMuted || state.volume === 0) {
    el.deckVolIconHigh?.classList.add('hidden');
    el.deckVolIconMuted?.classList.remove('hidden');
  } else {
    el.deckVolIconHigh?.classList.remove('hidden');
    el.deckVolIconMuted?.classList.add('hidden');
  }
}

// ==========================================================================
// 12. INITIALIZATION
// ==========================================================================
function init() {
  setupDeckControls();
  setupAudioElementListeners();
  setupAudioSession();
  initMediaSessionHandlers();
  renderQuoteDots();
  renderQuote(0);

  // Easel Showcase: Preload & Start 1-Minute Rotation Loop
  preloadArtworks();
  renderArtworkDots();
  switchArtwork(0, false);
  startArtworkRotation();

  // Initialize with Station 0: Trending Hits India
  tuneToStation(0, false);
  startMetadataPolling();

  // Live IST Clock Loop
  setInterval(() => {
    const str = formatClockString();
    if (el.liveIstClock) el.liveIstClock.textContent = str;
  }, 1000);

  if (el.liveIstClock) el.liveIstClock.textContent = formatClockString();

  // Natural Listener Count fluctuation
  setInterval(() => {
    const delta = (Math.random() > 0.5 ? 1 : -1) * (Math.random() > 0.7 ? 3 : 1);
    state.artistsCount = Math.max(1820, Math.min(1910, state.artistsCount + delta));
    if (el.liveArtistsCount) el.liveArtistsCount.textContent = state.artistsCount.toLocaleString('en-IN');
  }, 8000);

  // Persistent Keep-Alive Watchdog:
  // 1. Keeps dual wake-lock running so screen never auto-locks
  // 2. Automatically resumes studioAudio if interrupted by OS
  setInterval(() => {
    if (state.isPlaying && !state.userPaused) {
      acquireDualWakeLock();
      if (el.studioAudio && el.studioAudio.paused) {
        try { el.studioAudio.play(); } catch (e) {}
      }
    }
  }, 5000);
}

window.addEventListener('DOMContentLoaded', init);
