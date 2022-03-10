import {Component} from "@angular/core"
@Component({
    selector:"bhushan-header",
    templateUrl:"./header.component.html",
    styleUrls:['./header.component.css']
})
class HeaderComponent{
    bhushanHeader():string{
        return "BHUSHAN-IT Institute,Pune";
    }
}
export default HeaderComponent;