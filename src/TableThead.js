const TableThead = ({ items }) => {
  return (
    <thead>
      {Object.keys(items[0]).map((key) => (
        <td>{key}</td>
      ))}
    </thead>
  );
};

export default TableThead;
