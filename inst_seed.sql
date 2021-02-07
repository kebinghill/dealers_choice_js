TRUNCATE TABLE class, instruments;

INSERT INTO class (type) VALUES ('Strings');
INSERT INTO class (type) VALUES ('Keys');
INSERT INTO class (type) VALUES ('Drums');

INSERT INTO instruments (name, info, class_id) VALUES ('Banjo', 'The banjo is a stringed instrument with a thin membrane stretched over a frame or cavity to form a resonator. The membrane is typically circular, and usually made of plastic, or occasionally animal skin.', (SELECT id FROM class WHERE type='Strings'));
INSERT INTO instruments (name, info, class_id) VALUES ('Bass', 'The bass guitar, electric bass or simply bass, is the lowest-pitched member of the guitar family. It is a plucked string instrument similar in appearance and construction to an electric or an acoustic guitar, but with a longer neck and scale length, and typically four to six strings or courses.', (SELECT id FROM class WHERE type='Strings'));
INSERT INTO instruments (name, info, class_id) VALUES ('Cello', 'The cello or violoncello is a bowed string instrument of the violin family. Its four strings are usually tuned in perfect fifths: from low to high, C₂, G₂, D₃ and A₃. The viola''s four strings are each an octave higher.', (SELECT id FROM class WHERE type='Strings'));
INSERT INTO instruments (name, info, class_id) VALUES ('Charango', 'The charango is a small Andean stringed instrument of the lute family, which probably originated in the Quechua and Aymara populations in the territory of the Altiplano in post-Colonial times, after European stringed instruments were introduced by the Spanish during colonialization.', (SELECT id FROM class WHERE type='Strings'));
INSERT INTO instruments (name, info, class_id) VALUES ('Guitar', 'The guitar is a string instrument which is played by plucking the strings. The main parts of a guitar are the body, the fretboard, the headstock and the strings. Guitars are usually made from wood or plastic.', (SELECT id FROM class WHERE type='Strings'));
INSERT INTO instruments (name, info, class_id) VALUES ('Harp', 'The harp is a stringed musical instrument that has a number of individual strings running at an angle to its soundboard; the strings are plucked with the fingers. Harps can be made and played in various ways, including standing or sitting and in orchestras or concerts.', (SELECT id FROM class WHERE type='Strings'));
INSERT INTO instruments (name, info, class_id) VALUES ('Mandolin', 'A mandolin is a stringed musical instrument in the lute family and is generally plucked with a plectrum. It most commonly has four courses of doubled metal strings tuned in unison, thus giving a total of 8 strings, although five and six course versions also exist.', (SELECT id FROM class WHERE type='Strings'));
INSERT INTO instruments (name, info, class_id) VALUES ('Sitar', 'The sitar is a plucked stringed instrument, originating from the Indian subcontinent, used in Hindustani classical music. The instrument was invented in medieval India and flourished in the 16th and 17th centuries and arrived at its present form in 18th-century India.', (SELECT id FROM class WHERE type='Strings'));
INSERT INTO instruments (name, info, class_id) VALUES ('Ukulele', 'The ukulele is a member of the lute family of instruments. It generally employs four nylon strings. The ukulele is a small guitar-like instrument, which was introduced to Hawaii by Portuguese immigrants from Madeira.', (SELECT id FROM class WHERE type='Strings'));
INSERT INTO instruments (name, info, class_id) VALUES ('Viola', 'The viola is a string instrument that is bowed, plucked, or played with varying techniques. It is slightly larger than a violin and has a lower and deeper sound. Since the 18th century, it has been the middle or alto voice of the violin family, between the violin and the cello.', (SELECT id FROM class WHERE type='Strings'));
INSERT INTO instruments (name, info, class_id) VALUES ('Violin', 'The violin, sometimes known as a fiddle, is a wooden chordophone in the violin family. Most violins have a hollow wooden body. It is the smallest and thus highest-pitched instrument in the family in regular use.', (SELECT id FROM class WHERE type='Strings'));

