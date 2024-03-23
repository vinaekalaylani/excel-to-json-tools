import usePrint from "hooks/print";

import { DownloadOutlined } from "@ant-design/icons";
import { Button, Dropdown } from "antd";

export default function Export(props) {
	const { label, name, datas: [], headers: [] } = props;

	/* Store Data */
	/* ----- */

	/* Hooks */
	const { csv, print } = usePrint({
		name,
		headers,
		datas,
	})

	/* Variable Constant */
	const items = [
		{
			key: "1",
			label: "CSV",
			onClick: () => csv(),
		},
		{
			key: "2",
			label: "PDF",
			onClick: () => print(),
		},
	];

	/* Variable State */
	/* ----- */

	/* Function */
	/* ----- */

	/* componentDidMount and componentDidUpdate */
	/* ----- */

	return (
		<Dropdown
			arrow
			menu={{ items }}
			trigger={["click"]}>
			<Button
				icon={<DownloadOutlined />}
				className="mx-2">
				{label}
			</Button>
		</Dropdown>
	)
}