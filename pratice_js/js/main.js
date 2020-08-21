document.addEventListener("DOMContentLoaded", function() {
    const el = document.querySelector('.test')
    const str = el.innerHTML.trim().split("")//split("")->配列にする
    // let catStr = ''

    // for(let i of str) {
    //     catStr += `<span class="char">${i}</span>`
    // }
    // el.innerHTML = catStr
    // console.log(catStr)

    //上記のfor文だとループごとにDOMを読み込む為大規模になるほど処理が重くなる
    //そのため、下記のようにreduceを使用することで処理を簡潔にする

    el.innerHTML = str.reduce((acc, curr) => {
        curr = curr.replace(" ", "&nbsp;")
        return `${acc}<span class="char">${curr}</span>`
    }, "")
    console.log(el)
})