import styles from './Contact.module.css';
import Button from '../Button/Button.jsx';
import { MdMessage } from "react-icons/md";
import { MdOutlinePhone } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";


const ContactForm = () => {
    return (
        <section className={styles.container}>
            <div className={styles.contact_form}>
                <div className={styles.top_btn}>
                    <Button text="VIA SUPPORT CHAT" icon={<MdMessage fontSize="24px" />} />
                    <Button text="VIA CALL" icon={<MdOutlinePhone />} />
                </div>
                <Button isOutline={true} text="VIA EMAIL FORM" icon={<MdOutlineEmail fontSize="24px" />}></Button>
                <form action="">
                    <div className={styles.form_control}>
                        <label htmlFor="name">Name</label>
                        <input type="text" name='name' />
                    </div>
                    <div className={styles.form_control}>
                        <label htmlFor="email">Email</label>
                        <input type="email" name='email' />
                    </div>
                    <div className={styles.form_control}>
                        <label htmlFor="text">Text</label>
                        <textarea name='text' rows="8"/>
                    </div>
                    <div className={styles.submit_button}>
                        <Button text="SUBMIT BUTTON" />
                    </div>
                </form>
            </div>
            <div className={styles.contact_image}>
                <img src="/images/contact.svg" alt="contact image" />
            </div>
        </section>
        
    )
}

export default ContactForm