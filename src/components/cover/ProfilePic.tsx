import Image from 'next/image';
import { FC } from 'react';

interface ProfilePicProps {}

const ProfilePic: FC<ProfilePicProps> = ({}) => {
    return (
        <div className="">
            <Image
                alt="Neeraj Walia"
                src="/images/profilePic.jpeg"
                height={110}
                width={110}
                className="object-cover border-2 border-white rounded-full shadow-md"
            />
        </div>
    );
};

export default ProfilePic;
