import {collection, addDoc, serverTimestamp, getFirestore, query, getDocs, orderBy, doc, deleteDoc, limit, getDoc, updateDoc} from "firebase/firestore";

const db = getFirestore();

// データベースに要素を送信
//add data into database
export const addNews = async(title, content, date) => {
    await addDoc(collection(db, 'coral-news'), {
        title: title,
        content: content,
        date: date,
        createdAt: serverTimestamp(),
    })
};

//カレンダー用
export const addPlans = async(title, start) => {
    await addDoc(collection(db, 'coral-calendar'), {
        title: title,
        start: start,
        createdAt: serverTimestamp(),
    })
}

// データベースからデータを取得して配列に格納
export const getNews = async() => {

    const q = query(collection(db, 'coral-news'), orderBy("createdAt", "desc"));

    const querySnapshot = await getDocs(q);

    let list = [];
    querySnapshot.forEach((doc) => {
        console.log(
            doc.data().title,
            doc.data().content,
            doc.data().createdAt,
            doc.data().date,
        );
        list.push({
            id: doc.id,
            title: doc.data().title,
            content: doc.data().content,
            createdAt: doc.data().createdAt,
            date: doc.data().date,
        });
    });
    return list;
}

// idでドキュメントを指定して取得する
export const getOneNews = async(id) => {
    const docRef = doc(db, 'coral-news', id);
    const docSnap = await getDoc(docRef);

    console.log('テストdayo' + docSnap.data());
    console.log('テストタイトル' + docSnap.data().title);

    console.log({...docSnap.data()});

    const getOnetest = docSnap.data();

    return getOnetest;
}

// カレンダー用
export const getPlans = async() => {
    const m = query(collection(db, 'coral-calendar'), orderBy("createdAt", "desc"));

    const querySnapshot = await getDocs(m);

    let planlist = [];
    querySnapshot.forEach((doc) => {
        console.log(
            doc.data().title,
            doc.data().start,
            doc.data().createdAt,
        );
        planlist.push({
            id: doc.id,
            title: doc.data().title,
            start: doc.data().start,
        });
    });
    return planlist;
}

// idでドキュメントを指定し削除
export const deleteNews = async(id) => {
    await deleteDoc(doc(db, "coral-news", id));
}

export const updateNews = async(id, title, content, date) => {
    await updateDoc(doc(db, "coral-news", id), {
            title: title,
            content: content,
            date: date,
        })
    
}

// カレンダー用
export const deletePlans = async(id) => {
    await deleteDoc(doc(db, 'coral-calendar', id));
}

