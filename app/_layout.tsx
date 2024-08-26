import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Shopping List' }} />
      <Stack.Screen name="counter" options={{ title: 'Shopping List' }} />
      <Stack.Screen
        name="idea"
        options={{
          title: 'Shopping List',
          presentation: 'modal',
          animation: 'slide_from_bottom',
        }}
      />
    </Stack>
  );
}
