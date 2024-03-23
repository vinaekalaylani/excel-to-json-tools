import { Form, Input } from "antd";

export default function InputComp(props) {
    const {
        size,
        disabled,
        prefix,
        placeholder,
        variant,
        addonBefore,
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
        <Form.Item {...rest}>
            <Input
                size={size}
                disabled={disabled}
                placeholder={placeholder}
                prefix={prefix}
                addonBefore={addonBefore}
                variant={variant || "filled"}
            />
        </Form.Item>
    )
}