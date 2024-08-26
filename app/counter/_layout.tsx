import { Stack } from 'expo-router';

export default function CounterLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Counter' }} />
    </Stack>
  );
}
