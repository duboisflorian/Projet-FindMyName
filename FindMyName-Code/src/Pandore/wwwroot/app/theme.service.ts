import { Theme } from './theme';
import { THEMES } from './mock-themes';
import { Injectable } from 'angular2/core';

@Injectable()
export class ThemeService {
    getThemes() {
        return Promise.resolve(THEMES);
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