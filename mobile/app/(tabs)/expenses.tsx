import { useEffect, useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { ScrollView, View } from "react-native";
import { ExpenseService } from "@/api/services/expenseService";
import { ExpenseResponse } from "@/types/api/response/expense";
import List from "@/components/atoms/lists/List";
import useExpenseTheme from "@/styles/ExpenseScreen";

export default function Expenses() {
  const { styles } = useExpenseTheme();
  const { user } = useAuth();
  const expenseService = new ExpenseService();
  const [expenses, setExpenses] = useState<ExpenseResponse[] | null>(null);

  useEffect(() => {
    async function fetchExpenses() {
      const response = await expenseService.getAll(
        user?.token ? user.token : "",
      );
      setExpenses(response);
    }

    fetchExpenses();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <List data={expenses} />
    </ScrollView>
  );
}
