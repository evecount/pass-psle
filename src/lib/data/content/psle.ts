import type { PSLEQuiz } from "../../types";

export const psleQuizzes: PSLEQuiz[] = [
  {
    id: "psle-science-mastery",
    subject: "Science",
    year: "2024 / 2025",
    title: "PSLE Science: High-Yield MCQ Diagnostic",
    description: "Core syllabus questions testing experimental variables, heat transfer, circuits, and adaptations.",
    paperType: "Paper 1 (MCQ)",
    questions: [
      {
        id: "SCI-101",
        subject: "Science",
        topic: "Heat Energy & Temperature",
        difficulty: 4,
        questionText: "A glass beaker filled with hot water at 90°C was left on a wooden table in an air-conditioned room at 20°C. Which of the following statements correctly explains what happens after 3 hours?",
        options: [
          {
            id: "A",
            text: "The water lost coldness to the surrounding air until it reached 0°C.",
            isCorrect: false,
            reason: "❌ Misconception alert: 'Coldness' does not flow. In science, heat energy always flows from a hotter region to a cooler region, never 'coldness'."
          },
          {
            id: "B",
            text: "The water lost heat to the surrounding air until it reached 20°C (room temperature).",
            isCorrect: true,
            reason: "✅ Correct! Heat energy flows from the hotter water (90°C) to the cooler surrounding air (20°C) until thermal equilibrium (room temperature) is reached."
          },
          {
            id: "C",
            text: "The water absorbed heat from the wooden table because wood is a good conductor of heat.",
            isCorrect: false,
            reason: "❌ Double error: First, the water is at 90°C and the table is at 20°C, so heat flows out of water. Second, wood is a poor conductor of heat (an insulator)."
          },
          {
            id: "D",
            text: "The water temperature decreased to 0°C because the room was air-conditioned.",
            isCorrect: false,
            reason: "❌ An object left in a room cannot cool below the room's ambient temperature (20°C) without a refrigerator or freezer."
          }
        ],
        walkthrough: "Heat transfer always flows from hotter regions to cooler regions until temperatures equalize at room temperature (20°C).",
        examTrap: "Never write 'gained coldness' or 'lost coldness'. Markers will deduct marks immediately. Always write 'lost heat to the cooler surroundings'."
      },
      {
        id: "SCI-102",
        subject: "Science",
        topic: "Forces (Friction & Gravity)",
        difficulty: 3,
        questionText: "Sarah pushes a wooden block along a rough concrete floor. The block moves forward, slows down, and eventually stops. What caused the block to stop moving?",
        options: [
          {
            id: "A",
            text: "Gravitational force pulled the block downwards and backward.",
            isCorrect: false,
            reason: "❌ Gravity only acts vertically downwards towards the centre of the Earth. It does not pull objects backward horizontally."
          },
          {
            id: "B",
            text: "The pushing force from Sarah ran out inside the block.",
            isCorrect: false,
            reason: "❌ Force is not an ingredient that gets stored up and 'used up' inside an object once contact is broken."
          },
          {
            id: "C",
            text: "Frictional force between the rough floor and the block acted in the opposite direction of motion.",
            isCorrect: true,
            reason: "✅ Correct! Friction opposes relative motion between two surfaces in contact, converting kinetic energy into heat/sound and bringing the block to rest."
          },
          {
            id: "D",
            text: "Magnetic force from the Earth repelled the wooden block.",
            isCorrect: false,
            reason: "❌ Wood is a non-magnetic material and cannot experience magnetic repulsion."
          }
        ],
        walkthrough: "Identify forces acting on the moving block: Normal force & gravity cancel vertically. Friction acts opposite to forward motion horizontally.",
        examTrap: "Do not confuse the direction of friction: friction ALWAYS opposes the direction of movement."
      },
      {
        id: "SCI-103",
        subject: "Science",
        topic: "Plant Systems (Photosynthesis & Respiration)",
        difficulty: 4,
        questionText: "A green plant inside a sealed clear glass jar was placed in a sunny garden for 6 hours. What happened to the levels of Oxygen and Carbon Dioxide inside the jar?",
        options: [
          {
            id: "A",
            text: "Oxygen decreased while Carbon Dioxide increased.",
            isCorrect: false,
            reason: "❌ In sunlight, the rate of photosynthesis is significantly higher than the rate of respiration."
          },
          {
            id: "B",
            text: "Oxygen increased while Carbon Dioxide decreased.",
            isCorrect: true,
            reason: "✅ Correct! With ample sunlight, photosynthesis produces oxygen faster than respiration consumes it, and consumes carbon dioxide faster than respiration produces it."
          },
          {
            id: "C",
            text: "Both Oxygen and Carbon Dioxide remained unchanged because the jar was sealed.",
            isCorrect: false,
            reason: "❌ Living plants inside a sealed environment continuously exchange gases through stomata during life processes."
          },
          {
            id: "D",
            text: "Both gases decreased because the plant absorbed all the air.",
            isCorrect: false,
            reason: "❌ Plants produce oxygen during photosynthesis, replenishing the jar's gas volume."
          }
        ],
        walkthrough: "Photosynthesis equation: Carbon Dioxide + Water + Light -> Glucose + Oxygen. Since light is present, photosynthesis dominates.",
        examTrap: "Remember that plants respire ALL the time (day and night), but photosynthesize ONLY in light."
      }
    ]
  },
  {
    id: "psle-math-heuristics",
    subject: "Mathematics",
    year: "2024 / 2025",
    title: "PSLE Math: Heuristic & Problem Sums Triage",
    description: "Units & Parts, Constant Difference, and Remainder concepts tested without the math anxiety.",
    paperType: "Paper 2 (Heuristics)",
    questions: [
      {
        id: "MATH-201",
        subject: "Mathematics",
        topic: "Constant Difference Model",
        difficulty: 4,
        questionText: "Mother is 36 years old and her daughter is 8 years old. How many years ago was Mother 5 times as old as her daughter?",
        options: [
          {
            id: "A",
            text: "1 year ago",
            isCorrect: true,
            reason: "✅ Correct! Age difference is CONSTANT (36 - 8 = 28). When Mother was 5x daughter, the difference is (5 units - 1 unit = 4 units). 4 units = 28, so 1 unit = 7 years old. The daughter was 7 when Mother was 5x, which was (8 - 7) = 1 year ago!"
          },
          {
            id: "B",
            text: "2 years ago",
            isCorrect: false,
            reason: "❌ Check: 2 years ago, Mother was 34 and daughter was 6. 34 ÷ 6 = 5.67 (not 5 times)."
          },
          {
            id: "C",
            text: "3 years ago",
            isCorrect: false,
            reason: "❌ Check: 3 years ago, Mother was 33 and daughter was 5. 33 ÷ 5 = 6.6 (not 5 times)."
          },
          {
            id: "D",
            text: "4 years ago",
            isCorrect: false,
            reason: "❌ Check: 4 years ago, Mother was 32 and daughter was 4. 32 ÷ 4 = 8 times."
          }
        ],
        walkthrough: "Heuristic: Age difference NEVER changes. Current difference = 36 - 8 = 28. In the past: Mother (5u) - Daughter (1u) = 4u. 4 units = 28 => 1 unit = 7. Current age (8) - Past age (7) = 1 year ago.",
        examTrap: "Never guess-and-check if you can use the Constant Difference model—it saves 5 precious minutes."
      },
      {
        id: "MATH-202",
        subject: "Mathematics",
        topic: "Fractions & Remainder Concept",
        difficulty: 4,
        questionText: "Marcus had a box of marbles. He gave 2/5 of the marbles to John, and 1/3 of the REMAINDER to Wei Ling. He had 24 marbles left. How many marbles did Marcus have at first?",
        options: [
          {
            id: "A",
            text: "45 marbles",
            isCorrect: false,
            reason: "❌ Did you take 1/3 of the TOTAL instead of 1/3 of the REMAINDER? Always read the word 'remainder' carefully!"
          },
          {
            id: "B",
            text: "60 marbles",
            isCorrect: true,
            reason: "✅ Correct! Total = 5 units. Gave away 2 units, Remainder = 3 units. Gave 1/3 of 3 units = 1 unit to Wei Ling. Left with (3 - 1) = 2 units. 2 units = 24 => 1 unit = 12. Total = 5 units × 12 = 60 marbles!"
          },
          {
            id: "C",
            text: "72 marbles",
            isCorrect: false,
            reason: "❌ Check: If total was 72, 2/5 is not even a whole number of marbles (72 × 2/5 = 28.8). Marbles must be whole numbers!"
          },
          {
            id: "D",
            text: "36 marbles",
            isCorrect: false,
            reason: "❌ If total was 36, 2/5 of 36 is 14.4 marbles (impossible)."
          }
        ],
        walkthrough: "Branching Method: Total (5u) -> Gave 2u -> Remainder (3u) -> Gave 1/3 of 3u (= 1u) -> Leftover = 2u. 2u = 24 => 1u = 12 => Total = 5 × 12 = 60.",
        examTrap: "Common trap: Notice that total marbles must be divisible by 5 because 2/5 are given away. Only 60 is a multiple of 5 among the realistic choices!"
      }
    ]
  }
];
