'use client'

import React from 'react';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Badge, Card } from 'antd';
import styled from 'styled-components';
import CalibrationCardButton from './button';


const { Meta } = Card;

const CardData = styled( Meta )`
  .ant-card-meta-title {
    font-size: 11px;
    font-weight: 800;
    color: #9BA5B7;
  }

  .ant-card-meta-description {
    font-size: 16px;
    font-weight: 700;
    color: #545F71;
    padding: 3px 0px 0px 0px;
  }
`;

interface Users
{
    Avatar: string,
    id: string,
    name: string,
}



interface CalibrationCardProps
{
    CardTitle: string,
    CardDescription: string,
    CustomDate: string,
    width: string,
    users?: Users[],

}

const CalibrationCard = ( props: CalibrationCardProps ) =>
{
    const { CardTitle, CardDescription, CustomDate, width, users = []} = props;

    const renderAvatars = () =>
    {
        if ( users.length == 0 )
        {
          return undefined   
        }
        else if ( users.length === 1 )
        {
            return (
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                    <Avatar
                        style={{
                            width: '20px',
                            height: '20px'
                        }}
                        src={users[ 0 ].Avatar} />
                    <div
                        style={{
                            marginLeft: '5px'
                        }}>
                        {users[ 0 ].name}</div>
                </div>
            );
        }
        
        else if ( users.length === 2 )
        {
            return users.map( ( user ) => (
                <div
                    key={user.id}
                    style={{
                        display: 'inline-block',
                        transform: 'translateX(-2px)',
                    }}>
                    <Avatar
                        style={{
                            width: '20px',
                            height: '20px'
                        }}
                        src={user.Avatar} />
                </div>
            ) );
        }
            
        else
        {
            const remainingCount = users.length - 3;
            // alert(remainingCount)
            const displayUsers = users.slice( 0, 3 );
            // alert(displayUsers)

            return (
                <div>
                    {displayUsers.map( ( user ) => (
                        <div
                            key={user.id}
                            style={{
                                display: 'inline-block',
                
                            }}>
                            <Avatar
                                style={{
                                    width: '20px',
                                    height: '20px'
                                }}
                                src={user.Avatar} />
                            {/* <div
                                style={{
                                    textAlign: 'center',
                                    fontSize: '12px'
                                }}>
                                {user.name}
                            </div> */}
                        </div>
                    ) )}
                    <Badge
                        count={remainingCount}
                        overflowCount={3}
                        style={{
                            // marginLeft: '5px',
                            // padding: '5px',
                            fontSize: '11px',
                            backgroundColor: '#1A374D',
                            borderRadius: '50%'
                        }}>
                        <Avatar
                            style={{
                                width: '20px',
                                height: '20px'
                            }}
                            src={''} />
                    </Badge>
                </div>
            );
        }
    };

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            padding: '20px'
        }}>
            <Card
                hoverable
                style={{ width: width }}
                actions={[
                    <span key={'users'}>
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                fontSize: '12px',
                                color: '#7A828E',
                                fontWeight: 600,
                                gap: '5px',
                                justifyContent: 'flex-start',
                                padding: '0px 10px'
                            }}>
                            <div>
                                {/* <Avatar style={{
                                    width: '20px',
                                    height: '20px'
                                }} src='user?' /> */}
                                {renderAvatars()}
                            </div>
                            {/* <div>
                                ashraful
                            </div> */}
                        </div>
                    </span>,
                    <span
                        key={'date'}
                        style={{

                        }}
                    >
                        <div style={{
                            fontSize: '12px',
                            color: '#7A828E',
                            fontWeight: 600,
                            display: 'flex',
                            gap: '5px',
                            justifyContent: 'flex-end',
                            alignItems: 'center',
                            padding: '0px 10px'
                        }}>
                            <div>Due:</div>
                            <div>{CustomDate}</div>
                        </div>
                    </span>
                ]}
            >
                <CardData
                    title={CardTitle}
                    description={CardDescription}
                />
                <CalibrationCardButton title='Start Calibration' status='completed' />
            </Card>
        </div>
    );
};

export default CalibrationCard;