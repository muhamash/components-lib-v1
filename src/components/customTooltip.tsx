'use client'

import React from "react";
import { Tooltip } from "antd";

interface CustomTooltipProps {
    title?:React.ReactNode;
    children: React.ReactElement;
    placement?: 'top' | 'left' | 'right' | 'bottom';
};

const CustomToolTip = (props: CustomTooltipProps) =>
{
    const { title, children, placement } = props;
    console.log({props})
    return (
        <div>
            <Tooltip
                color="#FFFFFF"
                overlayInnerStyle={{
                    color: 'black'
                }}
                title={title} placement={placement}>
                {React.cloneElement( children )}
            </Tooltip>
        </div>
    );
};

export default CustomToolTip;
