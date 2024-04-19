import { Link } from "react-router-dom";

const DashboardItem = ({
    name,
    goal,
    saved,
    payments,
}) => {

    const formatMoney = (money) => {
        return money.toLocaleString('en-US', { minimumFractionDigits: 2 });
    };

    const formatName = (name) => {
        return name.toLowerCase().replace(/\s+/g, '-');
    }


    const getProgress = (saved, goal) => {
        return (saved / goal) * 100;
    }

    const progressWidth = getProgress(saved, goal) + '%';

    return (
        <Link 
            to={`/bucket/${formatName(name)}`}
            className="
            w-full mb-6 flex flex-col cursor-pointer transition-all duration-500
            hover:bg-accent-hover p-6
        ">
            <div className="flex items-center justify-between">
                <div className="text-xl text-white font-sans text-left md:text-lg">
                    {name}
                </div>
                <div className="text-xl text-accent font-mono text-right md:text-lg">
                    {formatMoney(saved)} $
                </div>
            </div>
            <div className="w-full h-1 rounded-2xl bg-inactive relative mt-4 overflow-hidden">
                <div className="h-full rounded-2xl absolute top-0 left-0 bg-accent" style={{ width: progressWidth }}></div>
            </div>
        </Link>
    );
}

export default DashboardItem;