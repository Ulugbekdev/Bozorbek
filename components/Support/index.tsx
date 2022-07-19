import Image from 'next/image';
import Container from '../Container';
import { TbBrandTelegram } from 'react-icons/tb';
import styles from '../../styles/Support.module.sass';

const Support = () => {
    return (
        <div className={styles.support}>
            <Container>
                <div className={styles.support__wrapper}>
                    <div className={styles.support__img}>
                        <Image
                            src='/images/support-img.svg'
                            alt='support'
                            width={581}
                            height={327}
                        />
                    </div>
                    <h1 className={styles.support__title}>Чат поддержки</h1>
                    <h2 className={styles.support__subtitle}>Получите ответ от наших за несколько минут</h2>
                    <div className={styles.support__content}>
                        <form className={styles.support__form}>
                            <div className={styles.support__form__input}>
                                <input type="tel" placeholder='+998 (__) ___ __ __' />
                            </div>
                            <button className={styles.support__form__btn}>
                                <TbBrandTelegram className={styles.support__form__icon} />
                                Отправить
                            </button>
                        </form>
                    </div>
                </div>
            </Container>
        </div>
    )
};

export default Support;