import { PlusOutlined, CloseOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";

export default function InputListComp(props) {
    // const { data, name, label, classSelect, rules } = props;
    const {
        data,
        size,
        disabled,
        prefix,
        placeholder,
        label,
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
    /* ----- */

    /* componentDidMount and componentDidUpdate */
    /* ----- */

    return (
        <Form.List {...rest} >
            {(fields, { add, remove }) => (
                <>
                    {fields.map(({ key, name, ...restField }) => (
                        <div
                            key={key}
                            className="d-flex">
                            <Form.Item
                                {...restField}
                                rules={[
                                    ...rules,
                                    () => ({
                                        validator(_, value) {
                                            if (data.filter((el) => el === value).length > 1) {
                                                return Promise.reject(new Error(label + " must be unique"));
                                            }

                                            return Promise.resolve();
                                        },
                                    }),
                                ]}
                                className={classSelect}
                                style={{ marginBottom: "0.8rem" }}>
                                <Input />
                            </Form.Item>
                            <Button
                                className="ms-2"
                                onClick={() => remove(name)}
                                icon={<CloseOutlined className="mx-2" />}
                            />
                        </div>
                    ))}
                    <Form.Item>
                        <Button
                            type="dashed"
                            block
                            onClick={() => add()}
                            icon={<PlusOutlined />}>
                            Add
                        </Button>
                    </Form.Item>
                </>
            )}

        </Form.List>
    )
}