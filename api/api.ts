import { Subject, Instructor, Schedule } from "./types";

//NOTE FOR TESTING API - MAKE SURE DEVICES CAN PING EACH OTHER ON SAME NETWORK
//USE THIS COMMAND FOR SERVER -  php artisan serve --host=0.0.0.0 --port=8000
//0.0.0.0 MEANS THAT ALL DEVICE ON THE NETWORK CAN ACCESS IT
//USE THE IP ADDRESS OF THE DEV MACHINE INSTEAD OF  'localhost' THEN KEEP THE PORT
const api_url = "http://192.168.254.112:8000";

// export const addSchedule = async (schedule: Schedule) => {
//   try {
//     const response = await fetch(`${api_url}/api/schedule`, {
//       method: "POST",
//       body: JSON.stringify({
//         subject_id: schedule.subject_id,
//         instructor_id: schedule.instructor_id,
//         start_time: schedule.start_time,
//         end_time: schedule.end_time,
//         day_of_week: schedule.day_of_week,
//       }),
//       headers: {
//         "Content-type": "application/json; charset=UTF-8",
//       },
//     });

//     if (!response.ok) {
//       throw await response.json();
//     }

//     const apiResponse = await response.json();
//     console.log("Schedule added: ", apiResponse);
//     return apiResponse;
//   } catch (error) {
//     console.error("Error adding schedule: ", error);
//   }
// };

export const addSchedule = async (schedule: Schedule) => {
  try {
    const scheduleObj = {
      subject_id: schedule.subject_id,
      instructor_id: schedule.instructor_id,
      start_time: schedule.start_time,
      end_time: schedule.end_time,
      day_of_week: schedule.day_of_week,
    };

    const response = await fetch(`${api_url}/api/schedule`, {
      method: "POST",
      body: JSON.stringify(scheduleObj),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    const responseData = await response.json(); // Parse response data once

    if (!response.ok) {
      throw responseData; // Throw parsed response data
    }

    console.log("Schedule added: ", responseData);
    return responseData;
  } catch (error) {
    console.error("Error adding schedule: ", error);
    // throw error; // Rethrow the error for further handling
  }
};

export const addSubject = async (subject: Subject) => {
  try {
    const response = await fetch(`${api_url}/api/subject`, {
      method: "POST",
      body: JSON.stringify({
        name: subject.name,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    if (!response.ok) {
      throw await response.json();
    }

    const apiResponse = await response.json();
    console.log("Subject added: ", apiResponse);
    return apiResponse;
  } catch (error) {
    console.error("Error adding subject: ", error);
  }
};

export const addInstructor = async (instructor: Instructor) => {
  try {
    const response = await fetch(`${api_url}/api/instructor`, {
      method: "POST",
      body: JSON.stringify({
        name: instructor.name,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    if (!response.ok) {
      throw await response.json();
    }

    const apiResponse = await response.json();
    console.log("Instructor added: ", apiResponse);
    return apiResponse;
  } catch (error) {
    console.error("Error adding instructor: ", error);
  }
};
