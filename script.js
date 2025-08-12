function divide(arr,t){
    let result =[]
    let j=0
    let subArr = [];
    arr.forEach(e => {
        if(j+e>t){
            result.push([...subArr])
            j=0
            subArr =[]
        }
            subArr.push(e)
            j+=e;
        });
 if (subArr.length) {
        result.push(subArr);
    }
        return result 
}
const n = Number(prompt("Enter limit: ") || 0);
const arrInput = prompt("Enter numbers separated by spaces:") || "";
const arr = arrInput
              .trim()
              .split(/\s+/)
              .map(Number);

alert(JSON.stringify(divide(arr, n)));