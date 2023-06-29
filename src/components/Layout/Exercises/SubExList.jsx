const SubExList = () => {
    return (
        <div>
            this is SubExList
            {
                (()=>{
                    let res=[]
                    for(let i=0;i<3;i++){
                        res.push(<div>Ex Card</div>)
                    }
                    return res
                })()
            }
        </div> 
    )
}
export default SubExList