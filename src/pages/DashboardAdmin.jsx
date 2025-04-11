import React, { useEffect, useState } from "react";
import DataTable from "datatables.net-react";
import DT from "datatables.net-dt";

function DashboardAdmin() {
    DataTable.use(DT);
    const [dataTable, setDataTable] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("http://localhost:3000/table");
            if (!response.ok) {
                throw new Error("Failed to fetch data");
            }
            const resjson = await response.json();
            setDataTable(resjson);
        };
        fetchData();
    }, []);
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
