console.log('hello World')

let backpack = []

backpack.push('sword', 'postion')
backpack.push('sheild')
backpack.push('food')

//console.log(backpack)

let onBelt = backpack.splice(0,1)

console.log(backpack)
console.log(onBelt)
console.log(`Backpack: `, backpack, `Belt: `, onBelt)