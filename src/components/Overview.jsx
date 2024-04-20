import Progress from "./Progress";

import { PiggyBank } from "@phosphor-icons/react";

const Overview = ({
    bucket,
    formatMoney,
    getRemaining,
    getProgress,
}) => {
    return (
        <div className="w-full flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center mb-6">
                <div className="flex items-center justify-center">
                    <PiggyBank
                        size="100%"
                        weight="fill"
                        className="w-12 h-12 text-light"
                    />
                    <div className="text-light ml-4">Balance</div>
                </div>
            </div>

            <div className="flex flex-col items-end justify-center mb-6">
                <div className="text-accent font-mono text-4xl mb-1">
                    {formatMoney(bucket.saved)} $
                </div>
                <div className="text-right text-light font-mono">
                    / {formatMoney(bucket.goal)} $
                </div>
            </div>

            <div className="flex items-center justiy-center mb-10">
                <div className="text-light mr-2">Remaining:</div>
                <div className="font-mono text-accent">
                    {formatMoney(getRemaining(bucket.goal, bucket.saved))} $
                </div>
            </div>

            <div className="flex flex-col items-center justify-center w-[80%]">
                <div className="text-light text-lg">
                    Progress: <span className="text-accent font-mono ml-2">{getProgress(bucket.saved, bucket.goal)}%</span>
                </div>
                <div className="w-full sm:w-[85%] md:w-[65%] lg:w-[35%]">
                    <Progress
                        goal={bucket.goal}
                        saved={bucket.saved}
                    />
                </div>
            </div>
        </div>
    );
}

export default Overview;