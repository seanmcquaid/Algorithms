let magazine = ["ive", "got", "a", "lovely", "bunch", "of", "coconuts"]
let note = ["Ive", "got", "coconuts"]

function checkMagazine(magazine, note) {
    let magazineCount = {};
    for(let i = 0; i < magazine.length; i++){
        let word = magazine[i];
        magazineCount[word] = (magazineCount[word] || 0) + 1;
    }
    let noteCount = {};
    for(let i = 0; i < note.length; i++){
        let word = note[i];
        noteCount[word] = (noteCount[word] || 0) + 1;
    }
    let stringCount = 0;
    for(let keys in noteCount){
        if(magazineCount[keys] >= noteCount[keys]){
            stringCount++;
        }
    }
    if(stringCount === note.length){
        return "Yes"
    } else {
        return "No"
    }
}

console.log(checkMagazine(magazine,note))