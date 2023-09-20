import { Link, redirect, useNavigate } from 'react-router-dom';

import { useEffect, useState } from 'react';

import { useQuery } from 'react-query';
import { moviesQuery } from '../queries/moviesQuery';

import PuffLoader from 'react-spinners/PuffLoader';

import tvImg from '../assets/tv.png';
import menuImg from '../assets/signinmenu.png';

import { GridContextProvider, GridDropZone, GridItem, swap } from 'react-grid-dnd';

import styles from './Main.module.css';

const IMAGE_URL = `http://image.tmdb.org/t/p/w185/`;

const IMAGE_DATA = [
    {
        id: 1,
        poster: IMAGE_URL+`/3bhkrj58Vtu7enYsRolD1fZdja1.jpg`,
        tag: 'action'
    },
    {
        id: 2,
        poster: IMAGE_URL+`/lyQBXzOQSuE59IsHyhrp0qIiPAz.jpg`,
        tag: 'adventure'
    },
    {
        id: 3,
        poster: IMAGE_URL+`/hek3koDUyRQk7FIhPXsa6mT2Zc3.jpg`,
        tag: 'drama'
    },
    {
        id: 4,
        poster: IMAGE_URL+`/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg`,
        tag: 'epic'
    },
    {
        id: 5,
        poster: IMAGE_URL+`/ktejodbcdCPXbMMdnpI9BUxW6O8.jpg`,
        tag: 'horror'
    },
    {
        id: 6,
        poster: IMAGE_URL+`/ow3wq89wM8qd5X7hWKxiRfsFf9C.jpg`,
        tag: 'comedy'
    },
    {
        id: 7,
        poster: IMAGE_URL+`/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg`,
        tag: 'sitcom'
    },
    {
        id: 8,
        poster: IMAGE_URL+`/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg`,
        tag: 'action'
    },
    {
        id: 9,
        poster: IMAGE_URL+`/q719jXXEzOoYaps6babgKnONONX.jpg`,
        tag: 'drama'
    },
    {
        id: 10,
        poster: IMAGE_URL+`/ow3wq89wM8qd5X7hWKxiRfsFf9C.jpg`,
        tag: 'comedy'
    }
];

const Main = () => {
    const {error, data, isLoading} = useQuery(moviesQuery());
    const [tests, setTests] = useState(IMAGE_DATA);
    const [searchInput, setSearchInput] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        if(!localStorage.getItem('user')) {
            navigate('/');
        }
    }, [navigate]);

    const dragHandler = (sourceId, sourceIndex,targetIndex) => {
        const nextState = swap(tests, sourceIndex, targetIndex);
        setTests(nextState);
    }

    const inputChangeHandler = (event) => {
        if(event.target.value === '') {
            setTests(IMAGE_DATA);
        } else {
            const modifiedTests = tests.filter((test) => test.tag.includes(event.target.value.toLowerCase()));
            setTests(modifiedTests);
        }
        setSearchInput(event.target.value);
    }

    const logoutHandler = () => {
        localStorage.removeItem('user');
        navigate('/');
    }

    let content;

    if(data) {
        content = (
            <GridContextProvider onChange={dragHandler}>
                <GridDropZone
                    id='movies'
                    boxesPerRow={4}
                    rowHeight={350}
                    style={{height: "1000px", width: "1000px"}}
                >
                    {tests?.map((test) => (
                        <GridItem
                            key={test}
                        >
                            <div className={styles['movie-list']}>
                                <img src={test.poster}/>
                                <div>
                                    <span className={styles.tag}>{test.tag}</span>
                                </div>
                            </div>
                        </GridItem>
                    ))}
                </GridDropZone>
            </GridContextProvider>
        )
    }else if(error) {
        content = (<p>{error}</p>);
    } else {
        content = <PuffLoader
                    color={`#be123c`}
                    loading={isLoading}
                    size={150}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />
    }
    
    return(
        <>
            <header className={styles['main-header']}>
                <nav className={styles.nav}>
                    <Link to={`/`} className={styles.home}>
                        <img src={tvImg}/>
                        <p>ImageBox</p>
                    </Link>
                    <div className={styles.search}>
                        <input 
                            type='search' 
                            placeholder='What genre do you want to see?'
                            onChange={inputChangeHandler}
                            value={searchInput}
                        />
                    </div>
                    <div className={styles.signin}>
                        <button onClick={logoutHandler}>Logout</button>
                        <img src={menuImg}/>
                    </div>
                </nav>
                <h1 className={styles.featured}>featured images</h1>
            </header>
            <main className={styles.main}>
                {content}
            </main>
        </>
    );
}

export default Main;