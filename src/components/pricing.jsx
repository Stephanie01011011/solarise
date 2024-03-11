import '../App.css';

function Pricing(){
    return(
        <>
        <div className="pricingcontainer">
        <div className="pricing">
            
            <div className="container">
            <h2>Pricing</h2>
        <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
      <div class="col">
        <div class="card mb-4 rounded-3 shadow-sm">
          <div class="card-header py-3">
            <h4 class="my-0 fw-normal">Free Trial</h4>
          </div>
          <div class="card-body">
            <h1 class="card-title pricing-card-title">$0<small class="text-body-secondary fw-light">/mo</small></h1>
            <ul class="list-unstyled mt-3 mb-4">
              <li>Free For 7 Days</li>
              <li>Set 3 Alarms</li>
              <li>Email support</li>
              <li>Cancel Anytime</li>
            </ul>
            <button type="button" class="w-100 btn btn-lg btn-outline-dark">Sign up for free</button>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card mb-4 rounded-3 shadow-sm">
          <div class="card-header py-3">
            <h4 class="my-0 fw-normal">Monthly</h4>
          </div>
          <div className="card-body">
            <h1 class="card-title pricing-card-title">$10<small class="text-body-secondary fw-light">/mo</small></h1>
            <ul class="list-unstyled mt-3 mb-4">
              <li>Set Unlimited Alarms</li>
              <li>Access SolaRise Chat</li>
              <li>Priority email support</li>
              <li>No Cancellation Fees</li>
            </ul>
            <button type="button" class="w-100 btn btn-lg btn-dark">Get started</button>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card mb-4 rounded-3 shadow-sm border-dark">
          <div class="card-header py-3 text-bg-dark border-dark">
            <h4 class="my-0 fw-normal">Annual</h4>
          </div>
          <div class="card-body">
            <h1 class="card-title pricing-card-title">$30<small class="text-body-secondary fw-light">/yr</small></h1>
            <ul class="list-unstyled mt-3 mb-4">
              <li>Unlimited Alarms</li>
              <li>Discounted Price</li>
              <li>Phone and email support</li>
              <li>Help center access</li>
            </ul>
            <button type="button" class="w-100 btn btn-lg btn-dark">Get Started</button>
          </div>
        </div>
      </div>
    </div>
    </div>
        </div>
        </div>
        </>
    )
}
export default Pricing;