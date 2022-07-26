import Link from 'next/link';
import Image from 'next/image';
import { baseUrl } from '../../redux/variables';
import { BsFillCircleFill } from 'react-icons/bs';
import styles from '../../styles/Catalog.module.sass';

export const arrayCategories = (categories: any) => {
    return categories.map((el: any, index: any) => {
        return (
            <Link href={'/'} key={index}>
                <a className={styles.catalog__navLink}>
                    <BsFillCircleFill className={styles.catalog__navIcon} />
                    {el.name}
                </a>
            </Link>
        )
    })
};