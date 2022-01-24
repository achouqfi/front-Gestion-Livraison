import React from 'react'
import '../Css/Style.css'

export default function Form({Title, btn}) {
  return( 
        <div className="card-table mb-4 card search-area">
            <h3 className="mt-3" >{Title} </h3>
            <div className="row g-1 m-3">
                <div className="col-md-4">
                        <input placeholder="id de commande" className="form-control" /> 
                </div>
                <div className="col-md-3"> 
                    <select class="form-control" aria-label="Default select example">
                        <option selected>Status</option>
                        <option value="1">En cours</option>
                        <option value="2">Traité</option>
                        <option value="3">Arrivé</option>
                    </select>
                </div>
                <div className="col-md-3">
                    <input type="date" className="form-control" placeholder='date' /> 
                </div>
                <div className="col-md-1"><button class="custom-btn  btn-3"><span>{btn}</span></button></div>
            </div>
        </div>
    )
}
