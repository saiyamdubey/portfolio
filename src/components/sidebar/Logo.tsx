import { FC } from 'react';

interface LogoProps {}

const Logo: FC<LogoProps> = ({}) => {
    return (
        <div className="hidden lg:flex gap-2 p-5 pt-0">
            <div className="h-4 w-4 bg-red-500 rounded-full"></div>
            <div className="h-4 w-4 bg-purple-600 rounded-full"></div>
            <div className="h-4 w-4 bg-green-400 rounded-full"></div>
        </div>
    );
};

export default Logo;
