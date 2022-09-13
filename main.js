import './style.css'
import setupSelect from './cases/select.mjs'

const app = document.querySelector('#app')

app.innerHTML = `
  <div class="select-container">
    <p>aaaa</p>
    <p>bbbb</p>
    <p>cccc</p>
    <p id="private-active">private active</p>
  </div>
`

setupSelect(app.querySelector('.select-container'))
