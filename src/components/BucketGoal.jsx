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
                type="number"
                handleChange={setGoal}
                error={error}
                setError={setError}
                style={buttonStyle}
                placeholder="299.99"
                errorMessage="Enter numeric value"
                maxValue="9"
            />
            <Numpad 
                goal={goal}
                setGoal={setGoal}
                setError={setError}
            />
        </div>
    );
}

export default BucketGoal;