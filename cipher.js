const cipher = {
  encode(offset1,message1){
    if (offset1==null || offset1=="" || offset1==[] || offset1==0 || message1==null || message1=="" || message1==0){
      throw new TypeError("No pueden quedar vacíos")}
    
    let string2 = "";
    let alphabet= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    offset1=((offset1%26)+26)%26;
    for(let i=0;i<message1.length;i++){
      if (alphabet.indexOf(message1[i])!= -1){
        let position=alphabet.indexOf(message1[i]);
        let positionAscci = alphabet.charCodeAt(position);
        let calculation = (positionAscci-65+offset1)%26+65;
        let result = String.fromCharCode(calculation);
        string2+=result;
      }
      else{
        string2+=message1[i];
      } 
    }
    return string2;
  },

  decode(offset2,message2){
    if (offset2==null || offset2=="" || offset2==[] || offset2==0 || message2==null || message2=="" ||message2==[] || message2==0){
      throw new TypeError("No pueden quedar vacíos")}
    let string2 = "";
    let alphabet= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    offset2=((offset2%26)-26)%26;
    for(let i=0;i<message2.length;i++){
      if (alphabet.indexOf(message2[i])!= -1){
        let position=alphabet.indexOf(message2[i]);
        let positionAscci = alphabet.charCodeAt(position);
        let calculation = (positionAscci-65-offset2)%26+65;
        let result = String.fromCharCode(calculation);
        string2+=result;
      }
      else{
        string2+=message2[i];
      } 
    }
    return string2;
  }
}

export default cipher;