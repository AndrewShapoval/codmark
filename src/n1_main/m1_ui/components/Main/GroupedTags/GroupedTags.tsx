import React from "react";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../../../m2_bll/store";
import {ImageType} from "../../../../m2_bll/appReducer";
import styles from "./GroupedTags.module.scss";
import {Image} from "../Image/Image";

export const GroupedTags = React.memo((props: PropsType) => {

    const uniqueTagsNames = useSelector<AppRootStateType, Array<string>>(state => state.app.uniqueTagsNames)
    const images = useSelector<AppRootStateType, Array<ImageType>>(state => state.app.images)

    return (
        <>
            {uniqueTagsNames
            && uniqueTagsNames.map((uniqueTag, i) =>
                <div className={styles.groupedTags} key={i}>
                    <h3 className={styles.uniqueTag}>{uniqueTag}</h3>
                    <div className={styles.images}>
                        {images
                        && images.filter(img => img.tag === uniqueTag)
                            .map((img, index) =>
                                <Image handlerSetTagValueInput={props.handlerSetTagValueInput} image={img}
                                       key={`${img.id} ${index}`}/>
                            )
                        }
                    </div>
                </div>
            )}
        </>
    )
})

type PropsType = {
    handlerSetTagValueInput: (tag: string) => void
}