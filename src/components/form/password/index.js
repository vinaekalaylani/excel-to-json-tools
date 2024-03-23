import { Button, Form, Input, Space } from "antd";

export default function PasswordComp(props) {
    const {
        size,
        disabled,
        prefix,
        placeholder,
        variant,

        form,
        change,
        isChange,
        setIsChange,

        advanceRules,
        rules,
        ...rest
    } = props;

    /* Store Data */
    /* ----- */

    /* Hooks */
    /* ----- */

    /* Constant */
    const advance = [
        { min: 8, message: "Password must be minimum 8 characters." },
        { max: 30, message: "Password must be maximum 30 characters." },
        () => ({
            validator(_, value) {
                let errors = [];

                if (!/[a-z]/.test(value)) {
                    errors.push("Lower Case [a - z]")
                }

                if (!/[A-Z]/.test(value)) {
                    errors.push("Upper Case [A - Z]")
                }

                if (!/[0-9 ]/.test(value)) {
                    errors.push("Number [0 - 9]")
                }

                if (!/[^A-Z a-z0-9]/.test(value)) {
                    errors.push("Symbol [!@#$%^&*]!")
                }

                if (errors.length < 1) {
                    return Promise.resolve();
                }

                return Promise.reject(new Error("Password must containt " + errors.join(", ")));
            },
        }),
        ...rules,
    ]

    /* State */
    /* ----- */

    /* Function */
    const generateComp = () => {
        let comp = <div></div>

        if (change) {
            if (isChange) {
                comp = <Space.Compact block>
                    <Input
                        style={{ width: "100%" }}
                        variant={variant || "filled"}
                    />
                    <Button
                        onClick={() => {
                            setIsChange(false)
                            form.setFieldsValue({ pw: "***oldpassword***" })
                        }}>
                        Cancel
                    </Button>
                </Space.Compact>
            } else {
                comp = <Button
                    disabled={disabled}
                    type="primary"
                    onClick={() => setIsChange(true)}>
                    Change Password
                </Button>
            }
        } else {
            comp = <Input.Password
                size={size}
                prefix={prefix}
                placeholder={placeholder}
                variant={variant || "filled"}
            />
        }

        return comp
    }

    /* componentDidMount and componentDidUpdate */
    /* ----- */

    return (
        <Form.Item
            {...rest}
            rules={advanceRules ? advance : rules}>
            {generateComp()}
        </Form.Item >
    )
}