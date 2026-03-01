import fullFocus from '../assets/dusktodawn.png';

export type ProjectScope = 'coding' | 'writing' | 'design'

export interface Project {
    id: number;
    title: string;
    description: string;
    longDescription: string;
    scope: ProjectScope;
    image?: string;
    pdf?: string;
    tools?: string[];
    url?: string;
    date?: string;
}

export const projects: Project[] = [
    {
        id: 1,
        title: 'WC Tool',
        description: "Java Command Line Tool",
        longDescription: "This is a coding challenge I completed as part of John Crickett's Coding Challenges. ",
        scope: 'coding',
        tools: ['Java'],
        url: 'https://github.com/Quinn-McClure/Code-Challenges/tree/main/wc-tool',
    },
    {
        id: 2,
        title: 'Campbell Gutterworks Website',
        description: "Business Website",
        longDescription: "This is a website I created for Campbell Gutterworks LLC for them to show off their wide range of services and high quality work.",
        scope: 'coding',
        tools: ['React', 'Tailwind CSS', 'Vite', 'Typescript', 'Git'],
        url: 'https://campbellgutterworks.com/',
    },
    {
        id: 3,
        title: 'Prices',
        description: "Crime Thriller/Horror Screenplay",
        longDescription: "This is a feature-length crime thriller/horror screenplay that follows a rock band of twenty-somethings on a night were they are attacked by inhuman creatures after robbing a stash house.",
        scope: 'writing',
        tools: ['Creative Writing', 'Screen Writing'],
        pdf: '',
    },
    {
        id: 4,
        title: 'The Queue',
        description: "Movie Reviewing",
        longDescription: "This is an extensive project where I have been writing and reviewing movies on Letterboxd and Instagram since February of 2021.",
        scope: 'writing',
        tools: ['Instagram', 'Letterboxd', 'Analytical Writing'],
        url: 'https://boxd.it/2R7Q9',
    },
    {
        id: 5,
        title: 'La Crosse Bike Parking Installation',
        description: "Environmental Studies Capstone",
        longDescription: "This was a project I did for my Environmental Studies Capstone at the University of Wisconsin La Crosse where we successfully installed twenty new bike posts in the downtown area.",
        scope: 'design',
        tools: ['Planning', 'Public Speaking'],
        url: '',
        date: ''
    },
    {
        id: 6,
        title: 'The Queue',
        description: "Movie Reviewing",
        longDescription: "Although also being featured in the Writing section, on the Instagram portion I create my own posts utilizing my design skills.",
        scope: 'design',
        tools: ['Canva', 'Instagram', 'Adobe Illustrator'],
        url: 'https://www.instagram.com/the.queue__/',
        date: ''
    },
    {
        id: 7,
        title: 'Full Focus Poster',
        description: "Motivational Poster",
        longDescription: "I made this poster in school to hang in my office to keep up my motivation.",
        scope: 'design',
        tools: ['Adobe Illustrator'],
        image: fullFocus,
        url: '',
        date: ''
    }
];