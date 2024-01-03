import React, { useState, useEffect } from 'react';
import { Table, Input, InputNumber, Popconfirm, Form, Typography, Space, Button } from 'antd';
const { Search } = Input;

const EditableCell = ({
    editing,
    dataIndex,
    title,
    inputType,
    record,
    index,
    children,
    ...restProps
  }) => {
    const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;
    return (
      <td {...restProps}>
        {editing ? (
          <Form.Item
            name={dataIndex}
            style={{
              margin: 0,
            }}
            rules={[
              {
                required: true,
                message: `Please Input ${title}!`,
              },
            ]}
          >
            {inputNode}
          </Form.Item>
        ) : (
          children
        )}
      </td>
    );
  };
  const User = () => {
    return (
        <>
          <Button
            // onClick={handleAdd}
            type="primary"
            style={{
              marginBottom: 16,
            }}
          >
            Add a User
          </Button>
          <Search placeholder="input user id" 
        //   onSearch={onSearch} 
          style={{ width: 200, marginLeft: 200 }} />
          <Form form={form} com
          ponent={false}>
            <Table
              loadings
              components={{
                body: {
                  cell: EditableCell,
                },
              }}
              bordered
              dataSource={data}
            //   columns={mergedColumns}
              rowClassName="editable-row"
              pagination={{
                onChange: cancel,
              }}
            />
          </Form>
        </>
      );
  }

  export default User;
