let body = document.querySelector('body')
let menuPanelTrigger = document.getElementById('menuPanelTrigger')
let menuPanelQuit = document.getElementById('menuPanelQuit')
let menuPanel = document.getElementById('menuPanelOverlay')

let contactPanelTrigger = document.getElementById('contactPanelTrigger')
let contactPanelQuit = document.getElementById('contactPanelQuit')
let contactPanel = document.getElementById('contactPanelOverlay')

menuPanelTrigger.addEventListener('click', function() {
  menuPanelTrigger.style.display = "none"
  menuPanel.style.display = "flex"
  body.style.overflow = "hidden"
})
menuPanelQuit.addEventListener('click', function() {
  menuPanelTrigger.style.display = "flex"
  menuPanel.style.display = "none"
  body.style.overflow = "auto"
})

contactPanelTrigger.addEventListener('click', function() {
  contactPanel.style.display = "flex"
  setTimeout(function() {
    contactPanelTrigger.style.opacity = "0"
  }, 100)
  setTimeout(function() {
    contactPanelTrigger.style.display = "none"
    body.style.overflow = "hidden"
  }, 400)
})
contactPanelQuit.addEventListener('click', function() {
  contactPanel.style.display = "none"
  body.style.overflow = "auto"
  contactPanelTrigger.style.opacity = "1"
  contactPanelTrigger.style.display = "flex"
})
