import styles from '../styles/components/Profile.module.css';

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src='http://www.informaticasg.com.br/images/samir.png' alt="Samir Gannem" />
      <div>
        <strong>Samir Gannem</strong>
        <p>Level 1</p>
      </div>
    </div>
  )
}