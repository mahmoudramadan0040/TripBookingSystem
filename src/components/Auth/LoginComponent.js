function LoginComponent() {
  return <>
  
  <div className="login-area section-padding">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-5 col-lg-6 col-md-8 col-sm-10">
                        <div className="login-card">
                            {/* <!-- Logo --> */}
                            <div className="logo mb-40">
                                <a href="index.html" className="mb-30 d-block">
                                    <img src="/assets/images/logo/logo.png" alt="logo" className="changeLogo"/>
                                </a>
                            </div>
                            {/* <!-- Form --> */}
                            <form action="#" method="POST">
                                <div className="position-relative contact-form mb-24">
                                    <label className="contact-label">Email </label>
                                    <input className="form-control contact-input" type="text"
                                        placeholder="Enter Your Email"/>
                                </div>

                                <div className="contact-form mb-24">
                                    <div className="position-relative ">
                                        <div className="d-flex justify-content-between aligin-items-center">
                                            <label className="contact-label">Password</label>
                                            <a href="forgot-pass.html"><span className="text-primary text-15"> Forgot
                                                    password? </span></a>
                                        </div>
                                        <input type="password" className="form-control contact-input password-input"
                                            id="txtPasswordLogin" placeholder="Enter Password"/>
                                        <i className="toggle-password ri-eye-line"></i>
                                    </div>
                                </div>

                                <a href="dashboard.html" className="btn-primary-fill justify-content-center w-100">
                                    <span className="d-flex justify-content-center gap-6">
                                        <span>Login</span>
                                    </span>
                                </a>
                            </form>

                            <div className="login-footer">
                                <div className="create-account">
                                    <p>
                                        Don’t have an account?
                                        <a href="/register">
                                            <span className="text-primary">Register</span>
                                        </a>
                                    </p>
                                </div>
                                <a href="javascript:void(0)"
                                    className="login-btn d-flex align-items-center justify-content-center gap-10">
                                    <img src="/assets/images/icon/google-icon.png" alt="img" className="m-0"/>
                                    <span> login with Google</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  </>;
}

export default LoginComponent;
