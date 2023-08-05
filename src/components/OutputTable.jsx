const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
});

const OutputTable = (props) => {
  return (
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
        {props.data.map((value) => (
          <tr key={value.year}>
            <td>{value.year}</td>
            <td>{formatter.format(value.savingsEndOfYear)}</td>
            <td>{formatter.format(value.yearlyInterest)}</td>
            <td>
              {formatter.format(
                value.savingsEndOfYear -
                  props.initialInvestment -
                  value.yearlyContribution * value.year
              )}
            </td>
            <td>
              {formatter.format(
                props.initialInvestment + value.yearlyContribution * value.year
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default OutputTable;
