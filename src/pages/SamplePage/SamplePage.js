import React, {useContext} from 'react'
// import {FBContext} from '../../context/fbContext'
import {FirebaseConsumer} from '../../context/fbContext'
import SamplePage2 from './SamplePage2'
export default props => {
    // const {message} = useContext(FBContext); 
    console.log('props: ', props); 
  return (
    <div>
      <FirebaseConsumer> 
        <h1> Sample Page2: Test. </h1> 
        {/* <SamplePage2 />  */}
      </FirebaseConsumer>
    </div>
  )
}
