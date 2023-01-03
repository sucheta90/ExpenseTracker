# Expense Tracker

An app build with React that helps keep a track of the monthly expenses.

## Features

- This app shows a form that has three input fields for the expense **_Title_** , **_Amount_** and **_Date_**.
- OnClick event, the **_Add Expense_** will validate all input fields to check if all fields have data. If a field is found to be empty, the app will highlight the input field to indicate that by changing the backgroud color of the input field.
- If all information are entered correctly, the expense will be added to the list below.
- The app has date ranged between the year 2019 and 2023, hence the expense data will be saved to the year selected.
- The expense list has a Year filter and to see the expenses for the setected year, user needs to select the Year from the dropdown.
- The app uses static data and react states to store the data, hence on page refresh the added data will be lost.

### React Features

I did not build this project from scratch. I used the layout(HTML and CSS) to practice writing codes to establish communication between different functional components.

1. In this project I have learnt about **_State Hooks_** and it's uses. The initial data has been set in a state inside _App.js_. Which is then passed into the **Expenses.js** componenet as _props_. Here, App.js acts as the closest Parent maintaining the state.

2. How **_props_** are being passed as attribute in a customized element and how we can access the props(object) inside of a functional component.

3. How a handler function is passed into a child component as a props, from the parent component so as to change the output of a sibling component.

4. How to establish a two way bonding by using **_State Hook_**.
