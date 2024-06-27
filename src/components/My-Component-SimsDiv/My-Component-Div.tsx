import React, {FC} from "react";
import styles from "./style.module.css"

interface IProps {
    infoName: string,
    infoSurname: string,
    infoAge: number,
    infoImage: string
}
export const SimsDiv: FC<IProps> = ({infoName, infoSurname, infoAge, infoImage}) => {
    return(
        <div>
            <h1 className={styles.infoName}>{infoName} {infoSurname}</h1>
            <h6>{infoAge}</h6>
            <img src={infoImage} alt={infoName} className={styles.infoImage}/>
            <hr/>
        </div>
    )
}
export default SimsDiv;