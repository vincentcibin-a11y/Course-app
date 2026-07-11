import React from 'react'

const InsertCourse = () => {
  return (
    <div>InsertCourse
        <div className="container">
            <div className="class">
                <div className="row rol-12 row-sm-12 row-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6"><label htmlFor="" className="form-label">Course_Name</label><input type="text" name="" id="" className="form-control" /></div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6"><label htmlFor="" className="form-label">Duration</label><input type="number" name="" id="" className="form-control" /></div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6"><label htmlFor="" className="form-label">Fee</label><input type="number" name="" id="" className="form-control" /></div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6"><label htmlFor="" className="form-label">Mode</label><input type="text" name="" id="" className="form-control" /></div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6"><label htmlFor="" className="form-label">Trainer</label><input type="text" name="" id="" className="form-control"/></div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6"><button className="btn btn-primary">Insert Course</button></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default InsertCourse