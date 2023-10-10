const xmls = require('xml2js');
const parser = new xmls.Parser({explixitArray:false});
let petid;

describe("Parsing XML",()=>
{

const xmlpayload ="<Pet><id>01</id><Category><id>01</id><name>string</name></Category><name>doggie</name><photoUrls><photoUrl>string</photoUrl></photoUrls><tags><Tag><id>01</id><name>string</name></Tag></tags><status>available</status></Pet>"


    before("creating Pet",()=>
    {
        cy.commandpost(xmlpayload).then((response)=>{
        cy.validatepost(response);
        });
    });
    it("Test Xml",()=>{
        cy.commandget(petid).then((response)=>{
        cy.validateget(response,petid);
        })
    });

});

Cypress.Commands.add('commandpost',(xmlpayload)=>{
    cy.request({
        method:'POST',
        url:"https://petstore.swagger.io/v2/pet",
        body:xmlpayload,
        headers:{
            'Content-Type':'application/xml',
            'accept':'application/xml'

        }
    });
});

Cypress.Commands.add( 'validatepost', (response)=>{
    expect(response.status).to.equal(200);
    parser.parseString(response.body,(err,result)=>{
        petid = result.Pet.id;
    });
});

Cypress.Commands.add('commandget',(petid)=>
{
    cy.request({
        method:'GET',
        url:'https://petstore.swagger.io/v2/pet/'+petid,
        headers:{
            'accept':'application/xml'
        }
    })
});

Cypress.Commands.add('validateget',(response,petid)=>{
   expect(response.status).to.equal(200);

   parser.parseString(response.body,(error,result)=>{
    expect(result.Pet.name[0]).to.equal("doggie");
    cy.log(result);
   });
});