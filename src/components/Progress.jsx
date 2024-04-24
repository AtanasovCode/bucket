const Progress = ({
    saved,
    goal,
    formatMoney,
}) => {

    const getProgress = () => {
        return (saved / goal) * 100;

    }

    const progressWidth = getProgress(saved, goal) + '%';


    return (
        <div className="w-full h-1 rounded-2xl bg-inactive relative mt-4 overflow-hidden">
            <div className="
                h-full rounded-2xl absolute top-0 left-0 bg-accent"
                style={{ width: progressWidth }}></div>
        </div>
    );
}

export default Progress;