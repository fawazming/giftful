function dataBuy(e) { null == localStorage.getItem("phiLogin") ? (localStorage.setItem("phiLogin", "logout"), location.reload()) : confirm(`Are you certain that you want to buy ${e} ?`) ? proceedBuy(e) : console.log("okay") }

function airtime() { if (null == localStorage.getItem("phiLogin")) localStorage.setItem("phiLogin", "logout"), location.reload();
    else { let e = document.querySelector("#amt").value,
            t = document.querySelector("#phone").value,
            n = globnet;
        console.log(e, t, n), confirm(`Are you certain that you want to buy ${e} ?`) ? fetch(`https://www.nellobytesystems.com/APIAirtimeV1.asp?UserID=CK8102&APIKey=M2XJD61H4ELMJ308UHG7S1GVM34H533668D2ZL9YT663E1MYO6366JNEN75CB608&MobileNetwork=${n}&Amount=${e}&MobileNumber=${t}&CallBackURL=http://rayyan.com.ng`).then(e => e.json()).then(e => { console.log(e), location.reload() }).catch(e => console.error(e)) : console.log("okay") } }

function proceedBuy(e) { document.querySelector("#basicData").addEventListener("submit", t => { t.preventDefault(); let n = document.querySelector("#phone").value,
            a = document.querySelector("[name=netw]").value;
        console.log(e, n, a), fetch(`https://www.nellobytesystems.com/APIDatabundleV1.asp?UserID=CK8102&APIKey=M2XJD61H4ELMJ308UHG7S1GVM34H533668D2ZL9YT663E1MYO6366JNEN75CB608&MobileNetwork=${a}&DataPlan=${e}&MobileNumber=${n}&CallBackURL=http://rayyan.com.ng`).then(e => e.json()).then(e => { console.log(e), location.reload() }).catch(e => console.error(e)) }) }
let body = document.querySelector("body"),
    log = document.querySelector("#login"),
    page = document.querySelector("#page"),
    status = document.createElement("p"),
    HTMLdash = document.querySelector("#dashboard"),
    store = localStorage.getItem("phiLogin"),
    globnet = "";
const users = [{ username: "amina345", password: "Amina543" }, { username: "idris879", password: "Idris978" }, { username: "admin", password: "admin" }],
    data = [{ network: "mtn", value: "1GB", price: "350", validity: "30 days" }, { network: "mtn", value: "2GB", price: "700", validity: "30 days" }, { network: "mtn", value: "5GB", price: "1800", validity: "30 days" }, { network: "airtel", value: "1GB", price: "980", validity: "30 days" }, { network: "glo", value: "1GB", price: "400", validity: "30 days" }, { network: "9mobile", value: "1GB", price: "890", validity: "30 days" }];
