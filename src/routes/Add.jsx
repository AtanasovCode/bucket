import { useState } from "react";

import Logo from "../components/Logo";
import Multistep from "../components/Multistep";
import BucketName from "../components/BucketName";
import BucketGoal from "../components/BucketGoal";

import logo from '../assets/logo.svg';

const Add = ({
    buckets,
}) => {

    const [currentStep, setCurrentStep] = useState(1);
    const [error, setError] = useState(false);
    const [name, setName] = useState("");
    const [goal, setGoal] = useState("");

    //used for the steps progress
    const changeStep = (step) => {
        name ?
            setCurrentStep(step) : setError(true);

    }

    //used for the 'Next" button
    const nextStep = () => {
        name ?
            setCurrentStep(currentStep + 1) : setError(true);
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
                                error={error}
                                setError={setError}
                            />
                    }
                </div>
            </div>
            <Multistep
                currentStep={currentStep}
                changeStep={changeStep}
                nextStep={nextStep}
                name={name}
            />
        </div>
    );
}

export default Add;