import { Form, TimePicker } from "antd";

export default function TimeComp(props) {
    const { disabled, inputReadOnly, value, ...rest } = props;

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
            <TimePicker
                disabled={disabled}
                allowClear={false}
                inputReadOnly={inputReadOnly}
                open={inputReadOnly ? false : undefined}
                format="HH:mm"
                variant="filled"
                className="w-100"
                minuteStep={15}
            />
        </Form.Item>
    )
}