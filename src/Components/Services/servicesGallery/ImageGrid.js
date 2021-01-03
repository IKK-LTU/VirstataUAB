import React from 'react'
import PropTypes from 'prop-types'
import ImageGallery from 'react-image-gallery'
import './styles/image-gallery.scss'
import classes from './ImageGrid.css'

const ImageGrid = ({ titlee, description, items }) => (
  <div className={classes.ImageGrid}>
    <div className={classes.ImageGrid_Gallery}>
      <h2>{titlee}</h2>
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
  titlee: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  items: PropTypes.string.isRequired,
}
export default ImageGrid
