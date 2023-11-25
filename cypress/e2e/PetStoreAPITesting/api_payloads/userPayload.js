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
    get getid() {
        return this.id;
    }

    // Getter for username
    get getusername() {
        return this.username;
    }
    
    // Getter for first name
    get getfirstName() {
        return this.firstName;
    }

    // Getter for Last Name
    get getlastName() {
        return this.lastName;
    }

    // Getter for email
    get getemail() {
        return this.email;
    }

    // Getter for password
    get getpassword() {
        return this.password;
    }

    // Getter for phone
    get getphone() {
        return this.phone;
    }

    // Getter for userStatus
    get getuserStatus() {
        return this.userStatus;
    }

    // Setter for id
    set setid(id) {
        this.id = id;
    }

    // Setter for username
    set setusername(username) {
        this.username = username;
    }

    // Setter for first name
    set setfirstName(firstName) {
        this.firstName = firstName;
    }

    // Setter for Last Name
    set setlastName(lastName) {
        this.lastName = lastName;
    }

    // Setter for email
    set setemail(email) {
        this.email = email;
    }

    // Setter for password
    set setpassword(password) {
        this.password = password;
    }

    // Setter for phone
    set setphone(phone) {
        this.phone = phone;
    }

    // Setter for userStatus
    set setuserStatus(userStatus) {
        this.userStatus = userStatus;
    }

    }
