export interface Car {
  name?: string;
  color?: string;
  id: string;
}

export interface Winner {
  wins: number;
  time: number;
  id: string;
}

export interface CarWinner {
  color: string;
  name: string;
  wins: number;
  time: number;
  id: string;
}
