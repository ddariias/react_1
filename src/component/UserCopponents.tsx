import { FC, ReactNode } from "react"
import { IUser } from "../model/IUser"

type UserComponentsWithButton<T> = T & {buttonClick: (id: number) =>  void};

let UserCopponents:FC<UserComponentsWithButton<IUser>> = ({id, firstName, lastName, age, gender, buttonClick}) => {
    return (
                <div>
                    {id} - {firstName} {lastName}: {age}, {gender} <button onClick = { ()=>
                    {
                        buttonClick(id)
                    } }>
                    Show posts</button>
                </div>
    );
}

export default UserCopponents;