"use client"
import Image from "next/image";
import { useState } from "react";
import styles from "./writePage.module.css";
import ReactQuill from "react-quill-new";
import 'react-quill-new/dist/quill.snow.css';
import { useSession } from "next-auth/react";

const WritePage = () => {
    const { status } = useSession();

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("");
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [catSlug, setCatSlug] = useState("");


    if (status === "loading") {
        return <div className={styles.loading}>Loading...</div>;
    }

    if (status === "unauthenticated") {
        window.location.href = "/";
    }

    const handleImage = (e) => {
        const imageReader = new FileReader();
        imageReader.addEventListener("load", () => {
            setImage(imageReader.result)
        })
        imageReader.readAsDataURL(e.target.files[0])
    };

    const slugItem = (slug) => slug.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");

    const handleSubmit = async () => {
        await fetch("http://localhost:3000/api/posts", {
            method: "POST",
            body: JSON.stringify({
                title,
                desc: value,
                img: image,
                slug: slugItem(title),
                catSlug: catSlug || "style"
            })
        })
    };

    return (
        <div className={styles.container}>
            <input type="text" placeholder="Title" className={styles.input} onChange={(e) => setTitle(e.target.value)} />
            <select className={styles.select} onChange={(e) => setCatSlug(e.target.value)}>
                <option value="style">style</option>
                <option value="fashion">fashion</option>
                <option value="food">food</option>
                <option value="culture">culture</option>
                <option value="travel">travel</option>
                <option value="coding">coding</option>
            </select>
            <div className={styles.editor}>
                <button className={styles.button} onClick={() => setOpen(!open)}>
                    <Image src="/plus.png" alt="photo" width={16} height={16} />
                </button>
                {open && (
                    <div className={styles.add}>
                        <input type="file" id="image" onChange={handleImage} />
                        <button className={styles.addButton}>
                            <label htmlFor="image">
                                <Image src="/image.png" alt="" width={16} height={16} />
                            </label>
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