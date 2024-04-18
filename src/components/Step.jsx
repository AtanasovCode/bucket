const Step = ({
    step,
    handleClick,
    currentStep,
}) => {
    return (
        <div
            className={`w-8 h-8 flex items-center justify-center rounded-full cursor-pointer
            ${step === 1 || step === currentStep ? 'bg-accent' : 'bg-inactive'}
            ${step !== currentStep && 'text-light'}
            transition-colors duration-1000
        `}
            onClick={() => handleClick()}
        >
            {step}
        </div>
    );
}

export default Step;