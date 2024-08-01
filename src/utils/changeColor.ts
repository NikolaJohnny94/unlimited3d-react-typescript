const changeColor = (partOne: string[], materialOne: string) => {
  Unlimited3D.changeMaterials({
    partObjects: [
      {
        parts: partOne,
        material: materialOne,
      },
    ],
  })
}

export default changeColor
