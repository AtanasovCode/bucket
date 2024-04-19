import Logo from "../components/Logo";


const Bucket = ({
    buckets,
    selectedBucket,
}) => {

    // Find the selected bucket in the array
    const bucket = buckets.find((bucket) => bucket.id === selectedBucket);

    return (
        <div className="flex flex-col items-center justify-center text-white font-sans py-12">
            <Logo />
            <div className="w-full flex flex-col items-center justify-center">
                <div className="text-sm text-light mb-2">
                    Bucket Name
                </div>
                <div className="text-3xl font-bold">
                    {bucket.name}
                </div>
            </div>
        </div>
    );
}

export default Bucket;