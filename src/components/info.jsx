import '../App.css';

function Info(){
    return(
        <>
        <div className="info">
            <div className="left">
                <h2>Wake Up To A Better Tomorrow</h2>
                <p>SolaRise is the first app on the market which will take into account the weather when you set an alarm. Each morning a personalized messaged will display ways you can help reduce carbon emissions.</p>
                <button>
                <i class="fa-brands fa-apple appicon"></i>
                    Buy In App Store</button>
            </div>
            <div className="right">
                <div className="img"></div>
            </div>
        </div>
        </>
    )
}
export default Info;