import React from 'react';

function App() {
  const [inputValue, setInputValue] = React.useState('');
  const [items, setItems] = React.useState([]);

  function addItem() {
    const newItems = items.concat(inputValue);
    setItems(newItems);

    setInputValue('');
  }

  function deleteItem(elementIndex) {
    const newItems = items.filter((item, index) => index !== elementIndex);
    setItems(newItems);
  }

  return (
    <div>
      <input
        onChange={(event) => setInputValue(event.target.value)}
        value={inputValue}
      />
      <button type='button' onClick={() => addItem()}>
        Add
      </button>
      <div>
        {items.map((item, elementIndex) => (
          <p key={item}>
            {item}
            <button onClick={() => deleteItem(elementIndex)}>✓</button>
          </p>
        ))}
      </div>
    </div>
  );
}

export default App;
