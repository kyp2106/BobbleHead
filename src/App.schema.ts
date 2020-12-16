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

export interface TeamGameInfo {
    id: string; 
    name: string; 
    score: string; 
}

export interface Game {
    id: string; 
    name: string; 
    winner: TeamGameInfo
    loser: TeamGameInfo; 
}