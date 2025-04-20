import Image from 'next/image';
import styles from './cardList.module.css';
import Card from '../card/Card';

const CardList = () => {
    return (
        <div className={styles.container}>
            <div className={styles.container}>
                <h2 className={styles.title}>Recent Posts</h2>
                <div className={styles.posts}>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
                {/* <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} /> */}
            </div>
        </div>
    )
}

export default CardList;