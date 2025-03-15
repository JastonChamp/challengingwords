"use strict";

// =======================
// Full Passages Data
// =======================
const passages = {
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
      wordBox: ["on", "in", "under", "around", "at", "by", "through"],
      answers: ["on", "in", "under", "around", "at"],
      clueWords: [["sofa"], ["kitchen"], ["rug"], ["garden"], ["table"]],
      hints: [
        "Which preposition shows Tom’s position on the sofa?",
        "Where is his mom cooking?",
        "Where should the dog sleep?",
        "How did his sister move in the garden?",
        "Where do they eat dinner?"
      ],
      hint: "Remember to use the objects around you as clues."
    },
    {
      text: "The ball rolled ___(1)___ the hill and stopped ___(2)___ a tree. A squirrel ran ___(3)___ the tree and hid ___(4)___ the branches. The children played ___(5)___ the park all day.",
      wordBox: ["down", "by", "up", "in", "around", "under", "through"],
      answers: ["down", "by", "up", "in", "around"],
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
      wordBox: ["in", "on", "at", "by", "near", "above", "below"],
      answers: ["in", "on", "at", "near", "above"],
      clueWords: [["teacher"], ["whiteboard"], ["desks"], ["poster"], ["door"]],
      hints: [
        "Where is the teacher located?",
        "Where does she write?",
        "How do the students sit?",
        "Where is the poster hung?",
        "Where is the clock relative to the door?"
      ],
      hint: "Remember to use the objects around you as clues."
    },
    {
      text: "The fish swam ___(1)___ the pond. A frog jumped ___(2)___ a lily pad. The ducks floated ___(3)___ the water. A boy stood ___(4)___ the bridge and watched. His friend sat ___(5)___ the grass nearby.",
      wordBox: ["in", "on", "near", "by", "under", "around", "through"],
      answers: ["in", "on", "near", "by", "under"],
      clueWords: [["fish"], ["lily pad"], ["ducks"], ["bridge"], ["grass"]],
      hints: [
        "Where does the fish swim?",
        "Where did the frog jump?",
        "Where did the ducks float?",
        "Where did the boy stand?",
        "Where did his friend sit?"
      ],
      hint: "Remember to use the objects around you as clues."
    },
    {
      text: "The kite flew ___(1)___ the sky. The boy held the string ___(2)___ his hands. The wind blew ___(3)___ the trees. The kite soared ___(4)___ the clouds. His sister cheered ___(5)___ the ground.",
      wordBox: ["in", "by", "through", "above", "on", "under", "around"],
      answers: ["in", "by", "through", "above", "on"],
      clueWords: [["kite"], ["string"], ["wind"], ["clouds"], ["ground"]],
      hints: [
        "Which preposition best shows the kite’s position?",
        "How did the boy hold the string?",
        "How does the wind move?",
        "Where does the kite soar?",
        "Where is his sister when she cheers?"
      ],
      hint: "Remember to use the objects around you as clues."
    },
    {
      text: "The book is ___(1)___ the shelf. A pen rolled ___(2)___ the desk. The bag is ___(3)___ the chair. The teacher walked ___(4)___ the room. A picture hangs ___(5)___ the wall.",
      wordBox: ["on", "under", "near", "around", "above", "by", "in"],
      answers: ["on", "under", "near", "around", "above"],
      clueWords: [["book"], ["pen"], ["bag"], ["teacher"], ["picture"]],
      hints: [
        "Which preposition shows where the book is?",
        "Where did the pen roll?",
        "Where is the bag relative to the chair?",
        "How did the teacher move?",
        "Where is the picture hung?"
      ],
      hint: "Remember to use the objects around you as clues."
    },
    {
      text: "The bus stopped ___(1)___ the bus stop. People waited ___(2)___ the shelter. The driver sat ___(3)___ the wheel. A girl looked ___(4)___ her phone. The bus moved ___(5)___ the road.",
      wordBox: ["at", "in", "by", "on", "along", "under", "near"],
      answers: ["at", "in", "by", "on", "along"],
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
      wordBox: ["up", "on", "to", "by", "near", "under", "around"],
      answers: ["up", "on", "to", "by", "near"],
      clueWords: [["monkey"], ["branches"], ["bird"], ["zookeeper"], ["fence"]],
      hints: [
        "Which preposition shows the direction of the monkey’s climb?",
        "How did the monkey swing?",
        "Where did the bird fly?",
        "Where did the zookeeper stand?",
        "Where did the children watch?"
      ],
      hint: "Remember to use the objects around you as clues."
    },
    {
      text: "The plate is ___(1)___ the table. A spoon fell ___(2)___ the floor. The soup is ___(3)___ the bowl. Mother cooked ___(4)___ the stove. We ate ___(5)___ the dining room.",
      wordBox: ["on", "under", "in", "by", "at", "around"],
      answers: ["on", "under", "in", "by", "at"],
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
      wordBox: ["in", "on", "by", "into", "until", "around"],
      answers: ["in", "on", "by", "into", "until"],
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
      wordBox: ["on", "under", "near", "by", "through", "around"],
      answers: ["on", "under", "near", "by", "through"],
      clueWords: [["rain"], ["cat"], ["puddle"], ["umbrella"], ["dog"]],
      hints: [
        "Where does the rain fall?",
        "Where does the cat sleep?",
        "Where is the puddle formed?",
        "Where did the girl stand?",
        "How did the dog run relative to the rain?"
      ],
      hint: "Remember to use the objects around you as clues."
    },
    {
      text: "The flag is ___(1)___ the pole. The wind blew ___(2)___ the school. The students stood ___(3)___ the field. A bell rang ___(4)___ the building. They walked ___(5)___ their classrooms.",
      wordBox: ["on", "around", "in", "by", "to", "under"],
      answers: ["on", "around", "in", "by", "to"],
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
      wordBox: ["on", "in", "by", "above", "under", "around", "near"],
      answers: ["on", "in", "by", "above", "under"],
      clueWords: [["boat"], ["fish"], ["bank"], ["bird"], ["net"]],
      hints: [
        "Which preposition best describes where the boat floats?",
        "Where does the fish swim?",
        "Where does the man fish?",
        "Where did the bird fly?",
        "Where is the net placed?"
      ],
      hint: "Remember to use the objects around you as clues."
    },
    {
      text: "The plane flew ___(1)___ the clouds. The pilot sat ___(2)___ the cockpit. Passengers looked ___(3)___ the windows. The luggage was ___(4)___ the seats. The airport was ___(5)___ the city.",
      wordBox: ["through", "in", "by", "under", "near", "on"],
      answers: ["through", "in", "by", "under", "near"],
      clueWords: [["plane"], ["pilot"], ["passengers"], ["luggage"], ["airport"]],
      hints: [
        "Which word shows how the plane moved through the clouds?",
        "Where does the pilot sit?",
        "How do passengers look out?",
        "Where is the luggage located?",
        "Where is the airport relative to the city?"
      ],
      hint: "Remember to use the objects around you as clues."
    }
  ],
  conjunctions: [
    {
      text: "Tom wanted to go outside ___(1)___ it was raining. He waited ___(2)___ the rain stopped ___(3)___ then ran to the park. He could play ___(4)___ read a book, ___(5)___ he chose to play.",
      wordBox: ["but", "until", "and", "or", "so", "although"],
      answers: ["but", "until", "and", "or", "so"],
      clueWords: [["outside"], ["rain"], ["park"], ["play"], ["chose"]],
      hints: [
        "Which conjunction shows contrast?",
        "How long did he wait?",
        "What happened after the rain stopped?",
        "What are his two options?",
        "Which word shows the result?"
      ],
      hint: "Remember to use the objects around you as clues."
    },
    {
      text: "I like apples ___(1)___ bananas. My sister likes oranges ___(2)___ grapes. We both like strawberries ___(3)___ they are sweet. Sometimes we eat fruit ___(4)___ breakfast ___(5)___ for a snack.",
      wordBox: ["and", "but", "or", "because", "so", "although", "after"],
      answers: ["and", "or", "because", "for", "after"],
      clueWords: [["apples"], ["oranges"], ["strawberries"], ["breakfast"], ["snack"]],
      hints: [
        "Which conjunction adds ideas?",
        "Which indicates an alternative?",
        "Which gives the reason?",
        "When is fruit eaten?",
        "Which shows a choice?"
      ],
      hint: "Remember to use the objects around you as clues."
    },
    {
      text: "The dog barked loudly ___(1)___ the cat meowed softly. They were hungry ___(2)___ they wanted food. The owner fed them ___(3)___ they stopped making noise. Later, the dog slept ___(4)___ the cat played. They are friends ___(5)___ they sometimes fight.",
      wordBox: ["but", "so", "and", "while", "although"],
      answers: ["but", "so", "and", "while", "although"],
      clueWords: [["dog"], ["hungry"], ["fed"], ["cat"], ["fight"]],
      hints: [
        "Which conjunction contrasts the sounds?",
        "What is the reason?",
        "What connects the feeding?",
        "How are the actions related?",
        "Which shows unexpected contrast?"
      ],
      hint: "Remember to use the objects around you as clues."
    },
    {
      text: "I can go to the park ___(1)___ stay home. If I go to the park, I will play ___(2)___ my friends. If I stay home, I will read ___(3)___ watch TV. I think I will go ___(4)___ it is sunny. My mom said I can go ___(5)___ I finish my homework.",
      wordBox: ["or", "and", "but", "because", "so", "if", "unless"],
      answers: ["or", "and", "but", "because", "if"],
      clueWords: [["park"], ["play"], ["read"], ["sunny"], ["homework"]],
      hints: [
        "Which word indicates a choice?",
        "What connects playing with friends?",
        "What offers an alternative?",
        "What gives the reason for going out?",
        "What condition must be met?"
      ],
      hint: "Remember to use the objects around you as clues."
    },
    {
      text: "The children were tired ___(1)___ they kept playing. They wanted to win ___(2)___ they tried hard. The coach cheered ___(3)___ they scored a goal. After the game, they were happy ___(4)___ exhausted. They celebrated ___(5)___ they went home.",
      wordBox: ["but", "so", "when", "although", "before"],
      answers: ["but", "so", "when", "although", "before"],
      clueWords: [["children"], ["win"], ["cheered"], ["happy"], ["home"]],
      hints: [
        "Which conjunction shows contrast?",
        "What is the result?",
        "When did the coach cheer?",
        "Which contrasts happiness with exhaustion?",
        "What indicates sequence?"
      ],
      hint: "Remember to use the objects around you as clues."
    },
    {
      text: "The sky was dark ___(1)___ it might rain. I took an umbrella ___(2)___ I didn’t want to get wet. It started raining ___(3)___ I reached the bus stop. I waited there ___(4)___ the rain stopped. I was glad ___(5)___ I stayed dry.",
      wordBox: ["and", "because", "when", "until", "so", "although"],
      answers: ["and", "because", "when", "until", "so"],
      clueWords: [["sky"], ["umbrella"], ["raining"], ["bus stop"], ["dry"]],
      hints: [
        "Which links the dark sky with rain?",
        "Why did you take an umbrella?",
        "When did it start raining?",
        "How long did you wait?",
        "What explains your gladness?"
      ],
      hint: "Remember to use the objects around you as clues."
    },
    {
      text: "I wanted to eat rice ___(1)___ noodles. My brother chose noodles ___(2)___ he likes them more. We ate together ___(3)___ we shared the food. It was spicy ___(4)___ tasty. We drank water ___(5)___ we finished.",
      wordBox: ["or", "because", "and", "but", "after", "although", "for"],
      answers: ["or", "because", "and", "but", "after"],
      clueWords: [["rice"], ["noodles"], ["together"], ["spicy"], ["water"]],
      hints: [
        "Which word shows a choice?",
        "Why did your brother choose noodles?",
        "How did you eat together?",
        "Which contrasts spiciness and tastiness?",
        "When did you drink water?"
      ],
      hint: "Remember to use the objects around you as clues."
    },
    {
      text: "The room was messy ___(1)___ we cleaned it. We worked fast ___(2)___ we wanted to play. Mom helped us ___(3)___ we finished quickly. We were tired ___(4)___ happy. We rested ___(5)___ everything was done.",
      wordBox: ["so", "because", "and", "but", "after", "although"],
      answers: ["so", "because", "and", "but", "after"],
      clueWords: [["room"], ["fast"], ["mom"], ["tired"], ["done"]],
      hints: [
        "Which word shows the result?",
        "Why did you work fast?",
        "Who helped you?",
        "Which contrasts tiredness with happiness?",
        "When did you rest?"
      ],
      hint: "Remember to use the objects around you as clues."
    },
    {
      text: "The bell rang ___(1)___ we went to class. We studied math ___(2)___ science. I like math ___(3)___ it is easy. Science is fun ___(4)___ challenging. We worked hard ___(5)___ we wanted good grades.",
      wordBox: ["and", "but", "because", "although", "so", "when"],
      answers: ["and", "but", "because", "although", "so"],
      clueWords: [["bell"], ["math"], ["easy"], ["challenging"], ["grades"]],
      hints: [
        "Which connects the events?",
        "What contrasts the subjects?",
        "Why do you like math?",
        "How is science challenging?",
        "What motivates you?"
      ],
      hint: "Remember to use the objects around you as clues."
    },
    {
      text: "I can read a book ___(1)___ play a game. I chose a book ___(2)___ I like stories. It was quiet ___(3)___ I could focus. My brother played ___(4)___ I read. We had fun ___(5)___ we did different things.",
      wordBox: ["or", "because", "so", "while", "although"],
      answers: ["or", "because", "so", "while", "although"],
      clueWords: [["book"], ["stories"], ["quiet"], ["brother"], ["fun"]],
      hints: [
        "Which word indicates a choice?",
        "Why did you choose a book?",
        "What is the effect of a quiet environment?",
        "What did your brother do while you read?",
        "How do you describe your experience?"
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
        "Which verb form matches 'dog'?",
        "Which form for 'cats'?",
        "What does each child require?",
        "How should the team be treated?",
        "What form for 'birds'?"
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
        "What do plural students do?",
        "Which form for 'teacher'?",
        "How are the books arranged?",
        "What verb agrees with 'bird'?"
      ],
      hint: "Remember to use the objects around you as clues."
    },
    {
      text: "The flowers ___(1)___ beautifully in the garden. Each flower ___(2)___ a different color. The bees ___(3)___ around the flowers. The gardener ___(4)___ the plants every day. Many insects ___(5)___ in the garden.",
      wordBox: ["bloom", "blooms", "have", "has", "buzz", "buzzes", "water", "waters", "live", "lives"],
      answers: ["bloom", "has", "buzz", "waters", "live"],
      clueWords: [["flowers"], ["flower"], ["bees"], ["gardener"], ["insects"]],
      hints: [
        "Which verb form for plural 'flowers'?",
        "Which fits 'flower'?",
        "What do bees do?",
        "Which form for the gardener?",
        "How are the insects treated?"
      ],
      hint: "Remember to use the objects around you as clues."
    },
    {
      text: "The car ___(1)___ fast on the road. The drivers ___(2)___ carefully. Each passenger ___(3)___ a seatbelt. The buses ___(4)___ slowly in traffic. The motorcycle ___(5)___ loudly.",
      wordBox: ["go", "goes", "drive", "drives", "wear", "wears", "move", "moves", "roar", "roars"],
      answers: ["goes", "drive", "wears", "move", "roars"],
      clueWords: [["car"], ["drivers"], ["passenger"], ["buses"], ["motorcycle"]],
      hints: [
        "Which verb agrees with 'car'?",
        "Which form for 'drivers'?",
        "What does each passenger need?",
        "How are the buses treated?",
        "Which fits 'motorcycle'?"
      ],
      hint: "Remember to use the objects around you as clues."
    },
    {
      text: "The baby ___(1)___ in the crib. The parents ___(2)___ the baby. Each toy ___(3)___ a different sound. The children ___(4)___ with the toys. The dog ___(5)___ the children play.",
      wordBox: ["sleep", "sleeps", "watch", "watches", "make", "makes", "play", "plays", "watch", "watches"],
      answers: ["sleeps", "watch", "makes", "play", "watches"],
      clueWords: [["baby"], ["parents"], ["toy"], ["children"], ["dog"]],
      hints: [
        "Which fits 'baby'?",
        "What do parents do?",
        "How does each toy behave?",
        "What do the children do?",
        "Which verb agrees with 'dog'?"
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
        "Which pronoun shows ownership for Mary?",
        "Who did Mary ask?",
        "Who doesn’t know where it is?",
        "Who looked for the book?",
        "Who eventually found it?"
      ],
      hint: "Remember to use the objects around you as clues."
    },
    {
      text: "The cat chased ___(1)___ tail. ___(2)___ was very playful. The dog watched ___(3)___ and barked. ___(4)___ both ran around the yard. Later, ___(5)___ rested under the tree.",
      wordBox: ["it", "its", "he", "him", "they", "them", "she"],
      answers: ["its", "it", "it", "they", "them"],
      clueWords: [["cat"], ["tail"], ["dog"], ["both"], ["tree"]],
      hints: [
        "Which pronoun shows possession for the cat?",
        "How is the tail described?",
        "What did the dog do?",
        "Who ran around?",
        "Who eventually rested?"
      ],
      hint: "Remember to use the objects around you as clues."
    },
    {
      text: "Tom and Jerry are friends. ___(1)___ play together every day. ___(2)___ share their toys. Sometimes, ___(3)___ argue, but ___(4)___ always make up. ___(5)___ are best friends.",
      wordBox: ["They", "He", "She", "It", "We", "You", "Them"],
      answers: ["They", "They", "They", "They", "They"],
      clueWords: [["Tom"], ["Jerry"], ["toys"], ["argue"], ["friends"]],
      hints: [
        "Which pronoun refers to Tom and Jerry?",
        "What do they do together?",
        "What happens sometimes?",
        "What is their resolution?",
        "How are they described as friends?"
      ],
      hint: "Remember to use the objects around you as clues."
    },
    {
      text: "The teacher gave ___(1)___ a test. ___(2)___ was difficult, but ___(3)___ all tried their best. After the test, ___(4)___ graded the papers. ___(5)___ were proud of their work.",
      wordBox: ["us", "it", "they", "she", "he", "them", "we"],
      answers: ["us", "it", "they", "she", "them"],
      clueWords: [["teacher"], ["test"], ["tried"], ["graded"], ["proud"]],
      hints: [
        "Who did the teacher give the test to?",
        "How was the test described?",
        "What did everyone do?",
        "Who graded the papers?",
        "How did they feel?"
      ],
      hint: "Remember to use the objects around you as clues."
    },
    {
      text: "The bird built ___(1)___ nest in the tree. ___(2)___ laid eggs in ___(3)___ nest. The chicks hatched and ___(4)___ chirped loudly. The mother bird fed ___(5)___ worms.",
      wordBox: ["it", "its", "she", "her", "they", "them", "he"],
      answers: ["its", "she", "her", "they", "them"],
      clueWords: [["bird"], ["nest"], ["eggs"], ["chicks"], ["worms"]],
      hints: [
        "Which pronoun shows possession for the nest?",
        "Who laid the eggs?",
        "Whose nest is it?",
        "How did the chicks behave?",
        "What did the mother bird feed them?"
      ],
      hint: "Remember to use the objects around you as clues."
    },
    {
      text: "The boy dropped ___(1)___ pencil. ___(2)___ picked it up quickly. The girl next to ___(3)___ smiled. ___(4)___ both laughed about it. Later, ___(5)___ gave her a new pencil.",
      wordBox: ["he", "him", "his", "she", "them", "they"],
      answers: ["his", "he", "her", "they", "she"],
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
      answers: ["its", "it", "it", "they", "their"],
      clueWords: [["dog"], ["park"], ["children"], ["fun"], ["hands"]],
      hints: [
        "Which pronoun shows possession for the tail?",
        "What did it do?",
        "What did the children do?",
        "How did everyone have fun?",
        "What did the dog do to the hands?"
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
        "How did it run?",
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
      text: "The ___(1)___ kite flew ___(2)___ in the sky. The boy pulled the string ___(3)___ . It rose ___(4)___ above the trees. He smiled ___(5)___ at his success.",
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
        "How did it run?",
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
        "How much effort did they put in?"
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
      text: "The ___(1)___ kite flew ___(2)___ in the sky. The boy pulled the string ___(3)___ . It rose ___(4)___ above the trees. He smiled ___(5)___ at his success.",
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
    }
  ]
};

