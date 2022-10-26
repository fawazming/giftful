<div id="page" class="container mt-5">
        <div class="d-flex justify-content-between mb-4">
            <img src="img/logo.png" class="img-fluid" width="70px" alt="Giftful">
            <h2 class="display-3 text-center">Sign Up</h2>
        </div>
        <div class="container px-md-5 mx-md-5">
            <form method="POST" action="register" class="px-md-5 mx-md-5">
                <div class="form-group row mb-2">
                    <label for="">Email:</label>
                    <input type="email" class="form-control" name="email" id="email" placeholder="ade@gmail.com" required>
                </div>
                <div class="form-group row"><button type="submit" class="btn btn-primary">Sign Up</button></div>
            </form>
            <p class="text-center">Already have an account? <a href="<?=base_url('/')?>">Sign In Here</a></p>
        </div>
    </div>