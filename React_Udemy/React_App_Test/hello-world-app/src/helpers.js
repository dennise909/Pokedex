//gets a random item from the array and returns the item
function getsRandomItem(list){
let result = list[Math.floor(Math.random() * list.length)];
return result;
}

//checks the random fruit on the list and returns the list without the random fruit 
function checksList(list,result){
let  position = list.indexOf(result);
if ( ~position ) list.splice(position, 1);

return list;
}

export {getsRandomItem,checksList}