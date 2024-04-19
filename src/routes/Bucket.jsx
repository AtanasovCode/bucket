import { useState } from "react";

import Tabs from "../components/Tabs";
import Logo from "../components/Logo";
import Progress from "../components/Progress";

import { PiggyBank } from "@phosphor-icons/react";


const Bucket = ({
    buckets,
    selectedBucket,
}) => {

    // Find the selected bucket in the array
    const bucket = buckets.find((bucket) => bucket.id === selectedBucket);

    const [selectedTab, setSelectedTab] = useState("Overview");

    const changeTab = (value) => {
        setSelectedTab(value);
    }

    const formatMoney = (money) => {
        return money.toLocaleString('en-US', { minimumFractionDigits: 2 });
    };

    const getRemaining = (goal, saved) => {
        let result = parseFloat(goal) - parseFloat(saved);
        return result;
    }

    const getProgress = (saved, goal) => {
        let progress = (saved / goal) * 100;
        return progress.toFixed(0);
    }

    return (
        <div className="flex flex-col items-center justify-center text-white font-sans py-8">
            <Logo />
            <div className="w-full flex flex-col items-center justify-center mb-10">
                <div className="text-sm text-light mb-2">
                    Bucket Name
                </div>
                <div className="text-3xl font-bold">
                    {bucket.name}
                </div>
            </div>
            <div className="flex items-center justify-center mb-10">
                <Tabs
                    name="Overview"
                    selectedTab={selectedTab}
                    changeTab={changeTab}
                />
                <Tabs
                    name="Payments"
                    selectedTab={selectedTab}
                    changeTab={changeTab}
                />
            </div>

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
                <Progress 
                    goal={bucket.goal}
                    saved={bucket.saved}
                />
            </div>
        </div>
    );
}

export default Bucket;