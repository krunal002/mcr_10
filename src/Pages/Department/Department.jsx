import "./Department.css"
import React, { useContext } from "react";

import { useNavigate } from "react-router";
import { DataContext } from "../../App";

const Department = () => {
    const { setFilters } = useContext(DataContext);
    const navigate = useNavigate();

    return (
        <div className="departments_wrapper">
            <div className="dept_cards_container">
                <div
                    className="dept-cont"
                    onClick={() => {
                        navigate("/products");
                        setFilters((prev) => ({
                            ...prev,
                            dept_type: "kitchen",
                        }));
                    }}
                >
                    Kitchen
                </div>
                <div
                    className="dept-cont"
                    onClick={() => {
                        navigate("/products");
                        setFilters((prev) => ({
                            ...prev,
                            dept_type: "clothing",
                        }));
                    }}
                >
                    Clothing
                </div>
                <div
                    className="dept-cont"
                    onClick={() => {
                        navigate("/products");
                        setFilters((prev) => ({
                            ...prev,
                            dept_type: "toys",
                        }));
                    }}
                >
                    Toys
                </div>
            </div>
        </div>
    );
};

export default Department;