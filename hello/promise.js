function getTodo(id){
    let p = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const todo = {id,action:`Todo id ${id}`};
            resolve(todo);
        },1000)

    });

    return p;
}

const p1 = getTodo(1);

p1
    .then(p =>{
        console.log(p);
        return getTodo(p.id+1);
    })
    .then(p =>{
        console.log(p);
        return getTodo(p.id+1);
    })
    .then(p =>{
        console.log(p);
        return getTodo(p.id+1);
    })

async function getTodos(id1,id2,id3){
    const pTodo1 = await getTodo(1);
    const pTodo2 = await getTodo(2);
    const pTodo3 = await getTodo(3);
    return [pTodo1,pTodo2,pTodo3]
}


async function main(){
    arr = await getTodos(1,2,3)
    console.log(arr)
}

main()
const pTodo1 = getTodo(1);
const pTodo2 = getTodo(2);
const pTodo3 = getTodo(3);