INSERT INTO instruments (name, info, class_id) VALUES ('Accordion', 'Accordions are a family of box-shaped musical instruments of the bellows-driven free-reed aerophone type, colloquially referred to as a squeezebox. A person who plays the accordion is called an accordionist. The concertina and bandoneón are related.', (SELECT id FROM class WHERE type='Keys'));
INSERT INTO instruments (name, info, class_id) VALUES ('Carillon', 'A carillon is an idiophone percussion instrument that is played with a keyboard and usually housed in a bell tower. It consists of at least 23 cast bronze bells in fixed suspension and tuned in chromatic order so that they can be sounded harmoniously together.', (SELECT id FROM class WHERE type='Keys'));
INSERT INTO instruments (name, info, class_id) VALUES ('Harpsichord', 'Harpsichord, keyboard musical instrument in which strings are set in vibration by plucking. It was one of the most important keyboard instruments in European music from the 16th through the first half of the 18th century. A brief treatment of harpsichords follows.', (SELECT id FROM class WHERE type='Keys'));
INSERT INTO instruments (name, info, class_id) VALUES ('Organ', 'In music, the organ is a keyboard instrument of one or more pipe divisions or other means for producing tones, each played with its own keyboard, played either with the hands on a keyboard or with the feet using pedals.', (SELECT id FROM class WHERE type='Keys'));
INSERT INTO instruments (name, info, class_id) VALUES ('Piano', 'Piano, also called pianoforte, French piano or pianoforte, German Klavier, a keyboard musical instrument having wire strings that sound when struck by felt-covered hammers operated from a keyboard. The standard modern piano contains 88 keys and has a compass of seven full octaves plus a few keys.', (SELECT id FROM class WHERE type='Keys'));
INSERT INTO instruments (name, info, class_id) VALUES ('Synthesizer', 'A synthesizer is an electronic musical instrument that generates audio signals. Synthesizers generate audio through methods including subtractive synthesis, additive synthesis, and frequency modulation synthesis.', (SELECT id FROM class WHERE type='Keys'));

INSERT INTO instruments (name, info, class_id) VALUES ('Crash', 'A crash cymbal is a type of cymbal that produces a loud, sharp "crash" and is used mainly for occasional accents, as opposed to a ride cymbal. It can be mounted on a stand and played with a drum stick, or by hand in pairs. One or two crash cymbals are a standard part of a drum kit.', (SELECT id FROM class WHERE type='Drums'));
INSERT INTO instruments (name, info, class_id) VALUES ('Hi-Hat', 'A hi-hat is a combination of two cymbals and a pedal, all mounted on a metal stand. It is a part of the standard drum kit used by drummers in many styles of music including rock, pop, jazz, and blues.', (SELECT id FROM class WHERE type='Drums'));
INSERT INTO instruments (name, info, class_id) VALUES ('Kick', 'The bass drum, or kick drum, is a large drum that produces a note of low definite or indefinite pitch. The instrument is typically cylindrical, with the drum''s diameter much greater than the drum''s depth, with a struck head at both ends of the cylinder.', (SELECT id FROM class WHERE type='Drums'));
INSERT INTO instruments (name, info, class_id) VALUES ('Ride', 'The ride cymbal is a standard cymbal in most drum kits. It maintains a steady rhythmic pattern, sometimes called a ride pattern, rather than the accent of a crash. It is normally placed on the extreme right (or dominant hand) of a drum set, above the floor tom.', (SELECT id FROM class WHERE type='Drums'));
INSERT INTO instruments (name, info, class_id) VALUES ('Snare', 'The snare drum or side drum is a percussion instrument that produces a sharp staccato sound when the head is struck with a drum stick, due to the use of a series of stiff wires held under tension against the lower skin.', (SELECT id FROM class WHERE type='Drums'));
INSERT INTO instruments (name, info, class_id) VALUES ('Splash', 'In a drum kit, splash cymbals are the smallest accent cymbals. Splash cymbals and china cymbals are the main types of effects cymbals. The most common sized splash has a diameter of 10", followed by 8". Most splash cymbals are in the size range of 6" to 13", but some splash cymbals are as small as 4".', (SELECT id FROM class WHERE type='Drums'));
INSERT INTO instruments (name, info, class_id) VALUES ('Swish', 'The swish cymbal and the pang cymbal are exotic ride cymbals originally developed and named as part of the collaboration between Gene Krupa and the Avedis Zildjian Company.', (SELECT id FROM class WHERE type='Drums'));
INSERT INTO instruments (name, info, class_id) VALUES ('Tom', 'A tom drum is a cylindrical drum with no snares, named from the Anglo-Indian and Sinhala language.[1] It was added to the drum kit in the early part of the 20th century. Most toms range in size between 6 and 20 inches (15 and 51 cm) in diameter, though floor toms can go as large as 24 inches (61 cm).', (SELECT id FROM class WHERE type='Drums'));







