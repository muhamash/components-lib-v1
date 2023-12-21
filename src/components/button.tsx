'use client'

import './css/button.css'
import React, { useState } from "react";
import { Button } from "antd";
import type { SizeType } from "antd/es/config-provider/SizeContext";

interface CustomButton
{
    title: string,
    icon?: React.ReactNode,
    status?: string,
}
const CustomButton = (props: CustomButton) =>
{
    

    const { title, icon, status } = props;
    const [ size, setSize ] = useState<SizeType>( "middle" );
    
    return (
        <div
            style={{
                padding: '20px 0px 0px 0px',
            }}>
        <Button
            style={{}}
                className={status}
                icon={icon}
                size={size}>
                {title}
            </Button>
        </div>
    );
};

export default CustomButton;