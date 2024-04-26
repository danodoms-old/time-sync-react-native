export interface Subject {
  name: string;
}

export interface Instructor {
  name: string;
}

export interface Schedule {
  subject: string;
  days: string[];
  startTime: string;
  endTime: string;
}
