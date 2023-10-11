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
    it("APIkeyAuth",()=>
    {
        reqApikeyauth().then((response)=>{
            vldApikeyauth(response);
        });
    })

    it("OAuth2:Get oauth2 accessToken",()=>{
        oauthToken().then((response)=>{
            vld_oauthToken(response);
        })
    })

    it("OAuth2:request",()=>{
        oauth2token().then((response)=>{
        vld_oauth2token(response);
        })
    })

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

/* APIKey Auth */
let reqApikeyauth = ()=>{
    return cy.request({
        method:'GET',
        url:'api.openweathermap.org/data/2.5/forecast/daily',
        qs:{
            q:'Delhi',
            appid:'fe9c5cddb7e01d747b4611c3fc9eaf2c'       
            }
    })
}
let vldApikeyauth = (response)=>{
    expect(response.status).to.equal(200);

}

/* Oauth token 
1) Get the Oauth2 access token
POST:https://github.com/login/oauth/access_token
Query Params
        -------------
        client_id
        client_secrete
        code
2) Send GET request by using access token.
https://api.github.com/user/repos
auth:accessToken
*/
let oauthToken =()=>
{
    return cy.request({
        method:'POST',
        url:'https://github.com/login/oauth/access_token',
        qs:{
            client_id:'dc8277a12bfb2092a571',
            client_secret:'4f04e4fc90a5eca5f754bbd6227304ad46393d61',
            code:'f627adc7a044c356abdf'
        }
    })
}
let accessToken;

let vld_oauthToken = (response)=>{
    expect(response.status).to.equal(200);
    // access_token=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&scope=&token_type=bearer
    const param = response.body.split('&');
    accessToken = param[0].split("=")[1];
}

let oauth2token = ()=>
{
   return cy.request({
        method:'GET',
        url:'https://api.github.com/user/repos',
        headers:{
            'Authorization':'Bearer '+accessToken
        }
    })
}
let vld_oauth2token = (response)=>{
    expect(response.status).to.equal(200);
    expect(response.body[0].owner.login).to.equal("albertryanlamar");

}
