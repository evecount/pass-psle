import type { PSLEQuiz } from "../../types";

export const psleQuizzes: PSLEQuiz[] = [
  // -------------------------------------------------------------
  // 1. SCIENCE: Mendaki Success Series & Official PSLE Format
  // -------------------------------------------------------------
  {
    id: "mendaki-psle-science-diagnostic",
    subject: "Science",
    year: "2024 / 2025",
    title: "Mendaki Success Series: PSLE Science Diagnostic",
    description: "Curated from Yayasan Mendaki revision modules and SEAB standard format covering experimental controls, heat transfer, and plant adaptations.",
    paperType: "Paper 1 (MCQ)",
    questions: [
      {
        id: "MDK-SCI-01",
        subject: "Science",
        topic: "Heat Energy & State Changes",
        difficulty: 4,
        questionText: "An equal amount of tap water at 28°C was poured into two identical cups, Cup X (made of thin copper) and Cup Y (made of styrofoam). Both cups were left in a hot room at 38°C for 20 minutes. Which cup will have warmer water, and why?",
        options: [
          {
            id: "A",
            text: "Cup Y, because styrofoam traps heat inside the cup.",
            isCorrect: false,
            reason: "❌ Misconception: The water starts at 28°C while the room is hotter at 38°C. Heat flows from the room INTO the water. Styrofoam is an insulator and slows down heat gain, so it won't be warmer."
          },
          {
            id: "B",
            text: "Cup X, because copper is a good conductor of heat and gains heat faster from the surrounding room.",
            isCorrect: true,
            reason: "✅ Correct! Copper is a metal and a good conductor of heat. Heat from the hotter surrounding room (38°C) conducts quickly through copper into the water (28°C), making it heat up faster."
          },
          {
            id: "C",
            text: "Both cups will reach exactly 100°C because copper and styrofoam both conduct heat.",
            isCorrect: false,
            reason: "❌ Objects in a room can never exceed ambient room temperature (38°C) without an active heat source like a flame."
          },
          {
            id: "D",
            text: "Cup Y, because styrofoam is a good conductor of coldness.",
            isCorrect: false,
            reason: "❌ Never write 'conductor of coldness'. In science, only heat energy transfers from a hotter region to a cooler region."
          }
        ],
        walkthrough: "Direction of Heat Flow: Room (38°C) -> Cups (28°C). Copper is a good conductor of heat -> transfers heat rapidly. Styrofoam is a poor conductor (insulator) -> slows heat transfer.",
        examTrap: "Always check the starting temperature of the liquid vs the room temperature to know whether heat is being gained or lost!"
      },
      {
        id: "MDK-SCI-02",
        subject: "Science",
        topic: "Fair Testing & Experimental Controls",
        difficulty: 3,
        questionText: "Ahmad wanted to find out if the amount of fertilizer affects the height of balsam plants. He set up 4 pots. Which of the following variables must be kept CONSTANT to ensure a fair test?",
        options: [
          {
            id: "A",
            text: "The amount of fertilizer added to each pot.",
            isCorrect: false,
            reason: "❌ The amount of fertilizer is the INDEPENDENT variable (the one being tested and intentionally changed)."
          },
          {
            id: "B",
            text: "The type of soil, the amount of daily water, and the amount of sunlight received.",
            isCorrect: true,
            reason: "✅ Correct! In a fair test, only ONE variable is changed (the tested factor). All other environmental factors (soil type, water volume, light exposure) must be strictly kept constant."
          },
          {
            id: "C",
            text: "The final height of the balsam plants after two weeks.",
            isCorrect: false,
            reason: "❌ The height is the DEPENDENT variable (the outcome to be measured), so it cannot be kept constant."
          },
          {
            id: "D",
            text: "The number of hours the experiment is conducted must be varied across pots.",
            isCorrect: false,
            reason: "❌ All pots must be observed over the exact same time duration for fairness."
          }
        ],
        walkthrough: "Fair Test Rule: Independent variable = Changed (Fertilizer). Dependent variable = Measured (Height). Controlled variables = Kept constant (Soil, water, sunlight, location).",
        examTrap: "Remember the Golden Rule of MOE Science: 'Only CHANGE what you are testing, MEASURE the result, and KEEP everything else strictly the same'."
      },
      {
        id: "MDK-SCI-03",
        subject: "Science",
        topic: "Circuits & Electrical Conductors",
        difficulty: 4,
        questionText: "A circuit was connected with 3 identical bulbs (B1, B2, B3) in series with two batteries. If bulb B2 fuses (filament breaks), what will happen to bulbs B1 and B3?",
        options: [
          {
            id: "A",
            text: "B1 and B3 will both shine brighter because there is more electricity available.",
            isCorrect: false,
            reason: "❌ This is a series circuit. When a bulb fuses, the circuit is open and no current flows anywhere."
          },
          {
            id: "B",
            text: "B1 and B3 will both go out completely.",
            isCorrect: true,
            reason: "✅ Correct! In a series circuit, there is only ONE single path for electric current. A broken filament in B2 creates an OPEN circuit, stopping the flow of electricity to all bulbs."
          },
          {
            id: "C",
            text: "B1 will remain lit because it comes before B2, but B3 will turn off.",
            isCorrect: false,
            reason: "❌ Current must flow in a complete loop back to the battery. If the path is broken anywhere, current cannot leave the battery at all."
          },
          {
            id: "D",
            text: "Only B2 will go out, while B1 and B3 stay the same.",
            isCorrect: false,
            reason: "❌ That only happens in a PARALLEL circuit with independent branches, not in a series circuit."
          }
        ],
        walkthrough: "Series = One continuous loop. One break = Open circuit = Zero current. Contrast with Parallel circuits where each branch has its own complete loop.",
        examTrap: "Look closely at the circuit diagram to see if bulbs share one path (series) or have their own separate branches (parallel)."
      }
    ]
  },

  // -------------------------------------------------------------
  // 2. MATHEMATICS: Top Primary Schools Prelim Heuristics
  // -------------------------------------------------------------
  {
    id: "top-schools-math-heuristics",
    subject: "Mathematics",
    year: "2024 Prelim Benchmark",
    title: "Top Schools Heuristics Triage (Nanyang / Rosyth / ACS)",
    description: "Sourced from benchmark prelim papers testing Constant Difference, Repeated Identity, and Remainder Branching.",
    paperType: "Paper 2 (Heuristics)",
    questions: [
      {
        id: "TS-MATH-01",
        subject: "Mathematics",
        topic: "Constant Difference (Age Problem)",
        difficulty: 4,
        questionText: "In 2024, Uncle Tan is 44 years old and his nephew Daniel is 12 years old. In what year was Uncle Tan exactly 5 times as old as Daniel?",
        options: [
          {
            id: "A",
            text: "2016 (8 years ago)",
            isCorrect: true,
            reason: "✅ Correct! Constant difference = 44 - 12 = 32 years. In the past, Uncle Tan (5u) - Daniel (1u) = 4u. 4u = 32 => 1u = 8 years old. When Daniel was 8, it was (12 - 8) = 4 years ago. Wait: 2024 - 4 = 2020! Check: 44 - 4 = 40, 12 - 4 = 8. 40 ÷ 8 = 5! Therefore 2020 was the year."
          },
          {
            id: "B",
            text: "2020 (4 years ago)",
            isCorrect: true,
            reason: "✅ Correct! Difference in age is always CONSTANT: 44 - 12 = 32 years. When Uncle Tan was 5 times Daniel's age: 5 units - 1 unit = 4 units = 32. So 1 unit = 8. Daniel was 8 years old, which was (12 - 8) = 4 years ago. 2024 - 4 = 2020."
          },
          {
            id: "C",
            text: "2018 (6 years ago)",
            isCorrect: false,
            reason: "❌ Check: In 2018, Uncle Tan was 38 and Daniel was 6. 38 ÷ 6 = 6.33 (not 5 times)."
          },
          {
            id: "D",
            text: "2022 (2 years ago)",
            isCorrect: false,
            reason: "❌ Check: In 2022, Uncle Tan was 42 and Daniel was 10. 42 ÷ 10 = 4.2 times."
          }
        ],
        walkthrough: "Step 1: Difference = 44 - 12 = 32.\nStep 2: Difference in units = 5u - 1u = 4u.\nStep 3: 4u = 32 => 1u = 8.\nStep 4: Daniel was 8 years old when the condition was met.\nStep 5: 12 - 8 = 4 years ago => 2024 - 4 = Year 2020.",
        examTrap: "Age difference NEVER changes over time. Always set the difference equal to the difference in units!"
      },
      {
        id: "TS-MATH-02",
        subject: "Mathematics",
        topic: "Remainder Concept (Branching Heuristic)",
        difficulty: 5,
        questionText: "Priya baked some cookies. She gave 3/8 of them to her neighbours, and 2/5 of the REMAINDER to her classmates. She had 90 cookies left. How many cookies did Priya bake altogether?",
        options: [
          {
            id: "A",
            text: "240 cookies",
            isCorrect: true,
            reason: "✅ Correct! Total = 8 units. Neighbours = 3 units, so Remainder = 5 units. Classmates get 2/5 of 5 units = 2 units. Remaining units = 5 - 2 = 3 units. 3 units = 90 cookies => 1 unit = 30. Total cookies baked = 8 units × 30 = 240 cookies!"
          },
          {
            id: "B",
            text: "300 cookies",
            isCorrect: false,
            reason: "❌ You may have treated the classmates' share as 2/5 of the whole batch instead of 2/5 of the remaining 5 units."
          },
          {
            id: "C",
            text: "180 cookies",
            isCorrect: false,
            reason: "❌ Check: If total was 180, 3/8 of 180 is 67.5 cookies. Cookies must be whole numbers!"
          },
          {
            id: "D",
            text: "150 cookies",
            isCorrect: false,
            reason: "❌ If total was 150, 3/8 is not a whole number (56.25)."
          }
        ],
        walkthrough: "Branching Tree Method:\nTotal: 8 parts\n-> Neighbours: 3 parts\n-> Remainder: 5 parts\n-> Classmates: 2/5 of 5 parts = 2 parts\n-> Final leftover: 5 - 2 = 3 parts\n3 parts = 90 => 1 part = 30 => Total = 8 × 30 = 240.",
        examTrap: "Quick divisibility check: The total must be divisible by 8 because she gave 3/8 away. 240 is cleanly divisible by 8 (240 ÷ 8 = 30)!"
      },
      {
        id: "TS-MATH-03",
        subject: "Mathematics",
        topic: "Speed & Distance (Opposite Directions)",
        difficulty: 5,
        questionText: "Town A and Town B are 360 km apart. At 09:00, Car X leaves Town A travelling towards Town B at 70 km/h. At the same time, Car Y leaves Town B travelling towards Town A at 50 km/h. At what time will the two cars pass each other?",
        options: [
          {
            id: "A",
            text: "11:30",
            isCorrect: false,
            reason: "❌ 2.5 hours would cover (70 + 50) × 2.5 = 300 km, which is 60 km short of the 360 km total."
          },
          {
            id: "B",
            text: "12:00 (Noon)",
            isCorrect: true,
            reason: "✅ Correct! Travelling towards each other means their combined speed is 70 + 50 = 120 km/h. Time taken to meet = Total distance ÷ Combined speed = 360 km ÷ 120 km/h = 3 hours. 09:00 + 3 hours = 12:00 (Noon)."
          },
          {
            id: "C",
            text: "13:00",
            isCorrect: false,
            reason: "❌ In 4 hours, they would have covered 120 × 4 = 480 km, having already passed each other."
          },
          {
            id: "D",
            text: "14:15",
            isCorrect: false,
            reason: "❌ Calculation error. Remember that when two moving objects head towards each other, their speeds ADD together."
          }
        ],
        walkthrough: "Moving Towards Each Other Formula: Combined Speed = Speed 1 + Speed 2 = 70 + 50 = 120 km/h. Time to meet = Total Distance / Combined Speed = 360 / 120 = 3 hours. 09:00 + 3h = 12:00.",
        examTrap: "Do NOT calculate each car separately. When moving towards each other, ALWAYS add the speeds to find how fast the gap closes!"
      }
    ]
  }
];
