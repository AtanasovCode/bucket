const BucketName = ({
    name,
    setName,
    error,
    setError,
}) => {
    return (
        <div className="w-full flex flex-col items-center justify-center text-white">
            <div className="text-lg font-bold mb-8 text-light">
                Bucket Name
            </div>
            <div className="flex flex-col items-center justify-center
                w-[85%] sm:w-[60%] md:w-[45%] lg:w-[30%]
            ">
                <input
                    type="text"
                    placeholder="Gaming Chair"
                    value={name}
                    onChange={(e) => {
                        setName(e.currentTarget.value);
                        setError(false);
                    }}
                    maxLength={20}
                    className="w-full px-6 py-4 bg-inactive rounded-xl outline-none
                    
                    "
                />
                {
                    error &&
                    <div className="w-full flex items-center justify-start text-red-400 text-sm mt-2 pl-4">
                        Input bucket name
                    </div>
                }
            </div>
        </div>
    );
}

export default BucketName;