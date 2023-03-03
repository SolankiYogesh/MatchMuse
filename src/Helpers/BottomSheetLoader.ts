export default class BottomSheetLoader {
  static loader: any

  static setLoader = (load: boolean) => {
    this.loader = load
  }

  static isShowTopSheet = (check: boolean) => {
    this.loader.showLoader(check)
  }
}
