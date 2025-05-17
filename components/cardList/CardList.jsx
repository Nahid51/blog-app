import styles from './cardList.module.css';
import Card from '../card/Card';
import Pagination from '../pagination/Pagination';

const getData = async (page, cat) => {
    const res = await fetch(`https://blog-app-two-lac-65.vercel.app/api/posts?page=${page}&cat=${cat || ""}`, { cache: "no-store" });
    if (!res.ok) {
        throw new Error("Failed")
    }
    return res.json();
};

const CardList = async ({ page, cat }) => {
    const { posts, count } = await getData(page, cat);
    const POST_PER_PAGE = 2;

    const hasPrev = POST_PER_PAGE * (page - 1) > 0;
    const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;

    return (
        <div className={styles.container}>
            <div className={styles.container}>
                <h2 className={styles.title}>Recent Posts</h2>
                <div className={styles.posts}>
                    {
                        posts?.map((item => (
                            <Card key={item?.id} item={item} />
                        )))
                    }
                </div>
                <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} />
            </div>
        </div>
    )
}

export default CardList;