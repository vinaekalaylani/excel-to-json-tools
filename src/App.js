import { Outlet, useRoutes } from "react-router-dom";

import useWindowSize from "hooks/window-size";

import Page from "./pages";

import { ConfigProvider, message } from "antd";
import StaffPage from "pages/staff";

export default function App() {
	/* Store Data */
	/* ----- */

	/* Hooks */
	const [messageApi, contextHolder] = message.useMessage();

	const { height, width } = useWindowSize();

	/* Variable State */
	/* ----- */

	/* Variable Constant */
	/* ----- */

	/* Function */
	const notif = (content, type = "failed") => {
		messageApi.open({
			type,
			content,
		});
	};

	/* componentDidMount and componentDidUpdate */
	/* ----- */

	const element = useRoutes([
		{
			path: "/",
			element: (
				<Page
					height={height}
					width={width}
					notif={notif}>
					<Outlet />
				</Page>
			)
		},
		{
			path: "/user",
			element: (
				<StaffPage
					height={height}
					width={width}
					notif={notif}>
					<Outlet />
				</StaffPage>
			)
		},
	])

	return (
		<ConfigProvider
			theme={{
				"token": {
					"colorPrimary": "#5c69c5",
					"colorInfo": "#5c69c5",
				},
				"components": {
					"Menu": {
						"algorithm": true,
						"itemBg": "rgb(20, 24, 41)",
						"itemSelectedBg": "rgb(33, 39, 65)",
						"itemColor": "rgba(183, 183, 183, 0.88)",
						"itemActiveBg": "rgb(37, 44, 76)",
						"itemSelectedColor": "rgb(255, 255, 255)",
						"itemHoverColor": "rgba(207, 207, 207, 0.88)",
						"itemHoverBg": "rgb(33, 39, 65)",
						"groupTitleColor": "rgb(183, 183, 183)",
						"colorPrimaryBorder": "rgba(255, 255, 255, 0)",
						"itemMarginInline": 8,
						"itemHeight": 33,
					},
					"Table": {
						"algorithm": true,
						"headerColor": "rgb(53, 53, 53)",
						"fontSize": 13,
					}
				}
			}}>
			{contextHolder}
			{element}
		</ConfigProvider>
	);
};
