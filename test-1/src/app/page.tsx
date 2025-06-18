'use client';
import React from 'react';
import styles from './page.module.css';

export default function Page() {
	return (
		<div className={styles.container}>
			<div className={styles.sidebar}>
				<img
					src="/avatar.png"
					alt="Avatar"
					className={styles.avatar}
				/>
				<h2 className={styles.welcome}>
					Welcome, <span className={styles.adventurer}>Adventurer</span>
				</h2>
				<p className={styles.levelInfo}>Level 0</p>
				<p className={styles.xp}>XP: 60/100</p>
				<div className={styles.progressBar}>
					<div className={styles.progress} />
				</div>
				<div className={styles.stats}>
					<div className={styles.stat}><span>🦾 Strength</span><b>30</b></div>
					<div className={styles.stat}><span>🧠 Intelligence</span><b>20</b></div>
					<div className={styles.stat}><span>⭐ Charisma</span><b>20</b></div>
					<div className={styles.stat}><span>🎨 Creativity</span><b>20</b></div>
				</div>
				<div className={styles.coins}>
					<span>🪙 Coins</span><b>130</b>
				</div>
			</div>

			<div className={styles.main}>
				<div className={styles.header}>
					<h2>Active Quests</h2>
					<button className={styles.newQuest}>+ New Quest</button>
				</div>

				<div className={styles.questList}>
					{[
						{ title: 'Complete your first quest', desc: 'Try adding and completing a new quest to earn rewards!', tag: 'strength +10' },
						{ title: 'Improve your intelligence', desc: 'Read a book to gain +10 intelligence.', tag: 'intelligence +10' },
						{ title: 'Craft a new item', desc: 'Use your creativity to craft a new item.', tag: 'creativity +10' },
						{ title: 'asd', desc: 'asd', tag: 'charisma +10', complete: true },
						{ title: 'asd', desc: 'asd', tag: 'strength +10', complete: true }
					].map((q, index) => (
						<div key={index} className={styles.quest}>
							<div>
								<strong>{q.title}</strong>
								<p>{q.desc}</p>
							</div>
							<div className={styles.questActions}>
								<span className={styles.tag}>{q.tag}</span>
								{q.complete && <span className={styles.check}>✔</span>}
								<span className={styles.delete}>🗑️</span>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
