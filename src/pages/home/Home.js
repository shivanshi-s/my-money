import styles from './Home.module.css'
import React from 'react'
import TransactionForm from './TransactionForm'
import { useAuthContext } from '../../hooks/useAuthContext'

function Home() {
  const { user } = useAuthContext()
  return (
    <div className={styles.container}>
    <div className={styles.content}>
      Transaction List
    </div>
    <div className={styles.sidebar}>
      <TransactionForm uid={user.id}/>
    </div>
    </div>
  )
}

export default Home