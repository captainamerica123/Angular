import { Component } from "@angular/core";
@Component({
    selector:"bhushan-body",
    templateUrl:"./body.component.html",
    styleUrls:['./body.component.css']
})
class BodyComponent{
    content():string{
        return "Content Soon...!";
    }
}
export default BodyComponent;