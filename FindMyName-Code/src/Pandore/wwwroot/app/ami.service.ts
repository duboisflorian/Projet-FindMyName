import { Ami } from './ami';
import { AMIS } from './mock-amis';
import { Injectable } from 'angular2/core';

@Injectable()
export class AmiService {
    getAmis() {
        return Promise.resolve(AMIS);
    }

    // See the "Take it slow" appendix
    getAmisSlowly() {
        return new Promise<Ami[]>(resolve =>
            setTimeout(() => resolve(AMIS), 2000) // 2 seconds
        );
    }

    getAmi(id: number) {
        return Promise.resolve(AMIS).then(
            amis => amis.filter(ami => ami.id === id)[0]
        );
    }
}

/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/