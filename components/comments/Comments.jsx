"use client"
import { useState } from "react";
import styles from "./comments.module.css";
import Link from "next/link";
import Image from "next/image";
import useSWR from 'swr'
import { useSession } from "next-auth/react";

const fetcher = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    if (!res?.ok) {
        const error = new Error(data?.message)
        throw error;
    }
    return data;
};

const Comments = ({ postSlug }) => {
    const { status } = useSession();
    const [comment, setComment] = useState("");

    const { data, error, isLoading, mutate } = useSWR(`http://localhost:3000/api/comments?postSlug=${postSlug}`, fetcher);

    if (error) return <div>Failed to load.</div>
    if (isLoading) return <div>Loading...</div>

    const handleSubmit = async () => {
        await fetch("http://localhost:3000/api/comments", {
            method: "POST",
            body: JSON.stringify({ comment, postSlug })
        });
        mutate();
    };

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Comments</h2>
            {status === "authenticated" ? (
                <div className={styles.write}>
                    <textarea
                        placeholder="write a comment..."
                        className={styles.input}
                        onChange={(e) => setComment(e.target.value)}
                    />
                    <button className={styles.button} onClick={handleSubmit}>
                        Send
                    </button>
                </div>
            ) : (
                <Link href="/login">Login to write a comment</Link>
            )}
            <div className={styles.comments}>
                {
                    data?.map((item) => (
                        <div key={item?.id} className={styles.comment}>
                            <div className={styles.user}>
                                {item?.user?.image && <Image src={item?.user?.image} alt="photo" width={50} height={50} />}
                                <div className={styles.userInfo}>
                                    <span className={styles.username}>{item?.user?.name}</span>
                                    <span className={styles.date}>{item?.createAt?.slice(0, 10)}</span>
                                </div>
                            </div>
                            <p>{item?.comment}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Comments;