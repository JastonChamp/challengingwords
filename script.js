"use strict";

// =======================
// Full Passages Data
// =======================
window.passages = {
  prepositions: [
    {
      text: "Sally placed her bag ___(1)___ the table. She looked ___(2)___ the window and saw a bird. The bird was perched ___(3)___ the fence. Her cat hid ___(4)___ a chair. Sally walked ___(5)___ the door quietly.",
      wordBox: ["in", "on", "under", "by", "through", "around", "towards"],
      answers: ["on", "through", "by", "under", "towards"],
      clueWords: [["bag"], ["window"], ["fence"], ["chair"], ["door"]],
      hints: [
        "Which preposition correctly shows the bag’s position relative to the table?",
        "How is Sally looking out of the window?",
        "Which preposition best describes the bird’s position on the fence?",
        "Where is the cat hiding?",
        "Which direction does Sally move?"
      ],
      hint: "Remember to use the objects around you as clues."
    },
    {
      text: "Tom sat ___(1)___ the sofa and watched TV. His mom was cooking ___(2)___ the kitchen. The dog slept ___(3)___ the rug. Tom’s sister played ___(4)___ the garden. Later, they ate dinner ___(5)___ the table.",
      wordBox: ["on", "in", "under", "by", "around", "at", "near"],
      answers: ["on", "in", "on", "in", "at"],
      clueWords: [["sofa"], ["kitchen"], ["rug"], ["garden"], ["table"]],
      hints: [
        "Which preposition shows Tom’s position on the sofa?",
        "Where is his mom cooking?",
        "Where is the dog sleeping?",
        "Where does his sister play?",
        "Where do they eat dinner?"
      ],
      hint: "Remember to use the objects around you as clues."
    },
    {
      text: "The ball rolled ___(1)___ the hill and stopped ___(2)___ a tree. A squirrel ran ___(3)___ the tree and hid ___(4)___ the branches. The children played ___(5)___ the park all day.",
      wordBox: ["down", "up", "under", "by", "around", "near", "between"],
      answers: ["down", "by", "up", "in", "in"],
      clueWords: [["hill"], ["tree"], ["squirrel"], ["branches"], ["park"]],
      hints: [
        "Which word shows the ball’s direction down the hill?",
        "Where did the ball stop relative to the tree?",
        "How did the squirrel move along the tree?",
        "Where did the squirrel hide?",
        "Where did the children play?"
      ],
      hint: "Remember to use the objects around you as clues."
    },
    {
      text: "The teacher stood ___(1)___ the classroom. She wrote ___(2)___ the whiteboard. The students sat ___(3)___ their desks. A poster hung ___(4)___ the wall. The clock was ___(5)___ the door.",
      wordBox: ["in", "on", "under", "by", "near", "above", "below"],
      answers: ["in", "on", "at", "on", "above"],
      clueWords: [["teacher"], ["whiteboard"], ["desks"], ["poster"], ["door"]],
      hints: [
        "Where is the teacher located?",
        "Where does she write?",
        "How do the students sit relative to their desks?",
        "Where is the poster hung?",
        "Where is the clock in relation to the door?"
      ],
      hint: "Remember to use the objects around you as clues."
    },
    {
      text: "The fish swam ___(1)___ the pond. A frog jumped ___(2)___ a lily pad. The ducks floated ___(3)___ the water. A boy stood ___(4)___ the bridge and watched. His friend sat ___(5)___ the grass nearby.",
      wordBox: ["in", "on", "under", "by", "around", "near", "between"],
      answers: ["in", "on", "on", "at", "on"],
      clueWords: [["fish"], ["lily pad"], ["ducks"], ["bridge"], ["grass"]],
      hints: [
        "Where does the fish swim?",
        "Where did the frog jump?",
        "Where do the ducks float?",
        "Where does the boy stand?",
        "Where does his friend sit?"
      ],
      hint: "Remember to use the objects around you as clues."
    },
    {
      text: "The kite flew ___(1)___ the sky. The boy held the string ___(2)___ his hands. The wind blew ___(3)___ the trees. The kite soared ___(4)___ the clouds. His sister cheered ___(5)___ the ground.",
      wordBox: ["in", "on", "under", "by", "through", "above", "below"],
      answers: ["in", "in", "through", "above", "on"],
      clueWords: [["kite"], ["string"], ["wind"], ["clouds"], ["ground"]],
      hints: [
        "Which preposition describes the kite’s position in the sky?",
        "How does the boy hold the string?",
        "How does the wind move through the trees?",
        "Where does the kite soar relative to the clouds?",
        "Where is his sister when she cheers?"
      ],
      hint: "Remember to use the objects around you as clues."
    },
    {
      text: "The book is ___(1)___ the shelf. A pen rolled ___(2)___ the desk. The bag is ___(3)___ the chair. The teacher walked ___(4)___ the room. A picture hangs ___(5)___ the wall.",
      wordBox: ["on", "under", "by", "around", "near", "above", "below"],
      answers: ["on", "under", "under", "around", "on"],
      clueWords: [["book"], ["pen"], ["bag"], ["teacher"], ["picture"]],
      hints: [
        "Which preposition shows where the book is?",
        "Where did the pen roll?",
        "Where is the bag located relative to the chair?",
        "How did the teacher move in the room?",
        "Where is the picture hung?"
      ],
      hint: "Remember to use the objects around you as clues."
    },
    {
      text: "The bus stopped ___(1)___ the bus stop. People waited ___(2)___ the shelter. The driver sat ___(3)___ the wheel. A girl looked ___(4)___ her phone. The bus moved ___(5)___ the road.",
      wordBox: ["at", "in", "on", "under", "by", "near", "along"],
      answers: ["at", "in", "at", "at", "along"],
      clueWords: [["bus"], ["shelter"], ["driver"], ["girl"], ["road"]],
      hints: [
        "Which preposition indicates where the bus stopped?",
        "Where did people wait?",
        "Where did the driver sit?",
        "Where did the girl look?",
        "How did the bus move?"
      ],
      hint: "Remember to use the objects around you as clues."
    },
    {
      text: "The monkey climbed ___(1)___ the tree. It swung ___(2)___ the branches. A bird flew ___(3)___ its nest. The zookeeper stood ___(4)___ the cage. The children watched ___(5)___ the fence.",
      wordBox: ["up", "on", "under", "by", "around", "near", "to"],
      answers: ["up", "on", "to", "by", "near"],
      clueWords: [["monkey"], ["branches"], ["bird"], ["zookeeper"], ["fence"]],
      hints: [
        "Which preposition shows the direction of the monkey’s climb?",
        "How did the monkey swing along the branches?",
        "Where did the bird fly relative to its nest?",
        "Where did the zookeeper stand?",
        "Where did the children watch?"
      ],
      hint: "Remember to use the objects around you as clues."
    },
    {
      text: "The plate is ___(1)___ the table. A spoon fell ___(2)___ the floor. The soup is ___(3)___ the bowl. Mother cooked ___(4)___ the stove. We ate ___(5)___ the dining room.",
      wordBox: ["on", "under", "in", "by", "around", "near", "at"],
      answers: ["on", "on", "in", "at", "in"],
      clueWords: [["plate"], ["spoon"], ["soup"], ["stove"], ["dining room"]],
      hints: [
        "Where is the plate located?",
        "Where did the spoon fall?",
        "Where is the soup?",
        "Where did Mother cook?",
        "Where did we eat?"
      ],
      hint: "Remember to use the objects around you as clues."
    },
    {
      text: "The boy ran ___(1)___ the playground. He jumped ___(2)___ a bench. His friends waited ___(3)___ the slide. The ball rolled ___(4)___ the sandpit. They played ___(5)___ the sun set.",
      wordBox: ["in", "on", "under", "by", "around", "near", "until"],
      answers: ["around", "over", "by", "into", "until"],
      clueWords: [["boy"], ["bench"], ["slide"], ["ball"], ["sun"]],
      hints: [
        "Which preposition shows where the boy ran?",
        "How did he jump relative to the bench?",
        "Where did his friends wait?",
        "How did the ball roll?",
        "Until when did they play?"
      ],
      hint: "Remember to use the objects around you as clues."
    },
    {
      text: "The rain fell ___(1)___ the roof. The cat slept ___(2)___ the mat. A puddle formed ___(3)___ the house. The girl stood ___(4)___ an umbrella. The dog ran ___(5)___ the rain.",
      wordBox: ["on", "under", "by", "around", "near", "through", "in"],
      answers: ["on", "on", "near", "under", "through"],
      clueWords: [["rain"], ["cat"], ["puddle"], ["umbrella"], ["dog"]],
      hints: [
        "Where does the rain fall?",
        "Where does the cat sleep?",
        "Where is the puddle formed?",
        "Where does the girl stand?",
        "How does the dog run relative to the rain?"
      ],
      hint: "Remember to use the objects around you as clues."
    },
    {
      text: "The flag is ___(1)___ the pole. The wind blew ___(2)___ the school. The students stood ___(3)___ the field. A bell rang ___(4)___ the building. They walked ___(5)___ their classrooms.",
      wordBox: ["on", "in", "under", "by", "around", "near", "to"],
      answers: ["on", "around", "on", "in", "to"],
      clueWords: [["flag"], ["wind"], ["students"], ["bell"], ["classrooms"]],
      hints: [
        "Where is the flag located?",
        "How did the wind blow?",
        "Where did the students stand?",
        "Where did the bell ring?",
        "Which direction did they walk?"
      ],
      hint: "Remember to use the objects around you as clues."
    },
    {
      text: "The boat floated ___(1)___ the river. A fish swam ___(2)___ the water. The man fished ___(3)___ the bank. A bird flew ___(4)___ the boat. The net was ___(5)___ the deck.",
      wordBox: ["on", "in", "under", "by", "around", "near", "above"],
      answers: ["on", "in", "by", "above", "on"],
      clueWords: [["boat"], ["fish"], ["bank"], ["bird"], ["net"]],
      hints: [
        "Which preposition best describes where the boat floats?",
        "Where does the fish swim?",
        "Where does the man fish?",
        "Where did the bird fly relative to the boat?",
        "Where is the net placed?"
      ],
      hint: "Remember to use the objects around you as clues."
    },
    {
      text: "The plane flew ___(1)___ the clouds. The pilot sat ___(2)___ the cockpit. Passengers looked ___(3)___ the windows. The luggage was ___(4)___ the seats. The airport was ___(5)___ the city.",
      wordBox: ["in", "on", "under", "by", "through", "near", "below"],
      answers: ["through", "in", "out", "under", "near"],
      clueWords: [["plane"], ["pilot"], ["passengers"], ["luggage"], ["airport"]],
      hints: [
        "Which word shows how the plane moved through the clouds?",
        "Where does the pilot sit?",
        "How do passengers look out?",
        "Where is the luggage located?",
        "Where is the airport in relation to the city?"
      ],
      hint: "Remember to use the objects around you as clues."
    }
  ],
  conjunctions: [
    {
      text: "Tom wanted to go outside ___(1)___ it was raining. He waited ___(2)___ the rain stopped ___(3)___ then ran to the park. He could play ___(4)___ read a book, ___(5)___ he chose to play.",
      wordBox: ["but", "and", "or", "until", "because", "so", "although"],
      answers: ["but", "until", "and", "or", "so"],
      clueWords: [["outside"], ["rain"], ["park"], ["play"], ["chose"]],
      hints: [
        "Which conjunction shows contrast in the sentence?",
        "How long did he wait?",
        "What happened after the rain stopped?",
        "What are his two options?",
        "Which conjunction shows the result of his choice?"
      ],
      hint: "Remember to use the objects around you as clues."
    },
    {
      text: "I like apples ___(1)___ bananas. My sister likes oranges ___(2)___ grapes. We both like strawberries ___(3)___ they are sweet. Sometimes we eat fruit ___(4)___ breakfast ___(5)___ for a snack.",
      wordBox: ["and", "but", "or", "because", "so", "although", "after"],
      answers: ["and", "and", "because", "for", "or"],
      clueWords: [["apples"], ["oranges"], ["strawberries"], ["breakfast"], ["snack"]],
      hints: [
        "Which conjunction adds ideas?",
        "Which conjunction is used again to add similar ideas?",
        "Which word gives the reason for liking strawberries?",
        "When is fruit eaten?",
        "What choice is given for a snack?"
      ],
      hint: "Remember to use the objects around you as clues."
    },
    {
      text: "The dog barked loudly ___(1)___ the cat meowed softly. They were hungry ___(2)___ they wanted food. The owner fed them ___(3)___ they stopped making noise. Later, the dog slept ___(4)___ the cat played. They are friends ___(5)___ they sometimes fight.",
      wordBox: ["and", "but", "or", "because", "so", "although", "after"],
      answers: ["while", "so", "and", "while", "although"],
      clueWords: [["dog"], ["hungry"], ["fed"], ["cat"], ["fight"]],
      hints: [
        "Which conjunction shows the contrasting simultaneous actions of the dog and the cat?",
        "Why did they behave in that way?",
        "What connects the feeding event?",
        "How are the two activities (sleeping and playing) related?",
        "Which word shows the unexpected contrast?"
      ],
      hint: "Remember to use the objects around you as clues."
    },
    {
      text: "I can go to the park ___(1)___ stay home. If I go to the park, I will play ___(2)___ my friends. If I stay home, I will read ___(3)___ watch TV. I think I will go ___(4)___ it is sunny. My mom said I can go ___(5)___ I finish my homework.",
      wordBox: ["or", "and", "but", "because", "so", "if", "unless"],
      answers: ["or", "with", "or", "because", "if"],
      clueWords: [["park"], ["play"], ["read"], ["sunny"], ["homework"]],
      hints: [
        "Which word indicates a choice between two options?",
        "Who will you play with?",
        "What is the alternative activity?",
        "What reason is given for going out?",
        "What condition must be met to go out?"
      ],
      hint: "Remember to use the objects around you as clues."
    },
    {
      text: "The children were tired ___(1)___ they kept playing. They wanted to win ___(2)___ they tried hard. The coach cheered ___(3)___ they scored a goal. After the game, they were happy ___(4)___ exhausted. They celebrated ___(5)___ they went home.",
      wordBox: ["but", "and", "or", "because", "so", "although", "after"],
      answers: ["but", "so", "when", "but", "before"],
      clueWords: [["children"], ["win"], ["cheered"], ["happy"], ["home"]],
      hints: [
        "Which conjunction shows the contrast between tiredness and action?",
        "What is the result of trying hard?",
        "When did the coach cheer?",
        "What juxtaposition is presented after the game?",
        "What is the sequence before going home?"
      ],
      hint: "Remember to use the objects around you as clues."
    },
    {
      text: "The sky was dark ___(1)___ it might rain. I took an umbrella ___(2)___ I didn’t want to get wet. It started raining ___(3)___ I reached the bus stop. I waited there ___(4)___ the rain stopped. I was glad ___(5)___ I stayed dry.",
      wordBox: ["but", "and", "or", "because", "so", "until", "after"],
      answers: ["so", "because", "when", "until", "because"],
      clueWords: [["sky"], ["umbrella"], ["raining"], ["bus stop"], ["dry"]],
      hints: [
        "Which word links the dark sky with the possibility of rain?",
        "Why did I take an umbrella?",
        "When did it start raining?",
        "How long did I wait?",
        "Why was I glad?"
      ],
      hint: "Remember to use the objects around you as clues."
    },
    {
      text: "I wanted to eat rice ___(1)___ noodles. My brother chose noodles ___(2)___ he likes them more. We ate together ___(3)___ we shared the food. It was spicy ___(4)___ tasty. We drank water ___(5)___ we finished.",
      wordBox: ["or", "and", "but", "because", "so", "although", "after"],
      answers: ["or", "because", "and", "but", "after"],
      clueWords: [["rice"], ["noodles"], ["together"], ["spicy"], ["water"]],
      hints: [
        "Which word indicates a choice between rice and noodles?",
        "Why did my brother choose noodles?",
        "What did we do together?",
        "How are the flavors contrasted?",
        "What did we drink after eating?"
      ],
      hint: "Remember to use the objects around you as clues."
    }
  ],
  subjectVerbAgreement: [
    {
      text: "The dog ___(1)___ loudly every morning. The cats ___(2)___ quietly in the garden. Each child ___(3)___ a toy. The team ___(4)___ hard to win. Many birds ___(5)___ in the sky.",
      wordBox: ["bark", "barks", "sleep", "sleeps", "has", "have", "work", "works", "fly", "flies"],
      answers: ["barks", "sleep", "has", "works", "fly"],
      clueWords: [["dog"], ["cats"], ["child"], ["team"], ["birds"]],
      hints: [
        "Which verb form matches the singular 'dog'?",
        "Which form is used with plural 'cats'?",
        "What verb form does 'each child' require?",
        "How should the team be treated?",
        "What form should be used for 'birds'?"
      ],
      hint: "Remember to use the objects around you as clues."
    },
    {
      text: "My friend ___(1)___ to school every day. The students ___(2)___ their homework. Each teacher ___(3)___ a classroom. The books ___(4)___ on the shelf. The bird ___(5)___ in the tree.",
      wordBox: ["walk", "walks", "do", "does", "have", "has", "are", "is", "sing", "sings"],
      answers: ["walks", "do", "has", "are", "sings"],
      clueWords: [["friend"], ["students"], ["teacher"], ["books"], ["bird"]],
      hints: [
        "Which verb form fits 'my friend'?",
        "What do plural students do with homework?",
        "Which form is needed for 'each teacher'?",
        "How are the books arranged?",
        "What verb form agrees with 'the bird'?"
      ],
      hint: "Remember to use the objects around you as clues."
    },
    {
      text: "The flowers ___(1)___ beautifully in the garden. Each flower ___(2)___ a different color. The bees ___(3)___ around the flowers. The gardener ___(4)___ the plants every day. Many insects ___(5)___ in the garden.",
      wordBox: ["bloom", "blooms", "have", "has", "buzz", "buzzes", "water", "waters", "live", "lives"],
      answers: ["bloom", "has", "buzz", "waters", "live"],
      clueWords: [["flowers"], ["flower"], ["bees"], ["gardener"], ["insects"]],
      hints: [
        "Which verb form is used with plural 'flowers'?",
        "Which form fits the singular 'flower'?",
        "What verb is used for plural 'bees'?",
        "Which form is required for 'the gardener'?",
        "How do we treat the plural 'insects'?"
      ],
      hint: "Remember to use the objects around you as clues."
    },
    {
      text: "The car ___(1)___ fast on the road. The drivers ___(2)___ carefully. Each passenger ___(3)___ a seatbelt. The buses ___(4)___ slowly in traffic. The motorcycle ___(5)___ loudly.",
      wordBox: ["go", "goes", "drive", "drives", "wear", "wears", "move", "moves", "roar", "roars"],
      answers: ["goes", "drive", "wears", "move", "roars"],
      clueWords: [["car"], ["drivers"], ["passenger"], ["buses"], ["motorcycle"]],
      hints: [
        "Which verb agrees with the singular 'car'?",
        "What verb form is used for plural 'drivers'?",
        "What is required for each passenger?",
        "How are the buses treated?",
        "What verb form fits the singular 'motorcycle'?"
      ],
      hint: "Remember to use the objects around you as clues."
    },
    {
      text: "The baby ___(1)___ in the crib. The parents ___(2)___ the baby. Each toy ___(3)___ a different sound. The children ___(4)___ with the toys. The dog ___(5)___ the children play.",
      wordBox: ["sleep", "sleeps", "watch", "watches", "make", "makes", "play", "plays", "watch", "watches"],
      answers: ["sleeps", "watch", "makes", "play", "watches"],
      clueWords: [["baby"], ["parents"], ["toy"], ["children"], ["dog"]],
      hints: [
        "Which form fits 'the baby'?",
        "What do parents do?",
        "How does 'each toy' behave?",
        "What do the children do?",
        "Which verb form agrees with 'the dog'?"
      ],
      hint: "Remember to use the objects around you as clues."
    }
  ],
  pronouns: [
    {
      text: "Mary lost ___(1)___ book yesterday. She asked John if ___(2)___ had seen it. He said that ___(3)___ didn’t know where it was. ___(4)___ both looked for it. Later, ___(5)___ found it under the desk.",
      wordBox: ["she", "her", "he", "him", "they", "them", "it"],
      answers: ["her", "he", "he", "they", "she"],
      clueWords: [["Mary"], ["John"], ["book"], ["both"], ["desk"]],
      hints: [
        "Which pronoun replaces Mary’s book?",
        "Who did Mary ask?",
        "Who didn’t know where it was?",
        "Who looked for the book?",
        "Where was the book eventually found?"
      ],
      hint: "Remember to use the objects around you as clues."
    },
    {
      text: "The cat chased ___(1)___ tail. ___(2)___ was very playful. The dog watched ___(3)___ and barked. ___(4)___ both ran around the yard. Later, ___(5)___ rested under the tree.",
      wordBox: ["it", "its", "he", "him", "they", "them", "she"],
      answers: ["its", "It", "it", "They", "they"],
      clueWords: [["cat"], ["tail"], ["dog"], ["both"], ["tree"]],
      hints: [
        "Which pronoun shows possession for the cat?",
        "What is the cat’s tail like?",
        "What did the dog do?",
        "Who ran around?",
        "Where did they rest?"
      ],
      hint: "Remember to use the objects around you as clues."
    },
    {
      text: "Tom and Jerry are friends. ___(1)___ play together every day. ___(2)___ share their toys. Sometimes, ___(3)___ argue, but ___(4)___ always make up. ___(5)___ are best friends.",
      wordBox: ["They", "He", "She", "It", "We", "You", "Them"],
      answers: ["They", "They", "they", "they", "They"],
      clueWords: [["Tom"], ["Jerry"], ["toys"], ["argue"], ["friends"]],
      hints: [
        "Which pronoun refers to Tom and Jerry?",
        "What do they do together?",
        "What happens sometimes between them?",
        "What is their resolution?",
        "How are they described as friends?"
      ],
      hint: "Remember to use the objects around you as clues."
    },
    {
      text: "The teacher gave ___(1)___ a test. ___(2)___ was difficult, but ___(3)___ all tried their best. After the test, ___(4)___ graded the papers. ___(5)___ were proud of their work.",
      wordBox: ["us", "it", "they", "she", "he", "them", "we"],
      answers: ["us", "It", "they", "she", "They"],
      clueWords: [["teacher"], ["test"], ["tried"], ["graded"], ["proud"]],
      hints: [
        "Who did the teacher give the test to?",
        "How was the test described?",
        "What did everyone do?",
        "Who graded the papers?",
        "How did they feel about their work?"
      ],
      hint: "Remember to use the objects around you as clues."
    },
    {
      text: "The bird built ___(1)___ nest in the tree. ___(2)___ laid eggs in ___(3)___ nest. The chicks hatched and ___(4)___ chirped loudly. The mother bird fed ___(5)___ worms.",
      wordBox: ["it", "its", "she", "her", "they", "them", "he"],
      answers: ["its", "She", "her", "they", "them"],
      clueWords: [["bird"], ["nest"], ["eggs"], ["chicks"], ["worms"]],
      hints: [
        "Which pronoun shows possession for the bird’s nest?",
        "Who laid the eggs?",
        "Whose nest is it?",
        "How did the chicks behave?",
        "What did the mother bird feed them?"
      ],
      hint: "Remember to use the objects around you as clues."
    },
    {
      text: "The boy dropped ___(1)___ pencil. ___(2)___ picked it up quickly. The girl next to ___(3)___ smiled. ___(4)___ both laughed about it. Later, ___(5)___ gave her a new pencil.",
      wordBox: ["he", "him", "his", "she", "her", "they", "them"],
      answers: ["his", "He", "her", "They", "he"],
      clueWords: [["boy"], ["pencil"], ["girl"], ["laughed"], ["new"]],
      hints: [
        "Which pronoun shows ownership of the pencil?",
        "Who picked it up?",
        "Who smiled?",
        "What did they do together?",
        "Who gave a new pencil?"
      ],
      hint: "Remember to use the objects around you as clues."
    },
    {
      text: "The dog wagged ___(1)___ tail. ___(2)___ ran to the park. The children played with ___(3)___ . ___(4)___ all had fun together. The dog licked ___(5)___ hands.",
      wordBox: ["it", "its", "he", "him", "they", "them", "us"],
      answers: ["its", "It", "it", "They", "their"],
      clueWords: [["dog"], ["park"], ["children"], ["fun"], ["hands"]],
      hints: [
        "Which pronoun shows possession for the tail?",
        "What did it do?",
        "What did the children do?",
        "How did everyone have fun?",
        "What did the dog do to the hands?"
      ],
      hint: "Remember to use the objects around you as clues."
    },
    {
      text: "My sister and I went shopping. ___(1)___ bought new shoes. ___(2)___ tried them on. The shopkeeper helped ___(3)___ . ___(4)___ thanked him. ___(5)___ was very kind.",
      wordBox: ["we", "us", "she", "her", "he", "him", "they"],
      answers: ["We", "We", "us", "We", "He"],
      clueWords: [["sister"], ["shoes"], ["shopkeeper"], ["tried"], ["kind"]],
      hints: [
        "Who bought new shoes?",
        "Who tried the shoes on?",
        "Who helped?",
        "Who thanked the shopkeeper?",
        "How was the shopkeeper described?"
      ],
      hint: "Remember to use the objects around you as clues."
    },
    {
      text: "The teacher called ___(1)___ to the front. ___(2)___ asked John a question. ___(3)___ answered correctly. The class clapped for ___(4)___ . ___(5)___ smiled proudly.",
      wordBox: ["he", "him", "she", "her", "they", "them", "us"],
      answers: ["him", "She", "he", "him", "He"],
      clueWords: [["called"], ["John"], ["answered"], ["clapped"], ["smiled"]],
      hints: [
        "Who was called to the front?",
        "Who asked the question?",
        "Who answered?",
        "For whom did the class clap?",
        "Who smiled proudly?"
      ],
      hint: "Remember to use the objects around you as clues."
    },
    {
      text: "The kite flew high. ___(1)___ caught the wind. The boy held ___(2)___ string. His sister watched ___(3)___ . ___(4)___ both cheered loudly. ___(5)___ waved at them.",
      wordBox: ["it", "its", "he", "him", "she", "her", "they"],
      answers: ["It", "its", "it", "They", "she"],
      clueWords: [["kite"], ["wind"], ["string"], ["cheered"], ["waved"]],
      hints: [
        "Which word indicates what caught the wind?",
        "What does the boy hold?",
        "Who is being watched?",
        "What did both do?",
        "Who waved?"
      ],
      hint: "Remember to use the objects around you as clues."
    },
    {
      text: "The baby dropped ___(1)___ toy. He cried loudly. The mother picked ___(2)___ up. She hugged him tightly. Everyone smiled at him.",
      wordBox: ["it", "its", "he", "him", "she", "her", "they", "everyone"],
      answers: ["its", "He", "it", "She", "Everyone"],
      clueWords: [["baby"], ["toy"], ["mother"], ["hugged"], ["smiled"]],
      hints: [
        "Which pronoun shows possession for the toy?",
        "Who cried?",
        "What did the mother pick up?",
        "Who hugged tightly?",
        "Who smiled?"
      ],
      hint: "Remember to use the objects around you as clues."
    },
    {
      text: "The team won the game. ___(1)___ celebrated together. The coach praised ___(2)___ . ___(3)___ all cheered loudly. The trophy was for ___(4)___ . ___(5)___ held it high.",
      wordBox: ["they", "them", "he", "him", "we", "us", "it"],
      answers: ["They", "them", "They", "them", "They"],
      clueWords: [["team"], ["celebrated"], ["coach"], ["trophy"], ["held"]],
      hints: [
        "Which pronoun represents the team?",
        "What did they do together?",
        "Who did the coach praise?",
        "For whom was the trophy?",
        "Who held it high?"
      ],
      hint: "Remember to use the objects around you as clues."
    },
    {
      text: "The flower lost ___(1)___ petals. They fell to the ground. The girl picked ___(2)___ up. She showed them to her friend. She liked the color.",
      wordBox: ["it", "its", "she", "her", "they", "them"],
      answers: ["its", "them", "them", "She", "she"],
      clueWords: [["flower"], ["petals"], ["girl"], ["showed"], ["color"]],
      hints: [
        "Which pronoun shows the flower’s petals?",
        "What happened to the petals?",
        "Who picked them up?",
        "Who showed them to her friend?",
        "Who liked the color?"
      ],
      hint: "Remember to use the objects around you as clues."
    },
    {
      text: "The bus stopped for ___(1)___ . ___(2)___ got on quickly. The driver waved at ___(3)___ . ___(4)___ all sat down. ___(5)___ started the bus again.",
      wordBox: ["we", "us", "they", "them", "he", "him", "it"],
      answers: ["us", "We", "us", "We", "He"],
      clueWords: [["bus"], ["stopped"], ["driver"], ["sat"], ["started"]],
      hints: [
        "Which pronoun indicates who the bus stopped for?",
        "Who got on quickly?",
        "Who did the driver wave at?",
        "Who sat down?",
        "Who started the bus again?"
      ],
      hint: "Remember to use the objects around you as clues."
    },
    {
      text: "The monkey stole ___(1)___ banana. ___(2)___ ate it fast. The zookeeper chased ___(3)___ . ___(4)___ laughed at the monkey. ___(5)___ was funny.",
      wordBox: ["it", "its", "he", "him", "they", "them", "us"],
      answers: ["its", "It", "it", "They", "It"],
      clueWords: [["monkey"], ["banana"], ["zookeeper"], ["laughed"], ["funny"]],
      hints: [
        "Which pronoun shows possession for the banana?",
        "Who ate it?",
        "Who did the zookeeper chase?",
        "Who laughed?",
        "What was funny?"
      ],
      hint: "Remember to use the objects around you as clues."
    }
  ],
  adjectivesAdverbs: [
    {
      text: "The ___(1)___ cat ran ___(2)___ across the yard. It jumped ___(3)___ onto the fence. The boy watched ___(4)___ as it moved ___(5)___ toward the tree.",
      wordBox: ["quick", "quickly", "high", "highly", "soft", "softly", "careful", "carefully", "silent", "silently"],
      answers: ["quick", "quickly", "high", "carefully", "silently"],
      clueWords: [["cat"], ["ran"], ["jumped"], ["watched"], ["tree"]],
      hints: [
        "What describes the cat?",
        "How did the cat run?",
        "How high did it jump?",
        "How did the boy watch?",
        "How did it move toward the tree?"
      ],
      hint: "Remember to use the objects around you as clues."
    },
    {
      text: "The ___(1)___ sun shone ___(2)___ in the sky. The children played ___(3)___ in the park. They laughed ___(4)___ as they ran ___(5)___ the slides.",
      wordBox: ["bright", "brightly", "happy", "happily", "loud", "loudly", "down", "slow", "slowly"],
      answers: ["bright", "brightly", "happily", "loudly", "down"],
      clueWords: [["sun"], ["shone"], ["children"], ["laughed"], ["slides"]],
      hints: [
        "What describes the sun?",
        "How did the sun shine?",
        "How did the children play?",
        "How did they laugh?",
        "Which direction did they run?"
      ],
      hint: "Remember to use the objects around you as clues."
    },
    {
      text: "The ___(1)___ puppy barked ___(2)___ at the mailman. It wagged its tail ___(3)___ when it saw its owner. The owner petted it ___(4)___ and spoke ___(5)___ to it.",
      wordBox: ["small", "smallly", "loud", "loudly", "quick", "quickly", "gentle", "gently", "soft", "softly"],
      answers: ["small", "loudly", "quickly", "gently", "softly"],
      clueWords: [["puppy"], ["barked"], ["tail"], ["petted"], ["spoke"]],
      hints: [
        "What describes the puppy?",
        "How did it bark?",
        "How did it wag its tail?",
        "How did the owner pet it?",
        "How did the owner speak?"
      ],
      hint: "Remember to use the objects around you as clues."
    },
    {
      text: "The ___(1)___ teacher explained the lesson ___(2)___. The students listened ___(3)___ and took notes ___(4)___. They all worked ___(5)___ on their assignments.",
      wordBox: ["kind", "kindly", "clear", "clearly", "attentive", "attentively", "careful", "carefully", "hard", "hardly"],
      answers: ["kind", "clearly", "attentively", "carefully", "hard"],
      clueWords: [["teacher"], ["explained"], ["listened"], ["notes"], ["assignments"]],
      hints: [
        "What describes the teacher?",
        "How did she explain?",
        "How did the students listen?",
        "How did they take notes?",
        "How much effort did they put into their work?"
      ],
      hint: "Remember to use the objects around you as clues."
    },
    {
      text: "The ___(1)___ wind blew ___(2)___ through the trees. The leaves rustled ___(3)___ as they fell ___(4)___ to the ground. The children played ___(5)___ in the park.",
      wordBox: ["strong", "strongly", "soft", "softly", "gentle", "gently", "slow", "slowly", "happy", "happily"],
      answers: ["strong", "strongly", "softly", "slowly", "happily"],
      clueWords: [["wind"], ["blew"], ["rustled"], ["fell"], ["park"]],
      hints: [
        "What describes the wind?",
        "How did it blow?",
        "How did the leaves rustle?",
        "How did they fall?",
        "How did the children play?"
      ],
      hint: "Remember to use the objects around you as clues."
    },
    {
      text: "The ___(1)___ kite flew ___(2)___ in the sky. The boy pulled the string ___(3)___. It rose ___(4)___ above the trees. He smiled ___(5)___ at his success.",
      wordBox: ["colorful", "colorfully", "high", "highly", "tight", "tightly", "quick", "quickly", "happy", "happily"],
      answers: ["colorful", "high", "tightly", "high", "happily"],
      clueWords: [["kite"], ["flew"], ["string"], ["rose"], ["smiled"]],
      hints: [
        "What describes the kite?",
        "How high did it fly?",
        "How did the boy pull the string?",
        "How high did it rise?",
        "How did he smile?"
      ],
      hint: "Remember to use the objects around you as clues."
    },
    {
      text: "The ___(1)___ bird sang ___(2)___ in the morning. It perched ___(3)___ on a branch. The children listened ___(4)___ to the song. The tune was ___(5)___ to hear.",
      wordBox: ["pretty", "prettily", "sweet", "sweetly", "high", "highly", "quiet", "quietly", "nice", "nicely"],
      answers: ["pretty", "sweetly", "high", "quietly", "nice"],
      clueWords: [["bird"], ["sang"], ["perched"], ["listened"], ["tune"]],
      hints: [
        "What describes the bird?",
        "How did it sing?",
        "How high did it perch?",
        "How did the children listen?",
        "What describes the tune?"
      ],
      hint: "Remember to use the objects around you as clues."
    },
    {
      text: "The ___(1)___ rain fell ___(2)___ on the roof. The girl watched ___(3)___ as it dripped ___(4)___. The sound was ___(5)___ and calming.",
      wordBox: ["heavy", "heavily", "soft", "softly", "careful", "carefully", "slow", "slowly", "gentle", "gently"],
      answers: ["heavy", "heavily", "carefully", "slowly", "gentle"],
      clueWords: [["rain"], ["fell"], ["watched"], ["dripped"], ["sound"]],
      hints: [
        "What describes the rain?",
        "How did it fall?",
        "How did the girl watch?",
        "How did it drip?",
        "What describes the sound?"
      ],
      hint: "Remember to use the objects around you as clues."
    },
    {
      text: "The ___(1)___ boy ran ___(2)___ to the bus. He waved ___(3)___ at his friends. The bus moved ___(4)___ down the road. He sat ___(5)___ in his seat.",
      wordBox: ["fast", "fastly", "quick", "quickly", "happy", "happily", "slow", "slowly", "quiet", "quietly"],
      answers: ["fast", "quickly", "happily", "slowly", "quietly"],
      clueWords: [["boy"], ["ran"], ["waved"], ["moved"], ["seat"]],
      hints: [
        "What describes the boy?",
        "How did he run?",
        "How did he wave?",
        "How did the bus move?",
        "How did he sit?"
      ],
      hint: "Remember to use the objects around you as clues."
    },
    {
      text: "The ___(1)___ cake smelled ___(2)___ in the oven. The baker mixed the batter ___(3)___ . It baked ___(4)___ and turned ___(5)___ brown.",
      wordBox: ["sweet", "sweetly", "nice", "nicely", "careful", "carefully", "slow", "slowly", "golden", "goldenly"],
      answers: ["sweet", "nicely", "carefully", "slowly", "golden"],
      clueWords: [["cake"], ["smelled"], ["batter"], ["baked"], ["turned"]],
      hints: [
        "What describes the cake?",
        "How did it smell?",
        "How did the baker mix?",
        "How did it bake?",
        "What describes its color?"
      ],
      hint: "Remember to use the objects around you as clues."
    },
    {
      text: "The ___(1)___ dog barked ___(2)___ at strangers. It wagged its tail ___(3)___ for its owner. The owner called ___(4)___ to it. The dog ran ___(5)___ to him.",
      wordBox: ["big", "bigly", "loud", "loudly", "happy", "happily", "soft", "softly", "quick", "quickly"],
      answers: ["big", "loudly", "happily", "softly", "quickly"],
      clueWords: [["dog"], ["barked"], ["tail"], ["called"], ["ran"]],
      hints: [
        "What describes the dog?",
        "How did it bark?",
        "How did it wag its tail?",
        "How did the owner call?",
        "How did the dog run?"
      ],
      hint: "Remember to use the objects around you as clues."
    },
    {
      text: "The ___(1)___ flowers grew ___(2)___ in the garden. The gardener watered them ___(3)___ . They smelled ___(4)___ and looked ___(5)___ in the sun.",
      wordBox: ["tall", "tallly", "quick", "quickly", "careful", "carefully", "sweet", "sweetly", "pretty", "prettily"],
      answers: ["tall", "quickly", "carefully", "sweet", "pretty"],
      clueWords: [["flowers"], ["grew"], ["watered"], ["smelled"], ["looked"]],
      hints: [
        "What describes the flowers?",
        "How did they grow?",
        "How did the gardener water?",
        "How did they smell?",
        "What describes their appearance?"
      ],
      hint: "Remember to use the objects around you as clues."
    },
    {
      text: "The ___(1)___ MRT moved ___(2)___ through the tunnel. The driver worked ___(3)___ . Passengers stood ___(4)___ and waited ___(5)___ for their stations.",
      wordBox: ["fast", "fastly", "smooth", "smoothly", "careful", "carefully", "quiet", "quietly", "calm", "calmly"],
      answers: ["fast", "smoothly", "carefully", "quietly", "calmly"],
      clueWords: [["MRT"], ["moved"], ["driver"], ["passengers"], ["stations"]],
      hints: [
        "What describes the MRT?",
        "How did it move?",
        "How did the driver work?",
        "How did passengers stand?",
        "How did they wait?"
      ],
      hint: "Remember to use the objects around you as clues."
    },
    {
      text: "The ___(1)___ hawker cooked ___(2)___ for the crowd. The food smelled ___(3)___ and tasted ___(4)___ . Customers ate ___(5)___ at the tables.",
      wordBox: ["busy", "busily", "quick", "quickly", "good", "well", "nice", "nicely", "happy", "happily"],
      answers: ["busy", "quickly", "nice", "well", "happily"],
      clueWords: [["hawker"], ["cooked"], ["smelled"], ["tasted"], ["tables"]],
      hints: [
        "What describes the hawker?",
        "How did he cook?",
        "What describes the smell?",
        "How did the food taste?",
        "How did customers eat?"
      ],
      hint: "Remember to use the objects around you as clues."
    }
  ],
  tenses: [
    {
      text: "I ___(1)___ to the park yesterday. My friends ___(2)___ there with me. We ___(3)___ games and ___(4)___ a picnic. The sun ___(5)___ brightly all day.",
      wordBox: ["go", "went", "was", "were", "play", "played", "have", "had", "shine", "shone"],
      answers: ["went", "were", "played", "had", "shone"],
      clueWords: [["yesterday"], ["friends"], ["games"], ["picnic"], ["sun"]],
      hints: [
        "What did I do yesterday?",
        "Where were my friends?",
        "What did we do with games?",
        "What did we have?",
        "How did the sun behave all day?"
      ],
      hint: "Remember to use the objects around you as clues."
    },
    {
      text: "She ___(1)___ her homework now. She ___(2)___ it last night. Her brother ___(3)___ TV while she works. They ___(4)___ dinner later. Yesterday, they ___(5)___ at a restaurant.",
      wordBox: ["do", "does", "did", "watch", "watches", "have", "had", "ate", "eat"],
      answers: ["does", "did", "watches", "have", "ate"],
      clueWords: [["now"], ["last night"], ["TV"], ["dinner"], ["restaurant"]],
      hints: [
        "What is she doing now?",
        "What did she do last night?",
        "What does her brother do?",
        "What will they do later?",
        "What did they do yesterday?"
      ],
      hint: "Remember to use the objects around you as clues."
    },
    {
      text: "The dog ___(1)___ in the yard every morning. Yesterday, it ___(2)___ a bone. It ___(3)___ happy when it found it. We ___(4)___ it play. Tomorrow, we ___(5)___ it again.",
      wordBox: ["run", "runs", "find", "found", "is", "was", "watch", "watched", "see", "will see"],
      answers: ["runs", "found", "was", "watched", "will see"],
      clueWords: [["morning"], ["bone"], ["happy"], ["play"], ["tomorrow"]],
      hints: [
        "What does the dog do every morning?",
        "What did it do yesterday?",
        "How did it feel?",
        "What did we do?",
        "What will we do tomorrow?"
      ],
      hint: "Remember to use the objects around you as clues."
    },
    {
      text: "We ___(1)___ to school every day. Last week, we ___(2)___ a school trip. The bus ___(3)___ us there. We ___(4)___ fun all day. Tomorrow, we ___(5)___ a test.",
      wordBox: ["go", "went", "take", "took", "have", "had", "write", "will write", "are"],
      answers: ["go", "went", "took", "had", "will write"],
      clueWords: [["every day"], ["school trip"], ["bus"], ["fun"], ["test"]],
      hints: [
        "What do we do every day?",
        "What did we do last week?",
        "How did the bus help us?",
        "What did we experience?",
        "What will we do tomorrow?"
      ],
      hint: "Remember to use the objects around you as clues."
    },
    {
      text: "He ___(1)___ his bike now. Yesterday, he ___(2)___ to the park. He ___(3)___ with his friends there. They ___(4)___ ice cream after playing. Tomorrow, he ___(5)___ again.",
      wordBox: ["ride", "rides", "go", "went", "play", "played", "eat", "ate", "will go"],
      answers: ["rides", "went", "played", "ate", "will go"],
      clueWords: [["bike"], ["park"], ["friends"], ["ice cream"], ["tomorrow"]],
      hints: [
        "What is he doing now?",
        "Where did he go yesterday?",
        "What did he do there?",
        "What did they eat?",
        "What will he do tomorrow?"
      ],
      hint: "Remember to use the objects around you as clues."
    },
    {
      text: "The teacher ___(1)___ the class every day. Last month, she ___(2)___ us a story. We ___(3)___ it very much. Now, we ___(4)___ a new book. Next week, we ___(5)___ a quiz.",
      wordBox: ["teach", "teaches", "tell", "told", "like", "liked", "read", "reads", "will have"],
      answers: ["teaches", "told", "liked", "read", "will have"],
      clueWords: [["class"], ["story"], ["liked"], ["new book"], ["quiz"]],
      hints: [
        "What does the teacher do every day?",
        "What did she do last month?",
        "How did we feel about it?",
        "What are we doing now?",
        "What will we do next week?"
      ],
      hint: "Remember to use the objects around you as clues."
    },
    {
      text: "The birds ___(1)___ in the tree now. Yesterday, they ___(2)___ away. They ___(3)___ back today. We ___(4)___ them sing. Tomorrow, they ___(5)___ again.",
      wordBox: ["sing", "sings", "fly", "flew", "come", "came", "hear", "heard", "will sing"],
      answers: ["sing", "flew", "came", "hear", "will sing"],
      clueWords: [["now"], ["away"], ["back"], ["sing"], ["tomorrow"]],
      hints: [
        "What are the birds doing now?",
        "What did they do yesterday?",
        "What did they do today?",
        "What do we do?",
        "What will they do tomorrow?"
      ],
      hint: "Remember to use the objects around you as clues."
    },
    {
      text: "I ___(1)___ my room every weekend. Last weekend, I ___(2)___ it thoroughly. My mom ___(3)___ happy with me. She ___(4)___ me a treat. Next weekend, I ___(5)___ it again.",
      wordBox: ["clean", "cleans", "cleaned", "is", "was", "give", "gave", "will clean"],
      answers: ["clean", "cleaned", "was", "gave", "will clean"],
      clueWords: [["room"], ["last weekend"], ["happy"], ["treat"], ["next weekend"]],
      hints: [
        "What do I do every weekend?",
        "What did I do last weekend?",
        "How did my mom feel?",
        "What did she do?",
        "What will I do next weekend?"
      ],
      hint: "Remember to use the objects around you as clues."
    },
    {
      text: "She ___(1)___ to school every day. Yesterday, she ___(2)___ late. Her teacher ___(3)___ her a note. She ___(4)___ it home. Tomorrow, she ___(5)___ early.",
      wordBox: ["go", "goes", "arrive", "arrived", "give", "gave", "take", "took", "will come"],
      answers: ["goes", "arrived", "gave", "took", "will come"],
      clueWords: [["every day"], ["late"], ["teacher"], ["home"], ["early"]],
      hints: [
        "What does she do every day?",
        "What happened yesterday?",
        "What did her teacher do?",
        "What did she do with the note?",
        "What will she do tomorrow?"
      ],
      hint: "Remember to use the objects around you as clues."
    },
    {
      text: "The cat ___(1)___ on the mat now. Last night, it ___(2)___ a mouse. It ___(3)___ proud of itself. We ___(4)___ it yesterday. Tomorrow, we ___(5)___ it again.",
      wordBox: ["sit", "sits", "catch", "caught", "feel", "felt", "see", "saw", "will watch"],
      answers: ["sits", "caught", "felt", "saw", "will watch"],
      clueWords: [["cat"], ["mouse"], ["proud"], ["yesterday"], ["tomorrow"]],
      hints: [
        "What is the cat doing now?",
        "What did it do last night?",
        "How did it feel?",
        "What did we do yesterday?",
        "What will we do tomorrow?"
      ],
      hint: "Remember to use the objects around you as clues."
    },
    {
      text: "We ___(1)___ a movie every weekend. Last weekend, we ___(2)___ a comedy. It ___(3)___ us laugh. Now, we ___(4)___ a new one. Next week, we ___(5)___ another.",
      wordBox: ["watch", "watches", "see", "saw", "make", "made", "choose", "chose", "will watch"],
      answers: ["watch", "saw", "made", "choose", "will watch"],
      clueWords: [["movie"], ["comedy"], ["laugh"], ["new"], ["next week"]],
      hints: [
        "What do we do every weekend?",
        "What did we do last weekend?",
        "What did the comedy do?",
        "What are we doing now?",
        "What will we do next week?"
      ],
      hint: "Remember to use the objects around you as clues."
    },
    {
      text: "The boy ___(1)___ soccer every afternoon. Yesterday, he ___(2)___ a goal. His team ___(3)___ the game. Now, he ___(4)___ with his friends. Tomorrow, they ___(5)___ again.",
      wordBox: ["play", "plays", "score", "scored", "win", "won", "talk", "talks", "will play"],
      answers: ["plays", "scored", "won", "talks", "will play"],
      clueWords: [["soccer"], ["goal"], ["game"], ["friends"], ["tomorrow"]],
      hints: [
        "What does the boy do every afternoon?",
        "What did he do yesterday?",
        "What did his team do?",
        "What is he doing now?",
        "What will they do tomorrow?"
      ],
      hint: "Remember to use the objects around you as clues."
    },
    {
      text: "The rain ___(1)___ every spring. Last year, it ___(2)___ heavily. The flowers ___(3)___ beautifully after that. Now, it ___(4)___ again. Next spring, it ___(5)___ more.",
      wordBox: ["fall", "falls", "rain", "rained", "grow", "grew", "drops", "will fall"],
      answers: ["falls", "rained", "grew", "drops", "will fall"],
      clueWords: [["spring"], ["heavily"], ["flowers"], ["again"], ["next spring"]],
      hints: [
        "What does the rain do every spring?",
        "What did it do last year?",
        "What did the flowers do?",
        "What is it doing now?",
        "What will it do next spring?"
      ],
      hint: "Remember to use the objects around you as clues."
    },
    {
      text: "I ___(1)___ breakfast every morning. Yesterday, I ___(2)___ pancakes. They ___(3)___ delicious. Now, I ___(4)___ cereal. Tomorrow, I ___(5)___ eggs.",
      wordBox: ["eat", "eats", "make", "made", "taste", "tasted", "have", "has", "will cook"],
      answers: ["eat", "made", "tasted", "have", "will cook"],
      clueWords: [["breakfast"], ["pancakes"], ["delicious"], ["cereal"], ["eggs"]],
      hints: [
        "What do I do every morning?",
        "What did I do last night?",
        "How were the pancakes?",
        "What am I doing now?",
        "What will I do tomorrow?"
      ],
      hint: "Remember to use the objects around you as clues."
    },
    {
      text: "The bus ___(1)___ passengers every day. Last night, it ___(2)___ late. The driver ___(3)___ sorry. Now, it ___(4)___ on time. Tomorrow, it ___(5)___ early.",
      wordBox: ["carry", "carries", "arrive", "arrived", "feel", "felt", "runs", "run", "will start"],
      answers: ["carries", "arrived", "felt", "runs", "will start"],
      clueWords: [["passengers"], ["late"], ["sorry"], ["on time"], ["early"]],
      hints: [
        "What does the bus do every day?",
        "What did it do last night?",
        "How did the driver feel?",
        "What is it doing now?",
        "What will it do tomorrow?"
      ],
      hint: "Remember to use the objects around you as clues."
    }
  ]
};

