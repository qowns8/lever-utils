import { camelToKabab } from '../src'

describe('camel-to-kabab', () => {
  test('input:camel, output:kabab', () => {
    expect(camelToKabab('helloWorld')).toEqual('hello-world')
    expect(camelToKabab('camel2Kabab')).toEqual('camel2-kabab')
    expect(camelToKabab('koreaArmyTrainingCenterK2')).toEqual(
      'korea-army-training-center-k2',
    )
  })
  test('if input value is not camelcase then return no change', () => {
    expect(camelToKabab('hello-world')).toEqual('hello-world')
    expect(camelToKabab('hello_world')).toEqual('hello_world')
    expect(camelToKabab('hello-World')).toEqual('hello-World')
  })
})
