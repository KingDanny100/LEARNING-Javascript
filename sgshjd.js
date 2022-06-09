
/*var moreinformation = {
    firstname: "Daniel",
    lastname: "Ntichika",
    age: "22",
    Phonenumber: {
        first: "039-484-334",
        second: "638-4950484",
    }
}

var information = {
    username: "KingDanny",
    password: "Fabregas"
}

var firstNum;
firstNum = 15;
function sayNum() {
    var firstNum = 45;
    console.log(firstNum);
}

console.log(firstNum);
sayNum();
function practice() {
    var firststatement = true;
    let firstname;
    let lastname;
    if (firststatement === true) {
        firstname = "daniel";
        lastname = "James"
        console.log(firstname + " " + lastname)
    }
    else{
        firstname = "Peter";
        lastname = "Jude";
        console.log(firstname + " " + lastname);
    }
    console.log(firstname);
    console.log(typeof firstname)
}
practice();

const MyArray = [1,2,3,4];
console.log(MyArray);
MyArray.push(5);
console.log(MyArray)
const myObject = {
    firname: "Dan",
    surname: "Joe"
}
console.log(myObject)*/



var Myfirstobject = {
    1: "King",
    2: "Friend",
    3: "Lucy"
}
function calculator(value1=2,value2=2) {
    if (typeof value1 === "string" || typeof value2 === "string") {
        var message = "Please input a number";
        return message;
    }
    else{
    var calculate = (value1*value2)/2;
    return calculate;
    }
    
}
console.log(calculator(30,32))

var NumberSquarer = function (num) {
    return num*num;
}

var numberAdder = function (squarer,num2) {
    var value = squarer(6);
    var added = value+num2;
    return added;
}

console.log(numberAdder(NumberSquarer,54));

/*var numberRootsquared = function(numb) {
    return
}*/

const myobj = {Firstname:"Daniel", Lastname:"James", Age:"20"};
function ChangeAge(MyObj) {
    MyObj.Age = "100";
    return MyObj;
}

console.log(myobj);
ChangeAge(myobj);
console.log(myobj)

function SqareAndMultiply(num1,num2) {
    function squarer(x) {
        return x*x;
    }
    return squarer(num1)*squarer(num2);
}

console.log(SqareAndMultiply(5,2))

var Addnumber = function(value1) {
    return value1*value1;
}

var Dividenumber = function (Adder,value2) {
    var addednumber = Adder(8);
    return addednumber/value2;
}

console.log(Dividenumber(Addnumber, 4));

var Fullname = {Realname: "Daniel", Surname: "Lucas", Age: 30};

function FullDetails(Myobj) {
    var Firstname = Myobj.Realname;
    var Lastname = Myobj.Surname;
    var Statement = ("Hi! " + Firstname + " " + Lastname);
    return Statement;
}
console.log(FullDetails(Fullname));

function calculation(number1,number2) {
    function adder(x) {
        return x+x;
    }
    function MultiplyBy10(y) {
        return y*10;
    }
    return adder(number1)+MultiplyBy10(number2);
}
console.log(calculation(12,14))
var MyArr = [1,2,3,4];
function AddToArray(Arr) {
    Arr.push(8);
    return Arr;
}
console.log(MyArr);
AddToArray(MyArr);
console.log(MyArr)

function FullStatement(Args1,Args2) {
    return  Args1 + " " + Args2; 
}

function ObjCreation(fullname,age) {
    var fullDetails = {
       Fullname: fullname,
       Age: age  
    }
    return fullDetails;
}

function Candidate(First1name,Last2name,Age) {
    var Answer = FullStatement(First1name,Last2name);
    var formatteddata = ObjCreation(Answer,Age);
    return formatteddata;
}
console.log(Candidate("Dan","King", 25));

var multiplier = (num1,num2) => { return num1*num2;}
console.log(multiplier(6,4));

const Users = [
    {Name:"Jay",Age:23},
    {Name:"Friend",Age:52},
    {Name:"Kevin",Age:32},
    {Name:"Ronald",Age:21}
]

/*function Mapperusers(Myar){
    var usersmapped = Myar.map(function(x){
        return x.Name;
    })
    return usersmapped;
}
console.log(Mapperusers(Users));*/

const Mappingusers = MyArray => MyArray.map((x) => x.Name);
console.log(Mappingusers(Users))


const squared = (x,y) => x*y;
console.log(squared(10,14))

const Filter = [1,2,3,4,5,6,7,8,9,10];
const filterNumbers = Myfil => Myfil.filter(x => x%2 === 0);
console.log(filterNumbers(Filter));
const arraydoubler = num => {
    const doubler= [];
    num.forEach((x) => {
        const doubled = x*2;
        doubler.push(doubled);
    })
    return doubler;
}
const arraynumbers = [12,4,6,8,10,12];
console.log(arraynumbers);
console.log(arraydoubler(arraynumbers));


const multiplynumbers = (x=5,y=10) => x*y;
console.log(multiplynumbers());

const stringsplitter = str => str.split(" ");
const word = "I am fine";
console.log(stringsplitter(word))

const PurchaseDeatils = {
    canSpendMoney:true,
    AccountBalance:200,
    HasCreditCard:true,
    ServiceCharge: 10
}

const SpendFunction = (amount, Runner=PurchaseDeatils) => {
    if (Runner.canSpendMoney && Runner.HasCreditCard) {
        if(Runner.AccountBalance >= amount+Runner.ServiceCharge){
            const newAccount = Runner.AccountBalance-(amount+Runner.ServiceCharge);
            Runner.AccountBalance = newAccount;
            return "Transaction complete"
        }
        else{
            return "Insufficient funds"
        }
    }
    else{
        return "Can not make purchase"
    }
}

console.log(PurchaseDeatils.AccountBalance);
console.log(SpendFunction(100));
console.log(PurchaseDeatils.AccountBalance)
console.log(SpendFunction(80));
console.log(PurchaseDeatils.AccountBalance)

function Dog(Years, Breed){
    this.type = Breed;
    this.age = Years;
}
const Spike = new Dog(13,"Friend");
console.log(Spike);

const Myfruit = "Apple";
switch (Myfruit) {
    case "Apple":
        console.log("nice")
        break;
    case "Beans":
        console.log("Okay")
        break;
    case "Tomatoes":
        console.log("Fine")
        break;
    default:
        console.log("Still Okay")
        break;
}

let loopsrun = 0;
while (loopsrun <= 2) {
   console.log("Loop running");
   loopsrun++; 
}

const namearr = ["James","Friday","Peter","Kenneth","Roland"];
function looparr(arrname, username) {
    let index = 0;
    while (index <= arrname.length) {
       if (arrname[index]===username) {
           console.log("Yayy!! " + arrname[index]);
           break;
       }
       index++;
    }
}
looparr(namearr,"Kenneth")

const icecreams = ["Vanilla", "Strawberry","Orange","Banana","Carrot"];
function icecreamlooper(arr, choice) {
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] === choice) {
            console.log("Yayy!!! You selected " + arr[index])
        }
        
    }
}
icecreamlooper(icecreams, "Orange")

const userslist = {1:"Jay",2:"Sunday", 3:"Christian"};
for (const x in userslist) {
   let ride = userslist[x];
   console.log(ride)
}
icecreams.forEach(x => {
    console.log(x)
});
for (const x of icecreams) {
    console.log(x)
}

















