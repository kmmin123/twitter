import { dbService } from "fbase";
import {useState} from "react";
import {deleteDoc, doc} from "firebase/firestore";

const Nweet = ({nweetObj, isOwner}) => {
    const [editing, setEditing] = useState(false);
    const [newNweet, setNewNweet] = useState(nweetObj.text);
    const onDeleteClick = async () => {
        const ok = window.confirm("삭제하시겠습니까?");
        console.log(ok);
        if (ok) {
            console.log(nweetObj.id);
            const data = await deleteDoc(doc(dbService, "nweets", nweetObj.id));
            console.log(data);
        }
    };
    return (
        <div>
            <h4>{nweetObj.text}</h4>
            {isOwner && (
                <>
            <button onClick={onDeleteClick}>Delete Nweet</button>
            <button>Edit Nweet</button>
            </>
            )}
        </div>
    );
};
export default Nweet;