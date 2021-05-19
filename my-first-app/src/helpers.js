function helpful (){
    console.log("I did a super useful thing")
}

function sort(){
    console.log("all sorted")
}

function sing(){
    console.log("y tu amandome sin mirar")
}

//export default helpful; en caso de que solo quiera exportar una cosa y es a most likely thing to be exported
export default helpful;
export {sort,sing} // exportar varias cosas al mismo tiempo
