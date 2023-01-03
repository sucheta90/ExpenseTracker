import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  console.log("rendering");
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [isError, setIsError] = useState(false);
  function changeTitle(e) {
    setTitle(() => e.target.value.trim());
    setIsError(false);
  }
  function changeAmount(e) {
    setAmount(() => e.target.value);
    setIsError(false);
  }
  function changeDate(e) {
    setDate(() => e.target.value);
    setIsError(false);
  }
  function getDate(date) {
    let year = parseInt(date.slice(0, 4));
    let month = parseInt(date.slice(5, 7)) - 1;
    let dateOfMonth = parseInt(date.slice(8));
    return new Date(year, month, dateOfMonth);
  }
  function handleClick(e) {
    e.preventDefault();
    console.log("inside handleclick");
    if (!title || !amount || !date) {
      console.log("inside if block");
      setIsError(true);
    } else {
      const formData = {
        title: title,
        amount: amount,
        date: getDate(date),
      };
      console.log(formData.date);
      setTitle("");
      setAmount("");
      setDate("");
      setIsError(false);
      props.addExpense(formData);
    }
  }

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            name="title"
            id="title"
            type="text"
            value={title}
            onChange={changeTitle}
            className={`input_title ${isError && !title ? "error_class" : ""}`}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            id="amount"
            type="number"
            min="0.01"
            step="0.01"
            onChange={changeAmount}
            value={amount}
            className={`input_amount ${
              isError && !amount ? "error_class" : ""
            }`}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            id="date"
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            onChange={changeDate}
            value={date}
            className={`input_date ${isError && !date ? "error_class" : ""}`}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit" onClick={handleClick}>
          Add Expense
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
