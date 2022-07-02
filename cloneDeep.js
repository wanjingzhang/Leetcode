function isObject(obj) {
    return (typeof obj === "object" || typeof obj === "function") && obj !== null;
  }
  function cloneDeep(source, hash = new WeakMap()) {
    if (!isObject(source)) return source;
    if (hash.has(source)) return hash.get(source); // 新增代码，查哈希表
  
    var target = Array.isArray(source) ? [] : {};
    hash.set(source, target); // 新增代码，哈希表设值
  
    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        if (isObject(source[key])) {
          target[key] = cloneDeep(source[key], hash); // 新增代码，传入哈希表
        } else {
          target[key] = source[key];
        }
      }
    }
    return target;
  }
   
  var a = {a:1,b:[1,2,{c:3}]}
  a.e = a;

  var aCopy = cloneDeep(a) 
  console.log(aCopy)