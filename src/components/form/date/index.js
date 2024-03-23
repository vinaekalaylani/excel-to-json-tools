import { DatePicker, Form } from "antd";

export default function DateComp(props) {
    const { disabled, inputReadOnly, variant, ...rest } = props;

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
        <Form.Item {...rest}>
            <DatePicker
                format="YYYY-MM-DD"
                allowClear={false}
                inputReadOnly={inputReadOnly}
                open={inputReadOnly ? false : undefined}
                disabled={disabled}
                className="w-100"
                variant={variant || "filled"}
            />
        </Form.Item>
    )
}