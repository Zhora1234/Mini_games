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
let sell_upg_1 = 50
let sell_upg_2 = 300
let sell_upg_3 = 600
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
    if (clicks >= sell_upg_1) {
    plus_click = plus_click + 1
    clicks = clicks - sell_upg_1
    sell_upg_1 = (sell_upg_1 * 1.1)
    count.innerHTML = `cookie: ${clicks}`
    upg_1.innerHTML = `+1 (${sell_upg_1})`
    }
})
upg_2.addEventListener('click', function() {
    if (clicks >= sell_upg_2) {
    plus_click = plus_click + 5
    clicks = clicks - sell_upg_2
    sell_upg_2 = (sell_upg_2 * 1.1)
    count.innerHTML = `cookie: ${clicks}`
    upg_2.innerHTML = `+1 (${sell_upg_2})`
    }
})
upg_3.addEventListener('click', function() {
    if (clicks >= sell_upg_3) {
    plus_click = plus_click + 10
    clicks = clicks - sell_upg_3
    sell_upg_3 = (sell_upg_3 * 1.1)
    count.innerHTML = `cookie: ${clicks}`
    upg_3.innerHTML = `+1 (${sell_upg_3})`
    }
})