// ----------------------
// Global Game State
// ----------------------
let currentGrammarType = "prepositions";
let currentPassageIndex = 0;
let score = 0;
let stars = 0;
let hintUsage = {};
let selectedWord = null;
let timeLeft = 60;
let timerInterval = null;
let challengeMode = true; // true = Challenge Mode (timer enabled), false = Practice Mode.
let level = "Apprentice";

// ----------------------
// DOM Elements
// ----------------------
const grammarSelect = document.getElementById("grammar-type");
const passageText = document.getElementById("passage-text");
const wordBox = document.getElementById("word-box");
const feedbackDisplay = document.getElementById("feedback");
const nextPassageButton = document.getElementById("next-btn");
const prevPassageButton = document.getElementById("prev-btn");
const hintButton = document.getElementById("hint-btn");
const clearButton = document.getElementById("clear-btn");
const shareButton = document.getElementById("share-btn");
const readPassageButton = document.getElementById("read-passage-btn");
const toggleChallengeButton = document.getElementById("toggle-challenge");
const submitButton = document.getElementById("submit-btn");
const progressDisplay = document.getElementById("progress");
const scoreDisplay = document.getElementById("score");
const starsDisplay = document.getElementById("stars");
const timerDisplay = document.getElementById("timer");
const progressBar = document.getElementById("progress-bar");
const timerBar = document.getElementById("timer-bar");
const levelDisplay = document.getElementById("level");
const toggleThemeButton = document.getElementById("toggle-theme");
const timerSettingSelect = document.getElementById("timer-setting");
// Dyslexia-friendly font toggle
const toggleDyslexiaButton = document.getElementById("toggle-dyslexia");
toggleDyslexiaButton.addEventListener("click", () => {
  document.body.classList.toggle("dyslexia");
});

