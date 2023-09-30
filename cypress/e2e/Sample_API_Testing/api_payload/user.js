class userPayload {

    constructor() {
      this.name ='';
      this.job='';
    }
  
    // Getter for name
    static get getname() {
      return this.name;
    }
  
    // Getter for job
    static get getjob() {
      return this.job;
    }
  
    // Setter for name
    static set setname(name) {
      this.name = name;
    }
  
    // Setter for job
    static set setjob(job) {
      this.job = job;
    }

/* using this you need to create a instance of the class to access this because its not public
    
      // Getter for name
      get getname() {
        return this.name;
      }
    
      // Getter for job
      get getjob() {
        return this.job;
      }
    
      // Setter for name
      set setname(name) {
        this.name =name;
      }
    
      // Setter for job
      static set setjob(job) {
        this.job = job;
      } */
  } 

  module.exports =userPayload;