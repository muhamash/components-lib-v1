import { Avatar, Badge } from 'antd';
import React from 'react'
import styled from 'styled-components';


interface UserAvatarProps
{
    users: {
        name?: string;
        image: string;
    }[]
}

const AvatarContainer = styled.div`
    display: inline-block;
    gap: -8px;
    transform: translateX(8px);
`;

const UserAvatar = (props: UserAvatarProps) =>
{
    const { users } = props;
    const displayUsers = users.slice(0, 3);
    const remainingCount = users.length > 3 ? users.length - 3 : 0;
    
    return (
        <div>
            {users.length === 1 ? (
                <AvatarContainer
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px'
                    }}
                >
                    <div>
                        <Avatar
                            style={{
                                width: '22px',
                                height: '22px',
                            }}
                            src={users[ 0 ].image}
                        />
                    </div>
                    {users[ 0 ].name && (
                        <div
                            style={{
                                color: '#7A828E'
                            }}>
                            {users[ 0 ].name}
                        </div>
                    )}
                </AvatarContainer>
            ) : (
                displayUsers.map( ( user, index ) => (
                    <AvatarContainer key={index}>
                        <Avatar
                            className='shadow-xl shadow-gray-300'
                            style={{
                                width: '22px',
                                height: '22px',
                                zIndex: users.length - index,
                                marginLeft: index === 0 ? '0' : '-10px',
                            }}
                            src={user.image}
                        />
                    </AvatarContainer>
                ) )
            )}
            {remainingCount > 0 && (
                <Badge
                    count={remainingCount}
                    style={{
                        fontSize: '11px',
                        backgroundColor: '#1A374D',
                        borderRadius: '50%',
                    }}
                />
            )}
        </div>
    );
};

export default UserAvatar;