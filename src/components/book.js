import { Link } from "react-router-dom"

export default function Book({ item }){
    const booksContainerStyle = {
        display: "flex",
        flexDirection: "columnn",
        width:"296px"
    };
    const booksInfoStyle = {
        display: "flex",
        flexDirection: "columnn",
        alignItems:"center",
        textAling:"center",
        color: "white",
        textDecoration: "none"
    };
    return (
        <div style={booksContainerStyle}>
            <Link to={`/view/${item.id}`} style={booksInfoStyle}>
            <img src={item.cover} width="200" alt=""/>            
            </Link>
        </div>
    );
}