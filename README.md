# Drinks Quiz - Restaurant Staff Training Application

A modern Next.js quiz application designed for training restaurant staff on cocktail recipes and drink preparation. Built with TypeScript, Tailwind CSS, and shadcn/ui components.

## Features

- **Interactive Quiz System**: 30 comprehensive questions covering all signature cocktails
- **Question Randomization**: Each quiz presents 25 randomly selected questions
- **Immediate Feedback**: Correct/incorrect answers with detailed explanations
- **Progress Tracking**: Real-time score and completion percentage
- **User Authentication**: Optional signup to save progress and track scores
- **Personal Dashboard**: View quiz history, statistics, and performance trends
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## Technology Stack

- **Frontend**: Next.js 14 with App Router, TypeScript, Tailwind CSS
- **UI Components**: shadcn/ui component library
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: JWT-based auth with bcrypt password hashing
- **Deployment**: Optimized for Vercel deployment

## Getting Started

### Prerequisites

- Node.js 18 or higher
- PostgreSQL database (or Neon for cloud hosting)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd drinks-quiz
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

Edit `.env.local` with your database connection string and authentication secret.

4. Set up the database:
```bash
# Generate Prisma client
npm run db:generate

# Push database schema
npm run db:push
```

5. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:3000`.

## Database Setup

### Using Neon (Recommended for production)

1. Create a Neon account at https://neon.tech
2. Create a new database project
3. Copy the connection string to your `.env.local` file
4. Run `npm run db:push` to create the tables

### Using Local PostgreSQL

1. Install PostgreSQL locally
2. Create a database: `createdb drinks-quiz`
3. Update `DATABASE_URL` in `.env.local`
4. Run `npm run db:push`

## Project Structure

```
drinks-quiz/
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   ├── auth/              # Authentication pages
│   ├── dashboard/         # User dashboard
│   ├── quiz/              # Quiz pages
│   └── page.tsx           # Homepage
├── components/
│   ├── auth/              # Authentication components
│   ├── quiz/              # Quiz components
│   └── ui/                # shadcn/ui components
├── lib/
│   ├── prisma.ts          # Database client
│   ├── types.ts           # TypeScript interfaces
│   ├── utils.ts           # Utility functions
│   └── quiz-data.ts       # Quiz questions and answers
├── prisma/
│   └── schema.prisma      # Database schema
└── context/
    └── drinks-menu.txt    # Source cocktail recipes
```

## Quiz Content

The quiz covers 9 signature cocktails with questions about:
- Ingredients and measurements
- Glassware selection
- Preparation methods (shake vs pour)
- Garnish specifications
- Ice types and serving details
- Recipe variations and substitutions

### Featured Cocktails

1. **Captain's Anchorage** - Mezcal and tequila blend with bitters
2. **Drowning Men** - Pineapple juice and mezcal with tahini rim
3. **Lady Privateer (Spanish 69)** - Gin and lemon topped with sparkling rosé
4. **Cannonball** - Whiskey and cola with Campari
5. **Salty Siren** - Vodka mule with pickle juice
6. **Gilley** - Tequila highball with citrus and bitters
7. **Privateer Sangria** - Wine cocktail with brandy and fruit juices
8. **Dark & Stormy** - Dual rum blend with fruit juices
9. **Espresso Martini** - Coffee cocktail with vodka and liqueurs

## User Features

### For Anonymous Users
- Take unlimited quizzes
- View immediate results
- Access all quiz content

### For Registered Users
- Save quiz results automatically
- View detailed performance history
- Track progress over time
- Personal statistics dashboard

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run db:push` - Push database schema changes
- `npm run db:studio` - Open Prisma Studio
- `npm run db:generate` - Generate Prisma client

### Adding New Questions

1. Edit `lib/quiz-data.ts`
2. Add new question objects following the existing format
3. Ensure proper explanation text for learning value
4. Test thoroughly before deployment

## Deployment

### Vercel Deployment (Recommended)

1. Connect your repository to Vercel
2. Configure environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Environment Variables for Production

```
DATABASE_URL=your_neon_connection_string
NEXTAUTH_URL=https://your-domain.vercel.app
NEXTAUTH_SECRET=your_secure_random_secret
```

## License

MIT License - feel free to use this for your restaurant training needs.

## Support

For issues or questions, please check the GitHub issues page or contact the development team.