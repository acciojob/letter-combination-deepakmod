let keys=["0","1","abc","def","ghi","jkl","mno","pqrs","tuv","wxyz"];
function letterCombinations(digit) {
  let ans=[];
  let output=[];
  let index=0;
  return solve(digit,index,ans,output);
}
function solve(digit,index,ans,output){
    if(index>=digit.length){
        return ans.push(output.join(""));
    }
    
    let number=parseInt(digit[index]);
    let str=keys[number];
    
    for(let i=0;i<str.length;i++){;
        output.push(str[i]);
        solve(digit,index+1,ans,output);
        output.pop();
    }
}