import React, { useState } from 'react';

const AddExpenseForm = ({ addTransaction }) => {
  const [type, setType] = useState('expense');
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const amountValue = amount === '' ? '0' : amount;
    addTransaction({ type, description, amount: parseFloat(amountValue) });
    setDescription('');
    setAmount('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500"
      >
        <option value="expense">Expense</option>
        <option value="income">Income</option>
      </select>
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full mt-2 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500"
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        min="0"
        className="w-full mt-2 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500"
      />
      <button type="submit" className="w-full mt-4 bg-blue-500 text-white rounded-md py-2 focus:outline-none hover:bg-blue-600">
        Add Transaction
      </button>
    </form>
  );
};

export default AddExpenseForm;
