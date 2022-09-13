import './select.css'
import priv from './private.mjs'

export default (container) => {
    const view = new Proxy({
        selected: null
    }, {
        set: function(obj, prop, newval) {
          let oldval = obj[prop];
      
          if (prop === 'selected') {
            if (oldval) {
              oldval.classList.remove('active')
            }
            if (newval) {
              newval.classList.add('active')
            }
          }
      
          // 默认行为是存储被传入 setter 函数的属性值
          obj[prop] = newval;
      
          // 表示操作成功
          return true;
        }
    });

    container.addEventListener('click', (e) => {
        if (e.target.tagName === 'P') {
            view.selected = e.target
            if (e.target.id === 'private-active') {
                priv()
            }
        }
    }, false)
}