import { Card, Space } from 'antd';
import React from 'react'

interface TaskDetailCardProps
{
    title?: string;
    subTitle?: string;
    dropdown?: React.ReactNode;
    buttonTyped?: React.ReactElement;
    buttonCancel?: React.ReactElement;
}

const TaskDetailCard = (props: TaskDetailCardProps) =>
{
    const { title, subTitle, dropdown, buttonCancel, buttonTyped } = props;
    return (
        <div>
            <Card
                hoverable
                style={{ width: '460px' }}
                
            >
                <Space
                    direction='vertical'
                    size={'middle'}
                >
                    <Space
                        direction='vertical'
                        size={'middle'}
                    >
                        <div className='text-[16px] font-[700]'>
                            {title}
                        </div>
                        <Space
                            direction='vertical'
                        >
                            <div
                                className='text-[#545F71] text-[13px] font-[500]'>
                                {subTitle}
                            </div>
                            <div>
                                {dropdown}
                            </div>
                        </Space>
                    </Space>
                    <Space>
                        <div>
                            {buttonTyped}
                        </div>
                        <div>
                            {buttonCancel}
                        </div>
                    </Space>
                </Space>  
            </Card>
        </div>
    )
};

export default TaskDetailCard;