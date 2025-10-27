import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [age, setAge] = useState("");
  const [data, setData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setData([...data, { name, mail, age }]);
    console.log(data);
  };
  return (
    <>
      <div>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <input
          type="email"
          onChange={(e) => setMail(e.target.value)}
          value={mail}
        />
        <input
          type="number"
          onChange={(e) => setAge(e.target.value)}
          value={age}
        />

        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
        {data.map((elem, id) => ( 
          <div key={id}>
            <p>
              {elem.name} - {elem.mail} - {elem.age}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Form;
