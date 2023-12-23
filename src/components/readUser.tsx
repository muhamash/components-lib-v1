import React from 'react';
import { Avatar, Badge } from 'antd';
import styled from 'styled-components';
import CustomTooltip from './Tooltip/CustomTooltip';
import UserAvatar from './UserStack/UserAvatar';

interface User {
    image: string;
    name?: string;
}

interface ReadUserProps {
    users: User[];
}

const AvatarContainer = styled.div`
    display: inline-block;
    gap: 10px;
    transform: translateX(8px);
`;

const ReadUser = ( props: ReadUserProps ) =>
{
    const { users } = props;
    const renderTooltipContent = () =>
    {
        return (
            <div>
                {users.map( ( user, index ) => (
                    <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
                        <Avatar src={user.image} size={20} />
                        <span style={{ marginLeft: '5px' }}>{user.name}</span>
                    </div>
                ) )}
            </div>
        );
    };

    const renderUsers = () =>
    {
        if ( users.length === 0 )
        {
            return (
                <CustomTooltip placement='bottom' title={<div>No users</div>}>
                    <div></div>
                </CustomTooltip>
            );
        } else if ( users.length < 2 )
        {
            return (
                <CustomTooltip placement='bottom' title={renderTooltipContent()}>
                    <div>
                        {users.map( ( user, index ) => (
                            <AvatarContainer key={index}
                                style={{
                                    display: 'flex',
                                    gap: '5px',
                            }}
                            >
                                <div>
                                    <Avatar
                                    style={{
                                        width: '20px',
                                        height: '20px',
                                    }}
                                    src={user.image}
                                />
                                </div>
                                <div style={{
                                    color: '#7A828E',
                                }}>
                                    {user.name}
                                </div>
                            </AvatarContainer>
                        ) )}
                    </div>
                </CustomTooltip>
            );
        } else
        {
            const displayUsers = users.slice( 0, 3 );
            const remainingCount = users.length > 2 ? users.length - 3 : 0;

            return (
                <CustomTooltip placement='bottom' title={renderTooltipContent()}>
                    {/* <div>
                        {displayUsers.map( ( user, index ) => (
                            <AvatarContainer key={index}>
                                <Avatar
                                    style={{
                                        width: '20px',
                                        height: '20px',
                                    }}
                                    src={user.image}
                                />
                            </AvatarContainer>
                        ) )}
                        <Badge
                            count={remainingCount}
                            // overflowCount={2}
                            style={{
                                fontSize: '11px',
                                backgroundColor: '#1A374D',
                                borderRadius: '50%',
                            }}
                        />
                    </div> */}
                    <div>
                        <UserAvatar users={users}/>
                    </div>
                </CustomTooltip>
            );
        }
    };

    return (
        <div>
            {renderUsers()}
        </div>
    );
};

export default ReadUser;