import {
  Chatbot,
  Contact,
  Contribution,
  Experience,
  Header,
  Intro,
  Journey,
  Metadata,
  Socials,
  Testimonial,
} from "./types";

const year = new Date().getFullYear();

export const metadata: Metadata = {
  title: "[Name] - Portfolio",
  description: "This is [Name] portfolio website",
};

export const header: Header = {
  links: [
    {
      name: "Intro",
      href: "#intro",
    },
    {
      name: "Journey",
      href: "#journey",
    },
    {
      name: "Experience",
      href: "#experience",
    },
    {
      name: "Contribution",
      href: "#contribution",
    },
    {
      name: "Testimonial",
      href: "#testimonial",
    },
    {
      name: "Contact",
      href: "#contact",
    },
  ],
};

export const intro: Intro = {
  heading: "Introduction",
  description: `Hey, I am <span class="font-bold">[Name]</span>, a [Position] at <a class="underline focus:decoration-none" href="https://example.com" rel="noopener noreferrer" target="_blank">[Company]</a> in [Location]. With [Number] years in the field, I have come a long way, learning, networking, and giving back to the community. As a <span class="font-bold">mentor and public speaker</span>, I have helped numerous students and professionals in their career journeys. <br /> <br />If you are seeking guidance or interested in collaborating, <span class="font-bold">reach out to me!</span>`,
};

export const journey: Journey = {
  heading: "Journey",
  description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lacinia eu nisl et tincidunt. Quisque accumsan sollicitudin velit, mattis consequat libero lacinia a. Donec euismod porta sagittis. Nullam luctus lacus turpis, a volutpat orci gravida eget. Aenean velit diam, pellentesque ac orci quis, efficitur tincidunt elit. Suspendisse ipsum est, tempor at vestibulum nec, consequat id lacus. Duis ullamcorper suscipit leo a dapibus. Phasellus molestie nisi nulla, eget tincidunt ante ullamcorper sed. Nam luctus, urna a rutrum elementum, est justo efficitur turpis, at consequat quam nunc eu felis. Nunc cursus eros sed dolor luctus varius. Duis aliquam malesuada tellus non pretium.

Aliquam hendrerit rhoncus maximus. Donec sit amet nisl quis nunc fermentum mollis et vel velit. Sed viverra purus eleifend urna imperdiet efficitur. Proin non felis sapien. Vivamus aliquet neque vitae tortor elementum elementum. Nunc pretium mauris mauris, vitae venenatis erat pulvinar eget. Quisque venenatis lacus et dignissim consectetur. Suspendisse ut lacus placerat, congue libero eu, consectetur ipsum. Nunc ultrices blandit dolor dictum condimentum.
  
Phasellus tincidunt laoreet lacus in congue. Praesent vitae leo non ipsum bibendum euismod. Duis id convallis eros. Fusce ut nisl in sem porta ornare ut vitae ipsum. Aliquam congue tristique velit, eget mollis orci faucibus eget. In hac habitasse platea dictumst. Integer maximus vel felis vel tristique. Aenean facilisis lacus non bibendum ultricies.`,
};

export const experience: Experience = {
  heading: "Experience",
  description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse faucibus in massa ut tempus. Quisque bibendum eleifend faucibus. Maecenas ultricies turpis in tellus semper suscipit. Maecenas et tincidunt mauris. Suspendisse in tincidunt nulla. Morbi sit amet ex a lorem laoreet accumsan eget eu purus. Praesent libero ipsum, placerat ac mauris ut, ultricies porttitor tortor. Vivamus ut posuere nunc. Maecenas luctus.`,
  items: [
    {
      company: "[Company]",
      date: "[Joining] - Present",
      location: "[City], [Country]",
      position: "[Position]",
    },
    {
      company: "[Company]",
      date: "[Joining] - [Leaving]",
      location: "[City], [Country]",
      position: "[Position]",
    },
    {
      company: "[Company]",
      date: "[Joining] - [Leaving]",
      location: "[City], [Country]",
      position: "[Position]",
    },
  ],
  linkedInLink: "https://www.linkedin.com/in/johndoe/details/experience/",
};