// ----------------------
// Guided Tutorial Modal (Onboarding)
// ----------------------
const tutorialModal = document.getElementById("tutorial-modal");
const tutorialCloseButton = document.getElementById("tutorial-close-btn");
if (!localStorage.getItem("hasSeenTutorial")) {
  tutorialModal.style.display = "flex";
} else {
  tutorialModal.style.display = "none";
}
tutorialCloseButton.addEventListener("click", () => {
  tutorialModal.style.display = "none";
  localStorage.setItem("hasSeenTutorial", "true");
  speak("Welcome to Grammar Cloze Adventure! Drag or tap a word to fill in the blanks. Then press submit to check your answers.");
});

// ----------------------
// Speech Synthesis Setup – UK Female Fallback
// ----------------------
const synth = window.speechSynthesis;
let voices = [];
let ukFemaleVoice = null;
function loadVoices() {
  voices = synth.getVoices();
  ukFemaleVoice = voices.find(voice =>
    voice.lang === "en-GB" &&
    (voice.name.toLowerCase().includes("female") || voice.name === "Samantha" || voice.name === "Kate")
  ) || voices.find(voice => voice.lang === "en-GB");
  console.log("Voices loaded:", voices.length);
}
loadVoices();
synth.onvoiceschanged = loadVoices;
function speak(text) {
  if (!window.speechSynthesis) {
    feedbackDisplay.textContent = "Speech synthesis not supported.";
    return;
  }
  if (synth.speaking) synth.cancel();
  loadVoices();
  if (!voices.length) {
    feedbackDisplay.textContent = "Voices not loaded.";
    return;
  }
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "en-GB";
  utterance.voice = ukFemaleVoice || voices[0];
  utterance.rate = 0.9;
  utterance.pitch = 1.1;
  synth.speak(utterance);
}

