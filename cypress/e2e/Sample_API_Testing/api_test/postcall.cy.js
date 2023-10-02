describe("Creat body Request", () => 
{
    /*
    it("Approach 1, Hard coded", ()=>
    {
        const rbody = 
        {
            "tourist_name": "tss",
            "tourist_email": "sasa@gmail.com",
             "tourist_location": "sd"
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
                    expect(response.body.tourist_name).to.equal('tss');
                    cy.log("Response body:",response.status);
                    cy.log("Response body:",JSON.stringify(response.body, null, 2));
                }
        )

     }); */


     it.only("Approach 2, Dynamically generating json object", ()=>
     {
         const rbody = 
         {
             "tourist_name": Math.random().toString().substring(2),
             "tourist_email": Math.random().toString(5).substring(2)+"@gmail.com",
              "tourist_location": Math.random().toString(5).substring(2)
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
                     expect(response.body.tourist_name).to.equal(rbody.tourist_name);
                     cy.log("Response body:",JSON.stringify(response.body, null, 2));
                 }
         )
 
      });

      it.only("Approach 3 - using fixture", ()=>
     {
        cy.fixture('tourist')
        .then
        ( 
            (data)=>
            {
                const rbody=data;
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
                            expect(response.body).have.property('tourist_name',rbody.tourist_name);
                            cy.log("Response body:",response.status);
                            cy.log("Response body:",JSON.stringify(response.body, null, 2));
                        }
                )
            }
        );
    });
});