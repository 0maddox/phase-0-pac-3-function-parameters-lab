function introduction(Aki){
    return (`Hi, my name is ${Aki}.`);
}

function introductionWithLanguage(firstName ="Aki",language = "ember.js"){
    return (`Hi, my name is ${firstName} and I am learning to program in ${language}.`);
}

function introductionWithLanguageOptional(firstName = "Gracie",language = "JavaScript"){
    return (`Hi, my name is ${firstName} and I am learning to program in ${language}.`);
}