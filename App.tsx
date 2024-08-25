import { Text, TouchableOpacity, View, Alert } from 'react-native';

export default function App() {
  function onCofirmDelete() {
    console.log('delete confirmed');
  }

  function handleDelete() {
    Alert.alert(
      'Are you sure you want to delete this?',
      'It will be gone for good',
      [
        { text: 'Yes', onPress: onCofirmDelete, style: 'destructive' },
        { text: 'Cancel', style: 'cancel' },
      ],
    );
  }

  return (
    <View className="bg-white flex-1 justify-center">
      <View className="border-b-primary-light border-b px-2 py-4 flex-row items-center justify-between">
        <Text className="font-extralight text-lg">Coffee</Text>
        <TouchableOpacity
          onPress={handleDelete}
          activeOpacity={0.8}
          className="bg-black p-2 rounded-md"
        >
          <Text className="text-white font-bold tracking-wide">DELETE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
