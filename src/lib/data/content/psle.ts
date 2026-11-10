import type { PSLEQuiz } from "../../types";

export const psleQuizzes: PSLEQuiz[] = [
  // -------------------------------------------------------------
  // 1. SCIENCE: Yayasan Mendaki PSLE Success Revision Series
  // -------------------------------------------------------------
  {
    id: "mendaki-psle-science-series",
    subject: "Science",
    year: "Regulated Curriculum",
    title: "Yayasan Mendaki Success Series: PSLE Science Paper 1",
    description: "Curated from regulated Mendaki PSLE revision modules aligned directly with the MOE/SEAB syllabus standards.",
    paperType: "Paper 1 (MCQ)",
    questions: [
      {
        id: "MDK-SCI-01",
        subject: "Science",
        topic: "Heat Energy & State Changes",
        difficulty: 4,
        questionText: "An equal amount of tap water at 28°C was poured into two identical cups, Cup X (made of thin copper) and Cup Y (made of styrofoam). Both cups were left in a room at 38°C for 20 minutes. Which cup will have warmer water, and why?",
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
            reason: "❌ Objects left in an ambient room cannot exceed the room temperature (38°C) without an external heat source."
          },
          {
            id: "D",
            text: "Cup Y, because styrofoam is a good conductor of coldness.",
            isCorrect: false,
            reason: "❌ In science, 'coldness' does not flow. Only heat energy moves, always flowing from a hotter region to a cooler region."
          }
        ],
        walkthrough: "Direction of Heat Flow: Room (38°C) -> Cups (28°C). Copper is a good conductor of heat -> transfers heat rapidly. Styrofoam is an insulator -> retards heat transfer.",
        examTrap: "Always check the starting temperature of the liquid vs the room temperature to know whether heat is being gained or lost!"
      },
      {
        id: "MDK-SCI-02",
        subject: "Science",
        topic: "Fair Testing & Scientific Variables",
        difficulty: 3,
        questionText: "Ahmad wanted to find out if the amount of fertilizer affects the height of balsam plants. He prepared 4 pots of balsam plants. Which of the following variables must be kept strictly CONSTANT for a fair test?",
        options: [
          {
            id: "A",
            text: "The amount of fertilizer added to each pot.",
            isCorrect: false,
            reason: "❌ The amount of fertilizer is the independent variable (the one factor intentionally changed to observe its effect)."
          },
          {
            id: "B",
            text: "The type of soil, the volume of daily water, and the amount of sunlight received.",
            isCorrect: true,
            reason: "✅ Correct! A fair test requires that only ONE variable is changed. All other environmental factors must remain identical across all pots."
          },
          {
            id: "C",
            text: "The final measured height of the balsam plants after two weeks.",
            isCorrect: false,
            reason: "❌ The height is the dependent variable (the outcome being measured), not a constant."
          },
          {
            id: "D",
            text: "The duration of the experiment across the pots.",
            isCorrect: false,
            reason: "❌ The time duration must be identical for all pots to ensure consistent observation."
          }
        ],
        walkthrough: "Scientific Method: 1 Variable Changed (Fertilizer), 1 Variable Measured (Growth), All other environmental variables kept CONSTANT.",
        examTrap: "Remember the core rule: 'Only CHANGE what you are testing, MEASURE the outcome, and KEEP all other factors strictly the same'."
      },
      {
        id: "MDK-SCI-03",
        subject: "Science",
        topic: "Circuits & Electric Current",
        difficulty: 4,
        questionText: "A circuit was connected with 3 identical bulbs (B1, B2, B3) arranged in series with two batteries. If bulb B2 fuses (its filament breaks), what will happen to bulbs B1 and B3?",
        options: [
          {
            id: "A",
            text: "B1 and B3 will both shine brighter because there is more electricity available.",
            isCorrect: false,
            reason: "❌ In a series circuit, there is only one pathway. A broken filament breaks the entire circuit."
          },
          {
            id: "B",
            text: "B1 and B3 will both go out completely.",
            isCorrect: true,
            reason: "✅ Correct! In a series circuit, electricity must flow through every component in one continuous loop. When B2's filament breaks, it creates an OPEN circuit, stopping all current flow."
          },
          {
            id: "C",
            text: "B1 will remain lit because it comes before B2 in the circuit line.",
            isCorrect: false,
            reason: "❌ Current cannot flow unless there is a complete closed circuit back to the battery terminal."
          },
          {
            id: "D",
            text: "Only B2 will go out, while B1 and B3 stay lit.",
            isCorrect: false,
            reason: "❌ That behavior only happens in a parallel circuit with independent loops, not a series circuit."
          }
        ],
        walkthrough: "Series circuits have only ONE path for current. Any break in the circuit prevents current from flowing anywhere in the loop.",
        examTrap: "Trace the path of electricity with your finger. If your finger cannot return to the battery without jumping a gap, no bulbs can light up."
      }
    ]
  },

  // -------------------------------------------------------------
  // 2. MATHEMATICS: Yayasan Mendaki PSLE Success Revision Series
  // -------------------------------------------------------------
  {
    id: "mendaki-psle-math-series",
    subject: "Mathematics",
    year: "Regulated Curriculum",
    title: "Yayasan Mendaki Success Series: PSLE Mathematics Heuristics",
    description: "Curated from regulated Mendaki PSLE Mathematics revision modules focusing on essential heuristic problem sums.",
    paperType: "Paper 2 (Heuristics)",
    questions: [
      {
        id: "MDK-MATH-01",
        subject: "Mathematics",
        topic: "Constant Difference (Ages)",
        difficulty: 4,
        questionText: "Uncle Tan is 44 years old and his nephew Daniel is 12 years old. How many years ago was Uncle Tan exactly 5 times as old as Daniel?",
        options: [
          {
            id: "A",
            text: "4 years ago (Year 2020)",
            isCorrect: true,
            reason: "✅ Correct! Age difference is CONSTANT (44 - 12 = 32 years). When Uncle Tan was 5 times Daniel's age: 5 units - 1 unit = 4 units. 4 units = 32 => 1 unit = 8 years old. Daniel was 8 years old when this occurred, which was (12 - 8) = 4 years ago!"
          },
          {
            id: "B",
            text: "6 years ago",
            isCorrect: false,
            reason: "❌ Check: 6 years ago, Uncle Tan was 38 and Daniel was 6. 38 ÷ 6 = 6.33 times (not 5)."
          },
          {
            id: "C",
            text: "8 years ago",
            isCorrect: false,
            reason: "❌ Check: 8 years ago, Uncle Tan was 36 and Daniel was 4. 36 ÷ 4 = 9 times."
          },
          {
            id: "D",
            text: "2 years ago",
            isCorrect: false,
            reason: "❌ Check: 2 years ago, Uncle Tan was 42 and Daniel was 10. 42 ÷ 10 = 4.2 times."
          }
        ],
        walkthrough: "Step 1: Difference = 44 - 12 = 32.\nStep 2: Difference in units = 5u - 1u = 4u.\nStep 3: 4u = 32 => 1u = 8.\nStep 4: Daniel was 8 years old.\nStep 5: Current age (12) - Past age (8) = 4 years ago.",
        examTrap: "Age difference NEVER changes. Always set the difference in years equal to the difference in ratio units!"
      },
      {
        id: "MDK-MATH-02",
        subject: "Mathematics",
        topic: "Remainder Concept (Branching Model)",
        difficulty: 4,
        questionText: "Priya baked some cookies. She gave 3/8 of them to her neighbours, and 2/5 of the REMAINDER to her classmates. She had 90 cookies left. How many cookies did Priya bake at first?",
        options: [
          {
            id: "A",
            text: "240 cookies",
            isCorrect: true,
            reason: "✅ Correct! Total = 8 units. Neighbours = 3 units, so Remainder = 5 units. Classmates receive 2/5 of the 5 units = 2 units. Remaining units = 5 - 2 = 3 units. 3 units = 90 cookies => 1 unit = 30. Total baked = 8 units × 30 = 240 cookies!"
          },
          {
            id: "B",
            text: "300 cookies",
            isCorrect: false,
            reason: "❌ Common error: Taking 2/5 of the TOTAL instead of 2/5 of the remaining 5 units."
          },
          {
            id: "C",
            text: "180 cookies",
            isCorrect: false,
            reason: "❌ Check: If total was 180, 3/8 of 180 is 67.5 cookies. Cookies must be whole numbers."
          },
          {
            id: "D",
            text: "150 cookies",
            isCorrect: false,
            reason: "❌ If total was 150, 3/8 of 150 is 56.25 cookies (not a whole number)."
          }
        ],
        walkthrough: "Branching Method:\nTotal: 8 parts\n-> Neighbours: 3 parts\n-> Remainder: 5 parts\n-> Classmates: 2/5 of 5 parts = 2 parts\n-> Final leftover: 5 - 2 = 3 parts\n3 parts = 90 => 1 part = 30 => Total = 8 × 30 = 240 cookies.",
        examTrap: "Look out for the word 'REMAINDER'. Never calculate fractions of the original total when the question specifies the remainder!"
      },
      {
        id: "MDK-MATH-03",
        subject: "Mathematics",
        topic: "Speed & Distance (Opposite Directions)",
        difficulty: 4,
        questionText: "Town A and Town B are 360 km apart. At 09:00, Car X leaves Town A travelling towards Town B at 70 km/h. At the same time, Car Y leaves Town B travelling towards Town A at 50 km/h. At what time will the two cars meet?",
        options: [
          {
            id: "A",
            text: "12:00 (Noon)",
            isCorrect: true,
            reason: "✅ Correct! Because they are travelling towards each other, their combined speed is 70 + 50 = 120 km/h. Time taken to meet = Total distance ÷ Combined speed = 360 km ÷ 120 km/h = 3 hours. Starting at 09:00 + 3 hours = 12:00 (Noon)."
          },
          {
            id: "B",
            text: "11:30",
            isCorrect: false,
            reason: "❌ In 2.5 hours, they cover (120 × 2.5) = 300 km, which is 60 km short of meeting."
          },
          {
            id: "C",
            text: "13:00",
            isCorrect: false,
            reason: "❌ In 4 hours, they would have covered 480 km, having already passed each other."
          },
          {
            id: "D",
            text: "14:00",
            isCorrect: false,
            reason: "❌ Remember that opposite direction travel means their closing speeds add together, not subtract."
          }
        ],
        walkthrough: "Closing Speed Rule: Combined Speed = 70 km/h + 50 km/h = 120 km/h. Time = Distance / Speed = 360 / 120 = 3 hours. 09:00 + 3h = 12:00.",
        examTrap: "When two vehicles travel towards each other, ALWAYS add their speeds together to find how fast the gap closes!"
      }
    ]
  }
];
