import React from "react";
import { ScrollView, View, StyleSheet, Dimensions } from "react-native";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

import { Text } from "~/components/ui/text";

export default function Schedule() {
  const schedules = [
    {
      day: "Sunday",
      schedules: [],
    },
    {
      day: "Monday",
      schedules: [
        {
          name: "ITC 130",
          instructor: "Steve Wozniak",
          start: "09:00",
          end: "10:00",
        },
        {
          name: "PHY 101",
          instructor: "Albert Einstein",
          start: "11:30",
          end: "12:30",
        },
      ],
    },
    {
      day: "Tuesday",
      schedules: [
        {
          name: "ITC 130",
          instructor: "Steve Wozniak",
          start: "13:00",
          end: "14:00",
        },
        {
          name: "MTH 245",
          instructor: "Ada Lovelace",
          start: "10:15",
          end: "11:15",
        },
      ],
    },
    {
      day: "Wednesday",
      schedules: [
        {
          name: "ITC 130",
          instructor: "Steve Wozniak",
          start: "09:00",
          end: "10:00",
        },
        {
          name: "PHY 101",
          instructor: "Albert Einstein",
          start: "11:30",
          end: "12:30",
        },
      ],
    },
    {
      day: "Thursday",
      schedules: [
        {
          name: "MTH 245",
          instructor: "Ada Lovelace",
          start: "10:15",
          end: "11:15",
        },
        {
          name: "HIS 207",
          instructor: "Howard Zinn",
          start: "14:00",
          end: "15:30",
        },
      ],
    },
    {
      day: "Friday",
      schedules: [
        {
          name: "ITC 130",
          instructor: "Steve Wozniak",
          start: "09:00",
          end: "10:00",
        },
        {
          name: "PHY 101",
          instructor: "Albert Einstein",
          start: "11:30",
          end: "12:30",
        },
        {
          name: "HIS 207",
          instructor: "Howard Zinn",
          start: "14:00",
          end: "15:30",
        },
      ],
    },
    {
      day: "Saturday",
      schedules: [],
    },
  ];

  return (
    <ScrollView
      className="w-full"
      horizontal={true}
      pagingEnabled={true}
      showsHorizontalScrollIndicator={false}
    >
      {schedules.map((day, index) => (
        <View className="p-4 w-screen gap-2" key={index}>
          <Text className="font-bold text-3xl pb-2">{day.day}</Text>
          {day.schedules.length > 0 ? (
            day.schedules.map((schedule, index) => (
              <Card className="w-full flex-row justify-between" key={index}>
                <CardHeader className="">
                  <CardTitle>{schedule.name}</CardTitle>
                  <CardDescription>{schedule.instructor}</CardDescription>
                </CardHeader>
                <View className="p-4 gap-2">
                  <View className="flex-row gap-4 bg-secondary p-2 justify-between rounded-md">
                    <Text className="align-middle text-sm font-semibold">
                      START
                    </Text>
                    <Text className="font-bold text-xl">{schedule.start}</Text>
                  </View>

                  <View className="flex-row gap-4 bg-secondary p-2 justify-between rounded-md">
                    <Text className="align-middle text-sm font-semibold">
                      END
                    </Text>
                    <Text className="font-bold text-xl">{schedule.end}</Text>
                  </View>
                </View>
              </Card>
            ))
          ) : (
            <Text>No Schedules</Text>
          )}
        </View>
      ))}
    </ScrollView>
  );
}

const screenWidth = Dimensions.get("window").width;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   dayContainer: {
//     width: screenWidth, // Adjust the width to fit your screen
//     padding: 20,
//     backgroundColor: "#f0f0f0",
//   },
//   dayTitle: {
//     fontSize: 18,
//     fontWeight: "bold",
//   },
//   card: {
//     backgroundColor: "white",
//     marginVertical: 8,
//     padding: 10,
//     borderRadius: 5,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 1.5,
//     elevation: 3,
//   },
// });
