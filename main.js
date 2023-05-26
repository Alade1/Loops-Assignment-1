const numbers =[0,1,2,3,4,5,6,7,8,9,10];

for (let i=0; i<numbers.length; i++){
    console.log(numbers[i]);
}

let i= 0;
while(i < numbers.length){
    console.log(numbers[i]);
    i++;
}
let j =0;
do{
    console.log(numbers[j]);
    j++;
}
while(j < numbers.length);

const numbersTwo = [0,1,2,3,4,5,6,7,8,9,10];
for (let i = numbersTwo.length; i > 0; i--){
    console.log (numbers[i]);
}

let k = numbersTwo.length;
while(k > 0){
    console.log(numbersTwo[k]);
    k--;
}

let m = numbersTwo.length;
do{
    console.log(numbersTwo[m]);
    m--;
}
while(m>0);

let n = 10;

for (let i=0; i < n; i++){
    console.log(n)
}

let hashNode = ["#","##","###","####","#####","######","#######"];
for(i =0; i<hashNode.length;i++){
    console.log(hashNode[i]);
}

let numbersOne = [1,2,3,4,5,6,7,8,9,10];
let numbersThree=[1,2,3,4,5,6,7,8,9,10];

for(let i =0; i< numbersOne.length; i++){
    for(let j=0; j< numbersThree.length; j++){
        
      console.log( "1*1"+ "=" + numbersOne[0]*numbersThree[0]);
      console.log( "2*2"+ "=" + numbersOne[1]*numbersThree[1]);
      console.log( "3*3"+ "=" + numbersOne[2]*numbersThree[2]);
      console.log( "4*4"+ "=" + numbersOne[3]*numbersThree[3]);
      console.log( "5*5"+ "=" + numbersOne[4]*numbersThree[4]);
      console.log( "6*6"+ "=" + numbersOne[5]*numbersThree[5]);
      console.log( "7*7"+ "=" + numbersOne[6]*numbersThree[6]);
      console.log( "8*8"+ "=" + numbersOne[7]*numbersThree[7]);
      console.log( "9*9"+ "=" + numbersOne[8]*numbersThree[8]);
      console.log( "10*10"+ "=" + numbersOne[9]*numbersThree[9]);
      

    
    }
}

let numbersFour =[0,1,2,3,4,5,6,7,8,9,10];

for (let i =0; i < numbersFour.length; i++){
    console.log(numbersFour[i] ** 2);

}
for (let i =0; i < numbersFour.length; i++){
    console.log(numbersFour[i] ** 3);

}

for (let i =0; i <=100; i++){
    if(i % 2 ===0){
        console.log(i);

    }
    
}
for (let i =0; i <=100; i++){
    if(i % 2){
        console.log(i);

    }
    
}

function isPrime(num) {
    if(num < 2){ return false;}
    for (var i = 2; i < num; i++) {
        if(num%i==0)
            return false;
    }
    return true;
    for(var i = 0; i < 100; i++){
        if(isPrime(i)) console.log(i);
    }
}

 let numberFive = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100];
 let total =0;
 for (let i=0; i <=numberFive.length;i++){
    total = total + i 
 }
 console.log("The total sum of 0 to 100 is" + total);

 let sum=0 
 for(i=1;i<=100;i++)
 {
   if(i%2==0)
   {
     sum=sum+i
   }
 }
 console.log("The total of even numbers" + sum);

 let nextSum =0;
 for(let i=0; i<=100; i++){
    if(i%2){
        nextSum = nextSum + i;
    }
 }
 console.log("The total sum of odd numbers"+ nextSum);

 let arrA = [];
 for(let i=0; i<5; i++){
    arrA.push(Math.floor(Math.random() * i))
 }
 console.log(arrA);

 let arrB = [];
 for(let i=0; i<10; i++){
    if(i % 2 == 0){
    arrB.push(Math.floor(Math.random() * i))
    }
 }
 console.log(arrB);

let characters = "5j2khz";

function generateString(length){
    let result ="";
    const charactersLength = characters.length;

    for(let i=0; i = charactersLength; i++){
        result = result + characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
console.log(generateString(5));




































