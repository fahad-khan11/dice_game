import React from "react";
import styles from "./ContactForm.module.css";
import Button from "../Button/Button";
import { MdMessage } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { useState } from "react";
function ContactForm() {
  const[name,setName] = useState("fahad khan")
  const[email,setEmail] = useState("fahadfarman00@gmail.com")
  const[text,setText] = useState("hi fahad")
  const onSubmit = (event) => {
    event.preventDefault();
    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);

  }

  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_button}>
          <Button
            text="VIA SUPPORT CHAT"
            icon={<MdMessage fontSize="24px" />}
          />
          <Button 
           text="VIA CALL" icon={<IoCall fontSize="24px" />} />
        </div>
        <Button isOutline={true} text="VIA EMAIL FORM" icon={<IoMdMail fontSize="24px" />} />
        <form onSubmit = {onSubmit}>
            <div className={styles.form_container}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
            </div>

            <div className={styles.form_container}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
            </div>

            <div className={styles.form_container}>
            <label htmlFor="text">Text</label>
            <textarea type="email" name="email" rows="6"/>
            </div>
            <div style={{
                display:"flex",
                justifyContent:"end",
                }}>
            <Button text="SUBMIT"/>
            </div>
            <div>{name +"  "+ email + "  "+ text}</div>
        </form>
      </div>
      
      <div className={styles.contact_image}>
        <img src="/images/Service 24_7-pana 1.jpg" alt="contact image" />
      </div>
    </section>
  );
}

export default ContactForm;
