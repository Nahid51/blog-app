import Image from "next/image";
import styles from "./singlePage.module.css";
import Menu from "@/components/menu/Menu";
import Comments from "@/components/comments/Comments";

const getData = async (slug) => {
    const res = await fetch(`https://blog-app-two-lac-65.vercel.app/api/posts/${slug}`, { cache: "no-store" });
    if (!res.ok) {
        throw new Error("Failed")
    }
    return res.json();
};

const SinglePage = async ({ params }) => {
    const { slug } = await params;
    const data = await getData(slug);
    const markup = { __html: data?.desc };

    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.textContainer}>
                    <h2 className={styles.title}>{data?.title}</h2>
                    <div className={styles.user}>
                        {data?.user?.image &&
                            <div className={styles.userImgContainer}>
                                <Image src={data?.user?.image} alt="photo" fill sizes="100%" priority />
                            </div>
                        }
                        <div className={styles.userTextContainer}>
                            <span className={styles.username}>{data?.user?.name}</span>
                            <span className={styles.date}>{data?.createdAt?.slice(0, 10)}</span>
                        </div>
                    </div>
                </div>
                {data?.img &&
                    <div className={styles.imgContainer}>
                        <Image src={data?.img} alt="photo" fill sizes="100%" priority />
                    </div>
                }
            </div>
            <div className={styles.content}>
                <div className={styles.post}>
                    <div
                        className={styles.desc}
                        dangerouslySetInnerHTML={markup}
                    />
                    <div className={styles.comment}>
                        <Comments postSlug={slug} />
                    </div>
                </div>
                <Menu />
            </div>
        </div>
    )
}

export default SinglePage;