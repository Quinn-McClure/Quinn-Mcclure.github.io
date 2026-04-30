import fullFocus from '../assets/dusktodawn.png';
import letterboxdProfile from '../assets/letterboxdProfile.png';
import instagramProfile from '../assets/instagramProfile.png';
import gutterworksSite from '../assets/gutterworksSite.png';

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
        longDescription: "This is a coding challenge I completed as part of John Crickett's Coding Challenges using Java. The tool can count the number of bytes, words, lines, or characters in a file. Visit the project to see a more in depth look at the code or even demo it!",
        scope: 'coding',
        tools: ['Java'],
        url: 'https://github.com/Quinn-McClure/Code-Challenges/tree/main/wc-tool',
    },
    {
        id: 2,
        title: 'Snake Game',
        description: "Basic snake game written in Go",
        longDescription: "This is a coding challenge where I am working to build a snake game in Go. This will be my first project in the Go programming language.",
        scope: 'coding',
        tools: ['Go', 'Ebitenegine'],
        url: 'https://github.com/Quinn-McClure/Code-Challenges/tree/main/snake',
    },
    {
        id: 3,
        title: 'Campbell Gutterworks Website',
        description: "Business Website",
        longDescription: "This is a website I created for Campbell Gutterworks LLC for them to show off their wide range of services and high quality work.",
        scope: 'coding',
        tools: ['React', 'Tailwind CSS', 'Vite', 'Typescript', 'Git'],
        image: gutterworksSite,
        url: 'https://campbellgutterworks.com/',
    },
    {
        id: 4,
        title: 'Lending Library App',
        description: "Mobile Application",
        longDescription: "",
        scope: 'coding',
        url: '',
    },
    {
        id: 5,
        title: 'Prices',
        description: "Crime/Thriller/Horror Screenplay",
        longDescription: "This is a feature-length crime thriller/horror screenplay that follows a rock band of twenty-somethings on a night were they are attacked by inhuman creatures after robbing a stash house.",
        scope: 'writing',
        tools: ['Creative Writing', 'Screen Writing'],
        pdf: '',
    },
    {
        id: 6,
        title: 'Bad Days',
        description: "Thriller/Comedy Screenplay",
        longDescription: "This is a short film thriller/comedy screenplay about Ray, a man that has been cursed with seven years of bad luck after accidentally breaking a mirror.",
        scope: 'writing',
        tools: ['Creative Writing', 'Screen Writing'],
        pdf: '',
    },
    {
        id: 7,
        title: 'Ghost Fight',
        description: "Horror/Comedy Screenplay",
        longDescription: "This is a short film horror/comedy screenplay about a man who moves into a haunted house and must fight to get the ghost out since he is too broke to move.",
        scope: 'writing',
        tools: ['Creative Writing', 'Screen Writing'],
        pdf: '',
    },
    {
        id: 8,
        title: 'Sublease',
        description: "Horror Screenplay",
        longDescription: "This is a short film about a rental unit that holds a sinister secret. Filming will be starting soon!",
        scope: 'writing',
        tools: ['Creative Writing', 'Screen Writing'],
        pdf: '',
    },
    {
        id: 9,
        title: 'The Queue',
        description: "Movie Reviewing",
        longDescription: "This is an extensive project where I have been writing and reviewing movies on Letterboxd and Instagram since February of 2021.",
        scope: 'writing',
        tools: ['Instagram', 'Letterboxd', 'Analytical Writing'],
        image: letterboxdProfile,
        url: 'https://boxd.it/2R7Q9',
    },
    {
        id: 10,
        title: 'La Crosse Bike Parking Installation',
        description: "Environmental Studies Capstone",
        longDescription: "This was a project I did for my Environmental Studies Capstone at the University of Wisconsin La Crosse where we successfully installed twenty new bike posts in the downtown area.",
        scope: 'design',
        tools: ['Planning', 'Public Speaking'],
        url: '',
        date: ''
    },
    {
        id: 11,
        title: 'The Queue',
        description: "Movie Reviewing",
        longDescription: "Although also being featured in the Writing section, on the Instagram portion I create my own posts utilizing my design skills.",
        scope: 'design',
        tools: ['Canva', 'Instagram', 'Adobe Illustrator'],
        image: instagramProfile,
        url: 'https://www.instagram.com/the.queue__/',
        date: ''
    },
    {
        id: 12,
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