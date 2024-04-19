import BucketInput from "./BucketInput";
import Numpad from "./Numpad";

const BucketGoal = ({
    goal,
    setGoal,
    error,
    setError,
}) => {

    const buttonStyle = "text-center font-mono text-accent"

    return (
        <div className="
            w-full flex flex-col items-center justify-center
        ">
            <div className="text-lg font-bold mb-8 text-light">
                Savings Goal
            </div>
            <BucketInput
                value={goal}
                handleChange={setGoal}
                error={error}
                setError={setError}
                style={buttonStyle}
                placeholder="259.99"
            />
            <Numpad />
        </div>
    );
}

export default BucketGoal;