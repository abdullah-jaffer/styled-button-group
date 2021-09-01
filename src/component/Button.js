import React from 'react';

import ActiveButton from './ActiveButton';

export default function Button(props) {
  const { d, colors, styles, noEdit } = props;


  return (
    <ActiveButton 
        noEdit={noEdit && noEdit} 
        value={d.name} 
        selected={d.selected} 
        activeColor={colors && colors.activeColor && colors.activeColor}
        disabledColor={colors && colors.disabledColor && colors.disabledColor}
        activeText={colors && colors.activeText && colors.activeText}
        disabledText={colors && colors.disabledText && colors.disabledText}
        padding={styles && styles.padding && styles.padding}
        margin={styles && styles.margin && styles.margin}
        fontSize={styles && styles.fontSize && styles.fontSize}
        lineHeight={styles && styles.lineHeight && styles.lineHeight}/>
  );
}
