import React, { useState } from 'react';
import AddExpenseForm from './components/AddExpenseForm';
import ExpenseList from './components/ExpenseList';

const App = () => {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  let totalIncome = 0;
  let totalExpense = 0;

  transactions.forEach((transaction) => {
    if (transaction.type === 'income') {
      totalIncome += transaction.amount;
    } else {
      totalExpense += transaction.amount;
    }
  });

  const totalBalance = totalIncome - totalExpense;

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold text-center mb-8 bg-slate-900 text-white py-2">Expense Tracker</h1>
        <div className="flex justify-between items-center bg-white p-6 rounded-lg shadow-md mb-8">
          <div className="flex flex-col items-center">
            <h2 className="text-lg font-semibold text-green-600">Income</h2>
            <p className="text-3xl font-bold">Rs.{totalIncome.toLocaleString()}</p>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="text-lg font-semibold text-red-600">Expense</h2>
            <p className="text-3xl font-bold">Rs.{totalExpense.toLocaleString()}</p>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="text-lg font-semibold">Total Balance</h2>
            <p className={`text-3xl font-bold ${totalBalance >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              Rs.{totalBalance.toLocaleString()}
            </p>
          </div>
        </div>
        <AddExpenseForm addTransaction={addTransaction} />
        <ExpenseList transactions={transactions} />
      </div>
    </div>
  );
};

export default App;
