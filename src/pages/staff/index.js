import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Import from "components/core/import";

import { SendOutlined } from "@ant-design/icons";
import { Button, Layout, Space, Table } from "antd";
import { createOrUpdateStaff } from "store/actions/app";
import { encrypt } from "utils/tools/cryptojs";
const { Content } = Layout;

export default function StaffPage(props) {
    const { height } = props;
    const { token, clientKey, sharedKey } = localStorage;

    /* Store Data */
    const { catBranch } = useSelector((state) => state.app);

    /* Hooks */
    const dispatch = useDispatch();

    /* Constant */
    /* ----- */

    /* State */
    const [dataColumn] = useState([
        {
            width: 150,
            title: "NIP",
            dataIndex: "NIP"
        },
        {
            width: 150,
            title: "Nama Pegawai",
            dataIndex: "Nama Pegawai"
        },
        {
            width: 150,
            title: "Cabang",
            dataIndex: "Cabang",
            render: (row) => {
                const temp = catBranch.find((el) => el.name.toLowerCase().includes(row.toLowerCase()))
                if (temp) {
                    return row
                } else {
                    console.log(row);
                    return <div className="bg-danger">{row}</div>
                }
            }
        },
        {
            width: 150,
            title: "Bagian",
            dataIndex: "Bagian"
        },
    ]);

    const [dataSource, setDataSource] = useState([]);
    const [dataPayload, setDataPayload] = useState([]);

    const handleSubmit = () => {
        const promises = dataPayload.map((al, idx) => {
            return dispatch(createOrUpdateStaff(al.request, al.branchId))
        });

        Promise.all(promises)
            .then(results => {
                let temps = {};
                results.forEach((el) => {
                    if (!temps[el.branchId]) temps[el.branchId] = [];
                    temps[el.branchId].push(el.id)
                })

                console.log(temps);
                console.log("requests completed successfully:", results);
            })
            .catch(error => {
                console.error("at least one request failed:", error);
            });
    };

    /* Function */

    /* componentDidMount and componentDidUpdate */

    return (
        <Layout>
            <Content className="p-3 min-vh-100 bg-primary">
                <div
                    style={{ height: height - 50 }}
                    className="ant-layout-card">
                    <Table
                        rowKey="NIP"
                        size="small"
                        columns={dataColumn}
                        loading={false}
                        pagination={false}
                        scroll={{ y: height - 150 }}
                        dataSource={dataSource}
                        title={() => (
                            <Space>
                                <Import
                                    disabled={catBranch.length < 0}
                                    onChange={(column, data) => {
                                        let temps = [];
                                        data.forEach((el) => {
                                            const branch = catBranch.find((ol) => ol.name.toLowerCase().includes(el["Cabang"].toLowerCase()));

                                            let payload = {
                                                status: 1,
                                                username: el["NIP"],
                                                fullName: el["Nama Pegawai"],
                                                level: el["Bagian"],
                                            };

                                            const operation = "c";
                                            const request = {
                                                token,
                                                operation,
                                                content: encrypt({
                                                    clientKey,
                                                    sharedKey,
                                                    payload,
                                                })
                                            }

                                            temps.push({ request, branchId: branch.id });
                                        })

                                        setDataPayload(temps)
                                        setDataSource(data);
                                    }}
                                />
                                <Button
                                    type="primary"
                                    icon={<SendOutlined />}
                                    onClick={handleSubmit}>
                                    Submit
                                </Button>
                            </Space>
                        )}
                    />
                </div>
            </Content>
        </Layout>
    )
}