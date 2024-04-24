import logo from '../assets/logo.svg';

const Logo = () => {
    return (
        <div>
            <img
                src={logo}
                alt="logo"
                className="w-10 mb-12 lg:w-12"
            />
        </div>
    );
}

export default Logo;