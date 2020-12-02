import React from 'react'
import ImageGallery from 'react-image-gallery'
import './styles/image-gallery.scss'
import classes from './ImageGrid.css'

const ImageGrid = (props) => (
  <div className={classes.ImageGrid}>
    <div className={classes.ImageGrid_Gallery}>
      <h2> {props.title}</h2>
      <p>{props.description}</p>
    </div>
    <div className="abcd">
      <ImageGallery
        items={props.items}
        showPlayButton={false}
        autoPlay
        slideDuration={900}
        slideInterval={7000}
      />
    </div>
  </div>
)
export default ImageGrid

// {/* <Carousel itemsToShow={2}>

//             {docs.map(docs => <img
//                 src={docs.src}
//                 alt="images"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 1 }}
//                 />)}

//             { docs && docs.map(docs => (
//                 <motion.div className={classes.img_wrap}
//                 key={docs.id}
//                 layout
//                 whileHover={{ opacity: 1 }}
//                 onClick={()=> setSelectedImg(docs.src)}
//                 >
//                 <motion.img
//                 src={docs.src}
//                 alt="images"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 1 }}
//                 />
//                 </motion.div>
//             ))}

//             </Carousel> */}

// <div className={classes.ImageGrid}>
// <div className={classes.ImageGrid_Gallery}>
//   <h2> {Services.title}</h2>
//   <p>{Services.description}</p>
// </div>
// <div className={"abcd"} >
//   {/* {Services.imagess.map(imagess => */}
//     <ImageGallery
//       items={Services[0].imagess}
//       showPlayButton={false}
//       autoPlay={true}
//     />
//   {/* )} */}
//   </div>
// </div>
