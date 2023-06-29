// Link: https://leetcode.com/problems/lru-cache/
// Difficulty: Medium
// Time: 30 min

/**
 * Design a data structure that follows the constraints of a Least Recently Used (LRU) cache. 
 * (https://en.wikipedia.org/wiki/Cache_replacement_policies#LRU)
 * 
 * Implement the LRUCache class:
 *  - LRUCache(int capacity): Initialize the LRU cache with positive size capacity.
 *  - int get(int key): Return the value of the key if the key exists, otherwise return -1.
 *  - void put(int key, int value): Update the value of the key if the key exists. 
 *    Otherwise, add the key-value pair to the cache. If the number of keys exceeds 
 *    the capacity from this operation, evict the least recently used key.
 * The functions get and put must each run in O(1) average time complexity.
 */

// Example 1:

// Input
// ["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
// [[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
// Output
// [null, null, null, 1, null, -1, null, -1, 3, 4]

// Explanation
// LRUCache lRUCache = new LRUCache(2);
// lRUCache.put(1, 1); // cache is {1=1}
// lRUCache.put(2, 2); // cache is {1=1, 2=2}
// lRUCache.get(1);    // return 1
// lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
// lRUCache.get(2);    // returns -1 (not found)
// lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
// lRUCache.get(1);    // return -1 (not found)
// lRUCache.get(3);    // return 3
// lRUCache.get(4);    // return 4


/**
 * @param {number} capacity
 */
class LRUCache {
  constructor(capacity) {
    this.cache = new Map(); // Maps are like objects, but they keep order
    this.capacity = capacity;
  }

  get(key) {
    if (!this.cache.has(key)) return -1;

    const v = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, v);
    return this.cache.get(key);
  }

  // 3, 3
  put(key, value) {
    // if the key already exist
    if (this.cache.has(key)) {
      this.cache.delete(key);
    }
    this.cache.set(key, value);

    // if cache's size is at capacity
    if (this.cache.size > this.capacity) {
      // console.log(this.cache.keys());
      // console.log(this.cache.keys().next());
      this.cache.delete(this.cache.keys().next().value);  // keys().next().value returns first item's key
    }
  }
}

// TESTING 
const cache = new LRUCache(2);
cache.put(1,1);
console.log(cache);
cache.put(2,2);
console.log(cache);
cache.get(1);
console.log(cache);
cache.put(3,3);
console.log(cache.get(2));
console.log(cache);
cache.put(1,1);
console.log(cache);

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */