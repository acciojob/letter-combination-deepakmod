let keys=["0","1","abc","def","ghi","jkl","mno","pqrs","tuv","wxyz"];
function letterCombinations(digit) {
  let ans=[];
  let output="";
  let index=0;
  console.log( solve(digit,index,ans,output)  );
}
function solve(digit,index,ans,output){
    if(index>=digit.length){
        return ans.push(output);
    }

    let number=parseInt(digit[index]);
    let str=keys[number];

    for(let i=0;i<str.length;i++){
        output.push(str.charAt[i]);
        solve(digit,index+1,ans,output);
        output.pop(str.charAt(i));
    }
}
module.exports = letterCombinations;