// ----------------------
// Utility Functions
// ----------------------
function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

function updateLevel() {
  if (score < 100) {
    level = "Apprentice";
  } else if (score < 200) {
    level = "Journeyman";
  } else {
    level = "Master Wizard";
  }
  levelDisplay.textContent = `Level: ${level}`;
}

function updateStatus() {
  scoreDisplay.textContent = `Score: ${score}`;
  starsDisplay.textContent = `Stars: ${stars}`;
  progressDisplay.textContent = `Progress: ${currentPassageIndex + 1} / ${window.passages[currentGrammarType].length}`;
  timerDisplay.textContent = `Time: ${timeLeft}s`;
  progressBar.style.width = `${((currentPassageIndex + 1) / window.passages[currentGrammarType].length) * 100}%`;
  if (challengeMode && timerSettingSelect.value !== "off") {
    timerBar.style.width = `${(timeLeft / parseInt(timerSettingSelect.value)) * 100}%`;
    timerBar.style.backgroundColor =
      timeLeft > (parseInt(timerSettingSelect.value) * 0.5)
        ? "#27ae60"
        : timeLeft > (parseInt(timerSettingSelect.value) * 0.2)
        ? "orange"
        : "red";
  } else {
    timerBar.style.width = "0%";
  }
  updateLevel();
}

