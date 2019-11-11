//import $ from "./../../node_modules/jquery/dist/jquery.min.js";
//import Popper from "popper.js";
import Util from "./../../node_modules/bootstrap/js/dist/util.js";
import Tooltip from "./../../node_modules/bootstrap/js/dist/tooltip.js";
import Popover from "./../../node_modules/bootstrap/js/dist/popover.js";

// проверка работы Popper
var ref = $(".button1");
var popup = $(".invisible-text");
popup.hide();
ref.click(function() {
    popup.show();
    var popper = new Popper(ref, popup, {
        placement: "right",
        modifiers: {
            flip: {
                behavior: ["bottom", "top"]
            }
        }
    });
});
// Проверка работы Tooltip'а
$("[data-toggle='tooltip']").tooltip();
$(".mumu").popover();