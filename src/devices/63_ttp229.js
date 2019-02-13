
const sensorModel = [
    { value: 1, name: 'SENSOR_TYPE_SINGLE' }, 
    { value: 2, name: 'SENSOR_TYPE_TEMP_HUM' }, 
    { value: 3, name: 'SENSOR_TYPE_TEMP_BARO' }, 
    { value: 4, name: 'SENSOR_TYPE_TEMP_HUM_BARO' }, 
    { value: 5, name: 'SENSOR_TYPE_DUAL' },
    { value: 5, name: 'SENSOR_TYPE_TRIPLE' },
    { value: 7, name: 'SENSOR_TYPE_QUAD' },
    { value: 10, name: 'SENSOR_TYPE_SWITCH' },
    { value: 11, name: 'SENSOR_TYPE_DIMMER' },
    { value: 20, name: 'SENSOR_TYPE_LONG' },
    { value: 21, name: 'SENSOR_TYPE_WIND' },
]

export const dummyDevice = {
    data: {
        name: 'Data Acquisition',
        configs: {
            switch_type: { name: 'Simulate Sensor Type', type: 'select', options: sensorModel, var: 'configs[0]'  },
            interval: { name: 'Interval', type: 'number' },
        }
    }
}