// =======================
// Global Game State
// =======================
let currentGrammarType = "prepositions";
let currentPassageIndex = 0;
let score = 0;
let stars = 0;
let hintUsage = {};
let selectedWord = null;
let timeLeft = 60;
let timerInterval = null;
let challengeMode = true;
let badgesEarned = 0;

// =======================
// DOM Elements
// =======================
let grammarSelect = document.getElementById("grammar-type");
let passageText = document.getElementById("passage-text");
let wordBox = document.getElementById("word-box");
const feedbackDisplay = document.getElementById("feedback");
const nextPassageButton = document.getElementById("next-btn");
const prevPassageButton = document.getElementById("prev-btn");
const hintButton = document.getElementById("hint-btn");
const clearButton = document.getElementById("clear-btn");
const progressDisplay = document.getElementById("progress");
const scoreDisplay = document.getElementById("score");
const starsDisplay = document.getElementById("lives");
const progressBar = document.getElementById("progress-bar");
const highlightCluesButton = document.getElementById("highlight-clues-btn");
const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
const fullscreenBtn = document.getElementById("fullscreen-btn");
const speakPassageBtn = document.getElementById("speak-passage-btn");
const timerContainer = document.getElementById("timer-container");
const timerBar = document.getElementById("timer-bar");
const grammarWizard = document.getElementById("grammar-wizard");
const wizardMessage = document.getElementById("wizard-message");
const badgeDisplay = document.getElementById("badge-display");
const storyProgress = document.getElementById("story-progress");
const voiceCommandBtn = document.getElementById("voice-command-btn");
const correctSound = document.getElementById("correct-sound");
const incorrectSound = document.getElementById("incorrect-sound");

