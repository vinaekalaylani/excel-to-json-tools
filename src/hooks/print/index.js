import "jspdf-autotable";
import jsPDF from "jspdf";

export default function usePrint(props) {
	const { name, headers, datas } = props;
	/* Store Data */
	/* ----- */

	/* Hooks */
	/* ----- */

	/* Variable Constant */
	/* ----- */

	/* Variable State */
	/* ----- */

	/* Function */
	const csv = () => {
		const colums = [...headers, ...datas].map((el) => Object.values(el));

		let csvContent = "data:text/csv;charset=utf-8," +
			colums.map(e => e.join(",")).join("\n");

		const encodedUri = encodeURI(csvContent);
		const link = document.createElement("a");
		link.setAttribute("href", encodedUri);
		link.setAttribute("download", name + ".csv");
		document.body.appendChild(link);

		link.click();
	}

	const print = () => {
		const pdfContent = new jsPDF("p", "pt", "a4");
		const columns = headers.map((el) => ({ header: el.label, dataKey: el.key }));

		pdfContent.autoTable(columns, datas, {
			theme: "grid",
			styles: {
				font: "times",
				halign: "center",
				cellPadding: 3.5,
				lineWidth: 0.5,
				lineColor: [0, 0, 0],
				textColor: [0, 0, 0],
			},
			headStyles: {
				textColor: [0, 0, 0],
				fontStyle: "normal",
				lineWidth: 0.5,
				lineColor: [0, 0, 0],
				fillColor: [166, 204, 247],
			},
			alternateRowStyles: {
				fillColor: [212, 212, 212],
				textColor: [0, 0, 0],
				lineWidth: 0.5,
				lineColor: [0, 0, 0],
			},
			rowStyles: {
				lineWidth: 0.5,
				lineColor: [0, 0, 0],
			},
			tableLineColor: [0, 0, 0],
		});
		pdfContent.save(name);
	}

	/* componentDidMount and componentDidUpdate */
	/* ----- */


	return { csv, print }
}

