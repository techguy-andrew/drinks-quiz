import { QuizQuestion } from './types'
import fs from 'fs';

// Helper to load recipes from context/drinks-menu.txt (for server-side use only)
let drinkRecipes: Record<string, string> = {};
if (typeof window === 'undefined') {
  try {
    const text = require('fs').readFileSync(require('path').resolve(__dirname, '../context/drinks-menu.txt'), 'utf-8');
    const drinks = text.split(/\n\n+/).filter(Boolean);
    for (const block of drinks) {
      const lines = block.split('\n').filter(Boolean);
      if (lines.length > 0) {
        const name = lines[0].replace(/\s*\(.*\)$/, '').trim();
        drinkRecipes[name] = lines.slice(1).join('\n');
      }
    }
  } catch {}
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: '1',
    question: 'What type of bitters are used in the Captain\'s Anchorage?',
    options: ['Aromatic & Peychaud\'s', 'Aztec & Orange', 'Angostura & Orange', 'Orange & Aromatic'],
    correctAnswer: 1,
    explanation: 'The Captain\'s Anchorage uses Aztec & Orange bitters.',
    drink: "Captain's Anchorage"
  },
  {
    id: '2',
    question: 'How many dashes of Aztec bitters are in the Captain\'s Anchorage?',
    options: ['2 dashes', '5 dashes', '3–4 dashes', '6 dashes'],
    correctAnswer: 2,
    explanation: 'The Captain\'s Anchorage uses 3–4 dashes of Aztec bitters.',
    drink: "Captain's Anchorage"
  },
  {
    id: '3',
    question: 'How many dashes of orange bitters are in the Captain\'s Anchorage?',
    options: ['1–2 dashes', '3–4 dashes', '5–6 dashes', '2–3 dashes'],
    correctAnswer: 1,
    explanation: 'The Captain\'s Anchorage uses 3–4 dashes of orange bitters.',
    drink: "Captain's Anchorage"
  },
  {
    id: '4',
    question: 'How much agave is used in the Captain\'s Anchorage?',
    options: ['0.25 oz', '0.5 oz', '0.75 oz', '1 oz'],
    correctAnswer: 1,
    explanation: 'The Captain\'s Anchorage uses 0.5 oz of agave.',
    drink: "Captain's Anchorage"
  },
  {
    id: '5',
    question: 'How much Mezcal is used in the Captain\'s Anchorage?',
    options: ['0.75 oz', '1 oz', '1.5 oz', '2 oz'],
    correctAnswer: 1,
    explanation: 'The Captain\'s Anchorage uses 1 oz of Mezcal.',
    drink: "Captain's Anchorage"
  },
  {
    id: '6',
    question: 'How much Tequila is used in the Captain\'s Anchorage?',
    options: ['0.75 oz', '1 oz', '1.25 oz', '1.5 oz'],
    correctAnswer: 1,
    explanation: 'The Captain\'s Anchorage uses 1 oz of Tequila.',
    drink: "Captain's Anchorage"
  },
  {
    id: '7',
    question: 'What garnish is used for the Captain\'s Anchorage?',
    options: ['Lemon twist', 'Orange twist and whiskey cherry', 'Lime wedge', 'Mint sprig'],
    correctAnswer: 1,
    explanation: 'The Captain\'s Anchorage is garnished with an orange twist and whiskey cherry.',
    drink: "Captain's Anchorage"
  },
  {
    id: '8',
    question: 'What type of ice is used in the Captain\'s Anchorage?',
    options: ['Crushed', 'Well ice', 'Full cube or round ball', 'None'],
    correctAnswer: 2,
    explanation: 'The Captain\'s Anchorage uses full cube or round ball ice.',
    drink: "Captain's Anchorage"
  },
  {
    id: '9',
    question: 'How much pineapple juice is used in the Drowning Men?',
    options: ['2 oz', '2.5 oz', '3 oz', '1.5 oz'],
    correctAnswer: 2,
    explanation: 'The Drowning Men uses 3 oz of pineapple juice.',
    drink: "Drowning Men"
  },
  {
    id: '10',
    question: 'How much lime juice is used in the Drowning Men?',
    options: ['0.25 oz', '0.5 oz', '0.75 oz', '1 oz'],
    correctAnswer: 1,
    explanation: 'The Drowning Men uses 0.5 oz of lime juice.',
    drink: "Drowning Men"
  },
  {
    id: '11',
    question: 'What bitter aperitif is used in the Drowning Men?',
    options: ['Campari or Aperol', 'Kahlúa', 'Bailey\'s', 'Angostura'],
    correctAnswer: 0,
    explanation: 'The Drowning Men uses Campari or Aperol as the bitter aperitif.',
    drink: "Drowning Men"
  },
  {
    id: '12',
    question: 'What spirit options are used in the Drowning Men?',
    options: ['Vodka or Gin', 'Rum or Brandy', 'Tequila or Mezcal', 'Whiskey or Cognac'],
    correctAnswer: 2,
    explanation: 'The Drowning Men uses Tequila or Mezcal as spirit options.',
    drink: "Drowning Men"
  },
  {
    id: '13',
    question: 'What garnish is used in the Drowning Men?',
    options: ['Orange wheel', 'Lime circle', 'Pineapple wedge', 'Mint sprig'],
    correctAnswer: 1,
    explanation: 'The Drowning Men is garnished with a lime circle.',
    drink: "Drowning Men"
  },
  {
    id: '14',
    question: 'What optional spicy ingredient can be added to the Drowning Men?',
    options: ['Habanero syrup', 'Muddled jalapeño', 'Cayenne pepper', 'Black pepper'],
    correctAnswer: 1,
    explanation: 'Muddled jalapeño can be added to make the Drowning Men spicy.',
    drink: "Drowning Men"
  },
  {
    id: '15',
    question: 'What type of ice is used in the Drowning Men?',
    options: ['Crushed', 'Full cube', 'Round ball', 'Well ice'],
    correctAnswer: 3,
    explanation: 'The Drowning Men uses well ice.',
    drink: "Drowning Men"
  },
  {
    id: '16',
    question: 'How much lemon juice is used in the Lady Privateer?',
    options: ['0.75 oz', '1 oz', '1.5 oz', '2 oz'],
    correctAnswer: 2,
    explanation: 'The Lady Privateer uses 1.5 oz of lemon juice.',
    drink: "Lady Privateer"
  },
  {
    id: '17',
    question: 'How much agave is used in the Lady Privateer?',
    options: ['0.25 oz', '0.5 oz', '0.75 oz', '1 oz'],
    correctAnswer: 1,
    explanation: 'The Lady Privateer uses 0.5 oz of agave.',
    drink: "Lady Privateer"
  },
  {
    id: '18',
    question: 'What base spirit is used in the Lady Privateer?',
    options: ['Vodka', 'Tequila', 'Gin', 'Rum'],
    correctAnswer: 2,
    explanation: 'The Lady Privateer uses gin as its base spirit.',
    drink: "Lady Privateer"
  },
  {
    id: '19',
    question: 'How much sparkling rosé is added to the Lady Privateer?',
    options: ['3 oz', '4 oz', 'Top with 4 oz', '2.5 oz'],
    correctAnswer: 2,
    explanation: 'The Lady Privateer is topped with 4 oz of sparkling rosé.',
    drink: "Lady Privateer"
  },
  {
    id: '20',
    question: 'What garnish is used for the Lady Privateer?',
    options: ['Lemon twist', 'Lime wedge', 'Strawberry', 'Orange circle'],
    correctAnswer: 2,
    explanation: 'The Lady Privateer is garnished with a strawberry.',
    drink: "Lady Privateer"
  },
  {
    id: '21',
    question: 'What type of ice is used in the Lady Privateer?',
    options: ['Full cube', 'Well ice', 'Crushed', 'None'],
    correctAnswer: 3,
    explanation: 'The Lady Privateer uses no ice.',
    drink: "Lady Privateer"
  },
  {
    id: '22',
    question: 'How many dashes of aromatic bitters are in the Cannonball?',
    options: ['2–3 dashes', '3–4 dashes', '4–6 dashes', '1–2 dashes'],
    correctAnswer: 1,
    explanation: 'The Cannonball uses 3–4 dashes of aromatic bitters.',
    drink: "Cannonball"
  },
  {
    id: '23',
    question: 'How much Campari or Aperol is used in the Cannonball?',
    options: ['0.5 oz', '0.75 oz', '0.25 oz', '1 oz'],
    correctAnswer: 2,
    explanation: 'The Cannonball uses 0.25 oz of Campari or Aperol.',
    drink: "Cannonball"
  },
  {
    id: '24',
    question: 'What base spirit is used in the Cannonball?',
    options: ['Vodka', 'Rye or Bourbon', 'Rum', 'Tequila'],
    correctAnswer: 1,
    explanation: 'The Cannonball uses rye or bourbon as its base spirit.',
    drink: "Cannonball"
  },
  {
    id: '25',
    question: 'How much Coca-Cola is added to the Cannonball?',
    options: ['3 oz', '3.25 oz', '4 oz', '5 oz'],
    correctAnswer: 1,
    explanation: 'The Cannonball uses 3.25 oz of Coca-Cola.',
    drink: "Cannonball"
  },
  {
    id: '26',
    question: 'What type of ice is used in the Cannonball?',
    options: ['Full cube', 'Crushed', 'Round ice ball', 'Well ice'],
    correctAnswer: 2,
    explanation: 'The Cannonball uses a round ice ball.',
    drink: "Cannonball"
  },
  {
    id: '27',
    question: 'What garnish is used in the Cannonball?',
    options: ['Orange twist', 'Lime wedge', 'Cherry', 'Lemon circle'],
    correctAnswer: 1,
    explanation: 'The Cannonball is garnished with a lime wedge.',
    drink: "Cannonball"
  },
  {
    id: '28',
    question: 'How much pickle juice is used in the Salty Siren?',
    options: ['0.25 oz', '0.5 oz', '1 oz', '1.5 oz'],
    correctAnswer: 1,
    explanation: 'The Salty Siren uses 0.5 oz of pickle juice.',
    drink: "Salty Siren"
  },
  {
    id: '29',
    question: 'How much ginger beer is used in the Salty Siren?',
    options: ['4 oz', '5 oz (whole can)', '3.5 oz', 'Top with ginger beer'],
    correctAnswer: 1,
    explanation: 'The Salty Siren uses 5 oz (a whole can) of ginger beer.',
    drink: "Salty Siren"
  },
  {
    id: '30',
    question: 'How much vodka is used in the Salty Siren?',
    options: ['1 oz', '1.25 oz', '1.5 oz', '2 oz'],
    correctAnswer: 2,
    explanation: 'The Salty Siren uses 1.5 oz of vodka.',
    drink: "Salty Siren"
  },
  {
    id: '31',
    question: 'What garnish is used in the Salty Siren?',
    options: ['Pickle spear', 'Lemon circle', 'Mint', 'Lime circle'],
    correctAnswer: 3,
    explanation: 'The Salty Siren is garnished with a lime circle.',
    drink: "Salty Siren"
  },
  {
    id: '32',
    question: 'What type of ice is used in the Salty Siren?',
    options: ['Crushed', 'Round cube', 'Full cube', 'Well ice'],
    correctAnswer: 3,
    explanation: 'The Salty Siren uses well ice.',
    drink: "Salty Siren"
  },
  {
    id: '33',
    question: 'How much lemon juice is used in the Gilley?',
    options: ['0.25 oz', '0.5 oz', '1 oz', '1.5 oz'],
    correctAnswer: 1,
    explanation: 'The Gilley uses 0.5 oz of lemon juice.',
    drink: "Gilley"
  },
  {
    id: '34',
    question: 'How many dashes of orange bitters are used in the Gilley?',
    options: ['2–3 dashes', '3–5 dashes', '4–6 dashes', '6–8 dashes'],
    correctAnswer: 2,
    explanation: 'The Gilley uses 4–6 dashes of orange bitters.',
    drink: "Gilley"
  },
  {
    id: '35',
    question: 'How many dashes of aromatic bitters are used in the Gilley?',
    options: ['4–6 dashes', '2–3 dashes', '1–2 dashes', '6–8 dashes'],
    correctAnswer: 0,
    explanation: 'The Gilley uses 4–6 dashes of aromatic bitters.',
    drink: "Gilley"
  },
  {
    id: '36',
    question: 'What base spirit is used in the Gilley?',
    options: ['Vodka', 'Rum', 'Tequila', 'Bourbon'],
    correctAnswer: 2,
    explanation: 'The Gilley uses tequila as its base spirit.',
    drink: "Gilley"
  },
  {
    id: '37',
    question: 'What is used to top the Gilley?',
    options: ['Soda water', 'Cola', 'Ginger beer', 'Sparkling rosé'],
    correctAnswer: 0,
    explanation: 'The Gilley is topped with soda water.',
    drink: "Gilley"
  },
  {
    id: '38',
    question: 'What garnish is used for the Gilley?',
    options: ['Lemon wedge', 'Lemon circle', 'Lime twist', 'Orange slice'],
    correctAnswer: 1,
    explanation: 'The Gilley is garnished with a lemon circle.',
    drink: "Gilley"
  },
  {
    id: '39',
    question: 'What type of ice is used in the Gilley?',
    options: ['Crushed', 'Well ice', 'Round ball', 'Full cube'],
    correctAnswer: 1,
    explanation: 'The Gilley uses well ice.',
    drink: "Gilley"
  },
  {
    id: '40',
    question: 'How much lime juice is used in the Privateer Sangria?',
    options: ['0.5 oz', '1 oz', '0.75 oz', '0.25 oz'],
    correctAnswer: 0,
    explanation: 'The Privateer Sangria uses 0.5 oz of lime juice.',
    drink: "Privateer Sangria"
  },
  {
    id: '41',
    question: 'How much lemon juice is used in the Privateer Sangria?',
    options: ['0.25 oz', '0.5 oz', '0.75 oz', '1 oz'],
    correctAnswer: 1,
    explanation: 'The Privateer Sangria uses 0.5 oz of lemon juice.',
    drink: "Privateer Sangria"
  },
  {
    id: '42',
    question: 'How much simple syrup is used in the Privateer Sangria?',
    options: ['0.25 oz', '0.5 oz', '0.75 oz', '1 oz'],
    correctAnswer: 1,
    explanation: 'The Privateer Sangria uses 0.5 oz of simple syrup.',
    drink: "Privateer Sangria"
  },
  {
    id: '43',
    question: 'How much pineapple juice is in the Privateer Sangria?',
    options: ['0.75 oz', '1 oz', '0.5 oz', '1.5 oz'],
    correctAnswer: 0,
    explanation: 'The Privateer Sangria uses 0.75 oz of pineapple juice.',
    drink: "Privateer Sangria"
  },
  {
    id: '44',
    question: 'What bitters are used in the Privateer Sangria?',
    options: ['Orange', 'Angostura', 'Aromatic', 'Aztec'],
    correctAnswer: 1,
    explanation: 'The Privateer Sangria uses Angostura bitters.',
    drink: "Privateer Sangria"
  },
  {
    id: '45',
    question: 'How much brandy is used in the Privateer Sangria?',
    options: ['1 oz', '1.5 oz', '0.75 oz', '2 oz'],
    correctAnswer: 2,
    explanation: 'The Privateer Sangria uses 0.75 oz of brandy.',
    drink: "Privateer Sangria"
  },
  {
    id: '46',
    question: 'What type of wine is used in the Privateer Sangria?',
    options: ['Privateer Merlot', 'Privateer Cab', 'Pinot Noir', 'House Red'],
    correctAnswer: 1,
    explanation: 'The Privateer Sangria uses Privateer Cab wine.',
    drink: "Privateer Sangria"
  },
  {
    id: '47',
    question: 'What garnish is used in the Privateer Sangria?',
    options: ['Mint', 'Orange wedge', 'Lime wheel', 'Strawberry'],
    correctAnswer: 0,
    explanation: 'The Privateer Sangria is garnished with mint.',
    drink: "Privateer Sangria"
  },
  {
    id: '48',
    question: 'What type of ice is used in the Privateer Sangria?',
    options: ['None', 'Round ball', 'Well ice', 'Crushed'],
    correctAnswer: 2,
    explanation: 'The Privateer Sangria uses well ice.',
    drink: "Privateer Sangria"
  },
  {
    id: '49',
    question: 'How much simple syrup is used in the Espresso Martini?',
    options: ['0.25 oz', '0.5 oz', '0.75 oz', '1 oz'],
    correctAnswer: 1,
    explanation: 'The Espresso Martini uses 0.5 oz of simple syrup.',
    drink: "Espresso Martini"
  },
  {
    id: '50',
    question: 'How much coffee concentrate is in the Espresso Martini?',
    options: ['0.25 oz', '0.5 oz', '0.75 oz', '1 oz'],
    correctAnswer: 0,
    explanation: 'The Espresso Martini uses 0.25 oz of coffee concentrate.',
    drink: "Espresso Martini"
  },
  {
    id: '51',
    question: 'How much Kahlúa is used in the Espresso Martini?',
    options: ['0.25 oz', '0.5 oz', '0.75 oz', '1 oz'],
    correctAnswer: 0,
    explanation: 'The Espresso Martini uses 0.25 oz of Kahlúa.',
    drink: "Espresso Martini"
  },
  {
    id: '52',
    question: 'How much Bailey\'s is used in the Espresso Martini?',
    options: ['0.5 oz', '0.25 oz', '0.75 oz', '1 oz'],
    correctAnswer: 1,
    explanation: 'The Espresso Martini uses 0.25 oz of Bailey\'s.',
    drink: "Espresso Martini"
  },
  {
    id: '53',
    question: 'How much vodka is used in the Espresso Martini?',
    options: ['1 oz', '1.25 oz', '1.5 oz', '2 oz'],
    correctAnswer: 2,
    explanation: 'The Espresso Martini uses 1.5 oz of vodka.',
    drink: "Espresso Martini"
  },
  {
    id: '54',
    question: 'What garnish is used in the Espresso Martini?',
    options: ['Coffee beans', 'Chocolate shavings', 'Nutmeg', 'Lemon twist'],
    correctAnswer: 2,
    explanation: 'The Espresso Martini is garnished with nutmeg.',
    drink: "Espresso Martini"
  },
  {
    id: '55',
    question: 'What is the straining method for the Espresso Martini?',
    options: ['Single strain', 'No strain', 'Crushed ice', 'Double strain'],
    correctAnswer: 3,
    explanation: 'The Espresso Martini is double strained to ensure a smooth texture.',
    drink: "Espresso Martini"
  }
]