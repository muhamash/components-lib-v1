import IconGenerator from "@/components/IconGenerator";
import { Card, Space } from "antd";
import React from "react";

interface CertificationCardProps
{
    width: string;
    coverImage: React.ReactElement;
    fileName: string;
    sensorName: string;
    fileFormat: string;
    fileSize: string
}


const CertificationCard = (props: CertificationCardProps) =>
{
    const { width, coverImage, fileName, sensorName, fileFormat,fileSize } = props;
    return (
        <div>
            <Card
                hoverable
                style={{ width: width }}
                cover={coverImage}
                bodyStyle={{
                    padding: '0px'
                }}
            >
                <Card.Meta
                    style={{
                        margin: '0px'
                    }}
                    
                    title={
                        <div
                        className="flex flex-col p-2"
                        >
                            <div className="text-[14px] font-[700]">
                                {fileName}
                            </div>
                            <div className="text-[13px] font-[600] text-[#7A828E] gap-3">
                                {sensorName}
                            </div>
                        </div>
                    }
                    
                    description={
                        <div className="flex gap-2 px-2 pb-2">
                            <div className="flex gap-1">
                                <div>
                                    <IconGenerator
                                        fileFormat={fileFormat}
                                        fileName={fileFormat}
                                    />
                                </div>
                                <div>
                                    {fileSize}
                                </div>
                            </div>
                        </div>
                    }
                />
            </Card>
        </div>
    );
};

export default CertificationCard;