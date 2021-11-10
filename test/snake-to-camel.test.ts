import { snakeToCamel } from '../src'

describe('snake-to-camel', () => {
  test('input:snake, output:camel', () => {
    expect(snakeToCamel('hello_world')).toEqual('helloWorld')
    expect(snakeToCamel('korea_army_training_center_k2')).toEqual(
      'koreaArmyTrainingCenterK2',
    )
    expect(snakeToCamel('camel_to_Kabab')).toEqual('camelToKabab')
  })
  test('if input value is not snakecase then return no change', () => {
    expect(snakeToCamel('camelToKabab')).toEqual('camelToKabab')
    expect(snakeToCamel('hello-world')).toEqual('hello-world')
  })
})
