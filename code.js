function permutationSort(a) {
    if(a.length <= 1){
            return 1;
    }
    let b = JSON.parse(JSON.stringify(a))
    for(let i = 0; i < a.length; i++){
        console.log(a)
        a[0] = b.splice(i,1)[0];
        let accum = permSort(a,b,1)
        if(accum > 0) {
            //console.log(a)
            return accum;
        }
        b.splice(i,0,a.splice(0,1)[0])
    }
}

function permSort(a, b, c){
    if(c == a.length){
        a[c] = b.splice(0,1)[0];
        if(isSorted(a))
            return 1;
        else
            return 0;
    }
    else{
        for(let i = 0; i < b.length; i++){
            a[c] = b.splice(i,1)[0];
            console.log(a)
            accum = permSort(a,b,c+1)
            if(accum > 0){
                //console.log(a)
                return accum;
            }
            b.splice(i,0,a.splice(c,1)[0])
        }
        return 0;
    }
}
    
/*
    arVals = [];
    if(a.length <= 1 || isSorted(a))
        return accumulator;*/
    /*const horse = true;
    while (horse == true){
        console.log("Nay")
    }*/
/*    for(let i = 0; i < a.length; i++)
        arVals[i] = i;
    f = 0;
    for(let i = 0; i < a.length; i++){
        a[f] = tempArray[arVals.splice(i,1)[0]];
        f++;
        if(permutationSort(a) >= 0){
            return accumulator;
        }
        f--;
        tempArray.splice(i,0,a.splice(f,1));
    }
    return accumulator;
}*/

/*
function permSort(a, arr){
    if(arr.length < 1){
        if(isSorted(a)){
            return 0;
        }else
            return -1;
    }else{
        for(let i = 0; i < arr.length; i++){
            a[tempArray.length - arVals.length] = arr.splice(i,1)[0];
            if(permSort(a, arr) >= 0)
                return accumulator;
            console.log("new Array: " + newArray)
            arr.splice(i,0,a.splice(tempArray.length - arVals.length, 1)[0])
        }
        return -1;
    }
}
*/
/*function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }
*/

  function isSorted(array) {
    sorted = true;
    for(let i = 0; i < array.length - 1 && sorted == true; i++) {
        sorted = (array[i] <= array[i + 1])
    }
    return sorted;
  }
  //https://www.w3schools.com/js/js_random.asp
