const Bucket = ({
    name,
    goal,
    saved,
    payments,
}) => {

    const formatMoney = (money) => {
        return money.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2 });
    }

    const getProgress = (saved, goal) => {
        return (saved / goal) * 100;
    }

    const progressWidth = getProgress(saved, goal) + '%';

    return (
        <div className="
            w-full mb-12 flex flex-col
        ">
            <div className="flex items-center justify-between">
                <div className="text-xl text-white font-sans text-left">
                    {name}
                </div>
                <div className="text-xl text-accent font-mono text-right">
                    {formatMoney(saved)} $
                </div>
            </div>
            <div className="w-full h-2 rounded-2xl bg-inactive relative mt-4 overflow-hidden">
                <div className="h-full rounded-2xl absolute top-0 left-0 bg-accent" style={{ width: progressWidth }}></div>
            </div>
        </div>
    );
}

export default Bucket;
