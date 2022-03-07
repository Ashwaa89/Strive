
'1'
const sum = function(num1,num2) {
    return num1 === num2 ? (num1 + num2) * 3 : num1 + num2;
}
console.log('1,',sum(1,4))

'2'
const check = function(num1,num2) {
    return (num1 === 50) || (num2 === 50) || (num1 + num2 === 50)
}
console.log('2,',check(50,4))

'3'
const removeletter = function(str,pos) {
return str.slice(0,pos) +  str.slice(pos+1)
}
console.log('3,',removeletter('Strive',4))

'4'
const largest = function(num1,num2,num3) {
return  (num1 > num2 && num1 > num3) ? num1 : (num2 > num1 && num2 > num3) ? num2 : num3;
}
console.log('4,',largest(20,3,99))

'5'
const inrange = function(num1,num2) {
    return ((num1 >= 40 && num1 <= 60) || (num1 >= 70 && num1 <= 100)) && ((num2 >= 40 && num2 <= 60) || (num2 >= 70 && num2 <= 100))
}
console.log('5,',inrange(40,99))

'6'
const clonestr = function(source,num) {
let str = '';
for (let i = 0;i<= num;i++) {
    str += source
}
return str
}
console.log('6,',clonestr('Strive',6))

'7'
const checkcity = function (city) {
return city.includes('New') || city.includes('Los') ? city : false
}
console.log('7,',checkcity('New York'))

'8'
const numarrayQ8 =[1,9,22]
const sumarray = function(arr) { 
return  eval(arr.join('+'))
}
console.log('8,',sumarray(numarrayQ8))

'9'
const numarrayQ9 = [1,9]
const checkarrQ9 = function(arr) { 
return arr.includes(1) || arr.includes(3)
}
console.log('9,',checkarrQ9(numarrayQ9))

'10'
const numarrayQ10 = [2,9]
const checkarrQ10 = function(arr) { 
    return !arr.includes(1) && !arr.includes(3)
}
console.log('10,',checkarrQ10(numarrayQ10))

'11'
const arrayQ11 = ["Strive","School Web Dev","is","Great"]
const checkarrQ11 = function(arr) { 
return  arr.find(word => word.length === Math.max(...arr.map(word => word.length)))
}
console.log('11,',checkarrQ11(arrayQ11))

'12' 
const findangle = function(angle) { 
return (angle > 0 && angle < 90) ? 'acute' :  angle === 90 ? 'right' :  (angle > 90 && angle < 180) ? 'obtuse' : angle >= 180 ? straight : '';
}
console.log('12,',findangle(91))

'13'
const arrayQ13  = [1,8,55,90,2,67,55,600,2,8,4,3,96,55,230,447,12]
const checkarrQ13 = function(arr) { 
return arr.indexOf(Math.max(...arr))
}
console.log('13,',checkarrQ13(arrayQ13))

'14'
const arrayQ14  = [1,8,55,90,2,67,55,601,2,8,4,3,96,55,230,447,12]
const checkarrQ14 = function(arr) { 
 return Math.max(...arr.filter(num => num %2===0))  
}
console.log('14,',checkarrQ14(arrayQ14))

'15'
const checkevenoddvals = function (num1,num2) {
return (num1 %2 === 0 && num2%2 != 0) ||  (num1 %2 != 0 && num2%2 === 0)
}
console.log('15,',checkevenoddvals(1,6))

'16'
const formatstr = function(str) {
return str.length <= 3 ? str.toUpperCase() : str.slice(0,3).toLowerCase() + str.slice(3).toUpperCase()
}
console.log('16,',formatstr('STRive'))

'17'
const sumQ17 = function(num1,num2) {
    return (num1 + num2) >= 50  &&  (num1 + num2) <= 80 ? 65 : 80
}
console.log('17,',sumQ17(50,25))

'18'
const intFactor = function(num) {
return (num%3 === 0 ? 'Diego' : '') +  (num %5 === 0 ? 'Riccardo' : '') +  (num %7 === 0 ? 'Stefano' : '');
}
console.log('18,',intFactor(15))

'19'
const acronym = function(str) { 
return str.split(' ').map(word => word[0].toUpperCase()).join('')
}
console.log('19,',acronym('as soon as possible'))
