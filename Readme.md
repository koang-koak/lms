# SpendWise Budget Tracker

SpendWise is an interactive budgeting application built using HTML, CSS, and JavaScript.

## Improvements Made This Week

This week, SpendWise was improved by adding JavaScript functionality to make the application interactive.

The application now allows users to:

- Set a budget.
- Add multiple expenses.
- Select an expense category.
- View total spending.
- View the remaining budget.
- Delete expenses.
- Receive feedback based on their budget status.
- See expense records directly on the webpage.

## 1. Decision Making and Conditionals

Conditional statements are used to evaluate the user's budget situation.

For example:

```javascript
if (budget === 0) {
    message.textContent = "Please set a budget to start tracking.";
} 
else if (remaining < 0) {
    message.textContent = "Warning: You have exceeded your budget!";
} 
else if (remaining <= budget * 0.2) {
    message.textContent = "Careful! You are close to your budget limit.";
} 
else {
    message.textContent = "Great job! You are within your budget.";
}
