import React from "react";
import Person from "./Person";

import { useQuery } from "react-query";

const fetchPeople = async () => {
  const res = await fetch("https://swapi.dev/api/people/");
  return res.json();
};

const People = () => {
  const { data, status } = useQuery("people", fetchPeople);
  console.log(data);

  return (
    <div>
      <h2>People</h2>
      {status === "errer" && <div>Error fetching data</div>}

      {status === "loading" && <div>Loading data</div>}

      {status === "success" && (
        <div>
          {data.results.map((person) => (
            <Person key={person.name} person={person} />
          ))}
        </div>
      )}
    </div>
  );
};

export default People;