// =======================
// Speech Synthesis Setup
// =======================
const synth = window.speechSynthesis;
let voices = [];
let ukFemaleVoice = null;
function loadVoices() {
  voices = synth.getVoices();
  ukFemaleVoice = voices.find(voice =>
    voice.lang === "en-GB" &&
    (voice.name.includes("Female") || voice.name.includes("Google UK English Female") || voice.name === "Samantha" || voice.name === "Kate")
  ) || voices.find(voice => voice.lang === "en-GB");
  console.log("Voices loaded:", voices.length);
}
loadVoices();
synth.onvoiceschanged = loadVoices;
function speak(text) {
  if (!window.speechSynthesis) {
    feedbackDisplay.textContent = "Speech synthesis not supported in this browser.";
    console.error("SpeechSynthesis not supported");
    return;
  }
  if (synth.speaking) synth.cancel();
  loadVoices();
  if (!voices.length) {
    feedbackDisplay.textContent = "Speech unavailable. Voices not loaded.";
    return;
  }
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "en-GB";
  if (ukFemaleVoice) utterance.voice = ukFemaleVoice;
  utterance.rate = 0.9;
  utterance.pitch = 1.1;
  synth.speak(utterance);
  console.log("Speaking text:", text);
}

// =======================
// Voice Recognition Setup
// =======================
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = null;
if (SpeechRecognition) {
  recognition = new SpeechRecognition();
  recognition.continuous = false;
  recognition.lang = "en-US";
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;
  recognition.onresult = (event) => {
    const command = event.results[0][0].transcript.toLowerCase();
    console.log("Voice command detected:", command);
    document.querySelectorAll(".word").forEach(word => {
      if (command.includes(word.textContent.toLowerCase())) {
        selectedWord = word;
        document.querySelectorAll(".word").forEach(w => w.classList.remove("selected"));
        word.classList.add("selected");
        speak(`Selected word: ${word.textContent}`);
      }
    });
    if (command.includes("place") || command.includes("put")) {
      const blanks = document.querySelectorAll(".blank:not(.filled)");
      if (selectedWord && blanks.length > 0) {
        placeWord(blanks[0], selectedWord.textContent);
        selectedWord.remove();
        selectedWord = null;
        updateStatus();
      }
    }
  };
  recognition.onerror = (event) => {
    console.error("Speech recognition error:", event.error);
    feedbackDisplay.textContent = "Voice command error. Please try again.";
  };
  voiceCommandBtn.addEventListener("click", () => {
    recognition.start();
    feedbackDisplay.textContent = "Listening for voice command...";
    menu.classList.add("hidden");
  });
} else {
  voiceCommandBtn.style.display = "none";
  console.log("Speech Recognition not supported in this browser.");
}

