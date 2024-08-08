import { onPointerClick } from './helpers'

export const options = {
  distID: 'latest',
  solution3DName: 'suitcase-color',
  projectName: 'resources-for-videos-and-marketing-purposes',
  solution3DID: '62766',
  containerID: 'container3d_replace',
  onPointerClick,
}

type colors = {
  [key: string]: {
    [key: string]: string
  }
}

export const colors: colors = {
  body: {
    blue: '01 CHROME SATIN ROYAL BLUE',
    green: '02 CHROME SATIN OLIVE GREEN',
    orange: '03 CHROME SATIN BURNT ORANGE',
    red: '04 CHROME SATIN CHERRY RED',
    aluminium: '06 CHROME SATIN ALUMINUM',
    black: '05 CHROME SATIN MIDNIGHT BLACK',
  },
  other: {
    blue: 'Chrome ROYAL BLUE',
    green: 'Chrome SATIN OLIVE GREEN',
    orange: 'Chrome SATIN BURNT ORANGE',
    red: 'Chrome CHERRY RED',
    black: 'Chrome MIDNIGHT BLACK',
    aluminium: 'Chrome ALUMINIUM',
  },
}
export const parts = {
  body: ['Body_metal_base', 'Body_metal_cover'],
  handles: ['Handle_base1', 'Handle_metal-1', 'Handle_telescope-1'],
  corners: ['Corners_base', 'Corners_cover'],
  wheels: [
    'wheels_base',
    'Wheels_base_cover',
    'Wheels_front_right_base',
    'Wheels_front_left_base',
    'Wheels_back_right_base',
    'Wheels_back_left_base',
    'Wheels_front_right_center',
    'Wheels_front_left_center',
    'Wheels_back_right_center',
    'Wheels_back_left_centar',
  ],
}
