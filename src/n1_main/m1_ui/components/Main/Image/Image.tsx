import {ImageType} from "../../../../m2_bll/appReducer";
import styles from "./Image.module.scss";

import React from "react";

export const Image = React.memo((props: PropsType) => {
    return (
        <div className={styles.image}>
            <img className={styles.img} src={props.image.image_url[0]}
                 onClick={() => props.handlerSetTagValueInput(props.image.tag)} alt={props.image.tag}/>
            {
                props.image.image_url[1] !== null
                    ? <img className={styles.img} src={props.image.image_url[1]}
                           onClick={() => props.handlerSetTagValueInput(props.image.tag)} alt={props.image.tag}/>
                    : null
            }
        </div>
    )
})

type PropsType = {
    handlerSetTagValueInput: (tag: string) => void
    image: ImageType
}