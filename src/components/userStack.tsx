import React from 'react';
import RenderTooltipContent from './customTooltipContent';
import CustomToolTip from './customTooltip';
import UserAvatar from './userAvatar';
import { Avatar } from 'antd';

interface UserStackProps {
    users: {
        name: string;
        image: string;
    }[];
}

const UserStack = (props: UserStackProps) => {
    const { users } = props;

    const customAvatarComponent = (image: string) => <Avatar src={image} size={20} />;
    const customNameComponent = (name: string) => (
        <div className='text-[12px] text-[#686c71]'>{name}</div>
    );

    return (
        <CustomToolTip
            placement={'bottom'}
            title={
                <RenderTooltipContent
                    users={users}
                    avatarComponent={customAvatarComponent}
                    nameComponent={customNameComponent}
                />
            }
        >
            <div>
                <UserAvatar users={users} />
            </div>
        </CustomToolTip>
    );
};

export default UserStack;