'use client'

import './css/button.css'
import React, { useState } from "react";
import { Button } from "antd";
import type { SizeType } from "antd/es/config-provider/SizeContext";

interface CustomButton
{
    title: string,
    icon?: React.ReactElement,
    status?: string,
}
const CustomButton = (props: CustomButton) =>
{
    

    const { title, icon, status } = props;
    const [ size, setSize ] = useState<SizeType>( "middle" );
    
    return (
        <div
            style={{
                padding: '10px 0px',
            }}>
        <Button
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    height: '35px'
                }}
                className={status}
                icon={icon}
                size={size}>
                {title}
            </Button>
        </div>
    );
};

export default CustomButton;