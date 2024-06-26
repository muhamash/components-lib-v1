'use client'

import './button.css'
import React, { useState } from "react";
import { Button } from "antd";
import type { SizeType } from "antd/es/config-provider/SizeContext";

interface CustomButton
{
    title: string,
    icon?: React.ReactElement,
    className?: string;
    onClick?: () => void;
}
const CustomButton = (props: CustomButton) =>
{
    

    const { title, icon, className, onClick } = props;
    const [ size, setSize ] = useState<SizeType>( "middle" );
    
    return (
        <div
            style={{
                padding: '5px 0px',
            }}>
        <Button
                style={{
                    // display: 'flex',
                    // alignItems: 'center',
                    height: '37px',
                    // backgroundColor: {status},
                    // color: '#545F71'
                }}
                className={`flex items-center ${className}`}
                icon={icon}
                onClick={onClick}
                size={size}>
                {title}
            </Button>
        </div>
    );
};

export default CustomButton;