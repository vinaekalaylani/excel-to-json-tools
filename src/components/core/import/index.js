import { UploadOutlined } from "@ant-design/icons";
import { Button, Upload } from "antd";

export default function Import(props) {
    const { disabled, onChange } = props;

    /* Store Data */
    /* ----- */

    /* Hooks */
    /* ----- */

    /* Constant */
    function parseCSVLine(line) {
        let insideQuotes = false;
        let field = '';
        const fields = [];
    
        for (let i = 0; i < line.length; i++) {
            const char = line[i];
    
            if (char === '"') {
                insideQuotes = !insideQuotes;
            } else if (char === ',' && !insideQuotes) {
                fields.push(field.trim());
                field = '';
            } else {
                field += char;
            }
        }
    
        fields.push(field.trim()); // Add the last field
    
        return fields;
    }

    const rest = {
        multiple: false,
        showUploadList: false,
        maxCount: 1,
        accept: ".csv",
        beforeUpload: () => false,
        onChange: (e) => {
            const { file } = e;
            let reader = new FileReader();
            reader.readAsText(file);
            reader.onload = () => {
                const datas = reader.result.split("\n");
                const headers = datas[0].split(",");

                let arrCol = [];
                for (const index in headers) {
                    let objJson = {
                        width: 150,
                        title: headers[index],
                        dataIndex: headers[index],
                    };

                    arrCol.push(objJson);
                }
                
                let arrJson = [];
                for (const index in datas) {
                    if (index !== "0") {
                        const data = parseCSVLine(datas[index]);

                        let objJson = {};
                        for (const index2 in headers) {
                            objJson[headers[index2]] = data[index2]
                        }

                        arrJson.push(objJson)
                    }
                }

                onChange(arrCol, arrJson)
            };
            reader.onerror = (error) => console.log(error);
        }
    };

    /* State */
    /* ----- */

    /* Function */
    /* ----- */

    /* componentDidMount and componentDidUpdate */
    /* ----- */

    return (
        <Upload {...rest}>
            <Button disabled={disabled} icon={<UploadOutlined />}>
                Import
            </Button>
        </Upload>
    )
}