export const showAnnotations = (annotationToShow: string[]) => {
  Unlimited3D.showAnnotations({
    annotationObjects: [
      {
        annotations: annotationToShow,
      },
    ],
  })
}
