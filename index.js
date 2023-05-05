localStorage.clear()
sessionStorage.clear()

const nombre = 'andoni'

const apellido = 'jacks'

localStorage.setItem('persona', JSON.stringify({nombre: 'andoni', apellido: 'jacks'}))
console.log(localStorage)

sessionStorage.setItem('persona2', JSON.stringify({nombre: 'andoni', apellido: 'jacks'}))
console.log(sessionStorage)


// cookies
document.cookie1 = JSON.stringify({nombre: 'andoni', apellido: 'jacks'})
console.log('cookie', document.cookie1)

var now = new Date()
var minutes = 2;
const expirationDate = new Date(now.getTime() + minutes * 60000); // 60000ms = 1 minute
document.cookie = `nombre=valor; expires=${expirationDate.toUTCString()}; path=/`;