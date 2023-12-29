import React from "react";
import { EnvironmentOutlined } from "@ant-design/icons";
import { Card } from "antd";
import "./EventCard.css";

const EventCard = () => {
    return (
        <div className="flex items-center justify-center py-10">
            <Card
                hoverable
                bordered
                style={{
                    width: '250px',
                    height: '250px',
                }}
                className="event-card" // Add a class to target the Card component
            >
                <div className="relative">
                    {/* Hidden div */}
                    <div
                        className="hidden-content bg-yellow-500 absolute">
                        on hover div <EnvironmentOutlined />
                        on hover div <EnvironmentOutlined />
                        on hover div <EnvironmentOutlined />
                    </div>

                    {/* Visible div */}
                    <div className="visible-content bg-black absolute">
                        hello & hover here
                        <EnvironmentOutlined className="text-green-700" />
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default EventCard;