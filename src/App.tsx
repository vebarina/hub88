import './App.css'
import InputFilter from "./components/InputFilter.tsx";
import Table from "./components/Table.tsx";
import {useQuery} from '@apollo/client';
import {useEffect, useState} from "react";
import {Country} from "./types/types.ts";
import {client, GET_COUNTRIES} from "./queries/queries.ts";

function App() {
  const [code, setCode] = useState<string>('');
  const [countries, setCountries] = useState<Array<Country>>([]);

  const {loading, error, data: countriesData} = useQuery<{
    countries: Country[]
  }>(GET_COUNTRIES, {
    variables: {code: code ?? ''},
    client
  });

  const handleFilterChange = (newCode: string) => {
    const codeToSearch = `^${newCode}.*?$`;
    setCode(codeToSearch);
  }

  useEffect(() => {
    setCountries(countriesData?.countries ?? [])
  }, [countriesData, code]);

  return (
    <>
      <main className="App">
        <InputFilter onFilterChange={handleFilterChange}/>
        {
          loading ?
            <div className="feedback-for-user">
              <p>Loading...</p>
            </div>
            :
            countries?.length > 0 ?
              <Table countries={countries}/>
              :
              <div className="feedback-for-user">
                {code ? (
                  <p>
                    No countries to show for the searched country code!
                  </p>
                ) : (
                  <p>Enter a country code to see the results!</p>
                )}
              </div>
        }
        {
          error && <div className="feedback-for-user">
                <p>Error: {error.message}</p></div>
        }
      </main>
    </>
  )
}

export default App
