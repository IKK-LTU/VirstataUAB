import React from 'react';
import _ from 'lodash/fp';
import { useForm } from 'react-hook-form';

import './Form.scss';

function Form() {
  const {
    register, handleSubmit, watch, errors,
  } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  }; // your form submit function which will invoke after successful validation

  console.log(watch('example')); // you can watch individual input by pass the name of the input

  return (
    <div className="Formm">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3>Turite klausimų ar norite pasikonsultuoti? Skambinkite arba palikite žinutę žemiau ir mes su Jumis susisieksime! </h3>
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
        {_.get('firstName.type', errors) === 'required' && (
        <p>This field is required</p>
        )}
        {_.get('firstName.type', errors) === 'maxLength' && (
        <p>First name cannot exceed 20 characters</p>
        )}
        {_.get('firstName.type', errors) === 'pattern' && (
        <p>Alphabetical characters only</p>
        )}

        <label>El. paštas</label>
        <input name="lastName" placeholder="Jūsų elektroninis paštas" required ref={register({ pattern: /^[A-Za-z]+$/i })} />
        {_.get('lastName.type', errors) === 'pattern' && (
        <p>Alphabetical characters only</p>
        )}

        <label>Telefono numeris</label>
        <input name="lastName" placeholder="Jūsų telefono numeris" required ref={register({ pattern: /^[A-Za-z]+$/i })} />
        {_.get('lastName.type', errors) === 'pattern' && (
        <p>Alphabetical characters only</p>
        )}

        <label>Žinutė</label>
        <textarea id="body" type="message" name="Message" placeholder="" ref={register({ pattern: /^[A-Za-z]+$/i })} />
        {_.get('lastName.type', errors) === 'pattern' && (
        <p>Alphabetical characters only</p>
        )}
        <input type="submit" />
      </form>
    </div>

  );
}
export default Form;
