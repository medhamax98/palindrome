function rot13(str) {
  let cs="";
  for(let i=0; i<str.length; i++){
    if(str.charAt(i)>= 'A' && str.charAt(i)<='M'){
      let t=str.charCodeAt(i);
      t=t+13;
      let p = String.fromCharCode(t);
      cs=cs+p;
    }
    else if(str.charAt(i)>='N' && str.charAt(i)<='Z'){
      let t=str.charCodeAt(i);
      t=t-13;
      let p = String.fromCharCode(t);
      cs=cs+p;
    }
    else{
      cs=cs+str[i];
    }
  }
  return cs;
}

console.log(rot13("SERR CVMMN!"));

