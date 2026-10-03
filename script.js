// Budget variable
let budget = 0;

// Array used to store multiple expense records
let expenses = [];

// Get elements from the HTML
const budgetForm = document.getElementById("budgetForm");
const budgetInput = document.getElementById("budgetInput");

const expenseForm = document.getElementById("expenseForm");
const expenseName = document.getElementById("expenseName");
const expenseAmount = document.getElementById("expenseAmount");
const expenseCategory = document.getElementById("expenseCategory");

const budgetDisplay = document.getElementById("budget");
const totalSpentDisplay = document.getElementById("totalSpent");
const remainingDisplay = document.getElementById("remaining");

const expenseList = document.getElementById("expenseList");
const message = document.getElementById("message");


// Event listener for setting the budget
budgetForm.addEventListener("submit", function(event) {
    event.preventDefault();

    budget = Number(budgetInput.value);

    updateDashboard();

    budgetInput.value = "";
});


// Event listener for adding an expense
expenseForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = expenseName.value;
    const amount = Number(expenseAmount.value);
    const category = expenseCategory.value;

    // Create an expense object
    const expense = {
        name: name,
        amount: amount,
        category: category
    };

    // Store the expense in the array
    expenses.push(expense);

    updateDashboard();
    displayExpenses();

    expenseForm.reset();
});


// Calculate total expenses
function calculateTotal() {
    let total = 0;

    // Loop through the expenses array
    for (let i = 0; i < expenses.length; i++) {
        total += expenses[i].amount;
    }

    return total;
}


// Update the dashboard using DOM manipulation
function updateDashboard() {
    const total = calculateTotal();
    const remaining = budget - total;

    budgetDisplay.textContent = `$${budget.toFixed(2)}`;
    totalSpentDisplay.textContent = `$${total.toFixed(2)}`;
    remainingDisplay.textContent = `$${remaining.toFixed(2)}`;

    // Conditional statements for budget feedback
    if (budget === 0) {
        message.textContent = "Please set a budget to start tracking.";
        message.style.color = "#555";
    } 
    else if (remaining < 0) {
        message.textContent = "Warning: You have exceeded your budget!";
        message.style.color = "#d9534f";
    } 
    else if (remaining <= budget * 0.2) {
        message.textContent = "Careful! You are close to your budget limit.";
        message.style.color = "#e67e22";
    } 
    else {
        message.textContent = "Great job! You are within your budget.";
        message.style.color = "#176b52";
    }
}


// Display expenses on the webpage
function displayExpenses() {
    // Clear the existing list
    expenseList.innerHTML = "";

    // Loop through every expense
    for (let i = 0; i < expenses.length; i++) {
        const expense = expenses[i];

        const listItem = document.createElement("li");

        listItem.innerHTML = `
            <span>
                <strong>${expense.name}</strong>
                - ${expense.category}
                - $${expense.amount.toFixed(2)}
            </span>
        `;

        // Create delete button
        const deleteButton = document.createElement("button");

        deleteButton.textContent = "Delete";
        deleteButton.classList.add("delete-btn");

        // Event listener for deleting an expense
        deleteButton.addEventListener("click", function() {
            expenses.splice(i, 1);

            displayExpenses();
            updateDashboard();
        });

        listItem.appendChild(deleteButton);
        expenseList.appendChild(listItem);
    }
}


// Initial dashboard update
updateDashboard();
