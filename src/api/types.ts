export interface Subject {
  name: string;
}

export interface Instructor {
  name: string;
}

export interface Days {
  days:
    | "monday"
    | "tuesday"
    | "wednesday"
    | "thursday"
    | "friday"
    | "saturday"
    | "sunday";
}

export interface Schedule {
  subject_id: number;
  instructor_id: number;
  start_time: string;
  end_time: string;
  day_of_week: Days;
}
