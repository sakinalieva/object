/*1. Ədədlərdən ibarət olan bir massiv yaradın və
 onun uzunluğun iki dəfə azaldın.*/
 const arry = [1, 2, 3, 4, 5, 6]; 
  arry1=[]
  for (let i = 0; i < arry.length / 2; i++) { 
    arry1=[...arry1,arry[i]] 
  } 
  console.log(arry1)
//2. Massivdə yerləşən bütün ədədlərin cəmini tapın.
const massiv = [1, 2, 3, 4, 5, 6]; 
  sum = 0; 
  for (let i = 0; i < massiv.length; i++) { 
    sum += massiv[i]; 
  } 
  console.log(sum); 
//3. Massivdə yerləşən ən böyük və ən kiçik ədədi tapın.
const arr = [1, 2, 3, 4, 5, 6]; 
  let max = arr[0]; 
  let min = arr[0]; 
  for (let i = 0; i < arr.length; i++) { 
    if (max <= arr[i]) { 
      max = arr[i]; 
    } 
    else { 
      min = arr[i]; 
    } 
  } 
  console.log("max:",max, "min:",min); 
   
/*4. Massivdə yerləşən bütün tək və cüt ədədlərı ayrı massivlərə yazın.
 Məsələn [1,2,3,4,5] -> [1,3,5] və [2,4].*/
 const arrr = [5, 2, 8, 11, 6, 19]; 
 let ar1 = []; 
 let ar2 = []; 
 for (let i = 0; i < arrr.length; i++) { 
   if (arrr[i] % 2 == 0) { 
     ar1 = [...ar1, arrr[i]]; 
   } 
else { 
     ar2=[...ar2,arrr[i]] 
   } 
 } 
 console.log(ar1); 
 console.log(ar2); 
 
//5. Massivdə yerləşən ədələri böyükdən kiçiyə və kiçikdən böyüyə çeşidliyin.
let a=[6,9,4,5,7,3] 
  for(i=0;i<a.length;i++){ 
    for(j=0;j<a.length;j++){ 
        if(a[i]>a[j]){
            temp=a[j]
            a[j]=a[i]
            a[i]=temp
        }}
        } 
        console.log(a)
        for(i=0;i<a.length;i++){ 
            for(j=0;j<a.length;j++){ 
        if(a[j]>a[i]){
            temp=a[i]
            a[i]=a[j]
           a[j]=temp
        }
      
    }}
  console.log(a)

/*6. Massivdən false deyimli (undefined, null, false və s.i.) 
elementləri silib yeni massiv qaytaran funksiya yazın.*/
 const ar = [undefined, false, 1, 3, "ee"]; 
  let ar3 = []; 
  for (let i = 0; i < ar.length; i++) { 
    if (ar[i]) { 
     
      ar3=[...ar3,ar[i]]; 
    } 
  } 
  console.log(ar3); 
//7. Massivdə yerləşən elementləri reverse edən funksiya yazın.
const mas1 = [1, 2, 3, 5, 7, 8, 4]; 
let mas2=[] 
function revers(){ 
for (i = mas1.length-1; i >= 0; i--) { 
  mas2=[...mas2,mas1[i]] 
} 
  return mas2;
} 
console.log(revers())
