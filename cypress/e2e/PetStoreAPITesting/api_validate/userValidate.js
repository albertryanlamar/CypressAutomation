let messageto;
let response;
let aa;
export default class validate
{
    
    validate_create = (response,aa)=>
    {
    expect(response.status).to.equal(200);
    expect(response.body.type).to.equal('unknown');
    expect(response.body.message).to.equal(aa);
    }

}