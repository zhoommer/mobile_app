import useFlatListTheme from "@/styles/FlatList";
import { ExpenseResponse } from "@/types/api/response/expense";
import { FlatList, Text } from "react-native";

interface IProps {
  data: ExpenseResponse[] | null;
}

export default function FlatListComponent(props: IProps) {
  const { styles } = useFlatListTheme();
  return (
    <FlatList
      data={props.data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item, index }) => (
        <Text key={index} style={styles.text}>
          {item.name}
        </Text>
      )}
      style={styles.list}
    />
  );
}
