import React from 'react';
import styles from './Photo.module.css';
import cn from 'classnames';
function Photo() {
    return (
        <div className={styles.container}>

            <div className={cn(styles.card, styles.card0)}>
                <div className={styles.border}>
                    <h2 className={styles.h2}>почти школа </h2>

                </div>
            </div>
            <div className={cn(styles.card, styles.card1)}>
                <div className={styles.border}>
                    <h2 className={styles.h2}>10 лет назад</h2>

                </div>
            </div>
            <div className={cn(styles.card, styles.card2)}>
                <div className={styles.border}>
                    <h2 className={styles.h2}>сегодня</h2>

                </div>
            </div>

        </div>
    );
}

export default Photo;