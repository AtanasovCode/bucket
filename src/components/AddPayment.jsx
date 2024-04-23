import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


import Logo from "./Logo";
import Numpad from "./Numpad";
import BucketInput from "./BucketInput";
import InputDate from "./InputData";

const AddPayment = ({
    handleAddPayment,
    buckets,
    ddErr, mmErr, yyErr,
    setDDErr, setMMErr, setYYErr,
    moneyErr, setMoneyErr,
}) => {

    const navigate = useNavigate();

    const [dd, setDD] = useState("");
    const [mm, setMM] = useState("");
    const [yy, setYY] = useState("");
    const [paymentAmount, setPaymentAmount] = useState("");

    const [errorsFound, setErrorsFound] = useState(true);

    const inputStyle = "text-center font-mono";

    const buttonStyle = paymentAmount && mm && dd && yy ? "bg-accent text-background cursor-pointer" : "bg-inactive text-light cursor-default"

    const formatName = (name) => {
        return name.toLowerCase().replace(/\s+/g, '-');
    }

    const [bucketName, setBucketName] = useState("");

    useEffect(() => {
        buckets.map((bucket) => {
            if (bucket.id === localStorage.getItem("id")) {
                setBucketName(bucket.name);
            }
        })
    }, [])

    useEffect(() => {
        dd && !isNaN(dd) && mm && !isNaN(mm) && yy && !isNaN(yy) && paymentAmount && !isNaN(paymentAmount) &&
        setErrorsFound(false);
    }, [dd, mm, yy, paymentAmount])

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
                    err={ddErr}
                    errMsg="Enter valid day"
                    setErr={setDDErr}
                />
                <InputDate
                    date="MM"
                    value={mm}
                    setValue={setMM}
                    err={mmErr}
                    errMsg="Enter valid month"
                    setErr={setMMErr}
                />
                <InputDate
                    date="YY"
                    value={yy}
                    setValue={setYY}
                    err={yyErr}
                    errMsg="Enter valid year"
                    setErr={setYYErr}
                />
            </div>
            <BucketInput
                value={paymentAmount}
                error={moneyErr}
                handleChange={setPaymentAmount}
                setError={setMoneyErr}
                placeholder="75.00 $"
                style={inputStyle}
                errorMessage="Please enter numeric value"
                maxValue="9"
            />
            <div></div>
            <Numpad
                goal={paymentAmount}
                setGoal={setPaymentAmount}
                setError={setMoneyErr}
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
                        !errorsFound && navigate(`/buckets/${formatName(bucketName)}`);
                    }}
                />
            </div>
        </div>
    );
};

export default AddPayment;
