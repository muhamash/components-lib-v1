import React from 'react';
import { Avatar, Badge } from 'antd';
import styled from 'styled-components';
import CustomTooltip from './customTooltip';

// interface User {
//     image: string;
//     name?: string;
// }

interface ReadUserProps
{
    users: {
        image: string;
        name?: string;
    }[];
}
const AvatarContainer = styled.div`
    display: inline-block;
    gap: -8px;
    transform: translateX(8px);
`;

const UserProfile = ( props: ReadUserProps ) =>
{
    const { users=[] } = props;
    const renderTooltipContent = () => {
        if (users.length === 0) {
            return <div>No users</div>;
        }

        return (
            <div>
                {users.map((user, index) => (
                    <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
                        <Avatar
                            src={user.image}
                            size={18} />
                        <span
                            className='text-[11px] text-[#54575c]'
                            style={{
                                marginLeft: '5px',
                            }}>
                            {user.name}
                        </span>
                    </div>
                ))}
            </div>
        );
    };

    const displayUsers = users.slice(0, 3);
    const remainingCount = users.length > 3 ? users.length - 3 : 0;

    return (
        <CustomTooltip placement="bottom" title={renderTooltipContent()}>
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
                            src={users[0].image}
                        />
                        </div>
                        {users[0].name && (
                            <div
                                style={{
                                    color: '#7A828E'
                                }}>
                                {users[ 0 ].name}
                            </div>
                        )}
                    </AvatarContainer>
                ) : (
                    displayUsers.map((user, index) => (
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
                    ))
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
        </CustomTooltip>
    );
};

export default UserProfile;