function Table({ headers, rows }) {
  return (
    <table className="w-full text-sm border">
      <thead className="bg-outline-variant">
        <tr>
          {headers.map((h, i) => (
            <th key={i} className="p-2 border text-left">
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i}>
            {row.map((cell, j) => (
              <td key={j} className="p-2 border">
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;