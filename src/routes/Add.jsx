import { useState } from "react";
import Step from "../components/Step";

const Add = ({
    buckets,
}) => {

    const [currentStep, setCurrentStep] = useState(1);

    const styleWidth = currentStep === 2 ? "w-full" : "w-0";

    const changeStep = () => {
        currentStep === 1 ? setCurrentStep(2) : setCurrentStep(1);
    }

    return (
        <div className="">
            <div className="flex items-center justify-center transition-colors duration-500">
                <Step step={1} handleClick={changeStep} currentStep={currentStep} />
                <div className={`bg-inactive w-[30vw] h-1 relative`}>
                    <div className={`absolute ${styleWidth} h-full top-0 left-0 transition-all duration-500 bg-accent`}></div>
                </div>
                <Step step={2} handleClick={changeStep} currentStep={currentStep} />
            </div>
        </div>
    );
}

export default Add;