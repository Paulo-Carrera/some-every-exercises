
//  HAS ODD NUMBER

function hasOddNumber(arr){
    return arr.some(function(val){
        return !!(val % 2 === 0);
    })
}

// console.log(hasOddNumber([2,4,5,6]))    //true









//  HAS A ZERO

function hasAZero(number){
    let digits = number.toString().split('').map(Number);

    for(let digit of digits){
        if (digit === 0){
            return true;
        }
    }
    return false;
}

// console.log(hasAZero(123456789))    //false
// console.log(hasAZero(1203))     //true





//  HAS ONLY ODD NUMBERS

function hasOnlyOddNumbers(arr){
    return arr.some(function(numbers){
        return !(numbers % 2 === 0);
    })

}

// console.log(hasOnlyOddNumbers([1,3,5,7,9]))     //true
// console.log(hasOnlyOddNumbers([2,4,6,8,10]))     //false









//  HAS NO DUPLICATES

function hasNoDuplicates(arr){
    return arr.every(function(val , index){
        return arr.indexOf(val) === index;
    });
}

// console.log(hasNoDuplicates([1,2,3,4,1]))     //false
// console.log(hasNoDuplicates([1,2,3,4,5]))     //true





// HAS CERTAIN KEY

function hasCertainKey(arr , key){
    return arr.every(function(obj){
        return obj.hasOwnProperty(key)
    })
}

let arr = [
    {title: "Instructor", first: 'Elie', last:"Schoppik"},
    {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true},
    {title: "Instructor", first: 'Matt', last:"Lane"},
    {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
  ]


//   console.log(hasCertainKey(arr,'first')) // true
//   console.log(hasCertainKey(arr,'isCatOwner')) // false







// HAS CERTAIN VALUE

function hasCertainValue(arr , key , value){
    return arr.every(function(obj){
        if(obj.hasOwnProperty(key)){
            if(obj[key] === value){
                return true;
            }
        }
        return false 
    });
}


  console.log(hasCertainValue(arr,'title','Instructor')) // true
  console.log(hasCertainValue(arr,'first','Elie')) // false

