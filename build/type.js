"use strict";
class Course {
    constructor(courseid, coursename) {
        this.courseid = courseid;
        this.coursename = coursename;
    }
    coursedetail() {
        console.log(`courseid:${this.courseid}`);
        console.log(`coursename:${this.coursename}`);
    }
}
class Employee extends Course {
    constructor(courseid, coursename, empid, empname, empdesignation) {
        super(courseid, coursename);
        this.empid = empid;
        this.empname = empname;
        this.empdesignation = empdesignation;
    }
    empdetail() {
        super.coursedetail();
        console.log(`empid:${this.empid}`);
        console.log(`empname:${this.empname}`);
        console.log(`empdesignation:${this.empdesignation}`);
    }
}
class Admin extends Employee {
    constructor(courseid, coursename, empid, empname, empdesignation, adminid, adminname) {
        super(courseid, coursename, empid, empname, empdesignation);
        this.adminid = adminid;
        this.adminname = adminname;
    }
    admindetail() {
        super.empdetail();
        console.log(`adminid:${this.adminid}`);
        console.log(`adminname:${this.adminname}`);
    }
}
let emplo = new Admin(1212, "vasanth", 12121, "vasu", "dev", 121, "vasan");
emplo.admindetail();
