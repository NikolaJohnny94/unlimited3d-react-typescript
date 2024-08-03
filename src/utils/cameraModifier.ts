export const cameraModifier = (currentComponent: string) => {
  switch (currentComponent) {
    case 'body':
      Unlimited3D.activateModifier({ modifier: 'camera_body' })
      Unlimited3D.activateModifier({ modifier: 'camera_body_mobile' })
      break
    case 'handles':
      Unlimited3D.activateModifier({ modifier: 'camera_handle' })
      Unlimited3D.activateModifier({ modifier: 'camera_handle_mobile' })
      break
    case 'corners':
      Unlimited3D.activateModifier({ modifier: 'camera_corners' })
      Unlimited3D.activateModifier({ modifier: 'camera_corners_mobile' })
      break
    case 'wheels':
      Unlimited3D.activateModifier({ modifier: 'camera_wheels' })
      Unlimited3D.activateModifier({ modifier: 'camera_wheels_mobile' })
      break
  }
}
