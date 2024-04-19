import React from "react";
import Step from "./Step";

const Multistep = ({
    currentStep,
    changeStep,
    nextStep,
    name,
    goal,
}) => {

    const styleWidth = currentStep === 2 ? "w-full" : "w-0";
    const nextStyle = name ? "bg-accent text-background cursor-pointer" : "bg-inactive text-light cursor-default";
    const saveStyle = goal ? "bg-accent text-background cursor-pointer" : "bg-inactive text-light cursor-default";

    return (
        <div className="
        flex flex-col items-center justify-center transition-colors duration-500
        w-[85%] sm:w-[60%] md:w-[45%] lg:w-[30%]
    ">
            <div className="w-full flex items-center justify-center mb-6">
                <input
                    type="button"
                    value={currentStep == 1 ? "Next" : "Save"}
                    className={`
                        px-6 py-4 text-center rounded-xl
                        w-full
                        transition-colors duration-700
                        ${currentStep === 1 ? nextStyle : saveStyle}
                    `}
                    onClick={() => nextStep()}
                />
            </div>
            <div className="w-full flex items-center justify-center">
                <Step 
                    step={1} 
                    handleClick={changeStep} 
                    currentStep={currentStep} 
                    name={name}
                />
                <div className={`bg-inactive w-full h-1 relative`}>
                    <div className={`absolute ${styleWidth} h-full top-0 left-0 transition-all duration-500 bg-accent`}></div>
                </div>
                <Step 
                    step={2} 
                    handleClick={changeStep} 
                    currentStep={currentStep} 
                    name={name}
                />
            </div>
        </div >
    );
}

export default Multistep;
