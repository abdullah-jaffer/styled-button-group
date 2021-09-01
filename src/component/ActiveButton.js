import React, { useState } from 'react';

export default function ActiveButton(props) {
  const { selected, noEdit, value, disabledColor, activeColor, disabledText, activeText, padding, margin, fontSize, lineHeight } = props;
  const [buttonStyleHover] = useState({
    backgroundColor:  disabledColor? disabledColor: 'white' ,
    borderRadius: '20px',
    padding: padding? padding: '8px 20px 8px 20px',
    margin: margin? margin: '4px',
    color: activeColor? activeColor: '#458FF6',
    fontSize: fontSize? fontSize: '14px',
    lineHeight: lineHeight? lineHeight: '24px',
    border: activeColor? '1px solid '+ activeColor: '1px solid #458FF6',
  })
  const [buttonStyleNormal] = useState({
    backgroundColor:  disabledColor? disabledColor: "white" ,
    color: disabledText? disabledText: '#8B90A0',
    border: disabledColor? '1px solid '+ disabledColor: '1px solid #8B90A0',
    borderRadius: '20px',
    padding: padding? padding: '8px 20px 8px 20px',
    margin: margin? margin: '4px',
    fontSize: fontSize? fontSize: '14px',
    lineHeight: lineHeight? lineHeight: '24px',
  });
  const [buttonStyleSelected] = useState({
    backgroundColor: activeColor? activeColor: '#458FF6',
    border: '1px solid transparent',
    color: activeText? activeText: 'white',
    borderRadius: '20px',
    padding: padding? padding: '8px 20px 8px 20px',
    margin: margin? margin: '4px',
    fontSize: fontSize? fontSize: '14px',
    lineHeight: lineHeight? lineHeight: '24px',
  });
  const [buttonOneCSS, setButtonOneCSS] = useState(selected ? buttonStyleSelected : buttonStyleNormal);
  const [toggle, setToggle] = useState(!!(selected !== undefined && selected));

  function hoverIn() {
    if (!toggle) setButtonOneCSS(buttonStyleHover);
  }

  function hoverOut() {
    if (!toggle) setButtonOneCSS(buttonStyleNormal);
  }

  function changeColor() {
    if (!noEdit) {
      const temp = !toggle;
      if (temp) {
        setButtonOneCSS(buttonStyleSelected);
      } else {
        setButtonOneCSS(buttonStyleNormal);
      }

      setToggle(temp);
    }
  }

  return (
    <button style={buttonOneCSS} onClick={changeColor} onMouseOver={hoverIn} onMouseOut={hoverOut}>
      {value}
    </button>
  );
}
