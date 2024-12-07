import { animate } from './index';


test('animate', () => {
    expect(animate({ speed: 2, initialPosition: '..R....'})).toEqual(['..X....', '....X..', '......X', '.......' ])
    expect(animate({ speed: 3, initialPosition: 'RR..LRL'})).toEqual([ 'XX..XXX', '.X.XX..', 'X.....X', '.......' ])
    expect(animate({ speed: 10, initialPosition: 'RLRLRLRLRL'})).toEqual([ 'XXXXXXXXXX', '..........' ])
})
