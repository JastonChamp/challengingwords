"use strict";

/* =====================================================
   DATA DEFINITIONS: Adjusted Passages with Primary Levels
   ===================================================== */
window.passages = {
  prepositions: {
    P1: [
      {
        text: "Ahmad placed his bag ___ the table in his HDB flat. He looked ___ the window and saw a bird. The bird was perched ___ the fence. His cat hid ___ a chair. Ahmad walked ___ the door quietly.",
        wordBox: ["in", "on", "under", "by", "through"],
        answers: ["on", "through", "by", "under", "towards"],
        clueWords: [["bag"], ["window"], ["fence"], ["chair"], ["door"]],
        hints: [
          "Which preposition shows the bag’s position on the table?",
          "How is Ahmad looking out of the window?",
          "Which preposition best describes the bird’s position on the fence?",
          "Where is the cat hiding?",
          "Which direction does Ahmad move?"
        ],
        hint: "Use the objects around you as clues.",
        explanation: "Use 'on' for surfaces, 'through' for viewing out of a window, 'by' for nearness, 'under' for below, and 'towards' for direction."
      },
      {
        text: "Emma placed her book ___ the desk. She looked ___ the window as rain fell outside. Her backpack was left ___ the chair. A photo was taped ___ the wall. Her friend sat ___ the table.",
        wordBox: ["on", "through", "under", "at", "beside"],
        answers: ["on", "through", "under", "at", "beside"],
        clueWords: [
          ["book", "desk"],
          ["window"],
          ["backpack"],
          ["photo", "wall"],
          ["friend", "table"]
        ],
        hints: [
          "Which preposition shows the book's position on the desk?",
          "How did she look at the window?",
          "Where is the backpack located?",
          "Where was the photo taped?",
          "Where did her friend sit?"
        ],
        hint: "Observe the position of each object.",
        explanation: "Prepositions indicate where things are placed or how one moves around them."
      },
      {
        text: "Liam put his hat ___ his head as he walked ___ the park. He sat ___ a bench and placed his bag ___ his lap. Then, he strolled ___ the street.",
        wordBox: ["on", "through", "on", "in", "along"],
        answers: ["on", "through", "on", "in", "along"],
        clueWords: [
          ["hat", "head"],
          ["park"],
          ["bench"],
          ["bag", "lap"],
          ["street"]
        ],
        hints: [
          "Which preposition fits with a hat on a head?",
          "How did he move inside the park?",
          "Where did he sit?",
          "Where was his bag placed?",
          "How did he move along the street?"
        ],
        hint: "Match the preposition to the object’s position.",
        explanation: "The passage shows placement and movement using prepositions."
      },
      {
        text: "Mia hung her jacket ___ the hook. She walked ___ the corridor and stopped ___ a door. A poster was displayed ___ the wall. Then, she sat ___ a chair.",
        wordBox: ["on", "along", "at", "on"],
        answers: ["on", "along", "at", "on", "on"],
        clueWords: [
          ["jacket", "hook"],
          ["corridor"],
          ["door"],
          ["poster", "wall"],
          ["chair"]
        ],
        hints: [
          "Which preposition shows that the jacket is hung on the hook?",
          "How did she walk in the corridor?",
          "Where did she stop?",
          "Where was the poster displayed?",
          "Where did she sit?"
        ],
        hint: "Match each preposition with its corresponding object.",
        explanation: "Prepositions like 'on', 'along', and 'at' indicate position and movement."
      },
      {
        text: "Ben put his toy car ___ the rug. He rolled it ___ the floor, and it stopped ___ a chair. Then, he looked ___ the window and smiled ___ his delight.",
        wordBox: ["on", "across", "by", "at", "with"],
        answers: ["on", "across", "by", "at", "with"],
        clueWords: [
          ["toy car", "rug"],
          ["floor"],
          ["chair"],
          ["window"],
          ["delight"]
        ],
        hints: [
          "Which preposition shows the car is placed on the rug?",
          "How did it roll on the floor?",
          "Where did it stop?",
          "Where did he look?",
          "How did he express his emotion?"
        ],
        hint: "Consider the spatial relationships described.",
        explanation: "This passage uses prepositions to show placement and movement."
      }
    ],
    P2: [
      {
        text: "Priya sat ___ the sofa in her HDB living room and watched TV. Her mum was cooking ___ the kitchen. The dog slept ___ the rug. Priya’s brother played ___ the void deck. Later, they ate dinner ___ the table.",
        wordBox: ["on", "in", "on", "at", "at"],
        answers: ["on", "in", "on", "at", "at"],
        clueWords: [
          ["sofa"],
          ["kitchen"],
          ["rug"],
          ["void deck"],
          ["table"]
        ],
        hints: [
          "Which preposition shows Priya’s position on the sofa?",
          "Where is her mum cooking?",
          "Where does the dog sleep?",
          "Where does her brother play?",
          "Where do they eat dinner?"
        ],
        hint: "Look at the room layout for clues.",
        explanation: "Different prepositions denote specific positions in a room."
      },
      {
        text: "Ravi pinned his artwork ___ the bulletin board. It was positioned ___ the center of the display. His friends gathered ___ the painting. The teacher smiled ___ the arrangement, and the principal approved it ___ the corridor.",
        wordBox: ["on", "at", "around", "at", "in"],
        answers: ["on", "at", "around", "at", "in"],
        clueWords: [
          ["artwork", "bulletin board"],
          ["center"],
          ["painting"],
          ["arrangement"],
          ["corridor"]
        ],
        hints: [
          "Which preposition indicates the artwork is pinned on the board?",
          "How is it positioned in the display?",
          "Where did his friends gather?",
          "How did the teacher react to the arrangement?",
          "Where was the principal’s approval given?"
        ],
        hint: "Match each clue to the right preposition.",
        explanation: "Prepositions like 'on', 'at', and 'around' clarify spatial positioning."
      },
      {
        text: "During the school assembly, Anya walked ___ the stage, stood ___ the podium to address the audience, the spotlight shone ___ her, the crowd clapped ___ her performance, and she smiled ___ joy.",
        wordBox: ["onto", "at", "on", "for", "with"],
        answers: ["onto", "at", "on", "for", "with"],
        clueWords: [
          ["stage"],
          ["podium"],
          ["spotlight"],
          ["crowd", "performance"],
          ["smiled", "joy"]
        ],
        hints: [
          "Which preposition fits when walking onto the stage?",
          "Where did she stand?",
          "How did the spotlight shine?",
          "For what did the crowd clap?",
          "How did she express her emotion?"
        ],
        hint: "Connect the movement and feelings with the proper prepositions.",
        explanation: "This passage shows a sequence of actions using prepositions."
      },
      {
        text: "During recess, Jayden kicked a ball ___ the field. It bounced ___ the wall and rolled ___ the playground. His friends ran ___ to catch it, and they laughed ___ the fun.",
        wordBox: ["across", "off", "through", "to", "at"],
        answers: ["across", "off", "through", "to", "at"],
        clueWords: [
          ["ball", "field"],
          ["wall"],
          ["playground"],
          ["friends"],
          ["fun"]
        ],
        hints: [
          "Which preposition shows the ball's movement across the field?",
          "How did it bounce off the wall?",
          "Where did it roll?",
          "Where did his friends run?",
          "How did they react to the fun?"
        ],
        hint: "Observe the motion in the scene.",
        explanation: "Prepositions illustrate dynamic actions and movement."
      },
      {
        text: "In the school library, Maya arranged the books neatly ___ the shelves. She placed the novels ___ one section, the encyclopedias ___ another, and the magazines ___ the bottom. Finally, she labeled them ___ care.",
        wordBox: ["on", "in", "in", "at", "with"],
        answers: ["on", "in", "in", "at", "with"],
        clueWords: [
          ["books", "shelves"],
          ["novels"],
          ["encyclopedias"],
          ["magazines", "bottom"],
          ["labeled"]
        ],
        hints: [
          "Which preposition shows where the books are arranged?",
          "Where were the novels placed?",
          "How about the encyclopedias?",
          "Where were the magazines set?",
          "Which preposition indicates the method of labeling?"
        ],
        hint: "Examine the library layout for clues.",
        explanation: "Prepositions here denote organization and spatial arrangement."
      }
    ],
    P3: [
      {
        text: "The kite flew ___ the sky above the HDB estate. The boy held the string ___ his hands. The wind blew ___ the trees near the playground. The kite soared ___ the clouds. His sister cheered ___ the ground.",
        wordBox: ["in", "on", "under", "by", "through", "above", "below"],
        answers: ["in", "in", "through", "above", "on"],
        clueWords: [
          ["kite", "sky"],
          ["string", "hands"],
          ["wind", "trees"],
          ["kite", "clouds"],
          ["sister", "ground"]
        ],
        hints: [
          "Which preposition describes the kite’s position in the sky?",
          "How did the boy hold the string?",
          "How did the wind move through the trees?",
          "Where did the kite soar relative to the clouds?",
          "Where was his sister when she cheered?"
        ],
        hint: "Match each spatial detail to the right preposition.",
        explanation: "Prepositions indicate both location and movement."
      },
      {
        text: "At the community center, Raj walked ___ the corridor and admired the artwork displayed ___ the walls. He stopped ___ the window to watch the rain, then continued ___ the staircase and arrived ___ the main hall.",
        wordBox: ["along", "on", "at", "up", "in"],
        answers: ["along", "on", "at", "up", "in"],
        clueWords: [
          ["community center", "corridor"],
          ["artwork", "walls"],
          ["window"],
          ["staircase"],
          ["main hall"]
        ],
        hints: [
          "Which preposition fits with walking along a corridor?",
          "How is the artwork displayed?",
          "Where did he stop?",
          "How did he ascend the staircase?",
          "Where did he arrive?"
        ],
        hint: "Follow the path described in the sentence.",
        explanation: "The passage shows directional movement using prepositions."
      },
      {
        text: "During the school trip, Lina climbed ___ the mountain. She walked ___ a narrow path and reached a clearing ___ the summit. The view stretched ___ the valley, and she could see the river flowing ___ the distance.",
        wordBox: ["up", "along", "at", "across", "in"],
        answers: ["up", "along", "at", "across", "in"],
        clueWords: [
          ["climbed", "mountain"],
          ["narrow path"],
          ["clearing", "summit"],
          ["view", "valley"],
          ["river", "distance"]
        ],
        hints: [
          "Which preposition fits with climbing up a mountain?",
          "How did she walk on the path?",
          "Where did she reach?",
          "How did the view stretch?",
          "Where was the river flowing?"
        ],
        hint: "Visualize the landscape to select the correct words.",
        explanation: "This sentence uses prepositions to indicate vertical and horizontal movement."
      },
      {
        text: "In the science lab, Michael set up his experiment ___ a workbench. He measured the chemicals ___ exact proportions, and the reaction began ___ a flash. He observed the process ___ a microscope and recorded the data ___ his notebook.",
        wordBox: ["on", "in", "with", "under", "in"],
        answers: ["on", "in", "with", "under", "in"],
        clueWords: [
          ["experiment", "workbench"],
          ["chemicals", "proportions"],
          ["reaction", "flash"],
          ["microscope"],
          ["data", "notebook"]
        ],
        hints: [
          "Which preposition shows that the experiment is set up on a workbench?",
          "How were the chemicals measured?",
          "How did the reaction begin?",
          "Where did he observe the process?",
          "How was the data recorded?"
        ],
        hint: "Consider the lab setup when choosing prepositions.",
        explanation: "Prepositions here indicate placement and manner in a scientific setting."
      },
      {
        text: "During the debate, the speaker addressed the audience ___ confidence. He argued his points ___ clarity, and his ideas flowed ___ the discussion. The moderator interjected ___ critical moments, yet the speaker maintained his composure ___ the session.",
        wordBox: ["with", "with", "throughout", "at", "during"],
        answers: ["with", "with", "throughout", "at", "during"],
        clueWords: [
          ["speaker", "audience"],
          ["argued", "points"],
          ["ideas", "discussion"],
          ["moderator", "moments"],
          ["composure", "session"]
        ],
        hints: [
          "Which preposition shows the speaker’s manner of addressing?",
          "How did he argue his points?",
          "How did his ideas flow?",
          "When did the moderator interject?",
          "How did the speaker maintain his composure?"
        ],
        hint: "Select the prepositions that best describe the actions and timing.",
        explanation: "They detail both the manner and timing of the events."
      }
    ]
  },
  subjectVerbAgreement: {
    P1: [
      {
        text: "The dog ___ loudly every morning. The cats ___ quietly in the garden.",
        wordBox: ["bark", "barks", "sleep", "sleeps"],
        answers: ["barks", "sleep"],
        clueWords: [["dog"], ["cats"]],
        hints: [
          "Which verb form matches the singular 'dog'?",
          "Which form is used with the plural 'cats'?"
        ],
        hint: "Match the subject with the correct verb form.",
        explanation: "Singular subjects take singular verbs; plural subjects take plural verbs."
      },
      {
        text: "Each child ___ a toy. The teams ___ for victory.",
        wordBox: ["have", "has", "play", "plays"],
        answers: ["has", "play"],
        clueWords: [["child"], ["teams"]],
        hints: [
          "Which verb form fits 'each child'?",
          "Which verb form fits 'teams'?"
        ],
        hint: "Identify singular versus plural subjects.",
        explanation: "Each child is singular and takes 'has'; teams is plural and takes 'play'."
      },
      {
        text: "The bird ___ in the sky. The bees ___ around the flowers.",
        wordBox: ["fly", "flies", "buzz", "buzzes"],
        answers: ["flies", "buzz"],
        clueWords: [["bird"], ["bees"]],
        hints: [
          "Which form fits with 'the bird'?",
          "Which form is correct for 'the bees'?"
        ],
        hint: "Choose the verb that agrees with each subject.",
        explanation: "A singular bird 'flies' while plural bees 'buzz'."
      },
      {
        text: "My friend ___ to school every day. The students ___ their homework.",
        wordBox: ["go", "goes", "do", "does"],
        answers: ["goes", "do"],
        clueWords: [["friend"], ["students"]],
        hints: [
          "Which verb fits 'my friend'?",
          "Which verb fits 'the students'?"
        ],
        hint: "Determine if the subject is singular or plural.",
        explanation: "The singular 'friend' takes 'goes' and plural 'students' take 'do'."
      },
      {
        text: "The teacher ___ the lesson clearly. The pupils ___ attentively.",
        wordBox: ["explain", "explains", "listen", "listens"],
        answers: ["explains", "listen"],
        clueWords: [["teacher"], ["pupils"]],
        hints: [
          "Which form fits the singular 'teacher'?",
          "Which form fits the plural 'pupils'?"
        ],
        hint: "Use the correct subject–verb agreement.",
        explanation: "The teacher (singular) 'explains' while the pupils (plural) 'listen'."
      }
    ],
    P2: [
      {
        text: "My friend ___ to school every day. The students ___ their homework.",
        wordBox: ["walk", "walks", "do", "does"],
        answers: ["walks", "do"],
        clueWords: [["friend"], ["students"]],
        hints: [
          "Which verb form fits 'my friend'?",
          "Which form fits 'the students'?"
        ],
        hint: "Match the subject with its verb.",
        explanation: "A singular friend 'walks' while plural students 'do'."
      },
      {
        text: "Each teacher ___ a classroom. The principals ___ in the office.",
        wordBox: ["manage", "manages", "work", "works"],
        answers: ["manages", "work"],
        clueWords: [["teacher"], ["principals"]],
        hints: [
          "Which form fits 'each teacher'?",
          "Which fits 'principals'?"
        ],
        hint: "Singular versus plural subject rules apply.",
        explanation: "Each teacher (singular) 'manages' and principals (plural) 'work'."
      },
      {
        text: "The car ___ fast on the road. The drivers ___ carefully.",
        wordBox: ["drive", "drives", "move", "moves"],
        answers: ["drives", "drive"],
        clueWords: [["car"], ["drivers"]],
        hints: [
          "Which verb fits 'the car'?",
          "Which verb fits 'the drivers'?"
        ],
        hint: "Check the subject’s number.",
        explanation: "The singular car 'drives' and plural drivers 'drive'."
      },
      {
        text: "The boy ___ his bicycle every morning. The girls ___ to school together.",
        wordBox: ["ride", "rides", "go", "goes"],
        answers: ["rides", "go"],
        clueWords: [["boy"], ["girls"]],
        hints: [
          "Which form fits 'the boy'?",
          "Which form fits 'the girls'?"
        ],
        hint: "Singular and plural subjects require different verb forms.",
        explanation: "The boy (singular) 'rides'; the girls (plural) 'go'."
      },
      {
        text: "The flowers ___ in the garden beautifully. Each bloom ___ a unique color.",
        wordBox: ["grow", "grows", "have", "has"],
        answers: ["grow", "has"],
        clueWords: [["flowers"], ["bloom"]],
        hints: [
          "Which verb form fits 'the flowers'?",
          "Which verb fits 'each bloom'?"
        ],
        hint: "Match plural and singular subjects with their verbs.",
        explanation: "Flowers (plural) 'grow', while each bloom (singular) 'has' its own color."
      }
    ],
    P3: [
      {
        text: "The students ___ their assignments diligently. Every student ___ to complete them on time.",
        wordBox: ["submit", "submits", "try", "tries"],
        answers: ["submit", "tries"],
        clueWords: [["students"], ["every student"]],
        hints: [
          "Which form fits the plural 'students'?",
          "Which form fits the singular 'every student'?"
        ],
        hint: "Use the correct verb form for each subject.",
        explanation: "Plural 'students' take 'submit'; singular 'every student' takes 'tries'."
      },
      {
        text: "In the debate, the speakers ___ persuasively. Each argument ___ a strong point.",
        wordBox: ["argue", "argues", "contain", "contains"],
        answers: ["argue", "contains"],
        clueWords: [["speakers"], ["each argument"]],
        hints: [
          "Which verb fits 'the speakers'?",
          "Which verb fits 'each argument'?"
        ],
        hint: "Identify the proper verb forms for plural and singular subjects.",
        explanation: "Speakers (plural) 'argue' while each argument (singular) 'contains' a point."
      },
      {
        text: "The committee ___ its decision unanimously. All members ___ to the final outcome.",
        wordBox: ["reach", "reaches", "agree", "agrees"],
        answers: ["reaches", "agree"],
        clueWords: [["committee"], ["members"]],
        hints: [
          "Which form fits 'the committee'?",
          "Which form fits 'all members'?"
        ],
        hint: "Remember that collective nouns are treated as singular.",
        explanation: "The committee (treated as singular) 'reaches'; members (plural) 'agree'."
      },
      {
        text: "At the concert, the band ___ energetically. Each musician ___ a unique role.",
        wordBox: ["perform", "performs", "plays", "play"],
        answers: ["performs", "plays"],
        clueWords: [["band"], ["musician"]],
        hints: [
          "Which verb fits 'the band'?",
          "Which verb fits 'each musician'?"
        ],
        hint: "Apply subject–verb agreement rules.",
        explanation: "The band (singular) 'performs' while each musician (singular) 'plays'."
      },
      {
        text: "The books ___ on the shelf and ___ inspiring stories. Every novel ___ its own adventure.",
        wordBox: ["tell", "tells", "contain", "contains"],
        answers: ["tell", "contain", "contains"],
        clueWords: [["books"], ["novel"]],
        hints: [
          "Which form fits 'the books'?",
          "Which verb correctly describes the stories in the books?",
          "Which form fits 'every novel'?"
        ],
        hint: "Match plural subjects with plural verbs and singular with singular.",
        explanation: "Books (plural) 'tell' and 'contain'; every novel (singular) 'contains' an adventure."
      }
    ]
  },
  pronouns: {
    P1: [
      {
        text: "Mary lost ___ book yesterday. ___ asked John if he had seen it.",
        wordBox: ["she", "her", "he"],
        answers: ["her", "She"],
        clueWords: [["Mary"], ["John"]],
        hints: [
          "Which pronoun shows possession for Mary?",
          "Who asked John?"
        ],
        hint: "Use the correct possessive and subject pronoun.",
        explanation: "'Her' indicates possession; 'She' is the subject."
      },
      {
        text: "The cat chased ___ tail. ___ was very playful.",
        wordBox: ["it", "its", "he"],
        answers: ["its", "It"],
        clueWords: [["cat"], ["tail"]],
        hints: [
          "Which pronoun shows possession for the cat?",
          "Which pronoun refers to the cat?"
        ],
        hint: "Select the proper pronouns.",
        explanation: "'Its' shows possession; 'It' refers to the cat."
      },
      {
        text: "Tom and Jerry are friends. ___ play together every day. ___ share their toys.",
        wordBox: ["they", "he", "she"],
        answers: ["They", "They"],
        clueWords: [["Tom"], ["Jerry"]],
        hints: [
          "Which pronoun refers to both Tom and Jerry?",
          "Which pronoun shows that they share?"
        ],
        hint: "Use plural pronouns.",
        explanation: "'They' is used for plural subjects."
      },
      {
        text: "The teacher gave ___ a test. ___ was difficult, but ___ all tried their best.",
        wordBox: ["us", "it", "they", "we"],
        answers: ["us", "it", "we"],
        clueWords: [["teacher"], ["test"], ["all"]],
        hints: [
          "Which pronoun receives the test?",
          "How is the test described?",
          "Who tried their best?"
        ],
        hint: "Choose the correct object and subject pronouns.",
        explanation: "'Us' is the object; 'it' describes the test; 'we' is the subject."
      },
      {
        text: "The bird built ___ nest in the tree. ___ laid eggs, and the chicks hatched while ___ chirped.",
        wordBox: ["its", "she", "her", "they"],
        answers: ["its", "she", "they"],
        clueWords: [["bird"], ["eggs"], ["chicks"]],
        hints: [
          "Which pronoun shows possession for the nest?",
          "Who laid the eggs?",
          "Which pronoun refers to the chicks?"
        ],
        hint: "Use the correct possessive and subject pronouns.",
        explanation: "'Its' shows possession; 'she' is the subject; 'they' refers to the chicks."
      }
    ],
    P2: [
      {
        text: "The teacher called ___ to the front. ___ asked John a question. ___ answered correctly.",
        wordBox: ["him", "she", "he"],
        answers: ["him", "She", "he"],
        clueWords: [["called"], ["John"], ["answered"]],
        hints: [
          "Who was called to the front?",
          "Who asked the question?",
          "Who answered correctly?"
        ],
        hint: "Distinguish between object and subject pronouns.",
        explanation: "'Him' is the object; 'She' and 'he' are used as subjects."
      },
      {
        text: "The dog wagged ___ tail and chased ___ ball. ___ ran around the yard.",
        wordBox: ["its", "it", "he"],
        answers: ["its", "its", "It"],
        clueWords: [["dog", "tail"], ["ball"], ["ran"]],
        hints: [
          "Which pronoun shows possession for the tail?",
          "Which pronoun refers to the ball?",
          "Which pronoun represents the dog?"
        ],
        hint: "Select the appropriate pronouns.",
        explanation: "'Its' indicates possession; 'It' is used as the subject."
      },
      {
        text: "My sister and I went shopping. ___ bought new shoes. ___ tried them on, and ___ shared our finds.",
        wordBox: ["we", "us", "she", "I"],
        answers: ["We", "I", "we"],
        clueWords: [["sister", "I"], ["shoes"], ["shared", "finds"]],
        hints: [
          "Which pronoun represents both of us?",
          "Which pronoun shows the one who tried them on?",
          "Which pronoun indicates shared action?"
        ],
        hint: "Use appropriate pronouns for multiple subjects.",
        explanation: "The pronouns 'We', 'I', and 'we' are used to show collective and individual actions."
      },
      {
        text: "The coach gave ___ instructions before the game. ___ explained the strategy clearly, and ___ motivated the team.",
        wordBox: ["us", "he", "him", "they"],
        answers: ["us", "he", "he"],
        clueWords: [["coach", "instructions"], ["explained"], ["motivated", "team"]],
        hints: [
          "Which pronoun receives the instructions?",
          "Which pronoun refers to the coach?",
          "Which pronoun describes the coach's motivating action?"
        ],
        hint: "Match subject and object pronouns correctly.",
        explanation: "'Us' is used as an object; 'he' is the subject."
      },
      {
        text: "The artist displayed ___ paintings at the gallery. ___ received many compliments, and ___ was praised for her creativity.",
        wordBox: ["her", "she", "they"],
        answers: ["her", "she", "she"],
        clueWords: [["artist", "paintings"], ["compliments"], ["creativity"]],
        hints: [
          "Which pronoun shows possession of the paintings?",
          "Which pronoun is the subject of the sentence?",
          "Which pronoun refers to the artist?"
        ],
        hint: "Use possessive and subject pronouns appropriately.",
        explanation: "'Her' indicates possession; 'she' is the subject."
      }
    ],
    P3: [
      {
        text: "In the meeting, the manager gave ___ a briefing. ___ summarized the report, and ___ all contributed ideas.",
        wordBox: ["his", "he", "they", "them"],
        answers: ["his", "he", "they"],
        clueWords: [["manager", "briefing"], ["summarized", "report"], ["contributed", "ideas"]],
        hints: [
          "Which pronoun shows the manager's possession?",
          "Which pronoun refers to the manager?",
          "Which pronoun represents the group?"
        ],
        hint: "Use possessive and plural pronouns.",
        explanation: "'His' shows possession; 'he' is the subject; 'they' refers to the team."
      },
      {
        text: "The scientist observed the specimen and recorded ___ details. ___ then analyzed it under the microscope.",
        wordBox: ["its", "she", "it"],
        answers: ["its", "she", "it"],
        clueWords: [["specimen", "details"], ["analyzed", "microscope"]],
        hints: [
          "Which pronoun indicates the specimen's details?",
          "Which pronoun refers to the scientist?",
          "Which pronoun replaces 'the specimen'?"
        ],
        hint: "Choose correct pronouns.",
        explanation: "'Its' denotes possession; 'she' is the subject; 'it' stands for the specimen."
      },
      {
        text: "The committee reviewed the proposal, and ___ reached a consensus. ___ agreed that ___ plan was innovative.",
        wordBox: ["they", "their"],
        answers: ["they", "they", "their"],
        clueWords: [["committee"], ["consensus"], ["plan"]],
        hints: [
          "Which pronoun refers to the committee?",
          "Which pronoun shows the group's decision?",
          "Which pronoun indicates possession of the plan?"
        ],
        hint: "Use plural pronouns for groups.",
        explanation: "'They' and 'their' are used for the committee and its proposal."
      },
      {
        text: "In the classroom, each student submitted ___ assignment. ___ were graded by the teacher, who returned ___ promptly.",
        wordBox: ["their", "were", "them"],
        answers: ["their", "were", "them"],
        clueWords: [["student", "assignment"], ["graded"], ["returned"]],
        hints: [
          "Which pronoun shows possession of the assignment?",
          "Which form is used for multiple assignments?",
          "Which pronoun refers to the assignments?"
        ],
        hint: "Use singular 'their' as modern usage and a plural pronoun for the assignments.",
        explanation: "Each student’s assignment is marked with 'their' and the assignments are returned as 'them'."
      },
      {
        text: "The actor delivered ___ monologue with passion. ___ captivated the audience, and ___ performance was applauded.",
        wordBox: ["his", "he", "him"],
        answers: ["his", "he", "his"],
        clueWords: [["actor", "monologue"], ["captivated", "audience"], ["performance"]],
        hints: [
          "Which pronoun indicates possession for the monologue?",
          "Which pronoun refers to the actor?",
          "Which pronoun shows possession for the performance?"
        ],
        hint: "Use the correct possessive and subject pronouns.",
        explanation: "'His' indicates possession; 'he' is the subject."
      }
    ]
  },
  adjectivesAdverbs: {
    P1: [
      {
        text: "The ___ cat ran ___ across the yard.",
        wordBox: ["quick", "quickly", "slow", "slowly"],
        answers: ["quick", "quickly"],
        clueWords: [["cat"], ["ran"]],
        hints: [
          "Which adjective describes the cat?",
          "Which adverb describes how it ran?"
        ],
        hint: "Match the adjective with the noun and the adverb with the verb.",
        explanation: "'Quick' describes the cat; 'quickly' describes the manner of running."
      },
      {
        text: "The ___ dog barked ___ at strangers.",
        wordBox: ["big", "bigly", "loud", "loudly"],
        answers: ["big", "loudly"],
        clueWords: [["dog"], ["barked"]],
        hints: [
          "Which adjective describes the dog?",
          "Which adverb describes how it barked?"
        ],
        hint: "Select appropriate descriptive words.",
        explanation: "'Big' describes the dog’s size; 'loudly' describes its bark."
      },
      {
        text: "The ___ flower bloomed ___ in the garden.",
        wordBox: ["small", "smallly", "beautiful", "beautifully"],
        answers: ["small", "beautifully"],
        clueWords: [["flower"], ["bloomed"]],
        hints: [
          "Which adjective describes the flower?",
          "Which adverb describes how it bloomed?"
        ],
        hint: "Choose adjectives and adverbs that suit nature.",
        explanation: "'Small' describes the flower; 'beautifully' describes its blooming."
      },
      {
        text: "The ___ bird sang ___ in the morning.",
        wordBox: ["happy", "happily", "loud", "loudly"],
        answers: ["happy", "loudly"],
        clueWords: [["bird"], ["sang"]],
        hints: [
          "Which adjective describes the bird?",
          "Which adverb describes how it sang?"
        ],
        hint: "Use descriptive words for mood and action.",
        explanation: "'Happy' describes the bird’s mood; 'loudly' describes its song."
      },
      {
        text: "The ___ kite flew ___ in the sky.",
        wordBox: ["colorful", "colorfully", "high", "highly"],
        answers: ["colorful", "high"],
        clueWords: [["kite"], ["flew"]],
        hints: [
          "Which adjective describes the kite?",
          "Which word best describes its position in the sky?"
        ],
        hint: "Select words that depict appearance and altitude.",
        explanation: "'Colorful' describes the kite’s look; 'high' indicates its altitude."
      }
    ],
    P2: [
      {
        text: "The ___ sun shone ___ in the sky.",
        wordBox: ["bright", "brightly", "soft", "softly"],
        answers: ["bright", "brightly"],
        clueWords: [["sun"], ["shone"]],
        hints: [
          "Which adjective describes the sun?",
          "Which adverb describes how it shone?"
        ],
        hint: "Match brightness with the proper descriptors.",
        explanation: "'Bright' describes the sun; 'brightly' describes its shining."
      },
      {
        text: "The children played ___ in the park and laughed ___.",
        wordBox: ["joyful", "joyfully", "happily", "merrily"],
        answers: ["joyfully", "happily"],
        clueWords: [["children"], ["played"], ["laughed"]],
        hints: [
          "Which adverb describes how the children played?",
          "Which adverb describes how they laughed?"
        ],
        hint: "Select adverbs that show their mood.",
        explanation: "Both 'joyfully' and 'happily' indicate a cheerful mood."
      },
      {
        text: "The ___ wind blew ___ through the trees.",
        wordBox: ["strong", "strongly", "soft", "softly"],
        answers: ["strong", "strongly"],
        clueWords: [["wind"], ["blew"]],
        hints: [
          "Which adjective describes the wind?",
          "Which adverb describes how it blew?"
        ],
        hint: "Use words that capture the force of the wind.",
        explanation: "'Strong' describes the wind; 'strongly' describes its blowing."
      },
      {
        text: "The ___ cake smelled ___ in the oven.",
        wordBox: ["delicious", "deliciously", "sweet", "sweetly"],
        answers: ["delicious", "sweetly"],
        clueWords: [["cake"], ["smelled"]],
        hints: [
          "Which adjective describes the cake?",
          "Which adverb describes how it smelled?"
        ],
        hint: "Choose words that evoke taste and aroma.",
        explanation: "'Delicious' describes the cake; 'sweetly' describes its aroma."
      },
      {
        text: "The ___ runner dashed ___ to the finish line.",
        wordBox: ["fast", "fastly", "quick", "quickly"],
        answers: ["fast", "quickly"],
        clueWords: [["runner"], ["dashed"]],
        hints: [
          "Which adjective describes the runner?",
          "Which adverb describes how he dashed?"
        ],
        hint: "Select words that indicate speed.",
        explanation: "'Fast' describes the runner; 'quickly' describes his movement."
      }
    ],
    P3: [
      {
        text: "The ___ ocean waves crashed ___ against the rocks.",
        wordBox: ["turbulent", "turbulently", "rough", "roughly", "wild", "wildly"],
        answers: ["turbulent", "turbulently"],
        clueWords: [["ocean waves"], ["crashed"]],
        hints: [
          "Which adjective best describes the ocean waves?",
          "Which adverb describes how they crashed?"
        ],
        hint: "Use advanced descriptors for natural forces.",
        explanation: "'Turbulent' describes the waves; 'turbulently' conveys their force."
      },
      {
        text: "The ___ artist skillfully painted a ___ portrait.",
        wordBox: ["talented", "talentedly", "vivid", "vividly", "creative", "creatively"],
        answers: ["talented", "vivid"],
        clueWords: [["artist"], ["painted", "portrait"]],
        hints: [
          "Which adjective describes the artist?",
          "Which adjective best describes the portrait?"
        ],
        hint: "Focus on artistry and visual impact.",
        explanation: "'Talented' describes the artist; 'vivid' captures the portrait’s appearance."
      },
      {
        text: "The ___ wind whispered ___ through the ancient trees.",
        wordBox: ["mysterious", "mysteriously", "soft", "softly", "gentle", "gently"],
        answers: ["mysterious", "mysteriously"],
        clueWords: [["wind"], ["whispered"]],
        hints: [
          "Which adjective best describes the wind?",
          "Which adverb describes how it whispered?"
        ],
        hint: "Use descriptive language to set a mood.",
        explanation: "'Mysterious' creates an intriguing atmosphere; 'mysteriously' sets the tone."
      },
      {
        text: "The ___ professor explained the theory ___ to the eager students.",
        wordBox: ["erudite", "eruditely", "clearly", "thoroughly"],
        answers: ["erudite", "clearly"],
        clueWords: [["professor"], ["explained", "theory"], ["students"]],
        hints: [
          "Which adjective describes the professor?",
          "Which adverb describes how the theory was explained?"
        ],
        hint: "Match advanced descriptors appropriately.",
        explanation: "'Erudite' means learned; 'clearly' indicates an understandable explanation."
      },
      {
        text: "The ___ musician played the instrument ___ during the concert.",
        wordBox: ["virtuoso", "virtuosically", "beautiful", "beautifully", "passionately"],
        answers: ["virtuoso", "virtuosically"],
        clueWords: [["musician"], ["played", "instrument"], ["concert"]],
        hints: [
          "Which adjective describes the musician?",
          "Which adverb describes how the instrument was played?"
        ],
        hint: "Choose words that highlight exceptional skill.",
        explanation: "'Virtuoso' indicates outstanding talent; 'virtuosically' describes the performance."
      }
    ]
  },
  tenses: {
    P1: [
      {
        text: "I ___ to the park yesterday. My friends ___ there with me.",
        wordBox: ["go", "went", "was", "were"],
        answers: ["went", "were"],
        clueWords: [["yesterday"], ["friends"]],
        hints: [
          "What did I do yesterday?",
          "Where were my friends?"
        ],
        hint: "Use past tense verbs.",
        explanation: "'Went' is the past tense of 'go'; 'were' is used for plural subjects."
      },
      {
        text: "She ___ her homework now. She ___ it last night.",
        wordBox: ["do", "does", "did"],
        answers: ["does", "did"],
        clueWords: [["now"], ["last night"]],
        hints: [
          "What is she doing now?",
          "What did she do last night?"
        ],
        hint: "Distinguish between present and past tense.",
        explanation: "'Does' is present; 'did' is past."
      },
      {
        text: "The dog ___ in the yard every morning. Yesterday, it ___ a bone.",
        wordBox: ["run", "runs", "find", "found"],
        answers: ["runs", "found"],
        clueWords: [["morning"], ["bone"]],
        hints: [
          "What does the dog do every morning?",
          "What did it do yesterday?"
        ],
        hint: "Use present and past tense correctly.",
        explanation: "'Runs' is present; 'found' is past."
      },
      {
        text: "We ___ to school every day. Last week, we ___ on a field trip.",
        wordBox: ["go", "went", "are", "were"],
        answers: ["go", "went"],
        clueWords: [["every day"], ["last week"]],
        hints: [
          "What do we do every day?",
          "What did we do last week?"
        ],
        hint: "Select the proper tense for each time frame.",
        explanation: "'Go' is present; 'went' is past."
      },
      {
        text: "He ___ his bike now. Yesterday, he ___ to the park.",
        wordBox: ["ride", "rides", "go", "went"],
        answers: ["rides", "went"],
        clueWords: [["bike"], ["park"]],
        hints: [
          "What is he doing now?",
          "What did he do yesterday?"
        ],
        hint: "Apply present and past tense rules.",
        explanation: "'Rides' is present; 'went' is past."
      }
    ],
    P2: [
      {
        text: "She ___ her lunch now. She ___ it earlier.",
        wordBox: ["eat", "eats", "ate"],
        answers: ["eats", "ate"],
        clueWords: [["lunch"], ["earlier"]],
        hints: [
          "What does she do now?",
          "What did she do earlier?"
        ],
        hint: "Differentiate between present and past.",
        explanation: "'Eats' is present; 'ate' is past."
      },
      {
        text: "They ___ a movie tonight. Last night, they ___ a documentary.",
        wordBox: ["watch", "watches", "watched", "are watching"],
        answers: ["are watching", "watched"],
        clueWords: [["movie"], ["documentary"]],
        hints: [
          "What are they doing tonight?",
          "What did they do last night?"
        ],
        hint: "Use present continuous and past tense.",
        explanation: "'Are watching' indicates a current plan; 'watched' is past."
      },
      {
        text: "He ___ his project now. He ___ it last week.",
        wordBox: ["finish", "finishes", "finished"],
        answers: ["finishes", "finished"],
        clueWords: [["project"], ["last week"]],
        hints: [
          "What does he do now?",
          "What did he do last week?"
        ],
        hint: "Use present and past tense appropriately.",
        explanation: "'Finishes' is present; 'finished' is past."
      },
      {
        text: "They ___ a test tomorrow. Yesterday, they ___ one.",
        wordBox: ["have", "had", "will have"],
        answers: ["will have", "had"],
        clueWords: [["test"], ["yesterday"]],
        hints: [
          "What will they do tomorrow?",
          "What did they do yesterday?"
        ],
        hint: "Distinguish between future and past tense.",
        explanation: "'Will have' is future; 'had' is past."
      },
      {
        text: "The teacher ___ the lesson now. Earlier, she ___ a story.",
        wordBox: ["teach", "teaches", "taught"],
        answers: ["teaches", "taught"],
        clueWords: [["teacher"], ["lesson"], ["story"]],
        hints: [
          "What is the teacher doing now?",
          "What did she do earlier?"
        ],
        hint: "Match present and past tenses correctly.",
        explanation: "'Teaches' is present; 'taught' is past."
      }
    ],
    P3: [
      {
        text: "The dog ___ in the yard every morning. Yesterday, it ___ a bone, and tomorrow, it ___ again.",
        wordBox: ["run", "runs", "found", "will run"],
        answers: ["runs", "found", "will run"],
        clueWords: [["morning"], ["bone"], ["tomorrow"]],
        hints: [
          "What does the dog do every morning?",
          "What did it do yesterday?",
          "What will it do tomorrow?"
        ],
        hint: "Use present, past, and future tenses.",
        explanation: "'Runs' is present; 'found' is past; 'will run' is future."
      },
      {
        text: "She ___ to school every day. Last week, she ___ on a school trip, and next week, she ___ a quiz.",
        wordBox: ["go", "goes", "went", "will have"],
        answers: ["goes", "went", "will have"],
        clueWords: [["school"], ["school trip"], ["quiz"]],
        hints: [
          "What does she do every day?",
          "What did she do last week?",
          "What will she do next week?"
        ],
        hint: "Match the appropriate tenses.",
        explanation: "'Goes' is present; 'went' is past; 'will have' is future."
      },
      {
        text: "He ___ his bike every afternoon. Yesterday, he ___ to the park, and tomorrow, he ___ to join his friends.",
        wordBox: ["ride", "rides", "went", "will ride"],
        answers: ["rides", "went", "will ride"],
        clueWords: [["bike"], ["park"], ["friends"]],
        hints: [
          "What does he do every afternoon?",
          "What did he do yesterday?",
          "What will he do tomorrow?"
        ],
        hint: "Use present, past, and future tenses.",
        explanation: "'Rides' is present; 'went' is past; 'will ride' is future."
      },
      {
        text: "The children ___ in the playground every day. Last weekend, they ___ a fun game, and next weekend, they ___ a picnic.",
        wordBox: ["play", "plays", "played", "will play"],
        answers: ["play", "played", "will play"],
        clueWords: [["children"], ["playground"], ["game"], ["picnic"]],
        hints: [
          "What do the children do daily?",
          "What did they do last weekend?",
          "What will they do next weekend?"
        ],
        hint: "Select the proper tenses.",
        explanation: "'Play' is present; 'played' is past; 'will play' is future."
      },
      {
        text: "I ___ my room every weekend. Last weekend, I ___ it thoroughly, and next weekend, I ___ it again.",
        wordBox: ["clean", "cleans", "cleaned", "will clean"],
        answers: ["clean", "cleaned", "will clean"],
        clueWords: [["room"], ["thoroughly"], ["next weekend"]],
        hints: [
          "What do I do every weekend?",
          "What did I do last weekend?",
          "What will I do next weekend?"
        ],
        hint: "Apply present, past, and future tenses correctly.",
        explanation: "'Clean' is present; 'cleaned' is past; 'will clean' is future."
      }
    ]
  }
};

