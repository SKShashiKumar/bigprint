const Footer = () => {
    const tAJ = {textAlign: 'justify'}

    return ( 
        <div class="jumbotron text-center bg-dark text-white" style={{marginBottom: '0'}}>
        <div class="container">
            <div class="row">
                <div class="col-sm-3">
                    <img src="img/BP.png" alt="Logo" width="250px" height="100px" />
                </div>
                <div class="col-sm-3" style={{textAlign: 'left'}}>
                    <h1>Our Services</h1>
                    <h6>2021 Calenders</h6>
                    <h6>Labels and Stickers</h6>
                    <h6>Mugs and Albums</h6>
                    <h6>Stamps and inks</h6>
                    <h6>Banners</h6>
                    <h6>Posters</h6>
                    <h6>Labels and Stickers</h6>
                </div>
                <div class="col-sm-3">
                    <h1>Connect</h1>
                    <div>
                        <img src="img/fb.png" alt="fb" height="50px" width="50px" />
                        <img src="img/insta.png" alt="fb" height="50px" width="50px" />
                        <img src="img/tw.png" alt="fb" height="50px" width="50px" />
                    </div>
                </div>
                <div class="col-sm-3">
                    <h1>Contact info</h1>
                    <div style={tAJ}>
                        <img src="img/loc.png" alt="fb" height="20px" width="20px" />Lorem ipsum dolor, sit amet
                        consectetur adipisicing elit.
                    </div>
                    <br />
                    <div style={tAJ}>
                        <img src="img/mail.png" alt="fb" height="20px" width="20px" />
                        bigprint@gmail.com
                    </div>
                    <br />
                    <div style={tAJ}>
                        <img src="img/call.png" alt="fb" height="20px" width="20px" />
                        7050828285
                    </div>
                </div>
            </div>
        </div>
        <hr class="divider bg-secondary" />
        <p>Copyrights @2021 All rights reserved.</p>
    </div>
    );
}
export default Footer;