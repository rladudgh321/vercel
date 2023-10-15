import AppLayout from '@/components/AppLayout';
import React, { useState } from 'react';
import { List } from 'antd';
import { useSelector } from 'react-redux';
import { Space, Table, Tag } from 'antd';

const Note = () => {
    const { notePost } = useSelector((state) => state.post);
    const columns = [
        {
          title: '번호',
          dataIndex: 'id',
          key: 'id',
          sorter: (a, b) => a.id - b.id,
          defaultSortOrder:'descend',
          showSorterTooltip:'false',
        },
        {
          title: '제목',
          dataIndex: 'title',
          key: 'title',
          render: (text) => <a>{text}</a>,
        },
        {
          title: '작성자',
          dataIndex: 'user',
          key: 'user',
        },
        {
          title: '등록일',
          dataIndex: 'createdAt',
          key: 'createdAt',
        },
      ];
      const data = notePost.map((v) => ({
          key: v.id,
          id: v.id,
          title: v.title,
          user: '관리자',
          createdAt: v.createdAt,
      }));
      const pagination = {
        defaultCurrent:1,
        total:notePost.length,
        position: ['bottomCenter'],
      }
    return (
        <>
            <AppLayout>
                
                <List
                    bordered
                    header={<>
                      <div style={{fontSize:'1.5rem', marginBottom:'30px'}}>
                        공지사항
                      </div>
                    </>}
                    style={{padding:'30px'}}
                >
                    
                        <Table 
                        pagination={pagination}
                        columns={columns} dataSource={data}>
                            <Table.Column sortOrder='descend' />
                        </Table>
                </List>
            </AppLayout>
        </>
    );
}

export default Note;