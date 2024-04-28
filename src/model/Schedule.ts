// model/Post.js

import { Model } from "@nozbe/watermelondb";
import { field, text } from "@nozbe/watermelondb/decorators";
import { Days } from "~/src/api/types";

export default class Schedule extends Model {
  static table = "schedules";
  static associations = {
    subjects: { type: "h //@ts-ignoreas_many", key: "subject_id" },
    instructors: { type: "has_many", key: "instructor_id" },
  };

  //@ts-ignore
  @field("subject_id") subject_id: number;
  //@ts-ignore
  @field("instructor_id") instructor_id: number;
  //@ts-ignore
  @text("start_time") start_time: string;
  //@ts-ignore
  @test("end_time") end_time: string;
  //@ts-ignore
  @text("day_of_week") day_of_week: Days;
}

class Subject extends Model {
  static table = "subjects";
  static associations = {
    schedules: { type: "belongs_to", foreignKey: "subject_id" },
  };
}

class Instructor extends Model {
  static table = "instructors";
  static associations = {
    schedules: { type: "belongs_to", foreignKey: "instructor_id" },
  };
}
