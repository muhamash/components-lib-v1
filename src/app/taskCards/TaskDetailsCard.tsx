'use client'

import React from 'react';
import CustomButton from '@/components/Button/Button';
import { Card, Space } from 'antd';
import { MoreOutlined } from '@ant-design/icons';

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
    CalibrationStatus?: string;
    Date?: String;
    CalibrationStatusClassName?: string;
    MoreOutlinedClick?: () => void;
}

const TaskDetailCard = ({ title, subTitle, ReactElementProps, buttons = [], CalibrationStatus, Date, CalibrationStatusClassName, MoreOutlinedClick}: TaskDetailCardProps) => {
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
                        size={'small'}
                    >
                        <div className='flex items-center justify-between w-[400px]'>
                            <div>
                                <Space
                                    direction='vertical'
                                >
                                    <div className='text-[16px] font-[700] text-[#545F71]'>
                                        {title}
                                    </div>
                                    <div
                                        className='flex'
                                
                                    >
                                        <div className={CalibrationStatusClassName}>
                                            {CalibrationStatus}
                                        </div>
                                        {
                                            Date && (
                                                <div
                                            
                                                    className='flex gap-1 items-center'
                                                >
                                                    <div className='text-[12px] text-[#7A828E]'>Next Calibration: </div>
                                                    <div>{Date}</div>
                                                </div>
                                            )
                                        }
                                    </div>
                                </Space>
                            </div>
                            {title && (
                                <div>
                                    <MoreOutlined className='text-lg' onClick={ MoreOutlinedClick } />
                                </div>
                            )}
                        </div>
                        <Space
                            direction='vertical'
                            size={'small'}
                        >
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
