import { LoadingSpinner } from '.'

export const ModelContainer = () => {
  return (
    <div className='model'>
      <div id='container3d_replace'></div>
      <div className='loadingContent' id='loadingContent'>
        <LoadingSpinner />
      </div>
    </div>
  )
}
