import React, { useEffect, useState } from "react";
import useSimpleAuth from "../../hooks/ui/useSimpleAuth";
import PaymentTypeManager from "../../modules/PaymentTypeManager";
import PaymentTypeCard from "./PaymentTypeCard";

const PaymentTypeList = (props) => {
  const [paymentTypes, setPaymentTypes] = useState([]);
  const { isAuthenticated } = useSimpleAuth();

  const getPaymentTypes = () => {
    if (isAuthenticated()) {
      PaymentTypeManager.getPaymentTypes().then(setPaymentTypes);
    }
  };

  const deletePaymentType = (payment) => {
      if (window.confirm("This will permanently delete your payment info.")) {
          PaymentTypeManager.deletePayment(payment)
            .then(getPaymentTypes)
      }
  }

  useEffect(getPaymentTypes, []);

  return (
    <>
      <h1>Payment Information</h1>
      <button
              type="button" 
              onClick={() => {
                props.history.push("/payment_types/new");
              }}
            >
              Add Payment Type
            </button>
        <hr/>
      <main>
        {paymentTypes.map((paymentType) => (
          <PaymentTypeCard key={paymentType.id} paymentType={paymentType} deletePaymentType={deletePaymentType} {...props} />
        ))}
      </main>
    </>
  );
};
export default PaymentTypeList;