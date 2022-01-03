

const Em = ()=>{

    const h = (a:string)=>{
        return a.split("").reverse()
    }
    return <div>
        {h('hello world')}
        CLI
    </div>
}