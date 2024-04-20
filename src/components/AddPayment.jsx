import { useState } from "react";

import Logo from "./Logo";
import Numpad from "./Numpad";
import BucketInput from "./BucketInput";

const AddPayment = () => {

    const [paymentAmount, setPaymentAmount] = useState("");
    const [error, setError] = useState(false);

    const inputStyle = "text-center font-mono";

    const handleInput = (value) => {
        if (value === "Del") {
            setPaymentAmount(paymentAmount.slice(0, -1));
        } else {
            setPaymentAmount(paymentAmount + value);
        }
    };

    return (
        <div className="w-full min-h-[100vh] flex flex-col items-center justify-start font-sans text-white py-8">
            <Logo />
            <div className="mb-12 text-xl text-light">
                Add Payment
            </div>
            <BucketInput
                value={paymentAmount}
                error={error}
                handleChange={setPaymentAmount}
                setError={setError}
                placeholder="75.00 $"
                style={inputStyle}
                errorMessage="Please enter numeric value"
                maxValue="9"
            />
            <div></div>
            <Numpad 
                goal={paymentAmount}
                setGoal={setPaymentAmount}
                setError={setError}
            />
        </div>
    );
};

export default AddPayment;
