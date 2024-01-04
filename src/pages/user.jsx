import React, { useState, useEffect } from 'react';
import { Table, Input, InputNumber, Popconfirm, Form, Typography, Space, Button,Switch } from 'antd';
import Server from '../server/server';
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
    const [form] = Form.useForm();
    const [data, setData] = useState([]);
    const [editingKey, setEditingKey] = useState('');

    // useEffect(() => {
    //     Server.getUserList().then((res) => {
    //         console.log(res);
    //         let newD = res.data
    //         .map((u, i) => {
    //             return { key: `${i}`, ...u }
    //         })
    //         setData(newD)
    //     })
    // }, [])

    useEffect(() => {
        Server.getUserList()
            .then((res) => {
                if (res && res.userinfo) {
                    let newD = res.userinfo.map((user, i) => {
                        return { key: `${i}`, ...user };
                    });
                    setData(newD);
                } else {
                    console.error("错误：未获得有效的用户信息。");
                }
            })
            .catch((error) => {
                console.error("获取用户列表时出错：", error);
            });
    }, []);

    const isEditing = (record) => record.key === editingKey;

    const edit = (record) => {
        form.setFieldsValue({
            id: '',
            name: '',
            password: '',
            role: '',
            ...record,
        });
        setEditingKey(record.key);
    };

    const cancel = () => {
        setEditingKey('');
    };

    const onSearch = (nickname) => {
        if (nickname) {
            Server.searchUser(nickname).then((res) => {
                console.log(res.userInfo)
                setData([{ key: '0', ...res.userInfo }])
            })
        } else {
            Server.getUserList().then((res) => {
                let newD = res.userinfo.map((u, i) => {
                    return { key: `${i}`, ...u }
                })
                setData(newD)
            })
        }
    }

    const columns = [
        {
            title: 'id',
            dataIndex: 'id',
            width: '5%',
            editable: false,
        },
        {
            title: '名称',
            dataIndex: 'nickname',
            width: '10%',
        },
        {
            title: '电话',
            dataIndex: 'tel',
            width: '15%',
            editable: true,
        },
        {
            title: '密码',
            dataIndex: 'pwd',
            width: '20%',
            editable: true,
        },
        {
            title: '性别',
            dataIndex: 'sex',
            width: '5%',
            editable: false
        },
        {
            title: '年龄',
            dataIndex: 'age',
            width: '5%',
        },
        {
            title: '公司',
            dataIndex: 'company',
            width: '15%',
        },
        {
            title: '加入黑名单',
            dataIndex: 'blacklist',
            width: '10%',
            render: (_, record) => <Switch checked={record.blacklist} onChange={() => handleSwitchChange(record)} />,
        },
        {
            title: '操作',
            dataIndex: 'operation',
            width: '10%',
            render: (_, record) => {
                const editable = isEditing(record);
                return editable ? (
                    <span>
                        <Popconfirm title="确认取消?" onConfirm={cancel}>
                            <a>取消</a>
                        </Popconfirm>
                    </span>
                ) : (
                    <Space>
                        <Popconfirm title="确认删除?" onConfirm={() => handleDelete(record.key)}>
                            <a>删除</a>
                        </Popconfirm>
                    </Space>
                );
            },
        },
    ];

    const mergedColumns = columns.map((col) => {
        if (!col.editable) {
            return col;
        }

        return {
            ...col,
            onCell: (record) => ({
                record,
                inputType: col.dataIndex === 'age' ? 'number' : 'text',
                dataIndex: col.dataIndex,
                title: col.title,
                editing: isEditing(record),
            }),
        };
    });

    return (
        <>
            <Button
                // onClick={handleAdd}
                type="primary"
                style={{
                    marginBottom: 16,
                }}
            >
                添加用户
            </Button>
            <Search placeholder="输入用户名称"
                onSearch={onSearch}
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
                    columns={mergedColumns}
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
