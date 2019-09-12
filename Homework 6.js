/*1. Given a sorted array and an element from that array. Find the index of that
element using binary search. */
    function getIndex(x,arr=[]){
            let firstIndex=0,
                lastIndex=arr.length-1,
                midIndex=Math.floor(arr.length/2);
            if(x === arr[midIndex]) {
                return midIndex;
            } else
                if (x < arr[midIndex]) {
                    arr.splice(midIndex, lastIndex-midIndex+1);
                        return getIndex(x,arr);
                }
            else {arr.splice(firstIndex,midIndex+1);
            
            return getIndex(x,arr);}
    }
    console.log(getIndex(7,[7,9,10,12,14]));
    console.log(getIndex(9,[7,9,10,12,14]));
    console.log(getIndex(10,[7,9,10,12,14]));
    console.log(getIndex(12,[7,9,10,12,14]));
    console.log(getIndex(14,[7,9,10,12,14]));
    
