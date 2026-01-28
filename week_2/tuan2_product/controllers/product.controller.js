const db = require("../db");

/* ===== LIST ===== */
exports.getAll = (req, res) => {
    db.query("SELECT * FROM products", (err, results) => {
        if (err) {
            console.log("❌ SELECT ERROR:", err);
            return res.render("products", { products: [] });
        }
        res.render("products", { products: results });
    });
};

/* ===== ADD ===== */
exports.create = (req, res) => {
    const { name, price, quantity } = req.body;

    if (!req.file) {
        return res.send("No image uploaded");
    }

    const image = req.file.filename;

    const sql =
        "INSERT INTO products (name, price, quantity, image_url) VALUES (?, ?, ?, ?)";

    db.query(sql, [name, price, quantity, image], (err) => {
        if (err) {
            console.log("❌ INSERT ERROR:", err);
            return res.send("Insert failed");
        }

        console.log("✅ INSERT OK");
        res.redirect("/");
    });
};

/* ===== DELETE ===== */
exports.delete = (req, res) => {
    const id = req.params.id;
    db.query("DELETE FROM products WHERE id = ?", [id], () => {
        res.redirect("/");
    });
};
/* ===== EDIT FORM ===== */
exports.editForm = (req, res) => {
    const id = req.params.id;

    db.query("SELECT * FROM products WHERE id = ?", [id], (err, results) => {
        if (err || results.length === 0) {
            return res.redirect("/");
        }

        res.render("edit", { product: results[0] });
    });
};

/* ===== UPDATE ===== */
exports.update = (req, res) => {
    const id = req.params.id;
    const { name, price, quantity } = req.body;

    const sql =
        "UPDATE products SET name=?, price=?, quantity=? WHERE id=?";

    db.query(sql, [name, price, quantity, id], (err) => {
        if (err) {
            console.log("❌ UPDATE ERROR:", err);
        }
        res.redirect("/");
    });
};
