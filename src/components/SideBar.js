import logo from '../images/moon-full-moon-icon.png'

function SideBar() {
    let items=[{
        title: 'yeboi',
        next: false
    }];

    let itemList=items.map((item,index)=>{
        return (
            <>
                <div className='w-100 mb-4 row'>
                    <div className='col-3'>
                        <img src={logo} alt='logo' width='50px'/>
                    </div>
                    <div className='col-9'>
                        <span style={{fontWeight: 'bolder'}}>{item.title}</span> <br/>
                        <span style={{fontWeight: 'bolder'}}>This is a long description for the process that is currently being done.</span>
                        {
                            item.next ?
                                <span>True</span> :
                                <span>False</span>
                        }             
                    </div> 
                </div>
            </>
        )
    })

    return(
        <>
            <div className='h-100 col-4 p-5' style={{backgroundColor: '#3B4AD0', color: 'white'}}>
                <div className='w-100 d-flex mb-4'>
                    <img className='me-3' src={logo} alt='logo' width='75px'/>
                    <span style={{fontSize: '40px', fontWeight: 'bolder'}}>LUNA</span>
                </div>
                <div className='w-100'>
                    {itemList}
                </div>
            </div>
        </>
    )
}

export default SideBar