import { useRouter } from 'expo-router';
import { View, Text, TouchableOpacity } from 'react-native';

export default function CounterScreen() {
  const router = useRouter();

  // we can use Link component, but learning programmatic navigation here
  function goToIdea() {
    router.navigate('/idea');
  }

  return (
    <View className="flex-1 justify-center items-center bg-white">
      <TouchableOpacity onPress={goToIdea} className="mb-4 text-center">
        <Text>Go to Idea</Text>
      </TouchableOpacity>
      <Text className="text-2xl">Counter</Text>
    </View>
  );
}
