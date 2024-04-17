import logo from '../assets/logo.svg';

const Dashboard = () => {
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
            <div className="w-full flex items-center justify-center text-text-light text-xl mb-12">
                Buckets
            </div>

            <div className="
                min-h-[50vh]
            ">

            </div>
        </div>
    );
}

export default Dashboard;