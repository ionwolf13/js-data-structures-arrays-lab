// Write your solution here!
let drivers = ["Milo","Otis","Garfield"]
let newArray = []
function destructivelyAppendDriver(name){drivers.push(name)}
function destructivelyPrependDriver(name){drivers.unshift(name)}

function destructivelyRemoveLastDriver(name){drivers.pop()}
function destructivelyRemoveFirstDriver(name){drivers.shift()}
function appendDriver(name){
    newArray = [...drivers,name]
    return newArray
}
function prependDriver(name){
    newArray = [name,...drivers]
    return newArray
}

function removeLastDriver(name){
    arr = drivers.slice(0,2)
    newArray = [arr]
    return newArray
}
function removeFirstDriver(name){
    newArray = [drivers.slice(1)]
    return newArray
}