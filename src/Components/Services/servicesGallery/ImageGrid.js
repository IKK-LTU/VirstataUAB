import React from 'react'
import PropTypes from 'prop-types'
import ImageGallery from 'react-image-gallery'
import './styles/image-gallery.scss'
import classes from './ImageGrid.css'

const ImageGrid = ({title, description, items}) => (
  <div className={classes.ImageGrid}>
    <div className={classes.ImageGrid_Gallery}>
      <h2> {title}</h2>
      <p>{description}</p>
    </div>
    <div className="abcd">
      <ImageGallery
        items={items}
        showPlayButton={false}
        autoPlay
        slideDuration={900}
        slideInterval={7000}
      />
    </div>
  </div>
)
ImageGrid.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  items: PropTypes.string.isRequired,
}
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
