import { View, ScrollView } from "react-native";
import { Text } from "~/components/ui/text";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
// import { Bold, Italic, Underline } from '~/components/Icons';
import { ToggleGroup, ToggleGroupIcon, ToggleGroupItem } from '~/components/ui/toggle-group';
import { useState } from "react";
import { Card } from "~/components/ui/card";
import { Pen, X } from "lucide-react-native";
// import DateTimePicker from "@mohalla-tech/react-native-date-time-picker"
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { cssInterop } from "nativewind";
import { addSubject, addSchedule } from "~/api/api";
import { Subject, Instructor, Schedule } from "~/api/types";



export default function CreateSchedule() {

    cssInterop(X, {
        className: {
            target: "style",
            nativeStyleToProp: { width: true, height: true }
        },
    });

    const [subject, setSubject] = useState("");
    const [days, setDays] = useState<string[]>([]);
    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [selectedInput, setSelectedInput] = useState(""); // to track which input field is currently selected


    console.log("days values: ", days)

    const showDatePicker = (input: string) => {
        setSelectedInput(input); // set the selected input field
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    //Should only be used by DateTimePickerModal component
    const handleConfirm = (time: any) => {
        const time24hr = new Date(time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
        const timeNo24hr = new Date(time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

        if (selectedInput === "startTime") {
            setStartTime(time24hr);
        } else if (selectedInput === "endTime") {
            setEndTime(time24hr);
        }

        hideDatePicker();
    };

    const handleSave = async () => {
        addSubject({ name: subject });
    }


    return (
        <ScrollView className="p-4 gap-2">
            <View className="gap-2">
                <Text className="font-bold text-2xl pb-2">Add Schedule</Text>
                <Input
                    placeholder='Subject'
                    value={subject}
                    onChangeText={setSubject}
                    aria-labelledbyledBy='inputLabel'
                    aria-errormessage='inputError'
                />
                <Input
                    placeholder='Instructor'
                    // value={ }
                    // onChangeText={ }
                    aria-labelledbyledBy='inputLabel'
                    aria-errormessage='inputError'
                />
            </View>

            {/* Stores the form for schedule object */}
            <View className="py-4 gap-4">

                <DateTimePickerModal
                    isVisible={isDatePickerVisible}
                    mode="time"
                    onConfirm={(time) => handleConfirm(time)}
                    onCancel={hideDatePicker}
                    isDarkModeEnabled={true}
                />


                <Card className="p-4 gap-2">

                    <Text className="text-sm p-1 opacity-80">Start Time</Text>
                    {/* Input for start time */}
                    <View className="flex-row gap-2">

                        {startTime ? (
                            <>

                                <Input
                                    className="flex-auto"
                                    placeholder='Start Time'
                                    value={startTime}
                                    // onChangeText={text => setStartTime(text)}
                                    aria-labelledbyledBy='inputLabel'
                                    aria-errormessage='inputError'
                                />
                                <Button onPress={() => setStartTime("")} className="bg-rose-500">
                                    <X color={"#000000"} />
                                </Button>
                                <Button onPress={() => showDatePicker("startTime")}>
                                    <Pen color={"#000000"} />
                                </Button>

                            </>

                        ) : (
                            <Button onPress={() => showDatePicker("startTime")} className="flex-auto" variant="outline">
                                <Text>+ Add start time</Text>
                            </Button>
                        )}

                    </View>


                    <Text className="text-sm p-1 opacity-80">End Time</Text>
                    {/* Input for end time */}
                    <View className="flex-row gap-2">

                        {endTime ? (
                            <>
                                <Input
                                    className="flex-auto"
                                    placeholder='End Time'
                                    value={endTime}
                                    // onChangeText={text => setEndTime(text)}
                                    aria-labelledbyledBy='inputLabel'
                                    aria-errormessage='inputError'
                                />
                                <Button onPress={() => setEndTime("")} className="bg-rose-500">
                                    <X color={"#000000"} />
                                </Button>
                                <Button onPress={() => showDatePicker("endTime")}>
                                    <Pen color={"#000000"} />
                                </Button>

                            </>
                        ) : (
                            <Button onPress={() => showDatePicker("endTime")} className="flex-auto" variant="outline">
                                <Text>+ Add end time</Text>
                            </Button>)}

                    </View>


                    {startTime && endTime ? (
                        <>
                            <Text className="text-sm p-1 opacity-80">Repeat every</Text>

                            <View>

                                <ToggleGroup value={days} onValueChange={setDays} className="w-full flex-wrap text-xs" type='multiple'>
                                    <ToggleGroupItem value='sunday' aria-label='Toggle bold'>
                                        <Text>SUN</Text>
                                    </ToggleGroupItem>
                                    <ToggleGroupItem value='monday' aria-label='Toggle italic'>
                                        <Text>MON</Text>
                                    </ToggleGroupItem>
                                    <ToggleGroupItem value='tuesday' aria-label='Toggle underline'>
                                        <Text>TUE</Text>
                                    </ToggleGroupItem>
                                    <ToggleGroupItem value='wednesday' aria-label='Toggle bold'>
                                        <Text>WED</Text>
                                    </ToggleGroupItem>
                                    <ToggleGroupItem value='thursday' aria-label='Toggle italic'>
                                        <Text>THU</Text>
                                    </ToggleGroupItem>
                                    <ToggleGroupItem value='friday' aria-label='Toggle underline'>
                                        <Text>FRI</Text>
                                    </ToggleGroupItem>
                                    <ToggleGroupItem value='saturday' aria-label='Toggle underline'>
                                        <Text>SAT</Text>
                                    </ToggleGroupItem>
                                </ToggleGroup>
                            </View>
                        </>
                    ) : null}

                </Card>

                {days.length > 0 ? (
                    <View className="flex-row gap-2">
                        <Button className="flex-auto" variant="outline">
                            <Text>+ Add another schedule</Text>
                        </Button>
                    </View>
                ) : null}

            </View>

            <Button onPress={handleSave}>
                <Text className="font-semibold">Save</Text>
            </Button>
        </ScrollView>
    )
}