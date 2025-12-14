import React from 'react';

function Hero() {
    return (
        <header className="pt-4 pb-5" style={{ backgroundColor: '#f6f6f6' }}>
            <div className="container">
                {/* use row + align/justify utilities */}
                <div className="row align-items-center justify-content-betweenpb-4" style={{ minHeight: '80px' }}>
                    <div className="col">
                        <h1 className="fs-2 fw-bold">Support Portal</h1>
                    </div>

                    {/* col-auto keeps the button only as wide as it needs */}
                    <div className="col-auto">
                        <button type="button" className="btn btn-primary">
                            My ticket
                        </button>
                    </div>
                </div>
                <div className="row mx-1" style={{ height: '60px', backgroundColor: '#fff', padding: 0 }}>
                    <div className="input-group p-0">
                        {/* Search icon inside input */}
                        <span className="input-group-text bg-white border-end-0">
                            <i className="fa-solid fa-magnifying-glass text-muted"></i>
                        </span>

                        <input
                            type="text"
                            className="form-control rounded-1 fs-6 text-muted border-start-0"
                            placeholder="Eg: How do I open my account, How do I activate F&O..."
                            style={{ backgroundColor: '#fff' }}
                        />
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Hero;
