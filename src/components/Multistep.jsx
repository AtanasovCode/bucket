import React from "react";
import Step from "./Step";

const Multistep = ({
    currentStep,
    changeStep,
    nextStep,
    name,
}) => {

    const styleWidth = currentStep === 2 ? "w-full" : "w-0";
    const buttonStyle = name ? "bg-accent text-background cursor-pointer" : "bg-inactive text-light cursor-default"

    return (
        <div className="
        flex flex-col items-center justify-center transition-colors duration-500
        absolute bottom-[8%] left-[50%] translate-x-[-50%]
        w-[60%] sm:w-[30%] lg:w-[12%]
    ">
            <div className="">
                <input
                    type="button"
                    value="Next"
                    className={`
                        px-16 py-2 text-center mb-8 rounded-xl
                        transition-colors duration-700
                        ${buttonStyle}
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
