import { useState } from "react";

const Numpad = ({
    goal,
    setGoal,
    setError,
}) => {

    const [values, setValues] = useState(["7", "8", "9", "4", "5", "6", "1", "2", "3", ".", "0", "Del"]);


    const handleClick = (value) => {

        if(value !== "Del") {
            setGoal(goal + value)
        } else {
            setGoal(goal.slice(0, -1))
        }

        console.log(goal);
    }

    return (
        <div className="
            grid grid-cols-3 mb-6 gap-1
            w-[85%] sm:w-[60%] md:w-[55%] lg:w-[30%]
        ">
            {
                values.map((value) => {
                    return (
                        <div 
                            key={value}
                            className="
                                p-4 cursor-pointer bg-inactive text-white text-center font-bold text-2xl font-mono
                                hover:bg-accent hover:text-background transition-colors duration-500 rounded-xl
                            "
                            onClick={() => {
                                handleClick(value)
                                setError(false);
                            }}
                        >
                            {value}
                        </div>
                    )
                })
            }
        </div>
    );
}

export default Numpad;