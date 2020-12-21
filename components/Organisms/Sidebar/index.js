import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { faAccusoft } from "@fortawesome/free-brands-svg-icons";

import styles from "./styles.module.scss";

import data, { menu } from "./data";

const SideBar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.profile}>
        <div className={styles.avatar}>
          <div className={styles["avatar-shadow"]} />
          <img
            src="https://profiler.jollyany.co/images/tz_profiler/portrait.jpg"
            alt="avatar"
          />
        </div>

        <div className={styles["info-wrapper"]}>
          <div className={styles.name}>
            <h2>{data.name}</h2>
            <div>{data.title}</div>
          </div>

          <div className={styles.intro}>
            <div>{data.shortDesc}</div>
          </div>
        </div>
      </div>

      <div className={styles.menu}>
        <ul className={styles.ul}>
          {menu.map((m, idx) => (
            <li key={idx}>
              <a href={m.link} className={styles.a}>
                <FontAwesomeIcon icon={faAccusoft} size="2x" color="#6f4e3b" />

                {m.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
