/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'
import emailjs from 'emailjs-com'
import { useForm } from 'react-hook-form'

import './Form.scss'

function Form() {
  const { register } = useForm()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm('service_i56l5lq', 'template_5mauo37', e.target, 'user_hTHl7tc7bLu21Hsal4Ih8')
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        },
        e.target.reset(),
      )
  } // your form submit function which will invoke after successful validation

  // console.log(watch('example')) // you can watch individual input by pass the name of the input

  return (
    <div className="Formm">
      <form onSubmit={sendEmail}>
        <h3>
          Turite klausimų ar norite pasikonsultuoti? Skambinkite arba palikite žinutę žemiau ir mes
          su Jumis susisieksime!{' '}
        </h3>
        <label fhtmlFor="name">Vardas</label>
        <input
          name="name"
          type="text"
          placeholder="Jūsų vardas"
          ref={register({
            required: true,
            maxLength: 20,
            pattern: /^[A-Za-z]+$/i,
          })}
        />
        <label htmlFor="email">El. paštas</label>
        <input
          name="email"
          type="email"
          placeholder="Jūsų elektroninis paštas"
          required
          ref={register({ pattern: /^[A-Za-z]+$/i })}
        />
        <label htmlFor="phone">Telefono numeris</label>
        <input
          name="phone"
          placeholder="Jūsų telefono numeris"
          required
          ref={register({ pattern: /^[A-Za-z]+$/i })}
        />
        <label htmlFor="Message">Žinutė</label>
        <textarea
          id="body"
          type="message"
          name="Message"
          placeholder=""
          ref={register({ pattern: /^[A-Za-z]+$/i })}
        />
        <input type="submit" value="Send" />
      </form>
    </div>
  )
}
export default Form