export const contribution: Contribution = {
  heading: `Contribution`,
  description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed justo eget massa pretium ultricies non non turpis. Aliquam accumsan tortor orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc vitae scelerisque urna. Nulla fringilla neque felis, rhoncus vestibulum nisl commodo ac. Duis quis tellus a lacus elementum fringilla. Curabitur ac condimentum arcu, vitae tristique lacus. Praesent consectetur enim quis diam aliquam, consequat egestas tortor sollicitudin. Duis ornare egestas blandit. Integer sapien ex, ullamcorper non metus et, vehicula interdum diam. Morbi nec.`,
  // @Note: each key will be displayed as Subheading under contribution section
  // In order to change the key name, you need to update the Contribution type in types.ts
  items: {
    events: [
      {
        title: "[Title]",
        description: `[Description]`,
        image: {
          src: "/images/default.webp",
          alt: "event-1",
        },
        link: "https://example.com",
        date: "[Date]",
      },
      {
        title: "[Title]",
        description: `[Description]`,
        image: {
          src: "/images/default.webp",
          alt: "event-1",
        },
        link: "https://example.com",
        date: "[Date]",
      },
      {
        title: "[Title]",
        description: `[Description]`,
        image: {
          src: "/images/default.webp",
          alt: "event-1",
        },
        link: "https://example.com",
        date: "[Date]",
      },
    ],
    blogs: [
      {
        title: "[Title]",
        description: `[Description]`,
        image: {
          src: "/images/default.webp",
          alt: "event-1",
        },
        link: "https://example.com",
        date: "[Date]",
      },
      {
        title: "[Title]",
        description: `[Description]`,
        image: {
          src: "/images/default.webp",
          alt: "event-1",
        },
        link: "https://example.com",
        date: "[Date]",
      },
      {
        title: "[Title]",
        description: `[Description]`,
        image: {
          src: "/images/default.webp",
          alt: "event-1",
        },
        link: "https://example.com",
        date: "[Date]",
      },
    ],
  },
};

export const testimonial: Testimonial = {
  heading: `Testimonial`,
  items: [
    {
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel viverra turpis, et egestas mauris. Quisque urna dolor, scelerisque nec tellus nec, rutrum gravida nibh. Fusce id luctus ex. Vivamus ornare nulla lacus, vitae porttitor dolor placerat eget. Duis pulvinar leo turpis, sit.`,
      author: {
        name: "[Name]",
        image: {
          src: "/images/user-profile.svg",
          alt: "Lorem ipsum",
        },
        job: "[Position] at [Company]",
        link: "https://example.com",
      },
    },
    {
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel viverra turpis, et egestas mauris. Quisque urna dolor, scelerisque nec tellus nec, rutrum gravida nibh. Fusce id luctus ex. Vivamus ornare nulla lacus, vitae porttitor dolor placerat eget. Duis pulvinar leo turpis, sit.`,
      author: {
        name: "[Name]",
        image: {
          src: "/images/user-profile.svg",
          alt: "Lorem ipsum",
        },
        job: "[Position] at [Company]",
        link: "https://example.com",
      },
    },
    {
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel viverra turpis, et egestas mauris. Quisque urna dolor, scelerisque nec tellus nec, rutrum gravida nibh. Fusce id luctus ex. Vivamus ornare nulla lacus, vitae porttitor dolor placerat eget. Duis pulvinar leo turpis, sit.`,
      author: {
        name: "[Name]",
        image: {
          src: "/images/user-profile.svg",
          alt: "Lorem ipsum",
        },
        job: "[Position] at [Company]",
        link: "https://example.com",
      },
    },
    {
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel viverra turpis, et egestas mauris. Quisque urna dolor, scelerisque nec tellus nec, rutrum gravida nibh. Fusce id luctus ex. Vivamus ornare nulla lacus, vitae porttitor dolor placerat eget. Duis pulvinar leo turpis, sit.`,
      author: {
        name: "[Name]",
        image: {
          src: "/images/user-profile.svg",
          alt: "Lorem ipsum",
        },
        job: "[Position] at [Company]",
        link: "https://example.com",
      },
    },
    {
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel viverra turpis, et egestas mauris. Quisque urna dolor, scelerisque nec tellus nec, rutrum gravida nibh. Fusce id luctus ex. Vivamus ornare nulla lacus, vitae porttitor dolor placerat eget. Duis pulvinar leo turpis, sit.`,
      author: {
        name: "[Name]",
        image: {
          src: "/images/user-profile.svg",
          alt: "Lorem ipsum",
        },
        job: "[Position] at [Company]",
        link: "https://example.com",
      },
    },
    {
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel viverra turpis, et egestas mauris. Quisque urna dolor, scelerisque nec tellus nec, rutrum gravida nibh. Fusce id luctus ex. Vivamus ornare nulla lacus, vitae porttitor dolor placerat eget. Duis pulvinar leo turpis, sit.`,
      author: {
        name: "[Name]",
        image: {
          src: "/images/user-profile.svg",
          alt: "Lorem ipsum",
        },
        job: "[Position] at [Company]",
        link: "https://example.com",
      },
    },
  ],
};

export const contact: Contact = {
  heading: `Let's Connect`,
  description:
    "Your thoughts and questions are always welcome so do not hesitate to drop me a message if you need assistance or have something to talk about. I would love to hear from you!",
  profile: {
    company: "[Company]",
    name: "[Name]",
    position: "[Tagline]",
    role: "[Position]",
  },
};

