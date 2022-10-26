const url="https://api.wordnik.com/v4/words.json/randomWord?hasDictionaryDef=true&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=-1&api_key=szpv46aupjsjuxvkx4hr6uw107orxi3nkag31fcp8rnijll0a";
fetch(url)
    .then(data=>data.json())//get req for a random word.
    .then(wordData=>{
        const word=wordData.word;//for accesing the word
        const paraId=document.getElementById("Word");
        paraId.innerHTML=word;//DOM for the p tag used for showing the word.

        const urld="https://api.wordnik.com/v4/word.json/"+ word+"/definitions?limit=200&includeRelated=false&useCanonical=false&includeTags=false&api_key=szpv46aupjsjuxvkx4hr6uw107orxi3nkag31fcp8rnijll0a";

        fetch(urld)//get request for the definition.
        .then(data=>data.json())
        .then(definition=>{
            const def=definition[0].text;//extracting the definition out of the request.
            const defId=document.getElementById("def");
            defId.innerHTML=def;
        });
    });