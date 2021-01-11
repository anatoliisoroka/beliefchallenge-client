const modal = (props) => {
    // console.log(props)
    return (
        <div className="modal-wrapper position-fixed w-100 h-100">

            <div role="dialog" className={`${props.showModal ? 'show' : ''} modal fade`}>
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Delete confirmation</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={props.triggerModalClose}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p>This would delete the post permanently. <br />
                                <strong>Are you sure to delete?</strong>
                            </p>
                        </div>
                        <div className="modal-footer">

                            <button type="button" className="btn btn-primary mr-10 px-20" onClick={props.triggerModalSuccess}>Delete</button>
                            <button type="button" className="btn btn-dark px-20" onClick={props.triggerModalClose}>Close</button>
                        </div>
                    </div>
                </div>
                <div className="modal-backdrop fade show" onClick={props.triggerModalClose}></div>
            </div>
        </div>
    )
}

export default modal