import '../assets/styles/table.css';
import {Country} from "../types/types.ts";

interface CountriesProp {
  countries: Country[];
}

function Table({countries}: CountriesProp) {
  return (
    <section>
      <table className="table-component">
        <caption>Countries and country codes</caption>
        <thead>
        <tr>
          <th>Country name</th>
          <th>Country code</th>
        </tr>
        </thead>
        <tbody>
        {
          countries?.map((country) => {
            return (
              <tr key={country?.name}>
                <td>{country?.name}</td>
                <td>{country?.code}</td>
              </tr>
            )
          })
        }
        </tbody>
      </table>
    </section>
  )
}

export default Table;