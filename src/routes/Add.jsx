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
        setCurrentStep(step += 1) : setError(true);
    }

    return (
        <div className="w-full flex flex-col items-center justify-center py-12">
            <Logo />
            <div>
                {
                    currentStep === 1 ?
                        <BucketName 
                            name={name}
                            setName={setName}
                        />
                        :
                        <BucketGoal 
                            goal={goal}
                            setGoal={setGoal}
                        />
                }
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