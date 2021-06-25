import React from 'react'
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft} from '@fortawesome/free-solid-svg-icons'

const BackButton = (props) => {
    let history = useHistory();
    const {...rest} = props
    
    return (
        <div onClick={() => history.goBack()} {...rest}>
            <FontAwesomeIcon icon={faArrowLeft} />
            <button>Back</button>
        </div>
    );
};

export default BackButton
