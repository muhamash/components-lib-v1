import React from "react";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space, MenuProps } from "antd";

interface DropDownProps
{
  dropdownTitle: string;
  width: string;
  backgroundColor: string;
}

const items: MenuProps["items"] = [
  {
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="##"
      >
        Year 2023
      </a>
    ),
    key: "0",
  },
  {
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="##"
      >
        Year 1998
      </a>
    ),
    key: "1",
  },
  // {
  //   type: 'divider',
  // },
  // {
  //   label: '3rd menu item（disabled）',
  //   key: '3',
  //   disabled: true,
  // },
];

const CustomDropdown = ( props: DropDownProps ) =>
{
    const { dropdownTitle, width, backgroundColor } = props;
    
  return (
    <div>
      <Dropdown
        overlayStyle={{
          border: '.7px solid rgba(0, 0, 0, 0.3)',
          borderRadius: '6px',
          backgroundColor: '#EDF1F7',
          padding: '5px'
        }}
        menu={{ items }}>
        <a onClick={( e ) => e.preventDefault()}>
          <Space
            style={{
              borderRadius: '6px',
              backgroundColor: backgroundColor,
              padding: '5px 8px',
              width: width,
              justifyContent: 'space-between',
              border: '.5px solid rgba(0, 0, 0, 0.3)',
            }}
          >
            <div
              style={{
                fontWeight: 500,
                color: '#7A828E',
              }}
            >
              {dropdownTitle}
            </div>
            <DownOutlined />
          </Space>
        </a>
      </Dropdown>
    </div>
  );
};

export default CustomDropdown;