import { Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { ThemeToggle } from "~/components/ThemeToggle";
import { Home, CalendarClock } from "lucide-react-native"

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "white",

        title: "timesync.",
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarShowLabel: false,
          title: "Home",
          tabBarIcon: ({ color }) => (
            // <FontAwesome size={28} name="home" color={color} />
            <Home color={color} />
          ),
        }}
      ></Tabs.Screen>

      <Tabs.Screen
        name="schedule"



        options={{
          tabBarShowLabel: false,

          title: "Schedule",
          tabBarIcon: ({ color }) => (
            // <FontAwesome size={28} name="cog" color={color} />
            <CalendarClock color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
