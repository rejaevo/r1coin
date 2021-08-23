
import * as bridge from '/vk-bridge';
var clicks = 0; // change int to var here
function exportw() {

    bridge.send("VKWebAppInit", {});
        bridge.send("VKWebAppShowNativeAds", {ad_format:"reward"})
.then(data => console.log(data.result))
.catch(error => console.log(error));
clicks += 40;
        document.getElementById("clicks").innerHTML = clicks;

}