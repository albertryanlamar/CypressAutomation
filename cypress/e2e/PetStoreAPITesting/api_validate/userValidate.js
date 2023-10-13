export default class validate
{

static validate_create = (response)=>{
    expect(response.status).to.equal(200);
    expect(response.body.type).to.equal('unknown');
}

}