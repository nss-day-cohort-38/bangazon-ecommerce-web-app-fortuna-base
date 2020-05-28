import React from 'react';

const MyAccount = (props) => {
    return (
        <main>
            <h1>Account Settings</h1>
            <button onClick={() => { props.history.push("/payment_types") }}>Payment Options</button>
        </main>
    );
}

export default MyAccount;
