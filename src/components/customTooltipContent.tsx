import React from 'react';

interface RenderTooltipContentProps {
    users: {
        image: string;
        name: string;
    }[];
    avatarComponent: (image: string) => React.ReactElement;
    nameComponent: (name: string) => React.ReactElement;
}

const RenderTooltipContent = (props: RenderTooltipContentProps) => {
    const { avatarComponent, nameComponent, users } = props;
    return (
        <div>
            {users.map((user, index) => (
                <div
                    key={index}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '5px'
                    }}>
                    {avatarComponent(user.image)}
                    {nameComponent(user.name)}
                </div>
            ))}
        </div>
    );
};

export default RenderTooltipContent;