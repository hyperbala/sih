import React from 'react'

const Addcall = () => {
  return (
    <div class="mb-3">
        <form action="/upload" enctype="multipart/form-data" method="post">
            <label for="formFile" className="form-label">Default file input example</label>
            <input className="form-control" type="file" id="formFile" name='audio'/>
            <div class="col-auto">
                <button type="submit" className="btn btn-primary mb-3">Confirm identity</button>
            </div>

        </form>
    </div>
  )
}

export default Addcall