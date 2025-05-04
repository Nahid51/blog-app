import Image from "next/image";
import styles from "./singlePage.module.css";
import Menu from "@/components/menu/Menu";
import Comments from "@/components/comments/Comments";

const SinglePage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.textContainer}>
                    <h2 className={styles.title}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, est.</h2>
                    <div className={styles.user}>
                        <div className={styles.userImgContainer}>
                            <Image src="/p1.jpeg" alt="photo" fill sizes="100%" priority />
                        </div>
                        <div className={styles.userTextContainer}>
                            <span className={styles.username}>Kane William</span>
                            <span className={styles.date}>10.10.2024</span>
                        </div>
                    </div>
                </div>
                <div className={styles.imgContainer}>
                    <Image src="/p1.jpeg" alt="photo" fill sizes="100%" priority />
                </div>
            </div>
            <div className={styles.content}>
                <div className={styles.post}>
                    <div className={styles.desc}>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam dignissimos tenetur voluptate, nostrum aspernatur quod vero odit quo, at sit numquam dolore quisquam rem. Ducimus modi sit perferendis ipsam dolores.</p>
                        <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, sunt?</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam dignissimos tenetur voluptate, nostrum aspernatur quod vero odit quo, at sit numquam dolore quisquam rem. Ducimus modi sit perferendis ipsam dolores.</p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam dignissimos tenetur voluptate, nostrum aspernatur quod vero odit quo, at sit numquam dolore quisquam rem. Ducimus modi sit perferendis ipsam dolores.</p>
                    </div>
                    <div className={styles.comment}>
                        <Comments />
                    </div>
                </div>
                <Menu />
            </div>
        </div>
    )
}

export default SinglePage;