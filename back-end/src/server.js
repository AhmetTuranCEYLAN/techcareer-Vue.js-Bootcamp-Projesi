import express from 'express';
import {MongoClient} from 'mongodb'
import path from 'path'



async function start(){
    const client= new MongoClient(`mongodb+srv://ahmetturanceylan996:0NtcvbZaXN7u56dP@ahmetturanceylan.izsbtmw.mongodb.net/?retryWrites=true&w=majority&appName=AhmetTuranCEYLAN`);

    const app=express();
    app.use(express.json())
    await client.connect();
    
        const db=client.db('ahmet-db');
  
    app.use('/images',express.static(path.join(__dirname,'../assets')))
    
    async function populateCartIds(ids){
        
        return Promise.all(ids.map(id=>db.collection('products').findOne({id})))
    
    }
    
    
    app.get('/api/products',async(req,res)=>{
       
        const products=await db.collection('products').find({}).toArray();
        
    res.send(products);

    })
    
    app.get('/api/users/:userId/cart',async (req,res)=>{
        
        const user=await db.collection('users').findOne({id:req.params.userId});
        const populatedCart=await populateCartIds(user.cardItems)
    res.json(populatedCart);
    })
    


    app.post('/api/users/:userId/cart',async(req,res)=>{
    
        const userId=req.params.userId;
        const productId=req.body.id;
        await db.collection('users').updateOne({id:userId},{
 $addToSet:{cardItems:productId}

        })
        const user=await db.collection('users').findOne({id:req.params.userId});
        const populatedCart=await populateCartIds(user.cardItems)
    res.json(populatedCart);
    
    })
    
    app.delete('/api/users/:userId/cart/:productId',async(req,res)=>{
    
        const userId=req.params.userId;
    
        const productId=req.params.productId;

        await db.collection('users').updateOne({id:userId},{
            $pull:{
                cardItems:productId
            },
        })
        const user=await db.collection('users').findOne({id:req.params.userId});
        const populatedCart=await populateCartIds(user.cardItems)
    res.json(populatedCart);
    })
    
    app.get('/api/products/:productId',async(req,res)=>{
    
    const productId= req.params.productId;
    const product= await db.collection('products').findOne({id:productId})
    res.json(product);
    
    })
    
    
    
    
    
    app.listen(8000,()=>{
        console.log("Uygulama 8000 portunda çalıştı");
    })
}

start();

