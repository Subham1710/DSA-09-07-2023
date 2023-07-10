var twoSum  = (nums,target) =>  {

    let indexes = [];
    

for(let i =0; i< nums.length;i++){
    for(let j = i+1;j<nums.length;j++){
        if(nums[i]+nums[j] === target){
            indexes.push(i);
            indexes.push(j);

        }
    }
}    

return indexes;


};



// Other solution
//1) Create Hashmap
//2) Iterate through input array
//required value in hashmap?
//If present return the result 
//Else add curr value to map




