import {ImageType} from "../../../../m2_bll/appReducer";
import styles from "./Image.module.scss";

import React from "react";

export const Image = React.memo((props: PropsType) => {
    return (
        <div className={styles.image}>
            <img className={styles.img} src={props.image.image_url}
                 onClick={() => props.handlerSetTagValueInput(props.image.tag)} alt={props.image.tag}/>
        </div>
    )
})

type PropsType = {
    handlerSetTagValueInput: (tag: string) => void
    image: ImageType
}