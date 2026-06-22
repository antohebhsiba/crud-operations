import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [editingId, setEditingId] = useState(null);
  const fetchProducts = () => {
    axios
      .get("https://api.restful-api.dev/objects")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  const addProduct = () => {
    if (!name || !price) {
      alert("Please enter name and price");
      return;
    }

    axios
      .post("https://api.restful-api.dev/objects", {
        name,
        data: {
          price,
        },
      })
      .then((res) => {
        console.log("Added:", res.data);

        alert("Product Added Successfully");

        setName("");
        setPrice("");
        setEditingId(null);

        fetchProducts();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const editProduct = (item) => {
    setEditingId(item.id);
    setName(item.name);
    setPrice(item.data?.price || "");
  };
  const updateProduct = () => {
    if (!editingId) {
      alert("No product selected");
      return;
    }

    axios
      .put(`https://api.restful-api.dev/objects/${editingId}`, {
        name,
        data: {
          price,
        },
      })
      .then((res) => {
        console.log("Updated:", res.data);

        alert("Updated Successfully");

        setEditingId(null);
        setName("");
        setPrice("");

        fetchProducts();
      })
      .catch((err) => {
        console.log(err);

        alert(
          "Update failed."
        );
      });
  };
  const deleteProduct = (id) => {
    axios
      .delete(`https://api.restful-api.dev/objects/${id}`)
      .then(() => {
        alert("Deleted Successfully");

        fetchProducts();
      })
      .catch((err) => {
        console.log(err);

        alert(
          "Delete failed."
        );
      });
  };

  return (
    <div className="container">
      <h1>CRUD Operations</h1>

      <div className="form">
        <input
          type="text"
          placeholder="Enter Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Enter Product Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        {editingId ? (
          <button onClick={updateProduct}>
            Update Product
          </button>
        ) : (
          <button onClick={addProduct}>
            Add Product
          </button>
        )}
      </div>

      <div className="cards">
        {products.map((item) => (
          <div className="card" key={item.id}>
            <h2>{item.name}</h2>

            <p>
              <strong>ID:</strong> {item.id}
            </p>

            <p>
              <strong>Price:</strong>{" "}
              {item.data?.price || "Not Available"}
            </p>

            <div className="btns">
              <button
                className="edit"
                onClick={() => editProduct(item)}
              >
                Edit
              </button>

              <button
                className="delete"
                onClick={() => deleteProduct(item.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;