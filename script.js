/** @format */

let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    //Write your code here , just console.log
  arr.map((employee)=>{
    if(employee.profession=="developer")
    {
      console.log(employee);
    }
  })
  
  }
  
  function PrintDeveloperbyForEach() {
    //Write your code here , just console.log
    arr.forEach((employee)=>{
      if(employee.profession=="developer")
      {
        console.log(employee);
      }
    })
  }
  
  function addData() {
    //Write your code here, just console.log
   arr.push({id:4,name:"susan",age:"20",profession:"intern"});
  console.log(arr);
  }
  
  function removeAdmin() {
    //Write your code here, just console.log
 let updatedarray = arr.filter((employee)=>employee.profession!="admin");
 console.log(updatedarray);
}
  
  function concatenateArray() {
    //Write your code here, just console.log
    let addedarr = [
      { id: 4, name: "mainoo", age: "17", profession: "gamer" },
      { id: 5, name: "joby", age: "23", profession: "engineer" },
      { id: 6, name: "kareem", age: "27", profession: "manager" },
         ];
   let updatedarray=arr.concat(addedarr);
   arr=updatedarray;
   console.log(arr);
        }