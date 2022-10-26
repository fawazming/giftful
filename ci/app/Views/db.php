
        <div class="container px-md-5 mx-md-5">
            <div class="container">
                <header class="d-flex justify-content-between">
                    <h1>Dashboard</h1>
                    <a href="lpin" class="btn btn-sm btn-primary">Load Pin</a>
                    <a href="logout" class="btn btn-sm btn-danger">Logout</a>
                </header>
                <div class="container">
                    <div class="card mt-3">
                        <div class="card-body p-1 d-flex">
                            <img src="img/p5.jpg" class="img-fluid" alt="">
                            <img src="img/p5.jpg" class="d-none d-md-block img-fluid" alt="">
                            <img src="img/p5.jpg" class="d-none d-md-block img-fluid" alt="">
                        </div>
                    </div>
                    <form class="mt-4 mb-4" action="buyData" method="POST">
                        <input class="d-none" type="text" name="plan" id="pplan" required>
                        <div class="form-group row"><label for="phone" class="col-sm-1-12 col-form-label">Mobile Number</label>
                            <div class="col-sm-1-12"><input type="number" required class="form-control" name="phone" id="phone" placeholder="08023456787"></div>
                        </div>
                        <div class="form-group row"><label for="netw" class="col-sm-1-12 col-form-label">Select Network Provider</label>
                            <ul data-tabs class="d-flex row mt-3">
                                <li class="btn col-3"><a href="#mtn">MTN</a></li>
                                <li class="btn col-3 col-form-li"><a href="#arl">ARL</a></li>
                                 <li class="btn col-3 col-form-li"><a href="#glo">GLO</a></li>
                                  <li class="btn col-3 col-form-li"><a href="#nmb">9MB</a></li>
                            </ul>
                        </div>
                        <div class="form-group row">
                            <div class="" id="dlists">
                               <div class="row m-0" id="mtn">
                                    <center>MTN</center>
                                    <?=$mtn?>
                               </div>
                               <div class="row m-0" id="arl">
                                    <center>Airtel</center>
                                    <?=$arl?>
                               </div>
                               <div class="row m-0" id="glo">
                                    <center>Glo</center>
                                    <?=$glo?>
                               </div>
                               <div class="row m-0" id="nmb">
                                    <center>9Mobile</center>
                                    <?=$nmb?>
                               </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <footer class="fixed-bottom bg-primary text-center">
        <p class="text-light mb-0">Owned by <a href="https://rayyantech.sgm.ng" class="text-light">Rayyantech</a> </p>
    </footer>
    <script src="<?=base_url('assets/tabby.js')?>"></script>
    <script>
    var tabs = new Tabby('[data-tabs]');
       function dataBuy(e) {
        if(confirm(`Are you certain that you want to buy ${e} ?`) == true){
            document.querySelector('#pplan').value = e
        }
            else{
                console.log("okay")
            }
        }
    </script>
</body>

</html>