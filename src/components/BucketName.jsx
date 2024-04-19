import BucketInput from "./BucketInput";

const BucketName = ({
    name,
    setName,
    error,
    setError,
}) => {

    const buttonStyle = "text-left text-white"

    return (
        <div className="w-full flex flex-col items-center justify-center text-white">
            <div className="text-lg font-bold mb-8 text-light">
                Bucket Name
            </div>
            <BucketInput
                error={error}
                type="text"
                setError={setError}
                handleChange={setName}
                value={name}
                style={buttonStyle}
                placeholder="Gaming chair"
                errorMessage="Enter bucket name"
                maxValue="20"
            />
        </div >
    );
}

export default BucketName;