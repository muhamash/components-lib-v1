'use client'

import { Card } from "antd";
import React from "react";
import CustomDropdown from "../../components/dropdown";

interface CalibrationStateCardProps{
    title: string;
    amount: React.ReactNode;
    element: string;
}

const CalibrationStateCard = (props: CalibrationStateCardProps) =>
{
    const { title, amount, element } = props;
    return (
        <div>
            <Card
                hoverable
                style={{ width: '390px' }}
            >
                <div
                >
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between'
                    }}
                    >
                        <div
                            style={{
                                color: '#7A828E',
                                fontWeight: 800,
                                fontSize: '14px',
                                lineHeight: '22px'
                            }}
                        >{ title }</div>
                        <div>
                            <CustomDropdown width="" dropdownTitle={"This Year"} backgroundColor={"#EDF1F7"} />
                        </div>
                    </div>

                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'baseline',
                    }}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'baseline',
                            gap: '5px'

                        }}>
                            <div
                                style={{
                                    color: '#22222B',
                                    fontSize: '40px',
                                    fontWeight: 800,

                            }}
                            >{amount}</div>
                            <div
                                style={{
                                    color: '#545F71',
                                    fontSize: '20px',
                                    fontWeight: 700
                            }}
                            >{element}</div>
                        </div>
                        <div>states</div>
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default CalibrationStateCard;