const arr = [[5,6,7],[9,8,7],[6,8,9]];

//diagonal difference
const diaDiff = (arr)=>{
    let dia1 = 0;
    let dia2 = 0;

    for(let i=1;i<=arr.length;i++){
        dia1+=arr[i-1][i-1];
        dia2+=arr[i-1][arr.length-i];
    }

    let diff = dia1 - dia2;

    if(diff<0) return -diff;
    else return diff; 
}

console.log(diaDiff(arr))

//counting sort
function countingSort(arr) {
    // Write your code here
    let rarr = new Array(100).fill(0);
    for(let i=0;i<arr.length;i++){
        rarr[arr[i]]+=1;
    }
    return rarr;
}

//min max
function miniMaxSum(arr) {
    // Write your code here
    let sum=0;
    
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    
    let res = [sum,0];
    let diff;
    
    for(let i=0;i<arr.length;i++){
        diff = sum-arr[i];
        if(diff>res[1]) res[1] = diff;
        if(diff<res[0]) res[0] = diff;
    }
    
    console.log(res[0]+" "+res[1])
    
}

//tallest candles count
function birthdayCakeCandles(candles) {
    // Write your code here
    let max=candles[0];
    let res=0;
    for(let i=0;i<candles.length;i++){
        max = max<candles[i] ? candles[i] : max;
    }
    
    for(let i=0;i<candles.length;i++){
        res = candles[i]==max ? res+1 : res;
    }
    
    return res;
}

//grading students
function gradingStudents(grades) {
    // Write your code here
    let out = [];
    for(let i=0;i<grades.length;i++){
        let mul5 = (grades[i]-grades[i]%5)+5;
        
        if(mul5>=40 && (mul5-grades[i])<3) out.push(mul5);
        else out.push(grades[i]);
    }
    return out;
}