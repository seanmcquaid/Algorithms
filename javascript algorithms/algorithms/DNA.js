let dna = "AAAA";
function DNAStrand(){
    let changedDNA = "";
    let dnaStringEquiv = {
    "A" : "T",
    "T" : "A",
    "C" : "G",
    "G" : "C",
    }
    for (let i = 0; i < dna.length; i++){
    let mutatedDNACheck = dnaStringEquiv[dna[i]];
        changedDNA += mutatedDNACheck;
     }
     console.log(changedDNA);
  }

DNAStrand(dna);