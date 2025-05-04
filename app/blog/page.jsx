import styles from "./blogPage.module.css";
import CardList from "@/components/cardList/CardList";
import Menu from "@/components/menu/Menu";

const BlogPage = async ({ searchParams }) => {
    const { pageCount, cat } = await searchParams;
    const page = parseInt(pageCount?.page) || 1;

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>{cat} Blog</h1>
            <div className={styles.content}>
                <CardList page={page} cat={cat} />
                <Menu />
            </div>
        </div>
    )
};

export default BlogPage;