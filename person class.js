Write a “person” class to hold all the details.

class person{
    constructor(name,age,Gender,nationality,email,qualification, job,phonenumber,state,city, pincode){
        this.name=name;
        this.age=age;
        this.Gender=Gender;
        this.nationality=nationality;
        this.email=email;
        this.qualification=qualification;
        this.job=job ;
        this.phonenumber=phonenumber;
        this.state=state;
        this.city=city;
        this.pincode=pincode;
        
    }
    
}
let person1=new person('thivi','25','Female','India','rbsthivi@gmail.com','Msc','full stack developer','8489952342','Tamilnadu','Dindigul','624003');
let person2=new person('suguna','50','Female','India','sugu79@gmail.com','MA', 'teacher','9943736890','Tamilnadu','coimbatore','641002');
  console.log(person1);
  console.log(person2);
  

