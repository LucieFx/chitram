/**
 * चित्रम् • CHITRAM
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
    "audioSrc": "assets/audio/session-late-night.mp3",
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
        "duration": "4:18",
        "composer": "Prateek Kuhad",
        "blurb": "The modern anthem of late-night longing. Written on an acoustic piano with lines that feel like whispers exchanged in a quiet art loft at 3 AM."
      },
      {
        "videoId": "sFMRqxCexDk",
        "title": "Choo Lo",
        "artist": "The Local Train",
        "album": "Aalas Ka Pedh",
        "year": 2015,
        "duration": "3:54",
        "composer": "The Local Train",
        "blurb": "A slow-burning Hindi rock ballad about holding on to moments slipping like wet pigment between fingers."
      },
      {
        "videoId": "gJLVTKhTnog",
        "title": "Husn",
        "artist": "Anuv Jain",
        "album": "Single Release",
        "year": 2023,
        "duration": "3:38",
        "composer": "Anuv Jain",
        "blurb": "A tender acoustic meditation on loving someone without validation. Plucked strings and soft poetry that resonate through quiet studio corners."
      },
      {
        "videoId": "4sMdGz8rbcs",
        "title": "Iktara",
        "artist": "Kavita Seth, Amitabh Bhattacharya",
        "album": "Wake Up Sid",
        "year": 2009,
        "duration": "4:13",
        "composer": "Amit Trivedi",
        "blurb": "A Sufi-soaked reflection on quiet love blooming under the Mumbai rain."
      },
      {
        "videoId": "dWqb-WqbGh8",
        "title": "O Sanam",
        "artist": "Lucky Ali",
        "album": "Sunoh",
        "year": 1996,
        "duration": "3:47",
        "composer": "Lucky Ali",
        "blurb": "The acoustic guitar strum that defined 90s Indian independence."
      },
      {
        "videoId": "BmUeY2e_15Q",
        "title": "Kasoor",
        "artist": "Prateek Kuhad",
        "album": "Single Release",
        "year": 2020,
        "duration": "3:16",
        "composer": "Prateek Kuhad",
        "blurb": "A soft, vulnerability-laden confession over gentle acoustic guitar."
      },
      {
        "videoId": "vA8OxdaPTv8",
        "title": "Alag Aasmaan",
        "artist": "Anuv Jain",
        "album": "Single Release",
        "year": 2020,
        "duration": "3:32",
        "composer": "Anuv Jain",
        "blurb": "Singing of love separated by different skies. Ukulele strums that paint an intimate picture."
      },
      {
        "videoId": "r67tVbXv3Y8",
        "title": "Dil Mere",
        "artist": "The Local Train",
        "album": "Aalas Ka Pedh",
        "year": 2015,
        "duration": "3:31",
        "composer": "The Local Train",
        "blurb": "An acoustic plea to an unsettled restless heart."
      },
      {
        "videoId": "Gz3qV6lXqZs",
        "title": "Tune Kaha",
        "artist": "Prateek Kuhad",
        "album": "In Tokens & Charms",
        "year": 2015,
        "duration": "3:20",
        "composer": "Prateek Kuhad",
        "blurb": "Gentle fingerpicked warmth that wraps like an old woolen shawl around the shoulders."
      },
      {
        "videoId": "m6Y30P1aO4Z",
        "title": "Dooriyan",
        "artist": "Mohit Chauhan",
        "album": "Love Aaj Kal",
        "year": 2009,
        "duration": "5:38",
        "composer": "Pritam",
        "blurb": "Quiet acoustic contemplation on spaces between two artistic minds."
      },
      {
        "videoId": "D4eL119O4z8",
        "title": "Faasle",
        "artist": "Aditya Rikhari",
        "album": "Single Release",
        "year": 2021,
        "duration": "3:12",
        "composer": "Aditya Rikhari",
        "blurb": "An intimate, stripped-back acoustic ballad detailing distances between hearts."
      },
      {
        "videoId": "sHzdb9hF3QY",
        "title": "Baarishein",
        "artist": "Anuv Jain",
        "album": "Single Release",
        "year": 2016,
        "duration": "3:27",
        "composer": "Anuv Jain",
        "blurb": "Soft strumming accompanying the sound of raindrops against studio window glass."
      },
      {
        "videoId": "Y_GvHqjBvJk",
        "title": "Khoj (Passing By)",
        "artist": "When Chai Met Toast",
        "album": "Joy of Little Things",
        "year": 2017,
        "duration": "3:45",
        "composer": "When Chai Met Toast",
        "blurb": "Breezy acoustic indie vibes that clear creative mental fog in late hours."
      },
      {
        "videoId": "fK0z_eHnZg4",
        "title": "Waqt Ki Baatein",
        "artist": "Dream Note",
        "album": "Single Release",
        "year": 2018,
        "duration": "4:02",
        "composer": "Dream Note",
        "blurb": "Contemplative acoustic rhythm celebrating passing time and old artistic journals."
      },
      {
        "videoId": "Y6u_j6MvN7Y",
        "title": "Khudi",
        "artist": "The Local Train",
        "album": "Vaaqif",
        "year": 2018,
        "duration": "4:48",
        "composer": "The Local Train",
        "blurb": "Finding your artistic voice and inner fire in the deepest silence of 3 AM."
      },
      {
        "videoId": "G9j9fI38Z2k",
        "title": "Aaftaab",
        "artist": "The Local Train",
        "album": "Vaaqif",
        "year": 2018,
        "duration": "3:52",
        "composer": "The Local Train",
        "blurb": "Melancholic arpeggios that warm solitary studio midnight sessions."
      },
      {
        "videoId": "l8R_pQ4BvNw",
        "title": "Shayad",
        "artist": "Taba Chake",
        "album": "Bombay Dreams",
        "year": 2019,
        "duration": "3:40",
        "composer": "Taba Chake",
        "blurb": "Fingerstyle acoustic bliss from Arunachal Pradesh, gentle as dawn mist."
      },
      {
        "videoId": "nO2t1J3Z8kY",
        "title": "Kadam",
        "artist": "Prateek Kuhad",
        "album": "Karwaan",
        "year": 2018,
        "duration": "3:42",
        "composer": "Prateek Kuhad",
        "blurb": "A slow unhurried road song for artists mapping out new compositions."
      },
      {
        "videoId": "H3t8M9bV1sY",
        "title": "Gul",
        "artist": "Anuv Jain",
        "album": "Single Release",
        "year": 2021,
        "duration": "3:39",
        "composer": "Anuv Jain",
        "blurb": "Poetic verses blooming like watercolors blooming on wet heavy paper."
      },
      {
        "videoId": "q7H_j6N1v9Y",
        "title": "Bikhra",
        "artist": "Abdul Hannan, Rovalio",
        "album": "Single Release",
        "year": 2022,
        "duration": "3:46",
        "composer": "Abdul Hannan",
        "blurb": "Gentle midnight indie pop with fragile honest melodies."
      },
      {
        "videoId": "u7J6Z2p9Lm4",
        "title": "Iraaday",
        "artist": "Abdul Hannan",
        "album": "Single Release",
        "year": 2022,
        "duration": "3:15",
        "composer": "Abdul Hannan",
        "blurb": "Dreamy guitar textures that lull wandering thoughts into steady creative rhythm."
      },
      {
        "videoId": "m7K4v91Pq0Y",
        "title": "Kahani Suno 2.0",
        "artist": "Kaifi Khalil",
        "album": "Single Release",
        "year": 2022,
        "duration": "2:53",
        "composer": "Kaifi Khalil",
        "blurb": "A raw, aching acoustic ballad of love recorded with unvarnished passion."
      },
      {
        "videoId": "w8P9t6H3v2Y",
        "title": "Samjho Na",
        "artist": "Aditya Rikhari",
        "album": "Single Release",
        "year": 2022,
        "duration": "3:05",
        "composer": "Aditya Rikhari",
        "blurb": "Gentle confession made under the amber studio desk lamp."
      },
      {
        "videoId": "s6H2p8N4v1Y",
        "title": "Yeh Dil Sun Raha Hai",
        "artist": "Strings",
        "album": "Duur",
        "year": 2000,
        "duration": "4:14",
        "composer": "Bilal Maqsood",
        "blurb": "Iconic 2000s South Asian acoustic rock echoing through high ceilings."
      },
      {
        "videoId": "m8F1p6V3k9Y",
        "title": "Sar Kiye Yeh Pahar",
        "artist": "Strings",
        "album": "Duur",
        "year": 2000,
        "duration": "4:30",
        "composer": "Strings",
        "blurb": "A mountain climb in acoustic form, steady and uplifting."
      },
      {
        "videoId": "j4P9t1M6v3Y",
        "title": "Dhaani",
        "artist": "Strings",
        "album": "Dhaani",
        "year": 2003,
        "duration": "4:18",
        "composer": "Strings",
        "blurb": "Lighthearted green hues and playful strums for midnight color tests."
      },
      {
        "videoId": "n6H9v3J1s7k",
        "title": "Woh Bheege Pal",
        "artist": "Jal",
        "album": "Aadat",
        "year": 2004,
        "duration": "4:10",
        "composer": "Goher Mumtaz",
        "blurb": "Rainy studio memories and nostalgia of early art school days."
      },
      {
        "videoId": "k7F3p9M1s4v",
        "title": "Aadat (Deep Unplugged)",
        "artist": "Atif Aslam, Jal",
        "album": "Aadat",
        "year": 2004,
        "duration": "4:28",
        "composer": "Goher Mumtaz",
        "blurb": "The guitar riff that soundtracked a generation of sketchbooks."
      },
      {
        "videoId": "q8H1p6V3s9k",
        "title": "Sajni",
        "artist": "Jal",
        "album": "Boondh",
        "year": 2007,
        "duration": "5:06",
        "composer": "Goher Mumtaz",
        "blurb": "An orchestral rock anthem of deep yearning and artistic solace."
      },
      {
        "videoId": "m1P6v9J3k7Y",
        "title": "Kyun Main Jaagoon",
        "artist": "Shafqat Amanat Ali",
        "album": "Patiala House",
        "year": 2011,
        "duration": "5:44",
        "composer": "Shankar-Ehsaan-Loy",
        "blurb": "The solitary cry of the night owl awake while the rest of the world sleeps."
      },
      {
        "videoId": "s9H4v1J6p3Y",
        "title": "Mora Saiyaan",
        "artist": "Fuzön",
        "album": "Saagar",
        "year": 2002,
        "duration": "5:18",
        "composer": "Fuzön",
        "blurb": "Classical thumri vocals colliding with warm electric piano chords."
      },
      {
        "videoId": "b8F3p9V1s6Y",
        "title": "Aankhon Kay Saagar",
        "artist": "Shafqat Amanat Ali",
        "album": "Saagar",
        "year": 2002,
        "duration": "5:32",
        "composer": "Fuzön",
        "blurb": "Depths of emotional blue pigments brought to life by soulful vocals."
      },
      {
        "videoId": "k4P1p6M9v3Y",
        "title": "Khamaj",
        "artist": "Fuzön",
        "album": "Saagar",
        "year": 2002,
        "duration": "4:52",
        "composer": "Fuzön",
        "blurb": "A classical raga re-imagined for midnight introspection and sketchpad work."
      },
      {
        "videoId": "m6F9v3J1s4Y",
        "title": "Chaap Tilak",
        "artist": "Abida Parveen & Rahat",
        "album": "Coke Studio Season 7",
        "year": 2014,
        "duration": "7:42",
        "composer": "Amir Khusro",
        "blurb": "Amir Khusro’s divine mystic poetry resonating across midnight quiet."
      },
      {
        "videoId": "q7H3p9M6v1Y",
        "title": "Tajdar-e-Haram",
        "artist": "Atif Aslam",
        "album": "Coke Studio Season 8",
        "year": 2015,
        "duration": "10:28",
        "composer": "Sabri Brothers",
        "blurb": "Sufi devotion that quiets all creative turmoil and centers the mind."
      },
      {
        "videoId": "w8F1p6J3v9Y",
        "title": "Tu Mane Ya Na Mane",
        "artist": "Wadali Brothers",
        "album": "Paigham-E-Ishq",
        "year": 2005,
        "duration": "6:12",
        "composer": "Wadali Brothers",
        "blurb": "Raw earthen vocals celebrating unshakeable devotion and true passion."
      },
      {
        "videoId": "s6P9t1M4v3Y",
        "title": "Afreen Afreen",
        "artist": "Rahat Fateh Ali Khan & Momina Mustehsan",
        "album": "Coke Studio Season 9",
        "year": 2016,
        "duration": "6:45",
        "composer": "Nusrat Fateh Ali Khan",
        "blurb": "Delicate acoustic rendition honoring sublime natural beauty."
      },
      {
        "videoId": "b4H9v3J1s7k",
        "title": "Tera Woh Pyar",
        "artist": "Momina Mustehsan & Asim Azhar",
        "album": "Coke Studio Season 9",
        "year": 2016,
        "duration": "7:08",
        "composer": "Shuja Haider",
        "blurb": "Soft piano chords and romantic duet floating like dust motes in studio light."
      },
      {
        "videoId": "m8F3p9V6s1Y",
        "title": "Ranjish Hi Sahi",
        "artist": "Ali Sethi",
        "album": "Coke Studio Season 10",
        "year": 2017,
        "duration": "6:20",
        "composer": "Nisar Bazmi",
        "blurb": "Ahmad Faraz’s immortal ghazal rendered with classical restraint."
      },
      {
        "videoId": "k1P9t6M3v4Y",
        "title": "Chandni Raat",
        "artist": "Ali Sethi",
        "album": "Single Release",
        "year": 2019,
        "duration": "4:35",
        "composer": "Ali Sethi",
        "blurb": "Gentle flute and violin textures painting moonlit studio shadows."
      },
      {
        "videoId": "q9H4v1J3s6Y",
        "title": "Pasoori (Acoustic)",
        "artist": "Ali Sethi & Shae Gill",
        "album": "Coke Studio Season 14",
        "year": 2022,
        "duration": "3:44",
        "composer": "Ali Sethi, Zulfiqar Khan",
        "blurb": "Unstoppable South Asian folk-pop energy stripped down for intimate listening."
      },
      {
        "videoId": "s8F1p6M4v9Y",
        "title": "Dil Beparwah",
        "artist": "Prateek Kuhad & Ankur Tewari",
        "album": "The Dewarists",
        "year": 2016,
        "duration": "4:12",
        "composer": "Prateek Kuhad, Ankur Tewari",
        "blurb": "Two master songwriters singing of carefree artistic exploration."
      },
      {
        "videoId": "b6H3p9V1s7k",
        "title": "Humnava Mere",
        "artist": "Jubin Nautiyal",
        "album": "Single Release",
        "year": 2018,
        "duration": "4:42",
        "composer": "Rocky-Shiv",
        "blurb": "Emotive acoustic ballad about lifelong creative companion ship."
      },
      {
        "videoId": "m4P9t1J6v3Y",
        "title": "Lut Gaye",
        "artist": "Jubin Nautiyal",
        "album": "Single Release",
        "year": 2021,
        "duration": "3:48",
        "composer": "Tanishk Bagchi",
        "blurb": "Dramatic passionate vocal lines accompanying dynamic brushstrokes."
      },
      {
        "videoId": "k8F1p6M3v9Y",
        "title": "Kinna Sona",
        "artist": "Sunil Kamath",
        "album": "Bhaag Johnny",
        "year": 2015,
        "duration": "4:34",
        "composer": "Mithoon",
        "blurb": "Sufi acoustic serenade of deep affection and visual reverence."
      },
      {
        "videoId": "q1H9v3J6s4Y",
        "title": "Raataan Lambiyan",
        "artist": "Jubin Nautiyal & Asees Kaur",
        "album": "Shershaah",
        "year": 2021,
        "duration": "3:50",
        "composer": "Tanishk Bagchi",
        "blurb": "Long nights made shorter when lost in continuous painting flow."
      },
      {
        "videoId": "s4P1p6M9v7Y",
        "title": "Dil Ko Karaar Aaya",
        "artist": "Neha Kakkar & Yasser Desai",
        "album": "Sukoon",
        "year": 2020,
        "duration": "4:02",
        "composer": "Rajat Nagpal",
        "blurb": "Sweet and tranquil melody bringing peaceful stillness to midnight."
      },
      {
        "videoId": "b9H3p1J6v4Y",
        "title": "Thodi Jagah",
        "artist": "Arijit Singh",
        "album": "Marjaavaan",
        "year": 2019,
        "duration": "3:38",
        "composer": "Tanishk Bagchi",
        "blurb": "A simple plea for emotional space within the heart."
      },
      {
        "videoId": "m7F6v9P1s3k",
        "title": "Khairiyat",
        "artist": "Arijit Singh",
        "album": "Chhichhore",
        "year": 2019,
        "duration": "4:40",
        "composer": "Pritam",
        "blurb": "Gentle warmth asking after distant friends and fond old times."
      },
      {
        "videoId": "k3H1p6M4v9Y",
        "title": "Shayad",
        "artist": "Arijit Singh",
        "album": "Love Aaj Kal",
        "year": 2020,
        "duration": "4:07",
        "composer": "Pritam",
        "blurb": "Acoustic piano chords opening up tender creative memories."
      },
      {
        "videoId": "q8F9v3J1s6Y",
        "title": "Tum Se Hi",
        "artist": "Mohit Chauhan",
        "album": "Jab We Met",
        "year": 2007,
        "duration": "5:23",
        "composer": "Pritam",
        "blurb": "The immortal acoustic anthem of finding purpose in the presence of art."
      },
      {
        "videoId": "b2P4t1M6v9Y",
        "title": "Pehli Nazar Mein",
        "artist": "Atif Aslam",
        "album": "Race",
        "year": 2008,
        "duration": "5:14",
        "composer": "Pritam",
        "blurb": "Instant spark when a blank canvas turns into an emerging vision."
      },
      {
        "videoId": "m9H1p6V3s4Y",
        "title": "Tera Hone Laga Hoon",
        "artist": "Atif Aslam & Alisha Chinai",
        "album": "Ajab Prem Ki Ghazab Kahani",
        "year": 2009,
        "duration": "4:59",
        "composer": "Pritam",
        "blurb": "Surrendering completely to the slow magic of visual craft."
      },
      {
        "videoId": "s7F3p9M1v6Y",
        "title": "Tu Jaane Na",
        "artist": "Atif Aslam",
        "album": "Ajab Prem Ki Ghazab Kahani",
        "year": 2009,
        "duration": "5:41",
        "composer": "Pritam",
        "blurb": "Unspoken feelings capturing in washes of soft charcoal."
      },
      {
        "videoId": "k4H9v3J6s1Y",
        "title": "Kuch Is Tarah",
        "artist": "Atif Aslam",
        "album": "Doorie",
        "year": 2006,
        "duration": "5:13",
        "composer": "Mithoon",
        "blurb": "An acoustic guitar strum that defined late-night solitude across India."
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
    "tagline": "5:30 AM. First light through mist. Sitting cross-legged with sketchpads.",
    "cue": "5:30 AM • First purple rays through arches, coffee steam, quiet pencil lines",
    "image": "assets/scenes/dawn.jpg",
    "audioSrc": "assets/audio/session-dawn.mp3",
    "palette": [
      "#e69885",
      "#b499db",
      "#8ab8d6",
      "#f3d5b5",
      "#ffffff"
    ],
    "playlist": [
      {
        "videoId": "T94PHkuydcw",
        "title": "Kun Faya Kun",
        "artist": "A.R. Rahman, Javed Ali, Mohit Chauhan",
        "album": "Rockstar",
        "year": 2011,
        "duration": "7:52",
        "composer": "A.R. Rahman",
        "blurb": "Recorded at the Nizamuddin Dargah. Divine creation awakening as morning sun breaks through studio windows."
      },
      {
        "videoId": "YkS_f51K0qQ",
        "title": "Arziyan",
        "artist": "Javed Ali, Kailash Kher",
        "album": "Delhi-6",
        "year": 2009,
        "duration": "8:41",
        "composer": "A.R. Rahman",
        "blurb": "Harmonium and acoustic strings blending in an open-hearted morning prayer."
      },
      {
        "videoId": "kL4w9U0E_E0",
        "title": "Noor E Khuda",
        "artist": "Shankar Mahadevan, Shreya Ghoshal",
        "album": "My Name Is Khan",
        "year": 2010,
        "duration": "6:37",
        "composer": "Shankar-Ehsaan-Loy",
        "blurb": "Searching for divine dawn light in quiet moments before the city stirs."
      },
      {
        "videoId": "q6c0nUj8W_8",
        "title": "Maula Mere Maula",
        "artist": "Roop Kumar Rathod",
        "album": "Anwar",
        "year": 2007,
        "duration": "5:58",
        "composer": "Mithoon",
        "blurb": "Plucked acoustic guitar and timeless Sufi vocals greeting the early blue dawn."
      },
      {
        "videoId": "7v12h1Bw89Y",
        "title": "Piya Ghar Aavenge",
        "artist": "Kailash Kher",
        "album": "Yatra",
        "year": 2009,
        "duration": "5:36",
        "composer": "Kailash Kher",
        "blurb": "Soulful welcoming of dawn, sweeping clean the canvas for a fresh creative start."
      },
      {
        "videoId": "eP6F7-5W9Qo",
        "title": "Mann Ki Lagan",
        "artist": "Rahat Fateh Ali Khan",
        "album": "Paap",
        "year": 2003,
        "duration": "5:28",
        "composer": "Rahat Fateh Ali Khan",
        "blurb": "The breakthrough Sufi masterpiece that introduced Rahat’s morning grace to Indian cinema."
      },
      {
        "videoId": "v0n3S4f4Lg8",
        "title": "O Re Piya",
        "artist": "Rahat Fateh Ali Khan",
        "album": "Aaja Nachle",
        "year": 2007,
        "duration": "6:19",
        "composer": "Salim-Sulaiman",
        "blurb": "Gentle, unhurried vocals echoing across early morning ghats and riverbanks."
      },
      {
        "videoId": "8n69t2M_Q7Y",
        "title": "Saiyyan",
        "artist": "Kailash Kher",
        "album": "Jhoomo Re",
        "year": 2006,
        "duration": "5:46",
        "composer": "Kailash Kher",
        "blurb": "Pristine acoustic devotion with soaring vocal textures."
      },
      {
        "videoId": "5uY1p9N8z_k",
        "title": "Teri Deewani",
        "artist": "Kailash Kher",
        "album": "Kailasa",
        "year": 2006,
        "duration": "5:22",
        "composer": "Kailasa",
        "blurb": "Passionate and grounded, the modern folk anthem of surrender to passion."
      },
      {
        "videoId": "7b8F3p9V1sY",
        "title": "Chaap Tilak",
        "artist": "Sabri Brothers",
        "album": "Heritage Ragas",
        "year": 1982,
        "duration": "6:50",
        "composer": "Amir Khusro",
        "blurb": "The immortal verse of Amir Khusro that has accompanied dawn painters for centuries."
      },
      {
        "videoId": "b8F3p9V6s1Y",
        "title": "Raga Bhairav (Morning Strum)",
        "artist": "Pandit Ravi Shankar",
        "album": "Morning Ragas",
        "year": 1971,
        "duration": "7:15",
        "composer": "Pandit Ravi Shankar",
        "blurb": "The ultimate Indian morning raga, awakening creative intellect and steady focus."
      },
      {
        "videoId": "k4P1p6M_ixz",
        "title": "Morning Breeze",
        "artist": "Hariprasad Chaurasia",
        "album": "Call of the Valley",
        "year": 1987,
        "duration": "6:10",
        "composer": "Hariprasad Chaurasia",
        "blurb": "Bamboo flute notes rising like warm mist over dew-covered studio terraces."
      },
      {
        "videoId": "s6P9t1M_naq",
        "title": "Sitar Sunrise",
        "artist": "Anoushka Shankar",
        "album": "Land of Gold",
        "year": 2016,
        "duration": "5:40",
        "composer": "Anoushka Shankar",
        "blurb": "Contemporary sitar lines weaving gentle morning meditation."
      },
      {
        "videoId": "n6H9v3J_pvs",
        "title": "Ankahee",
        "artist": "Amit Trivedi",
        "album": "Lootera",
        "year": 2013,
        "duration": "4:35",
        "composer": "Amit Trivedi",
        "blurb": "Delicate piano and quiet strings capturing the unsaid promises of morning light."
      },
      {
        "videoId": "k7F3p9M_oca",
        "title": "Nayan Tarse",
        "artist": "Amit Trivedi",
        "album": "Dev.D",
        "year": 2009,
        "duration": "3:50",
        "composer": "Amit Trivedi",
        "blurb": "Pensive acoustic rock with a sunrise clarity for clean ink drawing."
      },
      {
        "videoId": "q8H1p6V_uch",
        "title": "Manja",
        "artist": "Amit Trivedi",
        "album": "Kai Po Che",
        "year": 2013,
        "duration": "3:45",
        "composer": "Amit Trivedi",
        "blurb": "Acoustic guitar strums filled with rising dawn optimism and fresh morning vigor."
      },
      {
        "videoId": "m1P6v9J_1ru",
        "title": "Meethi Boliyaan",
        "artist": "Amit Trivedi, Mili Nair",
        "album": "Kai Po Che",
        "year": 2013,
        "duration": "4:46",
        "composer": "Amit Trivedi",
        "blurb": "Sweet morning sunlight pouring in through sheer atelier linen curtains."
      },
      {
        "videoId": "s9H4v1J_113",
        "title": "Zinda",
        "artist": "Amit Trivedi",
        "album": "Lootera",
        "year": 2013,
        "duration": "4:01",
        "composer": "Amit Trivedi",
        "blurb": "A profound reflection on creative vitality in the quietest hours."
      },
      {
        "videoId": "b8F3p9V_2u6",
        "title": "Shikayatein",
        "artist": "Amit Trivedi, Mohan Kanan",
        "album": "Lootera",
        "year": 2013,
        "duration": "4:29",
        "composer": "Amit Trivedi",
        "blurb": "Soulful cello and strings building an atmosphere of gentle nostalgia."
      },
      {
        "videoId": "m6F9v3J_2qy",
        "title": "Monta Re",
        "artist": "Swanand Kirkire, Amitabh Bhattacharya",
        "album": "Lootera",
        "year": 2013,
        "duration": "3:58",
        "composer": "Amit Trivedi",
        "blurb": "Baul folk rhythms of rural Bengal guiding watercolor washes on paper."
      },
      {
        "videoId": "q7H3p9M_633",
        "title": "Safarnama",
        "artist": "Lucky Ali",
        "album": "Tamasha",
        "year": 2015,
        "duration": "4:11",
        "composer": "A.R. Rahman",
        "blurb": "Setting out on a fresh artistic expedition with a calm, grateful heart."
      },
      {
        "videoId": "w8F1p6J_cfi",
        "title": "Hairat",
        "artist": "Lucky Ali",
        "album": "Anjaana Anjaani",
        "year": 2010,
        "duration": "4:19",
        "composer": "Vishal-Shekhar",
        "blurb": "Acoustic road guitar meeting crisp early morning breeze."
      },
      {
        "videoId": "b4H9v3J_ey9",
        "title": "Kitni Haseen Zindagi",
        "artist": "Lucky Ali",
        "album": "Aks",
        "year": 2001,
        "duration": "4:45",
        "composer": "Lucky Ali",
        "blurb": "Celebrating the sheer gift of morning wakefulness and creative sight."
      },
      {
        "videoId": "m8F3p9V_4xk",
        "title": "Dekha Hai Aise Bhi",
        "artist": "Lucky Ali",
        "album": "Sifar",
        "year": 1998,
        "duration": "4:30",
        "composer": "Lucky Ali",
        "blurb": "A traveler’s song for sketch artists recording horizons on the road."
      },
      {
        "videoId": "k1P9t6M_2q5",
        "title": "Tere Mere Saath",
        "artist": "Lucky Ali",
        "album": "Sifar",
        "year": 1998,
        "duration": "4:15",
        "composer": "Lucky Ali",
        "blurb": "Harmonious acoustic chords welcoming a new day of companionship."
      },
      {
        "videoId": "q9H4v1J_f4n",
        "title": "Tu Hi Re",
        "artist": "Hariharan, Kavita Krishnamurthy",
        "album": "Bombay",
        "year": 1995,
        "duration": "7:14",
        "composer": "A.R. Rahman",
        "blurb": "A masterpiece of orchestral longing recorded by A.R. Rahman at dawn."
      },
      {
        "videoId": "s8F1p6M_odx",
        "title": "Roja Janeman",
        "artist": "S.P. Balasubrahmanyam",
        "album": "Roja",
        "year": 1992,
        "duration": "5:43",
        "composer": "A.R. Rahman",
        "blurb": "The melody that changed Indian film music forever, peaceful and resonant."
      },
      {
        "videoId": "b6H3p9V_oxc",
        "title": "Yeh Haseen Wadiyan",
        "artist": "S.P.B. & K.S. Chithra",
        "album": "Roja",
        "year": 1992,
        "duration": "5:19",
        "composer": "A.R. Rahman",
        "blurb": "Mountain mist and crystal lake waters evoked through acoustic synth textures."
      },
      {
        "videoId": "m4P9t1J_eyj",
        "title": "Kehna Hi Kya",
        "artist": "K.S. Chithra",
        "album": "Bombay",
        "year": 1995,
        "duration": "5:51",
        "composer": "A.R. Rahman",
        "blurb": "Sufi qawwali clapping and crystalline vocals rising in morning praise."
      },
      {
        "videoId": "k8F1p6M_79c",
        "title": "Bombay Theme",
        "artist": "A.R. Rahman",
        "album": "Bombay",
        "year": 1995,
        "duration": "5:18",
        "composer": "A.R. Rahman",
        "blurb": "Flute notes that have moved millions across the globe with their sheer humanity."
      },
      {
        "videoId": "q1H9v3J_mbn",
        "title": "Jiya Jale",
        "artist": "Lata Mangeshkar, M.G. Sreekumar",
        "album": "Dil Se..",
        "year": 1998,
        "duration": "5:12",
        "composer": "A.R. Rahman",
        "blurb": "Malayalam folk chants greeting pristine dawn rain showers."
      },
      {
        "videoId": "s4P1p6M_7wo",
        "title": "Dil Se Re",
        "artist": "A.R. Rahman",
        "album": "Dil Se..",
        "year": 1998,
        "duration": "6:44",
        "composer": "A.R. Rahman",
        "blurb": "The pulsating heartbeat of artistic passion in its purest early morning form."
      },
      {
        "videoId": "b9H3p1J_epz",
        "title": "Ae Ajnabi",
        "artist": "Udit Narayan, Mahalakshmi Iyer",
        "album": "Dil Se..",
        "year": 1998,
        "duration": "5:48",
        "composer": "A.R. Rahman",
        "blurb": "A lonely radio transmission reaching across empty mountain valleys at dawn."
      },
      {
        "videoId": "m7F6v9P_xm7",
        "title": "Rehna Tu",
        "artist": "A.R. Rahman, Tanvi Shah",
        "album": "Delhi-6",
        "year": 2009,
        "duration": "6:51",
        "composer": "A.R. Rahman",
        "blurb": "Continuum fingerboard solo and gentle piano accepting life as it is."
      },
      {
        "videoId": "k3H1p6M_4u5",
        "title": "Masakali",
        "artist": "Mohit Chauhan",
        "album": "Delhi-6",
        "year": 2009,
        "duration": "4:50",
        "composer": "A.R. Rahman",
        "blurb": "Accordion rhythms and dove flutterings over old city rooftops at 6 AM."
      },
      {
        "videoId": "q8F9v3J_ps4",
        "title": "Genda Phool",
        "artist": "Rekha Bhardwaj, Sujata Majumdar",
        "album": "Delhi-6",
        "year": 2009,
        "duration": "2:50",
        "composer": "A.R. Rahman",
        "blurb": "Chhattisgarhi folk rhythm and joyous feminine energy to start the day."
      },
      {
        "videoId": "b2P4t1M_qlk",
        "title": "Khwaja Mere Khwaja",
        "artist": "A.R. Rahman",
        "album": "Jodhaa Akbar",
        "year": 2008,
        "duration": "6:58",
        "composer": "A.R. Rahman",
        "blurb": "The sacred hymn of divine humility, grounding early morning thoughts."
      },
      {
        "videoId": "m9H1p6V_wur",
        "title": "Jashn-E-Bahaara",
        "artist": "Javed Ali",
        "album": "Jodhaa Akbar",
        "year": 2008,
        "duration": "5:15",
        "composer": "A.R. Rahman",
        "blurb": "Mughal garden fountains and sitar strums under early golden rays."
      },
      {
        "videoId": "s7F3p9M_toe",
        "title": "In Dino",
        "artist": "Soham Chakrabarthy",
        "album": "Life In A... Metro",
        "year": 2007,
        "duration": "6:40",
        "composer": "Pritam",
        "blurb": "Acoustic guitar and quiet metropolitan sunrise over sleepy avenue trees."
      },
      {
        "videoId": "k4H9v3J_zkh",
        "title": "Baatein Kuch Ankahee Si",
        "artist": "KK, Suhail Kaul",
        "album": "Life In A... Metro",
        "year": 2007,
        "duration": "4:12",
        "composer": "Pritam",
        "blurb": "Unspoken conversations floating like soft pencil sketches."
      },
      {
        "videoId": "m1P6v9J3k7b",
        "title": "O Meri Jaan",
        "artist": "KK",
        "album": "Life In A... Metro",
        "year": 2007,
        "duration": "4:58",
        "composer": "Pritam",
        "blurb": "Raw emotive acoustic rock honoring life’s quietest inner moments."
      },
      {
        "videoId": "s9H4v1J6p3b",
        "title": "Aao Milo Chalo",
        "artist": "Shaan, Ustad Sultan Khan",
        "album": "Jab We Met",
        "year": 2007,
        "duration": "5:28",
        "composer": "Pritam",
        "blurb": "Sarangi and acoustic rhythm for the start of a winding journey."
      },
      {
        "videoId": "b8F3p9V1s6b",
        "title": "Ye Ishq Hai",
        "artist": "Shreya Ghoshal",
        "album": "Jab We Met",
        "year": 2007,
        "duration": "4:44",
        "composer": "Pritam",
        "blurb": "Himalayan mountain air and joyful morning spirit."
      },
      {
        "videoId": "k4P1p6M9v3b",
        "title": "Tum Ho",
        "artist": "Mohit Chauhan, Suzanne D’Mello",
        "album": "Rockstar",
        "year": 2011,
        "duration": "5:18",
        "composer": "A.R. Rahman",
        "blurb": "Mandolin and acoustic strings weaving a sanctuary of peaceful dawn focus."
      },
      {
        "videoId": "m6F9v3J1s4b",
        "title": "Katiyakarun",
        "artist": "Harshdeep Kaur",
        "album": "Rockstar",
        "year": 2011,
        "duration": "4:01",
        "composer": "A.R. Rahman",
        "blurb": "Punjabi spinning-wheel folk rhythm spinning new morning ideas."
      },
      {
        "videoId": "q7H3p9M6v1b",
        "title": "Saadda Haq",
        "artist": "Mohit Chauhan",
        "album": "Rockstar",
        "year": 2011,
        "duration": "6:05",
        "composer": "A.R. Rahman",
        "blurb": "Fierce creative defiance and pure artistic conviction."
      },
      {
        "videoId": "w8F1p6J3v9b",
        "title": "Nadaan Parinde",
        "artist": "A.R. Rahman, Mohit Chauhan",
        "album": "Rockstar",
        "year": 2011,
        "duration": "6:26",
        "composer": "A.R. Rahman",
        "blurb": "The homeward journey of the creative wanderer at first light."
      },
      {
        "videoId": "s6P9t1M4v3b",
        "title": "Hawaa Hawaa",
        "artist": "Mohit Chauhan",
        "album": "Rockstar",
        "year": 2011,
        "duration": "5:42",
        "composer": "A.R. Rahman",
        "blurb": "Breezy flamenco guitars and gypsy wanderlust in morning light."
      },
      {
        "videoId": "b4H9v3J1s7b",
        "title": "Aur Ho",
        "artist": "Mohit Chauhan, Alma Ferovic",
        "album": "Rockstar",
        "year": 2011,
        "duration": "5:35",
        "composer": "A.R. Rahman",
        "blurb": "Deep visceral intensity searching for truth upon the canvas."
      },
      {
        "videoId": "m8F3p9V6s1b",
        "title": "Sheher Mein",
        "artist": "Mohit Chauhan, Javed Ali",
        "album": "Rockstar",
        "year": 2011,
        "duration": "4:03",
        "composer": "A.R. Rahman",
        "blurb": "Two friends laughing over chai before the studio day begins."
      },
      {
        "videoId": "k1P9t6M3v4b",
        "title": "Tango For Taj",
        "artist": "A.R. Rahman",
        "album": "Rockstar",
        "year": 2011,
        "duration": "3:01",
        "composer": "A.R. Rahman",
        "blurb": "A playful instrumental morning interlude for watercolor sketches."
      },
      {
        "videoId": "q9H4v1J3s6b",
        "title": "Dil Gira Dafatan",
        "artist": "Ash King, Chinmayi",
        "album": "Delhi-6",
        "year": 2009,
        "duration": "5:39",
        "composer": "A.R. Rahman",
        "blurb": "Irish pipes and acoustic guitar falling gently into dawn clarity."
      },
      {
        "videoId": "s8F1p6M4v9b",
        "title": "Bhor Bhaye Panghat Pe",
        "artist": "Lata Mangeshkar",
        "album": "Satyam Shivam Sundaram",
        "year": 1978,
        "duration": "5:24",
        "composer": "Laxmikant-Pyarelal",
        "blurb": "The immortal classical morning raga of village riverbanks and dawn pots."
      },
      {
        "videoId": "b6H3p9V1s7b",
        "title": "Albela Sajan",
        "artist": "Ustad Sultan Khan, Shankar Mahadevan",
        "album": "Hum Dil De Chuke Sanam",
        "year": 1999,
        "duration": "3:20",
        "composer": "Ismail Darbar",
        "blurb": "Raga Ahir Bhairav welcoming the arrival of the beloved artistic master."
      },
      {
        "videoId": "m4P9t1J6v3b",
        "title": "Nimbooda",
        "artist": "Kavita Krishnamurthy, Karsan Sagathia",
        "album": "Hum Dil De Chuke Sanam",
        "year": 1999,
        "duration": "6:22",
        "composer": "Ismail Darbar",
        "blurb": "Rajasthani folk flair to awaken bold color palettes."
      }
    ]
  },
  {
    "id": "morning",
    "labelHi": "सुबह",
    "labelEn": "Morning Studio",
    "slot": "07:00 AM – 12:00 PM IST",
    "startHour": 7,
    "endHour": 12,
    "tagline": "Sunlight flooding the easel. Brushes soaked in clean water.",
    "cue": "9 AM • Sunbeams through high glass, fresh linen smell, bold pencil strokes",
    "image": "assets/scenes/morning.jpg",
    "audioSrc": "assets/audio/session-morning.mp3",
    "palette": [
      "#f6c445",
      "#e87248",
      "#5089c6",
      "#72b043",
      "#fdfbf7"
    ],
    "playlist": [
      {
        "videoId": "8n0wU-JqD_k",
        "title": "Ilahi",
        "artist": "Arijit Singh",
        "album": "Yeh Jawaani Hai Deewani",
        "year": 2013,
        "duration": "3:49",
        "composer": "Pritam",
        "blurb": "The quintessential traveler’s anthem. Energetic acoustic guitar driving the early morning sketching flow."
      },
      {
        "videoId": "u7rP_H_1l50",
        "title": "Kabira",
        "artist": "Tochi Raina, Rekha Bhardwaj",
        "album": "Yeh Jawaani Hai Deewani",
        "year": 2013,
        "duration": "3:43",
        "composer": "Pritam",
        "blurb": "Earthy Sufi acoustic rhythm about listening to one’s inner artistic calling."
      },
      {
        "videoId": "qH8K3g_U18Q",
        "title": "Subhanallah",
        "artist": "Sreeram, Shilpa Rao",
        "album": "Yeh Jawaani Hai Deewani",
        "year": 2013,
        "duration": "4:09",
        "composer": "Pritam",
        "blurb": "Soft acoustic guitar with joyous harmonies celebrating the morning light."
      },
      {
        "videoId": "n6b0n_H9q4w",
        "title": "Budhu Sa Mann",
        "artist": "Armaan Malik, Amaal Mallik",
        "album": "Kapoor & Sons",
        "year": 2016,
        "duration": "3:26",
        "composer": "Amaal Mallik",
        "blurb": "Playful, lighthearted ukulele strums for creative experimentation."
      },
      {
        "videoId": "5b9X8-4K1lE",
        "title": "Khaabon Ke Parindey",
        "artist": "Mohit Chauhan, Alyssa Mendonsa",
        "album": "Zindagi Na Milegi Dobara",
        "year": 2011,
        "duration": "4:13",
        "composer": "Shankar-Ehsaan-Loy",
        "blurb": "Spanish road breezes and acoustic warmth lifting the canvas off the floor."
      },
      {
        "videoId": "8v0Y_4n1l5w",
        "title": "Der Lagi Lekin",
        "artist": "Shankar Mahadevan",
        "album": "Zindagi Na Milegi Dobara",
        "year": 2011,
        "duration": "5:57",
        "composer": "Shankar-Ehsaan-Loy",
        "blurb": "Patience and grace when working through complex compositions."
      },
      {
        "videoId": "2m6Q_9f1k8w",
        "title": "Sooraj Ki Baahon Mein",
        "artist": "Dominique Cerejo, Clinton Cerejo",
        "album": "Zindagi Na Milegi Dobara",
        "year": 2011,
        "duration": "3:24",
        "composer": "Shankar-Ehsaan-Loy",
        "blurb": "Golden sunlight bathing the palette table in pure warmth."
      },
      {
        "videoId": "7n9P_0l1v4e",
        "title": "Senorita",
        "artist": "Farhan Akhtar, Hrithik Roshan, Abhay Deol",
        "album": "Zindagi Na Milegi Dobara",
        "year": 2011,
        "duration": "3:51",
        "composer": "Shankar-Ehsaan-Loy",
        "blurb": "Acoustic flamenco handclaps keeping studio spirits lifted."
      },
      {
        "videoId": "9v1P_4m8l2w",
        "title": "Ik Junoon (Paint It Red)",
        "artist": "Vishal Dadlani, Shankar Mahadevan",
        "album": "Zindagi Na Milegi Dobara",
        "year": 2011,
        "duration": "5:00",
        "composer": "Shankar-Ehsaan-Loy",
        "blurb": "Throwing caution to the wind and splashing bold cadmium red upon linen."
      },
      {
        "videoId": "4b8Y_1n0l5w",
        "title": "Aise Kyun",
        "artist": "Anurag Saikia, Rekha Bhardwaj",
        "album": "Mismatched",
        "year": 2020,
        "duration": "4:35",
        "composer": "Anurag Saikia",
        "blurb": "Gentle acoustic strings evoking tender curiosity in morning sketchbooks."
      },
      {
        "videoId": "1m4Q_9v8l2e",
        "title": "Aoge Tum Kabhi",
        "artist": "The Local Train",
        "album": "Vaaqif",
        "year": 2018,
        "duration": "5:14",
        "composer": "The Local Train",
        "blurb": "A slow build of guitar melodies celebrating patient creative loyalty."
      },
      {
        "videoId": "3n8P_1l0v4w",
        "title": "Ghar",
        "artist": "Mohit Chauhan, Nikhita Gandhi",
        "album": "Jab Harry Met Sejal",
        "year": 2017,
        "duration": "3:41",
        "composer": "Pritam",
        "blurb": "Finding home wherever your easel and brushes are set down."
      },
      {
        "videoId": "6v0Y_4m1l8w",
        "title": "Hawayein",
        "artist": "Arijit Singh",
        "album": "Jab Harry Met Sejal",
        "year": 2017,
        "duration": "4:50",
        "composer": "Pritam",
        "blurb": "Breezy winds sweeping across open studio skylights."
      },
      {
        "videoId": "8b9X_1n0l4e",
        "title": "Safarnama (Studio Acoustic)",
        "artist": "Lucky Ali",
        "album": "Tamasha",
        "year": 2015,
        "duration": "4:11",
        "composer": "A.R. Rahman",
        "blurb": "Wandering with purpose, sketchpad in hand across morning streets."
      },
      {
        "videoId": "2n4Q_9v1l8w",
        "title": "Matargashti",
        "artist": "Mohit Chauhan",
        "album": "Tamasha",
        "year": 2015,
        "duration": "5:28",
        "composer": "A.R. Rahman",
        "blurb": "Playful French accordion rhythm lifting morning spirits in the atelier."
      },
      {
        "videoId": "5m8Y_1l0v4e",
        "title": "Heer Toh Badi Sad Hai",
        "artist": "Mika Singh, Nakash Aziz",
        "album": "Tamasha",
        "year": 2015,
        "duration": "5:20",
        "composer": "A.R. Rahman",
        "blurb": "Upbeat Punjabi acoustic bounce bringing rhythmic momentum to sketching."
      },
      {
        "videoId": "7v0Y_4m8l1w",
        "title": "Agar Tum Saath Ho",
        "artist": "Alka Yagnik, Arijit Singh",
        "album": "Tamasha",
        "year": 2015,
        "duration": "5:41",
        "composer": "A.R. Rahman",
        "blurb": "The heart-wrenching emotional depths of true creative empathy."
      },
      {
        "videoId": "9b9X_1n4l0e",
        "title": "Chali Kahani",
        "artist": "Sukhwinder Singh, Haricharan",
        "album": "Tamasha",
        "year": 2015,
        "duration": "6:15",
        "composer": "A.R. Rahman",
        "blurb": "Mythological tales and visual folklore unfolding across large canvases."
      },
      {
        "videoId": "3m4Q_9v8l1w",
        "title": "Wat Wat Wat",
        "artist": "Arijit Singh, Shashwat Singh",
        "album": "Tamasha",
        "year": 2015,
        "duration": "4:46",
        "composer": "A.R. Rahman",
        "blurb": "High energy folk rhythms for mixing vibrant tempera and oil paints."
      },
      {
        "videoId": "6n8P_1l0v4e",
        "title": "Daayre",
        "artist": "Arijit Singh",
        "album": "Dilwale",
        "year": 2015,
        "duration": "4:50",
        "composer": "Pritam",
        "blurb": "Reflections on boundaries and breaking beyond conventional forms."
      },
      {
        "videoId": "8v0Y_4m1l9w",
        "title": "Janam Janam",
        "artist": "Arijit Singh, Antara Mitra",
        "album": "Dilwale",
        "year": 2015,
        "duration": "3:57",
        "composer": "Pritam",
        "blurb": "Grand classical strings and piano accompanying romantic oil painting."
      },
      {
        "videoId": "1b9X_4n0l8e",
        "title": "Gerua",
        "artist": "Arijit Singh, Antara Mitra",
        "album": "Dilwale",
        "year": 2015,
        "duration": "5:45",
        "composer": "Pritam",
        "blurb": "Ochre and saffron robes blending with dramatic Icelandic landscapes."
      },
      {
        "videoId": "4m4Q_9v1l2w",
        "title": "Tukur Tukur",
        "artist": "Arijit Singh, Kanika Kapoor",
        "album": "Dilwale",
        "year": 2015,
        "duration": "4:32",
        "composer": "Pritam",
        "blurb": "Joyous rhythmic energy keeping the morning mood lively."
      },
      {
        "videoId": "7n8P_1l4v0e",
        "title": "Manma Emotion Jaage",
        "artist": "Amit Mishra, Anushka Manchanda",
        "album": "Dilwale",
        "year": 2015,
        "duration": "3:29",
        "composer": "Pritam",
        "blurb": "Fun, punchy brass beats for dynamic gestures."
      },
      {
        "videoId": "9v0Y_4m8l3w",
        "title": "Khulke Jeene Ka",
        "artist": "Arijit Singh, Shashaa Tirupati",
        "album": "Dil Bechara",
        "year": 2020,
        "duration": "4:06",
        "composer": "A.R. Rahman",
        "blurb": "Gentle Parisian accordion and acoustic guitar honoring life’s fleeting grace."
      },
      {
        "videoId": "2b9X_1n0l7e",
        "title": "Taare Ginn",
        "artist": "Mohit Chauhan, Shreya Ghoshal",
        "album": "Dil Bechara",
        "year": 2020,
        "duration": "4:17",
        "composer": "A.R. Rahman",
        "blurb": "Dreamy starry waltz for soft pastel sketches."
      },
      {
        "videoId": "5m4Q_9v8l0w",
        "title": "Main Tumhara",
        "artist": "Jonita Gandhi, Hriday Gattani",
        "album": "Dil Bechara",
        "year": 2020,
        "duration": "4:18",
        "composer": "A.R. Rahman",
        "blurb": "Unfinished melodies that finally find their completing stroke."
      },
      {
        "videoId": "8n8P_1l0v3e",
        "title": "Maskhari",
        "artist": "Sunidhi Chauhan, Hriday Gattani",
        "album": "Dil Bechara",
        "year": 2020,
        "duration": "3:15",
        "composer": "A.R. Rahman",
        "blurb": "Lighthearted morning joy spreading across studio tables."
      },
      {
        "videoId": "1v0Y_4m1l6w",
        "title": "Mera Naam Kizie",
        "artist": "Aditya Narayan, Poorvi Koutish",
        "album": "Dil Bechara",
        "year": 2020,
        "duration": "5:06",
        "composer": "A.R. Rahman",
        "blurb": "Playful swing jazz and acoustic warmth for energetic morning line work."
      },
      {
        "videoId": "3b9X_4n0l9e",
        "title": "Afreeda",
        "artist": "Sana Moussa, Raja Kumari",
        "album": "Dil Bechara",
        "year": 2020,
        "duration": "3:20",
        "composer": "A.R. Rahman",
        "blurb": "Middle Eastern rhythms meeting modern studio momentum."
      },
      {
        "videoId": "6m4Q_9v1l5w",
        "title": "Friendzone",
        "artist": "A.R. Rahman",
        "album": "Dil Bechara",
        "year": 2020,
        "duration": "3:05",
        "composer": "A.R. Rahman",
        "blurb": "Funky baseline keeping hands moving briskly."
      },
      {
        "videoId": "9n8P_1l4v2e",
        "title": "Dil Bechara Title Track",
        "artist": "A.R. Rahman",
        "album": "Dil Bechara",
        "year": 2020,
        "duration": "4:02",
        "composer": "A.R. Rahman",
        "blurb": "Infectious walking bassline and playful scatting."
      },
      {
        "videoId": "2v0Y_4m8l7w",
        "title": "The Horizon of Sau Paulo",
        "artist": "A.R. Rahman",
        "album": "Dil Bechara",
        "year": 2020,
        "duration": "3:42",
        "composer": "A.R. Rahman",
        "blurb": "Atmospheric instrumental evoking far-off vistas and endless skies."
      },
      {
        "videoId": "4b9X_1n0l6e",
        "title": "Bulleya",
        "artist": "Amit Mishra, Shilpa Rao",
        "album": "Ae Dil Hai Mushkil",
        "year": 2016,
        "duration": "5:49",
        "composer": "Pritam",
        "blurb": "Sufi rock ballad celebrating relentless dedication to the muse."
      },
      {
        "videoId": "7m4Q_9v8l3w",
        "title": "Channa Mereya",
        "artist": "Arijit Singh",
        "album": "Ae Dil Hai Mushkil",
        "year": 2016,
        "duration": "4:49",
        "composer": "Pritam",
        "blurb": "The immortal ballad of sacrifice and finding beauty in departure."
      },
      {
        "videoId": "1n8P_1l0v7e",
        "title": "Ae Dil Hai Mushkil",
        "artist": "Arijit Singh",
        "album": "Ae Dil Hai Mushkil",
        "year": 2016,
        "duration": "4:29",
        "composer": "Pritam",
        "blurb": "Orchestral passion that breathes grand scale into large paintings."
      },
      {
        "videoId": "3v0Y_4m1l2w",
        "title": "Cutiepie",
        "artist": "Pardeep Singh Sran, Nakash Aziz",
        "album": "Ae Dil Hai Mushkil",
        "year": 2016,
        "duration": "3:51",
        "composer": "Pritam",
        "blurb": "Vibrant celebratory energy for bold sunny palettes."
      },
      {
        "videoId": "5b9X_4n0l1e",
        "title": "Alizeh",
        "artist": "Arijit Singh, Ash King, Shashwat Singh",
        "album": "Ae Dil Hai Mushkil",
        "year": 2016,
        "duration": "4:42",
        "composer": "Pritam",
        "blurb": "Gentle acoustic breeze flowing over delicate drawings."
      },
      {
        "videoId": "8m4Q_9v1l6w",
        "title": "The Breakup Song",
        "artist": "Arijit Singh, Badshah, Jonita Gandhi",
        "album": "Ae Dil Hai Mushkil",
        "year": 2016,
        "duration": "4:12",
        "composer": "Pritam",
        "blurb": "Upbeat studio rhythm keeping energy high at 11 AM."
      },
      {
        "videoId": "2n8P_1l4v9e",
        "title": "Aaj Se Teri",
        "artist": "Arijit Singh",
        "album": "Padman",
        "year": 2018,
        "duration": "5:12",
        "composer": "Amit Trivedi",
        "blurb": "Sweet domestic devotion and acoustic harmonium warmth."
      },
      {
        "videoId": "4v0Y_4m8l5w",
        "title": "The Pad Man Song",
        "artist": "Mika Singh",
        "album": "Padman",
        "year": 2018,
        "duration": "3:22",
        "composer": "Amit Trivedi",
        "blurb": "Raw inventive spirit celebrating everyday craftsmanship."
      },
      {
        "videoId": "6b9X_1n0l3e",
        "title": "Hu Ba Hu",
        "artist": "Amit Trivedi",
        "album": "Padman",
        "year": 2018,
        "duration": "3:36",
        "composer": "Amit Trivedi",
        "blurb": "Acoustic camaraderie and working side by side with fellow artists."
      },
      {
        "videoId": "9m4Q_9v8l7w",
        "title": "Saale Sapne",
        "artist": "Mohit Chauhan",
        "album": "Padman",
        "year": 2018,
        "duration": "4:42",
        "composer": "Amit Trivedi",
        "blurb": "Dreams taking physical shape under steady, deliberate hands."
      },
      {
        "videoId": "1n8P_1l0v2e",
        "title": "Sayaani",
        "artist": "Yashita Sharma, Jonita Gandhi",
        "album": "Padman",
        "year": 2018,
        "duration": "4:10",
        "composer": "Amit Trivedi",
        "blurb": "Joyous traditional folk clapping celebrating growing maturity."
      },
      {
        "videoId": "3v0Y_4m1l8w",
        "title": "Love You Zindagi",
        "artist": "Jasleen Royal, Amit Trivedi",
        "album": "Dear Zindagi",
        "year": 2016,
        "duration": "3:51",
        "composer": "Amit Trivedi",
        "blurb": "Embracing creative flaws and loving the process of living."
      },
      {
        "videoId": "5b9X_4n0l4e",
        "title": "Tu Hi Hai",
        "artist": "Arijit Singh",
        "album": "Dear Zindagi",
        "year": 2016,
        "duration": "3:19",
        "composer": "Amit Trivedi",
        "blurb": "Acoustic warmth comforting tired hands during mid-morning work."
      },
      {
        "videoId": "8m4Q_9v1l0w",
        "title": "Taarefon Se",
        "artist": "Arijit Singh",
        "album": "Dear Zindagi",
        "year": 2016,
        "duration": "4:38",
        "composer": "Amit Trivedi",
        "blurb": "Quiet appreciation of beauty found in everyday ordinary things."
      },
      {
        "videoId": "2n8P_1l4v5e",
        "title": "Let’s Break Up",
        "artist": "Vishal Dadlani",
        "album": "Dear Zindagi",
        "year": 2016,
        "duration": "4:06",
        "composer": "Amit Trivedi",
        "blurb": "Letting go of perfectionism and starting a bold new canvas."
      },
      {
        "videoId": "4v0Y_4m8l1w",
        "title": "Just Go To Hell Dil",
        "artist": "Sunidhi Chauhan",
        "album": "Dear Zindagi",
        "year": 2016,
        "duration": "5:35",
        "composer": "Amit Trivedi",
        "blurb": "Cathartic emotional expression poured straight onto linen."
      },
      {
        "videoId": "6b9X_1n0l8e",
        "title": "Ae Zindagi Gale Laga Le",
        "artist": "Arijit Singh",
        "album": "Dear Zindagi",
        "year": 2016,
        "duration": "4:45",
        "composer": "Ilaiyaraaja, Amit Trivedi",
        "blurb": "Embracing life with both arms wide open under clear skies."
      },
      {
        "videoId": "9m4Q_9v8l2w",
        "title": "Pani Da Rang",
        "artist": "Ayushmann Khurrana",
        "album": "Vicky Donor",
        "year": 2012,
        "duration": "4:00",
        "composer": "Rochak Kohli, Ayushmann",
        "blurb": "Acoustic guitar and Punjabi poetry clear as fresh rainwater."
      },
      {
        "videoId": "1n8P_1l0v6e",
        "title": "Saddi Gali",
        "artist": "Ayushmann Khurrana, Neeti Mohan",
        "album": "Nautanki Saala!",
        "year": 2013,
        "duration": "4:15",
        "composer": "Ayushmann, Rochak Kohli",
        "blurb": "Infectious alleyway folk rhythm bringing smile to morning drawing."
      },
      {
        "videoId": "3v0Y_4m1l7w",
        "title": "Mitti Di Khushboo",
        "artist": "Ayushmann Khurrana",
        "album": "Single Release",
        "year": 2014,
        "duration": "3:50",
        "composer": "Rochak Kohli",
        "blurb": "The nostalgic aroma of wet earth after the first monsoon rain."
      },
      {
        "videoId": "5b9X_4n0l3e",
        "title": "Yahin Hoon Main",
        "artist": "Ayushmann Khurrana",
        "album": "Single Release",
        "year": 2015,
        "duration": "4:08",
        "composer": "Rochak Kohli",
        "blurb": "Reassuring gentle ballad about being present in the moment."
      },
      {
        "videoId": "8m4Q_9v1l9w",
        "title": "Ik Vaari",
        "artist": "Ayushmann Khurrana",
        "album": "Single Release",
        "year": 2016,
        "duration": "4:06",
        "composer": "Aparshakti Khurana",
        "blurb": "Sweet acoustic serenade for peaceful morning studio hours."
      }
    ]
  },
  {
    "id": "afternoon",
    "labelHi": "दोपहर",
    "labelEn": "Afternoon Sun",
    "slot": "12:00 PM – 04:00 PM IST",
    "startHour": 12,
    "endHour": 16,
    "tagline": "Warm terracotta light. Watercolor washes drying in the breeze.",
    "cue": "2 PM • Blinds drawn against heat, fan humming softly, unhurried watercolor washes",
    "image": "assets/scenes/afternoon.jpg",
    "audioSrc": "assets/audio/session-afternoon.mp3",
    "palette": [
      "#e87d3e",
      "#d45d3a",
      "#e2a76f",
      "#3c5a71",
      "#fdf7f0"
    ],
    "playlist": [
      {
        "videoId": "9Hn2hK6zP_E",
        "title": "Nazm Nazm",
        "artist": "Arko",
        "album": "Bareilly Ki Barfi",
        "year": 2017,
        "duration": "3:47",
        "composer": "Arko",
        "blurb": "A slow, tender acoustic ghazal written like handwritten letters folded into paintboxes."
      },
      {
        "videoId": "3m9X_4n1l0w",
        "title": "Samjhawan Unplugged",
        "artist": "Alia Bhatt",
        "album": "Humpty Sharma Ki Dulhania",
        "year": 2014,
        "duration": "3:42",
        "composer": "Jawad Ahmad, Sharib-Toshi",
        "blurb": "Intimate, fragile acoustic rendition for quiet afternoon shading."
      },
      {
        "videoId": "6v0Y_1m8l4e",
        "title": "Bolna",
        "artist": "Arijit Singh, Asees Kaur",
        "album": "Kapoor & Sons",
        "year": 2016,
        "duration": "3:32",
        "composer": "Tanishk Bagchi",
        "blurb": "Soft vocals trading verses like brushes blending cadmium orange into raw umber."
      },
      {
        "videoId": "8b9X_4n0l2w",
        "title": "Haminastu",
        "artist": "Zeb Bangash",
        "album": "Fitoor",
        "year": 2016,
        "duration": "4:20",
        "composer": "Amit Trivedi",
        "blurb": "Kashmiri strings and Persian poetry honoring the paradise of art."
      },
      {
        "videoId": "1m4Q_9v1l7e",
        "title": "Pashmina",
        "artist": "Amit Trivedi",
        "album": "Fitoor",
        "year": 2016,
        "duration": "4:45",
        "composer": "Amit Trivedi",
        "blurb": "Gentle, weaving acoustic texture soft as hand-spun cashmere."
      },
      {
        "videoId": "4n8P_1l0v5w",
        "title": "Yeh Fitoor Mera",
        "artist": "Arijit Singh",
        "album": "Fitoor",
        "year": 2016,
        "duration": "4:42",
        "composer": "Amit Trivedi",
        "blurb": "The all-consuming artistic madness that drives monumental works."
      },
      {
        "videoId": "7v0Y_4m8l9e",
        "title": "Tere Liye",
        "artist": "Sunidhi Chauhan, Aniket Vishwasrao",
        "album": "Fitoor",
        "year": 2016,
        "duration": "4:15",
        "composer": "Amit Trivedi",
        "blurb": "Subtle strings and emotional restraint for afternoon still life work."
      },
      {
        "videoId": "9b9X_1n4l2w",
        "title": "Ranga Re",
        "artist": "Sunidhi Chauhan, Amit Trivedi",
        "album": "Fitoor",
        "year": 2016,
        "duration": "4:52",
        "composer": "Amit Trivedi",
        "blurb": "Mixing pigments and dyeing fabrics under warm Mediterranean studio light."
      },
      {
        "videoId": "2m4Q_9v8l0e",
        "title": "Hone Do Batiyan",
        "artist": "Nandini Srikar, Zeb Bangash",
        "album": "Fitoor",
        "year": 2016,
        "duration": "3:40",
        "composer": "Amit Trivedi",
        "blurb": "Gentle afternoon conversation between two creative partners."
      },
      {
        "videoId": "5n8P_1l0v3w",
        "title": "Chinar",
        "artist": "Sunidhi Chauhan",
        "album": "Fitoor",
        "year": 2016,
        "duration": "3:15",
        "composer": "Amit Trivedi",
        "blurb": "Autumn leaves fluttering onto wet terracotta tiles."
      },
      {
        "videoId": "8v0Y_4m1l6e",
        "title": "Maahi Ve",
        "artist": "A.R. Rahman",
        "album": "Highway",
        "year": 2014,
        "duration": "4:00",
        "composer": "A.R. Rahman",
        "blurb": "Open landscapes and empty highways under the wide afternoon sun."
      },
      {
        "videoId": "1b9X_4n0l7w",
        "title": "Patakha Guddi (Sufi)",
        "artist": "Sultana & Jyoti Nooran",
        "album": "Highway",
        "year": 2014,
        "duration": "4:45",
        "composer": "A.R. Rahman",
        "blurb": "Untamed spiritual freedom soaring across desert sands."
      },
      {
        "videoId": "3m4Q_9v1l8e",
        "title": "Kahaan Hoon Main",
        "artist": "Jonita Gandhi",
        "album": "Highway",
        "year": 2014,
        "duration": "5:28",
        "composer": "A.R. Rahman",
        "blurb": "Finding yourself lost in the deep flow of visual creation."
      },
      {
        "videoId": "6n8P_1l4v2w",
        "title": "Sooha Saha",
        "artist": "Alia Bhatt, Zeb Bangash",
        "album": "Highway",
        "year": 2014,
        "duration": "4:59",
        "composer": "A.R. Rahman",
        "blurb": "A gentle lullaby for quiet afternoon siestas."
      },
      {
        "videoId": "9v0Y_4m8l1e",
        "title": "Heera",
        "artist": "Shweta Pandit",
        "album": "Highway",
        "year": 2014,
        "duration": "4:34",
        "composer": "A.R. Rahman",
        "blurb": "Sant Kabir’s ancient verses on recognizing true spiritual value."
      },
      {
        "videoId": "2b9X_1n0l5w",
        "title": "Tu Kuja",
        "artist": "Sunidhi Chauhan",
        "album": "Highway",
        "year": 2014,
        "duration": "4:28",
        "composer": "A.R. Rahman",
        "blurb": "Persian devotional melody echoing across quiet afternoon halls."
      },
      {
        "videoId": "5m4Q_9v8l7e",
        "title": "Implosive Silence",
        "artist": "A.R. Rahman",
        "album": "Highway",
        "year": 2014,
        "duration": "5:42",
        "composer": "A.R. Rahman",
        "blurb": "Atmospheric instrumental evoking deep creative silence."
      },
      {
        "videoId": "7n8P_1l0v4w",
        "title": "Chura Liya Hai Tumne",
        "artist": "Asha Bhosle, Mohammad Rafi",
        "album": "Yaadon Ki Baaraat",
        "year": 1973,
        "duration": "4:48",
        "composer": "R.D. Burman",
        "blurb": "The immortal acoustic glass clinking and guitar strum of 70s Bollywood."
      },
      {
        "videoId": "1v0Y_4m1l5e",
        "title": "Do Lafzon Ki Hai",
        "artist": "Asha Bhosle, Sharad Kumar",
        "album": "The Great Gambler",
        "year": 1979,
        "duration": "5:10",
        "composer": "R.D. Burman",
        "blurb": "Venetian gondola strums for romantic watercolor paintings."
      },
      {
        "videoId": "4b9X_4n0l9w",
        "title": "Pyaar Hua Ikraar Hua",
        "artist": "Lata Mangeshkar, Manna Dey",
        "album": "Shree 420",
        "year": 1955,
        "duration": "4:22",
        "composer": "Shankar-Jaikishan",
        "blurb": "Black and white umbrellas under steady afternoon rain."
      },
      {
        "videoId": "6m4Q_9v1l3e",
        "title": "Ajeeb Dastan Hai Yeh",
        "artist": "Lata Mangeshkar",
        "album": "Dil Apna Aur Preet Parai",
        "year": 1960,
        "duration": "5:15",
        "composer": "Shankar-Jaikishan",
        "blurb": "The bittersweet passage of time painted in melancholic major chords."
      },
      {
        "videoId": "9n8P_1l4v6w",
        "title": "Lag Ja Gale",
        "artist": "Lata Mangeshkar",
        "album": "Woh Kaun Thi?",
        "year": 1964,
        "duration": "4:18",
        "composer": "Madan Mohan",
        "blurb": "Madan Mohan’s greatest masterpiece of visual longing."
      },
      {
        "videoId": "2v0Y_4m8l0e",
        "title": "Aap Ki Nazron Ne Samjha",
        "artist": "Lata Mangeshkar",
        "album": "Anpadh",
        "year": 1962,
        "duration": "3:55",
        "composer": "Madan Mohan",
        "blurb": "Quiet appreciation and dignity in every subtle shade."
      },
      {
        "videoId": "5b9X_1n0l4w",
        "title": "Yeh Samaa Samaa Hai Pyaar Ka",
        "artist": "Lata Mangeshkar",
        "album": "Jab Jab Phool Khile",
        "year": 1965,
        "duration": "5:20",
        "composer": "Kalyanji-Anandji",
        "blurb": "Kashmir lakes and cedar forests resting in warm afternoon sun."
      },
      {
        "videoId": "8m4Q_9v8l2e",
        "title": "Kora Kagaz Tha Yeh Man Mera",
        "artist": "Kishore Kumar, Lata Mangeshkar",
        "album": "Aradhana",
        "year": 1969,
        "duration": "5:35",
        "composer": "S.D. Burman",
        "blurb": "The blank canvas waiting for the first stroke of ink."
      },
      {
        "videoId": "1n8P_1l0v7w",
        "title": "Roop Tera Mastana",
        "artist": "Kishore Kumar",
        "album": "Aradhana",
        "year": 1969,
        "duration": "3:45",
        "composer": "S.D. Burman",
        "blurb": "Sensual accordion and jazz saxophone warm by the studio fire."
      },
      {
        "videoId": "3v0Y_4m1l8e",
        "title": "Mere Sapno Ki Rani",
        "artist": "Kishore Kumar",
        "album": "Aradhana",
        "year": 1969,
        "duration": "5:00",
        "composer": "S.D. Burman",
        "blurb": "Whistling harmonica and toy train rhythms across Darjeeling."
      },
      {
        "videoId": "6b9X_4n0l1w",
        "title": "Gun Guna Rahe Hai Bhanwre",
        "artist": "Asha Bhosle, Mohammad Rafi",
        "album": "Aradhana",
        "year": 1969,
        "duration": "3:52",
        "composer": "S.D. Burman",
        "blurb": "Honeybees buzzing outside open studio balconies."
      },
      {
        "videoId": "8m4Q_9v1l5e",
        "title": "Yeh Shaam Mastani",
        "artist": "Kishore Kumar",
        "album": "Kati Patang",
        "year": 1970,
        "duration": "4:38",
        "composer": "R.D. Burman",
        "blurb": "Whistling breezes setting the afternoon calm into motion."
      },
      {
        "videoId": "2n8P_1l4v8w",
        "title": "Pyar Deewana Hota Hai",
        "artist": "Kishore Kumar",
        "album": "Kati Patang",
        "year": 1970,
        "duration": "4:45",
        "composer": "R.D. Burman",
        "blurb": "Acoustic piano strums celebrating carefree creative love."
      },
      {
        "videoId": "4v0Y_4m8l2e",
        "title": "Jis Gali Mein Tera Ghar",
        "artist": "Mukesh",
        "album": "Kati Patang",
        "year": 1970,
        "duration": "4:02",
        "composer": "R.D. Burman",
        "blurb": "Mukesh’s deep nasal resonance echoing through sleepy afternoons."
      },
      {
        "videoId": "7b9X_1n0l6w",
        "title": "Yeh Jo Mohabbat Hai",
        "artist": "Kishore Kumar",
        "album": "Kati Patang",
        "year": 2017,
        "duration": "4:08",
        "composer": "R.D. Burman",
        "blurb": "Witty, melancholic reflections over a glass of iced tea."
      },
      {
        "videoId": "9m4Q_9v8l4e",
        "title": "Aaj Unse Pehli Mulaqat Hogi",
        "artist": "Kishore Kumar",
        "album": "Paraya Dhan",
        "year": 1971,
        "duration": "5:48",
        "composer": "R.D. Burman",
        "blurb": "Nervous excitement before beginning an ambitious new portrait."
      },
      {
        "videoId": "1n8P_1l0v3w",
        "title": "O Maajhi Re",
        "artist": "Kishore Kumar",
        "album": "Khushboo",
        "year": 1975,
        "duration": "3:30",
        "composer": "R.D. Burman",
        "blurb": "A lone boatman drifting down the quiet afternoon river."
      },
      {
        "videoId": "3v0Y_4m1l6e",
        "title": "Beeti Na Bitai Raina",
        "artist": "Lata Mangeshkar, Bhupinder Singh",
        "album": "Parichay",
        "year": 1972,
        "duration": "5:22",
        "composer": "R.D. Burman",
        "blurb": "Classical bandish rendered with modern acoustic sensitivity."
      },
      {
        "videoId": "5b9X_4n0l8w",
        "title": "Musafir Hoon Yaaro",
        "artist": "Kishore Kumar",
        "album": "Parichay",
        "year": 1972,
        "duration": "4:40",
        "composer": "R.D. Burman",
        "blurb": "The wandering spirit that calls every canvas home."
      },
      {
        "videoId": "8m4Q_9v1l2e",
        "title": "Sa Re Ke Sa Re",
        "artist": "Kishore Kumar, Asha Bhosle",
        "album": "Parichay",
        "year": 1972,
        "duration": "5:50",
        "composer": "R.D. Burman",
        "blurb": "Playful music lessons and joyful rhythm games."
      },
      {
        "videoId": "2n8P_1l4v4w",
        "title": "Tere Bina Zindagi Se",
        "artist": "Kishore Kumar, Lata Mangeshkar",
        "album": "Aandhi",
        "year": 1975,
        "duration": "5:52",
        "composer": "R.D. Burman",
        "blurb": "Gulzar’s poetry echoing among ancient stone ruins in afternoon haze."
      },
      {
        "videoId": "4v0Y_4m8l7e",
        "title": "Tum Aa Gaye Ho Noor Aa Gaya Hai",
        "artist": "Kishore Kumar, Lata Mangeshkar",
        "album": "Aandhi",
        "year": 1975,
        "duration": "4:12",
        "composer": "R.D. Burman",
        "blurb": "Light breaking through heavy storm clouds onto the canvas."
      },
      {
        "videoId": "6b9X_1n0l2w",
        "title": "Is Mod Se Jaate Hain",
        "artist": "Kishore Kumar, Lata Mangeshkar",
        "album": "Aandhi",
        "year": 1975,
        "duration": "4:55",
        "composer": "R.D. Burman",
        "blurb": "Crossroads of life and art etched in deep lyrical lines."
      },
      {
        "videoId": "9m4Q_9v8l6e",
        "title": "Hazaar Raahein",
        "artist": "Kishore Kumar, Lata Mangeshkar",
        "album": "Thodisi Bewafaii",
        "year": 1980,
        "duration": "5:10",
        "composer": "Khayyam",
        "blurb": "A thousand paths through creative labyrinths, each leading to discovery."
      },
      {
        "videoId": "1n8P_1l0v5b",
        "title": "Aankhon Mein Humne Aapke",
        "artist": "Kishore Kumar, Lata Mangeshkar",
        "album": "Thodisi Bewafaii",
        "year": 1980,
        "duration": "4:45",
        "composer": "Khayyam",
        "blurb": "Khayyam’s stately acoustic arrangements bringing calm elegance."
      },
      {
        "videoId": "3v0Y_4m1l9b",
        "title": "Kabhi Kabhie Mere Dil Mein",
        "artist": "Mukesh",
        "album": "Kabhi Kabhie",
        "year": 1976,
        "duration": "4:45",
        "composer": "Khayyam",
        "blurb": "Sahir Ludhianvi’s eternal poetry written under pine trees."
      },
      {
        "videoId": "5b9X_4n0l6b",
        "title": "Main Pal Do Pal Ka Shayar Hoon",
        "artist": "Mukesh",
        "album": "Kabhi Kabhie",
        "year": 1976,
        "duration": "4:10",
        "composer": "Khayyam",
        "blurb": "An artist’s humble acknowledgment of passing generations."
      },
      {
        "videoId": "8m4Q_9v1l4b",
        "title": "Tere Chehre Se Nazar Nahin",
        "artist": "Kishore Kumar, Lata Mangeshkar",
        "album": "Kabhi Kabhie",
        "year": 1976,
        "duration": "5:02",
        "composer": "Khayyam",
        "blurb": "Inability to tear one’s gaze away from the emerging portrait."
      },
      {
        "videoId": "2n8P_1l4v1b",
        "title": "Pyaar Kar Liya To Kya",
        "artist": "Kishore Kumar",
        "album": "Kabhi Kabhie",
        "year": 1976,
        "duration": "3:45",
        "composer": "Khayyam",
        "blurb": "Playful philosophical banter under afternoon shadows."
      },
      {
        "videoId": "4v0Y_4m8l9b",
        "title": "Mere Humsafar",
        "artist": "Mukesh, Lata Mangeshkar",
        "album": "Refugee",
        "year": 2000,
        "duration": "7:50",
        "composer": "Anu Malik",
        "blurb": "Gentle desert wind and acoustic flute guiding slow brushstrokes."
      },
      {
        "videoId": "7b9X_1n0l3b",
        "title": "Panchi Nadiya Pawan Ke Jhonke",
        "artist": "Sonu Nigam, Alka Yagnik",
        "album": "Refugee",
        "year": 2000,
        "duration": "9:45",
        "composer": "Anu Malik",
        "blurb": "Nature knowing no borders, free as wandering pigment on water."
      },
      {
        "videoId": "9m4Q_9v8l8b",
        "title": "Taal Se Taal Mila (Western)",
        "artist": "Sukhwinder Singh",
        "album": "Taal",
        "year": 1999,
        "duration": "6:18",
        "composer": "A.R. Rahman",
        "blurb": "Raindrops synchronizing with inner creative pulse."
      },
      {
        "videoId": "1n8P_1l0v7d",
        "title": "Nahin Saamne",
        "artist": "Hariharan, Sukhwinder Singh",
        "album": "Taal",
        "year": 1999,
        "duration": "5:38",
        "composer": "A.R. Rahman",
        "blurb": "Heartfelt longing rendered in rich classical acoustic phrasing."
      },
      {
        "videoId": "3v0Y_4m1l2d",
        "title": "Kariye Na",
        "artist": "Sukhwinder Singh, Alka Yagnik",
        "album": "Taal",
        "year": 1999,
        "duration": "6:42",
        "composer": "A.R. Rahman",
        "blurb": "Rich Punjabi folk textures and emotional acoustic depth."
      },
      {
        "videoId": "5b9X_4n0l0d",
        "title": "Ramta Jogi",
        "artist": "Sukhwinder Singh, Alka Yagnik",
        "album": "Taal",
        "year": 1999,
        "duration": "6:17",
        "composer": "A.R. Rahman",
        "blurb": "The ecstatic wandering yogi lost in the dance of creation."
      },
      {
        "videoId": "8m4Q_9v1l7d",
        "title": "Ni Main Samajh Gayi",
        "artist": "Sukhwinder Singh, Richa Sharma",
        "album": "Taal",
        "year": 1999,
        "duration": "4:35",
        "composer": "A.R. Rahman",
        "blurb": "Brisk folk rhythm driving rapid afternoon gesture drawings."
      },
      {
        "videoId": "2n8P_1l4v3d",
        "title": "Ishq Bina",
        "artist": "Anuradha Sriram, Sujatha, Sonu Nigam",
        "album": "Taal",
        "year": 1999,
        "duration": "7:44",
        "composer": "A.R. Rahman",
        "blurb": "Life having no true meaning without the supreme devotion of love."
      },
      {
        "videoId": "4v0Y_4m8l6d",
        "title": "Raga Desh Theme",
        "artist": "A.R. Rahman",
        "album": "Taal",
        "year": 1999,
        "duration": "2:40",
        "composer": "A.R. Rahman",
        "blurb": "Monsoon clouds gathering on the horizon at 3:30 PM."
      }
    ]
  },
  {
    "id": "golden-hour",
    "labelHi": "गोधूलि",
    "labelEn": "Golden Hour",
    "slot": "04:00 PM – 06:30 PM IST",
    "startHour": 16,
    "endHour": 18,
    "tagline": "The slant of amber sun across primed linen. Shadows growing long.",
    "cue": "5 PM • Amber sunbeams through windows, dust motes glowing, rich ochres & sienna",
    "image": "assets/scenes/golden-hour.jpg",
    "audioSrc": "assets/audio/session-golden-hour.mp3",
    "palette": [
      "#c8562d",
      "#d99b26",
      "#3b516b",
      "#935838",
      "#f6f1ea"
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
        "blurb": "Strings and a retro harmonium, with a vocal that captures the nervous thrill of dressing up."
      },
      {
        "videoId": "ilNt2bikxZ8",
        "title": "Pani Da Rang (Acoustic)",
        "artist": "Ayushmann Khurrana",
        "album": "Vicky Donor",
        "year": 2012,
        "duration": "4:00",
        "composer": "Rochak Kohli, Ayushmann",
        "blurb": "The definitive Punjabi acoustic ballad of the 2010s. Ethereal acoustic guitar picking."
      },
      {
        "videoId": "V1bFr2SWP1I",
        "title": "Qaafirana",
        "artist": "Arijit Singh, Nikhita Gandhi",
        "album": "Kedarnath",
        "year": 2018,
        "duration": "5:42",
        "composer": "Amit Trivedi",
        "blurb": "A sweeping Himalayan love song. Banjo, strings, and quiet devotional devotion."
      },
      {
        "videoId": "C7BPzF_3V9c",
        "title": "Mishri",
        "artist": "Anuv Jain",
        "album": "Single Release",
        "year": 2020,
        "duration": "3:21",
        "composer": "Anuv Jain",
        "blurb": "Warm ukulele strums and nostalgic childhood poetry that smell like hot chai."
      },
      {
        "videoId": "T8E1hG7bC2g",
        "title": "Kho Gaye Hum Kahan",
        "artist": "Jasleen Royal, Prateek Kuhad",
        "album": "Baar Baar Dekho",
        "year": 2016,
        "duration": "3:33",
        "composer": "Jasleen Royal",
        "blurb": "Two whisper-soft voices intertwined over acoustic guitar."
      },
      {
        "videoId": "qA1bC9dE4f8",
        "title": "Tu Kisi Rail Si (Acoustic)",
        "artist": "Swanand Kirkire",
        "album": "Masaan",
        "year": 2015,
        "duration": "3:54",
        "composer": "Indian Ocean",
        "blurb": "Gentle river ghats and afternoon train whistles."
      },
      {
        "videoId": "w2E4r6T8y0u",
        "title": "Afeemi",
        "artist": "Jigar Saraiya, Sanah Moidutty",
        "album": "Meri Pyaari Bindu",
        "year": 2017,
        "duration": "4:08",
        "composer": "Sachin-Jigar",
        "blurb": "Sweet and intoxicating acoustic love ballad for sunset painting."
      },
      {
        "videoId": "e4R6t8Y0u2i",
        "title": "Haareya",
        "artist": "Arijit Singh",
        "album": "Meri Pyaari Bindu",
        "year": 2017,
        "duration": "4:54",
        "composer": "Sachin-Jigar",
        "blurb": "Surrendering to the warmth of amber sunset light."
      },
      {
        "videoId": "r6T8y0U2i4o",
        "title": "Maana Ke Hum Yaar Nahin",
        "artist": "Parineeti Chopra",
        "album": "Meri Pyaari Bindu",
        "year": 2017,
        "duration": "5:26",
        "composer": "Sachin-Jigar",
        "blurb": "An intimate ghazal sung with poignant, raw sincerity."
      },
      {
        "videoId": "t8Y0u2I4o6p",
        "title": "Khol De Baahein",
        "artist": "Monali Thakur",
        "album": "Meri Pyaari Bindu",
        "year": 2017,
        "duration": "3:10",
        "composer": "Sachin-Jigar",
        "blurb": "Spreading arms wide to welcome the golden evening breeze."
      },
      {
        "videoId": "y0U2i4O6p8a",
        "title": "Yeh Jawaani Hai Deewani Mashup",
        "artist": "Pritam",
        "album": "Studio Sessions",
        "year": 2013,
        "duration": "4:30",
        "composer": "Pritam",
        "blurb": "Golden memories of mountain hikes and evening camaraderie."
      },
      {
        "videoId": "u2I4o6P8a0s",
        "title": "Roz Roz",
        "artist": "The Yellow Diary, Shilpa Rao",
        "album": "Single Release",
        "year": 2021,
        "duration": "3:45",
        "composer": "The Yellow Diary",
        "blurb": "Modern indie rock blending with Shilpa Rao’s velvety twilight vocals."
      },
      {
        "videoId": "i4O6p8A0s2d",
        "title": "Marz",
        "artist": "The Yellow Diary",
        "album": "Marz EP",
        "year": 2018,
        "duration": "3:58",
        "composer": "The Yellow Diary",
        "blurb": "A soothing balm for tired minds working late on detail strokes."
      },
      {
        "videoId": "o6P8a0S2d4f",
        "title": "Rab Raakha",
        "artist": "The Yellow Diary",
        "album": "Single Release",
        "year": 2020,
        "duration": "4:12",
        "composer": "The Yellow Diary",
        "blurb": "A blessing of safe keeping for all creative explorers."
      },
      {
        "videoId": "p8A0s2D4f6g",
        "title": "Tere Jeya Hor Disda",
        "artist": "The Yellow Diary",
        "album": "Single Release",
        "year": 2019,
        "duration": "3:30",
        "composer": "The Yellow Diary",
        "blurb": "Soulful Punjabi indie rock with warm golden hour synths."
      },
      {
        "videoId": "a0S2d4F6g8h",
        "title": "Bawra",
        "artist": "The Yellow Diary",
        "album": "Izafa EP",
        "year": 2018,
        "duration": "4:05",
        "composer": "The Yellow Diary",
        "blurb": "The restless creative spirit wandering freely without constraint."
      },
      {
        "videoId": "s2D4f6G8h0j",
        "title": "Dheere Se",
        "artist": "The Yellow Diary",
        "album": "Izafa EP",
        "year": 2018,
        "duration": "3:52",
        "composer": "The Yellow Diary",
        "blurb": "Gentle, patient layering of oil glazes as dusk settles."
      },
      {
        "videoId": "d4F6g8H0j2k",
        "title": "Bulleya (Reprise)",
        "artist": "Shilpa Rao",
        "album": "Ae Dil Hai Mushkil",
        "year": 2016,
        "duration": "4:30",
        "composer": "Pritam",
        "blurb": "Stripped-back acoustic acoustic vocals touching deep chords."
      },
      {
        "videoId": "f6G8h0J2k4l",
        "title": "Manmarziyan",
        "artist": "Shilpa Rao",
        "album": "Lootera",
        "year": 2013,
        "duration": "4:11",
        "composer": "Amit Trivedi",
        "blurb": "Doing what the heart desires, regardless of worldly opinions."
      },
      {
        "videoId": "g8H0j2K4l6z",
        "title": "Tose Naina",
        "artist": "Arijit Singh",
        "album": "Mickey Virus",
        "year": 2013,
        "duration": "4:24",
        "composer": "Hanif Shaikh",
        "blurb": "Early breakthrough ballad showcasing Arijit’s gentle acoustic soul."
      },
      {
        "videoId": "h0J2k4L6z8x",
        "title": "Suno Na Sangemarmar",
        "artist": "Arijit Singh",
        "album": "Youngistaan",
        "year": 2014,
        "duration": "3:22",
        "composer": "Jeet Gannguli",
        "blurb": "Marble monuments glowing under amber sunset hues."
      },
      {
        "videoId": "j2K4l6Z8x0c",
        "title": "Mast Magan",
        "artist": "Arijit Singh, Chinmayi Sripada",
        "album": "2 States",
        "year": 2014,
        "duration": "4:40",
        "composer": "Shankar-Ehsaan-Loy",
        "blurb": "Sufi devotion and classical violin lines soaring in the twilight."
      },
      {
        "videoId": "k4L6z8X0c2v",
        "title": "Chaandaniya",
        "artist": "K Mohan, Yashita Sharma",
        "album": "2 States",
        "year": 2014,
        "duration": "4:06",
        "composer": "Shankar-Ehsaan-Loy",
        "blurb": "The gentle rise of the evening moon as sun sinks down."
      },
      {
        "videoId": "l6Z8x0C2v4b",
        "title": "Offo",
        "artist": "Aditi Singh Sharma, Benny Dayal",
        "album": "2 States",
        "year": 2014,
        "duration": "3:34",
        "composer": "Shankar-Ehsaan-Loy",
        "blurb": "Vibrant college romance and cheerful sunset painting."
      },
      {
        "videoId": "z8X0c2V4b6n",
        "title": "Iski Uski",
        "artist": "Akriti Kakar, Shahid Mallya",
        "album": "2 States",
        "year": 2014,
        "duration": "4:15",
        "composer": "Shankar-Ehsaan-Loy",
        "blurb": "Joyful fusion of Punjabi beats and South Indian brass."
      },
      {
        "videoId": "x0C2v4B6n8m",
        "title": "Hulla Re",
        "artist": "Shankar Mahadevan",
        "album": "2 States",
        "year": 2014,
        "duration": "3:40",
        "composer": "Shankar-Ehsaan-Loy",
        "blurb": "Celebration of rich cultural tapestries upon canvas."
      },
      {
        "videoId": "c2V4b6N8m0q",
        "title": "Zehnaseeb",
        "artist": "Chinmayi Sripada, Shekhar Ravjiani",
        "album": "Hasee Toh Phasee",
        "year": 2014,
        "duration": "3:37",
        "composer": "Vishal-Shekhar",
        "blurb": "Gentle acoustic piano and heartfelt lyrics for intimate portraits."
      },
      {
        "videoId": "v4B6n8M0q2w",
        "title": "Ishq Bulaava",
        "artist": "Sanam Puri, Shipra Goyal",
        "album": "Hasee Toh Phasee",
        "year": 2014,
        "duration": "5:02",
        "composer": "Vishal-Shekhar",
        "blurb": "Mellow Punjabi acoustic guitar strumming for evening focus."
      },
      {
        "videoId": "b6N8m0Q2w4e",
        "title": "Manchala",
        "artist": "Shafqat Amanat Ali, Nupur Pant",
        "album": "Hasee Toh Phasee",
        "year": 2014,
        "duration": "3:48",
        "composer": "Vishal-Shekhar",
        "blurb": "The wandering restless soul finding its true grounding."
      },
      {
        "videoId": "n8M0q2W4e6r",
        "title": "Drama Queen",
        "artist": "Shreya Ghoshal, Vishal Dadlani",
        "album": "Hasee Toh Phasee",
        "year": 2014,
        "duration": "3:20",
        "composer": "Vishal-Shekhar",
        "blurb": "Punchy electro-folk bringing color and laughter to sunset."
      },
      {
        "videoId": "m0Q2w4E6r8t",
        "title": "Shake It Like Shammi",
        "artist": "Benny Dayal",
        "album": "Hasee Toh Phasee",
        "year": 2014,
        "duration": "3:24",
        "composer": "Vishal-Shekhar",
        "blurb": "Retro dance energy for bold dynamic color choices."
      },
      {
        "videoId": "q2W4e6R8t0y",
        "title": "Chaar Kadam",
        "artist": "Shaan, Shreya Ghoshal",
        "album": "PK",
        "year": 2014,
        "duration": "4:02",
        "composer": "Shantanu Moitra",
        "blurb": "Breezy European waltz and acoustic guitar strolling through Bruges."
      },
      {
        "videoId": "w4E6r8T0y2u",
        "title": "Bhagwan Hai Kahan Re Tu",
        "artist": "Sonu Nigam",
        "album": "PK",
        "year": 2014,
        "duration": "5:12",
        "composer": "Shantanu Moitra",
        "blurb": "Searching for divine meaning across vast terracotta horizons."
      },
      {
        "videoId": "e6R8t0Y2u4i",
        "title": "Love Is A Waste Of Time",
        "artist": "Sonu Nigam, Shreya Ghoshal",
        "album": "PK",
        "year": 2014,
        "duration": "4:30",
        "composer": "Shantanu Moitra",
        "blurb": "Playful ukulele strums celebrating innocent affection."
      },
      {
        "videoId": "r8T0y2U4i6o",
        "title": "Nanga Punga Dost",
        "artist": "Shreya Ghoshal",
        "album": "PK",
        "year": 2014,
        "duration": "4:46",
        "composer": "Shantanu Moitra",
        "blurb": "Childlike wonder that every true artist must preserve."
      },
      {
        "videoId": "t0Y2u4I6o8p",
        "title": "Dil Darbadar",
        "artist": "Ankit Tiwari",
        "album": "PK",
        "year": 2014,
        "duration": "5:32",
        "composer": "Ankit Tiwari",
        "blurb": "Deep acoustic melancholy under burning twilight skies."
      },
      {
        "videoId": "y2U4i6O8p0a",
        "title": "Soch Na Sake",
        "artist": "Arijit Singh, Tulsi Kumar",
        "album": "Airlift",
        "year": 2016,
        "duration": "4:40",
        "composer": "Amaal Mallik",
        "blurb": "Emotional depth that turns simple paint into raw human truth."
      },
      {
        "videoId": "u4I6o8P0a2s",
        "title": "Mera Yaar Fankaar",
        "artist": "Amar Arshi",
        "album": "Single Release",
        "year": 2018,
        "duration": "3:45",
        "composer": "Amar Arshi",
        "blurb": "Honoring the true fankaar (artist) and their devoted craft."
      },
      {
        "videoId": "i6O8p0A2s4d",
        "title": "Tu Chahiye",
        "artist": "Atif Aslam",
        "album": "Bajrangi Bhaijaan",
        "year": 2015,
        "duration": "4:33",
        "composer": "Pritam",
        "blurb": "Warm and comforting vocals accompanying the golden sun setting."
      },
      {
        "videoId": "o8P0a2S4d6f",
        "title": "Bhar Do Jholi Meri",
        "artist": "Adnan Sami",
        "album": "Bajrangi Bhaijaan",
        "year": 2015,
        "duration": "8:19",
        "composer": "Sabri Brothers, Pritam",
        "blurb": "Traditional qawwali prayer for overflowing creative grace."
      },
      {
        "videoId": "p0A2s4D6f8g",
        "title": "Zindagi Kuch Toh Bata",
        "artist": "Jubin Nautiyal, Rahat Fateh Ali Khan",
        "album": "Bajrangi Bhaijaan",
        "year": 2015,
        "duration": "4:23",
        "composer": "Pritam",
        "blurb": "Asking life to reveal its quietest, most poetic secrets."
      },
      {
        "videoId": "a2S4d6F8g0h",
        "title": "Tu Jo Mila",
        "artist": "KK",
        "album": "Bajrangi Bhaijaan",
        "year": 2015,
        "duration": "4:04",
        "composer": "Pritam",
        "blurb": "KK’s tender vocals guiding serene evening oil painting."
      },
      {
        "videoId": "s4D6f8G0h2j",
        "title": "Chicken Song",
        "artist": "Mohit Chauhan, Vishal Dadlani",
        "album": "Bajrangi Bhaijaan",
        "year": 2015,
        "duration": "5:43",
        "composer": "Pritam",
        "blurb": "Playful humor keeping the atelier light and joyous."
      },
      {
        "videoId": "d6F8g0H2j4k",
        "title": "Selfie Le Le Re",
        "artist": "Vishal Dadlani, Nakash Aziz",
        "album": "Bajrangi Bhaijaan",
        "year": 2015,
        "duration": "4:57",
        "composer": "Pritam",
        "blurb": "Festival color celebration on canvas."
      },
      {
        "videoId": "f8G0h2J4k6l",
        "title": "Ae Watan",
        "artist": "Arijit Singh",
        "album": "Raazi",
        "year": 2018,
        "duration": "3:43",
        "composer": "Shankar-Ehsaan-Loy",
        "blurb": "Quiet devotion to motherland and creative roots."
      },
      {
        "videoId": "g0H2j4K6l8z",
        "title": "Dilbaro",
        "artist": "Harshdeep Kaur, Vibha Saraf, Shankar Mahadevan",
        "album": "Raazi",
        "year": 2018,
        "duration": "5:14",
        "composer": "Shankar-Ehsaan-Loy",
        "blurb": "Kashmiri wedding folk songs filled with poignant sunset tears."
      },
      {
        "videoId": "h2J4k6L8z0x",
        "title": "Raazi Title Track",
        "artist": "Arijit Singh",
        "album": "Raazi",
        "year": 2018,
        "duration": "6:30",
        "composer": "Shankar-Ehsaan-Loy",
        "blurb": "Quiet resolve and absolute commitment to the chosen path."
      },
      {
        "videoId": "j4K6l8Z0x2c",
        "title": "Hawayein (Film Version)",
        "artist": "Arijit Singh",
        "album": "Jab Harry Met Sejal",
        "year": 2017,
        "duration": "4:50",
        "composer": "Pritam",
        "blurb": "Wind chimes and evening breezes sweeping through the loft."
      },
      {
        "videoId": "k6L8z0X2c4v",
        "title": "Beech Beech Mein",
        "artist": "Arijit Singh, Shalmali Kholgade",
        "album": "Jab Harry Met Sejal",
        "year": 2017,
        "duration": "3:26",
        "composer": "Pritam",
        "blurb": "Funky disco bassline for mixing evening palettes."
      },
      {
        "videoId": "l8Z0x2C4v6b",
        "title": "Radha",
        "artist": "Shahid Mallya, Sunidhi Chauhan",
        "album": "Jab Harry Met Sejal",
        "year": 2017,
        "duration": "5:02",
        "composer": "Pritam",
        "blurb": "High energy Punjabi folk celebration."
      },
      {
        "videoId": "z0X2c4V6b8n",
        "title": "Butterfly",
        "artist": "Dev Negi, Sunidhi Chauhan, Aman Trikha",
        "album": "Jab Harry Met Sejal",
        "year": 2017,
        "duration": "3:57",
        "composer": "Pritam",
        "blurb": "Vibrant yellow mustard fields glowing in golden sunset."
      },
      {
        "videoId": "x2C4v6B8n0m",
        "title": "Yaadon Mein",
        "artist": "Jonita Gandhi, Mohammed Irfan",
        "album": "Jab Harry Met Sejal",
        "year": 2017,
        "duration": "5:06",
        "composer": "Pritam",
        "blurb": "Echoes of memories lingering in quiet studio corners."
      },
      {
        "videoId": "c4V6b8N0m2q",
        "title": "Jee Ve Sohneya",
        "artist": "Nooran Sisters",
        "album": "Jab Harry Met Sejal",
        "year": 2017,
        "duration": "4:10",
        "composer": "Pritam",
        "blurb": "Raw earthen vocals wishing long life to pure art."
      },
      {
        "videoId": "v6B8n0M2q4w",
        "title": "Parinda",
        "artist": "Papon",
        "album": "Jab Harry Met Sejal",
        "year": 2017,
        "duration": "3:12",
        "composer": "Pritam",
        "blurb": "The migratory bird returning to its evening nest."
      },
      {
        "videoId": "b8N0m2Q4w6e",
        "title": "Ghar (Acoustic Reprise)",
        "artist": "Nikhita Gandhi",
        "album": "Jab Harry Met Sejal",
        "year": 2017,
        "duration": "3:41",
        "composer": "Pritam",
        "blurb": "Gentle conclusion to the golden hour, welcoming the twilight."
      }
    ]
  },
  {
    "id": "dusk",
    "labelHi": "शाम",
    "labelEn": "Dusk & Chai",
    "slot": "06:30 PM – 09:00 PM IST",
    "startHour": 18,
    "endHour": 21,
    "tagline": "Clay cups steaming. Incense smoke curling past wet palettes.",
    "cue": "7:30 PM • Blue hour settling over balconies, ginger chai, warm vintage gazals",
    "image": "assets/scenes/dusk.jpg",
    "audioSrc": "assets/audio/session-dusk.mp3",
    "palette": [
      "#4a5568",
      "#b7791f",
      "#9b2c2c",
      "#c53030",
      "#f7fafc"
    ],
    "playlist": [
      {
        "videoId": "1p3Q_8m0v4e",
        "title": "Rimjhim Gire Sawan",
        "artist": "Kishore Kumar",
        "album": "Manzil",
        "year": 1979,
        "duration": "3:56",
        "composer": "R.D. Burman",
        "blurb": "Rain cascading over Bombay streets, captured in Kishore Kumar’s tender acoustic tone."
      },
      {
        "videoId": "4m8Y_1n0l2w",
        "title": "Woh Kagaz Ki Kashti",
        "artist": "Jagjit Singh, Chitra Singh",
        "album": "The Unforgettables",
        "year": 1982,
        "duration": "4:02",
        "composer": "Jagjit Singh",
        "blurb": "Sudarshan Faakir’s timeless poetry about paper boats, childhood rain, and lost innocent days."
      },
      {
        "videoId": "7v0Y_4m1l8e",
        "title": "Hothon Se Chhu Lo Tum",
        "artist": "Jagjit Singh",
        "album": "Prem Geet",
        "year": 1981,
        "duration": "4:58",
        "composer": "Jagjit Singh",
        "blurb": "Making art immortal by breathing love into cold marble."
      },
      {
        "videoId": "9b9X_4n0l5w",
        "title": "Tum Itna Jo Muskura Rahe Ho",
        "artist": "Jagjit Singh",
        "album": "Arth",
        "year": 1982,
        "duration": "5:18",
        "composer": "Jagjit Singh",
        "blurb": "Kaifi Azmi’s profound ghazal about sorrows hidden behind polite smiles."
      },
      {
        "videoId": "2m4Q_9v1l7e",
        "title": "Jhuki Jhuki Si Nazar",
        "artist": "Jagjit Singh",
        "album": "Arth",
        "year": 1982,
        "duration": "5:02",
        "composer": "Jagjit Singh",
        "blurb": "Tender glances in the blue hour between tea sips."
      },
      {
        "videoId": "5n8P_1l_xhh",
        "title": "Tere Aane Ki Jab Khabar Mehke",
        "artist": "Jagjit Singh",
        "album": "A Sound Affair",
        "year": 1985,
        "duration": "6:12",
        "composer": "Jagjit Singh",
        "blurb": "Fragrance of evening flowers wafting through open studio French doors."
      },
      {
        "videoId": "8v0Y_4m8l1e",
        "title": "Chitthi Na Koi Sandesh",
        "artist": "Jagjit Singh",
        "album": "Dushman",
        "year": 1998,
        "duration": "6:38",
        "composer": "Uttam Singh",
        "blurb": "The quiet solitude of sending works into the world without return letters."
      },
      {
        "videoId": "1b9X_1n0l6w",
        "title": "Hazaron Khwahishen Aisi",
        "artist": "Jagjit Singh",
        "album": "Mirza Ghalib",
        "year": 1988,
        "duration": "5:40",
        "composer": "Jagjit Singh",
        "blurb": "Mirza Ghalib’s thousand desires, each worth dying for."
      },
      {
        "videoId": "3m4Q_9v8l2e",
        "title": "Dil Hi Toh Hai",
        "artist": "Jagjit Singh",
        "album": "Mirza Ghalib",
        "year": 1988,
        "duration": "4:50",
        "composer": "Jagjit Singh",
        "blurb": "The heart is but human, prone to weeping in twilight."
      },
      {
        "videoId": "6n8P_1l4v9w",
        "title": "Baat Niklegi Toh Phir",
        "artist": "Jagjit Singh",
        "album": "The Unforgettables",
        "year": 1976,
        "duration": "4:15",
        "composer": "Jagjit Singh",
        "blurb": "Subtle rumors and stories carried on evening winds."
      },
      {
        "videoId": "9v0Y_4m1l4e",
        "title": "Kal Chaudhvin Ki Raat Thi",
        "artist": "Jagjit Singh",
        "album": "Marasim",
        "year": 1999,
        "duration": "5:50",
        "composer": "Jagjit Singh",
        "blurb": "Ibn-e-Insha’s haunting verse under the rising full moon."
      },
      {
        "videoId": "2b9X_4n0l8w",
        "title": "Aap Ko Dekhkar",
        "artist": "Jagjit Singh",
        "album": "Marasim",
        "year": 1999,
        "duration": "4:45",
        "composer": "Jagjit Singh",
        "blurb": "Seeing someone and feeling ancient poetry awaken."
      },
      {
        "videoId": "5m4Q_9v1l0e",
        "title": "Haath Chhute Bhi Toh",
        "artist": "Jagjit Singh",
        "album": "Marasim",
        "year": 1999,
        "duration": "5:12",
        "composer": "Jagjit Singh",
        "blurb": "Separation of hands while souls remain intertwined."
      },
      {
        "videoId": "7n8P_1l0v6w",
        "title": "Shaam Se Aankh Mein Nami Si Hai",
        "artist": "Jagjit Singh",
        "album": "Marasim",
        "year": 1999,
        "duration": "5:28",
        "composer": "Jagjit Singh",
        "blurb": "Evening moisture gathering in tired artist eyes."
      },
      {
        "videoId": "1v0Y_4m8l3e",
        "title": "Zindagi Yun Hui Basar Tanha",
        "artist": "Jagjit Singh",
        "album": "Marasim",
        "year": 1999,
        "duration": "4:35",
        "composer": "Jagjit Singh",
        "blurb": "A solitary creative life lived with quiet nobility."
      },
      {
        "videoId": "4b9X_1n4l7w",
        "title": "Duniya Jise Kehte Hain",
        "artist": "Jagjit Singh",
        "album": "Marasim",
        "year": 1999,
        "duration": "4:58",
        "composer": "Jagjit Singh",
        "blurb": "The world as clay: paper when dry, mud when wet."
      },
      {
        "videoId": "6m4Q_9v8l5e",
        "title": "Mohabbat Karne Wale",
        "artist": "Farida Khanum",
        "album": "Ghazal Heritage",
        "year": 1978,
        "duration": "7:15",
        "composer": "Farida Khanum",
        "blurb": "Those who truly love are never concerned with outcomes."
      },
      {
        "videoId": "8n8P_1l0v2w",
        "title": "Aaj Jaane Ki Zid Na Karo",
        "artist": "Farida Khanum",
        "album": "Classic Ghazals",
        "year": 1975,
        "duration": "6:45",
        "composer": "Sohail Rana",
        "blurb": "The timeless plea to the twilight hour: do not depart so soon."
      },
      {
        "videoId": "2v0Y_4m1l9e",
        "title": "Ranjish Hi Sahi (Original)",
        "artist": "Mehdi Hassan",
        "album": "Classic Ghazals",
        "year": 1977,
        "duration": "8:20",
        "composer": "Nisar Bazmi",
        "blurb": "The King of Ghazal rendering Ahmad Faraz with unmatched majesty."
      },
      {
        "videoId": "4b9X_4n0l2e",
        "title": "Gulon Mein Rang Bhare",
        "artist": "Mehdi Hassan",
        "album": "Classic Ghazals",
        "year": 1964,
        "duration": "6:10",
        "composer": "Mehdi Hassan",
        "blurb": "Faiz Ahmad Faiz’s prayer for blossoms to bloom and spring to arrive."
      },
      {
        "videoId": "7m4Q_9v1l6w",
        "title": "Duniya Kisi Ke Pyaar Mein",
        "artist": "Mehdi Hassan",
        "album": "Classic Ghazals",
        "year": 1974,
        "duration": "5:42",
        "composer": "Mehdi Hassan",
        "blurb": "The world finding meaning in the embrace of art."
      },
      {
        "videoId": "9n8P_1l4v0e",
        "title": "Zindagi Mein Toh Sabhi Pyaar",
        "artist": "Mehdi Hassan",
        "album": "Classic Ghazals",
        "year": 1978,
        "duration": "6:30",
        "composer": "Mehdi Hassan",
        "blurb": "Loving while alive, and remembering forever after."
      },
      {
        "videoId": "1v0Y_4m8l5w",
        "title": "Mohabbat Karne Wale Kam Na Honge",
        "artist": "Mehdi Hassan",
        "album": "Classic Ghazals",
        "year": 1980,
        "duration": "5:50",
        "composer": "Mehdi Hassan",
        "blurb": "Lovers of beauty will never diminish with time."
      },
      {
        "videoId": "3b9X_1n0l8e",
        "title": "Ab Ke Hum Bichhde",
        "artist": "Mehdi Hassan",
        "album": "Classic Ghazals",
        "year": 1977,
        "duration": "7:40",
        "composer": "Mehdi Hassan",
        "blurb": "Separation that can only be mended in dreams and art."
      },
      {
        "videoId": "6m4Q_9v8l1w",
        "title": "Chaudhvin Ka Chand Ho",
        "artist": "Mohammed Rafi",
        "album": "Chaudhvin Ka Chand",
        "year": 1960,
        "duration": "3:45",
        "composer": "Ravi",
        "blurb": "Full moon rising over Mughal courtyards at dusk."
      },
      {
        "videoId": "8n8P_1l0v7e",
        "title": "Din Dhal Jaaye",
        "artist": "Mohammed Rafi",
        "album": "Guide",
        "year": 1965,
        "duration": "4:48",
        "composer": "S.D. Burman",
        "blurb": "Sun descending over Chittorgarh fort walls in silent majesty."
      },
      {
        "videoId": "2v0Y_4m1l4w",
        "title": "Tere Mere Sapne",
        "artist": "Mohammed Rafi",
        "album": "Guide",
        "year": 1965,
        "duration": "4:20",
        "composer": "S.D. Burman",
        "blurb": "Shared creative visions walking together into the evening."
      },
      {
        "videoId": "4b9X_4n0l9e",
        "title": "Kya Se Kya Ho Gaya",
        "artist": "Mohammed Rafi",
        "album": "Guide",
        "year": 1965,
        "duration": "3:30",
        "composer": "S.D. Burman",
        "blurb": "The sudden transformation of the soul through experience."
      },
      {
        "videoId": "7m4Q_9v1l3w",
        "title": "Wahan Kaun Hai Tera",
        "artist": "S.D. Burman",
        "album": "Guide",
        "year": 1965,
        "duration": "4:52",
        "composer": "S.D. Burman",
        "blurb": "S.D. Burman’s own earthen folk voice calling the traveler home."
      },
      {
        "videoId": "9n8P_1l4v6e",
        "title": "Gaata Rahe Mera Dil",
        "artist": "Kishore Kumar, Lata Mangeshkar",
        "album": "Guide",
        "year": 1965,
        "duration": "4:55",
        "composer": "S.D. Burman",
        "blurb": "The heart singing continuously as daylight fades."
      },
      {
        "videoId": "1v0Y_4m8l2w",
        "title": "Piya Tose Naina Laage Re",
        "artist": "Lata Mangeshkar",
        "album": "Guide",
        "year": 1965,
        "duration": "8:25",
        "composer": "S.D. Burman",
        "blurb": "A monumental celebration of classical dance across all seasons."
      },
      {
        "videoId": "3b9X_1n0l5e",
        "title": "Mose Chhal Kiye Jaaye",
        "artist": "Lata Mangeshkar",
        "album": "Guide",
        "year": 1965,
        "duration": "4:05",
        "composer": "S.D. Burman",
        "blurb": "Kathak ankle bells ringing through empty palace arches."
      },
      {
        "videoId": "6m4Q_9v8l8w",
        "title": "Megh Re Megh",
        "artist": "Hariharan, Kavita Krishnamurthy",
        "album": "Lagaan",
        "year": 2001,
        "duration": "6:35",
        "composer": "A.R. Rahman",
        "blurb": "Thunder clouds rumbling across parched fields at dusk."
      },
      {
        "videoId": "8n8P_1l0v4e",
        "title": "Radha Kaise Na Jale",
        "artist": "Asha Bhosle, Udit Narayan",
        "album": "Lagaan",
        "year": 2001,
        "duration": "5:34",
        "composer": "A.R. Rahman",
        "blurb": "Playful Raas Leela folk rhythm under evening village banyan trees."
      },
      {
        "videoId": "2v0Y_4m1l7w",
        "title": "O Rey Chhori",
        "artist": "Udit Narayan, Alka Yagnik, Vasundhara Das",
        "album": "Lagaan",
        "year": 2001,
        "duration": "5:59",
        "composer": "A.R. Rahman",
        "blurb": "Rustic village romance woven with western Broadway brass."
      },
      {
        "videoId": "4b9X_4n0l1e",
        "title": "Chale Chalo",
        "artist": "A.R. Rahman, Srinivas",
        "album": "Lagaan",
        "year": 2001,
        "duration": "6:40",
        "composer": "A.R. Rahman",
        "blurb": "Indomitable willpower pushing through late evening fatigue."
      },
      {
        "videoId": "7m4Q_9v1l5w",
        "title": "Mitwa",
        "artist": "Udit Narayan, Alka Yagnik, Sukhwinder Singh",
        "album": "Lagaan",
        "year": 2001,
        "duration": "6:47",
        "composer": "A.R. Rahman",
        "blurb": "The soil-soaked anthem of brotherhood and shared dreams."
      },
      {
        "videoId": "9n8P_1l4v8e",
        "title": "O Paalanhaare",
        "artist": "Lata Mangeshkar, Udit Narayan",
        "album": "Lagaan",
        "year": 2001,
        "duration": "5:25",
        "composer": "A.R. Rahman",
        "blurb": "Lata Mangeshkar’s sacred evening prayer for divine guidance."
      },
      {
        "videoId": "1v0Y_4m8l7w",
        "title": "Waltz for a Romance",
        "artist": "A.R. Rahman",
        "album": "Lagaan",
        "year": 2001,
        "duration": "2:30",
        "composer": "A.R. Rahman",
        "blurb": "Delicate Victorian waltz floating over quiet studio papers."
      },
      {
        "videoId": "3b9X_1n0l2e",
        "title": "Lagaan.. Once Upon a Time",
        "artist": "A.R. Rahman",
        "album": "Lagaan",
        "year": 2001,
        "duration": "4:12",
        "composer": "A.R. Rahman",
        "blurb": "Grand epic overture setting the historical mood for drawing."
      },
      {
        "videoId": "6m4Q_9v8l6w",
        "title": "Yun Hi Chala Chal",
        "artist": "Udit Narayan, Hariharan, Kailash Kher",
        "album": "Swades",
        "year": 2004,
        "duration": "7:28",
        "composer": "A.R. Rahman",
        "blurb": "Wandering through the rural heartland as stars begin to appear."
      },
      {
        "videoId": "8n8P_1l0v1e",
        "title": "Yeh Jo Des Hai Tera",
        "artist": "A.R. Rahman",
        "album": "Swades",
        "year": 2004,
        "duration": "6:28",
        "composer": "A.R. Rahman",
        "blurb": "Shehnai notes pulling the wandering artist back to home soil."
      },
      {
        "videoId": "2v0Y_4m1l5e",
        "title": "Aahista Aahista",
        "artist": "Udit Narayan, Sadhana Sargam",
        "album": "Swades",
        "year": 2004,
        "duration": "5:49",
        "composer": "A.R. Rahman",
        "blurb": "Slow and measured evening breeze calming the atelier."
      },
      {
        "videoId": "4b9X_4n0l7e",
        "title": "Sanwariya Sanwariya",
        "artist": "Alka Yagnik",
        "album": "Swades",
        "year": 2004,
        "duration": "5:15",
        "composer": "A.R. Rahman",
        "blurb": "Gentle village women’s chorus around the evening well."
      },
      {
        "videoId": "7m4Q_9v1l0w",
        "title": "Pal Pal Hai Bhaari",
        "artist": "Madhushree, Vijay Prakash",
        "album": "Swades",
        "year": 2004,
        "duration": "6:54",
        "composer": "A.R. Rahman",
        "blurb": "Ramayana street theater enacted under lanterns in the village square."
      },
      {
        "videoId": "9n8P_1l4v3e",
        "title": "Dekho Na",
        "artist": "Sunidhi Chauhan, Shaan",
        "album": "Fanaa",
        "year": 2006,
        "duration": "5:24",
        "composer": "Jatin-Lalit",
        "blurb": "Rain on the studio glass at 8 PM, cozy and romantic."
      },
      {
        "videoId": "1v0Y_4m8l9w",
        "title": "Mere Haath Mein",
        "artist": "Sonu Nigam, Sunidhi Chauhan",
        "album": "Fanaa",
        "year": 2006,
        "duration": "4:48",
        "composer": "Jatin-Lalit",
        "blurb": "Hand in hand under falling snow in the twilight hills."
      },
      {
        "videoId": "3b9X_1n0l4e",
        "title": "Chand Sifarish",
        "artist": "Shaan, Kailash Kher",
        "album": "Fanaa",
        "year": 2006,
        "duration": "4:37",
        "composer": "Jatin-Lalit",
        "blurb": "Lively acoustic tabla rhythm celebrating the evening moon."
      },
      {
        "videoId": "6m4Q_9v8l2w",
        "title": "Chanda Chamke",
        "artist": "Babul Supriyo, Mahalaxmi Iyer",
        "album": "Fanaa",
        "year": 2006,
        "duration": "3:50",
        "composer": "Jatin-Lalit",
        "blurb": "Playful tongue-twister rhythm for lighthearted sketching."
      },
      {
        "videoId": "8n8P_1l0v6e",
        "title": "Des Rangila",
        "artist": "Mahalaxmi Iyer",
        "album": "Fanaa",
        "year": 2006,
        "duration": "5:18",
        "composer": "Jatin-Lalit",
        "blurb": "Rich patriotic celebration of Indian colors and textures."
      },
      {
        "videoId": "2v0Y_4m1l8w",
        "title": "Tanhayee",
        "artist": "Sonu Nigam",
        "album": "Dil Chahta Hai",
        "year": 2001,
        "duration": "6:10",
        "composer": "Shankar-Ehsaan-Loy",
        "blurb": "The iconic 2000s anthem of solitary urban heartbreak."
      },
      {
        "videoId": "4b9X_4n0l3w",
        "title": "Jaane Kyun",
        "artist": "Udit Narayan, Alka Yagnik",
        "album": "Dil Chahta Hai",
        "year": 2001,
        "duration": "4:49",
        "composer": "Shankar-Ehsaan-Loy",
        "blurb": "Acoustic banter between contrasting artistic sensibilities."
      },
      {
        "videoId": "7m4Q_9v1l7e",
        "title": "Kaisi Hai Ye Rut",
        "artist": "Srinivas",
        "album": "Dil Chahta Hai",
        "year": 2001,
        "duration": "5:29",
        "composer": "Shankar-Ehsaan-Loy",
        "blurb": "Acoustic guitar and gentle breeze watching leaves drift down."
      },
      {
        "videoId": "9n8P_1l4v1e",
        "title": "Woh Ladki Hai Kahan",
        "artist": "Shaan, Kavita Krishnamurthy",
        "album": "Dil Chahta Hai",
        "year": 2001,
        "duration": "5:06",
        "composer": "Shankar-Ehsaan-Loy",
        "blurb": "Acoustic Irish violin tribute to 50s Bollywood dance cinema."
      },
      {
        "videoId": "1v0Y_4m8l4w",
        "title": "Dil Chahta Hai Title Track",
        "artist": "Shankar Mahadevan",
        "album": "Dil Chahta Hai",
        "year": 2001,
        "duration": "5:11",
        "composer": "Shankar-Ehsaan-Loy",
        "blurb": "The soundtrack that defined a new millennium of youthful creativity."
      }
    ]
  },
  {
    "id": "night",
    "labelHi": "रात",
    "labelEn": "Night Atelier",
    "slot": "09:00 PM – 12:00 AM IST",
    "startHour": 21,
    "endHour": 24,
    "tagline": "Deep studio flow. The rest of the world has gone to sleep.",
    "cue": "10:30 PM • Warm lamps casting long shadows, deep focus, pure undisturbed flow",
    "image": "assets/scenes/night.jpg",
    "audioSrc": "assets/audio/session-night.mp3",
    "palette": [
      "#232b38",
      "#415a77",
      "#c28b48",
      "#8a4f3d",
      "#f0ede6"
    ],
    "playlist": [
      {
        "videoId": "v8B8_4m0l1Z",
        "title": "Behti Hawa Sa Tha Woh",
        "artist": "Shaan, Shantanu Moitra",
        "album": "3 Idiots",
        "year": 2009,
        "duration": "5:01",
        "composer": "Shantanu Moitra",
        "blurb": "Remembering a free-spirited creative friend who wandered like a kite."
      },
      {
        "videoId": "4b9X_1n0l5e",
        "title": "Kandisa",
        "artist": "Indian Ocean",
        "album": "Kandisa",
        "year": 2000,
        "duration": "7:20",
        "composer": "Indian Ocean",
        "blurb": "Ancient Aramaic Christian hymn blended with Indian classical rock."
      },
      {
        "videoId": "7m4Q_9v8l2w",
        "title": "Bandeh",
        "artist": "Indian Ocean",
        "album": "Black Friday",
        "year": 2004,
        "duration": "7:45",
        "composer": "Indian Ocean",
        "blurb": "Epic, thundering meditation on humanity and moral reckoning."
      },
      {
        "videoId": "9n8P_1l0v7e",
        "title": "Bhor (Reprise)",
        "artist": "Indian Ocean",
        "album": "Jhini",
        "year": 2003,
        "duration": "6:50",
        "composer": "Indian Ocean",
        "blurb": "Acoustic bass and drums capturing night’s solemn passage."
      },
      {
        "videoId": "1v0Y_4m1l8w",
        "title": "Jhini",
        "artist": "Indian Ocean",
        "album": "Jhini",
        "year": 2003,
        "duration": "8:12",
        "composer": "Indian Ocean",
        "blurb": "Kabir’s mystic verses woven like fine translucent cotton fabric."
      },
      {
        "videoId": "3b9X_4n0l4e",
        "title": "Ma Rewa",
        "artist": "Indian Ocean",
        "album": "Kandisa",
        "year": 2000,
        "duration": "6:42",
        "composer": "Indian Ocean",
        "blurb": "Ode to the river Narmada, flowing relentlessly through the dark."
      },
      {
        "videoId": "6m4Q_9v1l9w",
        "title": "Mann Kasturi",
        "artist": "Indian Ocean",
        "album": "Masaan",
        "year": 2015,
        "duration": "7:18",
        "composer": "Indian Ocean",
        "blurb": "Musk deer searching through the forest for the scent inside its own heart."
      },
      {
        "videoId": "8n8P_1l4v2e",
        "title": "Beparwah",
        "artist": "Parvaaz",
        "album": "Baran",
        "year": 2014,
        "duration": "6:04",
        "composer": "Parvaaz",
        "blurb": "Psychedelic Urdu rock from Bangalore echoing like mountain thunder."
      },
      {
        "videoId": "2v0Y_4m8l6w",
        "title": "Gul Gulshan",
        "artist": "Parvaaz",
        "album": "Baran",
        "year": 2014,
        "duration": "5:48",
        "composer": "Parvaaz",
        "blurb": "Lush Kashmiri poetic textures over hypnotic acoustic rhythms."
      },
      {
        "videoId": "4b9X_1n0l8e",
        "title": "Color White",
        "artist": "Parvaaz",
        "album": "Baran",
        "year": 2014,
        "duration": "6:25",
        "composer": "Parvaaz",
        "blurb": "Expansive soundscapes honoring the blank purity of the white canvas."
      },
      {
        "videoId": "7m4Q_9v8l1w",
        "title": "Roz Roz (Acoustic)",
        "artist": "The Yellow Diary, Shilpa Rao",
        "album": "Single Release",
        "year": 2021,
        "duration": "3:45",
        "composer": "The Yellow Diary",
        "blurb": "Intimate night studio sessions where each stroke feels deeply personal."
      },
      {
        "videoId": "9n8P_1l0v4e",
        "title": "Bematlab",
        "artist": "Osho Jain",
        "album": "Single Release",
        "year": 2021,
        "duration": "3:22",
        "composer": "Osho Jain",
        "blurb": "Finding immense beauty in purposeless, spontaneous creative play."
      },
      {
        "videoId": "1v0Y_4m1l7w",
        "title": "Khush To Hai Na",
        "artist": "Osho Jain",
        "album": "Single Release",
        "year": 2020,
        "duration": "3:15",
        "composer": "Osho Jain",
        "blurb": "Gentle nocturnal inquiry into one’s true inner peace."
      },
      {
        "videoId": "3b9X_4n0l6e",
        "title": "Tu Aisa Kaise Hai",
        "artist": "Osho Jain",
        "album": "Single Release",
        "year": 2022,
        "duration": "3:30",
        "composer": "Osho Jain",
        "blurb": "Acoustic fingerpicking reflecting on human individuality."
      },
      {
        "videoId": "6m4Q_9v8l3w",
        "title": "Khud Se",
        "artist": "Osho Jain",
        "album": "Single Release",
        "year": 2021,
        "duration": "3:40",
        "composer": "Osho Jain",
        "blurb": "Making peace with yourself in the silence of late night."
      },
      {
        "videoId": "8n8P_1l0v9e",
        "title": "Dua",
        "artist": "Bharat Chauhan",
        "album": "Guroor",
        "year": 2019,
        "duration": "4:20",
        "composer": "Bharat Chauhan",
        "blurb": "Raw, gritty acoustic Delhi indie folk exploring loneliness."
      },
      {
        "videoId": "2v0Y_4m1l5w",
        "title": "Guroor",
        "artist": "Bharat Chauhan",
        "album": "Guroor",
        "year": 2019,
        "duration": "4:45",
        "composer": "Bharat Chauhan",
        "blurb": "Pride and fragility exposed under unforgiving studio lamps."
      },
      {
        "videoId": "4b9X_4n_owx",
        "title": "Muddat",
        "artist": "Bharat Chauhan",
        "album": "Guroor",
        "year": 2019,
        "duration": "3:50",
        "composer": "Bharat Chauhan",
        "blurb": "Long epochs of patient artistic toil passing in stillness."
      },
      {
        "videoId": "7m4Q_9v1l8w",
        "title": "Jaadugari",
        "artist": "Lifafa",
        "album": "Jaadugari",
        "year": 2019,
        "duration": "4:15",
        "composer": "Suryakant Sawhney",
        "blurb": "Hypnotic electronic Hindi cabaret for midnight dream states."
      },
      {
        "videoId": "9n8P_1l4v2w",
        "title": "Nikamma",
        "artist": "Lifafa",
        "album": "Superstitious",
        "year": 2020,
        "duration": "4:50",
        "composer": "Suryakant Sawhney",
        "blurb": "Downtempo night pulses for layering deep umbers and blacks."
      },
      {
        "videoId": "1v0Y_4m8l6e",
        "title": "Din Raat",
        "artist": "Lifafa",
        "album": "Jaadugari",
        "year": 2019,
        "duration": "5:10",
        "composer": "Suryakant Sawhney",
        "blurb": "The blurring boundary between night and morning when in deep flow."
      },
      {
        "videoId": "3b9X_1n0l7w",
        "title": "Floated By",
        "artist": "Peter Cat Recording Co.",
        "album": "Bismillah",
        "year": 2019,
        "duration": "5:18",
        "composer": "Peter Cat Recording Co.",
        "blurb": "Gypsy jazz trumpet and velvet vocals for late night bohemian ateliers."
      },
      {
        "videoId": "6m4Q_9v8l4e",
        "title": "Where The Money Flows",
        "artist": "Peter Cat Recording Co.",
        "album": "Bismillah",
        "year": 2019,
        "duration": "6:35",
        "composer": "Peter Cat Recording Co.",
        "blurb": "Cinematic waltz echoing through grand vintage ballrooms."
      },
      {
        "videoId": "8n8P_1l0v1w",
        "title": "Memory Box",
        "artist": "Peter Cat Recording Co.",
        "album": "Bismillah",
        "year": 2019,
        "duration": "8:42",
        "composer": "Peter Cat Recording Co.",
        "blurb": "A 9-minute disco-jazz journey through forgotten memories."
      },
      {
        "videoId": "2v0Y_4m1l7e",
        "title": "Soulless Friends",
        "artist": "Peter Cat Recording Co.",
        "album": "Bismillah",
        "year": 2019,
        "duration": "4:50",
        "composer": "Peter Cat Recording Co.",
        "blurb": "Late night camaraderie over cigarettes and linseed oil."
      },
      {
        "videoId": "4b9X_4n_dco",
        "title": "Remain In Me",
        "artist": "Peter Cat Recording Co.",
        "album": "Bismillah",
        "year": 2019,
        "duration": "4:20",
        "composer": "Peter Cat Recording Co.",
        "blurb": "Haunting crooning that stays like wet ink on blotting paper."
      },
      {
        "videoId": "7m4Q_9v1l2e",
        "title": "I’m Home",
        "artist": "Peter Cat Recording Co.",
        "album": "Bismillah",
        "year": 2019,
        "duration": "3:30",
        "composer": "Peter Cat Recording Co.",
        "blurb": "Finding eternal rest in the studio easel corner."
      },
      {
        "videoId": "9n8P_1l4v5w",
        "title": "Fursat",
        "artist": "Tanmaya Bhatnagar",
        "album": "Single Release",
        "year": 2021,
        "duration": "3:45",
        "composer": "Tanmaya Bhatnagar",
        "blurb": "Gentle ukulele whisper celebrating unhurried leisure."
      },
      {
        "videoId": "1v0Y_4m8l0e",
        "title": "Kya Tum Naraaz Ho",
        "artist": "Tanmaya Bhatnagar",
        "album": "Single Release",
        "year": 2020,
        "duration": "3:15",
        "composer": "Tanmaya Bhatnagar",
        "blurb": "Tender apology made over warm herbal tea at 11 PM."
      },
      {
        "videoId": "3b9X_1n0l4w",
        "title": "Kyun",
        "artist": "Tanmaya Bhatnagar",
        "album": "Single Release",
        "year": 2020,
        "duration": "3:25",
        "composer": "Tanmaya Bhatnagar",
        "blurb": "Questioning the purpose of longing while watching stars."
      },
      {
        "videoId": "6m4Q_9v8l9e",
        "title": "Since I See You",
        "artist": "When Chai Met Toast",
        "album": "Joy of Little Things",
        "year": 2017,
        "duration": "3:35",
        "composer": "When Chai Met Toast",
        "blurb": "Sweet banjo and acoustic guitar bringing warmth to midnight."
      },
      {
        "videoId": "8n8P_1l0v3w",
        "title": "Beautiful World",
        "artist": "When Chai Met Toast",
        "album": "Joy of Little Things",
        "year": 2017,
        "duration": "3:40",
        "composer": "When Chai Met Toast",
        "blurb": "Gratitude for the vibrant visual world we inhabit."
      },
      {
        "videoId": "2v0Y_4m1l6w",
        "title": "Firefly",
        "artist": "When Chai Met Toast",
        "album": "Joy of Little Things",
        "year": 2017,
        "duration": "3:20",
        "composer": "When Chai Met Toast",
        "blurb": "Small glowing sparks of inspiration floating in the darkness."
      },
      {
        "videoId": "4b9X_4n0l2w",
        "title": "Believe",
        "artist": "When Chai Met Toast",
        "album": "Believe EP",
        "year": 2018,
        "duration": "3:30",
        "composer": "When Chai Met Toast",
        "blurb": "Faith in one’s creative vision when nobody else sees it yet."
      },
      {
        "videoId": "7m4Q_9v1l5e",
        "title": "Forever",
        "artist": "When Chai Met Toast",
        "album": "Believe EP",
        "year": 2018,
        "duration": "3:50",
        "composer": "When Chai Met Toast",
        "blurb": "Timeless bond between the painter and the finished canvas."
      },
      {
        "videoId": "9n8P_1l4v8w",
        "title": "Maybe I Can Fly",
        "artist": "When Chai Met Toast",
        "album": "When We Feel Young",
        "year": 2021,
        "duration": "4:10",
        "composer": "When Chai Met Toast",
        "blurb": "Taking creative leaps of faith late at night."
      },
      {
        "videoId": "1v0Y_4m8l7e",
        "title": "Kahaani",
        "artist": "When Chai Met Toast",
        "album": "When We Feel Young",
        "year": 2021,
        "duration": "3:25",
        "composer": "When Chai Met Toast",
        "blurb": "Stories told through layers of tempera and oil glazes."
      },
      {
        "videoId": "3b9X_1n0l9w",
        "title": "Ocean Fantasy",
        "artist": "When Chai Met Toast",
        "album": "When We Feel Young",
        "year": 2021,
        "duration": "3:45",
        "composer": "When Chai Met Toast",
        "blurb": "Surfing gentle acoustic waves into the late night."
      },
      {
        "videoId": "6m4Q_9v8l2e",
        "title": "Constellation",
        "artist": "When Chai Met Toast",
        "album": "When We Feel Young",
        "year": 2021,
        "duration": "4:02",
        "composer": "When Chai Met Toast",
        "blurb": "Connecting disparate sketches into a unified masterwork."
      },
      {
        "videoId": "8n8P_1l0v6w",
        "title": "Remember",
        "artist": "When Chai Met Toast",
        "album": "When We Feel Young",
        "year": 2021,
        "duration": "3:55",
        "composer": "When Chai Met Toast",
        "blurb": "Holding on to the reasons you began painting in the first place."
      },
      {
        "videoId": "2v0Y_4m1l8e",
        "title": "Bayaan (Live Acoustic)",
        "artist": "Bayaan",
        "album": "Suno",
        "year": 2018,
        "duration": "5:15",
        "composer": "Bayaan",
        "blurb": "Rich Urdu poetry and acoustic strings resonating through lofts."
      },
      {
        "videoId": "4b9X_4n0l7w",
        "title": "Nahin Milta",
        "artist": "Bayaan",
        "album": "Suno",
        "year": 2018,
        "duration": "4:48",
        "composer": "Bayaan",
        "blurb": "Searching for perfection and finding beauty in the search."
      },
      {
        "videoId": "7m4Q_9v1l0e",
        "title": "Dheem Tana",
        "artist": "Advaita",
        "album": "The Grounded Spectrum",
        "year": 2008,
        "duration": "6:15",
        "composer": "Advaita",
        "blurb": "Classical tarana vocals meeting ambient fusion rhythms."
      },
      {
        "videoId": "9n8P_1l4v4w",
        "title": "Ghir Ghir",
        "artist": "Advaita",
        "album": "The Silent Sea",
        "year": 2012,
        "duration": "7:02",
        "composer": "Advaita",
        "blurb": "Dark monsoon clouds swirling in late night imagination."
      },
      {
        "videoId": "1v0Y_4m8l3w",
        "title": "Mo Funk",
        "artist": "Advaita",
        "album": "The Silent Sea",
        "year": 2012,
        "duration": "5:20",
        "composer": "Advaita",
        "blurb": "Groovy classical fusion keeping energy steady at 11:30 PM."
      },
      {
        "videoId": "3b9X_1n0l8w",
        "title": "Durga",
        "artist": "Advaita",
        "album": "The Grounded Spectrum",
        "year": 2008,
        "duration": "6:30",
        "composer": "Advaita",
        "blurb": "Sacred classical raga Durga played with modern acoustic rock majesty."
      },
      {
        "videoId": "6m4Q_9v8l5w",
        "title": "Hamsadhwani",
        "artist": "Advaita",
        "album": "The Grounded Spectrum",
        "year": 2008,
        "duration": "5:45",
        "composer": "Advaita",
        "blurb": "Swan song melodies welcoming peaceful creative resolution."
      },
      {
        "videoId": "8n8P_1l0v2e",
        "title": "The Silent Sea",
        "artist": "Advaita",
        "album": "The Silent Sea",
        "year": 2012,
        "duration": "6:55",
        "composer": "Advaita",
        "blurb": "Drifting on silent midnight waters before turning off the studio lamp."
      },
      {
        "videoId": "2v0Y_4m1l9w",
        "title": "Mere Nishaan",
        "artist": "Kailash Kher",
        "album": "OMG Oh My God!",
        "year": 2012,
        "duration": "4:45",
        "composer": "Meet Bros Anjjan",
        "blurb": "Looking back at the brush marks and footprints left behind today."
      },
      {
        "videoId": "4b9X_4n0l1w",
        "title": "Alvida",
        "artist": "KK",
        "album": "Life In A... Metro",
        "year": 2007,
        "duration": "5:40",
        "composer": "Pritam",
        "blurb": "A grand farewell to another honest day of painting at the easel."
      },
      {
        "videoId": "7m4Q_9v1l6e",
        "title": "Abhi Mujh Mein Kahin",
        "artist": "Sonu Nigam",
        "album": "Agneepath",
        "year": 2012,
        "duration": "6:04",
        "composer": "Ajay-Atul",
        "blurb": "The tender ember of life and feeling rekindled through art."
      },
      {
        "videoId": "9n8P_1l4v0w",
        "title": "Lukka Chuppi",
        "artist": "Lata Mangeshkar, A.R. Rahman",
        "album": "Rang De Basanti",
        "year": 2006,
        "duration": "6:36",
        "composer": "A.R. Rahman",
        "blurb": "Motherly comfort and sweet slumber at the close of midnight."
      },
      {
        "videoId": "1v0Y_4m8l5e",
        "title": "Kho Gaye Hum Kahan (Midnight Reprise)",
        "artist": "Prateek Kuhad",
        "album": "Baar Baar Dekho",
        "year": 2016,
        "duration": "3:33",
        "composer": "Jasleen Royal",
        "blurb": "Closing the sketchbook, cleaning the brushes, and resting in peace."
      },
      {
        "videoId": "3b9X_1n0l7e",
        "title": "Iktara (Tochi Raina Solo)",
        "artist": "Tochi Raina",
        "album": "Wake Up Sid",
        "year": 2009,
        "duration": "4:13",
        "composer": "Amit Trivedi",
        "blurb": "The final Sufi drone echoing through the studio as midnight bells toll."
      },
      {
        "videoId": "6m4Q_9v8l4w",
        "title": "Choo Lo (Midnight Live)",
        "artist": "The Local Train",
        "album": "Live Studio Sessions",
        "year": 2017,
        "duration": "4:20",
        "composer": "The Local Train",
        "blurb": "The immortal ballad completing the circle back to the start of the night."
      }
    ]
  }
];

// Flat Master Pool of all 385 Tracks
const ALL_TRACKS = [];
SESSIONS.forEach(sess => {
  sess.playlist.forEach(t => {
    t.session = sess;
    ALL_TRACKS.push(t);
  });
});

// ==========================================================================
// 2. CREATIVE ARTWORK & BILINGUAL QUOTES DATABASE
// ==========================================================================
const ARTWORKS = {
  minimal: {
    src: 'assets/scenes/minimal-canvas.png',
    title: 'रूप विन्यास',
    medium: 'oil on linen',
    alt: 'Minimalist geometric composition in terracotta, indigo and warm ochre on linen canvas'
  },
  beach: {
    src: 'assets/scenes/minimal-canvas.png',
    title: 'रूप विन्यास',
    medium: 'oil on linen',
    alt: 'Minimalist geometric composition in terracotta, indigo and warm ochre on linen canvas'
  },
  mountain: {
    src: 'assets/scenes/minimal-canvas.png',
    title: 'रूप विन्यास',
    medium: 'oil on linen',
    alt: 'Minimalist geometric composition in terracotta, indigo and warm ochre on linen canvas'
  }
};

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
    role: 'Chitram Atelier'
  }
];

// ==========================================================================
// 3. STATE & DOM REFERENCES
// ==========================================================================
const state = {
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
  tableFilterMode: 'session', // 'session' or 'all'

  // YouTube Iframe Engine
  ytPlayer: null,
  ytReady: false,

  // Non-repeating History
  playedHistory: new Set(),

  // Playback & Interruption State
  userPaused: false,
  isAudioUnlocked: false,

  // Artwork & Quotes
  currentArtworkKey: 'minimal',
  currentQuoteIndex: 0,
  progressTimer: null
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
  easelImage: document.getElementById('easel-image'),
  easelCaptionTitle: document.getElementById('easel-caption-title'),
  easelCaptionMedium: document.getElementById('easel-caption-medium'),
  btnArtBeach: document.getElementById('btn-art-beach'),
  btnArtMountain: document.getElementById('btn-art-mountain'),

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
  const track = state.currentPlayingTrack || state.playlist[state.currentTrackIndex] || ALL_TRACKS[0];
  if (!track) return;

  state.currentPlayingTrack = track;

  if (el.deckTrackTitle) el.deckTrackTitle.textContent = track.title;
  if (el.deckTrackArtist) el.deckTrackArtist.textContent = track.artist;
  if (el.deckTrackAlbum) el.deckTrackAlbum.textContent = `${track.album}, ${track.year}`;
  if (el.deckTrackBlurb) el.deckTrackBlurb.textContent = track.blurb;
  if (el.deckYtOut) el.deckYtOut.href = `https://www.youtube.com/watch?v=${track.videoId}`;

  if (el.trackScrubFill) el.trackScrubFill.style.width = '0%';
  if (el.deckTimeCurrent) el.deckTimeCurrent.textContent = '0:00';
  if (el.deckTimeDuration) el.deckTimeDuration.textContent = track.duration || '4:00';

  if (el.queueStatusBadge) {
    const unplayedCount = ALL_TRACKS.length - state.playedHistory.size;
    el.queueStatusBadge.innerHTML = `<span class="badge-dot ochre"></span> ${unplayedCount} New Songs in Queue`;
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
  } else {
    el.deckPlayIcon?.classList.remove('hidden');
    el.deckPauseIcon?.classList.add('hidden');
    if (el.playKeyLabel) el.playKeyLabel.textContent = 'PLAY';
    stopTrackProgress();
  }

  updateSoundtrackTableActiveRow();

  if ('mediaSession' in navigator) {
    try {
      navigator.mediaSession.playbackState = playing ? 'playing' : 'paused';
    } catch (e) {}
  }
}

function getCurrentPlaybackTime() {
  if (state.ytReady && state.ytPlayer && typeof state.ytPlayer.getCurrentTime === 'function') {
    try {
      const ytTime = state.ytPlayer.getCurrentTime();
      if (!isNaN(ytTime) && ytTime >= 0) return ytTime;
    } catch (e) {}
  }
  if (el.studioAudio && !isNaN(el.studioAudio.currentTime)) {
    return el.studioAudio.currentTime || 0;
  }
  return 0;
}

function getCurrentPlaybackDuration() {
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
  if (el.studioAudio && !isNaN(el.studioAudio.duration) && isFinite(el.studioAudio.duration) && el.studioAudio.duration > 0) {
    return el.studioAudio.duration;
  }
  return 240;
}

function seekToTime(seconds) {
  if (state.ytReady && state.ytPlayer && typeof state.ytPlayer.seekTo === 'function') {
    try {
      state.ytPlayer.seekTo(seconds, true);
    } catch (e) {}
  }
  if (el.studioAudio && !isNaN(seconds)) {
    try {
      el.studioAudio.currentTime = seconds;
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
// 6. YOUTUBE OFFICIAL AUDIO ENGINE (Real Original Music)
// ==========================================================================
function initYouTube() {
  window.onYouTubeIframeAPIReady = () => {
    const initialTrack = state.currentPlayingTrack || state.playlist[state.currentTrackIndex] || ALL_TRACKS[0];
    const initialId = initialTrack ? initialTrack.videoId : 'W4rSh7R-KP8';

    state.ytPlayer = new YT.Player('yt-player-slot', {
      height: '200',
      width: '200',
      videoId: initialId,
      playerVars: {
        autoplay: 0,
        controls: 0,
        disablekb: 1,
        enablejsapi: 1,
        fs: 0,
        iv_load_policy: 3,
        modestbranding: 1,
        playsinline: 1,
        rel: 0
      },
      events: {
        onReady: (event) => {
          state.ytReady = true;
          event.target.setVolume(state.isMuted ? 0 : state.volume);
          if (state.isPlaying) {
            try {
              event.target.playVideo();
            } catch (e) {}
          }
        },
        onStateChange: (event) => {
          if (event.data === YT.PlayerState.PLAYING) {
            updatePlayState(true);
            if (el.unmuteNotice) el.unmuteNotice.classList.add('hidden');
          } else if (event.data === YT.PlayerState.PAUSED) {
            if (state.userPaused) {
              updatePlayState(false);
            }
          } else if (event.data === YT.PlayerState.ENDED) {
            // Song finished: automatically advance to the next unplayed song!
            playNext(true);
          }
        },
        onError: (err) => {
          console.warn('YouTube notice, auto-advancing:', err);
          setTimeout(() => playNext(true), 600);
        }
      }
    });
  };

  if (window.YT && window.YT.Player) {
    window.onYouTubeIframeAPIReady();
  }
}

// ==========================================================================
// 7. AUDIO ENGINE, MEDIA SESSION & CONTINUOUS LOOP (iOS Lock Screen Ready)
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

  const session = track.session || state.currentSession || findSessionForHour(getLiveKolkataHour());
  const artKey = state.currentArtworkKey || 'beach';
  const artData = ARTWORKS[artKey] || ARTWORKS.beach;

  let artworkUrl = '';
  try {
    artworkUrl = new URL(artData.src, window.location.href).href;
  } catch (e) {
    artworkUrl = artData.src;
  }

  try {
    navigator.mediaSession.metadata = new MediaMetadata({
      title: track.title,
      artist: track.artist,
      album: `${track.album || session.labelEn} • चित्रम् Studio Radio`,
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
  if (state.ytReady && state.ytPlayer && typeof state.ytPlayer.setVolume === 'function') {
    try {
      if (state.isMuted) {
        state.ytPlayer.mute();
      } else {
        state.ytPlayer.unMute();
        state.ytPlayer.setVolume(state.volume);
      }
    } catch (e) {}
  }
  if (el.studioAudio) {
    el.studioAudio.volume = state.isMuted ? 0 : (state.volume / 100);
  }
  updateMuteIcons();
}

function setupAudioElementListeners() {
  if (!el.studioAudio) return;

  // IMPORTANT: Set loop = false so the ended event fires and advances to the next song!
  el.studioAudio.loop = false;

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
      setTimeout(() => {
        if (!state.userPaused && state.isPlaying && el.studioAudio.paused) {
          el.studioAudio.play().catch(() => {});
        }
      }, 60);
    }
  });

  // Endless non-repeating continuous progression across tracks
  el.studioAudio.addEventListener('ended', () => {
    playNext(true);
  });

  el.studioAudio.addEventListener('error', (err) => {
    console.warn('Audio warning, advancing:', err);
    setTimeout(() => playNext(true), 600);
  });
}

function loadTrack(autoPlay = true) {
  const track = state.currentPlayingTrack || state.playlist[state.currentTrackIndex];
  if (!track) return;

  state.currentPlayingTrack = track;
  state.playedHistory.add(track.videoId || track.title);

  renderTrackInfo();
  updateMediaSession(track);
  setupAudioSession();

  // 1. Play real song in YouTube Player
  if (state.ytReady && state.ytPlayer && typeof state.ytPlayer.loadVideoById === 'function') {
    try {
      if (autoPlay || state.isPlaying) {
        state.ytPlayer.loadVideoById(track.videoId);
        state.ytPlayer.playVideo();
      } else {
        state.ytPlayer.cueVideoById(track.videoId);
      }
      state.ytPlayer.setVolume(state.isMuted ? 0 : state.volume);
    } catch (e) {
      console.warn('YouTube loadVideoById warning:', e);
    }
  }

  // 2. Play companion native audio for iOS background & lock-screen
  const audioSrc = getTrackAudioSrc(track, state.currentSession);
  if (el.studioAudio) {
    el.studioAudio.loop = false;
    el.studioAudio.src = audioSrc;
    el.studioAudio.currentTime = 0;
    el.studioAudio.volume = state.isMuted ? 0 : (state.volume / 100);
    el.studioAudio.muted = state.isMuted;
    el.studioAudio.load();

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

  if (autoPlay) {
    updatePlayState(true);
  }
}

// ==========================================================================
// 8. SMART NON-REPEATING QUEUE ENGINE
// ==========================================================================
function getNextUnplayedTrack() {
  const current = state.currentPlayingTrack;
  if (current) {
    state.playedHistory.add(current.videoId || current.title);
  }

  // 1. Unplayed tracks in currently active playlist
  let unplayedInCurrent = state.playlist.filter(t => !state.playedHistory.has(t.videoId || t.title));

  // 2. Unplayed tracks in entire 385-song library
  let unplayedInAll = ALL_TRACKS.filter(t => !state.playedHistory.has(t.videoId || t.title));

  // 3. If every single track in the entire catalog has been played, reset history and begin fresh cycle!
  if (unplayedInAll.length === 0) {
    state.playedHistory.clear();
    if (current) state.playedHistory.add(current.videoId || current.title);
    unplayedInCurrent = state.playlist.filter(t => !state.playedHistory.has(t.videoId || t.title));
    unplayedInAll = ALL_TRACKS.filter(t => !state.playedHistory.has(t.videoId || t.title));
  }

  const pool = unplayedInCurrent.length > 0 ? unplayedInCurrent : unplayedInAll;

  let nextTrack = null;
  if (state.isShuffle) {
    const randIdx = Math.floor(Math.random() * pool.length);
    nextTrack = pool[randIdx];
  } else {
    nextTrack = pool[0];
  }

  return nextTrack;
}

function playNext(autoPlay = true) {
  const nextTrack = getNextUnplayedTrack();
  if (!nextTrack) return;

  state.currentPlayingTrack = nextTrack;

  // Synchronize index in current playlist if it exists
  const idx = state.playlist.findIndex(t => (t.videoId || t.title) === (nextTrack.videoId || nextTrack.title));
  if (idx !== -1) {
    state.currentTrackIndex = idx;
  } else {
    // If nextTrack came from broader library, add to playlist so it renders in table
    state.playlist.push(nextTrack);
    state.currentTrackIndex = state.playlist.length - 1;
    renderSoundtrackTable();
  }

  loadTrack(autoPlay);
}

function playPrev(autoPlay = true) {
  state.currentTrackIndex = (state.currentTrackIndex - 1 + state.playlist.length) % state.playlist.length;
  state.currentPlayingTrack = state.playlist[state.currentTrackIndex];
  loadTrack(autoPlay);
}

function startPlaybackWithSound() {
  state.userPaused = false;
  state.isMuted = false;
  if (!state.volume || state.volume === 0) state.volume = 85;

  setupAudioSession();
  initMediaSessionHandlers();
  requestWakeLock();

  const track = state.currentPlayingTrack || state.playlist[state.currentTrackIndex] || ALL_TRACKS[0];
  state.currentPlayingTrack = track;

  // Play YouTube
  if (state.ytReady && state.ytPlayer && typeof state.ytPlayer.playVideo === 'function') {
    try {
      state.ytPlayer.unMute();
      state.ytPlayer.setVolume(state.volume);
      state.ytPlayer.playVideo();
    } catch (e) {}
  }

  // Play Native Audio
  if (el.studioAudio) {
    el.studioAudio.loop = false;
    const audioSrc = getTrackAudioSrc(track, state.currentSession);
    const currentSrc = el.studioAudio.getAttribute('src');
    if (!currentSrc || currentSrc !== audioSrc) {
      el.studioAudio.src = audioSrc;
      el.studioAudio.load();
    }
    el.studioAudio.muted = false;
    el.studioAudio.volume = state.volume / 100;

    const playPromise = el.studioAudio.play();
    if (playPromise !== undefined) {
      playPromise.catch((err) => console.warn('Native playback error:', err));
    }
  }

  if (el.unmuteNotice) el.unmuteNotice.classList.add('hidden');
  updateMuteIcons();
  updatePlayState(true);

  if (track) updateMediaSession(track);
}

function pausePlayback() {
  state.userPaused = true;
  if (state.ytReady && state.ytPlayer && typeof state.ytPlayer.pauseVideo === 'function') {
    try {
      state.ytPlayer.pauseVideo();
    } catch (e) {}
  }
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
// 8. ARTWORK SWITCHER (Easel Showcase)
// ==========================================================================
function switchArtwork(key) {
  const art = ARTWORKS[key];
  if (!art || !el.easelImage) return;

  state.currentArtworkKey = key;
  el.easelImage.src = art.src;
  el.easelImage.alt = art.alt;
  if (el.easelCaptionTitle) el.easelCaptionTitle.textContent = art.title;
  if (el.easelCaptionMedium) el.easelCaptionMedium.textContent = art.medium;

  if (el.btnArtBeach) el.btnArtBeach.classList.toggle('active', key === 'beach');
  if (el.btnArtMountain) el.btnArtMountain.classList.toggle('active', key === 'mountain');

  const currentTrack = state.currentPlayingTrack || state.playlist[state.currentTrackIndex];
  if (currentTrack) updateMediaSession(currentTrack);
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
// 10. SESSIONS SELECTOR BAR & SOUNDTRACK TABLE
// ==========================================================================
function renderSessionChips() {
  if (!el.sessionChipsContainer) return;
  el.sessionChipsContainer.innerHTML = '';

  const activeId = state.currentSession ? state.currentSession.id : '';

  SESSIONS.forEach(session => {
    const chip = document.createElement('button');
    chip.type = 'button';
    chip.className = 'session-chip' + (session.id === activeId ? ' active' : '');
    chip.dataset.id = session.id;

    chip.innerHTML = `
      <span class="chip-dot" aria-hidden="true"></span>
      <span>${session.labelHi} • ${session.labelEn}</span>
    `;

    chip.addEventListener('click', () => {
      state.isLiveTime = false;
      state.activeSessionId = session.id;
      setSession(session, true);
    });

    el.sessionChipsContainer.appendChild(chip);
  });
}

function renderSoundtrackTable() {
  if (!el.soundtrackTableBody) return;
  el.soundtrackTableBody.innerHTML = '';

  const tracks = state.playlist;
  const currentPlayingId = state.currentPlayingTrack ? (state.currentPlayingTrack.videoId || state.currentPlayingTrack.title) : null;

  tracks.forEach((track, index) => {
    const tr = document.createElement('tr');
    tr.dataset.index = index;
    const isCurrent = currentPlayingId === (track.videoId || track.title);
    if (isCurrent) tr.classList.add('active-row');

    tr.innerHTML = `
      <td class="col-num track-index-num">${index + 1}</td>
      <td class="col-title table-track-title">
        <div class="title-with-wave">
          <span class="table-title-text">${track.title}</span>
          ${isCurrent && state.isPlaying ? '<span class="active-sound-wave" aria-hidden="true"><span></span><span></span><span></span></span>' : ''}
        </div>
        <span class="table-mobile-artist">${track.artist}</span>
      </td>
      <td class="col-artist table-track-artist">${track.artist}</td>
      <td class="col-time table-track-time">${track.duration || '4:00'}</td>
    `;

    tr.addEventListener('click', () => {
      state.currentTrackIndex = index;
      state.currentPlayingTrack = track;
      state.userPaused = false;
      loadTrack(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    el.soundtrackTableBody.appendChild(tr);
  });
}

function updateSoundtrackTableActiveRow() {
  if (!el.soundtrackTableBody) return;
  const rows = el.soundtrackTableBody.querySelectorAll('tr');
  const currentPlayingId = state.currentPlayingTrack ? (state.currentPlayingTrack.videoId || state.currentPlayingTrack.title) : null;

  rows.forEach((tr, index) => {
    const track = state.playlist[index];
    if (!track) return;

    const isCurrent = currentPlayingId === (track.videoId || track.title);
    tr.classList.toggle('active-row', isCurrent);

    const titleEl = tr.querySelector('.table-track-title');

    if (titleEl) {
      titleEl.innerHTML = `
        <div class="title-with-wave">
          <span class="table-title-text">${track.title}</span>
          ${isCurrent && state.isPlaying ? '<span class="active-sound-wave" aria-hidden="true"><span></span><span></span><span></span></span>' : ''}
        </div>
        <span class="table-mobile-artist">${track.artist}</span>
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

  // Artwork Switchers
  el.btnArtBeach?.addEventListener('click', () => switchArtwork('beach'));
  el.btnArtMountain?.addEventListener('click', () => switchArtwork('mountain'));

  // Quotes Switcher
  el.nextQuoteBtn?.addEventListener('click', nextQuote);

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

  el.unmuteStartBtn?.addEventListener('click', startPlaybackWithSound);

  // Background & Lock Screen audio persistence & recovery
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      if (state.isPlaying && !state.userPaused && el.studioAudio && el.studioAudio.paused) {
        el.studioAudio.play().catch(() => {});
      }
    } else {
      if (state.isPlaying && !state.userPaused) {
        if (state.ytReady && state.ytPlayer && typeof state.ytPlayer.playVideo === 'function') {
          try { state.ytPlayer.playVideo(); } catch (e) {}
        }
        if (el.studioAudio && el.studioAudio.paused) {
          el.studioAudio.play().catch(() => {});
        }
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
  initYouTube();
  setupDeckControls();
  setupAudioElementListeners();
  setupAudioSession();
  initMediaSessionHandlers();
  renderQuoteDots();
  renderQuote(0);

  // Initial Session (Synced to IST)
  const liveSession = findSessionForHour(getLiveKolkataHour());
  setSession(liveSession);

  // Live IST Clock Loop
  setInterval(() => {
    const str = formatClockString();
    if (el.liveIstClock) el.liveIstClock.textContent = str;

    if (state.isLiveTime) {
      const expSession = findSessionForHour(getLiveKolkataHour());
      if (!state.currentSession || state.currentSession.id !== expSession.id) {
        setSession(expSession);
      }
    }
  }, 1000);

  if (el.liveIstClock) el.liveIstClock.textContent = formatClockString();

  // Natural Listener Count fluctuation
  setInterval(() => {
    const delta = (Math.random() > 0.5 ? 1 : -1) * (Math.random() > 0.7 ? 3 : 1);
    state.artistsCount = Math.max(1820, Math.min(1910, state.artistsCount + delta));
    if (el.liveArtistsCount) el.liveArtistsCount.textContent = state.artistsCount.toLocaleString('en-IN');
  }, 8000);
}

window.addEventListener('DOMContentLoaded', init);
