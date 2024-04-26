import { Subject, Instructor, Schedule } from "./types";

//NOTE FOR TESTING API - MAKE SURE DEVICES CAN PING EACH OTHER ON SAME NETWORK
//USE THIS COMMAND FOR SERVER -  php artisan serve --host=0.0.0.0 --port=8000
//0.0.0.0 MEANS THAT ALL DEVICE ON THE NETWORK CAN ACCESS IT
//USE THE IP ADDRESS OF THE DEV MACHINE INSTEAD OF  'localhost' THEN KEEP THE PORT
const api_url = "http://192.168.254.112:8000";

export const addSchedule = async () => {
  try {
    const response = await fetch(`${api_url}/api/subject`, {
      method: "POST",
      body: JSON.stringify({
        name: "hahahhaahhahahahahahaha",
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
    console.log("sendingggg dataaaaa");
  } catch (error) {
    console.log("errrror occured: ", error);
  }

  console.log("sendingggg dataaaaa");
};

export const addSubject = async (subject: Subject) => {
  let response;

  try {
    response = await fetch(`${api_url}/api/subject`, {
      method: "POST",
      body: JSON.stringify({
        name: subject.name,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
    console.log("Subject added: ", response);
  } catch (error) {
    console.log("Error adding subject: ", error);
  }

  return response;
};
