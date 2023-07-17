const setToLocalStorage = (attr, value) => localStorage.setItem(attr, value)
const getToLocalStorage = attr => localStorage.getItem(attr)

const alterClass = (passClass, actualClass) => {
    $(`.${passClass}`).each((_, e) => {
        $(e).removeClass(`${passClass}`);
        $(e).addClass(`${actualClass}`);
    })
}

const changeSrc = (src, id) => document.querySelector(`#${id}`).src = src