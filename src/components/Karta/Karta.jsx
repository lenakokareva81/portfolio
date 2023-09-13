import React from 'react';

import styles from './Karta.module.css';
import img1 from '../img/karta1.png';
import img2 from '../img/karta2.png';
import img3 from '../img/karta3.png';
import cn from 'classnames';
function Karta({ header, text, id }) {
    let imeg, color
    imeg = (id == '1') ? img1 : (id == '2') ? img2 : img3

    return (
        <>


            <div className={styles.container}>
                <div className={styles.card} >
                    <div className={styles.imgBox}>
                        <img src={imeg} className={styles.img} />
                    </div>
                    <div className={styles.content}>
                        <h2 className={styles.h2}>{header}</h2>
                        <p className={styles.p}>
                            {text}
                        </p>
                        <div >
                            <a className={styles.a} href="">ответ</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Karta;