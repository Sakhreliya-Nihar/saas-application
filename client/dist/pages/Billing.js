import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
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
    return (_jsxs("div", { children: [_jsx("h1", { children: "Billing" }), _jsxs("form", { onSubmit: handleAdd, className: "form", children: [_jsx("input", { type: "number", placeholder: "Amount", value: amount, onChange: (e) => setAmount(e.target.value), required: true }), _jsx("input", { type: "text", placeholder: "Description", value: description, onChange: (e) => setDescription(e.target.value), required: true }), _jsx("button", { type: "submit", children: "Add Record" })] }), _jsx("h2", { children: "Billing History" }), _jsx("ul", { children: records.map((record) => (_jsxs("li", { children: ["$", record.amount, " - ", record.description] }, record.id))) })] }));
};
export default Billing;
//# sourceMappingURL=Billing.js.map