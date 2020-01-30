//conditional operators: ==  <  >  <=  >=  !=

let numValue1=10;
let numValue2=10;
let strValue1="java";
let strValue2="10";
let strValue3="java";
let strValue4="22225";

//comparing two numbers
//equal to operator
if(numValue1==numValue2)  //matched
{
    console.log("matched");
}
else
{
    console.log("not matched");
}

//less than operator
if(numValue1<numValue2) //false
{
    console.log("true");
}
else
{
    console.log("false");
}

//less than equal to operator
if(numValue1<=numValue2) //true(just because of = operator)
{
    console.log("true");
}
else
{
    console.log("false");
}

// not equal to operator
if(numValue1!=numValue2) //true(just because of = operator)
{
    console.log("10 != 10");
}
else
{
    console.log("10 not != 10(ie; 10 == 10)");
}

///////////////////////////////////////////////////////////////////////////////////////


//comparing two string values(not allowed in other programming languages)
if(strValue1==strValue2)//not matched
{
    console.log("matched");
}
else
{
    console.log("not matched");
}


if(strValue1==strValue3)//matched(checks the ascii value and length)
{
    console.log("matched");
}
else
{
    console.log("not matched");
}

if(strValue1>strValue3)//not greater(they are same)
{
    console.log("is greater");
}
else
{
    console.log("not greater");
}

if(strValue1>=strValue3)//is greater or equal
{
    console.log("is greater or equal");
}
else
{
    console.log("not greater");
}

if(strValue1>=strValue2)//java is greater than 10
{
    console.log("java is greater than 10");
}
else
{
    console.log("java is not greater than 10");
}

if(strValue1>strValue4)//java is greater than 15
{
    console.log("java is greater than 15");
}
else
{
    console.log("java is not greater than 15");
}

////////////////////////////////////////////////////////////////////////////////////////////////////

//comparing number and string

if(numValue1==strValue2)//matched(considers the value and not data type)
{
    console.log("matched");
}
else
{
    console.log("not matched");
}
//When comparing a string with a number, JavaScript will convert the string
// to a number when doing the comparison. An empty string converts to 0. A non-numeric string converts to NaN.

if(numValue1==strValue1)//not matched
{
    console.log("matched");
}
else
{
    console.log("not matched");
}


if(numValue1>=strValue4)//10 no. not >= 22225 string
{
    console.log("10 no. >= 22225 string");
}
else
{
    console.log("10 no. not >= 22225 string");
}


if(strValue1>=numValue1)//java not >= 10
{
    console.log("java >= 10");
}
else
{
    console.log("java not >= 10");
}
//since strValue gets converted to number and because it is non-numeric it gives NAN
//so we get false body

/////////////////////////////////////////////////////////////////////////////////////////////


//compare number to boolean

//case1 
let numValue3= null;
let strValue5= "true";
let boolValue1= false;

if(numValue3==boolValue1)//null != false
{
    console.log("null == false");
}
else
{
    console.log("null != false");
}

//case 2
let boolValueTest=Boolean(numValue3);
console.log(boolValueTest);//false
console.log(typeof(boolValueTest));//boolean 
//null gets converted to boolean with value=false
//null is inclined to false more than true.


if(boolValue1==boolValueTest)//null->== false
{
    console.log("null->false == false");
}
else
{
    console.log("null->false != false");
}

//in case 1 we are directly comparing null with false
//and null is neither 0 nor 1
//while in case 2 we are converting it to boolean first
//and because null is slightly inclined to false it 
//results in false....and since now two false are compare
//we get 'null ->(converted to)false== false'.

let numValue4=10;
let boolValue2 =true;

if(numValue4==boolValue2)//10 != true
{
    console.log("10==true");
}
else
{
    console.log("10 != true");
}


if(numValue4==boolValue1)//10 != true
{
    console.log("10==true");
}
else
{
    console.log("10 != true");
}

//since 0=false and 1=true so 10 is neither true nor false

let boolValue3=Boolean(numValue4);
console.log(boolValue3);//true
console.log(typeof(boolValue3));//boolean
//since numValue4 is not 0; so it is converted to true.

if(boolValue3==boolValue2)
{
    console.log("10->(true)==true");
}
else
{
    console.log("10->(true) != true");
}

//JS convert string to number before comparing..
//but doesn't act same in case of boolean.it does direct comparison.