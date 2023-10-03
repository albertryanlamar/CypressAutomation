describe("Quey Param API Testing",()=>
{
    it("Passing query param", ()=>
    {
        cy.request
        ({
            method: 'GET',
            url:'https://reqres.in/api/users',
            qs: {page: 2}
        })
        .then
        (
            (response)=>{
                expect(response.status).to.eq(200);
                expect(response.body.data).has.length(6);
                cy.log("Response",headers_response(response));
                console.log("Response Body",bd(response));
                
            }
        )
    })
})

describe("Quey Param bearer token",()=>
{
    it("Passing query param", ()=>
    {
        cy.request
        ({
            method: 'GET',
            url:'https://reqres.in/api/users',
            qs: {page: 2}
        })
        .then
        (
            (response)=>{
                expect(response.status).to.eq(200);
                expect(response.body.data).has.length(6);
                cy.log("Response",headers_response(response));
                console.log("Response Body",bd(response));
                
            }
        )
    })
})

const headers_response = (response)=>
{
    let formattedHeaders = '';
    for (const name in response.headers) {
        formattedHeaders += `${name}: ${response.headers[name]}\n`;
        }
        return formattedHeaders;
}

const bd =(response)=>
{
    let res =JSON.stringify(response.body,null,2,{ verbose: true })
    return res
}

