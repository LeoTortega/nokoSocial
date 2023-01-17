//Sidebar
const menuItems = document.querySelectorAll('.menu-item')

// Messages
const messagesNotification = document.querySelector("#messages-notifications")
const messages = document.querySelector('.messages')
const message = document.querySelectorAll('.message')
const messageSearch = document.querySelector('#message-search')

//Theme
const theme = document.querySelector('#theme')
const themeModal = document.querySelector('.customize-theme')
const fontSizes = document.querySelector('.choose-size')
var root = document.querySelector(':root')
const colorPalette = document.querySelectorAll('.choose-color span')
const bg1 = document.querySelector('.bg-1')
const bg2 = document.querySelector('.bg-2')
const bg3 = document.querySelector('.bg-3')

// ===================== Sidebar =======================
//remove active class from all menu items
const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active')
    })
}

menuItems.forEach(item => {
    item.addEventListener('click', () =>{
        changeActiveItem()
        item.classList.add('active')
        if(item.id != 'notifications') {
            document.querySelector('.notification-popup').style.display = 'none'
        } else {
            document.querySelector('.notification-popup').style.display = 'block'
            document.querySelector('#notifications .notification-count').style.display = 'none'
        }
    })
})

// ========================= Messages ===========================
// Search chat
const searchMessage = () => {
    const val = messageSearch.value.toLowerCase()
    console.log(val)
    message.forEach(chat => {
        let name = chat.querySelector('h5').textContent.toLowerCase()
        if(name.indexOf(val) != -1) {
            chat.style.display = "flex"
        } else {
            chat.style.display = 'none'
        }
    })
}

messageSearch.addEventListener('keyup', searchMessage)

// Highlight messages card when messages menu item is clicked
messagesNotification.addEventListener('click', () => {
    messages.style.boxShadow = '0 0 1rem var(--color-primary)'
    messagesNotification.querySelector('.notification-count').style.display = 'none'
    setTimeout(() => {
        messages.style.boxShadow = 'none'
    }, 2000)
})

// Theme/Display Customization
const openThemeModal = () => {
    themeModal.style.display = "grid"
}

const closeThemeModal = (e) => {
    if(e.target.classList.contains('customize-theme')) {
        themeModal.style.display = 'none'
    }
}

themeModal.addEventListener('click', closeThemeModal)
theme.addEventListener('click', openThemeModal)



// =================== Fonts =====================
// Remove active class from spans or font size select
const removeSizeSelector = () => {
    const val = Array.from(fontSizes.children)

    val.forEach(size => {
        size.classList.remove('active')
    })
}

 fontSizes.childNodes.forEach(size => {

    size.addEventListener('click', (e) => {
        removeSizeSelector()
        let fontSize
        e.target.classList.toggle('active')

        if(e.target.classList.contains('font-size-1')) {
            fontSize = '10px'
            root.style.setProperty("----sticky-top-left", '5.4rem')
            root.style.setProperty("----sticky-top-right", '5.4rem')
        } else if(e.target.classList.contains('font-size-2')) {
            fontSize = '13px'
            root.style.setProperty("----sticky-top-left", '5.4rem')
            root.style.setProperty("----sticky-top-right", '-7em')
        } else if(e.target.classList.contains('font-size-3')) {
            fontSize = '16px'
            root.style.setProperty("----sticky-top-left", '-2rem')
            root.style.setProperty("----sticky-top-right", '-17rem')
        } else if(e.target.classList.contains('font-size-4')) {
            fontSize = '19px'
            root.style.setProperty("----sticky-top-left", '-5rem')
            root.style.setProperty("----sticky-top-right", '-25rem')
        } else if(e.target.classList.contains('font-size-5')) {
            fontSize = '22px'
            root.style.setProperty("----sticky-top-left", '-12rem')
            root.style.setProperty("----sticky-top-right", '-35rem')
        }

        // change font size of toot html element
        document.querySelector('html').style.fontSize = fontSize
    })
 })

 // Change primary color
const removeColorSelector = () => {
    colorPalette.forEach(color => {
        color.classList.remove('active')
    })
}

 colorPalette.forEach(color => {
    color.addEventListener('click', () => {
        removeColorSelector()
        let primaryHue
        if(color.classList.contains('color-1')) {
            primaryHue = 252
            color.classList.add('active') 
        } else if(color.classList.contains('color-2')) {
            primaryHue = 52
            color.classList.add('active')
        } else if(color.classList.contains('color-3')) {
            primaryHue = 352
            color.classList.add('active')
        } else if(color.classList.contains('color-4')) {
            primaryHue = 152
            color.classList.add('active')
        } else if(color.classList.contains('color-5')) {
            primaryHue = 202
            color.classList.add('active')
        }

        root.style.setProperty('--primary-color-hue', primaryHue)
    })
 })

// Change background color
let lightColorLightness
let whiteColorLightness
let darkColorLightness

const changeBg = () => {
    root.style.setProperty('--light-color-lightness', lightColorLightness)
    root.style.setProperty('--white-color-lightness', whiteColorLightness)
    root.style.setProperty('--dark-color-lightness', darkColorLightness)
}

bg1.addEventListener("click", () => {
    darkColorLightness = '17%'
    whiteColorLightness = "100%"
    lightColorLightness = "95%"

    //add active class
    bg1.classList.add('active')

    //remove active from others
    bg2.classList.remove('active')
    bg3.classList.remove('active')
    changeBg()
})

bg2.addEventListener("click", () => {
    darkColorLightness = '95%'
    whiteColorLightness = "20%"
    lightColorLightness = "15%"

    //add active class
    bg2.classList.add('active')

    //remove active from others
    bg1.classList.remove('active')
    bg3.classList.remove('active')
    changeBg()
})

bg3.addEventListener("click", () => {
    darkColorLightness = '95%'
    whiteColorLightness = "10%"
    lightColorLightness = "0%"

    //add active class
    bg3.classList.add('active')

    //remove active from others
    bg1.classList.remove('active')
    bg2.classList.remove('active')
    changeBg()
})