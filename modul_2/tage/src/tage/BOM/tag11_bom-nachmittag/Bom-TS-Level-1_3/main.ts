import "./style.css"

const infoContainer = document.createElement("div")
document.body.appendChild(infoContainer)
const btn = document.getElementById("btn") as HTMLButtonElement

function getBrowserInfo() {
  const browserName = navigator.userAgent
  const systemArchitecture = navigator.platform
  const browserVersion = navigator.userAgent
  const screenResolution = `${screen.width} x ${screen.height}`
  const innerSize = `${window.innerWidth} x ${window.innerHeight}`
  const colorDepth = screen.colorDepth
  const pixelDepth = screen.pixelDepth

  infoContainer.innerHTML = `
    <p><strong>Browsername:</strong> ${browserName}</p>
    <p><strong>Betriebssystem-Architektur:</strong> ${systemArchitecture}</p>
    <p><strong>Browser-Version:</strong> ${browserVersion}</p>
    <p><strong>Bildschirmauflösung:</strong> ${screenResolution}</p>
    <p><strong>Innenhöhe/-breite:</strong> ${innerSize}</p>
    <p><strong>Farbtiefe (colorDepth):</strong> ${colorDepth}</p>
    <p><strong>Pixeltiefe (pixelDepth):</strong> ${pixelDepth}</p>
  `
}

btn.addEventListener("click", getBrowserInfo)
