import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import Overview from "../components/Overview";
import Payments from "../components/Payments";
import Tabs from "../components/Tabs";
import Logo from "../components/Logo";

import { ArrowCircleDownLeft, CaretCircleLeft, CaretLeft } from "@phosphor-icons/react";

const Bucket = ({ buckets }) => {

    // Find the selected bucket in the array
    let bucket = buckets.find((bucket) => bucket.id === localStorage.getItem("id"));

    useEffect(() => {
        console.log("Finding id");
        bucket = buckets.find((bucket) => bucket.id === localStorage.getItem("id"));
    }, [])

    useEffect(() => {
        console.log(bucket);
    }, [])

    const [selectedTab, setSelectedTab] = useState("Overview");

    const changeTab = (value) => {
        setSelectedTab(value);
    }

    const formatMoney = (money) => {
        let parsedMoney = parseFloat(money);
        return parsedMoney.toLocaleString('en-US', { minimumFractionDigits: 2 });
    };

    const getRemaining = (goal, saved) => {
        let result = parseFloat(goal) - parseFloat(saved);
        return result >= 0 ? result : 0;
    }

    const getProgress = (saved, goal) => {
        let progress = (saved / goal) * 100;
        return progress.toFixed(0);
    }

    return (
        <div className="flex flex-col items-center justify-center text-white font-sans py-8">
            <Logo />
            <Link 
                to="/"
                className="flex items-center justify-center absolute top-8 left-8 cursor-pointer
                    sm:left-12 lg:left-16
                "
            >
                <CaretLeft 
                    weight="thin"
                    size="100%"
                    className="text-white w-8 h-8 lg:w-10 lg:h-10"
                />
            </Link>
            <div className="w-full flex flex-col items-center justify-center mb-10">
                <div className="text-sm text-light mb-2">
                    Bucket Name
                </div>
                <div className="text-3xl font-bold">
                    {bucket.name}
                </div>
            </div>
            <div className="flex items-center justify-center">
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