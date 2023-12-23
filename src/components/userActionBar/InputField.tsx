import React from 'react';
import { Input } from 'antd';
import styled from 'styled-components';
import { SearchOutlined } from '@ant-design/icons'; // Import SearchOutlined from Ant Design Icons

const StyledInput = styled(Input)`
  width: 280px;
`;

interface CustomInputFieldProps {
  onSearch: () => void;
  placeholder: string;
}

const CustomInputField = (props: CustomInputFieldProps) => {
  const { onSearch, placeholder } = props;
  return (
    <div>
      <StyledInput
        placeholder={placeholder}
        onClick={onSearch}
        allowClear
        prefix={<SearchOutlined />}
      />
    </div>
  );
};

export default CustomInputField;
