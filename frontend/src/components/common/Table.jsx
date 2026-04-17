function Table({ headers, rows }) {
  return (
    <table className="w-full text-xs lg:text-sm border">
      <thead className="bg-outline-variant">
        <tr>
          {headers.map((h, i) => (
            <th key={i} className="p-2 lg:p-3 border text-left font-semibold">
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i}>
            {row.map((cell, j) => (
              <td key={j} className="p-2 lg:p-3 border">
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
