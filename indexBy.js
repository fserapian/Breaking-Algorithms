/************************************* INDEX BY *********************************/
/*
    Transform array of object to an object with keys are the values of an element (key)
    and a value is the object element itself.
    Ex:
        [{ id: 'abc', name: 'Fadi' }, { id: 'xyz', name: 'Adam' }], and key = 'id'
        => { abc: { id: 'abc', name: 'Fadi' }, xyz: { id: 'xyz', name: 'Adam' } }

        [{ id: 'abc', name: 'Fadi' }, { id: 'xyz', name: 'Adam' }], and key = 'name'
        =>
        {
            Fadi: { id: 'abc', name: 'Fadi' },
            Adam: { id: 'xyz', name: 'Adam' }
        }
 */

function indexBy(key, arr) {
    return arr.reduce((res, el) => {
        res[el[key]] = el;

        return res;
    }, {});
}


console.log(indexBy('id', [{id: 'abc', name: 'Fadi'}, {id: 'xyz', name: 'Adam'}]));
console.log(indexBy('name', [{id: 'abc', name: 'Fadi'}, {id: 'xyz', name: 'Adam'}]));
console.log(indexBy('id', [{}]));
console.log(indexBy('id', []));
