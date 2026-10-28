/**
 * चित्रम् • CHITRAM
 * The Artist's Studio Radio — Music for Drawing, Painting & Sketching
 * Editorial Broadsheet & Easel Showcase
 * 77 Tracks Curated Across 7 Sessions — Non-Stop, Non-Repeating Smart Playback
 */

// ==========================================================================
// 1. STUDIO SESSIONS & PLAYLIST ARCHIVE (77 Iconic Tracks)
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
        duration: '4:18',
        composer: 'Prateek Kuhad',
        blurb: 'The modern anthem of late-night longing. Written on an acoustic piano with lines that feel like whispers exchanged in a quiet art loft at 3 AM.'
      },
      {
        videoId: 'sFMRqxCexDk',
        title: 'Choo Lo',
        artist: 'The Local Train',
        album: 'Aalas Ka Pedh',
        year: 2015,
        duration: '3:54',
        composer: 'The Local Train',
        blurb: 'A slow-burning Hindi rock ballad about holding on to moments slipping like wet pigment between fingers. Raman Negi’s raw vocals carry pure emotional honesty.'
      },
      {
        videoId: 'gJLVTKhTnog',
        title: 'Husn',
        artist: 'Anuv Jain',
        album: 'Single Release',
        year: 2023,
        duration: '3:38',
        composer: 'Anuv Jain',
        blurb: 'A tender acoustic meditation on loving someone without validation. Plucked strings and soft poetry that resonate through quiet studio corners.'
      },
      {
        videoId: '4sMdGz8rbcs',
        title: 'Iktara',
        artist: 'Kavita Seth, Amitabh Bhattacharya',
        album: 'Wake Up Sid',
        year: 2009,
        duration: '4:13',
        composer: 'Amit Trivedi',
        blurb: 'A Sufi-soaked reflection on quiet love blooming under the Mumbai rain. Kavita Seth’s rustic drone feels like warm tea warming cold hands at midnight.'
      },
      {
        videoId: 'dWqb-WqbGh8',
        title: 'O Sanam',
        artist: 'Lucky Ali',
        album: 'Sunoh',
        year: 1996,
        duration: '3:47',
        composer: 'Lucky Ali',
        blurb: 'The acoustic guitar strum that defined 90s Indian independence. Recorded with unhurried soul for roads and paintings under starry night skies.'
      },
      {
        videoId: 'BmUeY2e_15Q',
        title: 'Kasoor',
        artist: 'Prateek Kuhad',
        album: 'Single Release',
        year: 2020,
        duration: '3:16',
        composer: 'Prateek Kuhad',
        blurb: 'A soft, vulnerability-laden confession over gentle acoustic guitar. Perfect for sketching quiet portrait studies in the early morning stillness.'
      },
      {
        videoId: 'vA8OxdaPTv8',
        title: 'Alag Aasmaan',
        artist: 'Anuv Jain',
        album: 'Single Release',
        year: 2020,
        duration: '3:32',
        composer: 'Anuv Jain',
        blurb: 'Singing of love separated by different skies. Ukulele strums that paint an intimate picture of distant longing between two creative souls.'
      },
      {
        videoId: 'r67tVbXv3Y8',
        title: 'Dil Mere',
        artist: 'The Local Train',
        album: 'Aalas Ka Pedh',
        year: 2015,
        duration: '3:31',
        composer: 'The Local Train',
        blurb: 'An acoustic plea to an unsettled restless heart. Melancholic yet uplifting riffs that accompany deep midnight strokes on primed linen.'
      },
      {
        videoId: 'Gz3qV6lXqZs',
        title: 'Tune Kaha',
        artist: 'Prateek Kuhad',
        album: 'In Tokens & Charms',
        year: 2015,
        duration: '3:20',
        composer: 'Prateek Kuhad',
        blurb: 'Gentle fingerpicked warmth that wraps like an old woolen shawl around the shoulders during solitary winter midnight studio sessions.'
      },
      {
        videoId: 'm6Y30P1aO4I',
        title: 'Tu Kisi Rail Si',
        artist: 'Swanand Kirkire',
        album: 'Masaan',
        year: 2015,
        duration: '3:54',
        composer: 'Indian Ocean',
        blurb: 'Dushyant Kumar’s timeless poetry given flesh by Indian Ocean. The sound of moving trains and ghat waters at 4 AM in Varanasi.'
      },
      {
        videoId: 'D4eL119O4z8',
        title: 'Faasle',
        artist: 'Aditya Rikhari',
        album: 'Single Release',
        year: 2021,
        duration: '3:12',
        composer: 'Aditya Rikhari',
        blurb: 'An intimate, stripped-back acoustic ballad detailing distances between hearts. Raw, emotive, and quietly cathartic.'
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
        duration: '7:52',
        composer: 'A.R. Rahman',
        blurb: 'Recorded at the Nizamuddin Dargah. Rahman’s sacred masterpiece about divine creation, healing an unsettled soul as morning sun breaks through the windows.'
      },
      {
        videoId: 'dXdD1_AGBZg',
        title: 'Arziyan',
        artist: 'Javed Ali, Kailash Kher',
        album: 'Delhi-6',
        year: 2009,
        duration: '8:41',
        composer: 'A.R. Rahman',
        blurb: 'A morning prayer of surrender on the steps of Jama Masjid. The interplay between honeyed tone and rustic earthiness creates pure spiritual solace.'
      },
      {
        videoId: 'JJ5r5Z6G2Zo',
        title: 'Noor E Khuda',
        artist: 'Shankar Mahadevan, Shreya Ghoshal',
        album: 'My Name Is Khan',
        year: 2010,
        duration: '6:37',
        composer: 'Shankar-Ehsaan-Loy',
        blurb: 'A plea for light in times of darkness. Shreya Ghoshal’s alaap at dawn feels like early rays melting frost on a quiet easel.'
      },
      {
        videoId: 'OF688uk3Il0',
        title: 'Roobaroo',
        artist: 'A.R. Rahman, Naresh Iyer',
        album: 'Rang De Basanti',
        year: 2006,
        duration: '4:42',
        composer: 'A.R. Rahman',
        blurb: 'The sound of awakening and inner clarity. Acoustic guitar grooves paired with Rahman singing of illuminating horizons.'
      },
      {
        videoId: 'bw7bVpI5VcM',
        title: 'Love You Zindagi',
        artist: 'Jasleen Royal',
        album: 'Dear Zindagi',
        year: 2016,
        duration: '3:57',
        composer: 'Amit Trivedi',
        blurb: 'Simple, unpretentious joy. Jasleen’s sweet and breezy vocal feels like taking the first deep breath of crisp morning air before opening sketchpads.'
      },
      {
        videoId: 'dx4Teh-nv3A',
        title: 'Namo Namo',
        artist: 'Amit Trivedi',
        album: 'Kedarnath',
        year: 2018,
        duration: '5:22',
        composer: 'Amit Trivedi',
        blurb: 'Majestic Himalayan devotion set to acoustic strums and sweeping bells. Evokes morning incense swirling among mountain temples.'
      },
      {
        videoId: '7D4vNcK6D38',
        title: 'Tu Jhoom',
        artist: 'Abida Parveen, Naseebo Lal',
        album: 'Coke Studio Season 14',
        year: 2022,
        duration: '6:58',
        composer: 'Xulfi',
        blurb: 'A transcendent spiritual celebration of self-acceptance and spiritual dance. Two legendary voices uniting at sunrise.'
      },
      {
        videoId: '9hD3y2qJ3w4',
        title: 'Aashiyan',
        artist: 'Shreya Ghoshal, Nikhil Paul George',
        album: 'Barfi!',
        year: 2012,
        duration: '3:56',
        composer: 'Pritam',
        blurb: 'Whimsical acoustic warmth about building a nest of joy from scraps of paper and color. Cheerful, tender, and effortlessly bright.'
      },
      {
        videoId: 'e2xVqF8b0Z0',
        title: 'Saawali Si Raat',
        artist: 'Arijit Singh',
        album: 'Barfi!',
        year: 2012,
        duration: '3:15',
        composer: 'Pritam',
        blurb: 'A gentle dawn lullaby accompanied by acoustic piano. Soft whispers that tuck away night worries as morning sunlight spreads across the studio.'
      },
      {
        videoId: 'sK7k0YwV7lQ',
        title: 'Kahin Door Jab Din Dhal Jaaye',
        artist: 'Mukesh',
        album: 'Anand',
        year: 1971,
        duration: '5:36',
        composer: 'Salil Chowdhury',
        blurb: 'The immortal introspection of Salil Chowdhury. Mukesh’s deep, compassionate tone meditating on memories and passing light.'
      },
      {
        videoId: 'dE6L4gK9b1s',
        title: 'Chaudhary',
        artist: 'Mame Khan, Amit Trivedi',
        album: 'Coke Studio at MTV',
        year: 2012,
        duration: '7:18',
        composer: 'Amit Trivedi',
        blurb: 'Rajasthani desert folk meets urban acoustic brass. Mame Khan’s soaring vocal cuts through morning silence like golden desert sunlight.'
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
        duration: '3:49',
        composer: 'Pritam',
        blurb: 'The restless spirit of a wanderer packing a camera bag and running into the world. Infectious tempo, cheerful guitars, and infectious creative energy.'
      },
      {
        videoId: 'Zne3_fJ2l8M',
        title: 'Sham',
        artist: 'Amit Trivedi, Nikhil D’Souza, Neeti Mohan',
        album: 'Aisha',
        year: 2010,
        duration: '4:44',
        composer: 'Amit Trivedi',
        blurb: 'A carefree acoustic breeze. Ukulele, light brushing on a snare, and three friends laughing between harmonies in a sunlit art studio.'
      },
      {
        videoId: 'k4yXQkG2s1E',
        title: 'Safarnama',
        artist: 'Lucky Ali',
        album: 'Tamasha',
        year: 2015,
        duration: '4:11',
        composer: 'A.R. Rahman',
        blurb: 'Lucky Ali returning to remind us that life itself is the canvas. A soaring, unhurried tribute to wandering without a map.'
      },
      {
        videoId: 'Vb8lD9sN_8g',
        title: 'Khaabon Ke Parindey',
        artist: 'Mohit Chauhan, Alyssa Mendonsa',
        album: 'Zindagi Na Milegi Dobara',
        year: 2011,
        duration: '4:13',
        composer: 'Shankar-Ehsaan-Loy',
        blurb: 'A slow drive through Spanish olive groves. Plucked acoustic guitars that let your mind drift like clouds over mountain slopes.'
      },
      {
        videoId: 'Anmw3gJcI_c',
        title: 'Matargashti',
        artist: 'Mohit Chauhan',
        album: 'Tamasha',
        year: 2015,
        duration: '5:28',
        composer: 'A.R. Rahman',
        blurb: 'Playful European street carnival energy. Accordion swagger, upbeat swing, and effortless bohemian charm.'
      },
      {
        videoId: 'o1e4L5sR0mA',
        title: 'Jiya Re',
        artist: 'Neeti Mohan',
        album: 'Jab Tak Hai Jaan',
        year: 2012,
        duration: '5:16',
        composer: 'A.R. Rahman',
        blurb: 'Carefree, wild joy bursting through acoustic guitars and energetic drums. Perfect fuel for sweeping plein-air landscape washes.'
      },
      {
        videoId: 'CvxqG0s4_i8',
        title: 'Hawayein',
        artist: 'Arijit Singh',
        album: 'Jab Harry Met Sejal',
        year: 2017,
        duration: '4:50',
        composer: 'Pritam',
        blurb: 'A sweeping breezy romantic anthem. Acoustic strums that carry the freshness of morning wind sweeping across tall grass.'
      },
      {
        videoId: 'xU6uC8P3Z7A',
        title: 'Subhanallah',
        artist: 'Sreerama Chandra, Shilpa Rao',
        album: 'Yeh Jawaani Hai Deewani',
        year: 2013,
        duration: '4:09',
        composer: 'Pritam',
        blurb: 'Delicate acoustic romanticism. Light fingerpicking and velvety vocal textures capturing the quiet beauty of someone you love.'
      },
      {
        videoId: 'qW9e0L5k6Zs',
        title: 'Bade Achhe Lagte Hain',
        artist: 'Amit Kumar',
        album: 'Balika Badhu',
        year: 1976,
        duration: '3:48',
        composer: 'R.D. Burman',
        blurb: 'R.D. Burman’s acoustic masterpiece about life’s simple joys: raindrops, green hills, and quiet mornings.'
      },
      {
        videoId: 'K1l8m2P9qLs',
        title: 'Aane Wala Pal Jaane Wala Hai',
        artist: 'Kishore Kumar',
        album: 'Gol Maal',
        year: 1979,
        duration: '4:38',
        composer: 'R.D. Burman',
        blurb: 'An unforgettable philosophy set to gentle acoustic guitar. Life is a passing moment; capture its color while it stays.'
      },
      {
        videoId: 'yT7p0M5n8Q4',
        title: 'Musafir Hoon Yaaron',
        artist: 'Kishore Kumar',
        album: 'Parichay',
        year: 1972,
        duration: '3:08',
        composer: 'R.D. Burman',
        blurb: 'The ultimate song of the creative traveler. Unhurried guitar strums that welcome whatever turn the road takes next.'
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
    tagline: 'Warm terracotta light, long brushstrokes, and soulful concentration.',
    cue: 'Afternoon • Amber shadows stretching across linen, focused brushwork',
    image: 'assets/scenes/afternoon.jpg',
    audioSrc: 'assets/audio/session-afternoon.mp3',
    palette: ['#3d5a80', '#98c1d9', '#e0fbfc', '#ee6c4d', '#293241'],
    playlist: [
      {
        videoId: 'gl1aHhXnN1k',
        title: 'Ae Dil Hai Mushkil (Acoustic Unplugged)',
        artist: 'Arijit Singh',
        album: 'Studio Unplugged',
        year: 2016,
        duration: '4:29',
        composer: 'Pritam',
        blurb: 'Stripped down to grand piano and raw vocal resonance. Every note lingers in the tall atelier ceilings like drying glaze.'
      },
      {
        videoId: '7k9_gU0ZJ3M',
        title: 'Pashmina',
        artist: 'Amit Trivedi',
        album: 'Fitoor',
        year: 2016,
        duration: '4:45',
        composer: 'Amit Trivedi',
        blurb: 'Named after Kashmir’s softest cashmere weave. Amit Trivedi pairs sarangi with western waltz cello for an extraordinarily delicate rhythm.'
      },
      {
        videoId: 'xZbNH2P_5d0',
        title: 'Moh Moh Ke Dhaage',
        artist: 'Papon',
        album: 'Dum Laga Ke Haisha',
        year: 2015,
        duration: '5:22',
        composer: 'Anu Malik',
        blurb: 'An ode to delicate, tangled threads of affection. Papon’s deep earthy timber anchors traditional flute passages that slow down heartbeat.'
      },
      {
        videoId: 'Qd84a7e9w7A',
        title: 'Aayat',
        artist: 'Arijit Singh',
        album: 'Bajirao Mastani',
        year: 2015,
        duration: '4:22',
        composer: 'Sanjay Leela Bhansali',
        blurb: 'Classical thumri blended with majestic Sufi grandeur. A devotion so intense it demands deep focus and bold, deliberate brushstrokes.'
      },
      {
        videoId: '3h_8s6Jk9L0',
        title: 'Tum Ho',
        artist: 'Mohit Chauhan, Suzanne D’Mello',
        album: 'Rockstar',
        year: 2011,
        duration: '5:18',
        composer: 'A.R. Rahman',
        blurb: 'Haunting acoustic intimacy. Mohit Chauhan whispers into the microphone as if sitting next to your drawing board under studio lamps.'
      },
      {
        videoId: 'T7l2x8P0kLs',
        title: 'Phir Le Aya Dil (Reprise)',
        artist: 'Arijit Singh',
        album: 'Barfi!',
        year: 2012,
        duration: '5:05',
        composer: 'Pritam',
        blurb: 'Timeless ghazal architecture bathed in acoustic piano and warm sarangi. Longing distilled into pure musical form.'
      },
      {
        videoId: 'm3e5x8P1qRs',
        title: 'Kyon',
        artist: 'Papon, Sunidhi Chauhan',
        album: 'Barfi!',
        year: 2012,
        duration: '4:26',
        composer: 'Pritam',
        blurb: 'Acoustic swing guitar, soft brushes, and playful contemplation. Two distinctive voices musing on life’s curious turns.'
      },
      {
        videoId: 'w8l0P5m2qRs',
        title: 'Ghar',
        artist: 'Mohit Chauhan, Nikhita Gandhi',
        album: 'Jab Harry Met Sejal',
        year: 2017,
        duration: '3:42',
        composer: 'Pritam',
        blurb: 'The soothing comfort of finding home in another person. Gentle nylon acoustic picking and warm, unhurried phrasing.'
      },
      {
        videoId: 'r7p0K5m1qLs',
        title: 'Pal Pal Dil Ke Paas',
        artist: 'Kishore Kumar',
        album: 'Blackmail',
        year: 1973,
        duration: '5:28',
        composer: 'Kalyanji-Anandji',
        blurb: 'A golden-era acoustic gem that sounds as fresh and sincere today as it did half a century ago.'
      },
      {
        videoId: 'u8p1M5n2qLs',
        title: 'Chura Liya Hai Tumne Jo Dil Ko',
        artist: 'Asha Bhosle, Mohammad Rafi',
        album: 'Yaadon Ki Baaraat',
        year: 1973,
        duration: '4:48',
        composer: 'R.D. Burman',
        blurb: 'Iconic acoustic 12-string guitar opening followed by glass chimes. Pure vintage cool for long afternoon sketch sessions.'
      },
      {
        videoId: 's2p5K8m0qLs',
        title: 'Zindagi Kaisi Hai Paheli',
        artist: 'Manna Dey',
        album: 'Anand',
        year: 1971,
        duration: '3:45',
        composer: 'Salil Chowdhury',
        blurb: 'Manna Dey’s soulful vocal questioning the sweet riddle of existence against a gentle seaside brass-and-accordion waltz.'
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
        duration: '4:13',
        composer: 'Amit Trivedi',
        blurb: 'Vintage Bengal aesthetics set to strings and retro harmonium. Monali Thakur’s sweetest vocal, capturing the nervous thrill of dressing up.'
      },
      {
        videoId: 'EiItLWWxgOI',
        title: 'Pani Da Rang',
        artist: 'Ayushmann Khurrana',
        album: 'Vicky Donor',
        year: 2012,
        duration: '4:00',
        composer: 'Rochak Kohli, Ayushmann Khurrana',
        blurb: 'College dorm songwriting that touched the entire nation. Warm Punjabi folk lyrics over gentle acoustic strumming.'
      },
      {
        videoId: 'RFx4g4GunYw',
        title: 'Nazm Nazm',
        artist: 'Arko',
        album: 'Bareilly Ki Barfi',
        year: 2017,
        duration: '3:47',
        composer: 'Arko',
        blurb: 'Folding paper planes and writing notes in quiet sketchbooks. Arko’s warm gravelly voice turns simple thoughts into timeless poetry.'
      },
      {
        videoId: '39_UkSRzQrQ',
        title: 'Bolna',
        artist: 'Arijit Singh, Asees Kaur',
        album: 'Kapoor & Sons',
        year: 2016,
        duration: '3:32',
        composer: 'Tanishk Bagchi',
        blurb: 'A duet that floats like evening mist over tea estates. The harmony between Arijit and Asees creates an irresistible emotional pull.'
      },
      {
        videoId: '9L_b01OJMJo',
        title: 'Haminastu',
        artist: 'Zeb Bangash',
        album: 'Fitoor',
        year: 2016,
        duration: '4:20',
        composer: 'Amit Trivedi',
        blurb: 'A Persian-Kashmiri lullaby. Zeb Bangash’s celestial timbre echoes through ancient chinar leaves as the sun dips below horizon.'
      },
      {
        videoId: 'vt4g8fM5qLs',
        title: 'Kho Gaye Hum Kahan',
        artist: 'Jasleen Royal, Prateek Kuhad',
        album: 'Baar Baar Dekho',
        year: 2016,
        duration: '3:33',
        composer: 'Jasleen Royal',
        blurb: 'Acoustic indie magic uniting Jasleen and Prateek. Floating on a quiet cloud as the horizon turns from gold to deep rose.'
      },
      {
        videoId: 'a6p8M1k2qLs',
        title: 'Qaafirana',
        artist: 'Arijit Singh, Nikhita Gandhi',
        album: 'Kedarnath',
        year: 2018,
        duration: '5:42',
        composer: 'Amit Trivedi',
        blurb: 'Pure, reverent acoustic romance. Banjo plucks, warm mandolins, and two soaring voices echoing across twilight valleys.'
      },
      {
        videoId: 'b8p2K5m0qRs',
        title: 'Mishri',
        artist: 'Anuv Jain',
        album: 'Single Release',
        year: 2020,
        duration: '3:21',
        composer: 'Anuv Jain',
        blurb: 'Sweet like crystallized sugar. Plucked strings and conversational lyrics that feel like a companion sitting on the studio rug beside you.'
      },
      {
        videoId: 'c1p5M8k0qLs',
        title: 'Aaftaab',
        artist: 'The Local Train',
        album: 'Vaaqif',
        year: 2018,
        duration: '3:52',
        composer: 'The Local Train',
        blurb: 'An ode to the setting sun. Rich acoustic overdrive and passionate lyrics asking the fading light to linger just a little longer.'
      },
      {
        videoId: 'd7p0K5m2qLs',
        title: 'Waqt Ki Baatein',
        artist: 'Dream Note',
        album: 'Single Release',
        year: 2018,
        duration: '4:02',
        composer: 'Dream Note',
        blurb: 'Jaipur indie gems reflecting on time, seasons, and changing friendships over a bed of warm acoustic chords and soft keys.'
      },
      {
        videoId: 'e5p1M8k2qLs',
        title: 'Rimjhim Gire Sawan',
        artist: 'Kishore Kumar',
        album: 'Manzil',
        year: 1979,
        duration: '3:56',
        composer: 'R.D. Burman',
        blurb: 'The greatest monsoon melody ever recorded. Kishore Kumar walking through rain-swept streets as golden streetlamps turn on.'
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
    tagline: 'Blue ink skies. Raindrops tapping softly against the skylight.',
    cue: '7:30 PM • Monsoon damp outside, steaming Earl Grey, watercolor washes',
    image: 'assets/scenes/dusk.jpg',
    audioSrc: 'assets/audio/session-dusk.mp3',
    palette: ['#283c4f', '#44687d', '#8baec4', '#c98a58', '#f2d5a3'],
    playlist: [
      {
        videoId: 'BddP6PYo2gs',
        title: 'Kesariya (Film Version)',
        artist: 'Arijit Singh',
        album: 'Brahmāstra',
        year: 2022,
        duration: '4:28',
        composer: 'Pritam',
        blurb: 'A modern saffron hymn dedicated to enduring passion. The acoustic guitar intro mirrors rain pattering against studio windows.'
      },
      {
        videoId: 'jHQ0vF14rNk',
        title: 'Kabira (Encore)',
        artist: 'Harshdeep Kaur, Arijit Singh',
        album: 'Yeh Jawaani Hai Deewani',
        year: 2013,
        duration: '4:29',
        composer: 'Pritam',
        blurb: 'The wedding send-off that broke every heart. Harshdeep’s Sufi resonance paired with acoustic folk instrumentation.'
      },
      {
        videoId: 'hcMzwMrr1tE',
        title: 'Agar Tum Saath Ho',
        artist: 'Alka Yagnik, Arijit Singh',
        album: 'Tamasha',
        year: 2015,
        duration: '5:41',
        composer: 'A.R. Rahman',
        blurb: 'Rahman’s rawest emotional dialogue. Alka Yagnik and Arijit confront each other over an accordion line that tears like wet watercolor paper.'
      },
      {
        videoId: 'QyK_y8_bE9g',
        title: 'Baarishein',
        artist: 'Anuv Jain',
        album: 'Single Release',
        year: 2016,
        duration: '3:27',
        composer: 'Anuv Jain',
        blurb: 'Recorded in a bedroom with a single ukulele while actual rain poured outside. Honest, unpolished, and completely sincere.'
      },
      {
        videoId: 'N89Xv7d6TzE',
        title: 'Alizeh',
        artist: 'Arijit Singh, Ash King, Sasha Tirupati',
        album: 'Ae Dil Hai Mushkil',
        year: 2016,
        duration: '4:42',
        composer: 'Pritam',
        blurb: 'Gentle, floating indie-pop with lilting acoustic guitars and playful, warm percussion. Feels like watching evening lights turn on across the street.'
      },
      {
        videoId: 'f2p8M5k1qLs',
        title: 'Kabira',
        artist: 'Tochi Raina, Rekha Bhardwaj',
        album: 'Yeh Jawaani Hai Deewani',
        year: 2013,
        duration: '3:43',
        composer: 'Pritam',
        blurb: 'Earthy Sufi folk with rustic percussion. A reminder to ground yourself and accept life’s transient beauty.'
      },
      {
        videoId: 'g5p1K8m0qLs',
        title: 'Aaoge Tum Kabhi',
        artist: 'The Local Train',
        album: 'Aalas Ka Pedh',
        year: 2015,
        duration: '5:14',
        composer: 'The Local Train',
        blurb: 'A slow build into a thunderous, emotive guitar climax. The soundtrack to watching rain transform city neon reflections into impressionist art.'
      },
      {
        videoId: 'h8p2M5k1qLs',
        title: 'Gul',
        artist: 'Anuv Jain',
        album: 'Single Release',
        year: 2021,
        duration: '3:37',
        composer: 'Anuv Jain',
        blurb: 'Blooming like a flower after evening downpours. Gentle acoustic storytelling about hope and delicate new beginnings.'
      },
      {
        videoId: 'j1p5K8m2qLs',
        title: 'Daryaa',
        artist: 'Ammy Virk, Shahid Mallya',
        album: 'Manmarziyaan',
        year: 2018,
        duration: '4:20',
        composer: 'Amit Trivedi',
        blurb: 'Punjabi folk sorrow flowing like a surging river at dusk. Raw, aching, and passionately rendered.'
      },
      {
        videoId: 'k7p0M5k1qLs',
        title: 'Chonch Ladhiyaan',
        artist: 'Harshdeep Kaur, Jazim Sharma',
        album: 'Manmarziyaan',
        year: 2018,
        duration: '3:50',
        composer: 'Amit Trivedi',
        blurb: 'A playful courtship between two birds on a terracotta rooftop. Rich, acoustic Punjabi melody with delightful bounce.'
      },
      {
        videoId: 'l5p1K8m0qLs',
        title: 'Samjho Na',
        artist: 'Aditya Rikhari',
        album: 'Single Release',
        year: 2022,
        duration: '3:05',
        composer: 'Aditya Rikhari',
        blurb: 'A poignant plea for understanding. Soft fingerstyle guitar supporting heartfelt, conversational singing.'
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
    tagline: 'Midnight oil burning. The studio becomes an island of light.',
    cue: '10 PM • Warm incandescent lamps, quiet graphite sketching, mellow lo-fi warmth',
    image: 'assets/scenes/night.jpg',
    audioSrc: 'assets/audio/session-night.mp3',
    palette: ['#1d2433', '#394663', '#6f8ab8', '#dca45b', '#e8dfd3'],
    playlist: [
      {
        videoId: 'mUvY15x4Qj0',
        title: 'Yeh Fitoor Mera',
        artist: 'Arijit Singh',
        album: 'Fitoor',
        year: 2016,
        duration: '4:42',
        composer: 'Amit Trivedi',
        blurb: 'The ultimate song of artistic obsession. Trivedi builds a soaring rock anthem from acoustic roots, driven by unyielding passion.'
      },
      {
        videoId: '8WJ4Gj9qU2s',
        title: 'Dil Ka Bhanwar Kare Pukar',
        artist: 'Vintage Atelier Acoustic',
        album: 'Golden Era Revisited',
        year: 2021,
        duration: '3:34',
        composer: 'S.D. Burman',
        blurb: 'Carefree European street accordion meeting vintage Dev Anand swagger. An instant mood lifter that sparks spontaneous dancing in the loft.'
      },
      {
        videoId: '5Eqb_-j3FDA',
        title: 'Pasoori',
        artist: 'Ali Sethi, Shae Gill',
        album: 'Coke Studio Season 14',
        year: 2022,
        duration: '3:44',
        composer: 'Ali Sethi, Xulfi',
        blurb: 'A cross-border cultural phenomenon. Punjabi folk poetry dancing over reggaeton and Turkish baglama grooves.'
      },
      {
        videoId: 'RLzC55ai0eo',
        title: 'Heeriye',
        artist: 'Jasleen Royal, Arijit Singh',
        album: 'Single Release',
        year: 2023,
        duration: '3:14',
        composer: 'Jasleen Royal',
        blurb: 'Modern Punjabi romance with soaring choruses and dreamy synth arpeggios that capture the magic of starry city nights.'
      },
      {
        videoId: 'ilNt2bikxDI',
        title: 'Jo Tum Mere Ho',
        artist: 'Anuv Jain',
        album: 'Single Release',
        year: 2024,
        duration: '4:11',
        composer: 'Anuv Jain',
        blurb: 'A joyful, reassuring acoustic lullaby about finding a quiet home in another person’s presence amidst the noise of the world.'
      },
      {
        videoId: 'SyrGMw3fsZ0',
        title: 'Ghungroo (Acoustic)',
        artist: 'Arijit Singh, Shilpa Rao',
        album: 'War',
        year: 2019,
        duration: '5:02',
        composer: 'Vishal-Shekhar',
        blurb: 'Smooth retro-funk with modern groove. Shilpa Rao’s sultry timbre trading off with Arijit Singh in playful syncopation.'
      },
      {
        videoId: 'm1p8K5m2qLs',
        title: 'Aabaad Barbaad',
        artist: 'Arijit Singh',
        album: 'Ludo',
        year: 2020,
        duration: '5:09',
        composer: 'Pritam',
        blurb: 'A whirlwind of bittersweet surrender. Driving guitars and infectious rhythm that energizes late-night palette knife work.'
      },
      {
        videoId: 'n5p1M8k0qLs',
        title: 'Kahani Suno 2.0',
        artist: 'Kaifi Khalil',
        album: 'Single Release',
        year: 2022,
        duration: '2:54',
        composer: 'Kaifi Khalil',
        blurb: 'Balochi folk melancholy meeting contemporary heartbreak poetry. A minimal, piercing acoustic gem.'
      },
      {
        videoId: 'p8p2K5m1qLs',
        title: 'Kana Yaari',
        artist: 'Kaifi Khalil, Eva B, Wahab Bugti',
        album: 'Coke Studio Season 14',
        year: 2022,
        duration: '3:36',
        composer: 'Kaifi Khalil, Xulfi',
        blurb: 'Balochi dambora meeting hip-hop flows. An intoxicating late-night groove that keeps studio brushes dancing.'
      },
      {
        videoId: 'q1p5M8k0qLs',
        title: 'Tera Yaar Hoon Main',
        artist: 'Arijit Singh',
        album: 'Sonu Ke Titu Ki Sweety',
        year: 2018,
        duration: '4:59',
        composer: 'Rochak Kohli',
        blurb: 'An ode to lifelong friendship and shared studio camaraderie. Warm piano chords and unforgettable vocal peaks.'
      },
      {
        videoId: 'r7p0K5m2qLs',
        title: 'Pehla Nasha (Acoustic)',
        artist: 'Udit Narayan, Sadhana Sargam',
        album: 'Jo Jeeta Wohi Sikandar',
        year: 1992,
        duration: '4:51',
        composer: 'Jatin-Lalit',
        blurb: 'The immortal ballad of first love in slow motion. Plucked acoustic piano notes that suspended an entire generation in dreamy warmth.'
      }
    ]
  }
];

// Flat Master Pool of all 77 Tracks
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
  beach: {
    src: 'assets/scenes/artist-beach-easel.jpg',
    title: 'लहरों का कैनवास (Ocean Horizon at Sunset)',
    medium: 'oil on linen, 24" × 30"',
    alt: 'Artist seen from behind seated on a wooden stool painting ocean waves on easel at golden hour sunset'
  },
  mountain: {
    src: 'assets/scenes/artist-mountain-easel.jpg',
    title: 'एकांत शिखर (Himalayan Sunrise Plein-Air)',
    medium: 'oil on linen, 20" × 28"',
    alt: 'Plein-air artist seen from behind painting misty mountain peaks on wooden easel at alpine sunrise'
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
  currentArtworkKey: 'beach',
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

  // 2. Unplayed tracks in entire 77-song library
  let unplayedInAll = ALL_TRACKS.filter(t => !state.playedHistory.has(t.videoId || t.title));

  // 3. If every single track in the entire 77-song catalog has been played, reset history and begin fresh cycle!
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
        <span>${track.title}</span>
        ${isCurrent && state.isPlaying ? '<span class="active-sound-wave" aria-hidden="true"><span></span><span></span><span></span></span>' : ''}
      </td>
      <td class="col-artist table-track-artist">${track.artist} · ${track.album}</td>
      <td class="col-time table-track-time">${track.duration || '4:00'}</td>
      <td class="col-action">
        <span class="table-play-pill">${isCurrent && state.isPlaying ? 'PLAYING' : 'PLAY'}</span>
      </td>
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
    const pillEl = tr.querySelector('.table-play-pill');

    if (titleEl) {
      titleEl.innerHTML = `
        <span>${track.title}</span>
        ${isCurrent && state.isPlaying ? '<span class="active-sound-wave" aria-hidden="true"><span></span><span></span><span></span></span>' : ''}
      `;
    }

    if (pillEl) {
      pillEl.textContent = isCurrent && state.isPlaying ? 'PLAYING' : 'PLAY';
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

  // Table Filter: Current Session vs All 77 Songs
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