// =======================
// Onboarding
// =======================
if (!localStorage.getItem("hasSeenTutorial")) {
  const welcomeMessage = "Welcome to Grammar Cloze Adventure! Help the Grammar Wizard save the Kingdom by filling in the blanks. Drag, tap, or use voice commands to select a word!";
  feedbackDisplay.textContent = welcomeMessage;
  localStorage.setItem("hasSeenTutorial", "true");
  speak(welcomeMessage);
  grammarWizard.classList.remove("hidden");
  wizardMessage.textContent = "Let's get started!";
}

// =======================
// Utility Functions
// =======================
function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

function updateStatus() {
  scoreDisplay.textContent = `Score: ${score}`;
  starsDisplay.textContent = `Stars: ${stars}`;
  const total = passages[currentGrammarType].length;
  progressDisplay.textContent = `Progress: ${currentPassageIndex + 1} / ${total}`;
  progressBar.style.width = `${((currentPassageIndex + 1) / total) * 100}%`;
  if (challengeMode) {
    timerBar.style.width = `${(timeLeft / 60) * 100}%`;
    timerBar.style.backgroundColor = timeLeft > 30 ? "green" : timeLeft > 10 ? "orange" : "red";
  } else {
    timerBar.style.width = "0%";
  }
  const chapters = [
    { text: "The Kingdom is in danger!", bg: "castle-bg.png" },
    { text: "The Wizard’s magic grows!", bg: "forest-bg.png" },
    { text: "Victory is near!", bg: "victory-bg.png" }
  ];
  const chapter = chapters[Math.min(Math.floor(stars / 5), chapters.length - 1)];
  storyProgress.textContent = `Story: ${chapter.text}`;
  document.body.style.backgroundImage = `url(${chapter.bg})`;
}

