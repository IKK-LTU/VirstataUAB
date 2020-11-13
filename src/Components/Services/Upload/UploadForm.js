import React, { useState } from 'react';
import classes from './UploadForm.css';
import ProgressBar from './ProgressBar/ProgressBar';
const UploadForm = () => {

    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);
    const types = ['image/png', 'image/jpeg','image/jpg']

    const changeHandler = (e) => {
        let selected = e.target.files[0];

        if (selected && types.includes(selected.type)) {
            setFile(selected);
            setError('');
        } else {
            setFile(null);
            setError('Pleae select an image file (png or jpeg/jpg')
        }
}

return (
    <form className={classes.Form}>
        <label>
            <input type="file" onChange={changeHandler} />
            <span>+</span>
        </label>
        
        <div className={classes.output}>
            { error && <div className={classes.error}> {error} </div> }
            { file && <div> {file.name} </div> }
            { file && <ProgressBar file={file} setFile={setFile} /> }
        </div>
    </form>
)

};
export default UploadForm;