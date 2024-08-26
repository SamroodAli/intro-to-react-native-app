import { View } from 'react-native';
import { ShoppingListItem } from '../components/ShoppingListItem';

export default function App() {
  return (
    <View className="flex-1 justify-center">
      <ShoppingListItem name="Coffee" isCompleted />
      <ShoppingListItem name="Tea" />
      <ShoppingListItem name="Sugar" />
    </View>
  );
}
