console.log('=================================')
console.log('==========1 dalis================')
console.log('==========1 uzduotis=============')
let array1 = [1,2,3,5,6,7];
console.log('Pirmas narys ',array1[0])
console.log('Paskutinis narys ',array1[array1.length-1])
console.log('Antras narys ',array1[1])
console.log('Vidurinis narys ',array1[3])
console.log('Nariu skaicius ',array1.length)
console.log('==========2 uzduotis=============')
let array2 = [11,22,33,55,66,77];
console.log('Masyvas: ',array2)
array2[2]=333;
array2[1]=567;
console.log('Masyvas po pakeitimo: ',array2);
console.log('==========3 uzduotis=============')
let array3=[];
array3.push(34,98,234,89,0,23);
console.log(array3);
console.log('==========4 uzduotis=============')
let array4=[];

for (let i=0; i<20; i++) {
    let random = Math.floor(math.random()*10)+1;
    array4.push(random);
}
console.log('Atsitiktinis mayvas: ',array4)
console.log('==========5 uzduotis=============')