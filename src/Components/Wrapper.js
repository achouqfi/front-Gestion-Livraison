import React from 'react'
import SearchBar from './Form'

function Wrapper({Title, Breadcrumb}) {
    return (
        <div>
            <div className="page-breadcrumb">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item">
                            <a href="/">Home</a>
                        </li>
                        <li class="breadcrumb-item active" aria-current="page">{Breadcrumb}</li>
                    </ol>
                </nav>
            </div>

            <div className="page-header d-flex justify-content-between align-items-center">
                <h1 className="page-heading">{Title}</h1>
            </div>
            <SearchBar
                Title="Quesque tu cherche ?"
                btn = "chercher"
            />
            
            
        </div>
    )
}

export default Wrapper
