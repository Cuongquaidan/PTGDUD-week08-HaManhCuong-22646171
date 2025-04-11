import React, { useEffect, useState } from "react";
import DataTable from "datatables.net-react";
import DT from "datatables.net-dt";
import { CgFileDocument } from "react-icons/cg";
export const columns = [
    "CUSTOMER NAME",
    "COMPANY",
    "ORDER VALUE",
    "ORDER DATE",
    "STATUS",
];

function DashboardAdmin() {
    DataTable.use(DT);
    const [dataTable, setDataTable] = useState([]);
    const [dataTableNoID, setDataTableNoID] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [showAddModal, setShowAddModal] = useState(false);
    const [editedRowData, setEditedRowData] = useState(null);

    const fetchData = async () => {
        const response = await fetch("http://localhost:3000/table");
        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }
        const resjson = await response.json();
        setDataTable(resjson);
        setDataTableNoID(resjson.map((item) => item.row));
    };
    const handleUpdate = (id) => {
        fetch("http://localhost:3000/table/" + id, {
            method: "PATCH",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(editedRowData),
        });
        setEditedRowData(null);
        fetchData();
        setShowModal(false);
    };
    const handleAdd = () => {
        fetch("http://localhost:3000/table", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({
                row: editedRowData.row,
                id: Math.floor(Math.random() * 10000),
            }),
        });
        setEditedRowData(null);
        fetchData();
        setShowAddModal(false);
    };
    useEffect(() => {
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
        document.querySelectorAll("tbody tr").forEach((tr, index) => {
            const td = document.createElement("td");

            const button = document.createElement("button");
            button.textContent = "Edit";
            button.classList.add(
                "bg-primary",
                "cursor-pointer",
                "text-white",
                "font-medium",
                "py-1",
                "px-3",
                "rounded",
                "transition",
                "duration-200",
                "text-sm"
            );
            button.onclick = () => {
                setEditedRowData(dataTable[index]);
                setShowModal(true);
            };

            td.classList.add("text-center", "ml-4");
            td.appendChild(button);
            tr.appendChild(td);
        });
    }, [dataTable]);
    return (
        <div className="p-6 w-full">
            <div className="flex justify-between items-center mb-4 border-b border-primary pb-4">
                <div className="flex gap-2 items-center">
                    <CgFileDocument
                        size={30}
                        className="text-primary "
                    ></CgFileDocument>
                    <h2 className="text-2xl font-bold ">Detailed report</h2>
                </div>
                <button
                    className="bg-primary font-bold text-white px-4 py-1 rounded cursor-pointer"
                    onClick={() => {
                        setEditedRowData({ row: ["", "", "", "", ""] });
                        setShowAddModal(true);
                    }}
                >
                    Add customer
                </button>
            </div>
            <DataTable data={dataTableNoID} className="w-full">
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
            {showModal && editedRowData && (
                <div className="fixed inset-0 z-50  flex items-center justify-center">
                    <div
                        className="fixed inset-0 z-40 bg-black/30 w-screen h-screen"
                        onClick={(e) => {
                            e.stopPropagation();
                            setShowModal(false);
                        }}
                    ></div>
                    <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg relative z-50">
                        <button
                            className="absolute top-2 right-2 text-gray-500  rounded-full bg-primary/80 flex items-center justify-center text-white font-bold h-10 w-10 text-lg cursor-pointer"
                            onClick={() => setShowModal(false)}
                        >
                            <p>x</p>
                        </button>

                        <h2 className="text-xl font-semibold mb-4 text-center">
                            Update
                        </h2>

                        <div className="space-y-3">
                            {editedRowData.row.map((value, idx) => (
                                <div key={idx}>
                                    <label className="block text-sm font-medium text-gray-600">
                                        {columns[idx]}
                                    </label>
                                    <input
                                        value={value}
                                        onChange={(e) => {
                                            const newRow = [
                                                ...editedRowData.row,
                                            ];
                                            newRow[idx] = e.target.value;
                                            setEditedRowData({
                                                ...editedRowData,
                                                row: newRow,
                                            });
                                        }}
                                        className="w-full border border-gray-300 px-3 py-1 rounded"
                                    />
                                </div>
                            ))}
                        </div>

                        <div className="mt-6 flex justify-end space-x-2 ">
                            <button
                                onClick={() => {
                                    handleUpdate(editedRowData.id);
                                }}
                                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded cursor-pointer"
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            )}
            {showAddModal && (
                <div className="fixed inset-0 z-50  flex items-center justify-center">
                    <div
                        className="fixed inset-0 z-40 bg-black/30 w-screen h-screen"
                        onClick={(e) => {
                            e.stopPropagation();
                            setShowAddModal(false);
                        }}
                    ></div>
                    <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg relative z-50">
                        <button
                            className="absolute top-2 right-2 text-gray-500  rounded-full bg-primary/80 flex items-center justify-center text-white font-bold h-10 w-10 text-lg cursor-pointer"
                            onClick={() => setShowAddModal(false)}
                        >
                            <p>x</p>
                        </button>

                        <h2 className="text-xl font-semibold mb-4 text-center">
                            Add customer
                        </h2>

                        <div className="space-y-3">
                            {editedRowData.row.map((value, idx) => (
                                <div key={idx}>
                                    <label className="block text-sm font-medium text-gray-600">
                                        {columns[idx]}
                                    </label>
                                    <input
                                        value={value}
                                        onChange={(e) => {
                                            const newRow = [
                                                ...editedRowData.row,
                                            ];
                                            newRow[idx] = e.target.value;
                                            setEditedRowData({
                                                ...editedRowData,
                                                row: newRow,
                                            });
                                        }}
                                        className="w-full border border-gray-300 px-3 py-1 rounded"
                                    />
                                </div>
                            ))}
                        </div>

                        <div className="mt-6 flex justify-end space-x-2 ">
                            <button
                                onClick={() => {
                                    handleAdd();
                                }}
                                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded cursor-pointer"
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default DashboardAdmin;
