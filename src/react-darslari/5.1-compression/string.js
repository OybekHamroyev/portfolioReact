
function compress(string){
    let count=0;          //sanagich
    let compressedStr='';         //olinadigan qator harf va soni
    for(i=0; i<string.length; i++){
        count++;
        let currentLetter=string[i];   ///joriy harfni currentLetter ga olib
        if(string[i]!==string[i+1]){        //tekshiramiz harf o'zidan keyingisiga teng bulmasa
            compressedStr+=currentLetter+count;   //satrga-> joriy harf va soni ni yozamiz
            count=0;   //sanagichni nol qilamiz
        } 
    }
    return compressedStr.length<string.length?compressedStr:string;
}

let str='aaaabbbccd';
console.log(`Raw: ${str}`);
console.log(`Compressed: ${compress(str)}`);