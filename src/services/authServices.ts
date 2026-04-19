import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../config/Firebase";
import { collection, doc, serverTimestamp, setDoc } from "firebase/firestore";

type RegisterData = {
    name: string
    email: string
    password: string
    churchName: string
}

export const register = async ({ name, email, password, churchName }: RegisterData) => {


    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password)

        const user = userCredential.user

        //criando igreja com id automatico
        const churchRef = doc(collection(db, "churches"))
        const churchId = churchRef.id


        await setDoc(churchRef, {
            name: churchName,
            ownerId: user.uid,
            createdAt:serverTimestamp()
        })

        //criar usuario

        await setDoc(doc(db,"users",user.uid),{
            name,
            email,
            churchId,
            role:"ADMIN",
            createdAt:serverTimestamp()
        })
        return user
    }catch(error){
        console.error("erro no cadastro:", error)
        throw error
    }
}