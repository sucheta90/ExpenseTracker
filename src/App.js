import React, { useState } from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const App = () => {
  const [expenses, setExpenses] = useState([
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
    {
      id: "e5",
      title: "Album",
      amount: 100,
      date: new Date(2022, 9, 8),
    },
    {
      id: "e6",
      title: "Macbook",
      amount: 1500,
      date: new Date(2022, 1, 21),
    },
    {
      id: "e7",
      title: "Breakfast",
      amount: 41,
      date: new Date(2023, 0, 2),
    },
  ]);
  const addExpense = (obj) => {
    console.log("inside Add expense");
    setExpenses((prevArray) => {
      obj.id = `e${prevArray.length + 1}`;
      console.log(`prevArray = ${prevArray}`);
      return [...prevArray, obj];
    });
  };
  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  return (
    <div>
      <NewExpense addExpense={addExpense} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
