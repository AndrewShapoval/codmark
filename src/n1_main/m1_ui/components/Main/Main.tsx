import React, {useState} from "react";
import styles from "./Main.module.scss"
import {useFormik} from "formik";
import {useDispatch, useSelector} from "react-redux";
import {getImageTC, ImageType, removeImageAC, RequestStatusType} from "../../../m2_bll/appReducer";
import {AppRootStateType} from "../../../m2_bll/store";
import {Modal} from "../common/Modal/Modal";
import {GroupedTags} from "./GroupedTags/GroupedTags";
import {Image} from "./Image/Image";

export const Main = () => {

    const dispatch = useDispatch()
    const images = useSelector<AppRootStateType, Array<ImageType>>(state => state.app.images)
    const appStatus = useSelector<AppRootStateType, RequestStatusType>(state => state.app.status)
    const responseMessage = useSelector<AppRootStateType, string>(state => state.app.responseMessage)
    const [modalActive, setModalActive] = useState(false)
    const [isGroup, setIsGroup] = useState(false)

    const formik = useFormik({
        initialValues: {
            tag: ""
        },
        validate: (values) => {
            const errors: FormikErrorType = {}
            if (!values.tag) {
                errors.tag = "Заполните поле 'тег'"
            } else if (!/^[a-z,]+$/i.test(values.tag)) {
                errors.tag = "Разрешены только буквы латинского алфавита"
            }
            return errors
        },
        onSubmit: values => {
            dispatch(getImageTC(values.tag))
        }
    })

    //Обработчик onSubmit формика и активация модалки
    const formikHandleSubmit = () => {
        if (formik.errors) {
            setModalActive(true)
        }
        formik.handleSubmit()
    }

    // Обработчик удаления изображений из стейта
    const handlerRemoveImages = () => {
        dispatch(removeImageAC())
        formik.resetForm()
    }

    //Обработчик установки тега в инпут
    const handlerSetTagValueInput = (tag: string) => {
        formik.setFieldValue("tag", tag)
    }

    return (
        <div className={styles.mainBlock}>
            {responseMessage ? <Modal active={modalActive} setActive={setModalActive} text={responseMessage}/> : null}
            <div className={styles.mainContainer}>
                <form onSubmit={formik.handleSubmit} className={styles.form}>
                    <input type="text" placeholder="введите тег"
                           onChange={formik.handleChange} name={"tag"} value={formik.values.tag}/>
                    {
                        formik.errors.tag
                            ? <Modal active={modalActive} setActive={setModalActive} text={formik.errors.tag}/>
                            : null
                    }
                    <button className={styles.load} value={"send"} disabled={appStatus === "loading"}
                            onClick={formikHandleSubmit} type={"submit"}>
                        {appStatus === "loading" ? "Загрузка..." : "Загрузить"}
                    </button>
                    <button className={styles.clear} type={"button"} onClick={handlerRemoveImages}>Очистить</button>
                    {!isGroup
                        ? <button className={styles.group} type={"button"}
                                  onClick={() => setIsGroup(true)}>Группировать</button>
                        : <button className={styles.group} type={"button"}
                                  onClick={() => setIsGroup(false)}>Разгруппировать</button>}
                </form>

                {!isGroup
                    ? <div className={styles.images}>
                        {images && images.map((img, index) =>
                            <Image handlerSetTagValueInput={handlerSetTagValueInput} image={img}
                                   key={`${img.id} ${index}`}/>
                        )}
                    </div>
                    : <GroupedTags handlerSetTagValueInput={handlerSetTagValueInput}/>
                }
            </div>
        </div>
    )
}

type FormikErrorType = {
    tag?: string
}