import React from 'react';

const Tags = ({text, att}) => {
    return (
        <span 
            className={att} 
            style={
                {
                    paddingRight: "8px", 
                    paddingLeft: "8px", 
                    paddingTop: "4px", 
                    paddingBottom: "4px",
                    marginRight: "6px",
                    marginBottom: "6px",
                    borderRadius: "4px",
                    fontWeight: "bold",
                    display: "inline-block",
                }}>{text}</span>
    )
}

export default Tags;