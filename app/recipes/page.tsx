import fs from 'fs';
import path from 'path';
import { SimpleAccordion } from '@/components/ui/simple-accordion';

function getRecipes() {
  const filePath = path.resolve(process.cwd(), 'context/drinks-menu.md');
  const text = fs.readFileSync(filePath, 'utf-8');
  const drinks = text.split(/\n\n\n+/).filter(Boolean);
  return drinks.map(block => {
    const lines = block.split('\n').filter(Boolean);
    const drinkName = lines[0].replace(/\s*\(.*\)$/, '').trim();
    const recipeContent = lines.slice(1).join('\n');
    
    return {
      title: drinkName,
      content: recipeContent
    };
  });
}

export default function RecipesPage() {
  const recipes = getRecipes();
  return (
    <div className="container mx-auto px-4 py-10 max-w-2xl">
      <h1 className="text-4xl font-extrabold mb-8 text-center tracking-tight">Recipes</h1>
      <SimpleAccordion items={recipes} />
    </div>
  );
} 