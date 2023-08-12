import React, { useContext, useEffect, useState } from "react";

import { useNavigate } from "react-router";
import { DataContext } from "../../App";

const NewProduct = () => {
    // const [open, setOpen] = React.useState(false);
    // const handleOpen = () => setOpen(true);
    // const handleClose = () => setOpen(false);

    const { ProductData, setProductsData } = useContext(DataContext);

    const navigate = useNavigate();

    const [newProduct, setNewProduct] = useState({
        id: ProductData.length + 1,
        department: "",
        name: "",
        description: "",
        price: 0,
        stock: 0,
        sku: "",
        supplier: "",
        delivered: 0,
        imageUrl: "",
    });

    const condition =
        newProduct.department === "" ||
        newProduct.name === "" ||
        newProduct.description === "" ||
        newProduct.sku === "" ||
        newProduct.supplier === "" ||
        newProduct.imageUrl === "" ||
        newProduct.price === 0;

    const handleSubmit = () => {
        if (condition) {
            alert("Kindly please fill in all the details");
        } else {
            setProductsData((prev) => [...prev, newProduct]);
            setNewProduct((prev) => ({
                ...prev,
                department: "",
                name: "",
                description: "",
                price: 0,
                stock: 0,
                sku: "",
                supplier: "",
                delivered: 0,
                imageUrl: "",
            }));
        }
    };

    useEffect(() => {
        console.log("newProduct", newProduct);
    }, [newProduct]);

    return (
        <div className="departments_wrapper">
            <div className="form">
                <div className="form_input">
                    <label htmlFor="dept">Department:</label>

                    <select
                        name="dept"
                        id="dept"
                        className="dropdowns"
                        value={newProduct.department}
                        onChange={(e) =>
                            setNewProduct((prev) => ({
                                ...prev,
                                department: e.target.value,
                            }))
                        }
                    >
                        <option defaultValue="none">Select Department</option>
                        <option value="kitchen">Kitchen</option>
                        <option value="clothing">Clothing</option>
                        <option value="toys">Toys</option>
                    </select>
                </div>
                <div className="form_input">
                    <label htmlFor="dept">Name:</label>

                    <input
                        id="filled-basic city"
                        variant="outlined"
                        required
                        size="small"
                        value={newProduct.name}
                        onChange={(e) =>
                            setNewProduct((prev) => ({
                                ...prev,
                                name: e.target.value,
                            }))
                        }
                    />
                </div>
                <div className="form_input">
                    <label htmlFor="dept">Desciption:</label>

                    <input
                        id="filled-basic city"
                        variant="outlined"
                        required
                        size="small"
                        value={newProduct.description}
                        onChange={(e) =>
                            setNewProduct((prev) => ({
                                ...prev,
                                description: e.target.value,
                            }))
                        }
                    />
                </div>
                <div className="form_input">
                    <label htmlFor="dept">Price:</label>

                    <input
                        id="filled-basic city"
                        variant="outlined"
                        required
                        size="small"
                        value={newProduct.price}
                        onChange={(e) =>
                            setNewProduct((prev) => ({
                                ...prev,
                                price: e.target.value,
                            }))
                        }
                    />
                </div>
                <div className="form_input">
                    <label htmlFor="dept">Stock:</label>

                    <input
                        id="filled-basic city"
                        variant="outlined"
                        required
                        size="small"
                        value={newProduct.stock}
                        onChange={(e) =>
                            setNewProduct((prev) => ({
                                ...prev,
                                stock: e.target.value,
                            }))
                        }
                    />
                </div>
                <div className="form_input">
                    <label htmlFor="dept">SKU:</label>

                    <input
                        id="filled-basic city"
                        variant="outlined"
                        required
                        size="small"
                        value={newProduct.sku}
                        onChange={(e) =>
                            setNewProduct((prev) => ({
                                ...prev,
                                sku: e.target.value,
                            }))
                        }
                    />
                </div>
                <div className="form_input">
                    <label htmlFor="dept">Supplier:</label>

                    <input
                        id="filled-basic city"
                        variant="outlined"
                        required
                        size="small"
                        value={newProduct.supplier}
                        onChange={(e) =>
                            setNewProduct((prev) => ({
                                ...prev,
                                supplier: e.target.value,
                            }))
                        }
                    />
                </div>
                <div className="form_input">
                    <label htmlFor="dept">Delivered:</label>

                    <input
                        id="filled-basic city"
                        variant="outlined"
                        required
                        size="small"
                        value={newProduct.delivered}
                        onChange={(e) =>
                            setNewProduct((prev) => ({
                                ...prev,
                                delivered: e.target.value,
                            }))
                        }
                    />
                </div>
                <div className="form_input">
                    <label htmlFor="dept">Image URL:</label>

                    <input
                        id="filled-basic city"
                        variant="outlined"
                        required
                        size="small"
                        value={newProduct.imageUrl}
                        onChange={(e) =>
                            setNewProduct((prev) => ({
                                ...prev,
                                imageUrl: e.target.value,
                            }))
                        }
                    />
                </div>
                <div className="btns">
                    <button onClick={() => handleSubmit()}>Add Product</button>
                    <button onClick={() => navigate("/products")}>
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NewProduct;
