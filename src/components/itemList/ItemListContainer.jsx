import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'
import ItemList from './ItemList'
import Loader from '../Loader/MainLoader'
import {db} from '../../firebase/Firebase'
function ItemListContainer({greeting}) {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const { idCategory } = useParams()

    useEffect(() => {
        
        if (idCategory) {
            const queryCollectionCategory = query(collection(db, 'products'), where('category', '==', idCategory) )
            getDocs(queryCollectionCategory) 
            .then(resp => setProducts( resp.docs.map(prod => ({ id: prod.id, ...prod.data()}))))
            .finally(() => setLoading(false))
        } else {
            const queryCollection = collection(db, 'products')
            getDocs(queryCollection)
            .then(resp => setProducts( resp.docs.map(prod => ({ id: prod.id, ...prod.data()}))))
            .finally(() => setLoading(false))
        }  
    }, [idCategory])



    return (
        <div>
        <h2 className="text-center"> {greeting} </h2>
        <div className="container">
            <div className="row">
                { loading 
                ? 
                    <Loader />
                :
                !products.length ? <p className="">Cargando...</p> : <ItemList data={products} />
                }
            </div>
        </div>
    </div>          
       
    )
}

export default ItemListContainer