import React, { useEffect, useState } from "react";
import DataTable from "datatables.net-react";
import DT from "datatables.net-dt";

function DashboardAdmin() {
    DataTable.use(DT);
    const [dataTable, setDataTable] = useState([
        ["Nguyen Van A", "ABC Company", "$1000", "2023-10-01", "Completed"],
        ["Nguyen Van B", "XYZ Company", "$2000", "2023-10-02", "New"],
        ["Nguyen Van C", "DEF Company", "$1500", "2023-10-03", "In-progress"],
        ["Nguyen Van D", "GHI Company", "$2500", "2023-10-04", "Completed"],
        ["Nguyen Van E", "JKL Company", "$3000", "2023-10-05", "Completed"],
        ["Nguyen Van F", "MNO Company", "$1200", "2023-10-06", "New"],
        ["Nguyen Van G", "PQR Company", "$1800", "2023-10-07", "In-progress"],
        ["Nguyen Van H", "STU Company", "$2200", "2023-10-08", "Completed"],
        ["Nguyen Van I", "VWX Company", "$2800", "2023-10-09", "Completed"],
        ["Nguyen Van J", "YZA Company", "$3500", "2023-10-10", "New"],
        ["Nguyen Van K", "BCD Company", "$4000", "2023-10-11", "In-progress"],
        ["Nguyen Van L", "EFG Company", "$1600", "2023-10-12", "Completed"],
        ["Nguyen Van M", "HIJ Company", "$2400", "2023-10-13", "Completed"],
        ["Nguyen Van N", "KLM Company", "$3000", "2023-10-14", "New"],
        ["Nguyen Van O", "NOP Company", "$1300", "2023-10-15", "In-progress"],
    ]);
    useEffect(() => {
        document.querySelectorAll("tbody tr td:last-child").forEach((td) => {
            const status = td.innerText.toLowerCase();
            td.classList.remove(
                "text-green-700",
                "bg-green-100/50",
                "text-blue-700",
                "bg-blue-100/50",
                "text-yellow-700",
                "bg-yellow-100/50"
            );
            if (status === "completed") {
                td.classList.add("text-green-700", "bg-green-100/50");
            } else if (status === "new") {
                td.classList.add("text-blue-700", "bg-blue-100/50");
            } else if (status === "in-progress") {
                td.classList.add("text-yellow-700", "bg-yellow-100/50");
            }
        });
    }, []);
    return (
        <div className="p-6 w-full">
            <DataTable data={dataTable} className="w-full">
                <thead>
                    <tr>
                        <th>CUSTOMER NAME</th>
                        <th>COMPANY</th>
                        <th>ORDER VALUE</th>
                        <th>ORDER DATE</th>
                        <th>STATUS</th>
                    </tr>
                </thead>
            </DataTable>
        </div>
    );
}

export default DashboardAdmin;
