"use client"
import Image from "next/image";
import { useState } from "react";
import styles from "./writePage.module.css";
import ReactQuill from "react-quill-new";
import 'react-quill-new/dist/quill.snow.css';

const WritePage = () => {
    const { status } = useSession();
    
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("");
    const [title, setTitle] = useState("");

    if (status === "loading") {
        return <div className={styles.loading}>Loading...</div>;
    }

    if (status === "authenticated") {
        window.location.href = "/";
    }

    const handleSubmit = async () => {
        console.log(title)
    };

    return (
        <div className={styles.container}>
            <input type="text" placeholder="Title" className={styles.input} onChange={(e) => setTitle(e.target.value)} />
            <div className={styles.editor}>
                <button className={styles.button} onClick={() => setOpen(!open)}>
                    <Image src="/plus.png" alt="photo" width={16} height={16} />
                </button>
                {open && (
                    <div className={styles.add}>
                        <button className={styles.addButton}>
                            <Image src="/image.png" alt="" width={16} height={16} />
                        </button>
                        <button className={styles.addButton}>
                            <Image src="/external.png" alt="" width={16} height={16} />
                        </button>
                        <button className={styles.addButton}>
                            <Image src="/video.png" alt="" width={16} height={16} />
                        </button>
                    </div>
                )}
                <ReactQuill
                    className={styles.textArea}
                    theme="bubble"
                    value={value}
                    onChange={setValue}
                    placeholder="Tell your story..."
                />
            </div>
            <button className={styles.publish} onClick={handleSubmit}>
                Publish
            </button>
        </div>
    )
}

export default WritePage;