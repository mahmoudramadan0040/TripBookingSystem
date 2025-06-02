function RegisterComponent() {
  return (
    <>
      {/* <!-- Login area S t a r t  --> */}
      <div className="login-area section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-5 col-lg-6 col-md-8 col-sm-10">
              <div className="login-card">
                {/* <!-- Logo --> */}
                <div className="logo mb-40">
                  <a href="index.html" className="mb-30 d-block">
                    <img
                      src="assets/images/logo/logo.png"
                      alt="logo"
                      className="changeLogo"
                    />
                  </a>
                </div>
                {/* <!-- Form --> */}
                <form action="#" method="POST">
                  <div className="contact-form mb-24">
                    <label className="contact-label">Name </label>
                    <input
                      className="form-control contact-input"
                      type="text"
                      placeholder="Enter Your Name"
                    />
                  </div>
                  <div className="contact-form mb-24">
                    <label className="contact-label">Email </label>
                    <input
                      className="form-control contact-input"
                      type="email"
                      placeholder="Email"
                    />
                  </div>

                  {/* <!-- Password --> */}
                  <div className="position-relative contact-form mb-24">
                    <label className="contact-label">Enter Password</label>
                    <input
                      type="password"
                      className="form-control contact-input password-input"
                      id="txtPasswordLogin"
                      placeholder="Enter Password"
                    />
                    <i className="toggle-password ri-eye-line"></i>
                  </div>
                  {/* <!-- Password --> */}
                  <div className="position-relative contact-form mb-24">
                    <label className="contact-label">Confirm Password</label>
                    <input
                      type="password"
                      className="form-control contact-input password-input"
                      id="txtPasswordLogin2"
                      placeholder="Confirm Password"
                    />
                    <i className="toggle-password ri-eye-line"></i>
                  </div>

                  <a
                    href="/login"
                    className="btn-primary-fill justify-content-center w-100"
                  >
                    <span className="d-flex justify-content-center gap-6">
                      <span>  Register</span>
                    </span>
                  </a>
                </form>

                <div className="login-footer mb-20">
                  <div className="create-account">
                    <p>
                      Already have an account?
                      <a href="/login">
                        <span className="text-primary">Login</span>
                      </a>
                    </p>
                  </div>
                </div>

                <div className="sign-with">
                  <p className="text-paragraph">Or Sign in with</p>
                  <br></br>
                  <a
                    href="javascript:void(0)"
                    className="login-btn d-flex align-items-center justify-content-center gap-10"
                  >
                    <img
                      src="/assets/images/icon/google-icon.png"
                      alt="img"
                      className="m-0"
                    />
                    <span> login with Google</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!--/ End-of Login --> */}
    </>
  );
}

export default RegisterComponent;
