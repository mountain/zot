/**
 *    Zot
 *    https://web.archive.org/web/20200414141014/http://www.nyu.edu/projects/barker/Iota/zot.html
 *    originally by Chris Barker
 *    modified by Mingli Yuan
 *
**/

let output;

function I(x) { return x; }

function K(x) {
    function K1(y) {
        return(x);
    }
    return K1;
}

function S(x) {
    function S1(y) {
        function S2(z) {
            return ((x (z))(y (z)));
        }
        return S2;
    }
    return S1;
}

function zero(c) {
    function basis(f) {
        return ((f(S))(K));
    }
    return (c(basis));
}

function one(c) {
    function bigleft (L) {
        function left (l) {
            function bigright (R) {
                function right (r) {
                    return (c(l(r)));
                }
                return (R(right));
            }
            return bigright;
        }
        return (L(left));
    }
    return bigleft;
}

function trivial(x) {
    return x(I);
}

function zot(string) {
    function process(position, value) {
        if (position >= string.length) { return value }
        if (string.charAt(position) === "0") {
            return process (position + 1, value(zero))
        }
        return process (position + 1, value(one))
    }
    return process(0, trivial);
}

function interrogate (f) {
    return ((((f(I))(I))(I))(K));
}

function pr(ch) {
    output.push(((interrogate(ch))("0"))("1"));
    return pr;
}

function run(string) {
    output = [];
    ((zot(string))(K(K(K(K(K(K(I))))))))(pr);
    return output.join('');
}

import { loadFile } from 'std';

print(run(loadFile(scriptArgs[1]).trim() + scriptArgs[2].trim()));
