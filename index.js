// Create Array it could be shown what we should type in text area


const setOfWord = [
    "My name is kishan sakariya and i am a software engineer.",
    "Hope you are doing good this is a simple typing test code using html, css and javascript",
    "if you are also doing this this project than i will provide this link in github,so you can create your own version of this challange..Thank You..:)"
];

//Get reference of all element that we can use in give functionallity
const msg = document.getElementById('msg');

const typewords = document.getElementById("mywords");

const btn = document.getElementById('btn');

// when we start typing and when we end typing
let startTime , endTime;

// Define playGame() function here
const playGame = () => {
    // randomly show any array's sentences
    let randomNum = Math.floor(Math.random()*setOfWord.length); //floor means 1.2 = 1 or 3.6 = 3
    // console.log(randomNum);

    //Show set of word in h2(msd(id)) tag 
    msg.innerText = setOfWord[randomNum];

    // ****when user start typing??
    let date = new Date(); 
    startTime = date.getTime();
    btn.innerText = "DONE";
}

const endPlay = () => {
    //when user end typing?**
    let date = new Date();
    endTime = date.getTime();

    // How much time user was take*********
    let totalTime = ((endTime - startTime)/1000); ///1000 means 10.12
    console.log(totalTime);


    //!word Count

    let totalStr = typewords.value;
    let wordCount = wordCounter(totalStr);

    //speed
    let speed = Math.round((wordCount/ totalTime)*60);

    //display word count and speed

    let finalMsg = "Yor Typed total at " + speed + " words per minutes ";

    // Copare word for check all words are right or wrong!!!!

    finalMsg += compareWord(msg.innerText , totalStr);
    msg.innerText = finalMsg;
}

// comparison  of typed word and actual word
const compareWord = (str1 , str2) =>{
    let words1 = str1.split(" ");
    let words2 = str2.split(" ");
    let cnt = 0;

    // arrayName then foreach then it will take whole function with value and index no. of of that array
    
    words1.forEach(function(item , index){
        if (item = words2[index]){
            cnt++;
        }
    })
    
    let errorWords = (words1.length - cnt);
    return (cnt + " correct out of " + words1.length + " words and the total number of error  are " + errorWords + ".");  // cnt   {Total Correct words}

}

const wordCounter = (str) =>{
    // divided by space so we can get how much word... 
    let response = str.split(" ").length;
    console.log(response);
    return response;
}

// when btn is pressed than our typing will start

btn.addEventListener('click' , function(){
    // console.log(this);
    // this keyword defined current object or scope(in this code current scope is button)
    if(this.innerText == 'START'){
        typewords.disabled = false;
        playGame();
    }
    else if(this.innerText == 'DONE'){
        typewords.disabled = true;
        btn.innerText = "START";
        endPlay();
    }
});


