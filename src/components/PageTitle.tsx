import React, { ChangeEvent } from 'react';
import './PageTitle.scss';
import { Button, Divider, Input, PageHeader, Space } from 'antd';

interface PageTitleParam {
  title: string;
  buttonText?: string;
  placeholder?: string;
  onChangeKeyword?: (keyword: string) => void;
  onClickCreateButton?: () => void;
}

const PageTitle = ({
  title,
  buttonText,
  placeholder,
  onChangeKeyword,
  onClickCreateButton,
}: PageTitleParam) => {
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (onChangeKeyword) {
      onChangeKeyword(e.target.value);
    }
  };

  const onClick = () => {
    if (onClickCreateButton) {
      onClickCreateButton();
    }
  };

  return (
    <>
      <PageHeader backIcon={false} title={title} />
      <Divider className={'divider'} />
      <Space className={'space'}>
        {onChangeKeyword ? (
          <Input
            placeholder={placeholder}
            className={'ndap-search-input'}
            onChange={onChange}
          />
        ) : (
          <></>
        )}
        {onClickCreateButton ? (
          <Button className={'create-button'} onClick={onClick}>
            {buttonText}
          </Button>
        ) : (
          <></>
        )}
      </Space>
    </>
  );
};

export default PageTitle;
