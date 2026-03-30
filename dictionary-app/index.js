const form = document.querySelector('form');
const resultDiv = document.querySelector('.result');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    getWordInfo(form.elements[0].value);
});



const getWordInfo = async (word) => {

    try{

   
    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
    const data = await response.json();

    const definitionObj = data[0].meanings[0].definitions[0];

    resultDiv.innerHTML = `
        <h2><strong>Word:</strong> ${data[0].word}</h2>
        <p><strong>Part of Speech:</strong> ${data[0].meanings[0].partOfSpeech}</p>
        <p><strong>Meaning:</strong> ${definitionObj.definition || 'Not found'}</p>
        <p><strong>Example:</strong> ${definitionObj.example || 'Not found'}</p>
        <p><strong>Antonyms:</strong></p>


    `;

    // fetching antonyms
    if (!definitionObj.antonyms || definitionObj.antonyms.length === 0) {
    resultDiv.innerHTML += `<p>Not found</p>`;
        }

    else{
        for (let i = 0; i < definitionObj.antonyms.length; i++) {
            resultDiv.innerHTML +=`<li> ${definitionObj.antonyms[i]} </li>`

       }


        
    }
     resultDiv.innerHTML +=`<div><a href="https://www.dictionary.com/browse/${data[0].word}" target="_blank">Learn more</a></div>`;

    console.log(data);
}
    catch(error){
        resultDiv.innerHTML=`<p>Word not found. please try again.</p>`;
        console.error(error);

}


};