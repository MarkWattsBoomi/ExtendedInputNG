import { FCMCore } from "fcmlib/lib/FCMCore";
import { eContentType } from "fcmlib/lib/FCMNew";
import React, { CSSProperties } from "react";

export default class _extendedinput extends React.Component<any,any> {
    
    component: FCMCore;
    min: number;
    max: number;
    
    constructor(props: any) {
        super(props);

        this.component = this.props.parent;


        this.getInputType = this.getInputType.bind(this);
        this.onInput = this.onInput.bind(this);
        this.onBlur = this.onBlur.bind(this);

        this.state = {min: null, max: null}
    }

    componentDidMount() {
        this.loadValues();
    }

    componentUpdated() {
        this.loadValues();
    }

    async loadValues(){
        let min = this.component.getAttribute("min");
        let max = this.component.getAttribute("max");
        let step = this.component.getAttribute("step");

        min = await this.component.inflateValue(min);
        max = await this.component.inflateValue(max);
        step = await this.component.inflateValue(step);

        this.setState({min: min, max: max, step: step});
    }

    getInputType(): string {
        switch (this.component.contentType) {
            case eContentType.ContentNumber:
                return 'number';

            case eContentType.ContentPassword:
                return 'password';

            default:
                return 'text';
        }
    };

    onInput(e: any){
        this.component.setStateValue(e.target.value);
        this.forceUpdate();
    }

    onBlur(e: any){
        this.component.setStateValue(e.target.value);
        this.forceUpdate();
    }

    render() {
        
        let inputProps: any = {
            'data-testid': 'page-component-input',
            className: 'input form-control',
            id: this.component.id,
            value: this.component?.getStateValue() as string ?? '',
            placeholder: this.component.hintValue ?? '',
            onInput: this.onInput,
            onBlur: this.onBlur,
            type: this.getInputType(),
            readOnly: !this.component.isEditable,
            disabled: !this.component.isEnabled,
            required: this.component.isRequired,
            autoComplete:
                // Prevent browser from auto-filling the wrong password. Chrome in particular guesses the autofill
                // value and generally gets it wrong because there is no username field associated with this
                // value. Also we do not store passwords in plain-text so this value should never be pre-populated.
                this.component?.contentType === eContentType.ContentPassword ? 'new-password' : '',
        };

        if(this.getInputType() === 'text'){
            inputProps.pattern = this.component.getAttribute("mask");
            inputProps.size = this.component.size;
        }

        if(this.getInputType() === 'number'){
            inputProps.min = this.state.min;
            inputProps.max = this.state.max;
            inputProps.step = this.state.step;
        }

        return (
            <input
                {...inputProps}
            />
        )
    }
}