import React from 'react'

function Alert(probs) {
     const capitalise = (word) => {
          const lower = word.toLowerCase();
          return lower.charAt(0).toUpperCase() + lower.slice(1);
     }
     return (
          probs.alert && <div>
               <div className={`alert alert-${probs.alert.type} alert-dismissible fade show role=alert`}>
                    <strong> {capitalise(probs.alert.type)}</strong>:{probs.alert.msg}
                    {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
               </div>
          </div>
     )
}


export default Alert
