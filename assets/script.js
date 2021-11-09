let yourName = "Joshua Dungan" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0      // Gingerbread
let cc = 0      // Chocolate Chip
let sugar = 0   // Sugar Sprinkle

var gbQuantity;
var ccQuantity;
var sugarQuantity;
var total = 0;
// Code to update name display 
document.getElementById('credit').textContent = `Created by ${yourName}`

// Event listener for clicks on the "+" button for Gingerbread cookies
document.getElementById('add-gb').addEventListener('click', function () {
    if(gb >= 0)
    {
        gb++
    }
    gbQuantity = document.getElementById('qty-gb');
    gbQuantity.textContent = gb;
    totalgbQuantity = document.getElementById('qty-total');
    total = total + 1;
    totalgbQuantity.textContent = total;
    console.log('Gingerbread + button was clicked!')
})

document.getElementById('minus-gb').addEventListener('click', function () {
    if(gb > 0)
    {
        gb--
    
    gbQuantity = document.getElementById('qty-gb');
    gbQuantity.textContent = gb;
    totalgbQuantity = document.getElementById('qty-total');
    total = total - 1;
    if(gb >= 0)
    
    totalgbQuantity.textContent = total;
    }
    console.log('Gingerbread - button was clicked!')
    
    
})

document.getElementById('minus-cc').addEventListener('click', function() {
    if(cc > 0)
    {
        cc--
    
    ccQuantity = document.getElementById('qty-cc');
    ccQuantity.textContent = cc;
    totalccQuantity = document.getElementById('qty-total');
    total = total - 1;
    if(cc >= 0)
    
    totalccQuantity.textContent = total;
    }
    console.log('Chocolate Chip - button was clicked!')

    
})

document.getElementById('add-cc').addEventListener('click', function() {
    if(cc >= 0)
    {
        cc++
    }
    ccQuantity = document.getElementById('qty-cc');
    ccQuantity.textContent = cc;
    totalccQuantity = document.getElementById('qty-total');
    total = total + 1;
    totalccQuantity.textContent = total;
    console.log('Chocolate Chip + button was clicked!')

    
})

document.getElementById('add-sugar').addEventListener('click', function() {
    if(sugar >= 0)
    {
        sugar++
    
    sugarQuantity = document.getElementById('qty-sugar');
    sugarQuantity.textContent = sugar;
    totalsugarQuantity = document.getElementById('qty-total');
    total = total + 1;
    if(sugar > 0)
    
    totalsugarQuantity.textContent = total;
    }
    console.log('Sugar Sprinkle + button was clicked!')

    
})

document.getElementById('minus-sugar').addEventListener('click',function(){
    if(sugar > 0)
    {
        sugar--
    
    sugarQuantity = document.getElementById('qty-sugar');
    sugarQuantity.textContent = sugar;
    totalgbQuantity = document.getElementById('qty-total');
    total = total - 1;
    if(sugar >= 0)
    
    totalsugarQuantity.textContent = total;
    }
    console.log('Sugar Sprinkle - button was clicked!')

    
})
