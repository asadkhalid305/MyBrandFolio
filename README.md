# MyBrandFolio 🌟

## A minimalistic and responsive portfolio website for everyone who wants to express themselves to the world!

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Getting Started](#getting-started)
- [How to Use](#how-to-use)
- [Customization](#customization)
- [Deployment](#deployment)
- [Technologies Used](#technologies-used)
- [Contribute](#contribute)

## Features

✔️ Introduction\
✔️ Journey\
✔️ Experience\
✔️ Contribution\
✔️ Testimonial\
✔️ Contact\
✔️ Chatbot

## Demo

To see a live example, [click here](https://www.asadullahkhalid.com/).

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Requirements

You'll need [Git](https://git-scm.com), [Node.js](https://nodejs.org/en/download/), and [pnpm](https://pnpm.io/) installed on your computer with the following versions:

```
node@v20.10.0 or higher
pnpm@9.0.1 or higher
git@2.39.3 or higher
```

### How To Use

From your command line, clone and run MyBrandFolio app:

```bash
# Clone this repository
git clone https://github.com/asadkhalid305/MyBrandFolio.git

# Go into the repository
cd MyBrandFolio

# Setup default environment variables

# For Linux
cp env.example .env
# For Windows
copy env.example .env

# Install dependencies
pnpm install

# Start a local development server
pnpm run dev
```

_Open [http://localhost:3000](http://localhost:3000) with your browser to see the result._

## Customization

### Content

Personalize page content in `src/app/utils/constants.ts`.

```javascript
// For example, replace [Name] with your name in the metadata object
export const metadata: Metadata = {
  title: "Asad Ullah Khalid - Portfolio",
  description: "This is Asad Ullah Khalid's portfolio website",
};

// Similarly, do the same in all other objects

export const header: Header = { ... }

export const intro: Intro = { ... }

export const journey: Journey = { ... }

export const experience: Experience = { ... }

export const contribution: Contribution = { ... }

export const testimonial: Testimonial = { ... }

export const contact: Contact = { ... }

export const footer: Footer = { ... }

export const socials: Socials = { ... }

```

**The following placeholders need to be updated:**

`[Name] | [Position] | [Location] | [Number] | [Company] | [City] | [Country] | [Joining] | [Leaving] | [Title] | [Description] | [Date] | [Tagline]`

_Furthermore, other fields use example text such as Lorem Ipsum or randomly generated text for John Doe. You will need to replace all the content as per your needs._

### Chatbot

The chatbot will be visible and functional only if you have added your **OPENAI_API_KEY** in `.env` file. After adding it, you have to customize data so that it can answer on your behalf. To do that, update `chatbot` object in `src/app/utils/constants.ts`.

```javascript
export const chatbot: Chatbot = {
  config: {
    // If you want to use another model, change the model's name here
    model: "gpt-3.5-turbo",
    // Temperature decides how creative your chatbot's answers will be. Do not change this because you only want your chatbot to answer strictly from the dataset
    temperature: 1,
    // This will decide the length of the output. To estimate how many tokens you would require, refer to https://platform.openai.com/tokenizer
    maxTokens: 150,
  },

  // This prompt is an instruction to your chatbot on what it is supposed to do. Do not change it unless you are sure of what you are doing
  prompt:
    "Welcome! You are now acting as John Doe himself. Your mission is to reply to John Doe's portfolio website visitors on his behalf by providing answers based on the available information. If a question arises that is not covered by the provided info, kindly respond with \"Hmmm! I don't have that information. Please get in touch with John Doe for further assistance.\" Remember, your role is to answer questions strictly related to the portfolio. Maintain your character throughout the interaction. Enjoy your role!",

  // This is the dataset your chatbot will conclude its answers from. Update it according to yourself
  dataset: `Document content:
  Question: What is John Doe's full name?
  Answer: John Doe's full name is John Doe Smith.
  ...`,

  // This defines the limit on the number of inputs a user can provide. However, this is a custom functionality and can easily be bypassed by clearing localStorage
  limit: 10,

  // This information will be displayed in an alert message when a user clicks on the info icon
  info: `...`,

  ...,
};
```

## Deployment

When you are done with the setup, you should host your website online.

### Deploying to Vercel

You can host directly with Vercel by linking your own repository.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fvercel%2Fnext.js%2Ftree%2Fcanary%2Fexamples%2Fhello-world)

For more information, read [deploying nextjs app on vercel](https://nextjs.org/learn-pages-router/basics/deploying-nextjs-app/deploy).

## Technologies Used

- [NextJs](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vercel](https://vercel.com/)

## Contribute

If you'd like to make this app better for other users, create issues to improve this project. Or if you have created something awesome for your fork and want to share it, feel free to open a pull request.
