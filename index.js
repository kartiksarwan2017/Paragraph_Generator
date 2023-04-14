const input = document.getElementById('numOfwords');
const container = document.querySelector(".container");

const generateWord = (n) => {

    /* Math.random() given the random numbers between 0 to 1.

    Math.random() * 10 gives the ramdom numbers between 0 to 10.

   (Math.random() * 10).toFixed(0); this will give the random number in between 1 to 10
    */

    let text = "";
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for(let i = 0; i < n; ++i){

        // This will given the randome letter from A to 10th charater i.e J
        // const random = (Math.random() * 10).toFixed(0);
        // text += letters[random];

        /* In order to get the random letters in a word from whole string we can use
        letters.length i.e length of the string */

        /* In the random 15 letters word we are getting undefined as letter as well because there are 26 letters and indexing in string starts from 0 to 25 i.e letters.length-1 */
        // const random = (Math.random() * letters.length).toFixed(0);
        // text += letters[random];

        /* This will return the word having random 
        letters from 0 to 25 
        Here we are using brackets since multiply has higher precedence than the subtract
        So in this case we have to subtraction first to we use brackets
        */

        // const random = (Math.random() * (25)).toFixed(0);
        // text += letters[random];

        const random = (Math.random() * (letters.length - 1)).toFixed(0);
        text += letters[random];
    }
    
    return text;
};


// console.log(generateWord(5));


const generatePara = () => {
   const numOfWords = Number(input.value);

   const para = document.createElement("p");

//    console.log(generateWord((Math.random()* 15).toFixed(0)));

   let data = "";

   for(let i = 0; i < numOfWords; i++){

    const randomNumber = (Math.random()* 15).toFixed(0);
    data += generateWord(randomNumber);
    // data += generateWord(randomNumber).toLowerCase();
    data += " ";

   }

//    console.log(data);

   para.innerText = data;

   para.setAttribute("class", "paras");

   container.append(para);

};

