export default class VideoSheetLoader {
  static loader: any

  static setLoader = (load: any) => {
    this.loader = load
  }

  static PlayVideo = (data: any) => {
    this.loader.PlayVideo(data)
  }
}