export const footer = {
  copyright: `${year} [Name]. All rights reserved`,
};

export const chatbot: Chatbot = {
  config: {
    model: "gpt-3.5-turbo",
    temperature: 1,
    maxTokens: 150,
  },
  prompt:
    "Welcome! You are now acting as a John Doe himself. Your mission is to reply John Doe's portfolio website visitors on his behalf by providing answers based on the available information. If a question arises that is not covered by the provided info, kindly respond with \"Hmmm! I don't have that information. Please get in touch with John Doe for further assistance.\" Remember, your role is to answer questions strictly related to the portfolio. Maintain your character throughout the interaction. Enjoy your role!",
  dataset: `Document content:
  Question: What is John Doe's full name?
  Answer: John Doe's full name is John Doe Smith.
  Question: What is John Doe's first and last name?
  Answer: John Doe's first name is John Doe and last name is Smith.
  Question: What is John Doe's current occupation?
  Answer: John Doe is currently employed as a Senior Software Engineer at Example.com.
  Question: Can you provide details about John Doe's educational background?
  Answer: John Doe pursued a Bachelor's Degree in Computer Science from Example University from 2010 to 2014. He also began a Master's program in Computer Science at the Institute of Example in 2016 which he later dropped because of relocation.
  Question: What is John Doe's professional journey in software development?
  Answer: John Doe began his journey as a software developer in 2010, working on pet projects with HTML and CSS as an undergraduate student. Since then, he has held various roles in different companies, including Frontend, Backend, and Full-stack developer positions.
  Question: What are the details of John Doe's employment history?
  Answer: John Doe has worked at several companies, including Example.com, Example2.com, Example3.com, and others, in roles such as (Senior) Software Engineer, Development Engineer, and Junior Developer.
  Question: What community work has John Doe been involved in?
  Answer: John Doe has actively participated in community work. In the past he served as Chairman of IEEE Student Branch and Head of Management at Computer Science Club, among other roles. He has organized events, mentored students, and contributed to community-building initiatives.
  Question: Can you provide details about John Doe's involvement in public speaking?
  Answer: John Doe has been a part of various events such as DevCon by Code Movement, Google I/O Extended by GDG, and mentorship at the University of Example. He has played roles such as Tech Talk Speaker, Mentor, and Program Manager in these events.
  Question: What topics has John Doe written about in his blogs?
  Answer: John Doe has written blogs on topics such as tech jobs and making the most of company events. These blogs provide insights and tips for individuals looking to advance their careers in the tech industry.
  Question: What is John Doe's age?
  Answer: John Doe was born in January 1990. He is currently 32 years old.
  Question: Where does John Doe currently reside?
  Answer: John Doe lives in Example City since 2020. Before that he used to live in Example Town for his entire life. 
  Question: What is most interesting thing about John Doe?
  Answer: It is known from many people that John Doe is a very passionate and dedicated person. He is always eager to learn new things and share his knowledge with others. He is always up to date with industry trends. He is a go-to person for any career or life advices. 
  Question: Is John Doe married?
  Answer: Yes, he is happily married. 
  `,
  limit: 10,
  info: `Hello and welcome! I'm John Doe, the creator of this AI Assistant which is powered by the cutting-edge Chat-GPT technology. I want to assure you that your privacy is important to me. I don't store your data anywhere except in your local browser storage.

To maintain a balance between user experience and operational costs, I've set a limit of 10 messages per session. While it's possible to bypass this limit by clearing your local storage, I kindly ask you to respect this limit. Each query incurs a cost, and exceeding the limit could lead to unnecessary expenses.
  
Feel free to use this AI Assistant to inquire about anything related to me from the details available on the website. It's here to help you get the information you need.
  
I trust you understand and will cooperate. Enjoy your conversation with AI Assistant! Thank you for visiting.
  `,
  header: {
    heading: "AI Assistant",
  },
};

export const socials: Socials = {
  linkedIn: {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/johndoe",
    icon: "/icons/linkedin.min.svg",
  },
  github: {
    name: "GitHub",
    href: "https://github.com/johndoe",
    icon: "/icons/github.min.svg",
  },
  topmateIO: {
    name: "Topmate.io",
    href: "https://topmate.io/johndoe",
    icon: "",
  },
};
