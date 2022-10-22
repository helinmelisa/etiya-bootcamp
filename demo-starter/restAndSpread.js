export function sizCevapVerin(){
    return [10, 20, 30, 40, 50];
}

//rest operator
//parametreleri diziye dönüştürür, birleştirir
export function sum(...numbers){
    let total = 0;
    for(let i=0; i < numbers.length; i++){
            total += numbers[i];
    }
    return total;
    //return numbers.reduce((total, number) => total + number, 0);
}

function avg(cevapVerenKisiSayisi, ...numbers) {
    return sum(...numbers) / cevapVerenKisiSayisi;
}

//spread operator
//dizi elemanlarını tek tek parametre olarak gönderir, ayrıştırır
export const cevaplariniz = sizCevapVerin();
const result = avg(26, ...cevaplariniz);
console.log(result);
//console.log(Math.max(...cevaplariniz));



function sayMyName(...letters){
    //console.log(letters.first);
    for (const letter of letters) {
        console.log(letter)
    }
}
sayMyName(...Object.keys({name:"Helin", surname:"Er"}));

let instructor = {
    firstName:"Naz",
    lastName: "Mel",
};

let student = {
    firstName:"Melisa",
    lastName: "Han",
};

const learningTopic = {
    topic:["JS"],
};

student = {
    ...student,
    ...learningTopic,
};
learningTopic.topic.push("Angular");
console.log(instructor);
console.log(student);

