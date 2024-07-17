import React, { useEffect } from 'react'
import styles from './project.module.css'

export interface aboutProps { }

const Project: React.FC<aboutProps> = ({ }) => {
  return (
    <div className={styles.about_container} id='project'>
      <h1>Project</h1>
      {Array.from({ length: 20 }).map((_, index) => (
        <p key={index}>컨텐츠가 많이 있는 페이지를 만들기 위해 긴 텍스트를 추가합니다...</p>
      ))}
    </div>)
}

export default Project;