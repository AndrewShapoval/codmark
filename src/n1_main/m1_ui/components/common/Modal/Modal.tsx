import React from "react";
import styles from "./Modal.module.scss"

export const Modal = ({active, setActive, text}: any) => {
    return (
        <div className={active ? `${styles.modal} ${styles.active}` : styles.modal}
             onClick={() => setActive(false)}>
            <div className={active ? `${styles.modalContent} ${styles.modalContentActive}` : styles.modalContent}
                 onClick={(e) => e.stopPropagation()}>
                <p className={styles.text}>{text}</p>
            </div>
        </div>
    )
}