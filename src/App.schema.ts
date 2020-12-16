export interface University {
    name: string; 
    abbreviation?: string; 
    id: string; 
    conferenceNum?: string; 
}

export interface Participant {
    name: string; 
    schools: University[];
    score: number;  
}

export interface Game {
    id: string; 
    name: string; 
    score: string; 
    winnerId: string; 
    loserId: string; 
}