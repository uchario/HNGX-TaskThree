import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

import styles from './Footer.module.css';

const Footer = () => {
    const year = new Date().getFullYear();

    return(
        <footer className={styles.footer}>
            <div className={styles.socials}>
                <Link>
                    <FontAwesomeIcon icon={faFacebook} className={styles.font}/>
                </Link>
                <Link>
                    <FontAwesomeIcon icon={faInstagram} className={styles.font}/>
                </Link>
                <Link>
                    <FontAwesomeIcon icon={faTwitter} className={styles.font}/>
                </Link>
                <Link>
                    <FontAwesomeIcon icon={faYoutube} className={styles.font}/>
                </Link>
            </div>
            <div className={styles.terms}>
                <Link to={``}>Conditions of Use</Link>
                <Link to={``}>Privacy & Policy</Link>
                <Link to={``}>Press Room</Link>
            </div>
            <div className={styles.copyright}>
                <p>&copy;{year} ImageBox by arich</p>
            </div>
        </footer>
    );
}

export default Footer;