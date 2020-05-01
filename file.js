// describe("DELETE /:id", function() {
//     it("should return a Json", function() {
//       return request(server) //make sure to put return
//         .delete("/:id")

//         .then(res => {
//           expect(res.type).toMatch(/text/i);
//         });
//     });
//     it("should return a 404", function() {
//       return request(server) //make sure to put return
//         .delete("/9")
//         .send({
//           name: "andrew",
//           breed: "dog"
//         })
//         .then(res => {
//           expect(res.status).toBe(404);
//         });
//     });


//     router.delete("/:id", (req, res) => {
//         const { id } = req.params;

//         Dogs.remove(id)
//           .then(deleted => {
//             if (deleted) {
//               res.json({ removed: deleted });
//             } else {
//               res.status(404).json({ message: "Could not find dog with given id" });
//             }
//           })
//           .catch(err => {
//             res.status(500).json({ message: "Failed to delete dog" });
//           });
// test('remove color', async () => {
//     await colorModel.destroy(1)
//     const color = await colorModel.list()
//     expect(color).toHaveLength(2)
// })