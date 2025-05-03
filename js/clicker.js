let upg = document.querySelector('.upg')
let upgs = document.querySelector('.upgs')
let u = false
let clicks = 0
let plus_click = 1
let cookie_click = document.querySelector('.cookie_click')
let count = document.querySelector('.cookie_count')
let upg_1 = document.querySelector('.upg_1')
let upg_2 = document.querySelector('.upg_2')
let upg_3 = document.querySelector('.upg_3')
upg.addEventListener('click' , function() {
    u = !u
    if(u) {
            upgs.style.display = 'flex'
            upgs.style.flexDirection = 'column'
            upg.innerHTML = '/ Улучшения'
    } else {
        upgs.style.display = 'none'
        upg.innerHTML = '> Улучшения'
    }

})
cookie_click.addEventListener('click', function() {
    clicks = clicks + plus_click
    count.innerHTML = `cookie: ${clicks}`
})
upg_1.addEventListener('click', function() {
    plus_click = plus_click + 1
    clicks = clicks - 50
    count.innerHTML = `cookie: ${clicks}`
})
