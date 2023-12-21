'use client';

import React from "react";
import { Card, Space } from "antd";
import './page.css';
import { PlusCircleOutlined } from '@ant-design/icons';
import ReadUser from "@/components/readUser";

interface EmailCardProps
{
    head: string;
    title: string;
    emailCount: String;
    date: string;
    users: {
        name: string;
        id: string;
        image: string;
        status: string;
    }[];
}

const EmailCard = ( props: EmailCardProps ) =>
{
    const { head, title, emailCount, date, users = [] } = props;
    return (
        <div>
            <Card
                hoverable
                style={{
                    width: '370px',
                }}
            >
                <Space
                    direction="vertical"
                    size={'large'}
                >
                    <div
                        style={{
                            // backgroundColor: '#C19420',
                            // width: 'fit'
                        }}
                    >
                        <button
                            className="titleHead"
                        >
                            {head}
                        </button>
                    </div>
                    <Space
                        size={'large'}
                    >
                        <div>
                            <Space
                                direction="vertical"
                                size={'small'}
                            >
                                <div
                                    className="groupTitle"
                                >
                                    {title}
                                </div>
                                <div
                                    className="emailCounter"
                                >
                                    {emailCount}
                                </div>
                                <div
                                    style={{
                                        paddingTop: '10px',
                                    }}
                                    className="emailCardDate"
                                >
                                    {date}
                                </div>
                            </Space>
                        </div>
                        <div>
                            <Space
                                align="center"
                                size={'large'}
                            >
                                <div>
                                    <ReadUser users={users} />
                                </div>
                                <button onClick={() =>
                                {
                                    alert('add users')
                                }}>
                                    <svg width="30" height="30" viewBox="0 0 24 24" fill="#054F9F" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#545F71" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M12 8V12M12 12V16M12 12H16M12 12H8" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>

                                </button>
                            </Space>
                        </div>
                    </Space>
                </Space>
                
            </Card>
        </div>
    );
};

export default EmailCard;