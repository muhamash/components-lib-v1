'use client'

import React from 'react';
import {  Card, } from 'antd';
import styled from 'styled-components';
import CalibrationCardButton from '../../components/button';
import './customCard.css';
import ReadUser from '@/components/readUser';
import { AlertOutlined } from '@ant-design/icons';



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

interface CalibrationCardProps
{
    CardTitle: string,
    CardDescription: string,
    CustomDate: string,
    width: string,
    users: {
        name: string;
        id: string;
        image: string;
        status: string;
    } [],
};

const CalibrationCard = ( props: CalibrationCardProps ) =>
{
    const { CardTitle, CardDescription, CustomDate, width, users=[]} = props;

    return (
        <div>
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
                            }}
                            // className='customCardUser'
                        >
                            <div>
                                <ReadUser users={users}/>
                            </div>
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
                <CalibrationCardButton title='Start Calibration' status={users[ 0 ]?.status} icon={ <AlertOutlined />} />
            </Card>
        </div>
    );
};

export default CalibrationCard;