function startTimer() {
  if (!challengeMode || timerSettingSelect.value === "off") return;
  clearInterval(timerInterval);
  timeLeft = parseInt(timerSettingSelect.value);
  timerInterval = setInterval(() => {
    timeLeft--;
    updateStatus();
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      feedbackDisplay.textContent = "Time's up! Please submit your answers.";
      speak("Time's up! Please submit your answers.");
    }
  }, 1000);
}

function fadeOutIn(element, callback) {
  element.style.transition = "opacity 0.5s ease";
  element.style.opacity = 0;
  setTimeout(() => {
    callback();
    element.style.opacity = 1;
  }, 500);
}

// ----------------------
// Narrative Intro Function
// ----------------------
function getNarrativeIntro(grammarType, index) {
  const story = {
    prepositions: [
      "Our wizard begins his quest to map the enchanted forest.",
      "With each step, he unlocks a new spell to navigate the realm."
    ],
    conjunctions: [
      "In a moment of choice, the wizard faces decisions that shape his destiny.",
      "Every connection he makes weaves his adventure tighter."
    ]
    // Add intros for other grammar types as needed.
  };
  const chapters = story[grammarType] || ["Begin your adventure!"];
  return `${chapters[index % chapters.length]} (Chapter ${index + 1} of ${window.passages[grammarType].length})`;
}

