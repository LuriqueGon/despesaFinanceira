const changeMode = e => {
    if((document.querySelector('#mode-toggle').checked)) loadDarktheme()
    else loadLightTheme()
}

$(document).ready(() => {
    const theme = getToLocalStorage('theme') ?? 'light'
    if(theme == 'dark'){
        document.querySelector('#mode-toggle').checked = true
        loadDarktheme()
    }else{
        document.querySelector('#mode-toggle').checked = false
        loadLightTheme()
    }
})

const loadDarktheme = (theme = 'dark', passTheme= 'light') => loadTheme(theme, passTheme)

const loadLightTheme = (theme = 'light', passTheme= 'dark') => loadTheme(theme, passTheme)

const loadTheme = (theme, passTheme) => {

    setToLocalStorage('theme', theme)
    
    alterClass('bg-'+ passTheme, 'bg-'+theme)
    alterClass('text-'+ passTheme, 'text-'+theme)
    alterClass('navbar-'+ passTheme, 'navbar-'+theme)
    changeSrc(`../public/img/logo-${theme}.png`, 'logoHeader')

}

