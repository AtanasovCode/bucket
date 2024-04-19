import logo from '../assets/logo.svg';

const Logo = () => {
    return (
        <div>
            <img
                src={logo}
                alt="logo"
                className="w-8 mb-16 md:w-10 lg:w-12"
            />
        </div>
    );
}

export default Logo;