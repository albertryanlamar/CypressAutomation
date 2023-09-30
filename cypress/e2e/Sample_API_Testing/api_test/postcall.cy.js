describe("Creat body Request", () => 
{
    it("Approach 1", ()=>
    {
        const rbody = 
        {
            "tourist_name": "tetss",
            "tourist_email": "sssw@gmail.com",
             "tourist_location": "sd",
        }

        cy.request
                (
                    {
                        method:'POST',
                        url:'http://restapi.adequateshop.com/api/Tourist',
                        body:rbody
                    }
                )
        .then
        (
                (response)=>
                {
                    expect(response.status).to.equal(201);
                    cy.log("Response body:",response.status);
                    cy.log("Response body:",JSON.stringify(response.body, null, 2));
                }
        )

  });
});