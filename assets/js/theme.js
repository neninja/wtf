let root = document.documentElement
let temaAtual = localStorage.getItem('tema')

if(!temaAtual){
    temaAtual = 'dark'
    localStorage.setItem('tema', temaAtual)
}

escolheTema(temaAtual)

let buttonThemeElement = document.querySelector("button.toggle-theme")

buttonThemeElement.onmouseover = function(){
    let temaAtual = localStorage.getItem('tema')
    let temaNovo = temaAtual === 'dark' ? 'Light' : 'Dark'
    this.innerHTML = temaNovo
}

buttonThemeElement.onmouseleave = function(){
    let temaAtual = localStorage.getItem('tema')
    temaAtual = temaAtual === 'dark' ? 'Dark' : 'Light'
    this.innerHTML = temaAtual
}

buttonThemeElement.onclick = function(){
    let temaAtual = localStorage.getItem('tema')
    let temaNovo = temaAtual === 'dark' ? 'light' : 'dark'
    localStorage.setItem('tema', temaNovo)
    escolheTema(temaNovo)
}

function escolheTema(tema){
    let buttonThemeElement = document.querySelector("button.toggle-theme")
    switch(tema){
        case 'dark':
            root.style.setProperty('--ui-background-color', "#000")
            root.style.setProperty('--ui-background-color-pre', "var(--onedark-dark-black)")
            root.style.setProperty('--ui-base-color', "var(--onedark-light-white)")
            root.style.setProperty('--ui-link-rodape-color', "var(--onedark-light-red)")
            root.style.setProperty('--ui-border-color', "var(--onedark-green)")

            root.style.setProperty('--code-color-1', '#aaaaaa')
            root.style.setProperty('--code-color-2', '#ffffcc')
            root.style.setProperty('--code-color-3', '#F00000')
            root.style.setProperty('--code-color-4', '#F0A0A0')
            root.style.setProperty('--code-color-5', '#b38aff')
            root.style.setProperty('--code-color-6', '#5ba711')
            root.style.setProperty('--code-color-7', '#e4e477')
            root.style.setProperty('--code-color-8', '#000080')
            root.style.setProperty('--code-color-9', '#05ca05')
            root.style.setProperty('--code-color-10', '#888888')
            root.style.setProperty('--code-color-11', '#555555')
            root.style.setProperty('--code-color-12', '#800080')
            root.style.setProperty('--code-color-13', '#00d4d4')
            root.style.setProperty('--code-color-14', '#00c1c1')
            root.style.setProperty('--code-color-15', '#ed9d13')
            root.style.setProperty('--code-color-16', '#1e90ff')
            root.style.setProperty('--code-color-17', '#800000')
            root.style.setProperty('--code-color-18', '#bbbbbb')

            buttonThemeElement.innerHTML = 'Dark'
            break
        case 'light':
            root.style.setProperty('--ui-background-color', "var(--onedark-light-white)")
            root.style.setProperty('--ui-background-color-pre', "var(--onedark-dark-white)")
            root.style.setProperty('--ui-base-color', "var(--onedark-dark-black)")
            root.style.setProperty('--ui-link-rodape-color', "var(--onedark-dark-red)")
            root.style.setProperty('--ui-border-color', "var(--onedark-dark-grey)")

            root.style.setProperty('--code-color-1', '#aaaaaa')
            root.style.setProperty('--code-color-2', '#ffffcc')
            root.style.setProperty('--code-color-3', '#F00000')
            root.style.setProperty('--code-color-4', '#F0A0A0')
            root.style.setProperty('--code-color-5', '#0000aa')
            root.style.setProperty('--code-color-6', '#4c8317')
            root.style.setProperty('--code-color-7', '#aa0000')
            root.style.setProperty('--code-color-8', '#000080')
            root.style.setProperty('--code-color-9', '#00aa00')
            root.style.setProperty('--code-color-10', '#888888')
            root.style.setProperty('--code-color-11', '#555555')
            root.style.setProperty('--code-color-12', '#800080')
            root.style.setProperty('--code-color-13', '#00aaaa')
            root.style.setProperty('--code-color-14', '#009999')
            root.style.setProperty('--code-color-15', '#aa5500')
            root.style.setProperty('--code-color-16', '#1e90ff')
            root.style.setProperty('--code-color-17', '#800000')
            root.style.setProperty('--code-color-18', '#bbbbbb')

            buttonThemeElement.innerHTML = 'Light'
            break
    }
}
