class Course{
    courseid:number;
    coursename:string;

    constructor(courseid:number,coursename:string){
        this.courseid=courseid;
        this.coursename=coursename;

    }
   public coursedetail():void{
    console.log(`courseid:${this.courseid}`);
    console.log(`coursename:${this.coursename}`);
    

    }


}
class Employee extends Course{
    empid:number;
    empname:string;
    empdesignation:string;

    constructor(courseid:number,coursename:string,empid:number,empname:string,empdesignation:string){
       super(courseid,coursename) ;
     
       this.empid=empid;
       this.empname=empname;
       this.empdesignation=empdesignation; 
    }

public empdetail():void{
    super.coursedetail();
    console.log(`empid:${this.empid}`);
    console.log(`empname:${this.empname}`);
    console.log(`empdesignation:${this.empdesignation}`);
}

}
class Admin extends Employee{
    adminid:number;
    adminname:string;

    constructor(courseid:number,coursename:string,empid:number,empname:string,empdesignation:string,adminid:number,adminname:string){
        super(courseid,coursename,empid,empname,empdesignation);
      
        this.adminid=adminid;
        this.adminname=adminname;
        
    }
    public admindetail():void{
        
       super.empdetail();
        console.log(`adminid:${this.adminid}`);
        console.log(`adminname:${this.adminname}`);
    }
}



let emplo = new Admin(1212,"vasanth",12121,"vasu","dev",121,"vasan");
emplo.admindetail();

