'use client'

import React from 'react';
import CustomButton from '@/components/Button/Button';
import { Card, Space } from 'antd';

interface ButtonProps {
  buttonTitle: string;
  buttonIcon?: React.ReactElement;
  buttonClassName?: string;
  onClick?: () => void;
}

interface TaskDetailCardProps {
  title?: string;
  subTitle?: string;
  ReactElementProps?: React.ReactNode;
  buttons?: ButtonProps[];
}

const TaskDetailCard = ({ title, subTitle, ReactElementProps, buttons = [] }: TaskDetailCardProps) => {
    return (
        <div>
            <Card
                hoverable
                style={{
                    width: '460px'
                }}>
                <Space
                    direction='vertical'
                    size={'middle'}>
                    <Space
                        direction='vertical'
                        size={'small'}>
                        <div
                            className='text-[16px] font-[700]'>{
                                title}
                        </div>
                        <Space
                            direction='vertical'>
                            <div
                                className='text-[#545F71] text-[13px] font-[500]'>{subTitle}
                            </div>
                            <div>
                                {ReactElementProps}
                            </div>
                        </Space>
                    </Space>
                    {buttons && buttons.length > 0 && (
                        <Space>
                            {buttons.map( ( button, index ) => (
                                <CustomButton
                                    key={index}
                                    title={button.buttonTitle}
                                    icon={button.buttonIcon}
                                    className={button.buttonClassName}
                                    onClick={button.onClick}
                                />
                            ) )}
                        </Space>
                    )}
                </Space>
            </Card>
        </div>
    );
};

export default TaskDetailCard;
