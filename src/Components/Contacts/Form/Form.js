<<<<<<< HEAD
/** @format */

import React from "react";
import _ from "lodash/fp";
import { useForm } from "react-hook-form";
=======
import React from 'react'
import _ from 'lodash/fp'
import { useForm } from 'react-hook-form'
>>>>>>> 8de82e85691d9d94dd98b9a587011e2f47145186

import './Form.scss'

function Form() {
  const { register, handleSubmit, watch, errors } = useForm()

  const onSubmit = (data) => {
<<<<<<< HEAD
    alert(JSON.stringify(data));
  }; // your form submit function which will invoke after successful validation
=======
    alert(JSON.stringify(data))
  } // your form submit function which will invoke after successful validation
>>>>>>> 8de82e85691d9d94dd98b9a587011e2f47145186

  console.log(watch('example')) // you can watch individual input by pass the name of the input

  return (
    <div className="Formm">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3>
<<<<<<< HEAD
          Turite klausimų ar norite pasikonsultuoti? Skambinkite arba palikite
          žinutę žemiau ir mes su Jumis susisieksime!{" "}
=======
          Turite klausimų ar norite pasikonsultuoti? Skambinkite arba palikite žinutę žemiau ir mes
          su Jumis susisieksime!{' '}
>>>>>>> 8de82e85691d9d94dd98b9a587011e2f47145186
        </h3>
        <label>Vardas</label>
        <input
          name="firstName"
          placeholder="Jūsų vardas"
          ref={register({
            required: true,
            maxLength: 20,
            pattern: /^[A-Za-z]+$/i,
          })}
        />
<<<<<<< HEAD
        {_.get("firstName.type", errors) === "required" && (
          <p>This field is required</p>
        )}
        {_.get("firstName.type", errors) === "maxLength" && (
          <p>First name cannot exceed 20 characters</p>
        )}
        {_.get("firstName.type", errors) === "pattern" && (
          <p>Alphabetical characters only</p>
        )}
=======
        {_.get('firstName.type', errors) === 'required' && <p>This field is required</p>}
        {_.get('firstName.type', errors) === 'maxLength' && (
          <p>First name cannot exceed 20 characters</p>
        )}
        {_.get('firstName.type', errors) === 'pattern' && <p>Alphabetical characters only</p>}
>>>>>>> 8de82e85691d9d94dd98b9a587011e2f47145186

        <label>El. paštas</label>
        <input
          name="lastName"
          placeholder="Jūsų elektroninis paštas"
          required
          ref={register({ pattern: /^[A-Za-z]+$/i })}
        />
<<<<<<< HEAD
        {_.get("lastName.type", errors) === "pattern" && (
          <p>Alphabetical characters only</p>
        )}
=======
        {_.get('lastName.type', errors) === 'pattern' && <p>Alphabetical characters only</p>}
>>>>>>> 8de82e85691d9d94dd98b9a587011e2f47145186

        <label>Telefono numeris</label>
        <input
          name="lastName"
          placeholder="Jūsų telefono numeris"
          required
          ref={register({ pattern: /^[A-Za-z]+$/i })}
        />
<<<<<<< HEAD
        {_.get("lastName.type", errors) === "pattern" && (
          <p>Alphabetical characters only</p>
        )}
=======
        {_.get('lastName.type', errors) === 'pattern' && <p>Alphabetical characters only</p>}
>>>>>>> 8de82e85691d9d94dd98b9a587011e2f47145186

        <label>Žinutė</label>
        <textarea
          id="body"
          type="message"
          name="Message"
          placeholder=""
          ref={register({ pattern: /^[A-Za-z]+$/i })}
        />
<<<<<<< HEAD
        {_.get("lastName.type", errors) === "pattern" && (
          <p>Alphabetical characters only</p>
        )}
        <input type="submit" />
      </form>
    </div>
  );
=======
        {_.get('lastName.type', errors) === 'pattern' && <p>Alphabetical characters only</p>}
        <input type="submit" />
      </form>
    </div>
  )
>>>>>>> 8de82e85691d9d94dd98b9a587011e2f47145186
}
export default Form
