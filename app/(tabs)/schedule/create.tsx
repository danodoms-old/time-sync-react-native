import { View } from "react-native";
import { Text } from "~/components/ui/text";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
// import { Bold, Italic, Underline } from '~/components/Icons';
import { ToggleGroup, ToggleGroupIcon, ToggleGroupItem } from '~/components/ui/toggle-group';
import { useState } from "react";
import { Card } from "~/components/ui/card";



export default function CreateSchedule() {


    const [days, setDays] = useState<string[]>([]);
    return (
        <View className="p-4 gap-2">
            <View className="gap-2">
                <Text className="font-bold text-2xl pb-2">Add Schedule</Text>
                <Input
                    placeholder='Subject'
                    // value={ }
                    // onChangeText={ }
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
            <View className="pt-4">
                <Card className="p-2 gap-2">
                    <Input
                        placeholder='Start Time'
                        // value={ }
                        // onChangeText={ }
                        aria-labelledbyledBy='inputLabel'
                        aria-errormessage='inputError'
                    />
                    <Input
                        placeholder='End Time'
                        // value={ }
                        // onChangeText={ }
                        aria-labelledbyledBy='inputLabel'
                        aria-errormessage='inputError'
                    />

                    <Text className="text-sm p-2 opacity-80">Select applicable days</Text>

                    <View>
                        <ToggleGroup value={days} onValueChange={setDays} className="w-full flex-wrap  text-xs" type='multiple'>
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
                </Card>

                <View className="p-2">
                    <Text className="font-semibold text-3xl text-center">+</Text>
                </View>
            </View>

            <Button>
                <Text className="font-semibold">Add</Text>
            </Button>
        </View>
    )
}