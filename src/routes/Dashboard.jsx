import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import DashboardItem from '../components/DashboardItem';
import Logo from '../components/Logo';

//importing assets
import add from '../assets/add-icon.svg';

const Dashboard = ({buckets}) => {

    const bucketStyle = buckets.length < 1 ? "items-center justify-center" : "items-center justify-start";


    return (
        <div className="
            min-h-[100vh] bg-background w-full py-12 relative
            flex flex-col items-center justify-start
        ">
            <Logo />
            <div className="w-full flex items-center justify-center text-light text-md mb-22 md:text-lg lg:text-lg">
                Buckets
            </div>
            <div className={`
                flex flex-col ${bucketStyle} min-h-[50vh] w-full md:w-[80%] lg:w-[50%] pb-8
            `}>
                {
                    buckets.length ?
                        buckets.map((item) => {
                            return (
                                <DashboardItem
                                    key={item.id}
                                    id={item.id}
                                    name={item.name}
                                    goal={item.goal}
                                    saved={item.saved}
                                    payments={item.payments}
                                />
                            );
                        })
                        :
                        <div className="text-center text-light text-sm">
                            No buckets found, create one
                        </div>
                }
            </div>
            <div className="
                w-full bg-background flex items-center justify-center pt-2 pb-12 fixed bottom-0 left-0
            ">
                <Link
                    to="/add-new-bucket"
                    className="cursor-pointer"
                >
                    <img
                        src={add}
                        alt="add icon used to add a new project"
                        className="w-12 lg:w-14"
                    />
                </Link>
            </div>
        </div>
    );
}

export default Dashboard;