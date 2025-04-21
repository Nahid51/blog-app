import MenuCategories from '../menuCategories/MenuCategories';
import MenuPosts from '../menuPosts/MenuPosts';
import styles from './menu.module.css';

const Menu = () => {
    return (
        <div className={styles.container}>
            <h3 className={styles.subtitle}>{"What's hot"}</h3>
            <h2 className={styles.title}>Most Popular</h2>
            <MenuPosts withImage={false} />
            <h3 className={styles.subtitle}>Discover by topic</h3>
            <h2 className={styles.title}>Categories</h2>
            <MenuCategories />
            <h3 className={styles.subtitle}>Chosen by the editor</h3>
            <h2 className={styles.title}>Editors Pick</h2>
            <MenuPosts withImage={true} />
        </div>
    )
}

export default Menu;