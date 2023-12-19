'use client'

import './button.css'
import React, { useState } from "react";
import { DownloadOutlined } from "@ant-design/icons";
import { Button, Divider, Flex, Radio } from "antd";
import type { SizeType } from "antd/es/config-provider/SizeContext";

interface CustomButton
{
    title: string,
    icon?: React.ReactNode,
    status?: string,
}
const CustomButton = (props: CustomButton) =>
{
    const getButtonClass = () => {
    switch (status) {
      case 'completed':
        return 'completed';
      case 'pending':
        return 'pending';
      case 'not-completed':
        return 'not-completed';
      default:
        return 'default';
    }
  };

    const { title, icon, status } = props;
    const [ size, setSize ] = useState<SizeType>( "middle" );
    
    return (
        <div
            style={{
                padding: '20px 0px 0px 0px',
            }}>
            <Button
                className={getButtonClass()}
                icon={icon}
                size={size}>
                {title}
            </Button>
        </div>
    );
};

export default CustomButton;