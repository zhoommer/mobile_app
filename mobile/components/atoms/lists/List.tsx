import { ExpenseResponse } from "@/types/api/response/expense";
import VStack from "../stacks/VStack";
import { Text, View } from "react-native";
import useFlatListTheme from "@/styles/FlatList";

interface IProps {
  data: ExpenseResponse[] | null;
}

export default function List(props: IProps) {
  const { styles } = useFlatListTheme();
  return (
    <VStack>
      {props.data?.map((item, index) => (
        <View key={index} style={styles.box}>
          <Text style={styles.text}>{item.name}</Text>
          <View style={styles.flexBox}>
            <Text style={styles.text}>{item.price}</Text>
            <Text style={styles.text}>{item.quantity}</Text>
          </View>

          <View style={styles.text}>
            <Text>{item.created_at.split("T")[0]}</Text>
          </View>
        </View>
      ))}
    </VStack>
  );
}