/* =====================================================
   GLOBAL GAME STATE
   ===================================================== */
let currentGrammarType = "prepositions";
let currentDifficulty = "P1"; // Using P1, P2, P3 for adjusted passages
let currentPassageIndex = 0;
let score = 0;
let stars = 0;
let hintUsage = {};
let selectedWord = null;
let timeLeft = 60;
let timerInterval = null;
let challengeMode = true;
let level = "Apprentice";
let performanceHistory = JSON.parse(localStorage.getItem("performanceHistory")) || [];
let accuracy = 0;

/* =====================================================
   DOM ELEMENT REFERENCES
   ===================================================== */
const grammarSelect = document.getElementById("grammar-type");
const difficultySelect = document.getElementById("difficulty-level");
let passageText = document.getElementById("passage-text");
let wordBox = document.getElementById("word-box");
const feedbackDisplay = document.getElementById("feedback");
const nextPassageButton = document.getElementById("next-btn");
const prevPassageButton = document.getElementById("prev-btn");
const hintButton = document.getElementById("hint-btn");
const clearButton = document.getElementById("clear-btn");
const shareButton = document.getElementById("share-btn");
const readPassageButton = document.getElementById("read-passage-btn");
const toggleChallengeButton = document.getElementById("toggle-challenge");
const progressDisplay = document.getElementById("progress");
const scoreDisplay = document.getElementById("score");
const starsDisplay = document.getElementById("stars");
const timerDisplay = document.getElementById("timer");
const progressBar = document.getElementById("progress-bar");
const timerBar = document.getElementById("timer-bar");
const levelDisplay = document.getElementById("level");
const toggleThemeButton = document.getElementById("toggle-theme");
const timerSettingSelect = document.getElementById("timer-setting");

