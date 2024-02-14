function GroceryList() {
  const items = [
    { id: 1, name: 'bread' },
    { id: 2, name: 'milk' },
    { id: 3, name: 'eggs' }
  ];

  const array1 = [1, 2, 3, 4, 5];

  return (
    <>
      <h1>Grocery List</h1>
      <ul>
        {items.map((item) => <li
          key={item.id}>{item.name}</li>)}
      </ul>
      <ul>
        {array1.map((item, index) => <li key={index}>Element: {item * 2} Index: {index}</li>)}
      </ul>
    </>
  );
}

export default GroceryList;