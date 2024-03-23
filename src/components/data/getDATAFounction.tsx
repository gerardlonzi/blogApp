import { useState, useEffect } from "react"

const getCategorie = async () => {
    const res = await fetch("/api/categorie", { cache: "no-store" })
    if (!res.ok) {
        throw new Error("failed")
    }
    return res.json()
}

const getPOSt = async (page:number,cat:string|undefined) => {
    const res = await fetch(`/api/post?page=${page}&cat=${cat || ""}`,{cache:"no-store"})
    if(!res.ok){
         throw new Error("failed")
    }
    return res.json()
}


interface Article {
    _id: string;
  }



export const FetchDataPost = (page:number,cat?:string|undefined) => {
    const [POSTDATA, setPOSTDATA] = useState<Article[]>([]);
    const [Count, setCount] = useState(0);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const { posts, count } = await getPOSt(page,cat);
                setPOSTDATA(posts);
                setCount(count)
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return {
        POSTDATA,
        Count

    }
}

export const FetchDataCategorie = () => {
    const [DATA, setDATA] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getCategorie();
                setDATA(data);

            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return {
        DATA
    }

}