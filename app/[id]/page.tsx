const Dynamicbook = async(props: any)=>{

console.log(props)  
const url=await fetch(`http://simple-books-api.glitch.me/books/& {props.params.id}`)
    const response =await url.json()
    console.log("single book",response)
   
return(
    <h1 className="text-7xl"> Dynamic route <br />
    {Response.name} </h1>

)
}
export default Dynamicbook
