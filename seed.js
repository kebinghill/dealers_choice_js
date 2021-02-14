const {
  db,
  models: { Class, Instrument },
} = require('./db/server');

const classSeed = [
  {
    type: 'Strings',
  },
  {
    type: 'Keys',
  },
  {
    type: 'Drums',
  },
];

const instrumentSeed = [
  {
    name: 'Banjo',
    info:
      'The banjo is a stringed instrument with a thin membrane stretched over a frame or cavity to form a resonator. The membrane is typically circular, and usually made of plastic, or occasionally animal skin.',
    classid: 1,
  },
  {
    name: 'Bass',
    info:
      'The bass guitar, electric bass or simply bass, is the lowest-pitched member of the guitar family. It is a plucked string instrument similar in appearance and construction to an electric or an acoustic guitar, but with a longer neck and scale length, and typically four to six strings or courses.',
    classId: 1,
  },
  {
    name: 'Cello',
    info:
      "The cello or violoncello is a bowed string instrument of the violin family. Its four strings are usually tuned in perfect fifths: from low to high, C₂, G₂, D₃ and A₃. The viola's four strings are each an octave higher.",
    classId: 1,
  },
  {
    name: 'Charango',
    info:
      'The charango is a small Andean stringed instrument of the lute family, which probably originated in the Quechua and Aymara populations in the territory of the Altiplano in post-Colonial times, after European stringed instruments were introduced by the Spanish during colonialization.',
    classId: 1,
  },
  {
    name: 'Guitar',
    info:
      'The guitar is a string instrument which is played by plucking the strings. The main parts of a guitar are the body, the fretboard, the headstock and the strings. Guitars are usually made from wood or plastic.',
    classId: 1,
  },
  {
    name: 'Harp',
    info:
      'The harp is a stringed musical instrument that has a number of individual strings running at an angle to its soundboard; the strings are plucked with the fingers. Harps can be made and played in various ways, including standing or sitting and in orchestras or concerts.',
    classId: 1,
  },
  {
    name: 'Mandolin',
    info:
      'A mandolin is a stringed musical instrument in the lute family and is generally plucked with a plectrum. It most commonly has four courses of doubled metal strings tuned in unison, thus giving a total of 8 strings, although five and six course versions also exist.',
    classId: 1,
  },
  {
    name: 'Sitar',
    info:
      'The sitar is a plucked stringed instrument, originating from the Indian subcontinent, used in Hindustani classical music. The instrument was invented in medieval India and flourished in the 16th and 17th centuries and arrived at its present form in 18th-century India.',
    classId: 1,
  },
  {
    name: 'Ukulele',
    info:
      'The ukulele is a member of the lute family of instruments. It generally employs four nylon strings. The ukulele is a small guitar-like instrument, which was introduced to Hawaii by Portuguese immigrants from Madeira.',
    classId: 1,
  },
  {
    name: 'Viola',
    info:
      'The viola is a string instrument that is bowed, plucked, or played with varying techniques. It is slightly larger than a violin and has a lower and deeper sound. Since the 18th century, it has been the middle or alto voice of the violin family, between the violin and the cello.',
    classId: 1,
  },
  {
    name: 'Violin',
    info:
      'The violin, sometimes known as a fiddle, is a wooden chordophone in the violin family. Most violins have a hollow wooden body. It is the smallest and thus highest-pitched instrument in the family in regular use.',
    classId: 2,
  },
  {
    name: 'Accordion',
    info:
      'Accordions are a family of box-shaped musical instruments of the bellows-driven free-reed aerophone type, colloquially referred to as a squeezebox. A person who plays the accordion is called an accordionist. The concertina and bandoneón are related.',
    classId: 2,
  },
  {
    name: 'Carillon',
    info:
      'A carillon is an idiophone percussion instrument that is played with a keyboard and usually housed in a bell tower. It consists of at least 23 cast bronze bells in fixed suspension and tuned in chromatic order so that they can be sounded harmoniously together.',
    classId: 2,
  },
  {
    name: 'Harpsichord',
    info:
      'Harpsichord, keyboard musical instrument in which strings are set in vibration by plucking. It was one of the most important keyboard instruments in European music from the 16th through the first half of the 18th century. A brief treatment of harpsichords follows.',
    classId: 2,
  },
  {
    name: 'Organ',
    info:
      'In music, the organ is a keyboard instrument of one or more pipe divisions or other means for producing tones, each played with its own keyboard, played either with the hands on a keyboard or with the feet using pedals.',
    classId: 2,
  },
  {
    name: 'Piano',
    info:
      'Piano, also called pianoforte, French piano or pianoforte, German Klavier, a keyboard musical instrument having wire strings that sound when struck by felt-covered hammers operated from a keyboard. The standard modern piano contains 88 keys and has a compass of seven full octaves plus a few keys.',
    classId: 2,
  },
  {
    name: 'Synthesizer',
    info:
      'A synthesizer is an electronic musical instrument that generates audio signals. Synthesizers generate audio through methods including subtractive synthesis, additive synthesis, and frequency modulation synthesis.',
    classId: 2,
  },
  {
    name: 'Crash',
    info:
      'A crash cymbal is a type of cymbal that produces a loud, sharp "crash" and is used mainly for occasional accents, as opposed to a ride cymbal. It can be mounted on a stand and played with a drum stick, or by hand in pairs. One or two crash cymbals are a standard part of a drum kit.',
    classId: 3,
  },
  {
    name: 'Hi-Hat',
    info:
      'A hi-hat is a combination of two cymbals and a pedal, all mounted on a metal stand. It is a part of the standard drum kit used by drummers in many styles of music including rock, pop, jazz, and blues.',
    classId: 3,
  },
  {
    name: 'Kick',
    info:
      "The bass drum, or kick drum, is a large drum that produces a note of low definite or indefinite pitch. The instrument is typically cylindrical, with the drum's diameter much greater than the drum's depth, with a struck head at both ends of the cylinder.",
    classId: 3,
  },
  {
    name: 'Ride',
    info:
      'The ride cymbal is a standard cymbal in most drum kits. It maintains a steady rhythmic pattern, sometimes called a ride pattern, rather than the accent of a crash. It is normally placed on the extreme right (or dominant hand) of a drum set, above the floor tom.',
    classId: 3,
  },
  {
    name: 'Snare',
    info:
      'The snare drum or side drum is a percussion instrument that produces a sharp staccato sound when the head is struck with a drum stick, due to the use of a series of stiff wires held under tension against the lower skin.',
    classId: 3,
  },
  {
    name: 'Splash',
    info:
      'In a drum kit, splash cymbals are the smallest accent cymbals. Splash cymbals and china cymbals are the main types of effects cymbals. The most common sized splash has a diameter of 10", followed by 8". Most splash cymbals are in the size range of 6" to 13", but some splash cymbals are as small as 4".',
    classId: 3,
  },
  {
    name: 'Swish',
    info:
      'The swish cymbal and the pang cymbal are exotic ride cymbals originally developed and named as part of the collaboration between Gene Krupa and the Avedis Zildjian Company.',
    classId: 3,
  },
  {
    name: 'Tom',
    info:
      'A tom drum is a cylindrical drum with no snares, named from the Anglo-Indian and Sinhala language.[1] It was added to the drum kit in the early part of the 20th century. Most toms range in size between 6 and 20 inches (15 and 51 cm) in diameter, though floor toms can go as large as 24 inches (61 cm).',
    classId: 3,
  },
];

const seed = async () => {
  await Class.bulkCreate(classSeed);
  await Instrument.bulkCreate(instrumentSeed);
};

seed();
