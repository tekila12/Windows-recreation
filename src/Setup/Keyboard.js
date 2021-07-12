import React from 'react'

const Keyboard = ({keyboardActive, mouseColor}) => {
    
   
    return (
        <div>
            <div className='keyboard'>
             <span className={ keyboardActive ? `keyboardActive cases  ` :'case'}>
              <span className='key'>Esc</span>
              <span className='key'>1</span>
              <span className='key'>2</span>
              <span className='key'>3</span>
              <span className='key'>4</span>
              <span className='key'>5</span>
              <span className='key'>6</span>
              <span className='key'>7</span>
              <span className='key'>8</span>
              <span className='key'>9</span>
              <span className='key'>0</span>
              <span className='key'>=</span>
              <span className='key'>+</span>
              <span className='key '>backspace</span>
              <span className='key'>q</span>
              <span className='key'>w</span>
              <span className='key'>e</span>
              <span className='key'>r</span>
              <span className='key'>t</span>
              <span className='key'>y</span>
              <span className='key'>o</span>
              <span className='key'>p</span>
              <span className='key'>[</span>
              <span className='key'>]</span>
              <span className='key'>Enter</span>
              <span className='key'>Delete</span>
              <span className='key'>End</span>
              <span className='key'>Caps</span>
              <span className='key'>a</span>
              <span className='key'>s</span>
              <span className='key'>d</span>
              <span className='key'>f</span>
              <span className='key'>g</span>
              <span className='key'>h</span>
              <span className='key'>j</span>
              <span className='key'>k</span>
              <span className='key'>l</span>
              <span className='key'>;</span>
              <span className='key'>'</span>
              <span className='key'>\</span>
              <span className='key'>'</span>
              <span className='key'>\</span>
              <span className='key'>z</span>
              <span className='key'>x</span>
              <span className='key'>c</span>
              <span className='key'>v</span>
              <span className='key'>b</span>
              <span className='key'>n</span>
              <span className='key'>m</span>
              <span className='key'>,</span>
              <span className='key'>.</span>
              <span className='key'>/</span>
              <span className='key'>Shift</span> 
              <span className='key'>CTRL</span>     
              <span className='key'>Win</span>
              <span className='key'>Alt</span>
              <span className='key arrow__up'>▲</span>
              <span className='key spacebar'>Spacebar</span>
              <span className='key'>Alt gr</span>
              <span className='key'>FN</span>
              <span className='key'>CTRL</span>
              <span className='key arrow__left'>◀</span>
              <span className='key arrow__back'>▼</span>
              <span className='key arrow__right'>▶</span>
              </span>
            </div>
            <span className='cable__keyboard'></span>
            <div className={mouseColor ? `mouseColor mouses ` : "mouse"}>
              <span className='left__click'></span>
              <span className='right__click'>
                  <span>MS</span>
              </span>
              <span className='circle'></span>
            </div>
            <span className='mouse__cabel'></span>
        </div>
    )
}

export default Keyboard