function startTimer() {
  if (!challengeMode) return;
  clearInterval(timerInterval);
  timeLeft = 60;
  timerInterval = setInterval(() => {
    timeLeft--;
    updateStatus();
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      feedbackDisplay.textContent = "Time's up! Moving to next passage.";
      speak("Time's up! Moving to next passage.");
      setTimeout(() => nextPassageButton.click(), 1000);
    }
  }, 1000);
}

// =======================
// Display Passage & Attach Events
// =======================
function displayPassage() {
  clearInterval(timerInterval);
  hintUsage = {};
  selectedWord = null;
  const passage = passages[currentGrammarType]?.[currentPassageIndex];
  if (!passage) {
    passageText.innerHTML = "<p>Error: Passage not found.</p>";
    feedbackDisplay.textContent = "Error: Passage not found.";
    return;
  }
  if (
    !passage.text ||
    !Array.isArray(passage.wordBox) ||
    !Array.isArray(passage.answers) ||
    !Array.isArray(passage.clueWords) ||
    !Array.isArray(passage.hints)
  ) {
    passageText.innerHTML = "<p>Error: Invalid passage data.</p>";
    feedbackDisplay.textContent = "Error: Missing required passage data.";
    return;
  }
  let passageHTML = passage.text;
  if (passage.clueWords) {
    passage.clueWords.forEach((clues, index) => {
      const blankNum = index + 1;
      clues.forEach(clue => {
        const regex = new RegExp(`\\b${clue}\\b`, "gi");
        passageHTML = passageHTML.replace(regex, `<span class="keyword keyword-${blankNum}" title="Clue for blank ${blankNum}">${clue}</span>`);
      });
    });
  }
  passageHTML = passageHTML.replace(/___\(\d+\)___/g, (match, num) => {
    return `<span class="blank" data-blank="${num}" tabindex="0" role="button">&nbsp;<button class="hint-for-blank" aria-label="Hint for blank ${num}" title="Hint">💡</button></span>`;
  });
  // Replace old content with new content to remove previous listeners.
  const newPassageText = passageText.cloneNode(false);
  const newWordBox = wordBox.cloneNode(false);
  passageText.parentNode.replaceChild(newPassageText, passageText);
  wordBox.parentNode.replaceChild(newWordBox, wordBox);
  passageText = newPassageText;
  wordBox = newWordBox;
  passageText.innerHTML = passageHTML;
  wordBox.innerHTML = shuffle([...passage.wordBox])
    .map(word => `<div class="word" draggable="true" tabindex="0" role="button">${word}</div>`)
    .join("");
  // Attach events to blanks.
  document.querySelectorAll(".blank").forEach(blank => {
    blank.addEventListener("dragover", handleDragOver);
    blank.addEventListener("dragleave", handleDragLeave);
    blank.addEventListener("drop", handleDrop);
    blank.addEventListener("click", () => {
      if (selectedWord && !blank.classList.contains("filled")) {
        placeWord(blank, selectedWord.textContent);
        selectedWord.remove();
        selectedWord = null;
        updateStatus();
      }
    });
    blank.addEventListener("keydown", (e) => {
      if (e.key === "Enter" && selectedWord && !blank.classList.contains("filled")) {
        placeWord(blank, selectedWord.textContent);
        selectedWord.remove();
        selectedWord = null;
        updateStatus();
      }
    });
  });
  // Attach events to words.
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
  // Attach events to hint buttons.
  document.querySelectorAll(".hint-for-blank").forEach(button => {
    button.addEventListener("click", function () {
      const blankNum = this.parentElement.getAttribute("data-blank");
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
      document.querySelectorAll(".keyword").forEach(el => el.classList.remove("highlighted"));
      document.querySelectorAll(`.keyword-${blankNum}`).forEach(el => el.classList.add("highlighted"));
      setTimeout(() => {
        document.querySelectorAll(".keyword").forEach(el => el.classList.remove("highlighted"));
      }, 3000);
    });
  });
  if (challengeMode) startTimer();
  updateStatus();
}

