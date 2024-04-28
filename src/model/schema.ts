import { appSchema, tableSchema } from "@nozbe/watermelondb";

export default appSchema({
  version: 1,
  tables: [
    //create schema for subjects, instructors, and schedules
    tableSchema({
      name: "subjects",
      columns: [{ name: "name", type: "string" }],
    }),
    tableSchema({
      name: "instructors",
      columns: [{ name: "name", type: "string" }],
    }),
    tableSchema({
      name: "schedules",
      columns: [
        { name: "subject_id", type: "number", isIndexed: true },
        { name: "instructor_id", type: "number", isIndexed: true },
        { name: "start_time", type: "string" },
        { name: "end_time", type: "string" },
        { name: "day_of_week", type: "string" },
      ],
    }),
  ],
});
