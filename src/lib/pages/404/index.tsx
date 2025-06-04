import React from 'react';
import Link from 'next/link';
import styles from './page404.module.css'; // Assuming you have a CSS module for styling

export default function Page404() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>404 - Page Not Found</h1>
            <p className={styles.message}>Sorry, the page you are looking for does not exist.</p>
            <Link href="/" className={styles.homeLink}>
                Go Back to Home
            </Link>

        </div>
    );
}