import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Multistep from "../components/Multistep";
import BucketName from "../components/BucketName";
import BucketGoal from "../components/BucketGoal";

import logo from '../assets/logo.svg';

const Add = ({
    buckets,
    addBucket,
}) => {

    const [currentStep, setCurrentStep] = useState(1);
    const [error, setError] = useState(false);
    const [errorGoal, setErrorGoal] = useState(false);
    const [name, setName] = useState("");
    const [goal, setGoal] = useState("");

    //used for the steps progress
    const changeStep = (step) => {
        name ?
            setCurrentStep(step) : setError(true);

    }

    //used for the 'Next" button
    const nextStep = () => {
        if (currentStep === 1) {
            name ? setCurrentStep(currentStep + 1) : setError(true);
        } else {
            goal ? "" : setErrorGoal(true);
        }
    }

    return (
        <div className="w-full min-h-[100vh] relative flex flex-col items-center justify-between py-12">
            <div className="w-full flex flex-col items-center justify-center">
                <img
                    src={logo}
                    alt="logo"
                    className="w-8 mb-6 md:w-10 lg:w-12"
                />
                <div className="w-full">
                    {
                        currentStep === 1 ?
                            <BucketName
                                name={name}
                                setName={setName}
                                error={error}
                                setError={setError}
                            />
                            :
                            <BucketGoal
                                goal={goal}
                                setGoal={setGoal}
                                error={errorGoal}
                                setError={setErrorGoal}
                            />
                    }
                </div>
            </div>
            <Multistep
                currentStep={currentStep}
                changeStep={changeStep}
                addBucket={addBucket}
                nextStep={nextStep}
                name={name}
                goal={goal}
                buckets={buckets}
                setError={setError}
                setErrorGoal={setErrorGoal}
            />
        </div>
    );
}

export default Add;