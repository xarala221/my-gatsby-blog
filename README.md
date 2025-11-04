# Ousseynou Diop - Personal Website

Personal website and blog for Ousseynou Diop, CEO of Xarala and leader in African digital transformation.

## Features

- Modern Next.js 14 application with TypeScript
- Tailwind CSS for styling
- Payload CMS for blog content management
- Responsive design
- SEO optimized
- 3-tier consulting program showcase
- Professional blog section

## Tech Stack

- **Framework:** Next.js 14 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **CMS:** Payload CMS 3.0
- **Database:** MongoDB
- **Icons:** Lucide React
- **Deployment:** Vercel recommended

## Getting Started

### Prerequisites

- Node.js 18+
- MongoDB (local or cloud instance)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/xarala221/my-gatsby-blog.git
cd my-gatsby-blog
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

Edit `.env.local` and add your configuration:
```
PAYLOAD_SECRET=your-secret-key-here
DATABASE_URI=mongodb://localhost:27017/ousseynou-portfolio
NEXT_PUBLIC_SERVER_URL=http://localhost:3000
```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

### Payload CMS

Access the Payload admin panel at [http://localhost:3000/admin](http://localhost:3000/admin)

First time setup:
1. Navigate to `/admin`
2. Create your admin account
3. Start creating blog posts!

## Project Structure

```
├── src/
│   ├── app/                    # Next.js app directory
│   │   ├── about/             # About page
│   │   ├── blog/              # Blog listing and posts
│   │   ├── consulting/        # Consulting programs page
│   │   ├── contact/           # Contact page
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Homepage
│   │   └── globals.css        # Global styles
│   ├── components/            # React components
│   │   ├── Navigation.tsx     # Navigation bar
│   │   └── Footer.tsx         # Footer
│   └── payload.config.ts      # Payload CMS configuration
├── public/                    # Static assets
├── next.config.js            # Next.js configuration
├── tailwind.config.ts        # Tailwind configuration
└── tsconfig.json             # TypeScript configuration
```

## Pages

- **Home** (`/`) - Hero section, impact metrics, mission statement
- **About** (`/about`) - Professional background, experience, certifications
- **Blog** (`/blog`) - Blog listing page with all articles
- **Blog Post** (`/blog/[slug]`) - Individual blog post pages
- **Consulting** (`/consulting`) - 3-tier consulting program (Starter, Professional, Enterprise)
- **Contact** (`/contact`) - Contact form and information

## Consulting Programs

### Starter
- 500,000 FCFA/month
- Perfect for startups and entrepreneurs
- 2 consulting sessions per month
- Email support

### Professional (Most Popular)
- 1,200,000 FCFA/month
- For businesses ready to accelerate growth
- 4 consulting sessions per month
- Priority support
- Team training
- Access to Xarala talent pool

### Enterprise
- Custom pricing
- Personalized solution for large enterprises
- Unlimited consulting sessions
- 24/7 dedicated support
- Full digital transformation

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project to Vercel
3. Add environment variables
4. Deploy

### Other Platforms

The application can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- Digital Ocean App Platform
- AWS Amplify

Make sure to:
1. Set up MongoDB (MongoDB Atlas recommended)
2. Add environment variables
3. Build the application: `npm run build`
4. Start the server: `npm start`

## Environment Variables

```bash
# Required
PAYLOAD_SECRET=           # Secret key for Payload CMS
DATABASE_URI=             # MongoDB connection string
NEXT_PUBLIC_SERVER_URL=   # Your website URL
```

## Contributing

This is a personal website. If you find any issues, please open an issue on GitHub.

## License

© 2024 Ousseynou Diop. All rights reserved.

## Contact

- **Website:** [www.xarala.co](https://www.xarala.co)
- **LinkedIn:** [linkedin.com/in/ousseynou-diop](https://www.linkedin.com/in/ousseynou-diop)
- **Email:** contact@xarala.co
- **Location:** Dakar, Senegal

---

Built with ❤️ by Ousseynou Diop
