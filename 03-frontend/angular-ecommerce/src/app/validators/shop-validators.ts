import { FormControl, ValidationErrors } from "@angular/forms";

export class ShopValidators {

    //whitepsace validation
    static notOnlyWhitespace(control: FormControl): ValidationErrors|null{

        // check if string only contains whitespace
        if((control.value != null) && (control.value.trim().length === 0)){

            // invalid, return errot object
            return {'notOnlyWhitespace': true};
        } else{
            // valid, return null
            return null;
        }    
    }
}
