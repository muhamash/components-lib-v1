import React from "react";
import { FilePdfOutlined, FileImageOutlined, FileOutlined, FileExcelOutlined } from '@ant-design/icons';

interface IconGeneratorProps {
    fileFormat: string;
    fileName: string;
}

const IconGenerator = ( props:IconGeneratorProps ) =>
{
    const { fileFormat, fileName } = props;

    const getFileIcon = ( format: string ) =>
    {
        switch ( format.toLowerCase() )
        {   
            case "excel":
                return <FileExcelOutlined/>
            case "pdf":
                return <FilePdfOutlined className="text-lg"/>;
            case "jpg":
            case "jpeg":
            case "png":
                return <FileImageOutlined />;
            default:
                return <FileOutlined />;
        }
    };

    return (
        <div className="flex space-x-1">
            <div>{getFileIcon(fileFormat)}</div>
            <div>{fileName}</div>
        </div>
    )
};

export default IconGenerator;