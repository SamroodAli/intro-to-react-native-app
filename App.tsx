import { View } from 'react-native';
import { ShoppingListItem } from './components/ShoppingListItem';

export default function App() {
  return (
    <View className="bg-white flex-1 justify-center">
      <ShoppingListItem name="Coffee" />
      <ShoppingListItem name="Tea" />
      <ShoppingListItem name="Sugar" />
    </View>
  );
}
