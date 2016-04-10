import {Pipe} from 'angular2/core';

// Tell Angular2 we're creating a Pipe with TypeScript decorators
@Pipe({
    name: 'RecherchePipe'
})
export class RecherchePipe {

    // Transform is the new "return function(value, args)" in Angular 1.x
    transform(value, args?) {
        // ES6 array destructuring
        let [nom] = args;
        return value.filter(ami => {
            return ami.name.match(nom) ;
        });
    }

}
