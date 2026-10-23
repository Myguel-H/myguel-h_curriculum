export interface PersonalData {
    name: string;
    location: string;
    email?: string;
}

export interface Experience {
    company: string;
    sector: String;
    position: string;
    period: string;
    description: string;
}

export interface Education {
    duration: string;
    institution: string;
    summary: string;
}

export interface Projects {
    name: string;
    description: string;
    link?: string;
}

export interface FutureProjects {
    name: String;
    description: String;
}

export interface Certificate {
    name: string;
    duration: string;   
    institution: string;
}