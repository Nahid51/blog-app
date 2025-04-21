"use client"
import { useState } from "react";
import styles from "./comments.module.css";
import Link from "next/link";
import Image from "next/image";

const Comments = () => {
    const status = "authenticated";
    const [desc, setDesc] = useState("");

    const handleSubmit = async () => {
        console.log("first");
    };

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Comments</h2>
            {status === "authenticated" ? (
                <div className={styles.write}>
                    <textarea
                        placeholder="write a comment..."
                        className={styles.input}
                        onChange={(e) => setDesc(e.target.value)}
                    />
                    <button className={styles.button} onClick={handleSubmit}>
                        Send
                    </button>
                </div>
            ) : (
                <Link href="/login">Login to write a comment</Link>
            )}
            <div className={styles.comments}>
                <div className={styles.comment}>
                    <div className={styles.user}>
                        <Image src="/p1.jpeg" alt="photo" width={50} height={50} />
                        <div className={styles.userInfo}>
                            <span className={styles.username}>Kane William</span>
                            <span className={styles.date}>10.10.24</span>
                        </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid libero alias, odio praesentium repellendus animi voluptatem dolores omnis ducimus eum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus voluptates iusto debitis, nesciunt optio eligendi libero nemo et eveniet? Sapiente.</p>
                </div>
            </div>
            <div className={styles.comments}>
                <div className={styles.comment}>
                    <div className={styles.user}>
                        <Image src="/p1.jpeg" alt="photo" width={50} height={50} />
                        <div className={styles.userInfo}>
                            <span className={styles.username}>Kane William</span>
                            <span className={styles.date}>10.10.24</span>
                        </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid libero alias, odio praesentium repellendus animi voluptatem dolores omnis ducimus eum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus voluptates iusto debitis, nesciunt optio eligendi libero nemo et eveniet? Sapiente.</p>
                </div>
            </div>
            <div className={styles.comments}>
                <div className={styles.comment}>
                    <div className={styles.user}>
                        <Image src="/p1.jpeg" alt="photo" width={50} height={50} />
                        <div className={styles.userInfo}>
                            <span className={styles.username}>Kane William</span>
                            <span className={styles.date}>10.10.24</span>
                        </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid libero alias, odio praesentium repellendus animi voluptatem dolores omnis ducimus eum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus voluptates iusto debitis, nesciunt optio eligendi libero nemo et eveniet? Sapiente.</p>
                </div>
            </div>
            <div className={styles.comments}>
                <div className={styles.comment}>
                    <div className={styles.user}>
                        <Image src="/p1.jpeg" alt="photo" width={50} height={50} />
                        <div className={styles.userInfo}>
                            <span className={styles.username}>Kane William</span>
                            <span className={styles.date}>10.10.24</span>
                        </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid libero alias, odio praesentium repellendus animi voluptatem dolores omnis ducimus eum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus voluptates iusto debitis, nesciunt optio eligendi libero nemo et eveniet? Sapiente.</p>
                </div>
            </div>
            <div className={styles.comments}>
                <div className={styles.comment}>
                    <div className={styles.user}>
                        <Image src="/p1.jpeg" alt="photo" width={50} height={50} />
                        <div className={styles.userInfo}>
                            <span className={styles.username}>Kane William</span>
                            <span className={styles.date}>10.10.24</span>
                        </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid libero alias, odio praesentium repellendus animi voluptatem dolores omnis ducimus eum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus voluptates iusto debitis, nesciunt optio eligendi libero nemo et eveniet? Sapiente.</p>
                </div>
            </div>
        </div>
    )
}

export default Comments;