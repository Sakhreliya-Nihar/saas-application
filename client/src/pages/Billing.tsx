import React, { useState } from 'react';

const Billing = () => {
  const [records, setRecords] = useState([
    { id: '1', amount: 29.99, description: 'Pro subscription' },
    { id: '2', amount: 9.99, description: 'Free trial' },
  ]);
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');

  const handleAdd = () => {
    const newRecord = { id: String(Date.now()), amount: Number(amount), description };
    setRecords([...records, newRecord]);
    setAmount('');
    setDescription('');
  };

  return (
    <div>
      <h1>Billing</h1>
      <form onSubmit={handleAdd} className="form">
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <button type="submit">Add Record</button>
      </form>
      <h2>Billing History</h2>
      <ul>
        {records.map((record) => (
          <li key={record.id}>
            ${record.amount} - {record.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Billing;