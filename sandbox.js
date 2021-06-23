const time = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
const date = new Date().toLocaleDateString('en-GB', {
  day: 'numeric', month: 'short', year: 'numeric'
})
console.log(time)
console.log(date)