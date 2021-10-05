import React from "react";
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { debounce } from 'lodash';
import styled from 'styled-components';

interface IProps {
  onSearch: (t: string) => void,
  delay?: number,
}

const StyledInput = styled(Input)`
  width: 300px;
  border-radius: 20px;
`

const SearchInput: React.FC<IProps> = ({ onSearch, delay= 0 }) => {
    const setText = debounce(
    (e: React.ChangeEvent<HTMLInputElement>) =>
      onSearch(e?.target?.value || ''), delay
  );

  return(
    <StyledInput
      placeholder='Example: Apple'
      prefix={<SearchOutlined />}
      onChange={setText}
    />
  );
}

export default SearchInput;