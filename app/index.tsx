import { View } from 'react-native';
import { ShoppingListItem } from '../components/ShoppingListItem';
import { Link } from 'expo-router';

export default function App() {
  return (
    <View className="flex-1 justify-center">
      <Link className="text-center mb-4" href="/counter">
        Go to counter
      </Link>
      <ShoppingListItem name="Coffee" isCompleted />
      <ShoppingListItem name="Tea" />
      <ShoppingListItem name="Sugar" />
    </View>
  );
}
