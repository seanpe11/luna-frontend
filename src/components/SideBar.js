import notdone from '../images/progress-toggle-notdone.png'
import inprogress from '../images/progress-toggle-inprogress.png'
import complete from '../images/progress-toggle-complete.png'
import logo from '../images/moon-full-moon-icon.png'
import line from '../images/line.png'
import React from 'react'

class SideBar extends React.Component {
  progressChecker (progress) {
    switch (progress) {
        case 'notdone':
            return (<img src={notdone} alt='logo' width='50px'/>)
        case 'inprogress':
            return (<img src={inprogress} alt='logo' width='50px'/>)
        case 'done':
            return (<img src={complete} alt='logo' width='50px'/>)
        default:
            return
    }
  }

  render() {
    return(
      <>
          <div className='h-100 col-3 p-5' style={{backgroundColor: '#3B4AD0', color: 'white'}}>
              <div className='w-100 d-flex mb-4'>
                  <img className='me-3' src={logo} alt='logo' width='75px'/>
                  <span style={{fontSize: '40px', fontWeight: 'bolder'}}>LUNA</span>
              </div>
              <div className='w-100'>
                  {
                    this.props.sidedata.map((item,index)=>{
                      return (
                          <>
                              <div className='w-100 mb-1 row'>
                                  <div className='col-3'>
                                      {this.progressChecker(item.progress)}
                                      {
                                          index !== this.props.sidedata.length-1 && <img src={line} alt='logo' width='50px'/>
                                      }  
                                  </div>
                                  <div className='col-9'>
                                      <span style={{fontWeight: 'bolder'}}>{item.title}</span> <br/>
                                      <span>{item.desc}</span>           
                                  </div> 
                              </div>
                          </>
                      )
                    })
                  }
              </div>
          </div>
      </>
    )
  }
}

export default SideBar