/*
function newImg (gant, s, ll, lb) {
    let gant = document.createElement('img')
    gant.src = 's'
    gant.style.position = 'fixed'
    gant.style.left = 'll'
    gant.style.bottom = 'lb'
    document.body.append('gant')
}

newImg ('gc', 'assets/green-character.gif', '100px', '100px')
newImg ('pt', 'assets/pine-tree.png', '450px', '200px')
newImg ('t', 'assets/tree.png', '200px', '300px')
newImg ('p', 'assets/pillar.png', '350px', '100px')
newImg ('c', 'assets/crate.png', '150px', '200px')
newImg ('w', 'assets/well.png', '500px', '425px')
*/
//I couldn't get the function to work I would appreciate some advice or after class help if possible.
//As such copy-paste was the most expediant way to compleate the assignmen, sorry.
//Ammendum now not even the copy-paste seems to work and i have no idea why.

let greenCharacter = document.createElement('img')
greenCharacter.src = 'assets/green-character.gif'
greenCharacter.style.position = 'fixed'
greenCharacter.style.left = '100px'
greenCharacter.style.bottom = '100px'
document.body.append(greenCharacter)

let pineTree = document.createElement('img')
pineTree.src = 'assets/pine-tree.png'
pineTree.style.position = 'fixed'
pineTree.style.left = '450px'
pineTree.style.bottom = '200px'
document.body.append(pineTree)

let tree = document.createElement('img')
tree.src = 'assets/tree.png'
tree.style.position = 'fixed'
tree.style.left = '200px'
tree.style.bottom = '300px'
document.body.append(tree)

let pillar = document.createElement('img')
pillar.src = 'assets/pillar.png'
pillar.style.position = 'fixed'
pillar.style.left = '350px'
pillar.style.bottom = '100px'
document.body.append(pillar)

let crate= document.createElement('img')
crate.src = 'assets/crate.png'
crate.style.position = 'fixed'
crate.style.left = '150px'
crate.style.bottom = '200px'
document.body.append(crate)

let well= document.createElement('img')
well.src = 'assets/well.png'
well.style.position = 'fixed'
well.style.left = '500px'
well.style.bottom = '425px'
document.body.append(well)

let sword = document.createElement('img')
sword.src = 'assets/sword.png'
sword.position = 'fixed'
sword.left = '500px'
sword.bottom = '405px'
document.body.append(sword)

sword.addEventListener('click', function(){
    sword.remove()
})

let sheild = document.createElement('img')
sheild.src = 'assets/sword.png'
sheild.position = 'fixed'
sheild.left = '500px'
sheild.bottom = '405px'
document.body.append(sheild)

sheild.addEventListener('dblclick', function(){
    sheild.remove()
})

let sheild = document.createElement('img')
sheild.src = 'assets/sword.png'
sheild.position = 'fixed'
sheild.left = '500px'
sheild.bottom = '405px'
document.body.append(sheild)

sheild.addEventListener('dblclick', function(){
    sheild.remove()
})

let staff = document.createElement('img')
staff.src = 'assets/sword.png'
staff.position = 'fixed'
staff.left = '500px'
staff.bottom = '405px'
document.body.append(staff)

staff.addEventListener('dblclick', function(){
    staff.remove()
})