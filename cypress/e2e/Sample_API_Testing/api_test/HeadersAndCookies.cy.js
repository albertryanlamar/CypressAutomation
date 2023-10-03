describe("API Testing Headers and Cookies",()=>
{
    let auttoken='';
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

        });
    });

})

const bd =(response)=>
{
    let res =JSON.stringify(response.body,null,2,{ verbose: true })
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