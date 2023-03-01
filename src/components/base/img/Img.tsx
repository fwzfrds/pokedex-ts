import React from 'react'
import styles from './img.module.css'

type ImgProps = {
    style?: React.CSSProperties
    src: string
}

const Img = ({ style, src }: ImgProps) => {
    return (
        <div
            className={styles.imgContainer}
            style={style}
        >
            <img src={src} alt="pokeball" />
        </div>
    )
}

export default Img