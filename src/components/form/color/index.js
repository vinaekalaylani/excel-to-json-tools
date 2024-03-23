import { Form, ColorPicker } from "antd";

export default function ColorComp(props) {
    const { onChange, ...rest } = props;

    /* Store Data */
    /* ----- */

    /* Hooks */
    /* ----- */

    /* Constant */
    /* ----- */

    /* Variable State */
    /* ----- */

    /* Function */
    /* ----- */

    /* componentDidMount and componentDidUpdate */
    /* ----- */

    return (
        <Form.Item {...rest}>
            <ColorPicker
                showText
                format="hex"
                onChange={(target) => onChange(
                    typeof target !== "string" ?
                        target?.toHexString() :
                        target
                )}
            />
        </Form.Item>
    )
}