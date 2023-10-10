const tkn = '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';

describe("Authentication",()=>{

    it("Basic Authenticatio",()=>{
     cy.basicauth().then((response)=>{
     cy.validate_basicauth(response);
     });
    });

    it("Digest Authentication",()=>{
        digestauth().then((response)=>{
            validate_digestauth(response);
        });
    });

    it("Digest Authentication",()=>{
        digestauth().then((response)=>{
            validate_digestauth(response);
        });
    });

    it("Bearer Token Authentication",()=>{
        bscToken(tkn).then((response)=>{
        vld_bscToken(response);
        })
    });

})
/* For Basic Authentication Request and Validate */
Cypress.Commands.add('basicauth',()=>{
    cy.request({
        method:'GET',
        url:'https://postman-echo.com/basic-auth',
        auth:{
            user:'postman',
            pass:'password'
        }
    });
})
Cypress.Commands.add('validate_basicauth',(response)=>{
expect(response.status).to.equal(200);
expect(response.body.authenticated).to.equal(true);
})

/* For digest authentication function of cy.request and validation*/
let digestauth = () =>
{
   return cy.request({
        method:'GET',
        url:'https://postman-echo.com/basic-auth',
        auth:{
            username:'postman',
            password:'password',
            method:'degest'
        }
    });
    
}

let validate_digestauth = (response)=>
{
    expect(response.status).to.equal(200);
    expect(response.body.authenticated).to.equal(true);
}

let bscToken = (tkn)=>
{
    return cy.request({
        method:'GET',
        url:'https://api.github.com/user/repos',
        headers:{
            'Authorization':'Bearer '+tkn
        }
    })
}

let vld_bscToken = (response)=>{
    expect(response.status).to.equal(200);
    expect(response.body[0].owner.login).to.equal("albertryanlamar"); 

}
