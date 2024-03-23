import { Form, Input } from "antd";
const { TextArea } = Input;

export default function TextAreaComp(props) {
    const { placeholder, readOnly, ...rest } = props;

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
            <TextArea
                readOnly={readOnly}
                rows={3}
                variant="filled"
                placeholder={placeholder || ""}
            />
        </Form.Item>
    )
}