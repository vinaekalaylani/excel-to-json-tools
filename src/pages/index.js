import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Import from "components/core/import";

import { SendOutlined } from "@ant-design/icons";
import { Button, Layout, Space, Table } from "antd";
import { createOrUpdateMachine } from "store/actions/app";
import { encrypt } from "utils/tools/cryptojs";
const { Content } = Layout;

export default function Page(props) {
    const { height } = props;
    const { token, clientKey, sharedKey } = localStorage;

    /* Store Data */
    const { catState, catCity, catBranch, catClient, catMachineBrand, catMachineType } = useSelector((state) => state.app);

    /* Hooks */
    const dispatch = useDispatch();

    /* Constant */
    /* ----- */

    /* State */
    const [dataColumn] = useState([
        {
            width: 150,
            title: "No.",
            dataIndex: "No."
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
            title: "Client",
            dataIndex: "Client"
        },
        {
            width: 150,
            title: "WSID",
            dataIndex: "WSID"
        },
        {
            width: 150,
            title: "Serial Number",
            dataIndex: "Serial Number"
        },
        {
            width: 150,
            title: "ATM/CRM/CDM",
            dataIndex: "ATM/CRM/CDM"
        },
        {
            width: 150,
            title: "Machine Brand",
            dataIndex: "Machine Brand",
            render: (row) => {
                const temp = catMachineBrand.find((el) => el.name.toLowerCase().includes(row.toLowerCase()))
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
            title: "Machine Model",
            dataIndex: "Machine Model"
        },
        {
            width: 150,
            title: "Nama Lokasi",
            dataIndex: "Nama Lokasi"
        },
        {
            width: 150,
            title: "Jam Operasional",
            dataIndex: "Jam Operasional"
        },
        {
            width: 150,
            title: "Latitude",
            dataIndex: "Latitude"
        },
        {
            width: 150,
            title: "Longitude",
            dataIndex: "Longitude"
        },
        {
            width: 300,
            title: "Alamat",
            dataIndex: "Alamat"
        },
        {
            width: 150,
            title: "Kode Pos",
            dataIndex: "Kode Pos"
        },
        {
            width: 150,
            title: "Provinsi",
            dataIndex: "Provinsi",
            render: (row) => {
                const temp = catState.find((el) => el.name.toLowerCase().includes(row.toLowerCase()))
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
            title: "Kota/Kabupaten",
            dataIndex: "Kota/Kabupaten",
            render: (row) => {
                const temp = catCity.find((el) => el.name.toLowerCase().includes(row.toLowerCase()))
                if (temp) {
                    return row
                } else {
                    console.log(row);
                    return <div className="bg-danger">{row}</div>
                }
            }
        }
    ]);
    const [dataSource, setDataSource] = useState([]);
    const [payloads, setDataPayloads] = useState([]);

    const handleSubmit = () => {
        const promises = payloads.map((al, idx) => {
            return dispatch(createOrUpdateMachine(al))
        });

        Promise.all(promises)
            .then(results => {
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
                        rowKey="No."
                        size="small"
                        columns={dataColumn}
                        loading={false}
                        pagination={false}
                        scroll={{ y: height - 150 }}
                        dataSource={dataSource}
                        title={() => (
                            <Space>
                                <Import
                                    disabled={catBranch.length < 0 && catCity.length < 0 && catState.length < 0}
                                    onChange={(column, data) => {
                                        let temps = [];
                                        data.forEach((el) => {
                                            const type = catMachineType.find((ol) => ol.name.toLowerCase().includes(el["ATM/CRM/CDM"].toLowerCase()));
                                            const brand = catMachineBrand.find((ol) => ol.name.toLowerCase().includes(el["Machine Brand"].toLowerCase()));
                                            const state = catState.find((ol) => ol.name.toLowerCase().includes(el["Provinsi"].toLowerCase()));
                                            const city = catCity.find((ol) => ol.name.toLowerCase().includes(el["Kota/Kabupaten"].toLowerCase()));
                                            const branch = catBranch.find((ol) => ol.name.toLowerCase().includes(el["Cabang"].toLowerCase()));
                                            const client = catClient.find((ol) => ol.code.toLowerCase().includes(el["Client"].toLowerCase()));

                                            let payload = {
                                                status: 1,
                                                sn: el["Serial Number"],
                                                code: el["WSID"],
                                                name: el["Nama Lokasi"],
                                                latitude: Number(el["Latitude"]),
                                                longitude: Number(el["Longitude"]),
                                                address: el["Alamat"],
                                                postcode: el["Kode Pos"],
                                                machineType: type.id,
                                
                                                machineBrand: { id: brand.id },
                                                state: { id: state.id },
                                                city: { id: city.id },
                                                branch: { id: branch.id },
                                                client: { id: client.id },
                                            };
                                
                                
                                            if (el["Jam Operasional"] !== "" && el["Jam Operasional"] !== "NON 24 JAM" && el["Jam Operasional"] !== "2 Shift") {
                                                let timeTemp = el["Jam Operasional"];
                                
                                                if (timeTemp === "24 JAM " || timeTemp === "24 JAM" || timeTemp === "25 JAM" || timeTemp === "24 Jam" || timeTemp === "24 jam") {
                                                    timeTemp = "00:00 - 23:59";
                                                }
                                
                                                let time = timeTemp.replace('s.d','-').split("-");
                                                console.log(time);
                                                payload["opTimeStart"] = time[0].replace(' WIB','').trim();
                                                payload["opTimeEnd"] = time[1].replace(' WIB','').trim();
                                            }
                                
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
                                
                                            temps.push(request);
                                        })

                                        setDataPayloads(temps)
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