// ----------------------
// Display Passage
// ----------------------
function displayPassage() {
  clearInterval(timerInterval);
  hintUsage = {};
  selectedWord = null;
  const passage = window.passages[currentGrammarType]?.[currentPassageIndex];
  if (!passage) {
    passageText.innerHTML = "<p>Error: Passage not found.</p>";
    feedbackDisplay.textContent = "Error: Passage not found.";
    return;
  }
  if (!passage.text || !Array.isArray(passage.wordBox) || !Array.isArray(passage.answers) ||
      !Array.isArray(passage.clueWords) || !Array.isArray(passage.hints)) {
    passageText.innerHTML = "<p>Error: Invalid passage data.</p>";
    feedbackDisplay.textContent = "Error: Missing required passage data.";
    return;
  }

  const blanks = passage.text.match(/\d+/g) || [];
  if (passage.answers.length !== blanks.length ||
      passage.clueWords.length !== blanks.length ||
      passage.hints.length !== blanks.length) {
    feedbackDisplay.textContent = "Warning: Mismatch in blanks, answers, clues, or hints.";
  }

  let passageHTML = `<p class="narrative-intro">${getNarrativeIntro(currentGrammarType, currentPassageIndex)}</p>`;
  passageHTML += passage.text;

  if (passage.clueWords) {
    passage.clueWords.forEach((clues, index) => {
      const blankNum = index + 1;
      clues.forEach(clue => {
        const regex = new RegExp(`\\b${clue}\\b`, "gi");
        passageHTML = passageHTML.replace(regex,
          `<span class="keyword keyword-${blankNum}" title="Clue for blank ${blankNum}">${clue}</span>`);
      });
    });
  }
  passageHTML = passageHTML.replace(/___\((\d+)\)___/g, (_, num) => {
    return `<span class="blank-container">
              <span class="blank" data-blank="${num}" tabindex="0">_</span>
              <button class="hint-for-blank" data-blank="${num}" aria-label="Hint for blank ${num}">💡</button>
            </span>`;
  });

  fadeOutIn(passageText, () => {
    passageText.innerHTML = passageHTML;
    
    document.querySelectorAll(".blank-container").forEach(container => {
      container.addEventListener("dragover", handleContainerDragOver);
      container.addEventListener("dragleave", handleContainerDragLeave);
      container.addEventListener("drop", handleContainerDrop);
    });
    
    document.querySelectorAll(".blank").forEach(blank => {
      blank.addEventListener("click", () => {
        if (selectedWord && !blank.classList.contains("filled")) {
          placeWord(blank, selectedWord.textContent);
          selectedWord.classList.remove("selected");
          selectedWord = null;
          updateStatus();
        }
      });
      blank.addEventListener("keydown", (e) => {
        if (e.key === "Enter" && selectedWord && !blank.classList.contains("filled")) {
          placeWord(blank, selectedWord.textContent);
          selectedWord.classList.remove("selected");
          selectedWord = null;
          updateStatus();
        }
      });
    });
    
    document.querySelectorAll(".hint-for-blank").forEach(button => {
      button.addEventListener("click", function () {
        const blankNum = this.getAttribute("data-blank");
        const hintIndex = parseInt(blankNum) - 1;
        if (passage.hints && passage.hints[hintIndex]) {
          feedbackDisplay.textContent = passage.hints[hintIndex];
          feedbackDisplay.style.color = "blue";
          speak(passage.hints[hintIndex]);
          if (!hintUsage[blankNum] && challengeMode) {
            hintUsage[blankNum] = true;
            score = Math.max(0, score - 5);
            feedbackDisplay.textContent += " (-5 points for hint)";
            updateStatus();
          }
        }
        document.querySelectorAll(`.keyword-${blankNum}`).forEach(el => el.classList.add("highlighted"));
        setTimeout(() => {
          document.querySelectorAll(`.keyword-${blankNum}`).forEach(el => el.classList.remove("highlighted"));
        }, 3000);
      });
    });
  });
  
  wordBox.innerHTML = shuffle([...passage.wordBox])
    .map(word => `<div class="word" draggable="true" tabindex="0">${word}</div>`)
    .join("");
  
  document.querySelectorAll(".word").forEach(word => {
    word.addEventListener("dragstart", handleDragStart);
    word.addEventListener("dragend", handleDragEnd);
    word.addEventListener("click", () => {
      selectedWord = word;
      document.querySelectorAll(".word").forEach(w => w.classList.remove("selected"));
      word.classList.add("selected");
    });
    word.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        selectedWord = word;
        document.querySelectorAll(".word").forEach(w => w.classList.remove("selected"));
        word.classList.add("selected");
      }
    });
  });
  
  if (challengeMode) startTimer();
  updateStatus();
}

