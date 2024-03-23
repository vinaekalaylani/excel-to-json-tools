import { Form, Select } from "antd";
const { Option } = Select;

export default function SelectComp(props) {
    const {
        style,
        disabled,
        onChange,
        datas,
        placeholder,
        ...rest
    } = props;

    /* Store Data */
    /* ----- */

    /* Hooks */
    /* ----- */

    /* Constant */
    /* ----- */

    /* State */
    /* ----- */

    /* Function */
    const generateOption = () => {
        let res = [];

        for (const index in datas) {
            res.push(<Option
                key={index}
                value={datas[index].value}
                disabled={datas[index].disabled}>
                {datas[index].label}
            </Option>)
        }

        return res
    }

    /* componentDidMount and componentDidUpdate */
    /* ----- */


    return (
        <Form.Item {...rest}>
            <Select
                style={style}
                placeholder={placeholder}
                disabled={disabled}
                showSearch
                className="w-100"
                variant="filled"
                optionFilterProp="children"
                onChange={onChange}
                filterOption={(input, option) => {
                    if (option?.children?.props?.temp) {
                        return option?.children?.props?.temp.toLowerCase().includes(input.toLowerCase())
                    } else {
                        return option.children.toLowerCase().includes(input.toLowerCase())
                    }
                }}
            >
                {generateOption()}
            </Select>
        </Form.Item>
    )
}