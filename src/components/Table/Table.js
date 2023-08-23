import "./Table.css";

const formatter = new Intl.NumberFormat("es-ES", {
  style: "currency",
  currency: "EUR",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const Table = (props) => {
  console.log(props.items);
  return (
    <div>
      <table className="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Total Savings</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {props.items.map((y) => (
            <tr key={y.year}>
              <td>{y.year}</td>
              <td>{formatter.format(y.savingsEndOfYear)}</td>
              <td>{formatter.format(y.yearlyInterest)}</td>
              <td>
                {formatter.format(
                  y.savingsEndOfYear -
                    props.initInvest -
                    y.yearlyContribution * y.year
                )}
              </td>
              <td>
                {formatter.format(
                  props.initInvest + y.yearlyContribution * y.year
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
