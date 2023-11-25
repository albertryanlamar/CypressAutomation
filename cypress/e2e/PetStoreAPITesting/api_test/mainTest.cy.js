import userEndpoints from '../api_endpoints/uerEndpoint.js';
import userPayload from '../api_payloads/userPayload.js';
const validate = require('../api_validate/userValidate.js');

const fkr = require("faker");
let upoint = new validate();
let uload = new userPayload();



describe("API Testing", ()=>{
    let user_name;
    before("Create Payload",()=>{
        uload.setid = fkr.idNumber;
        uload.setusername = fkr.internet.userName;
        uload.setfirstName = fkr.name.firstName;
        uload.setlastName = fkr.name.lastName;
        uload.setEmail = fkr.internet.safeEmailAddress;
        uload.setpassword = fkr.internet.password;
        uload.setPhone = fkr.phoneNumber;
    });

    it("Test Create User", async()=>{
        userEndpoints.postUser(uload)
        .then((response)=>
        {
        let aa = response.body.message;
        
        upoint.validate_create(response,aa);
        cy.log("Response:", response.body);
        });
    });

    it("Test Get User",()=>{
        user_name = uload.getusername;
        userEndpoints.readUser(user_name).then((response)=>
        {
            
        })
    });
})