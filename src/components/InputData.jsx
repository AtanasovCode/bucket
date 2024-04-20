

const InputDate = ({
    date,
    value,
    setValue,
}) => {
    return (
        <input
            type="text"
            placeholder={date}
            maxLength={2}
            value={value}
            onChange={(e) => setValue(e.currentTarget.value)}
            className="bg-inactive text-white rounded-xl text-center py-4 outline-none"
        />
    );
}

export default InputDate;