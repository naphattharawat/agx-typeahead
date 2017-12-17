export default {
    entry: './dist/modules/agx-typeahead.es5.js',
    dest: './dist/bundles/agx-typeahead.umd.js',
    format: 'umd',
    exports: 'named',
    moduleName: 'ng.agxTypeahead',
    external: [
        '@angular/core',
        '@angular/common',
        'rxjs/Observable',
        'rxjs/Observer'
    ],
    globals: {
        '@angular/core': 'ng.core',
        '@angular/common': 'ng.common',
        'rxjs/Observable': 'Rx',
        'rxjs/Observer': 'Rx'
    },
    onwarn: () => { return }
}