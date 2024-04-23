import { useNavigate } from "react-router-dom";

import Progress from "./Progress";

const DashboardItem = ({
    id,
    name,
    goal,
    saved,
}) => {

    const navigate = useNavigate();

    const formatMoney = (money) => {
        return parseFloat(money).toLocaleString('en-US', { minimumFractionDigits: 2 });
    };

    const formatName = (name) => {
        return name.toLowerCase().replace(/\s+/g, '-');
    }



    return (
        <div
            className="
            w-full mb-6 flex flex-col cursor-pointer transition-all duration-500
            hover:bg-accent-hover p-6
        "
            onClick={() => {
                localStorage.setItem("id", id);
                console.log(localStorage.getItem("id"));
                navigate(`/buckets/${formatName(name)}`)
            }}
        >
            <div className="flex items-center justify-between">
                <div className="text-xl text-white font-sans text-left md:text-lg">
                    {name}
                </div>
                <div className="text-xl text-accent font-mono text-right md:text-lg">
                    {formatMoney(saved)} $
                </div>
            </div>
            <Progress 
                saved={saved}
                goal={goal}
            />
        </div>
    );
}

export default DashboardItem;
