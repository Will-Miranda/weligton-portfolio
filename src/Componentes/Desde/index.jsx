import React from "react"
import { Building, EmojiSmile, PersonArmsUp, Star } from "react-bootstrap-icons"
import * as A from "./style"

const Desde = () => {

    const items = [
        {
            id: 1,
            number: "239",
            description: "Profissionais Desenvolvidos",
            icon: PersonArmsUp
        },
        {
            id: 2,
            number: "4",
            description: "Palestras",
            icon: EmojiSmile
        },
        {
            id: 3,
            number: "120",
            description: "Recrutamentos Realizados",
            icon: Star
        },
        {
            id: 4,
            number: "50",
            description: "Empresas Parceiras",
            icon: Building
        },
    ]

    return (

        <A.Container>

            <A.Title>Desde 2026</A.Title>
            <A.List>
                {items.map((item) => (
                    <A.Items key={item.id}>
                        <A.Icon as={item.icon} />
                        <A.Number>{item.number}</A.Number>
                        <A.Description>{item.description}</A.Description>
                    </A.Items>
                ))}
            </A.List>

        </A.Container>
    )
}

export default Desde