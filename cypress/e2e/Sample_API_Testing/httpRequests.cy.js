/* describe("Htpp Get Request", ()=>{

it("GET Call", ()=>{

cy.request('GET', 'https://reqres.in/api/users?page=2')
.then(response)
var stat = response.status
//.its('status')
//.should('equal', 200);
      // Now you can use 'statusCode' for further assertions or actions
      cy.log(`Status Code: ${statusCode}`);
      cy.wrap(statusCode).should('equal', 200); // Example assertion

})

}) */

describe("HTTP GET Request", () => {
    it("GET Call", () => {
      cy.request('GET', 'https://reqres.in/api/users?page=2')
      .then
      (
        (response) => 
        {
            // Extract the status code from the response
            const statusCode = response.status;
            // Now you can use 'statusCode' for further assertions or actions
            cy.log(`Status Code: ${statusCode}`);
            cy.wrap(statusCode).should('equal', 200); // Example assertion
        }
      );
        
    });

    it("Post Call", ()=>{
        var requestbody = 
        {
            "name":"Testing Bob",
            "job": "Hero"
        }
        cy.request
        ({
            method:'POST',
            url:'https://reqres.in/api/users',
            body: requestbody
        })

       .then
        (
              (response) => 
              {
                  // Extract the status code from the response
                  const resbody = response.body;
                  const statusCode = response.status;
                  // Now you can use 'statusCode' for further assertions or actions
                  cy.log(`Status Code: ${statusCode}`);
                  cy.log(JSON.stringify(resbody));
                  cy.wrap(statusCode).should('equal', 201); // Example assertion
              }
        );

    });

  });