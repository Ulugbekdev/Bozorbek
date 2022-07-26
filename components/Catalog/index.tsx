import { createRef, useState } from 'react';
import { RiMenuUnfoldFill } from 'react-icons/ri';
import { BsArrowLeft } from 'react-icons/bs';
import styles from '../../styles/Catalog.module.sass';
import { arrayCategories } from './arrayCategories';

const Catalog = (props: any) => {
    const isOpenRef = createRef<HTMLButtonElement>();

    const catalogToggleHandle = (boolean: boolean) => {
        if(boolean) return isOpenRef.current?.classList.add(styles.catalog__open_active);
        isOpenRef.current?.classList.remove(styles.catalog__open_active);
    };

    return (
        <div className={styles.catalog}>
            <button className={styles.catalog__open} onClick={() => catalogToggleHandle(true)} ref={isOpenRef}>
                Открыть каталог
                <RiMenuUnfoldFill className={styles.catalog__open__icon} />
            </button>
            <div className={styles.catalog__wrapper}>
                <div className={styles.catalog__btn}>
                    <button className={styles.catalog__backBtn} onClick={() => catalogToggleHandle(false)}>
                        <BsArrowLeft className={styles.catalog__backBtn__Icon} />
                    </button>
                </div>
                <div className={styles.catalog__content}>
                    <h1 className={styles.catalog__heading}>Каталог</h1>
                    <nav className={styles.catalog__nav}>
                        {arrayCategories(props.categories)}
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Catalog;