let dataPlans = localStorage.getItem("dataPlans");
if ("" == dataPlans || null == localStorage.getItem("dataPlans")) { async function fetchDP() { await fetch("https://www.nellobytesystems.com/APIDatabundlePlansV1.asp").then(e => e.json()).then(e => { console.log(e), localStorage.setItem("dataPlans", JSON.stringify(e)) }).catch(e => console.error(e)) } fetchDP() }
let dashboard = HTMLdash.innerHTML;
window.addEventListener("load", function() { if ("logout" == store) console.log("Logged Out");
    else { page.innerHTML = dashboard; let e = document.querySelector("#logout");
        e.addEventListener("click", function() { localStorage.setItem("phiLogin", "logout"), location.reload(), console.log(store) }), fetch("https://www.nellobytesystems.com/APIWalletBalanceV1.asp?UserID=CK8102&APIKey=M2XJD61H4ELMJ308UHG7S1GVM34H533668D2ZL9YT663E1MYO6366JNEN75CB608").then(e => e.json()).then(e => { console.log(e), document.querySelector("#balance").innerHTML = `${e.balance} pts` }).catch(e => console.error(e)); let t = document.querySelectorAll("[name=network]");
        t[0].addEventListener("click", function() { globnet = t[0].value; let e = JSON.parse(dataPlans).MOBILE_NETWORK.MTN[0],
                n = "";
            e.PRODUCT.forEach(e => { n += `\n                <div class="col-6 p-1">\n                <input type="hidden" name="netw" value="${t[0].value}">\n                    <button style="border: 0 red solid;" class="btn p-0 bg-transparent" onclick="dataBuy(${e.PRODUCT_ID})">\n                        <div class="card">\n                            <div class="card-body p-1 text-center">\n                                <h3 class="mb-0 pb-1">${e.PRODUCT_NAME}</h3>\n                                <p class="card-text">&#x20a6;${Math.ceil(parseInt(e.PRODUCT_AMOUNT)+.428*parseInt(e.PRODUCT_AMOUNT))}--${Math.ceil(parseInt(e.PRODUCT_AMOUNT)+.225*parseInt(e.PRODUCT_AMOUNT))}</p>\n                            </div>\n                        </div>\n                    </button>\n                </div>\n                ` }), document.querySelector("#dlists").innerHTML = n }), t[1].addEventListener("click", function() { globnet = t[1].value; let e = JSON.parse(dataPlans).MOBILE_NETWORK.Airtel[0],
                n = "";
            e.PRODUCT.forEach(e => { n += `\n                <div class="col-6 p-1">\n                <input type="hidden" name="netw" value="${t[1].value}">\n                    <button style="border: 0 red solid;" class="btn p-0 bg-transparent" onclick="dataBuy(${e.PRODUCT_ID})">\n                        <div class="card">\n                            <div class="card-body p-1 text-center">\n                                <h3 class="mb-0 pb-1">${e.PRODUCT_NAME}</h3>\n                                <p class="card-text">&#x20a6;${Math.ceil(parseInt(e.PRODUCT_AMOUNT))}</p>\n                            </div>\n                        </div>\n                    </button>\n                </div>\n                ` }), document.querySelector("#dlists").innerHTML = n }), t[2].addEventListener("click", function() { globnet = t[2].value; let e = JSON.parse(dataPlans).MOBILE_NETWORK.Glo[0],
                n = "";
            e.PRODUCT.forEach(e => { n += `\n                <div class="col-6 p-1">\n                <input type="hidden" name="netw" value="${t[2].value}">\n                    <button style="border: 0 red solid;" class="btn p-0 bg-transparent" onclick="dataBuy(${e.PRODUCT_ID})">\n                        <div class="card">\n                            <div class="card-body p-1 text-center">\n                                <h3 class="mb-0 pb-1">${e.PRODUCT_NAME}</h3>\n                                <p class="card-text">&#x20a6;${Math.ceil(parseInt(e.PRODUCT_AMOUNT))}</p>\n                            </div>\n                        </div>\n                    </button>\n                </div>\n                ` }), document.querySelector("#dlists").innerHTML = n }), t[3].addEventListener("click", function() { globnet = t[3].value; let e = JSON.parse(dataPlans).MOBILE_NETWORK["9mobile"][0],
                n = "";
            e.PRODUCT.forEach(e => { n += `\n                <div class="col-6 p-1">\n                <input type="hidden" name="netw" value="${t[3].value}">\n                    <button style="border: 0 red solid;" class="btn p-0 bg-transparent" onclick="dataBuy(${e.PRODUCT_ID})">\n                        <div class="card">\n                            <div class="card-body p-1 text-center">\n                                <h3 class="mb-0 pb-1">${e.PRODUCT_NAME}</h3>\n                                <p class="card-text">&#x20a6;${Math.ceil(parseInt(e.PRODUCT_AMOUNT)+0*parseInt(e.PRODUCT_AMOUNT))}--${Math.ceil(parseInt(e.PRODUCT_AMOUNT)+0*parseInt(e.PRODUCT_AMOUNT))}</p>\n                            </div>\n                        </div>\n                    </button>\n                </div>\n                ` }), document.querySelector("#dlists").innerHTML = n }) } }), log.addEventListener("submit", function(e) { e.preventDefault(); let t = document.querySelector("#uname"),
        n = document.querySelector("#pass"); "tokyorio" == t.value && "nawawi" == n.value ? (localStorage.setItem("phiLogin", '["LoginTrue"]'), status.className = "text-success", status.innerText = "Login Successful", log.insertAdjacentElement("beforebegin", status), location.reload()) : (status.className = "text-danger", status.innerText = "Login Failed", log.insertAdjacentElement("beforebegin", status)) });



            <script>
    function dataBuy(e) { null == localStorage.getItem("phiLogin") ? (localStorage.setItem("phiLogin", "logout"), location.reload()) : confirm(`Are you certain that you want to buy ${e} ?`) ? proceedBuy(e) : console.log("okay")
    }

    function proceedBuy(e) {
        document.querySelector("#basicData").addEventListener("submit", t => {
            t.preventDefault();
            let n = document.querySelector("#phone").value,
                a = document.querySelector("[name=netw]").value;
            console.log(e, n, a), fetch(`https://www.nellobytesystems.com/APIDatabundleV1.asp?UserID=CK8102&APIKey=M2XJD61H4ELMJ308UHG7S1GVM34H533668D2ZL9YT663E1MYO6366JNEN75CB608&MobileNetwork=${a}&DataPlan=${e}&MobileNumber=${n}&CallBackURL=http://rayyan.com.ng`).then(e => e.json()).then(e => { console.log(e), location.reload() }).catch(e => console.error(e))
        })
    }

    let t = document.querySelectorAll("[name=network]");

    t[0].addEventListener("click", function() {
        globnet = t[0].value;
        let e = JSON.parse(dataPlans).MOBILE_NETWORK.MTN[0],
            n = "";
        e.PRODUCT.forEach(e => { n += `\n                <div class="col-6 p-1">\n                <input type="hidden" name="netw" value="${t[0].value}">\n                    <button style="border: 0 red solid;" class="btn p-0 bg-transparent" onclick="dataBuy(${e.PRODUCT_ID})">\n                        <div class="card">\n                            <div class="card-body p-1 text-center">\n                                <h3 class="mb-0 pb-1">${e.PRODUCT_NAME}</h3>\n                                <p class="card-text">&#x20a6;${Math.ceil(parseInt(e.PRODUCT_AMOUNT)+.428*parseInt(e.PRODUCT_AMOUNT))}--${Math.ceil(parseInt(e.PRODUCT_AMOUNT)+.225*parseInt(e.PRODUCT_AMOUNT))}</p>\n                            </div>\n                        </div>\n                    </button>\n                </div>\n                ` }), document.querySelector("#dlists").innerHTML = n
    })

    t[1].addEventListener("click", function() {
        globnet = t[1].value;
        let e = JSON.parse(dataPlans).MOBILE_NETWORK.Airtel[0],
            n = "";
        e.PRODUCT.forEach(e => { n += `\n                <div class="col-6 p-1">\n                <input type="hidden" name="netw" value="${t[1].value}">\n                    <button style="border: 0 red solid;" class="btn p-0 bg-transparent" onclick="dataBuy(${e.PRODUCT_ID})">\n                        <div class="card">\n                            <div class="card-body p-1 text-center">\n                                <h3 class="mb-0 pb-1">${e.PRODUCT_NAME}</h3>\n                                <p class="card-text">&#x20a6;${Math.ceil(parseInt(e.PRODUCT_AMOUNT))}</p>\n                            </div>\n                        </div>\n                    </button>\n                </div>\n                ` }), document.querySelector("#dlists").innerHTML = n
    })

    t[2].addEventListener("click", function() {
        globnet = t[2].value;
        let e = JSON.parse(dataPlans).MOBILE_NETWORK.Glo[0],
            n = "";
        e.PRODUCT.forEach(e => { n += `\n                <div class="col-6 p-1">\n                <input type="hidden" name="netw" value="${t[2].value}">\n                    <button style="border: 0 red solid;" class="btn p-0 bg-transparent" onclick="dataBuy(${e.PRODUCT_ID})">\n                        <div class="card">\n                            <div class="card-body p-1 text-center">\n                                <h3 class="mb-0 pb-1">${e.PRODUCT_NAME}</h3>\n                                <p class="card-text">&#x20a6;${Math.ceil(parseInt(e.PRODUCT_AMOUNT))}</p>\n                            </div>\n                        </div>\n                    </button>\n                </div>\n                ` }), document.querySelector("#dlists").innerHTML = n
    })

    t[3].addEventListener("click", function() {
        globnet = t[3].value;
        let e = JSON.parse(dataPlans).MOBILE_NETWORK["9mobile"][0],
            n = "";
        e.PRODUCT.forEach(e => { n += `\n                <div class="col-6 p-1">\n                <input type="hidden" name="netw" value="${t[3].value}">\n                    <button style="border: 0 red solid;" class="btn p-0 bg-transparent" onclick="dataBuy(${e.PRODUCT_ID})">\n                        <div class="card">\n                            <div class="card-body p-1 text-center">\n                                <h3 class="mb-0 pb-1">${e.PRODUCT_NAME}</h3>\n                                <p class="card-text">&#x20a6;${Math.ceil(parseInt(e.PRODUCT_AMOUNT)+0*parseInt(e.PRODUCT_AMOUNT))}--${Math.ceil(parseInt(e.PRODUCT_AMOUNT)+0*parseInt(e.PRODUCT_AMOUNT))}</p>\n                            </div>\n                        </div>\n                    </button>\n                </div>\n                ` }), document.querySelector("#dlists").innerHTML = n
    })
    </script>