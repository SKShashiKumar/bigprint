
import Card from './cards'
const Contents = () => {
    return ( 
        <div>
            <div>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-6">
                            <img src="img/Asset 1.png" alt="Printing Art" width="90%" height="100%" />
                        </div>
                        <div className="col-md-6" style={{color:'#ededed', marginTop : '20%'}}>
                            <h4>Good Printing Solution</h4>
                            <h1>Meritorious Printing</h1>
                            <hr className="divider bg-danger" style={{ height: '5px'}} />
                            <h5 style={{textAlign: 'justify'}}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
                                commodi hic rerum id, molestiae ut quas. Minima porro soluta ea
                                optio necessitatibus beatae quos fugit quia cum! Aliquam, sit vel.
                            </h5>
                            <button className="btn btn-danger rounded">Read More</button>
                        </div>
                    </div>
                </div>
                

            <div className="container" id="sst">
                <div className="row">
                    <div className="col-sm-12 mt-4">
                        <h5>Company features</h5>
                        <h1>Standard Printing</h1>
                    </div>
                </div>

                

                <div className="row mt-4">
                    <Card name="col-sm-4" sr="img/Brochure.jpg" altr="Brochure" title="Brochure"/>
                    <Card name="col-sm-4" sr="img/flexBanner.png" altr="Brochure" title="Flex Printing"/>
                    <Card name="col-sm-4" sr="img/Books.jpg" altr="Brochure" title="Books and Other printing"/>
                </div>
                <hr className="divider bg-secondary" style={{height:'5px'}} />
                <div className="row">
                    <div className="col-sm-12 mt-4">
                        <h5>Works</h5>
                        <h1>Our Collections</h1>
                    </div>
                </div>
                <div className="row mt-4">
                    <Card name="col-sm-3" sr="img/vc.jpg" altr="collections" title="Visiting Cards"/>
                    <Card name="col-sm-3" sr="img/A4B.png" altr="collections" title="A4 Brochures"/>
                    <Card name="col-sm-3" sr="img/WA.jpg" altr="collections" title="Wedding Albums"/>
                    <Card name="col-sm-3" sr="img/mugs.jpg" altr="collections" title="Mugs"/>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Contents;