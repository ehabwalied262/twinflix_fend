import React, { useEffect, useRef, useState } from 'react';
import { Input, Tag } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

interface AddTagProps {
  initialTags: string[];
}

const AddTag: React.FC<AddTagProps> = ({ initialTags }) => {
  const [tags, setTags] = useState(initialTags);
  const [inputVisible, setInputVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputVisible) {
      inputRef.current?.focus();
    }
  }, [inputVisible]);

  const handleClose = (removedTag: string) => {
    const newTags = tags.filter((tag) => tag !== removedTag);
    setTags(newTags);
  };

  const showInput = () => {
    setInputVisible(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleInputConfirm = () => {
    if (inputValue && tags.indexOf(inputValue) === -1) {
      setTags([...tags, inputValue]);
    }
    setInputVisible(false);
    setInputValue('');
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleInputConfirm();
    }
  };

  const tagChild = tags.map((tag, index) => (
    <span key={`${tag}-${index}`} style={{ display: 'inline-block' }}>
      <Tag
        closable
        onClose={(e) => {
          e.preventDefault();
          handleClose(tag);
        }}
      >
        {tag}
      </Tag>
    </span>
  ));

  return (
    <>
      <div style={{ marginBottom: 16 }}>
        {tagChild}
      </div>
      {inputVisible ? (
        <Input
          type="text"
          size="small"
          style={{ width: 78 }}
          value={inputValue}
          onChange={handleInputChange}
          onBlur={handleInputConfirm}
          onPressEnter={handleInputConfirm}
          onKeyPress={handleKeyPress}
        />
      ) : (
        <Tag onClick={showInput} style={{ background: 'white', borderStyle: 'dashed' }}>
          <PlusOutlined /> New Tag
        </Tag>
      )}
    </>
  );
};

export default AddTag;