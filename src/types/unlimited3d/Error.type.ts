export type Error = {
  code: number
  customError: boolean
  error: {
    columnNumber: number
    fileName: string
    lineNumber: number
    message: string
    stack: number
  }
  errorTitle: string
  reference: string
  status: boolean
  statusCode: number
}
