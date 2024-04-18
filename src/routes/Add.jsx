import { useState } from "react";
import Step from "../components/Step";

const Add = ({
    buckets,
}) => {

    const [currentStep, setCurrentStep] = useState(1);

    const styleWidth = currentStep === 2 ? "w-full" : "w-0";

    const changeStep = (step) => {
        setCurrentStep(step);
    }

    return (
        <div className="">
            <div className="
                flex items-center justify-center transition-colors duration-500
                absolute bottom-[8%] left-[50%] translate-x-[-50%]
                w-[60%] sm:w-[30%] lg:w-[12%]
            ">
                <Step step={1} handleClick={changeStep} currentStep={currentStep} />
                <div className={`bg-inactive w-full h-1 relative`}>
                    <div className={`absolute ${styleWidth} h-full top-0 left-0 transition-all duration-500 bg-accent`}></div>
                </div>
                <Step step={2} handleClick={changeStep} currentStep={currentStep} />
            </div>
        </div>
    );
}

export default Add;