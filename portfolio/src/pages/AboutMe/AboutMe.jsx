import React from 'react';
import styles from './AboutMe.module.css';
import calc from '../../components/img/calc.jpg';
function AboutMe() {
    return (
        <>



            <div className={styles.paragraph}>
                <p className={styles.input}>
                    Я люблю кодить. Любила еще со школы. Дело в том, что у меня была необычная школа, а физико-математическая. И вот приходим мы на урок информатики и видим перед глазами....не, не то что вы подумали, у нас на столах стояли програмируемые калькуляторы.
                    Мне очень понравилась шутка про них "наш программируемый калькулятор настолькo крут, что на нем нет даже =". Но для того, чтобы получить ответ надо было написать программу. Программа выглядела примерно так «[В↑] [3] [×] [4] [+] [F] [×] [С/П]».
                    Это сродни головоломке, ты ее решаешь дома, а в школе можно было проверить.
                    Потом был basic. На нем мы уже рисовали. Снеговика, забор и дом. Тоже какое то волшебство.
                </p>
            </div>
            <div className={styles.paragraph}>
                <p className={styles.input}>
                    И да я жила еще в эру без интернета, но динозавров не видала.
                    А потом самые первые сайты, табличная верстка, взаимодействие с базами данных. Преподавание в школе все той же информатики.Тогда не было программ нормальных по информатике, можно было творить что хочешь. Программировать с детьми, создавать сайты.
                    И вот сейчас я занимаюсь frontend разработкой. И это тоже как магия. Ты сразу видишь осязаемый результат. Сразу можно увидеть получилось ли у тебя. Очень быстрый осязаемый результ.
                    Так что программирование сопровождает меня всю мою жизнь и мне это нравится!
                </p>
            </div>
            <a href="#">
                <svg version="1.1" className={styles.bud} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                    width="64px" height="64px" viewBox="0 0 64 64" enable-background="new 0 0 64 64" >
                    <circle fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" cx="32" cy="32" r="26" />
                    <polyline fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" points="32,20 32,32 40,36 " />
                    <line fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" x1="21.995" y1="56.005" x2="15" y2="63" />
                    <line fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" x1="49" y1="63" x2="42.005" y2="56.005" />
                    <polygon fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" points="1,8 5,4 15,6 3,18 " />
                    <polygon fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" points="59,4 63,8 61,18 49,6 " />
                </svg>
            </a >
        </>

    );
}

export default AboutMe;