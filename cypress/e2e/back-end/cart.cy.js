describe('Cart Feature', () => {
  it("TC-001: BE | Add new product to cart", () => {
    cy.request("POST", "https://api.demoblaze.com/addtocart", {
      id: "3da1803f-67cc-a363-26f3-c99d18bf53c0",
      cookie: "user=4439846b-8425-78c1-6dfe-cbdd7a0ebd77",
      prod_id: 1,
      flag: false
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it("TC-002: BE | Delete product from the cart", () => {
    cy.request("POST", "https://api.demoblaze.com/deletecart", {
      cookie: "user=4439846b-8425-78c1-6dfe-cbdd7a0ebd77"
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.eq("Item deleted.");
      cy.log(JSON.stringify(response.body));
    });
  });
});