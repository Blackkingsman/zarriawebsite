import {getDocs, getFirestore, collection, onSnapshot, getDoc, doc} from 'firebase/firestore';
class MyFirebase {
    constructor() {
         this.db = getFirestore()
         this.allProducts = []
    }

    async getAll() {

        
        //all other proucts
        let colRef = collection(this.db, "products");
        await getDocs(colRef).then((snapshot) => {
            snapshot.docs.forEach((doc.data()));
            this.allProducts.push({...doc.data(), id: doc.id});
        
        });

        /*get New Collection */
       // this.getNewColletion()

       return this.allProducts
    }

    async getNewColletion(){
        let colRef = collection(this.db, "products");
        
        await getDocs(colRef).then((snapshot) => {
            snapshot.docs.forEach((doc.data()));
            this.allProducts.push({...doc.data(), id: doc.id});
        
        });
        
    }
}
