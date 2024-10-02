async function show(items) {
    for (i = 0, len = items.length; i < len; i++) {
        let id = items[i]['id']
        let interval = items[i]['interval']
        let animation = items[i]['animation']
        debug(`Showing ${i+1}/${len} element(s), marked as '${id}', with ${interval}s of interval after completed.`)
        var target = document.querySelector(id)
        if (target != null) {
            if (interval != 0) {await sleep(interval)}  
            target.style.animation = animation
            target.style.visibility = 'visible'
        } else {
            warn(`Cannot find object '${id}'!`)
        }
    }
}

function sleep(s) {
    return new Promise(resolve => setTimeout(resolve, s*1000))
}
