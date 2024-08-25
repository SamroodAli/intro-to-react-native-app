import { Link } from 'expo-router';
import { View, Text } from 'react-native';

export default function IdeaScreen() {
  return (
    <View className="flex-1 justify-center items-center bg-white">
      <Link className="text-center mb-4" href="/counter">
        Go to counter
      </Link>
      <Text className="text-2xl">Idea</Text>
    </View>
  );
}
