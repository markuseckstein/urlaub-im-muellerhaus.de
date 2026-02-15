// "home" keyboard sequence reveals hidden hometown distances on umgebung page
;(function () {
  const codes = ["h", "o", "m", "e"]
  let buffer = []

  document.addEventListener("keyup", function (event) {
    buffer.push(event.key.toLowerCase())
    if (buffer.length > codes.length) buffer.shift()
    if (buffer.join("") === codes.join("")) {
      document.querySelectorAll(".hometown-hidden").forEach(function (el) {
        el.classList.remove("hometown-hidden")
        el.classList.add("hometown-visible")
      })
      buffer = []
    }
  })
})()
