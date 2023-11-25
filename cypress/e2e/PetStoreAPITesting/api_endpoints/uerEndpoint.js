import rout from './routes.js';

export default class userEndpoints
{
   static postUser = (uload)=>{
       return cy.request({
            method:'POST',
            url:rout.post_url,
            headers:{
                'Content-Type':'application/json',
                'accept':'application/json'
            },
            body:uload
        });
    }

  static readUser = (username)=>{
    return cy.request({
        method:'GET',
        url: rout.get_url+username
    })
  }

}