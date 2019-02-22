let magazine = ["ive", "got", "a", "lovely", "bunch", "of", "coconuts"]
let note = ["ive", "got", "some", "coconuts"]

function checkMagazine(magazine, note) {
    let magazineMap = new Map();
    let noteMap = new Map();
    let count = 0;
    for(let i = 0; i < magazine.length; i++){
        magazineMap.set(i, magazine[i])
    }
    for(let i = 0; i < note.length; i++){
        noteMap.set(i, note[i])
    }
    for(let key of noteMap.keys()){
        let noteWord = noteMap.get(key)
        let regexCheck = new RegExp (noteWord)
        for(let key2 of magazineMap.keys()){
            let magWord = (magazineMap.get(key2))
            if(regexCheck.test(magWord) == true){
                count++;
                magazineMap.delete(key2);
                noteMap.delete(key)
            }
        }
    }
    if(count === note.length){
        return("Yes");
    } else {
        return("No");
    }
}

checkMagazine(magazine,note)