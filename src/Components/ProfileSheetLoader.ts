export default class ProfileSheetLoader {
  static loader: any

  static setLoader = (load: any) => {
    this.loader = load
  }

  static OpenProfile = (data: any) => {
    this.loader.OpenProfile(data)
  }
}
