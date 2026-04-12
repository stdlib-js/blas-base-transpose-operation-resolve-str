/** @license Apache-2.0 */

'use strict';

/**
* Return the transpose operation string associated with a supported BLAS transpose operation value.
*
* @module @stdlib/blas-base-transpose-operation-resolve-str
*
* @example
* var str2enum = require( '@stdlib/blas-base-transpose-operation-str2enum' );
* var resolve = require( '@stdlib/blas-base-transpose-operation-resolve-str' );
*
* var v = resolve( str2enum( 'transpose' ) );
* // returns 'transpose'
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
