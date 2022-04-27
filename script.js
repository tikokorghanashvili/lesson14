// 1 დავალება
let array= [5, 6, 10, 25, 3, 7, 4, 100, 28, 36, 89];
array.push( 'javascript' , 'python');
array.unshift( 'html', 'css');
array.shift();
array.pop();

console.log(array);

// 2 მაგალითი
let names= ['Orange','banana','pear'];
names.push('apple','Pineapple');
names.unshift('Watermelon');
names.splice(2,0,'mango');
names.shift();
names.pop();

console.log(names);

// 3 მაგალითი
let array = [12, 25, 3, 6, 8, 14, 7, 23];
let result=array.map(x => x/3);

console.log(result);

// 4 მაგალითი
let array = ["hello", 125, "javascript", "html", 43, "css", "scss", "bootstrap", 88, 59, "python"];
let newarray=array.filter(item => item % 2 ==1);

// არ მაქვს დასრულები მხოლოდ კენტები გამომაქვს ჯერ

console.log(newarray);

// 5 მაგალითი
let languages = ['html', 'css', 'javascript', 'python','php'];
let newlanguages=languages.filter(x => x.length>3);

console.log(newlanguages);

// 6 მაგალითი
let array= ['academy', 'of', 'digital', 'industries'].reduce(function(x,y){
    return x.concat(y);
},
''
)

console.log(array);

// 7 მაგალითი
let item = [12, 'google', 32, null, 'yahoo', 25];
let newitem=item.map(x=> x * x);

console.log(newitem);


// 8 მაგალითი
let words = ['Madrid', 'Rome', 'Milan', 'Berlin'];
let newwords=words.filter(x=> x.includes('M') || x.includes('m'));

console.log(newwords);