const BucketInput = ({
    value,
    handleChange,
    error,
    setError,
    style,
    type,
    placeholder,
    errorMessage,
    maxValue,
}) => {

    return (
        <div className="flex flex-col items-center justify-center mb-4
        w-[85%] sm:w-[60%] md:w-[45%] lg:w-[30%]
    ">
            <input
                type="text"
                placeholder={placeholder}
                value={value}
                onChange={(e) => {
                    handleChange(e.currentTarget.value);
                    setError(false);
                }}
                maxLength={maxValue}
                className={`w-full px-6 py-4 bg-inactive rounded-xl outline-none ${style}`}
            />
            {
                error &&
                <div className="w-full flex items-center justify-start text-red-400 text-sm mt-2 pl-4">
                    {errorMessage}
                </div>
            }
        </div>
    );
}

export default BucketInput;