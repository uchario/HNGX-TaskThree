import { Link } from 'react-router-dom';

import styles from './Header.module.css';

import tvImg from '../assets/tv.png';
import menuImg from '../assets/signinmenu.png';
import imdbImg from '../assets/imdb.png';
import rottenImg from '../assets/rottentomatoes.png';
import playImg from '../assets/play.png';

// import { atom, useAtom } from 'jotai';
// const searchAtom = atom(null);

const Header = () => {
    // const[value, setValue] = useAtom(searchAtom);
    // const inputChangeHandler = (e) => {
    //     setValue(e.target.value);
    // }

    return(
            <header className={styles.header}>
                <nav className={styles.nav}>
                    <Link to={`/`} className={styles.home}>
                        <img src={tvImg}/>
                        <p>ImageBox</p>
                    </Link>
                    <div className={styles.search}>
                        <input 
                            type='search' 
                            placeholder='What genre do you want to see?'
                            // onChange={inputChangeHandler}
                        />
                    </div>
                    <div className={styles.signin}>
                        <p>Sign in</p>
                        <img src={menuImg}/>
                    </div>
                </nav>
                <div className={styles.hero}>
                    <h1 className={`${styles['heading-primary']} ${styles['hero-item']}`}>John Wick 3 :<br/> Parabellum</h1>
                    <div className={`${styles.rating} ${styles['hero-item']}`}>
                        <div className={styles.imdb}>
                            <img src={imdbImg}/>
                            <span>86.0 / 100</span>
                        </div>
                        <div className={styles.rotten}>
                            <img src={rottenImg}/>
                            <span>97%</span>
                        </div>
                    </div>
                    <p className={`${styles['hero-text']} ${styles['hero-item']}`}>
                        John Wick is on the run after killing a member <br/>
                        of the international assassins' guild, and with <br/>
                        a $14 million price tag on his head, he is the <br/>
                        target of hit men and women everywhere.
                    </p>
                    <button className={`${styles['btn-play']} ${styles['hero-item']}`}>
                        <img src={playImg}/>
                        <span>watch trailer</span>
                    </button>
                </div>
            </header>
    );
}

export default Header;