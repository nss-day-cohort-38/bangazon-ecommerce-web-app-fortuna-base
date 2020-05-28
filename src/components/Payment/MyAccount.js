import React, { useEffect, useState } from "react";
import useSimpleAuth from "../../hooks/ui/useSimpleAuth";
import PaymentTypeManager from "../../modules/PaymentTypeManager";
import PaymentTypeCard from "./PaymentTypeCard";

const MyAccount = (props) => {
  const [paymentTypes, setPaymentTypes] = useState([]);
  const { isAuthenticated } = useSimpleAuth();

  const getPaymentTypes = () => {
    if (isAuthenticated()) {
      PaymentTypeManager.getPaymentTypes().then(setPaymentTypes);
    }
  };

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
          <PaymentTypeCard key={paymentType.id} paymentType={paymentType} />
        ))}
      </main>
    </>
  );
};
export default MyAccount;