// =======================
// Drag-and-Drop Handlers
// =======================
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
function handleDragOver(e) {
  e.preventDefault();
  e.currentTarget.classList.add("drag-over");
}
function handleDragLeave(e) {
  e.currentTarget.classList.remove("drag-over");
}
function handleDrop(e) {
  e.preventDefault();
  e.currentTarget.classList.remove("drag-over");
  const droppedWord = e.dataTransfer.getData("text/plain");
  if (e.currentTarget.classList.contains("blank") && !e.currentTarget.classList.contains("filled")) {
    placeWord(e.currentTarget, droppedWord);
    if (draggedItem) {
      draggedItem.remove();
    }
    updateStatus();
  }
}

function placeWord(blank, word) {
  blank.textContent = word;
  blank.classList.add("filled", "slide-in");
  checkAnswer(blank);
}

function showConfetti() {
  confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
}

function checkAnswer(blank) {
  const blankId = parseInt(blank.getAttribute("data-blank"));
  const userAnswer = blank.textContent.trim().toLowerCase();
  const correctAnswer = passages[currentGrammarType][currentPassageIndex].answers[blankId - 1].toLowerCase();
  if (userAnswer === correctAnswer) {
    blank.classList.add("correct");
    score += 10;
    stars += 1;
    feedbackDisplay.textContent = "Correct! Great job!";
    feedbackDisplay.style.color = "green";
    speak("Correct! Great job!");
    correctSound.play();
    showConfetti();
    grammarWizard.classList.remove("hidden");
    wizardMessage.textContent = "Well done! You're saving the Kingdom!";
    setTimeout(() => grammarWizard.classList.add("hidden"), 3000);
  } else {
    blank.classList.add("incorrect");
    feedbackDisplay.textContent = "Incorrect! Try again.";
    feedbackDisplay.style.color = "red";
    speak("Incorrect! Try again.");
    incorrectSound.play();
    grammarWizard.classList.remove("hidden");
    wizardMessage.textContent = "Oops! Let's try again!";
    setTimeout(() => grammarWizard.classList.add("hidden"), 3000);
  }
  updateStatus();
}

