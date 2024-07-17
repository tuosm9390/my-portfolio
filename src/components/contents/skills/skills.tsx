import React, { useEffect } from 'react'
import styles from './skills.module.css'

export interface aboutProps { }

const Skills: React.FC<aboutProps> = ({ }) => {
  return (
    <div className={styles.about_container} id="skills">
      <h1>Skills</h1>
      {Array.from({ length: 20 }).map((_, index) => (
        <p key={index}>컨텐츠가 많이 있는 페이지를 만들기 위해 긴 텍스트를 추가합니다...</p>
      ))}
    </div>)
}

export default Skills;