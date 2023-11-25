export default class userPayload {

    constructor() {
      this.id;
      this.username;
      this.firstName;
      this.lastName;
      this.email;
      this.password;
      this.phone;
      this.userStatus;  
    }
  
    // Getter for id
    static get getid() {
      return id;
    }
  
    // Getter for username
    static get getusername() {
      return username;
    }
    // Getter for first name
    static get getfirstName(){
        return this.firstName;
    }
    // Getter for Last Name
    static get getlastName(){
        return this.lastName;
    }
    // Getter for email
    static get getemail(){
        return this.email;
    }
    // Getter for password
    static get getpassword(){
        return this.password;
    }
    // Getter for phone
    static get getphone(){
        return this.phone;
    }
    // Getter for userStatus
    static get getuserStatus(){
        return this.Status;
    }

    // Setter for id
    static set setid(id) {
        this.id =id;
      }    
    // Setter for username
    static set setusername(username) {
        this.username;
    }
      // Setter for first name
      static set setfirstName(firstName){
          this.firstName = firstName;
      }
      // Setter for Last Name
      static set setlastName(lastName){
          this.lastName = lastName;
      }
      // Setter for email
      static set setemail(email){
          this.email = email;
      }
      // Setter for password
      static set setpassword(password){
          this.password = password;
      }
      // Setter for phone
      static set setphone(phone){
          this.phone = phone;
      }
      // Setter for userStatus
      static set setuserStatus(userStatus){
          this.userStatus = userStatus;
      }

}