// ----------------------
// Drag-and-Drop Handlers
// ----------------------
function handleContainerDragOver(e) {
  e.preventDefault();
  e.currentTarget.classList.add("drag-over");
}
function handleContainerDragLeave(e) {
  e.currentTarget.classList.remove("drag-over");
}
function handleContainerDrop(e) {
  e.preventDefault();
  e.currentTarget.classList.remove("drag-over");
  const droppedWord = e.dataTransfer.getData("text/plain");
  const blank = e.currentTarget.querySelector(".blank");
  if (blank && !blank.classList.contains("filled")) {
    placeWord(blank, droppedWord);
    updateStatus();
  }
}

let draggedItem = null;
function handleDragStart(e) {
  draggedItem = e.target;
  e.dataTransfer.setData("text/plain", e.target.textContent);
  e.target.classList.add("dragging");
}
function handleDragEnd(e) {
  e.target.classList.remove("dragging");
  draggedItem = null;
}

// ----------------------
// Word Placement and Checking
// ----------------------
function placeWord(blank, word) {
  blank.textContent = word;
  blank.classList.add("filled");
  blank.style.transition = "transform 0.3s ease";
  blank.style.transform = "scale(1.2)";
  setTimeout(() => { blank.style.transform = "scale(1)"; }, 300);
  checkAnswer(blank);
}

