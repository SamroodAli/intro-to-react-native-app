import clsx from 'clsx';
import { Text, TouchableOpacity, View, Alert } from 'react-native';

interface Props {
  name: string;
  isCompleted?: boolean;
}

export function ShoppingListItem({ name, isCompleted }: Props) {
  function onCofirmDelete() {
    console.log('another thing');
  }

  function handleDelete() {
    Alert.alert(
      `Are you sure you want to delete ${name.toLowerCase()}?`,
      'It will be gone for good',
      [
        { text: 'Yes', onPress: onCofirmDelete, style: 'destructive' },
        { text: 'Cancel', style: 'cancel' },
      ],
    );
  }

  return (
    <View
      className={clsx(
        'border-b-primary-light border-b px-2 py-4 flex-row items-center justify-between',
        {
          'bg-gray-200 border-b-primary-light': isCompleted,
        },
      )}
    >
      <Text
        className={clsx('font-extralight text-lg', {
          'line-through decoration-gray-500 text-gray-500': isCompleted,
        })}
      >
        {name}
      </Text>
      <TouchableOpacity
        onPress={handleDelete}
        activeOpacity={0.8}
        className={clsx('bg-black p-2 rounded-md', {
          'bg-gray-500': isCompleted,
        })}
      >
        <Text className={clsx('text-white font-bold tracking-wide')}>
          DELETE
        </Text>
      </TouchableOpacity>
    </View>
  );
}
