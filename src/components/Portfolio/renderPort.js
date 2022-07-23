import React from "react"

const renderPortfolio = (portfolio) => {
    return (
        <div className='images-container'>
            {
                portfolio.map((port) => {
                    return (
                        <div className='image-box' key={port.id}>
                            <img src={port.cover} className="portfolio-image" alt={`portfolio ${port.id}`} />
                            <div className='content'>
                                <p className='title'>{port.title}</p>
                                <h4 className='description'>{port.description}</h4>
                                <button className='btn' onClick={() => window.open(port.url)}>View</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default renderPortfolio;