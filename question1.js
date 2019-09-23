const r = (user1, user2) =>
Object.keys(user2).every(key => user1.hasOwnProperty(key) && user1[key] === user2[key]);
console.log(r({ name:"roshan",age:"20",year:2017 }, { name:"roshan",age:"21",year:2017 }));

// -----------------------------------OR----------------------------------------------

var user1={name:"roshan",age:"20",year:2017};
var user2={name:"roshan",age:"21",year:2017};
var a=JSON.stringify(user1);
var b=JSON.stringify(user2);
if(a==b){
    console.log("true");
}else{
    console.log("false");
}