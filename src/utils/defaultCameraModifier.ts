export const defaultCameraModifier = (screen: string) => {
  switch (screen) {
    case 'desktop':
      Unlimited3D.activateModifier({ modifier: 'default_camera_desktop' })
      break
    case 'mobile':
      Unlimited3D.activateModifier({ modifier: 'default_camera_mobile' })
      break
  }
}