// =======================
// Menu and Fullscreen Controls
// =======================
menuBtn.addEventListener("click", () => {
  const isHidden = menu.classList.toggle("hidden");
  menu.setAttribute("aria-hidden", isHidden);
});
fullscreenBtn.addEventListener("click", () => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch(err => console.error(err));
    document.body.classList.add("fullscreen");
    fullscreenBtn.textContent = "";
  } else {
    document.exitFullscreen();
    document.body.classList.remove("fullscreen");
    fullscreenBtn.textContent = "⤢";
  }
});

// =======================
// Challenge Mode Toggle
// =======================
document.getElementById("toggle-challenge").addEventListener("click", () => {
  challengeMode = !challengeMode;
  if (challengeMode) {
    startTimer();
    feedbackDisplay.textContent = "Challenge Mode ON";
  } else {
    clearInterval(timerInterval);
    timerBar.style.width = "0%";
    feedbackDisplay.textContent = "Challenge Mode OFF";
  }
  speak(`Challenge Mode ${challengeMode ? "ON" : "OFF"}`);
  menu.classList.add("hidden");
});

// =======================
// Highlight Clues Button
// =======================
highlightCluesButton.addEventListener("click", () => {
  const passage = passages[currentGrammarType][currentPassageIndex];
  if (passage.clueWords) {
    document.querySelectorAll(".keyword").forEach(el => el.classList.add("highlighted"));
    speak("Highlighting clue words!");
    setTimeout(() => {
      document.querySelectorAll(".keyword").forEach(el => el.classList.remove("highlighted"));
    }, 5000);
  }
  menu.classList.add("hidden");
});