function checkAnswer(blank) {
  const blankId = parseInt(blank.getAttribute("data-blank")) - 1;
  const userAnswer = blank.textContent.trim().toLowerCase();
  const correctAnswer = window.passages[currentGrammarType][currentPassageIndex].answers[blankId].toLowerCase();
  const explanations = {
    prepositions: [
      "'On' is correct because it shows the bag is on the table."
      // You can expand this array for each blank.
    ]
    // Add explanations for other grammar types similarly.
  };
  if (userAnswer === correctAnswer) {
    blank.classList.add("correct", "animate-correct");
    score += 10;
    stars += 1;
    feedbackDisplay.textContent =
      `Correct! ${explanations[currentGrammarType]?.[blankId] || "Well done!"}`;
    feedbackDisplay.style.color = "green";
    document.getElementById("correct-sound").play();
    speak(feedbackDisplay.textContent);
  } else {
    blank.classList.add("incorrect", "animate-incorrect");
    feedbackDisplay.textContent =
      `Incorrect! The correct answer is '${correctAnswer}'. ` +
      `${explanations[currentGrammarType]?.[blankId] || "Please check the context."}`;
    feedbackDisplay.style.color = "red";
    document.getElementById("incorrect-sound").play();
    speak(feedbackDisplay.textContent);
  }
  updateStatus();
}

// ----------------------
// Navigation & Controls
// ----------------------
grammarSelect.addEventListener("change", () => {
  currentGrammarType = grammarSelect.value;
  currentPassageIndex = 0;
  timeLeft = (timerSettingSelect.value === "off") ? 0 : parseInt(timerSettingSelect.value);
  displayPassage();
  updateStatus();
});

nextPassageButton.addEventListener("click", () => {
  clearInterval(timerInterval);
  currentPassageIndex++;
  if (currentPassageIndex >= window.passages[currentGrammarType].length) {
    feedbackDisplay.textContent = "Game Over! Final Score: " + score;
    speak("Game Over! Your final score is " + score);
    return;
  }
  timeLeft = (timerSettingSelect.value === "off") ? 0 : parseInt(timerSettingSelect.value);
  fadeOutIn(passageText, () => displayPassage());
  updateStatus();
});

prevPassageButton.addEventListener("click", () => {
  if (currentPassageIndex > 0) {
    currentPassageIndex--;
    timeLeft = (timerSettingSelect.value === "off") ? 0 : parseInt(timerSettingSelect.value);
    clearInterval(timerInterval);
    fadeOutIn(passageText, () => displayPassage());
    updateStatus();
  }
});

clearButton.addEventListener("click", () => {
  hintUsage = {};
  selectedWord = null;
  timeLeft = (timerSettingSelect.value === "off") ? 0 : parseInt(timerSettingSelect.value);
  clearInterval(timerInterval);
  displayPassage();
});

hintButton.addEventListener("click", () => {
  const passage = window.passages[currentGrammarType][currentPassageIndex];
  if (passage.hint) {
    feedbackDisplay.textContent = passage.hint;
    feedbackDisplay.style.color = "blue";
    speak(passage.hint);
  }
});

shareButton.addEventListener("click", () => {
  const shareData = {
    title: "Grammar Cloze Adventure",
    text: `I am a ${level} with a score of ${score}! Can you beat my score?`,
    url: window.location.href
  };
  if (navigator.share) {
    navigator.share(shareData).catch(err => console.error("Error sharing:", err));
  } else {
    alert("Sharing not supported.");
  }
});

readPassageButton.addEventListener("click", () => {
  const passage = window.passages[currentGrammarType][currentPassageIndex];
  if (passage && passage.text) {
    const textToSpeak = passage.text.replace(/\d+/g, "blank");
    speak(textToSpeak);
  } else {
    feedbackDisplay.textContent = "Error: No passage to read.";
  }
});

toggleChallengeButton.addEventListener("click", () => {
  challengeMode = !challengeMode;
  toggleChallengeButton.textContent = challengeMode ? "⏱️ Challenge" : "⏱️ Practice";
  if (challengeMode) startTimer();
  else {
    clearInterval(timerInterval);
    timerBar.style.width = "0%";
  }
  updateStatus();
});

submitButton.addEventListener("click", () => {
  const blanks = document.querySelectorAll(".blank");
  let allFilled = true;
  blanks.forEach(blank => {
    if (!blank.classList.contains("filled")) allFilled = false;
  });
  if (!allFilled) {
    feedbackDisplay.textContent = "Please complete all blanks before submitting.";
    feedbackDisplay.style.color = "red";
    speak("Please complete all blanks before submitting.");
    return;
  }
  let correctCount = 0;
  blanks.forEach(blank => {
    if (blank.classList.contains("correct")) correctCount++;
  });
  const rewardMessage = `Review: You got ${correctCount} out of ${blanks.length} correct.`;
  feedbackDisplay.textContent = rewardMessage;
  speak(rewardMessage);
  if (challengeMode && Object.keys(hintUsage).length === 0) {
    score += 20;
    feedbackDisplay.innerHTML += ' <span class="bonus">+20!</span>';
    speak("Bonus! 20 extra points for no hints.");
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key.toLowerCase() === "h") {
    hintButton.click();
  } else if (e.key.toLowerCase() === "n") {
    nextPassageButton.click();
  }
});

// ----------------------
// Initialize the Game
// ----------------------
displayPassage();
updateStatus();
updateStatus();
