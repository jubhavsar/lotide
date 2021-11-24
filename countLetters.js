
const countLetters = (words)=>{
  let newStr = '';
  let objCountLtr = {};
  
  
  for(let i=0; i<words.length; i++){
  if(words[i] === " "){
    newStr+=words[i+1]
    i++;
  }else
  newStr+=words[i];
  }
for(let i=0; i<newStr.length; i++){
  if(objCountLtr[newStr[i]]){
      objCountLtr[newStr[i]]++;
  }else{
    objCountLtr[newStr[i]]= 1;
  }
  
}
return objCountLtr;
}
console.log(countLetters("lighthouse in the house"));