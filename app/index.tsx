import { TextInput, View } from 'react-native';
import { ShoppingListItem } from '../components/ShoppingListItem';
import { useState } from 'react';

type ListItem = {
  id: string;
  name: string;
  isCompleted: boolean;
};

const initialList: ListItem[] = [
  {
    id: '1',
    name: 'Coffee',
    isCompleted: false,
  },
  {
    id: '2',
    name: 'Tea',
    isCompleted: false,
  },
  {
    id: '3',
    name: 'Sugar',
    isCompleted: false,
  },
];

export default function App() {
  const [value, setValue] = useState('');
  const [shoppingList, setShoppingList] = useState<ListItem[]>(initialList);

  const onHandleSubmit = () => {
    if (value) {
      setShoppingList((prevList) => [
        {
          id: new Date().toISOString(),
          name: value,
          isCompleted: false,
        },
        ...prevList,
      ]);
      setValue('');
    }
  };

  return (
    <View className="flex-1 pt-4">
      <TextInput
        className="border-gray-200 border-2 p-3 mx-3 mb-3 text-lg rounded-full"
        value={value}
        onChangeText={setValue}
        placeholder="E.g Coffee"
        // what the 'return' key in keyboard look like
        returnKeyType="done"
        onSubmitEditing={onHandleSubmit}
      />
      {shoppingList.map((item) => (
        <ShoppingListItem
          key={item.id}
          name={item.name}
          isCompleted={item.isCompleted}
        />
      ))}
    </View>
  );
}
