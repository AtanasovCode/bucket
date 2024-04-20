import { useState } from "react";

import Overview from "../components/Overview";
import Payments from "../components/Payments";
import Tabs from "../components/Tabs";
import Logo from "../components/Logo";


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
            {
                selectedTab === "Overview" ?
                    <Overview
                        bucket={bucket}
                        formatMoney={formatMoney}
                        getRemaining={getRemaining}
                        getProgress={getProgress}
                    />
                    :
                    <Payments 
                        bucket={bucket}
                    />
            }
        </div>
    );
}

export default Bucket;