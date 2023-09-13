import React from 'react';
import styles from './Video.module.css';

function Video() {
    return (
        <><div className={styles.video}>
            <h1> Преобразование SVG при помощи css</h1>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/5E-ei9R-kWg?si=6TblBCgIyw1iGB0S" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/lSNcK-XBlM4?si=kFzm8wmF3GKaUV1U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>


        </>

    );
}

export default Video;