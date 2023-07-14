/*1. student adlı obyekt yaradıb name, age, course, faculty adlı sahələr verib hər 
birini console çıxardın.*/
const student={
    Name: "Sakina",
    Age: 20,
    Course: 3,
    Faculty: "Applied Mathemgatics and Cybernetics",
}
console.log(student);
//2. Bir obyekt yaradıb başqa dəyişənə yeni obyekt kimi kopyala.
const classroom = { 
    student:"Sakina",
    teacher:"Javid",
    Course:"Dev Education"
  }; 
  const information =Object.assign({},classroom); 
  console.log(information);
   

//3. 1-dən 10 kimi olan ədədlərin hərfi yazılışın obyektdən istifadə edərək console çıxardın.
const number = { 
    1: "bir", 
    2: "iki", 
    3: "uc", 
    4: "dord", 
    5: "bes", 
    6: "alti", 
    7: "yeddi", 
    8: "sekkiz", 
    9: "doqquz", 
    10:"on",
    herfiyazilis: function () { 
      return ( 
        this["1"] + 
        " " + 
        this["2"] + 
        " " + 
        this["3"] + 
        " " + 
        this["4"] + 
        " " + 
        this["5"] + 
        " " + 
        this["6"] + 
        " " + 
        this["7"] + 
        " " + 
        this["8"] + 
        " " + 
        this["9"]+
        " " + 
        this["10"] 
      ); 
    } 
  }; 
  console.log(number.herfiyazilis()); 
/*4. person adlı, sahələri name, surname olan obyektdə getFullName adlı bir funskiya yaradıb 
name + surname qaytarsın.*/
const person={
    Name: "Sakina",
    Surname: "Aliyeva",
    getfullName : function () {
       return this.Name+ " " + this.Surname;
    }
}
console.log(person.getfullName());
/*5. Hər hansısa bir obyekt yaradıb onun key və value bir sətrdə console çıxardın.
 Məsələn: Nəticədə “key: name, value: Cavid”.*/
 const dev = { 
    name: "Dev Education", 
  }; 
  for (key in dev) { 
    console.log("key:", key, "name:", dev[key]); 
  } 

 //6. Obyektin hər hansısa bir sahəsinin olub olmadığını yoxluyan bir funksiya yazın.
const car={name:"BMW", color:"black"}
console.log(Object.hasOwn(car, 'name'));

//7. Ədədlərdən ibarət obyekt yaradın və bütün value-ların cəmini console çıxardın.
const obj = {
    one: 1,
    two: 2,
    three: 3,
  };
    let sum=0;
for(const key in obj){
    sum+=obj[key];
}
console.log(sum)