export const contactInfo = {
  email: "ryanmoondevelopment@gmail.com",
  linkedIn: "https://www.linkedin.com/in/ryan-c-moon/",
  github: "https://github.com/moonryc"
} as const

export const aboutMe = [
  `I am Ryan Moon, an experienced fullstack React developer with a strong engineering background. I specialize in creating responsive, stable, and enjoyable user experiences. I thrive on tackling new programming challenges and fostering collaborative environments. Known for my creativity, organization, and teamwork, I consistently deliver on my commitments.`,
  `With expertise in technologies such as JavaScript, TypeScript, React, Node.js, and Docker, I have contributed to projects ranging from AI chatbots to data management software. Currently, I work at Waterly Software, where I enhance frontend software, implement CI/CD tools, and develop custom plugins for clients. I hold a Civil Engineering degree from Lamar University and a Bootcamp Certificate from Rice University.`
]


type Project = {
  title: string;
  technologies: string[];
  description: string;
  photos: string[]
  link?: string;
}

type Projects = {
  [k in string]: Project
}

const waterlyProject:Project = {
  title: 'Waterly',
  description: '',
  technologies: ["React", "TypeScript", "Express", "NestJS", "Formik","YUP","GraphQL", "Knex", "ObjectionJS", "Postgres", "TypeORM", "Apollo", "Docker", "NX"],
  photos: [],
  link: "https://waterly.com"
}

const amorAIProject:Project = {
  title: 'AmorAI',
  description: 'Developed a voice-to-text/text chatbot that leverages AI, 3D models, and voice models to authentically simulate human-to-human conversation',
  technologies: ["React", "TypeScript", "GraphQL", "NX", "Postres", "TypeORM", "Apollo", "Docker", "OpenAI"],
  photos: ["amorAI_1.png", 'amorAI_2.png', 'amorAI_3.png'],
  //No link as repo is privated and not mine
}

const redBinderProject: Project = {
  title: 'RedBinder',
  description: 'An ios/android application that can help someone who needs to manage medications for multiple people in a household.',
  technologies: ["React Native", "Apollo", "Express", "GraphQL","TypeScript", "Expo", "Tailwind", "Lodash", "MongoDB", "Mongoose"],
  photos: [],
  link: 'https://github.com/moonryc/red-binder',
}



export const projects: Projects = {
  redBinder:redBinderProject,
  amorAI: amorAIProject,
}
