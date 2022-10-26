import { StyleSheet, View, Text, Pressable } from 'react-native';

function GoalItem(props) {
  return props.index % 2 === 0 ? (
    <View style={[styles.goalItem, styles.goalItemEven]}>
      <Pressable
        onPress={props.onDeleteItem.bind(this, props.id)}
        // style={({ pressed }) => pressed && styles.pressedItem}
        android_ripple={{ color: '#dddddd' }}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  ) : (
    <View style={[styles.goalItem, styles.goalItemOdd]}>
      <Pressable
        onPress={props.onDeleteItem.bind(this, props.id)}
        // style={({ pressed }) => pressed && styles.pressedItem}
        android_ripple={{ color: '#dddddd' }}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: { margin: 8, borderRadius: 6 },
  goalItemEven: { backgroundColor: '#B9FBFF' },
  goalItemOdd: { backgroundColor: '#BAFB97' },
  goalText: { padding: 8, fontWeight: '800' },
  pressedItem: { color: 'grey' }
});
