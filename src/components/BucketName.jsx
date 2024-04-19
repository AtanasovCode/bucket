const BucketName = ({
    name,
    setName,
}) => {
    return (
        <div className="flex flex-col items-center justify-center text-white">
            <div className="text-lg font-bold mb-8 text-light">
                Bucket Name
            </div>
            <div className="w-full mx-6">
                <input 
                    type="text"
                    placeholder="Gaming Chair"
                    value={name}
                    onChange={(e) => setName(e.currentTarget.value)}
                    maxLength={20}
                    className="w-full px-6 py-4 bg-inactive rounded-xl outline-none"
                />
            </div>
        </div>
    );
}

export default BucketName;