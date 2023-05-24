// return masked string
function maskify(cc) {
    return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
    }

// return masked string
function maskify(cc) {
    if (cc.length > 4) {
        let result = '';
        return cc.split('').reduce((acc, cur, i) => {
          if (cc.length - i > 4) {
            result += '#';
          } else {
            result += cur;
          }
          return result;
        }, '');
      } else {
        return cc;
      }
    }

// return masked string
function maskify(cc) {
    return cc.replace(/.(?=.{4})/g, "#");
    }


// abc