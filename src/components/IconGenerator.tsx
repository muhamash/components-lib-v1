import React from "react";
import { FilePdfFilled, FileImageOutlined, FileOutlined, FileExcelFilled } from '@ant-design/icons';

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
                return <FileExcelFilled className="text-lg" style={{ color: 'green' }}/>
            case "pdf":
                return <FilePdfFilled className="text-lg" style={{ color: 'red' }}/>;
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