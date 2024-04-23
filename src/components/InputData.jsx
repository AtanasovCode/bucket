

const InputDate = ({
    date,
    value,
    setValue,
    err, errMsg,
    setErr,
}) => {

    const errorStyle = err ? "border border-solid border-red-500 bg-red-950" : "border-none bg-inactive"

    return (
        <div className="flex flex-col">
            <input
                type="text"
                placeholder={date}
                maxLength={2}
                value={value}
                onChange={(e) => {
                    setErr(false);
                    setValue(e.currentTarget.value)
                }}
                className={`text-white rounded-xl text-center py-4 outline-none ${errorStyle}`}
            />
            {
                err &&
                <div className="text-xs text-red-500 mt-2 text-left">
                    {errMsg}
                </div>
            }
        </div>
    );
}

export default InputDate;