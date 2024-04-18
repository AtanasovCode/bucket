import logo from '../assets/logo.svg';
import Bucket from '../components/Bucket';

const Dashboard = ({
    buckets,
}) => {

    const bucketStyle = buckets.length < 1 ? "items-center justify-center" : "items-center justify-start";


    return (
        <div className="
            min-h-[100vh] bg-background w-full py-12 px-4
            flex flex-col items-center justify-start
        ">
            <div>
                <img 
                    src={logo}
                    alt="logo"
                    className="w-8 mb-16"
                />
            </div>
            <div className="w-full flex items-center justify-center text-light text-xl mb-16">
                Buckets
            </div>
            <div className={`
                flex flex-col ${bucketStyle} min-h-[50vh] w-[90%]
            `}>
                {
                    buckets.length ?
                    buckets.map((item) => {
                        return (
                            <Bucket 
                                key={item.name}
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
        </div>
    );
}

export default Dashboard;