// Additional narrative elements
const storylineModal = document.getElementById("storyline-modal");
const storylineText = document.getElementById("storyline-text");
const startQuestButton = document.getElementById("start-quest");

// Dyslexia-friendly toggle and text size slider
const toggleDyslexiaButton = document.getElementById("toggle-dyslexia");
toggleDyslexiaButton.addEventListener("click", () => {
  document.body.classList.toggle("dyslexia");
});
const textSizeSlider = document.getElementById("text-size-slider");
textSizeSlider.addEventListener("input", () => {
  const newSize = textSizeSlider.value;
  document.getElementById("passage-text").style.fontSize = newSize + "em";
  document.getElementById("word-box").style.fontSize = newSize + "em";
});

/* =====================================================
   SPEECH SYNTHESIS SETUP (UK Female Voice Fallback)
   ===================================================== */
const synth = window.speechSynthesis;
let voices = [];
let ukFemaleVoice = null;
function loadVoices() {
  voices = synth.getVoices();
  ukFemaleVoice = voices.find(voice =>
    voice.lang === "en-GB" &&
    (voice.name.toLowerCase().includes("female") || voice.name === "Samantha" || voice.name === "Kate")
  ) || voices.find(voice => voice.lang === "en-GB");
}
loadVoices();
synth.onvoiceschanged = loadVoices;
function speak(text) {
  if (!window.speechSynthesis) {
    feedbackDisplay.textContent = "Speech synthesis not supported in this browser.";
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
}

/* =====================================================
   ONBOARDING
   ===================================================== */
if (!localStorage.getItem("hasSeenTutorial")) {
  alert("Welcome to Grammar Cloze Adventure! Drag or tap a word to fill in each blank. Use the sidebar for hints and controls!");
  localStorage.setItem("hasSeenTutorial", "true");
  speak("Welcome to Grammar Cloze Adventure! Drag or tap a word to fill in each blank.");
}

/* =====================================================
   UTILITY FUNCTIONS
   ===================================================== */
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
  progressDisplay.textContent = `Progress: ${currentPassageIndex + 1} / ${window.passages[currentGrammarType][currentDifficulty].length}`;
  timerDisplay.textContent = `Time: ${timeLeft}s`;
  progressBar.style.width = `${((currentPassageIndex + 1) / window.passages[currentGrammarType][currentDifficulty].length) * 100}%`;
  if (challengeMode) {
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
      feedbackDisplay.textContent = "Time's up! Moving to next passage.";
      speak("Time's up! Moving to next passage.");
      setTimeout(() => nextPassageButton.click(), 1000);
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

/* =====================================================
   PERFORMANCE TRACKING FUNCTIONS
   ===================================================== */
function saveProgress(correct, total) {
  const accuracy = (correct / total) * 100;
  performanceHistory.push({
    grammarType: currentGrammarType,
    difficulty: currentDifficulty,
    passageIndex: currentPassageIndex,
    score: score,
    stars: stars,
    accuracy: accuracy,
    timestamp: new Date().toISOString()
  });
  localStorage.setItem("performanceHistory", JSON.stringify(performanceHistory));
}

function adjustDifficulty() {
  if (performanceHistory.length >= 5) {
    const recent = performanceHistory.slice(-5);
    const avg = recent.reduce((sum, entry) => sum + entry.accuracy, 0) / recent.length;
    if (avg > 80 && currentDifficulty !== "P3") {
      currentDifficulty = currentDifficulty === "P1" ? "P2" : "P3";
      difficultySelect.value = currentDifficulty;
      feedbackDisplay.textContent = `Great job! Moving to ${currentDifficulty} difficulty.`;
      speak(`Great job! Moving to ${currentDifficulty} difficulty.`);
    } else if (avg < 50 && currentDifficulty !== "P1") {
      currentDifficulty = currentDifficulty === "P3" ? "P2" : "P1";
      difficultySelect.value = currentDifficulty;
      feedbackDisplay.textContent = `Let's try ${currentDifficulty} difficulty to build your skills.`;
      speak(`Let's try ${currentDifficulty} difficulty to build your skills.`);
    }
  }
}

/* =====================================================
   NARRATIVE FUNCTIONS
   ===================================================== */
function showStorylineModal(grammarType) {
  const questMessages = {
    prepositions: "Welcome, young wizard! Collect the Gem of Prepositions by navigating the Enchanted HDB Estate.",
    conjunctions: "Next, find the Gem of Conjunctions by solving the Wise Owl’s riddles in the void deck.",
    subjectVerbAgreement: "Brilliant! Unleash your power by mastering Subject-Verb Agreement in the community centre.",
    pronouns: "Awesome! Gather the Gem of Pronouns by following clues in the hawker centre.",
    adjectivesAdverbs: "Fantastic! Capture the Gem of Adjectives & Adverbs by exploring the enchanted playground.",
    tenses: "Great work! Secure the Gem of Tenses as you journey through time in the HDB garden."
  };
  storylineText.textContent = questMessages[grammarType] || "Continue your quest to master grammar!";
  storylineModal.style.display = "flex";
}

startQuestButton.addEventListener("click", () => {
  storylineModal.style.display = "none";
  displayPassage();
});

function getNarrativeIntro(grammarType, passageIndex) {
  const narratives = {
    prepositions: [
      "The wizard reaches a river near an HDB block. Help him cross by completing the sentence.",
      "A hidden void deck appears. Unlock its secrets using prepositions."
    ],
    conjunctions: [
      "The Wise Owl asks a riddle at the community centre. Solve it with the right conjunction.",
      "A magical door blocks your path in the HDB corridor. Connect the ideas to open it."
    ],
    subjectVerbAgreement: [
      "Enchanted creatures gather at the hawker centre. Help the wizard form the right verbs.",
      "A spell of correct agreement is needed in the HDB garden. Fill in the blanks accurately."
    ],
    pronouns: [
      "Lost in the HDB maze, a precious book awaits. Find the correct pronoun to locate it.",
      "The wizard’s scroll is missing at the wet market. Use the clues to uncover the right pronouns."
    ],
    adjectivesAdverbs: [
      "A mysterious creature roams the HDB playground. Describe it with the right adjectives and adverbs.",
      "A burst of colors appears at the pasar malam. Choose the correct words to capture its beauty."
    ],
    tenses: [
      "Time shifts in the HDB garden. Use the correct tenses to reveal its secrets.",
      "A tale of past, present, and future unfolds at the community centre. Complete the sentences to unlock the mystery."
    ]
  };
  return narratives[grammarType] && narratives[grammarType][passageIndex]
    ? narratives[grammarType][passageIndex]
    : "Continue your quest with this challenge.";
}

function getRewardMessage(grammarType) {
  const rewards = {
    prepositions: "Well done! You’ve found the Gem of Prepositions!",
    conjunctions: "Great job! You’ve earned the Gem of Conjunctions!",
    subjectVerbAgreement: "Excellent! You’ve unlocked the Gem of Subject-Verb Agreement!",
    pronouns: "Awesome! You’ve collected the Gem of Pronouns!",
    adjectivesAdverbs: "Fantastic! You’ve secured the Gem of Adjectives & Adverbs!",
    tenses: "Brilliant! You’ve captured the Gem of Tenses!"
  };
  return rewards[grammarType] || "You’ve completed this part of the quest!";
}

/* =====================================================
   DISPLAY PASSAGE
   ===================================================== */
function displayPassage() {
  clearInterval(timerInterval);
  hintUsage = {};
  selectedWord = null;
  
  const passage = window.passages[currentGrammarType][currentDifficulty][currentPassageIndex];
  if (!passage) {
    passageText.innerHTML = "<p>Error: Passage not found. Try a different difficulty or grammar type.</p>";
    feedbackDisplay.textContent = "Error: Passage not found.";
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

/* =====================================================
   DRAG-AND-DROP HANDLERS
   ===================================================== */
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

/* =====================================================
   WORD PLACEMENT & FEEDBACK
   ===================================================== */
function placeWord(blank, word) {
  blank.textContent = word;
  blank.classList.add("filled");
  blank.style.transition = "transform 0.3s ease";
  blank.style.transform = "scale(1.2)";
  setTimeout(() => {
    blank.style.transform = "scale(1)";
  }, 300);
  checkAnswer(blank);
}
function checkAnswer(blank) {
  const blankId = parseInt(blank.getAttribute("data-blank"));
  const userAnswer = blank.textContent.trim().toLowerCase();
  const correctAnswer = window.passages[currentGrammarType][currentDifficulty][currentPassageIndex].answers[blankId - 1].toLowerCase();
  if (userAnswer === correctAnswer) {
    blank.classList.add("correct", "animate-correct");
    score += 10;
    stars += 1;
    feedbackDisplay.textContent = `Correct! ${window.passages[currentGrammarType][currentDifficulty][currentPassageIndex].explanation || ""}`;
    feedbackDisplay.style.color = "green";
    speak("Correct! Great job!");
  } else {
    blank.classList.add("incorrect", "animate-incorrect");
    feedbackDisplay.textContent = `Incorrect! The correct answer is '${correctAnswer}'. ${window.passages[currentGrammarType][currentDifficulty][currentPassageIndex].explanation || ""} Try again?`;
    feedbackDisplay.style.color = "red";
    speak("Incorrect! Try again.");
    blank.classList.remove("filled");
    blank.textContent = "_";
  }
  updateStatus();
}

/* =====================================================
   NAVIGATION & CONTROLS
   ===================================================== */
grammarSelect.addEventListener("change", () => {
  currentGrammarType = grammarSelect.value;
  currentPassageIndex = 0;
  timeLeft = (timerSettingSelect.value === "off") ? 0 : parseInt(timerSettingSelect.value);
  showStorylineModal(currentGrammarType);
  updateStatus();
});
difficultySelect.addEventListener("change", () => {
  currentDifficulty = difficultySelect.value;
  currentPassageIndex = 0;
  timeLeft = (timerSettingSelect.value === "off") ? 0 : parseInt(timerSettingSelect.value);
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
    const rewardMessage = getRewardMessage(currentGrammarType);
    feedbackDisplay.textContent = rewardMessage;
    feedbackDisplay.style.color = "green";
    speak(rewardMessage);
    if (challengeMode) {
      if (Object.keys(hintUsage).length === 0) {
        score += 20;
        feedbackDisplay.innerHTML += ' <span class="bonus">+20!</span>';
        speak("Bonus! 20 extra points for no hints.");
      }
      if (timeLeft > (parseInt(timerSettingSelect.value) * 0.5)) {
        score += 10;
        feedbackDisplay.innerHTML += ' <span class="bonus">+10!</span>';
        speak("Plus 10 extra points for quick completion.");
      }
    }
    // Save progress and adjust difficulty
    let correctCount = 0;
    blanks.forEach(blank => {
      if (blank.classList.contains("correct")) correctCount++;
    });
    saveProgress(correctCount, blanks.length);
    adjustDifficulty();
  }
  clearInterval(timerInterval);
  currentPassageIndex++;
  if (currentPassageIndex >= window.passages[currentGrammarType][currentDifficulty].length) {
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
  const passage = window.passages[currentGrammarType][currentDifficulty][currentPassageIndex];
  if (passage.hint) {
    feedbackDisplay.textContent = passage.hint;
    feedbackDisplay.style.color = "blue";
    speak(passage.hint);
  }
});
shareButton.addEventListener("click", () => {
  const shareData = {
    title: "Grammar Cloze Adventure",
    text: `I am a ${level} with a score of ${score} in Grammar Cloze Adventure! Can you beat my score?`,
    url: window.location.href
  };
  if (navigator.share) {
    navigator.share(shareData).catch(err => console.error("Error sharing:", err));
  } else {
    alert("Sharing not supported on this browser.");
  }
});
readPassageButton.addEventListener("click", () => {
  const passage = window.passages[currentGrammarType][currentDifficulty][currentPassageIndex];
  if (passage && passage.text) {
    const textToSpeak = passage.text.replace(/\d+/g, "blank");
    speak(textToSpeak);
  } else {
    feedbackDisplay.textContent = "Error: No passage to read.";
  }
});
toggleChallengeButton.addEventListener("click", () => {
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
});
toggleThemeButton.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  toggleThemeButton.textContent = document.body.classList.contains("light-mode") ? "Dark Mode" : "Light Mode";
});
document.addEventListener("keydown", (e) => {
  if (e.key.toLowerCase() === "h") {
    hintButton.click();
  } else if (e.key.toLowerCase() === "n") {
    nextPassageButton.click();
  }
});

/* =====================================================
   INITIALIZE GAME
   ===================================================== */
displayPassage();
updateStatus();
