describe("Parsing Body", ()=>
{
        it("Parsing simple JSON Response", ()=>
        {
            /* cy.getProducts().then((response)=>
            {
                expect(response.status).to.equal(200);
                expect(response.body[0].id).to.equal(1);
                expect(response.body[0].title).to.equal("Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops");
                expect(response.body[0].price).to.equal(109.95);
            }); */
            cy.getProducts().then((response)=>{
            cy.validate(response);
            })
        });
})

Cypress.Commands.add('getProducts', () => {
    cy.request({
      method: 'GET',
      url: 'https://fakestoreapi.com/products',
    });
  });

  Cypress.Commands.add('validate', (response) => {
        expect(response.status).to.equal(200);
        expect(response.body[0].id).to.equal(1);
        expect(response.body[0].title).to.equal("Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops");
        expect(response.body[0].price).to.equal(109.95);
  });