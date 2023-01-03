import React, { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  const [yearFilter, setYearFilter] = useState("2021");
  const handleYearFilterChange = (e) => {
    setYearFilter(e.target.value);
    console.log(e.target.value);
  };
  const expenseItemArray = props.items.filter((item) => {
    if (item.date.getFullYear() === parseInt(yearFilter)) {
      return item;
    }
  });
  // console.log(expenseItemArray);
  const expenseItem = expenseItemArray.map((item) => {
    return (
      <ExpenseItem
        key={item.id}
        title={item.title}
        amount={item.amount}
        date={item.date}
      />
    );
  });
  return (
    <Card className="expenses">
      <ExpensesFilter
        initialValue={yearFilter}
        onChange={handleYearFilterChange}
      />
      {expenseItem.length == 0 ? (
        <p style={{ color: "white" }}>No Items Found</p>
      ) : (
        expenseItem
      )}
    </Card>
  );
};

export default Expenses;
