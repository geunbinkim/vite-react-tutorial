import React from 'react';
import { Menu, MenuProps, Space } from 'antd';
import styled from '@emotion/styled';
import logo from '/assets/img/ndap_bi.png';
import { useNavigate } from 'react-router-dom';
import './NavBar.scss';
import { BsFillBellFill } from 'react-icons/all';

const LogoStyled = styled.img`
  width: 46px;
  height: 46px;
  margin-right: 2px;
`;

const SpanStyled = styled.span`
  font-size: 35px;
  font-weight: bold;
`;

const NavBar = () => {
  const menuItems = [
    {
      label: 'Dashboard',
      key: 'dashboard',
    },
    {
      label: 'Data Transfer',
      key: 'dataTransfer',
      children: [
        {
          label: 'Connections',
          key: 'connections',
        },
        {
          label: 'Import Jobs',
          key: 'importJobs',
        },
        {
          label: 'Export Jobs',
          key: 'exportJobs',
        },
        {
          label: 'DistCp Jobs',
          key: 'distCpJobs',
        },
        {
          label: 'Import Jobs History',
          key: 'importJobsHistory',
        },
        {
          label: 'Export Jobs History',
          key: 'exportJobsHistory',
        },
        {
          label: 'DistCp Jobs History',
          key: 'distCpJobsHistory',
        },
      ],
    },
    {
      label: 'Data Action',
      key: 'dataAction',
    },
    {
      label: 'Storage Browser',
      key: 'storageBrowser',
    },
    {
      label: 'Workbench',
      key: 'workbench',
    },
    {
      label: 'Workflow',
      key: 'workflow',
    },
    {
      label: 'Administration',
      key: 'administration',
    },
    {
      label: 'Cluster',
      key: 'cluster',
    },
    {
      label: 'Document',
      key: 'document',
    },
  ];

  const navigate = useNavigate();
  const onMenuClick: MenuProps['onClick'] = (e) => {
    navigate('/transfer/' + e.key);
  };

  return (
    <>
      <Space className={'navBarSpace'}>
        <LogoStyled src={logo} alt={'logo'} />
        <SpanStyled>NDAP</SpanStyled>
        <Menu
          mode={'horizontal'}
          items={menuItems}
          onClick={onMenuClick}
          className={'menu'}
        />
        <BsFillBellFill className={'notificationIcon'} />
      </Space>
    </>
  );
};

export default NavBar;
