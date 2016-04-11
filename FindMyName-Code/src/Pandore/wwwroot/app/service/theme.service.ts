import { Theme } from '../classe/theme';
import { THEMES } from '../data/mock-themes';
import { Injectable } from 'angular2/core';

@Injectable()
export class ThemeService {
 t: Theme[];
    getThemes() {
     this.t =[];
        this.melanger();
        return this.t;
    }

    melanger() {
        var aleatoire: number[] = [];
        var nb = Math.floor(Math.random() * THEMES.length) ;
        this.t.push(THEMES[nb]);
        aleatoire.push(nb);
        for (var i = 0; i < 3; i++) {
            do {
                var nb = Math.floor(Math.random() * 6);
            } while (this.isvalid(nb, aleatoire));
            this.t.push(THEMES[nb]);
            aleatoire.push(nb);
        }
    }
    isvalid(nombre, aleatoire) {
        for (var i = 0; i < aleatoire.length; i++)
            if (aleatoire[i] == nombre)
                return true;
        return false;
    }

    // See the "Take it slow" appendix
    getThemesSlowly() {
        return new Promise<Theme[]>(resolve =>
            setTimeout(() => resolve(THEMES), 2000) // 2 seconds
        );
    }

    getTheme(id: number) {
        for (var i = 0; i < THEMES.length; i++) {
            if (THEMES[i].id == id)
                return THEMES[i];
        }
    }
}

/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
