import React, { useContext } from 'react';
import Styles from "../Sidebar.module.css";
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { UserContext } from '../../../UserContext/UserContext';

const variants = {
    open: {
        transition: {
            staggerChildren: 0.1,
        }
    },
    closed: {
        transition: {
            staggerChildren: 0.05,
            staggerDirection: -1
        }
    }
};

const itemVariants = {
    open: {
        y: 0,
        opacity: 1
    },
    closed: {
        y: 50,
        opacity: 0
    }
};

const Links = ({ handleClose }) => {
    const { user } = useContext(UserContext);
    const location = useLocation();

    const pages = [
        "Home",
        "workers",
        "Jobs",
        "About",
    ];

    if (user) {
        pages.push("MyProfile");
    }

    return (
        <motion.div className={Styles.linkss} variants={variants}>
            {pages.map(page => (
                <motion.div variants={itemVariants} key={page}>
                    <Link
                        to={page === "Home" ? "/" : `/${page.toLowerCase()}`}
                        style={{ fontSize: "36px", color: "black", fontWeight: "400" }}
                        onClick={handleClose}
                        className={location.pathname === (page === "Home" ? "/" : `/${page.toLowerCase()}`) ? `${Styles.activeLink}` : ""}
                    >
                        {page}
                    </Link>
                </motion.div>
            ))}
        </motion.div>
    );
};

export default Links;
