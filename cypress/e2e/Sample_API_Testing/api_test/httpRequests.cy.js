
import rout from '../api_endpoints/routes.js';
import userPayload from '../api_payload/user.js';

describe("HTTP Request", () => {

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

    it("Update", ()=>{
    var update_rqbody ={
        "name": "bert",
        "job": "seniro"
    }
        cy.request({
          method:'PUT',
          url: rout.update_user,
          body: update_rqbody
        })
        .then((response)=>{
          const formattedHeaders = Object.entries(response.headers)
          .map(([name, value]) => `${name}: ${value}`)
          .join('\n');
          expect(response.status).to.equal(200);
          
          cy.log("Headers",formattedHeaders);
          cy.log("Response body:",JSON.stringify(response.body, null, 2));
        })
    })

  });