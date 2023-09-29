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
import rout from '../api_endpoints/routes.js';
import userPayload from '../api_payload/user.js';

describe("HTTP GET Request", () => {

    it("GET Call", () => {
      cy.request({
        method:'GET',
        url: rout.read_user
      })
      .then((response) => {
            // Extract the status code from the response
            const statusCode = response.status;
            // Now you can use 'statusCode' for further assertions or actions
            cy.log(`Status Code: ${statusCode}`);
            cy.wrap(statusCode).should('equal', 200); // Example assertion
        }
      );
    });

    it("Post Call", ()=>{
      var upayload = new userPayload()
      upayload.setname = 'albert';
      upayload.setjob = 'tester';

        cy.request({
            method:'POST',
            url:rout.create_user,
            body: upayload
        })

       .then((response) => {
                  // Extract the status code from the response
                  const resbody = response.body;
                  const statusCode = response.status;
                  // Now you can use 'statusCode' for further assertions or actions
                  cy.log(`Status Code: ${statusCode}`);
                  cy.log(JSON.stringify(resbody));
                  cy.wrap(statusCode).should('equal', 201); // Example assertion
                  cy.log(`Name: ${userPayload.asas}`);
              }
        );
    });

  });