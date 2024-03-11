import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/payment.css'; // Import CSS file for styling

function PaymentPage() {
  const [payments, setPayments] = useState([]);
  const [paymentAmount, setPaymentAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  const requestPayment = () => {
    if (paymentAmount.trim() !== '' && paymentMethod.trim() !== '') {
      const newPayment = {
        amount: paymentAmount,
        method: paymentMethod
      };
      if (editIndex !== null) {
        const updatedPayments = [...payments];
        updatedPayments[editIndex] = newPayment;
        setPayments(updatedPayments);
        setEditIndex(null);
      } else {
        setPayments([...payments, newPayment]);
      }
      setPaymentAmount('');
      setPaymentMethod('');
    }
  };

  const deletePayment = (index) => {
    const updatedPayments = [...payments];
    updatedPayments.splice(index, 1);
    setPayments(updatedPayments);
  };

  const editPayment = (index) => {
    const paymentToEdit = payments[index];
    setPaymentAmount(paymentToEdit.amount);
    setPaymentMethod(paymentToEdit.method);
    setEditIndex(index);
  };

  return (
    <div>
      {/* Sidebar */}
      <div className="sidebar" style={{ backgroundColor: '#333', color: '#fff', padding: '20px', width: '200px', height: '100vh' }}>
        <ul>
          <ol><Link to="/" style={{ color: '#fff', textDecoration: 'none', fontSize: '20px' }}>Students</Link></ol>
          &nbsp;
          <ol><Link to="/payment" style={{ color: '#fff', textDecoration: 'none', fontSize: '20px' }}>Payment</Link></ol>
          &nbsp;
          &nbsp;
          &nbsp;
          <ol><Link to="/" style={{ color: '#fff', textDecoration: 'none', fontSize: '20px' }}>Logout</Link></ol>
        </ul>
      </div>

      {/* Main content */}
      <div
        className="payment-page"
        style={{
          fontFamily: 'Arial, sans-serif',
          maxWidth: '9000px',
          width: '800px',
          margin: '0 auto',
          height: '600px',
          padding: '20px',
          border: '1px solid #ccc',
          borderRadius: '5px',
          background: `url('https://cdn-icons-png.flaticon.com/256/2689/2689064.png')`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: '200px',
          backgroundOrigin: 'border-box',
          backgroundPosition: 'right',
          marginLeft: '220px', // Adjusted to accommodate sidebar width
        }}
      >
        <h2 style={{ marginBottom: '20px', textAlign: 'center' }}>Payment Page</h2>
        <div className="payment-info" style={{ marginBottom: '20px' }}>
          <h3 style={{ marginBottom: '10px' }}>Payment Information</h3>
          &nbsp; &nbsp; &nbsp;<p>
          &nbsp; &nbsp;Amount to pay:
            <input
              type="text"
              value={paymentAmount}
              onChange={(e) => setPaymentAmount(e.target.value)}
              placeholder="Enter payment amount"
              style={{ width: '300px', padding: '8px' }} // Increase input box size
            />
          </p>
          &nbsp;
          <p>
            Payment method:
            <select
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              style={{ width: '300px', padding: '8px' }} // Increase select box size
            >
              <option value="">Select payment method</option>
              <option value="online">Online Payment</option>
              <option value="credit card">Credit Card</option>
              <option value="debit card">Debit Card</option>
            </select>
          </p>
        </div>
        <div className="payment-actions" style={{ display: 'flex', marginBottom: '20px' }}>
          <button onClick={requestPayment} style={{ padding: '8px 15px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '3px', cursor: 'pointer' }}>{editIndex !== null ? 'Update Payment' : 'Request Payment'}</button>
        </div>
        <div className="payment-list" style={{ marginBottom: '20px' }}>
          <h3 style={{ marginBottom: '10px' }}>Payments:</h3>
          <ul>
            {payments.map((payment, index) => (
              <li key={index}>
                <strong>Amount:</strong> {payment.amount}, <strong>Method:</strong> {payment.method}
                <button style={{ marginLeft: '10px', backgroundColor: 'red', color: '#fff', border: 'none', borderRadius: '3px', cursor: 'pointer' }} onClick={() => deletePayment(index)}>Delete</button>
                <button style={{ marginLeft: '10px', backgroundColor: 'green', color: '#fff', border: 'none', borderRadius: '3px', cursor: 'pointer' }} onClick={() => editPayment(index)}>Edit</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PaymentPage;
