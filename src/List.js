import ListItem from './ListItem';
const List = ({items}) => {
  return (
    <ul className="lists">
      {items.map((item) => (
        <ListItem item={item} key={item.id} />
      ))}
    </ul>
  );
};

export default List;
