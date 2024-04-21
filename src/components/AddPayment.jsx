import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';


import Logo from "./Logo";
import Numpad from "./Numpad";
import BucketInput from "./BucketInput";
import InputDate from "./InputData";

const AddPayment = ({ handleAddPayment }) => {

    const navigate = useNavigate();

    const [dd, setDD] = useState("");
    const [mm, setMM] = useState("");
    const [yy, setYY] = useState("");
    const [paymentAmount, setPaymentAmount] = useState("");
    const [error, setError] = useState(false);

    const inputStyle = "text-center font-mono";

    const buttonStyle = paymentAmount && mm && dd && yy ? "bg-accent text-background cursor-pointer" : "bg-inactive text-light cursor-default"

    return (
        <div className="w-full min-h-[100vh] flex flex-col items-center justify-start font-sans text-white py-8">
            <Logo />
            <div className="mb-6 text-xl text-light">
                Add Payment
            </div>
            <div className="
                grid grid-cols-3 gap-4 mb-4
                w-[85%] sm:w-[60%] md:w-[55%] lg:w-[30%]
            ">
                <InputDate
                    date="DD"
                    value={dd}
                    setValue={setDD}
                />
                <InputDate
                    date="MM"
                    value={mm}
                    setValue={setMM}
                />
                <InputDate
                    date="YY"
                    value={yy}
                    setValue={setYY}
                />
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
            <div className="flex items-center justify-center
                 w-[85%] sm:w-[60%] md:w-[45%] lg:w-[30%]
            ">
                <input
                    type="button"
                    value="Save"
                    className={`
                        w-full px-4 py-4 rounded-xl
                        ${buttonStyle} transition-colors duration-500
                    `}
                    onClick={() => {
                        handleAddPayment(dd, mm, yy, paymentAmount);
                        navigate("/");
                    }}
                />
            </div>
        </div>
    );
};

export default AddPayment;
