import clsx from 'clsx';
import { Text, TouchableOpacity, View, Alert } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

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
        'border-b-primary-light border-b px-4 py-4 flex-row items-center justify-between',
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
      <TouchableOpacity onPress={handleDelete} activeOpacity={0.8}>
        <AntDesign
          name="closecircle"
          size={24}
          color={isCompleted ? 'gray' : 'red'}
        />
      </TouchableOpacity>
    </View>
  );
}