// =======================
// Game Controls
// =======================
grammarSelect.addEventListener("change", (e) => {
  currentGrammarType = e.target.value;
  currentPassageIndex = 0;
  timeLeft = 60;
  displayPassage();
  updateStatus();
});

nextPassageButton.addEventListener("click", () => {
  const blanks = document.querySelectorAll(".blank");
  let allFilled = true;
  blanks.forEach(blank => {
    if (!blank.classList.contains("filled")) allFilled = false;
  });
  if (allFilled) {
    const passage = passages[currentGrammarType][currentPassageIndex];
    let reviewText = "<h2>Review</h2><ul>";
    passage.answers.forEach((ans, i) => {
      reviewText += `<li>Blank ${i + 1}: "${ans}" – ${passage.hints[i]}</li>`;
    });
    reviewText += "</ul>";
    // Show review via modal if available; otherwise use alert.
    if (typeof modalManager !== "undefined") {
      modalManager.show(reviewText);
    } else {
      alert(reviewText);
    }
    speak("Here’s your review!");
    if (challengeMode) {
      if (Object.keys(hintUsage).length === 0) {
        score += 20;
        feedbackDisplay.innerHTML = 'Correct! Bonus: <span class="bonus">+20!</span>';
        speak("Bonus! 20 extra points for no hints.");
      }
      if (timeLeft > 30) {
        score += 10;
        feedbackDisplay.innerHTML += ' <span class="bonus">+10!</span>';
        speak("Plus 10 extra points for quick completion.");
      }
    }
    badgesEarned++;
    badgeDisplay.classList.remove("hidden");
    setTimeout(() => badgeDisplay.classList.add("hidden"), 3000);
  }
  clearInterval(timerInterval);
  currentPassageIndex++;
  if (currentPassageIndex >= passages[currentGrammarType].length) {
    feedbackDisplay.textContent = "Game Over! Final Score: " + score + " | Badges Earned: " + badgesEarned;
    speak("Game Over! Your final score is " + score + " and you earned " + badgesEarned + " badges!");
    return;
  }
  timeLeft = 60;
  displayPassage();
  updateStatus();
  menu.classList.add("hidden");
});

prevPassageButton.addEventListener("click", () => {
  if (currentPassageIndex > 0) {
    currentPassageIndex--;
    timeLeft = 60;
    clearInterval(timerInterval);
    displayPassage();
    updateStatus();
  }
  menu.classList.add("hidden");
});

clearButton.addEventListener("click", () => {
  hintUsage = {};
  selectedWord = null;
  timeLeft = 60;
  clearInterval(timerInterval);
  displayPassage();
  menu.classList.add("hidden");
});

hintButton.addEventListener("click", () => {
  const passage = passages[currentGrammarType][currentPassageIndex];
  if (passage.hint) {
    feedbackDisplay.textContent = passage.hint;
    feedbackDisplay.style.color = "blue";
    speak(passage.hint);
  }
  menu.classList.add("hidden");
});

speakPassageBtn.addEventListener("click", () => {
  console.log("Speak button clicked!");
  const passage = passages[currentGrammarType][currentPassageIndex];
  if (!passage || !passage.text) {
    console.error("No passage or text found:", passage);
    feedbackDisplay.textContent = "Error: No passage to read.";
    return;
  }
  const textToSpeak = passage.text.replace(/___\(\d+\)___/g, "blank");
  speak(textToSpeak);
  menu.classList.add("hidden");
});

// =======================
// Initialize Game
// =======================
displayPassage();
updateStatus();
