describe('Categories Feature', () => {
    it("TC-004: BE | Get the phone category", () => {
        cy.request("POST", "https://api.demoblaze.com/bycat", {
            cat: "phone"
        }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body.Items[0].cat).to.eq("phone");
          cy.log(JSON.stringify(response.body));
        });
      });

      it("TC-005: BE | Get the notebook category", () => {
        cy.request("POST", "https://api.demoblaze.com/bycat", {
            cat: "notebook"
        }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body.Items[0]).to.have.property('cat','notebook');
          cy.log(JSON.stringify(response.body));
        });
      });

      it("TC-006: BE | Get the monitor category", () => {
        cy.request("POST", "https://api.demoblaze.com/bycat", {
            cat: "monitor"
        }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body.Items[0].cat).to.eq("monitor");
          cy.log(JSON.stringify(response.body));
        });
      });
});