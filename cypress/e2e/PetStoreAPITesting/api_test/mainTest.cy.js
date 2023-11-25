import userEndpoints from '../api_endpoints/uerEndpoint.js';
import userPayload from '../api_payloads/userPayload.js';
const validate = require('../api_validate/userValidate.js');

const fkr = require("faker");
let upoint = new validate();
let uload = new userPayload();
let uID1,uID,uUserName,ufName,ulName,uemail,upass,unum,uUName;



describe("API Testing", ()=>{
    let user_name;
    before("Create Payload",()=>{
            // Generate a random number using faker
        const randomNumber = fkr.random.number();

        // Convert the number to a string
        const numberString = randomNumber.toString();

        // Convert the string to a numeric value because when i use the faker idnumber not saved
        uload.setid = parseInt(numberString);
        uUserName = uload.setusername = fkr.internet.userName();
        uload.setfirstName = fkr.name.firstName();
        uload.setlastName = fkr.name.lastName();
        uload.setemail = fkr.internet.safeEmailAddres;
        uload.setpassword = fkr.internet.password();
        uload.setPhone = fkr.phone.phoneNumber();
        cy.log("Body",unum);
    });

    it("Create User", ()=>{
        userEndpoints.postUser(uload).then((response)=>
        {
        let aa = response.body.message;
        upoint.validate_create(response,aa);
        });
    });

    it("Get User",()=>{

        userEndpoints.readUser(uUserName).then((response)=>
        {
            upoint.validate_getUser(response, uload.getid, uload.getusername, uload.getfirstName, uload.getlastName,uload.password);
        })
    });
})


