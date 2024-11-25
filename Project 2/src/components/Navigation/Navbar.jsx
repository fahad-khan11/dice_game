import styles from "./Navigation.module.css";
const Navbar = () => {
  return (
    <nav className={`${styles.Navbar} container`}>
        <div className='logo1'>
            <img src="/images/Frame.jpg" alt="Logo" />
        </div>
        <ul>
            <li>Home</li>
            <li>ABOUT</li>
            <li>CONTACT</li>
        </ul>
    </nav>
  )
}

export default Navbar
