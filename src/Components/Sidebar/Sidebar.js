import React from "react";
import styles from "./Sidebar.module.scss";
import samantha from "../../assets/png/samantha.png";
import { Link, useLocation } from "react-router-dom";

const sidebarNavLinks = ['dashboard', 'expenses', 'wallets', 'summary', 'accounts', 'settings'];

const Sidebar = () => {
    const location = useLocation();

    return (
        <section>
            <aside className={styles.sidebar}>
                <div className={styles.sidebarContent}>
                    <div className={styles.profileDetailes}>
                        <div className={styles.profileImgDiv}>
                            <img src={samantha} alt="samantha" />
                            <p className={styles.notifications}>3</p>
                        </div>
                        <p className={styles.userName}>Samantha</p>
                        <p className={styles.userEmail}>samantha@email.com</p>
                    </div>

                    <nav className={styles.sidebarNav}>
                        <ul>
                            {
                                sidebarNavLinks.map((sidebarNavLink, index) => (
                                    <li key={index} className={styles.sidebarNavItem}>
                                        <Link
                                            to={`/${sidebarNavLink}`}
                                            className={
                                                location.pathname === `/${sidebarNavLink}`
                                                ? styles.sidebarNavLinkActive
                                                : styles.sidebarNavLink
                                            }
                                        >
                                            {sidebarNavLink.charAt(0).toUpperCase() + sidebarNavLink.slice(1)}
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </nav>
                </div>
            </aside>
        </section>
    );
};

export default Sidebar;
