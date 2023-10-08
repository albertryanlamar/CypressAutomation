describe("Parsing Body", ()=>
{
        it("Parsing simple JSON Response", ()=>
        {
            cy.getProducts().then((response)=>{
            // Use the custom command to validate the response
            cy.validate(response);
            })
        });

        it("Parsing complex JSon Response", ()=>
        {
            cy.getProductswithlimit().then((response)=>{
            // Use the custom command to validate the response
            cy.validate1(response);
            })
        });
})

Cypress.Commands.add('getProducts', () => {
    cy.request({
      method: 'GET',
      url: 'https://fakestoreapi.com/products',
    });
  });

  Cypress.Commands.add('getProductswithlimit', () => {
    cy.request({
      method: 'GET',
      url: 'https://fakestoreapi.com/products',
      qs:{limit:3}
    });
  });

Cypress.Commands.add('validate', (response) => {
        expect(response.status).to.equal(200);
        expect(response.body[0].id).to.equal(1);
        expect(response.body[0].title).to.equal("Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops");
        expect(response.body[0].price).to.equal(109.95);
  });
  Cypress.Commands.add('validate22', (response) => {
    let totalprice=0;
    expect(response.status).to.equal(200);

    response.body.forEach(element => 
    {
     // totalprice = totalprice+element.price;
      //cy.log(element.price);
    });
});

Cypress.Commands.add('validate1', (response) => {
  let totalprice = 0;
  expect(response.status).to.equal(200);

  response.body.forEach((element) => {
    Object.entries(element)
    .forEach(([key, value]) => {
      if (key === 'price') {
        totalprice += value;
        cy.log(`${key}: ${value}`);
      }
    });
  });

  // Optionally, you can log the total price
  cy.log(`Total Price: ${totalprice}`);
});