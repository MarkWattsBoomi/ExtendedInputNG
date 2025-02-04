import { FCMLegacy } from "fcmlib/lib/FCMLegacy";
import * as React from 'react';
import _extendedinput from "./ExtendedInput";
declare const manywho: any;

class extendedinput extends FCMLegacy {

    constructor(props: any){
        super(props);
    }

    componentUpdated(changeDetected: boolean){
        if(this.childComponent && this.childComponent.componentUpdated){
            this.childComponent.componentUpdated(changeDetected);
        }
    }

    render() {
        let classname: string = "has-outcomes form-group ";
        let classes: string[] = manywho.styling.getClasses(this.pageContainerId, this.id, "input", this.flowKey);
        
        classname += classes.join(" ");
        return(
            <div className={classname}>
                    <label htmlFor={this.id}>{this.label}</label>
                    <_extendedinput 
                        key={this.id}
                        parent={this}
                        ref={(element: any) => {this.childComponent = element}} // here we are giving FCMCore a ref to our component
                    />
                    <span className="help-block">{this.validationMessage}</span>
                    <span className="help-block">{this.helpInfo}</span>
            </div>
        );
    }
}
manywho.component.register('extendedinput', extendedinput);