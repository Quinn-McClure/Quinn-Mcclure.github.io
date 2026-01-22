export type ProjectScope = 'development' | 'writing' | 'design'

export interface Project {
    id: number;
    title: string;
    description: string;
    longDescription: string;
    scope: ProjectScope;
    image?: string;
    technologies?: string[] | undefined;
    tools?: string[];
    url?: string;
    date?: string;
}

export const projects: Project[] = [
    {
        id: 1,
        title: 'Campbell Gutterworks Website',
        description: "A website I made for Campbell Gutterworks LLC",
        longDescription: "Full Description..",
        scope: 'development',
        technologies: ['React', 'Tailwind CSS', 'Vite', 'Typescript'],
        url: 'https://campbellgutterworks.com/',
        date: '06-20-2025'
    },
    {
        id: 2,
        title: 'The Queue',
        description: "Movie Reviewing",
        longDescription: "This is an extensive project where I have been writing and reviewing movies on Letterboxd and Instagram for the past 5 years",
        scope: 'writing',
        url: 'https://boxd.it/2R7Q9',
        date: '06-20-2025'
    },
    {
        id: 1,
        title: 'Campbell Gutterworks Website',
        description: "A website I made for Campbell Gutterworks LLC",
        longDescription: "Full Description..",
        scope: 'development',
        technologies: ['React', 'Tailwind CSS', 'Vite', 'Typescript'],
        url: 'https://campbellgutterworks.com/',
        date: '06-20-2025'
    },
    {
        id: 3,
        title: 'The Queue',
        description: "Movie Reviewing",
        longDescription: "This is an extensive project where I have been writing and reviewing movies on Letterboxd and Instagram for the past 5 years",
        scope: 'design',
        url: 'https://www.instagram.com/the.queue__/',
        date: '06-20-2025'
    }
];