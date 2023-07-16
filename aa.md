## Code blocks

## Todo

## Technologies, Colors

# Zaur Sharifov

---

img

My portfolio to showcase a few projects and bookmarks. Built with Next.js, CSS, Framer Motion and HygraphCMS. View the live site. About permissions see MIT License here.

## Getting Started

Clone the repository:

```
git clone https://github.com/zeraphosa/www.zaursharifov.com.git
```

Install npm packages:

```
npm install
```

Clone Graphcms scheme using link:
https://github.com/zeraphosa/www.zaursharifov.com.git
Click Project settings > Envirements, copy api link
Create .env.local file outside of src folder and add GRAPHQL_CMS_API = your-api-link.
Run this to start project:

```
npm run dev
```

Fill contents in graphcms!

## Background dot effect

```
   <svg class="background" width="100%" height="100%">
        <filter id="pedroduarteisalegend">
        <feTurbulence type="fractalNoise" baseFrequency="0.80" numOctaves="4" stitchTiles="stitch"></feTurbulence>
        </filter>
        <rect width="100%" height="100%" filter="url(#pedroduarteisalegend)"></ rect>
    </svg>
```
