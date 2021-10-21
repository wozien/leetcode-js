const LRUCache = require('../lru')

describe('LRU Cahe', () => {
  test('lru feature', () => {
    const cache = new LRUCache(2)
    cache.put(1, 1)   //  {1=1}
    cache.put(2, 2)   //  {1=1, 2=2}
    expect(cache.get(1)).toEqual(1)   //  {2=2, 1=1}
    cache.put(3, 3)                   //  {1=1, 3=3}
    expect(cache.get(2)).toEqual(-1)
    cache.put(4, 4)                   //   {3=3, 4=4}
    expect(cache.get(1)).toEqual(-1)
    expect(cache.get(3)).toEqual(3)
  })
})