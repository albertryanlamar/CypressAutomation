export default class rout
{
   static base_url ="https://petstore.swagger.io/v2";

    //user module
    static post_url =rout.base_url+"/user";
	static get_url =rout.base_url+"/user/";
	static update_url =rout.base_url+"/user/";
	static delete_url =rout.base_url+"/user/";
	
	//store module
	static post_order_url = rout.base_url+"/store/order";
	static get_order_url = rout.base_url+"/store/order/{orderid}";
	static get_storeinventory_url = rout.base_url+"/store/inventory";
	static delete_order_url = rout.base_url+"/store/order/{orderid}";
}