describe("API Testing Headers and Cookies",()=>
{
    let auttoken='';
    let orID='';
    before("Creating Access",()=>
    {
        cy.request
        ({
            method:'POST',
            url:'https://simple-books-api.glitch.me/api-clients/',
            headers:{'Content-Type':'application/json'},
            body:{
              clientName:'Atest',
              clientEmail: Math.random().toString(5)+'@gmail.com'
            }
        }).then((response)=>
        {
          auttoken = response.body.accessToken
          cy.log("Body",bd(response));

        });
    });

    it("Creating new Order",()=>
    {
        let rbody = {
            "bookId": 1,
            "CustomerName":"asdsad7ebd"
        }
        cy.request({
            method:'POST',
            url:'https://simple-books-api.glitch.me/orders/',
            headers:{
                'Content-Type':'application/json',
                'Authorization':auttoken
            },
            body:rbody
        }).then((response)=>
        {
            expect(response.status).to.eq(201);
            expect(response.body.created).to.eq(true);
            cy.log("Response Status: " + response.status);
            cy.log("Response Body: " + bd(response));

            orID = response.body.orderId;

        });
    });

    it("Fetch an order",()=>
    {
        cy.request({
            method:'GET',
            url:'https://simple-books-api.glitch.me/orders/'+orID,
            headers:{
                'Authorization': auttoken
            }
        })
        .then((response)=>
        {
            cy.log(`OrderID:  ${orID}`);
            cy.log("OrderID: "  + orID);
            expect(response.status).to.eq(200);
            expect(response.body).to.have.all.keys( "id","bookId","createdBy","quantity","timestamp");
            expect(response.body.id).to.eq(orID);
            cy.log("Body Response: " + bd(response));
        
        });

    });

    it("Fetching all orders",()=>{
        cy.request
        ({
            method:'GET',
            url:'https://simple-books-api.glitch.me/orders/',
            headers:{
                'Authorization':auttoken
            },
            cookies:{
                'cookieName': 'mycookie'
            }
         })
         .then((response) =>
         {
           const orderExists = response.body.some(order => order.id === orID); 
            expect(response.status).to.eq(200); 
            expect(orderExists).to.be.true;
            cy.log("Coookies:" + response.cookieName);
            cy.log("Response Body: " + bd(response));

         });

    });

});

const bd =(response)=>
{
    let res =JSON.stringify(response.body,null,2)
    return res
}

const headers_response = (response)=>
{
    let formattedHeaders = '';
    for (const name in response.headers) {
        formattedHeaders += `${name}: ${response.headers[name]}\n`;
        }
        return formattedHeaders;
}