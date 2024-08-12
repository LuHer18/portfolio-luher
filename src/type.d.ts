export interface DataNav {
    path: string;
    title: string;
    id: string;
    iconName: string;
}

export interface TitleLanguage {
    about: string;
    project: string;
    contact: string;
    skills: string;
    curriculum: string;
}

export interface SubContentLanguage {
    p1: string;
    p2: string;
    sendEmailButton: string;
    viewCurriculum: string;
    download: string;
}

//tipado del archivo JSON con la CV

export interface Curriculum {
    basics:       Basics;
    work:         Work[];
    education:    Education[];
    certificates: Certificate[];
    skills:       Skill[];
    languages:    Language[];
    projects:     Project[];
}

export interface Basics {
    name:     string;
    label:    string;
    image:    string;
    email:    string;
    phone:    string;
    url:      string;
    summary:  string[];
    location: Location;
    profiles: Profile[];
}

export interface Location {
    address:     string;
    postalCode:  string;
    city:        string;
    countryCode: string;
    region:      string;
}

export interface Profile {
    network:  string;
    username: string;
    url:      string;
}

export interface Certificate {
    name:   string;
    date:   string | null;
    issuer: string;
    url:    string;
}

export interface Education {
    institution: string;
    url:         string;
    area:        string;
    studyType:   string;
    startDate:   string | null;
    endDate:     string | null;
    score:       string;
}

export interface Language {
    language: string;
    fluency:  string;
}

export interface Project {
    name:                          string;
    image:                         string;
    isActive:                      boolean;
    description:                   string;
    highlights:                    string[];
    url:                           string;
    urlGitHub:                     string;
    ideasPlanning:                 IdeasPlanning;
    implementationFunctionalities: string[];
    testingDeployment:             string[];
    lessonsImprovements:           LessonsImprovements;
    conclusion:                    string;
}

export interface IdeasPlanning {
    inspiration:   string;
    mainFunctions: string[];
}

export interface LessonsImprovements {
    lessonsLearned:     string;
    futureImprovements: string[];
}

export interface Skill {
    name:     string;
    image:    string;
    level:    string;
    keywords: string[];
}



export interface Work {
    name:       string;
    position:   string;
    url:        string;
    startDate:  string;
    endDate:    string | null;
    summary:    string;
    highlights: string[];
}