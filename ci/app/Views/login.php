

    <div id="page" class="container mt-5">
        <div class="d-flex mb-4">
            <img src="img/logo.png" class="img-fluid" width="70px" alt="Giftful">
            <h2 class="display-3 text-center">Login</h2>
        </div>
        <div class="container px-md-5 mx-md-5">
            <form id="login" action="login" method="POST" class="px-md-5 mx-md-5">
                <div class="form-group row mb-2">
                    <label for="">Key:</label>
                    <input type="text" value="<?=$key?>" class="form-control" name="key" id="uname" placeholder="Key" required>
                </div>
                <div class="form-group row"><button type="submit" class="btn btn-primary">Sign In</button></div>
            </form>
            <p class="text-center">Don't have an account? <a href="<?=base_url('register')?>">Register Here</a></p>
        </div>
    </div>