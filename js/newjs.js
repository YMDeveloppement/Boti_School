// function getColumnDefs(){
//     return[{
//           field: "Nom",
//           initialWidth: 100,
//           initialSort: null,
//           initialPinned: 'left',
//         },
//         {
//           field: "Tel"
//         },
//         {
//           field: "Email"
//         },
//         {
//           field: "Classes"
//         },
        
//       ];
//   }


// var list = getColumnDefs();
//   let newArray=[];
//   list.forEach((obj)=>{
//     const newObj={};
//     Object.keys(obj).forEach((key)=>{
//         if(key == 'field'){
//             newObj[key] =obj[key] 
//       }
//     //   else{
//     //     newObj[key] = null  
//     //   }
//     })
//     console.log(newObj);

//     newArray.push(newObj);
//   })

//   console.log(newArray);









//   function getColumnDefsNew(){
//     var list = getColumnDefs();
//     let newArray=[];
//     list.forEach((obj , index)=>{
//       const newObj={};
//       Object.keys(obj).forEach((key,index)=>{
//           if(key == 'field'){
//               newObj[key] =obj[key] 
//         }
//         else{
//           obj["field"].key = 800  
//         }
//       })
//       newArray.push(newObj);
//     })
  
//     gridOptions.api.setColumnDefs(newArray);
//   }


// function getColumnDefs(){
//     return[{
//           field: "Nom",
//           initialWidth: 200,
//           initialSort: 'asc',
//           initialPinned: 'left',
//         },
//         {
//           field: "Tel"
//         },
//         {
//           field: "Email"
//         },
//         {
//           field: "Classes"
//         },
        
//       ];
//   }

// var list = getColumnDefs();
// list.forEach((obj)=>{
//     Object.keys(obj).forEach((key)=>{
//         obj.hasOwnProperty('initialPinned')? delete obj.initialPinned:null;
//         obj.hasOwnProperty('initialSort')? delete obj.initialSort:null;
//         obj.hasOwnProperty('initialWidth')? delete obj.initialWidth:null;
//     })
// })

// console.log(list);


class User {
    constructor(id, username, salary) {
      this.i = id;
      this.u = username;
      this.s = salary + 1000;
    }
  }
  
  let userOne = new User(100, "Elzero", 5000);
  
  console.log(userOne.i);
  console.log(userOne.u);
  console.log(userOne.s);
  
  console.log(userOne instanceof User);
  console.log(userOne.constructor === User);