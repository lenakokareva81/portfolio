import React from 'react';
import styles from './Learn.module.css';

import Karta from '../../components/Karta/Karta';
function Learn() {
    return (
        <div className={styles.body}>

            <Karta
                id='1'
                header=' До лета осталось....'
                text=' Напишите программу на JavaScript для подсчета оставшихся дней до начала летних каникул.'
            ></Karta>
            <Karta
                id='2'
                header='Новый год идет'
                text='Напишите программу на JavaScript, чтобы вращать строка «каникулы» двигалась в одном направлении, а человечек в другом '
            ></Karta>
            <Karta
                id='3'
                header=' анаграмма'
                text='Напиши игру анаграмму, это когда берется слово. Все буквы в нем перемешиваются. А игроку надо угадать слово и написать его'
            ></Karta>




        </div>

    );
}

export default Learn;