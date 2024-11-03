// Function to calculate total revenues and expenses, and net income/loss
function calculateNet() {
    const revenueElements = document.querySelectorAll('.rev-added');
    const expenseElements = document.querySelectorAll('.exp-added');

    let totalRevenues = 0;
    let totalExpenses = 0;

    // Calculate total revenues
    revenueElements.forEach(rev => {
        const revValueText = rev.querySelector('.rev-added-value').textContent;
        const revValue = parseFloat(revValueText.replace('$', '').trim());
        totalRevenues += revValue;
    });

    // Calculate total expenses
    expenseElements.forEach(exp => {
        const expValueText = exp.querySelector('.exp-added-value').textContent;
        const expValue = parseFloat(expValueText.replace('$', '').trim());
        totalExpenses += expValue;
    });

    // Update the total revenues and expenses in the HTML
    document.querySelector('.total-revenues-value').textContent = `${totalRevenues}$`;
    document.querySelector('.total-expenses-value').textContent = `${totalExpenses}$`;

    // Calculate net income/loss
    const netIncome = totalRevenues - totalExpenses;
    document.querySelector('.net-value').textContent = `${netIncome}$`;
}

// Call calculateNet function whenever revenues or expenses are added
// You would call this function in the appropriate places in your addRevenus.js and addExpenses.js files