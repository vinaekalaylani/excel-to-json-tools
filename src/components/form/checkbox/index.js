import { Form, Checkbox } from "antd";

export default function CheckboxComp(props) {
    const { placeholder, ...rest } = props;

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
            <Checkbox>
                {placeholder}
            </Checkbox>
        </Form.Item>
    )
}