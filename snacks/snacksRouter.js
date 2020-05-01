const express = require('express')
const Snacks = require('./snacks-model')
const router = express.Router()



// router.get("/api/snacks", (req, res) => {
//     Snacks.getAll()
//         .then(snacks => {
//             res.status(200).json(snacks);
//         })
//         .catch(error => {
//             res.status(500).json(error);
//         });
// });

router.post("/", (req, res) => {
    const snack = req.body;
    console.log('snack', snack)
    Snacks.insert(snack)
        .then(snack => {
            res.status(201).json(snack);
        })
        .catch(err => {
            res.status(500).json({ message: "Could not create a new treat for ya" });
        });
});

router.delete("/:id", (req, res) => {
    const { id } = req.params;

    Snacks.remove(id)
        .then(deleted => {
            if (deleted) {
                res.json({ removed: deleted });
            } else {
                res.status(404).json({ message: "CYou must keep eating this snack" });
            }
        })
        .catch(err => {
            res.status(500).json({ message: "Could not delete snack" });
        });
});

module.exports = router;