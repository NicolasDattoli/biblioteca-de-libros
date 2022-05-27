import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layaout from "../components/layout";
import { useAppContext } from "../store/store";

export default function View(){
    const [item, setitem] = useState({});
    const params = useParams();
    const store = useAppContext();

    useEffect(() => {
        const book = store.getItem(params.bookId);
        setitem(book);
    }, []);

    if (!item) {
        return <div> Item not found </div>;
    }
    

    const itemStyles = {
        container: {
            display: "flex",
            gap: "20px",
            color: "white",
            width: "800px",
            margin: "0 auto",
        },
    };

    return (
        <Layaout>
            <div style={itemStyles.container}>
                <div>
                    <div>{item?.cover? <img src={item?.cover} width="400" />: ""}</div>
                </div>
                <div>
                    <h2>{item?.title}</h2>
                    <div>{item?.author}</div>
                    <div>{item?.intro}</div>
                    <div>{item?.completed ? "Leido": "Por Terminar"}</div>
                    <div>{item?.review}</div>
                </div>
            </div>
    </Layaout>
    ); 
}