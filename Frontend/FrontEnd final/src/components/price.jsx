import React from 'react';
import '../assets/price.css';

function    Price() {

  const handleSubmit = (e) => {
    e.preventDefault()
    const amountx= 2500
    var options = {
      key: "rzp_test_gs53Ffayhc0t6X",
      key_secret: "QqLcxJhbf5IjkKpnAfQIrjvd",
      amount: amountx*100,
      currency: "INR",
      name: "Payment-Portal",
      description: "for testing purpose",
      handler: function (response) {
        alert(response.razorpay_payment_id)
      },
      prefill: {
        name: "DEEPAK",
        email: "deepakprabu1234@gmail.com",
        contact: "8754988838"
      },
      notes: {
        address: "Sri krishna college of Engineering and Technology"
      },
      theme: {
        color: "#3399cc"
      }
    }

    var pay = new window.Razorpay(options)
    pay.open()
  }



  return (
    <div className="background">
  <div className="container">
    <div className="panel pricing-table">
      <div className="pricing-plan">
        <img
          src="https://s22.postimg.cc/8mv5gn7w1/paper-plane.png"
          alt=""
          className="pricing-img"
        />
        <h2 className="pricing-header">Kids</h2>
        <ul className="pricing-features">
          <li className="pricing-features-item">Under the age of 10</li>
          <li className="pricing-features-item">
            class duration: 1 hour
          </li>
        </ul>
        <span className="pricing-price">₹2500</span>
        <a onClick={handleSubmit}  className="pricing-button">
          Pay
        </a>
      </div>
      <div className="pricing-plan">
        <img
          src="https://s28.postimg.cc/ju5bnc3x9/plane.png"
          alt=""
          className="pricing-img"
        />
        <h2 className="pricing-header">Adults</h2>
        <ul className="pricing-features">
          <li className="pricing-features-item">Under the age of 50</li>
          <li className="pricing-features-item">
          class duration: 2 hour
          </li>
        </ul>
        <span className="pricing-price">₹5000</span>
        <a onClick={handleSubmit} className="pricing-button is-featured">
          Pay
        </a>
      </div>
      <div className="pricing-plan">
        <img
          src="https://s21.postimg.cc/tpm0cge4n/space-ship.png"
          alt=""
          className="pricing-img"
        />
        <h2 className="pricing-header">oldster</h2>
        <ul className="pricing-features">
          <li className="pricing-features-item">Under the age of 70</li>
          <li className="pricing-features-item">
          class duration: 1 hour 30 mins

          </li>
        </ul>
        <span className="pricing-price">₹6000</span>
        <a onClick={handleSubmit}  className="pricing-button">
          Pay
        </a>
      </div>
    </div>
  </div>
</div>

  
  );
}

export default Price;
