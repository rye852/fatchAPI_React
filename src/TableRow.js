import TableTd from './TableTd';
const TableRow = ({ item }) => {
  return (
    <tr>
      {Object.keys(item).map((key) => (
        
        <TableTd content={item[key]} />
      ))}
    </tr>
  );
};

export default TableRow;
