import React, { useEffect } from "react";
import styles from "./archive.module.css";

export interface aboutProps {}

const Archive: React.FC<aboutProps> = ({}) => {
  return (
    <div
      className={styles.about_container}
      id="archive"
    >
      <h1>Archive</h1>
      {Array.from({ length: 20 }).map((_, index) => (
        <p key={index}>
          컨텐츠가 많이 있는 페이지를 만들기 위해 긴 텍스트를 추가합니다...
        </p>
      ))}
    </div>
  );
};

export default Archive;
