import React from 'react';

interface RenderTooltipContentProps {
    users?: {
        image?: string;
        name?: string;
    }[];
    avatarComponent?: React.ReactElement;
    nameComponent?: React.ReactElement;
}

const RenderTooltipContent = (props: RenderTooltipContentProps) => {
    const { avatarComponent, nameComponent, users = [] } = props;
    return (
        <div>
            {users.map((user, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
                    {avatarComponent && React.cloneElement(avatarComponent, {}, user.image)}
                    {nameComponent && React.cloneElement(nameComponent, {}, user.name)}
                </div>
            ))}
        </div>
    );
};

export default RenderTooltipContent;