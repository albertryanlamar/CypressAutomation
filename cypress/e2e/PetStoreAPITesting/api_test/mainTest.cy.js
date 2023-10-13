import userEndpoints from '../api_endpoints/uerEndpoint.js';
import userPayload from '../api_payloads/userPayload.js';
const validate = require('../api_validate/userValidate.js');
const fkr = require("faker");

let uload = new userPayload();



describe("API Testing", ()=>{
    before("Create Payload",()=>{
        uload.setid = fkr.idNumber;
        uload.setusername = fkr.name.username;
        uload.setfirstName = fkr.name.firstName;
        uload.setlastName = fkr.name.lastName;
        uload.setEmail = fkr.internet.safeEmailAddress;
        uload.setpassword = fkr.internet.password;
        uload.setPhone = fkr.phoneNumber;
    });

    it("Test Create User", ()=>{
        userEndpoints.postUser(uload)
        .then((response)=>{
            cy.log("aaa");
            let aa= new validate();
            aa.validate_create(response);
        });
    });
})