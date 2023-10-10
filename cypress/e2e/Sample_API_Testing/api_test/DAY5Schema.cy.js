const ajx = require('ajv');
const avj = new ajx();

describe("Schema Validation",()=>{

    it("Schema validation",()=>{
       cy.request1().then((response)=>{
        cy.schemavalidate(response);
       });

    });

})

Cypress.Commands.add('request1',()=>{
    cy.request({
        method:'GET',
        url:'https://fakestoreapi.com/products'
    })
})

Cypress.Commands.add('schemavalidate',(response)=>{
    const aa= avj.compile(jschema);
    const isvalid = aa(response.body)
    expect(isvalid).to.be.true;

})


const jschema = {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "title": "Generated schema for Root",
    "type": "array",
    "items": {
      "type": "object",
      "properties": {
        "id": {
          "type": "number"
        },
        "title": {
          "type": "string"
        },
        "price": {
          "type": "number"
        },
        "description": {
          "type": "string"
        },
        "category": {
          "type": "string"
        },
        "image": {
          "type": "string"
        },
        "rating": {
          "type": "object",
          "properties": {
            "rate": {
              "type": "number"
            },
            "count": {
              "type": "number"
            }
          },
          "required": [
            "rate",
            "count"
          ]
        }
      },
      "required": [
        "id",
        "title",
        "price",
        "description",
        "category",
        "image",
        "rating"
      ]
    }
  }
  