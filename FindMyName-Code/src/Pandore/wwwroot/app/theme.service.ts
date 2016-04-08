import { Theme } from './theme';
import { THEMES } from './mock-themes';
import { Injectable } from 'angular2/core';

@Injectable()
export class ThemeService {
    t: Theme[]=[];
    getThemes() {
        this.melanger();
        return this.t;
    }

    melanger() {
        var aleatoire: number[] = [];
        var nb = Math.floor(Math.random() * 6) ;
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
        return Promise.resolve(THEMES).then(
            themes => themes.filter(theme => theme.id === id)[0]
        );
    }
}

/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/