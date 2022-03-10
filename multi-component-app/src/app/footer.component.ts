import { Component } from "@angular/core";

@Component({
    selector:"bhushan-footer",
    templateUrl:"./footer.component.html",
    styleUrls:['./footer.component.css']
})
class FooterComponent{
    _footer():string{
        return "copyright@bhushan.in"
    }
}
export default FooterComponent;