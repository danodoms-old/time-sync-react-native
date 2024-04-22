import { useState, useRef } from "react";
import { ScrollView, View, StyleSheet, Dimensions } from "react-native";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";

import { Text } from "~/components/ui/text";
import { Link } from "expo-router";
import { Button } from "~/components/ui/button";
import { Label } from "~/components/ui/label";
import { Input } from "~/components/ui/input";

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
  const scrollViewRef = useRef(null);
  const [value, setValue] = useState("Monday");

  const getIndexFromDay = (day: any) => {
    const indexMap = {
      Sunday: 0,
      Monday: 1,
      Tuesday: 2,
      Wednesday: 3,
      Thursday: 4,
      Friday: 5,
      Saturday: 6,
    };
    return indexMap[day];
  };

  const handleValueChange = (newDay: any) => {
    const screenWidth = Dimensions.get("window").width;
    const index = getIndexFromDay(newDay);
    const offset = screenWidth * index;
    scrollViewRef.current?.scrollTo({ x: offset, animated: true }); // Step 3: Scroll to the calculated offset
    setValue(newDay);
  };

  const screenWidth = Dimensions.get("window").width;

  const handleScroll = (event: any) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const currentPage = Math.round(scrollPosition / screenWidth);
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    setValue(days[currentPage]);
  };

  return (
    <View>
      <Tabs
        value={value}
        // onValueChange={setValue}
        onValueChange={handleValueChange}
        className="w-full max-w-[400px] mx-auto flex-col gap-1.5 p-4"
      >
        <TabsList className="flex-row w-full">
          {schedules.map((day, index) => (
            <TabsTrigger value={day.day} className="flex-1" key={index}>
              <Text className="uppercase">{day.day.substring(0, 3)}</Text>
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      <ScrollView
        ref={scrollViewRef}
        className="w-full"
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        {/* Render views for each day's schedules */}
        {schedules.map((day, index) => (
          <View className="p-4 w-screen gap-2" key={index}>
            <Text className="font-bold text-3xl pb-2">{day.day}</Text>

            {/* Checks if given day has schedule */}
            {day.schedules.length > 0 ? (
              // Render all schedules for the given day
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
                      <Text className="font-bold text-xl">
                        {schedule.start}
                      </Text>
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

            {/* Render add button at the bottom */}

            <View className="p-4">
              <Link href="/schedule/create" className="text-center">
                <Text className="font-semibold text-3xl text-center">+</Text>
              </Link>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
