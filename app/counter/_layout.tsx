import { THEME } from '@/assets/theme';
import { MaterialIcons } from '@expo/vector-icons';
import { Link, Stack } from 'expo-router';
import { Pressable } from 'react-native';

export default function CounterLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: 'Counter',
          headerRight: () => (
            // if we are passing a component to Link as children, we need to turn on 'asChild' prop
            <Link href="/counter/history" asChild>
              {/* hit slop is basically desigating the surrounding area as touchable too
                for a greater user experience. This way, users wont have to exactly touch the icon
              */}
              <Pressable hitSlop={20}>
                <MaterialIcons
                  name="history"
                  size={32}
                  color={THEME.colorGray}
                />
              </Pressable>
            </Link>
          ),
        }}
      />
    </Stack>
  );
}
