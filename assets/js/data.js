/*
  Across the Pool — content data
  Edit this file to add new story developments, episodes, gallery items, etc.
  No page templates need to change when the story moves forward.
*/

const IMG = (id, w = 1600, q = 75) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=${q}`;

/*
  Verified stock photography (Unsplash), chosen so that no person is in
  focus and no landmark identifies a specific country. Swap any of these
  IDs for a real asset URL later — nothing else needs to change.
*/
const PHOTO = {
  sunsetSea: "1414609245224-afa02bfb3fda",       // sun low over the sea, gentle waves, empty beach
  beachWaves: "1473116763249-2faaef81ccda",       // waves rolling onto an empty beach at sunset
  aerialLagoon: "1483683804023-6ccdb62f86ef",     // aerial view of a turquoise lagoon with small green islands
  aerialCove: "1506929562872-bb421503ef21",       // aerial view of a sandy cove with clear turquoise water
  sunHorizon: "1507525428034-b723cf961d3e",       // sun setting over calm sea waves on an empty beach
  palmsBeach: "1509233725247-49e657c54213",       // palm trees framing a beach and sea view
  beachCatamaran: "1519046904884-53103b34b206",   // beach with a thatched umbrella and small catamaran
  resortPool: "1520250497591-112f2f40a3f4",       // resort swimming pool with palm-thatched cabanas
  lonePalm: "1520454974749-611b7248ffdb",         // a single palm tree leaning over a quiet beach
  poolDusk: "1544984243-ec57ea16fe25",            // swimming pool beside a modern building at dusk
  beachUmbrellas: "1546484475-7f7bd55792da",      // beach umbrellas silhouetted at sunset
  poolCabanaDusk: "1571003123894-1f0594d2b5d9"    // poolside cabanas beside an infinity pool at dusk
};

const SITE_DATA = {

  meta: {
    title: "Across the Pool",
    tagline: "One holiday. One crush. Ten days to find out if the feeling is mutual.",
    synopsis: "An 18-year-old on holiday in Menorca develops a crush on a mysterious Irish surfer, but does he feel the same?",
    genres: ["LGBTQ+ Romance", "Comedy", "Coming-of-Age", "Drama"],
    rating: "15",
    daysElapsed: 6,
    daysTotal: 10,
    daysLeft: 3
  },

  // "Sam's Brain" recurring gag lines — used in hover states, loaders, 404, etc.
  brainLines: [
    { reality: "Surfer looks at Sam.", brain: "Okay. Interesting." },
    { reality: "Surfer looks away.", brain: "HE HATES ME." },
    { reality: "Surfer smiles.", brain: "WE ARE GETTING MARRIED IN IRELAND." },
    { reality: "Surfer's dad says something in a thick Irish accent.", brain: "This is basically a wedding toast." },
    { reality: "Sunbeds are two rows apart.", brain: "This is fate. This is definitely fate. (It is not fate.)" }
  ],

  // Sam's three theories — used as teaser cards on Home and as a poll-style element
  theories: [
    {
      id: "likes-me",
      title: "He likes me",
      description: "The eye contact, the almost-smiles, the nod. It all means something. Probably. Maybe."
    },
    {
      id: "straighter",
      title: "He's straighter than anyone you've ever seen",
      description: "Sam is reading a normal amount of holiday eye contact as a full romantic subplot."
    },
    {
      id: "hates-brits",
      title: "As an Irish, he absolutely hates the Brits and hates my guts",
      description: "Historically informed. Emotionally devastating. Almost certainly not what's happening."
    }
  ],

  // Confirmed / Plausible / Unconfirmed tracker
  tracker: {
    confirmed: [
      "Sam and Surfer have noticed each other.",
      "Repeated eye contact has happened across several days.",
      "Sam nodded once in the lobby. Surfer was there for it."
    ],
    plausible: [
      "Mutual curiosity.",
      "Some level of mutual attraction.",
      "Surfer may have smiled at Sam on purpose."
    ],
    unconfirmed: [
      "Whether Surfer is romantically or sexually interested in Sam.",
      "Surfer's sexuality.",
      "Surfer's real name.",
      "Surfer's nationality (Irish is likely, based on his dad's accent, but unconfirmed).",
      "Whether either of them will actually say hello."
    ]
  },

  characters: {
    sam: {
      name: "Sam",
      age: 18,
      tagline: "Calm on the outside. Absolute chaos on the inside.",
      facts: [
        "18 years old, on a ten-day family holiday in Menorca.",
        "Christian.",
        "A self-aware overthinker who can build an entire emotional timeline out of one glance.",
        "Outwardly relaxed at the pool. Internally reviewing footage of a 0.4-second look for the ninth time."
      ],
      image: IMG(PHOTO.beachUmbrellas),
      imageAlt: "Beach umbrellas silhouetted against a warm sunset sky, no people visible"
    },
    surfer: {
      name: "Surfer",
      nickname: "Sam's private nickname for a boy he hasn't spoken to",
      tagline: "Real name: unknown. Everything else: heavily theorised.",
      whatWeKnow: [
        "Blonde, long surfer-style hair.",
        "Blue eyes.",
        "Tall, athletic build.",
        "Around Sam's age.",
        "Travelling with his family, including younger siblings.",
        "His dad has a thick Irish accent."
      ],
      whatSamThinks: [
        "That the eye contact means something.",
        "That the almost-smiles are aimed at him specifically.",
        "That he is, in fact, Irish (highly likely, not confirmed).",
        "That there might be one good reason to say hello before the holiday ends."
      ],
      whatWeDontKnow: [
        "His real name.",
        "His sexuality.",
        "Whether he's interested in Sam at all.",
        "His nationality, for certain.",
        "What he's actually thinking during any of this."
      ],
      image: IMG(PHOTO.lonePalm),
      imageAlt: "A single palm tree leaning over a quiet beach, no people visible"
    },
    supporting: [
      {
        name: "Surfer's Dad",
        description: "Friendly, loud, thickly Irish accent, unreasonably good at ping pong. No idea he's part of a five-day surveillance operation.",
        image: IMG(PHOTO.resortPool),
        imageAlt: "Resort swimming pool with palm-thatched cabanas, no people visible"
      },
      {
        name: "Surfer's Younger Siblings",
        description: "Small, loud, extremely committed to the inflatable. Unknowingly the reason Sam first noticed Surfer at all.",
        image: IMG(PHOTO.beachCatamaran),
        imageAlt: "Beach with a thatched umbrella and a small catamaran on the sand, no people visible"
      },
      {
        name: "Sam's Family",
        description: "On the same holiday, mostly unaware that Sam has developed a full character arc about a boy he has never spoken to.",
        image: IMG(PHOTO.palmsBeach),
        imageAlt: "Palm trees framing a view of the beach and sea, no people visible"
      }
    ]
  },

  // Ten-day interactive timeline
  timeline: [
    {
      day: 1,
      status: "confirmed",
      title: "Arrival",
      teaser: "Flights, transfers, and the calm before any of this started.",
      samsTake: "A normal holiday. No idea what's coming.",
      actual: "Sam and family arrive at the resort in Menorca. Nothing to report. Yet.",
      image: IMG(PHOTO.sunHorizon),
      imageAlt: "Sun setting over calm sea waves on an empty beach"
    },
    {
      day: 2,
      status: "confirmed",
      title: "First Sighting",
      teaser: "A boy on an inflatable. A ping pong table. A very Irish accent.",
      samsTake: "Just clocked a guy at the pool. No big deal. (Huge deal.)",
      actual: "Sam first notices Surfer at the resort, playing on an inflatable with his younger siblings. Shortly after, a ping pong ball rolls over and Sam meets Surfer's dad — whose accent Sam immediately clocks as thickly Irish.",
      image: IMG(PHOTO.resortPool),
      imageAlt: "Resort swimming pool with palm-thatched cabanas, turquoise water"
    },
    {
      day: 3,
      status: "confirmed",
      title: "The Streak Begins",
      teaser: "Eyes meet. Eyes look away. Repeat, with feeling.",
      samsTake: "Okay. Interesting.",
      actual: "The first proper round of eye contact. Nothing dramatic happens. Everything feels dramatic.",
      image: IMG(PHOTO.sunsetSea),
      imageAlt: "Sun low over a calm sea with gentle waves"
    },
    {
      day: 4,
      status: "confirmed",
      title: "Half-Asleep",
      teaser: "Caught looking. Or caught being looked at. Unclear.",
      samsTake: "Did that just happen or did I dream it.",
      actual: "A hazy, half-asleep-on-a-sunbed moment where eye contact happens again, this time with slightly less plausible deniability.",
      image: IMG(PHOTO.aerialLagoon),
      imageAlt: "Aerial view of a turquoise lagoon with small green islands"
    },
    {
      day: 5,
      status: "confirmed",
      title: "The Double Look",
      teaser: "One look. A pause. Then a second one, mid-Snapchat.",
      samsTake: "He looked back. HE LOOKED BACK.",
      actual: "Surfer appears to glance over twice in quick succession, possibly while messaging someone on Snapchat. Sam does not, in any sense, remain calm about this.",
      image: IMG(PHOTO.poolCabanaDusk),
      imageAlt: "Poolside cabanas beside an infinity pool at dusk"
    },
    {
      day: 6,
      status: "confirmed",
      title: "The Top Incident",
      teaser: "Surfer takes his top off. Sam has a full religious experience.",
      samsTake: "Jesus Christ.",
      actual: "Surfer removes his top by the pool and, per Sam's account, stares the entire time while failing spectacularly to be subtle about it. Comedy, not confirmation.",
      image: IMG(PHOTO.beachCatamaran),
      imageAlt: "Beach with a thatched umbrella and a small catamaran on the sand"
    },
    {
      day: 6,
      status: "confirmed",
      title: "The Pool Incident",
      teaser: "Eye contact on entry. Eye contact mid-front-crawl. Sunbeds, two or three rows apart.",
      samsTake: "This has to mean something. (It might just be a pool.)",
      actual: "Eye contact as Sam enters the pool, and again during Sam's front crawl, while Surfer's siblings face the other way. Their sunbeds end up two or three rows apart — which Sam chalks up to coincidence, not pursuit.",
      image: IMG(PHOTO.aerialCove),
      imageAlt: "Aerial view of a sandy cove with clear turquoise water"
    },
    {
      day: 6,
      status: "confirmed",
      title: "The Lobby Nod",
      teaser: "10:30pm. The stairs. One nod. Immediately regretted.",
      samsTake: "Imagine if I see him. ... Oh my god I just saw him.",
      actual: "At around 10:30pm, Sam passes Surfer on the lobby stairs, gives a small nod, and forgets to look back afterwards. Filed under: things to think about for the rest of the night.",
      image: IMG(PHOTO.poolDusk),
      imageAlt: "Swimming pool beside a building at dusk, warm evening light"
    },
    {
      day: 7,
      status: "locked",
      title: "Still Unfolding",
      teaser: "This part of the story hasn't happened yet.",
      samsTake: null,
      actual: null,
      image: null,
      imageAlt: null
    },
    {
      day: 8,
      status: "locked",
      title: "Still Unfolding",
      teaser: "This part of the story hasn't happened yet.",
      samsTake: null,
      actual: null,
      image: null,
      imageAlt: null
    },
    {
      day: 9,
      status: "locked",
      title: "Still Unfolding",
      teaser: "This part of the story hasn't happened yet.",
      samsTake: null,
      actual: null,
      image: null,
      imageAlt: null
    },
    {
      day: 10,
      status: "locked",
      title: "Still Unfolding",
      teaser: "Three days left. One question. Zero confirmed answers.",
      samsTake: null,
      actual: null,
      image: null,
      imageAlt: null
    }
  ],

  // Possible (non-canon) future developments — for the "Story Updates" future-proofing section
  possibleFutureUpdates: [
    "They finally have a first conversation.",
    "Sam learns his actual name.",
    "Sam finds out more about who Surfer actually is.",
    "A social media exchange happens.",
    "A romantic moment.",
    "A kiss.",
    "A friendship, romantic or not.",
    "A bittersweet goodbye at the airport.",
    "Sam never finds out, and that's the ending."
  ],

  episodes: [
    {
      number: 1,
      title: "Arrivals",
      runtime: "22 min",
      description: "Sam touches down in Menorca for a ten-day family holiday, with absolutely no idea what day two is about to do to him.",
      status: "available",
      image: IMG(PHOTO.sunHorizon),
      imageAlt: "Sun setting over calm sea waves on an empty beach, arrival day"
    },
    {
      number: 2,
      title: "Ping Pong Diplomacy",
      runtime: "24 min",
      description: "A boy on an inflatable. A stray ping pong ball. A dad with a very thick Irish accent. Sam's holiday quietly changes shape.",
      status: "available",
      image: IMG(PHOTO.resortPool),
      imageAlt: "Resort swimming pool with palm-thatched cabanas"
    },
    {
      number: 3,
      title: "The Streak",
      runtime: "21 min",
      description: "Five days. Countless glances. Zero conversations. Sam builds an entire relationship out of eye contact alone.",
      status: "available",
      image: IMG(PHOTO.sunsetSea),
      imageAlt: "Sun low over a calm sea with gentle waves"
    },
    {
      number: 4,
      title: "Jesus Christ",
      runtime: "23 min",
      description: "The top comes off. Sam's composure does not survive. Neither, arguably, does his dignity.",
      status: "available",
      image: IMG(PHOTO.beachCatamaran),
      imageAlt: "Beach with a thatched umbrella and a small catamaran on the sand"
    },
    {
      number: 5,
      title: "Front Crawl",
      runtime: "25 min",
      description: "A pool, a swim, and sunbeds that are definitely just two rows apart by coincidence. Definitely.",
      status: "available",
      image: IMG(PHOTO.aerialCove),
      imageAlt: "Aerial view of a sandy cove with clear turquoise water"
    },
    {
      number: 6,
      title: "10:30pm",
      runtime: "20 min",
      description: "A staircase, a nod, and the single most overanalysed three seconds of Sam's entire life.",
      status: "available",
      image: IMG(PHOTO.poolDusk),
      imageAlt: "Swimming pool beside a building at dusk, warm evening light"
    },
    {
      number: 7,
      title: "Three Days Left",
      runtime: "TBC",
      description: "Coming soon.",
      status: "coming-soon",
      image: IMG(PHOTO.beachUmbrellas),
      imageAlt: "Beach umbrellas silhouetted against a sunset sky"
    },
    {
      number: 8,
      title: "Untitled",
      runtime: "TBC",
      description: "Coming soon.",
      status: "coming-soon",
      image: IMG(PHOTO.lonePalm),
      imageAlt: "A single palm tree leaning over a quiet beach"
    }
  ],

  gallery: [
    { image: IMG(PHOTO.poolDusk, 1400), alt: "Swimming pool beside a building at dusk", caption: "SAM'S BRAIN: normal pool. Definitely not a sign." },
    { image: IMG(PHOTO.lonePalm, 1400), alt: "A single palm tree leaning over a quiet beach", caption: "The kind of view that makes you overthink everything." },
    { image: IMG(PHOTO.resortPool, 1400), alt: "Resort swimming pool with palm-thatched cabanas", caption: "Scene of several unconfirmed romantic subplots." },
    { image: IMG(PHOTO.poolDusk, 1400), alt: "Swimming pool beside a building at dusk", caption: "6pm. Right before the chaos begins." },
    { image: IMG(PHOTO.aerialLagoon, 1400), alt: "Aerial view of a turquoise lagoon with small green islands", caption: "Two or three rows apart. Coincidentally." },
    { image: IMG(PHOTO.sunsetSea, 1400), alt: "Sun low over a calm sea with gentle waves", caption: "Menorca, doing its absolute best." },
    { image: IMG(PHOTO.aerialCove, 1400), alt: "Aerial view of a sandy cove with clear turquoise water", caption: "Somewhere out there, Surfer is probably also overthinking. Probably." },
    { image: IMG(PHOTO.poolCabanaDusk, 1400), alt: "Poolside cabanas beside an infinity pool at dusk", caption: "Ten out of ten. Would overanalyse a glance here again." },
    { image: IMG(PHOTO.beachUmbrellas, 1400), alt: "Beach umbrellas silhouetted against a sunset sky", caption: "Peak Benidorm-but-make-it-nice energy." },
    { image: IMG(PHOTO.poolCabanaDusk, 1400), alt: "Poolside cabanas beside an infinity pool at dusk", caption: "The lighting is doing a lot of emotional heavy lifting." },
    { image: IMG(PHOTO.beachWaves, 1400), alt: "Waves rolling gently onto an empty beach at sunset", caption: "The sea, unbothered by any of this." },
    { image: IMG(PHOTO.palmsBeach, 1400), alt: "Palm trees framing a view of the beach and sea", caption: "Evenings are somehow worse for Sam's brain than mornings." },
    { image: IMG(PHOTO.aerialCove, 1400), alt: "Aerial view of a sandy cove with turquoise water and small boats", caption: "The full battlefield, viewed from above." },
    { image: IMG(PHOTO.beachCatamaran, 1400), alt: "Beach with a thatched umbrella and a small catamaran", caption: "Menorca really said 'let me help you fall for a stranger.'" },
    { image: IMG(PHOTO.sunHorizon, 1400), alt: "Sun setting over calm sea waves on an empty beach", caption: "The stairs Sam definitely didn't overthink." },
    { image: IMG(PHOTO.aerialLagoon, 1400), alt: "Aerial view of a turquoise lagoon with small green islands", caption: "A whole coastline. One boy. Sam's entire focus is on the boy." }
  ],

  behindTheStory: {
    quotes: [
      "\"I've made eye contact with this boy more times than I've spoken actual words this holiday.\" — Sam",
      "\"His dad is somehow the most Irish person I've ever met and I haven't even confirmed the son is Irish yet.\" — Sam",
      "\"I nodded. He didn't see me look back because I forgot to look back. This is fine.\" — Sam"
    ],
    notes: [
      "Across the Pool is written in as close to real time as the actual holiday allows — nothing here is planned in advance, including whether anything ever happens.",
      "The 'Sam's Brain' captions are transcribed reactions, not dramatisations. If anything, they've been toned down.",
      "This is a low-budget, high-sparkle production. Think Benidorm's chaos with about ten times the pool quality and considerably less sunburn."
    ]
  }
};

if (typeof window !== "undefined") {
  window.SITE_DATA = SITE_DATA;
}
if (typeof module !== "undefined") {
  module.exports = SITE_DATA;
}
