import React from 'react';

import Button from './Button';

function SelectionList(props) {
  const { data, noEdit, onButtonClick, colors, styles } = props;
  const [list, setList] = React.useState(data);

  function handleClick(name, selected, index) {
    const tempList = [...list];
    tempList[index].selected = !selected;
    setList(tempList);
    onButtonClick(name, index, !selected, tempList);
  }

  const listItems = list.map((d, index) =>
    !noEdit ? (
      <span key={d.name + index} value={d.name} onClick={() => handleClick(d.name, d.selected, index)}>
        <Button d={d} colors={colors} styles={styles} />
      </span>
    ) : (
      <span key={d.name + index} value={d.name}>
        <Button d={d} colors={colors} noEdit={true} styles={styles} />
      </span>
    )
  );

  return <>{listItems}</>;
}

export default SelectionList;
