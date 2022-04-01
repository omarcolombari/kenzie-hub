import { CardTech } from './style'

function Card({ title, status, onClick }) {
    return (
        <CardTech onClick={onClick}>
            <p>{title}</p>
            <span>{status}</span>
        </CardTech>
    )
}

export default Card