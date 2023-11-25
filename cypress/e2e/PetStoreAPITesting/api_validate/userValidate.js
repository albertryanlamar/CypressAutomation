
let messageto;
let response;
let aa;
let aID,uname,fname,lname,pass;


export default class validate
{
    
    validate_create = (response,aa)=>
    {
        expect(response.status).to.equal(200);
        expect(response.body.type).to.equal('unknown');
        expect(response.body.message).to.equal(aa);
        cy.log("Body",bd(response));
    }

    validate_getUser = (response,aID,uname,fname, lname,pass)=>
    {
        expect(response.body.id).to.equal(aID);
        expect(response.body.username).to.equal(uname);
        expect(response.body.firstName).to.equal(fname);
        expect(response.body.lastName).to.equal(lname);
        expect(response.body.password).to.equal(pass);
        cy.log("Response Body",bd(response));
    }

}

const bd =(response)=>
{
    let res =JSON.stringify(response.body,null,2)
    return res
}