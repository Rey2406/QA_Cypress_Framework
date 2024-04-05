import { getAllEntriesSchema } from "../../schemas/get-all-entries-schema";

describe('Entries Feature', () => {
    it("TC-003: BE | Get all entires", () => {
        cy.request("GET", "https://api.demoblaze.com/entries").then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.not.be.null;
            cy.validateSchema(getAllEntriesSchema, response.body);
            cy.log(JSON.stringify(response.body))
        });
    });
});