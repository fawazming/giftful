
        <div class="container ">
            <div class="container-fluid">
                <header class="d-flex justify-content-between">
                    <h1>Dashboard</h1>
                    <a href="lpin" class="btn btn-sm btn-primary">Load Pin</a>
                    <a href="logout" class="btn btn-sm btn-danger">Logout</a>
                </header>
                <div class="container px-md-5 mx-md-5">
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
                        <ul airtime-tab class="d-flex row mt-3">
                                <li class="btn col-3"><a href="#airt">Airtime</a></li>
                                <li class="btn col-3 col-form-li"><a href="#dat">Data</a></li>
                            </ul>
                        <div class="form-group row">
                            <div class="" id="dat">
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
                            </div>
                            <div id="airt">
                                <div class="form-group row"><label for="phone" class="col-sm-1-12 col-form-label">Select Network Provider</label>
                            <div class="ml-2 d-flex">
                                <div class="form-check form-check-inline"><label class="form-check-label"><input class="form-check-input" type="radio" name="network" value="01"> MTN</label></div>
                                <div class="form-check form-check-inline"><label class="form-check-label"><input class="form-check-input" type="radio" name="network" value="04"> ARL</label></div>
                                <div class="form-check form-check-inline"><label class="form-check-label"><input class="form-check-input" type="radio" name="network" value="02"> GLO</label></div>
                                <div class="form-check form-check-inline"><label class="form-check-label"><input class="form-check-input" type="radio" name="network" value="03"> 9Mb</label></div>
                            </div>
                        </div>

                                <label for="phone" class="col-sm-1-12 col-form-label">Amount to Recharge</label>
                                <div class="col-sm-1-12"><input type="number" class="form-control" name="amt" id="amt" placeholder="100-5,000"></div>
                                <div class="col-sm-1-12 pt-2"><button onclick="airtime()" class="form-control btn btn-warning">Buy Airtime</button></div>
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
    var bats = new Tabby('[airtime-tab]');
       function dataBuy(e) {
            let p = `${document.querySelector('#phone').value}`
        if(confirm(`Are you certain that you want to buy data for ${p} ?`) == true){
            document.querySelector('#pplan').value = e
        }
            else{
                console.log("okay")
            }
        }
        function airtime() {
            let n = `${document.querySelector("[name=network]").value}`
            let p = `${document.querySelector('#phone').value}`
            let e = `${n},00,${document.querySelector('#amt').value}`
            if(confirm(`Are you certain that you want to recharge ${p} ?`) == true){
                document.querySelector('#pplan').value = e
            }
                else{
                    console.log("okay")
                }
        }
    </script>
</body>

</html>