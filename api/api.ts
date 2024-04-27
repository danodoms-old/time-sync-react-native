import { Subject, Instructor, Schedule } from "./types";
import axios from "axios";

//NOTE FOR TESTING API - MAKE SURE DEVICES CAN PING EACH OTHER ON SAME NETWORK
//USE THIS COMMAND FOR SERVER -  php artisan serve --host=0.0.0.0 --port=8000
//0.0.0.0 MEANS THAT ALL DEVICE ON THE NETWORK CAN ACCESS IT
//USE THE IP ADDRESS OF THE DEV MACHINE INSTEAD OF  'localhost' THEN KEEP THE PORT
const api_url = "http://192.168.254.117:8000";

export const addSchedule = async (schedule: Schedule) => {
  try {
    const scheduleObj = {
      subject_id: schedule.subject_id,
      instructor_id: schedule.instructor_id,
      start_time: schedule.start_time,
      end_time: schedule.end_time,
      day_of_week: schedule.day_of_week,
    };

    const response = await axios.post(`${api_url}/api/schedule`, scheduleObj, {
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    console.log("Schedule added: ", response.data);
    return response.data;
  } catch (error) {
    console.error("Error adding schedule: ", error.response.data);
    // throw error; // Rethrow the error for further handling
  }
};

export const addSubject = async (subject: Subject) => {
  try {
    const response = await axios.post(
      `${api_url}/api/subject`,
      {
        name: subject.name,
      },
      {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );

    console.log("Subject added: ", response.data);
    return response.data;
  } catch (error) {
    console.error("Error adding subject: ", error.response.data);
  }
};

export const addInstructor = async (instructor: Instructor) => {
  try {
    const response = await axios.post(
      `${api_url}/api/instructor`,
      {
        name: instructor.name,
      },
      {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );

    console.log("Instructor added: ", response.data);
    return response.data;
  } catch (error) {
    console.error("Error adding instructor: ", error.response.data);
  }
};

export const getSchedules = async () => {
  try {
    const response = await axios.get(`${api_url}/api/schedules`, {
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    const schedules = response.data;

    console.log("Schedules fetched: ", schedules);
    return schedules;
  } catch (error) {
    console.error("Error fetching schedules: ", error.response.data);
    throw new Error("Error fetching schedules");
  }
};

//! deprecated
// export const getSchedules = async () => {
//   try {
//     const response = await fetch(`${api_url}/api/schedules`, {
//       method: "GET",
//       headers: {
//         "Content-type": "application/json; charset=UTF-8",
//       },
//     });

//     if (!response.ok) {
//       throw await response.json();
//     }

//     const apiResponse = await response.json();
//     const schedules = JSON.stringify(apiResponse.schedules);

//     console.log("Schedules fetched: ", schedules);
//     return schedules;
//   } catch (error) {
//     console.error("Error fetching schedules: ", error);
//   }
// };

//! deprecated
// export const getSchedules = () => {
//   return fetch(`${api_url}/api/schedules`, {
//     method: "GET",
//     headers: {
//       "Content-type": "application/json; charset=UTF-8",
//     },
//   })
//     .then((response) => {
//       if (!response.ok) {
//         throw response.json();
//       }
//       return response.json();
//     })
//     .then((apiResponse) => {
//       const schedules = apiResponse.schedules;
//       console.log("Schedules fetched: ", schedules);
//       return schedules;
//     })
//     .catch((error) => {
//       console.error("Error fetching schedules: ", error);
//     });
// };
