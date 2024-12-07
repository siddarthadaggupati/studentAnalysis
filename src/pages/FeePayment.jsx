import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe("pk_test_51QTSAYHHKVhK4acfHjlCXtDtWtSeKmL1wO7JX0VE6DhzOTxKXGZOQ4hMBNr80Vs4obzbEXzeNJ2PprY9Qb6x3i7o00XaqjD4ET");

const PaymentForm = () => {
  const [email, setEmail] = useState("");
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      console.error("Stripe has not loaded yet.");
      return;
    }

    const cardElement = elements.getElement(CardElement);

    try {
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card: cardElement,
      });

      if (error) {
        console.error("Error creating payment method:", error.message);
        return;
      }

      const response = await fetch("http://localhost:8080/api/charge", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          paymentMethodId: paymentMethod.id,
        }),
      });

      if (!response.ok) {
        console.error("Failed to process payment:", response.statusText);
        return;
      }

      const paymentResponse = await response.json();
      console.log("Payment successful:", paymentResponse);
    } catch (err) {
      console.error("Unexpected error:", err.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <CardElement />
        <button type="submit" disabled={!stripe}>
          Pay
        </button>
      </form>
    </div>
  );
};

const FeePayment = () => (
  <Elements stripe={stripePromise}>
    <PaymentForm />
  </Elements>
);

export default FeePayment;
