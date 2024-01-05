import {collection, addDoc, onSnapshot} from "firebase/firestore";
import {useEffect, useState} from "react";
import {dbService} from "fbase";
import Nweet from "components/Nweet";

const Home= ({userObj}) =>{
    const [nweet, setNweet] = useState("");
    const [nweets, setNweets] = useState([]);

    const onSubmit = async (event) => {
        event.preventDefault();

        await addDoc(collection(dbService, "nweets"),{
                    text: nweet,
                    createdAt: Date.now(),
                    createdId: userObj.uid,
                });
                setNweet("")
        
    };

    useEffect(() => {
        onSnapshot(collection(dbService, "nweets"),(snapshot) => {
            const newArray = snapshot.docs.map((document)=>({
                id:document.id,
                ...document.data(),
            }));
            setNweets(newArray);
        });
    }, []);

        
    const onChange = async (event) => {
            event.preventDefault();
            const {
                target: { value },
            } = event;
            setNweet(value);
    };
            
            


        return (
            <>
            <form onSubmit={onSubmit}>
                <input value={nweet}
                    onChange={onChange}
                    type="text"
                    placeholder="What's on your mind?"
                    maxLength={120} />
                <input type="submit" value="Nweet" />
            </form>
            <div>
                {nweets.map((nweet) => (
                    <Nweet
                        key={nweet.id}
                        nweetObj={nweet}
                        isOwner={nweet.creatorId === userObj.uid}
                />
                ))}
            </div>
        </>
        );
    };

    export default Home;
