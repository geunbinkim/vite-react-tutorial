import React, { useEffect, useState } from 'react';
import './Connections.scss';
import PageTitle from '../../components/PageTitle';
import { Table } from 'antd';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

interface Connection {
  id: number;
  name: string;
  owner: string;
  type: string;
  address?: string;
}

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text: string) => <a>{text}</a>,
  },
  { title: 'Type', dataIndex: 'type', key: 'type' },
  { title: 'Address', dataIndex: 'address', key: 'address' },
  { title: 'Owner', dataIndex: 'owner', key: 'owner' },
  { title: 'Last Modified', dataIndex: 'updated', key: 'updated' },
  { title: 'Info', dataIndex: 'info', key: 'name' },
];

const Connections = () => {
  const [connections, setConnections] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [keyword, setKeyword] = useState('');
  const [dataSource, setDataSource] = useState([]);
  const navigator = useNavigate();

  const onChange = (search: string) => {
    setKeyword(search);
  };

  const onClick = () => {
    navigator('/transfer/connection');
  };

  const fetchConnections = () => {
    setIsLoading(true);
    axios
      .get('http://localhost:8001/proxy/datasource')
      .then((response) => {
        setConnections(response.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchConnections();
  }, []);

  useEffect(() => {
    if (keyword.length >= 2)
      setDataSource(
        connections.filter((item: Connection) => {
          return item.name.includes(keyword) || item.type.includes(keyword);
        })
      );
    else setDataSource(connections);
  }, [keyword, connections]);

  return (
    <>
      <PageTitle
        title={'Connections'}
        buttonText={'Create Connection'}
        placeholder={'Search form a data connection name or type'}
        onChangeKeyword={onChange}
        onClickCreateButton={onClick}
      />
      <Table
        loading={isLoading}
        dataSource={dataSource}
        columns={columns}
        rowKey={'id'}
        className={'ndapTable'}
      ></Table>
    </>
  );
};

export default Connections;
