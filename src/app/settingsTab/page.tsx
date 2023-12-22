'use client'

import React from "react";
import { Tabs } from "antd";


interface SettingsTabProps
{
    tab: {
        index: Number;
        labelName: string;
        children?: React.ReactNode;
    }[];
}

const SettingsTab = (props: SettingsTabProps) =>
{
    const { tab = [] } = props;
    return (
        <div>
            {/* <Tabs
                defaultActiveKey="1"
                // tabPosition={mode}
                style={{ height: 20 }}
                items={new Array( index ).fill( null ).map( ( _, i ) =>
                {
                    const id = String( i );
                    return {
                        label: `${ labelName }`,
                        key: id,
                        disabled: i === 28,
                        children: `${children}`,
                    };
                } )}
            /> */}
        </div>
    );
};

export default SettingsTab;