
import { pins } from './_defs';

export const mhz19 = {
    sensor: {
        name: 'Data Acquisition',
        configs: {
            gpio1: { name: 'GPIO - TX', type: 'select', options: pins, var: 'gpio1'  },
            gpio2: { name: 'GPIO - RX', type: 'select', options: pins, var: 'gpio2'  },
        }
    },
    data: true,
    vals: 1,
}