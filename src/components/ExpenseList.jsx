import React from 'react';

const ExpenseList = ({ transactions }) => {
  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold mb-4">Transaction List</h2>
      <div className="rounded-lg overflow-hidden border border-gray-300">
        <ul>
          {transactions.map((transaction, index) => (
            <li key={index} className="py-4 px-6 border-b border-gray-300 flex items-center justify-between">
              <div className={`flex items-center ${transaction.type === 'income' ? 'text-green-500' : 'text-red-500'}`}>
                <span>{transaction.description}</span>
              </div>
              <span className="text-blue-500">Rs.{transaction.amount.toFixed(2)}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExpenseList;
