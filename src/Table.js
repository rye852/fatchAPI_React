import TableRow from './TableRow';
import TableThead from './TableThead';
const Table = ({ items, isLoad }) => {
  return (
    <table>
      {isLoad ? <TableThead items={items} /> : null}
      {items.map((item) => (
        <TableRow item={item} />
      ))}
    </table>
  );
};

export default Table;
