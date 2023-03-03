import Toast from 'react-native-root-toast'
import _ from 'lodash'
import moment from 'moment'

import Color from './Color'
import {moderateScale} from './Responsive'

const deepClone = (val: any) => {
  return _.cloneDeep(val)
}

const isValid = (value: string) => {
  const reg = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/
  return !value.trim() || !reg.test(value.trim())
}

const showToast = (message: string) => {
  Toast.show(message, {
    duration: Toast.durations.SHORT,
    position: Toast.positions.BOTTOM,
    shadow: true,
    animation: true,
    hideOnPress: true,
    textStyle: {fontSize: moderateScale(15)},
    backgroundColor: Color.black,
    textColor: Color.white
  })
}

const randomeUserName = () => {
  const adjectives = ['Emily', 'Smith', 'grumpy', 'Michael', 'blob']
  const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)]
  return randomAdjective
}

const convertToFriendlyNumber = (number: number | string) => {
  const intNumber = Number(number)
  if (number >= 1000000000) {
    return `${(intNumber / 1000000000).toFixed(0)}B`
  }
  if (number >= 1000000) {
    return `${(intNumber / 1000000).toFixed(0)}M`
  }
  if (number >= 1000) {
    return `${(intNumber / 1000).toFixed(0)}k`
  }
  return number.toString()
}

const secondsToMMSS = (seconds: number) => {
  return new Date(seconds * 1000).toISOString().substring(14, 19)
}

const getDateString = (date: any, isMessageDate = false) => {
  if (date) {
    const isSameDay = moment(date).isSame(moment(), 'd')
    const startDate = moment(moment().format('DD-MM-YYYY'), 'DD-MM-YYYY')
    const endDate = moment(moment(date).format('DD-MM-YYYY'), 'DD-MM-YYYY')
    const dayDiff = startDate.diff(endDate, 'days')
    const isYesterDay = dayDiff === 1
    if (isSameDay) {
      return 'Today'
    }
    if (isYesterDay) {
      return 'Yesterday'
    }
    return isMessageDate
      ? moment(date).format('MMMM DD hh:mm A')
      : moment(date).format('YYYY-MM-DD')
  }
  return ''
}

const getVoiceMessageHTML = (uri: string, isYou: boolean) => `<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />

        <link href="data:image/gif;" rel="icon" type="image/x-icon" />
  <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
      integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm"
      crossorigin="anonymous"
    />
        <!-- Bootstrap -->
        <link
            href="//maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"
            rel="stylesheet"
        />

        <link rel="stylesheet" href="../css/style.css" />
        <link rel="stylesheet" href="../css/ribbon.css" />
        <link
            rel="screenshot"
            itemprop="screenshot"
            href="https://katspaugh.github.io/wavesurfer.js/example/screenshot.png"
        />

        <!-- wavesurfer.js -->
        <script src="https://unpkg.com/wavesurfer.js"></script>

        <!-- Demo -->


        <!-- highlight.js for syntax highlighting in this example -->
        <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.2.0/styles/default.min.css"
        />
        <script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.2.0/highlight.min.js"></script>
        <script>
            let wavesurfer = {};

// Init & load audio file
window.addEventListener('DOMContentLoaded', function() {
    wavesurfer = WaveSurfer.create({
        container: document.querySelector('#waveform'),
        waveColor: '#D9DCFF',
        progressColor: '#4353FF',
        cursorColor: '#4353FF',
        barWidth: 3,
        barRadius: 3,
        cursorWidth: 1,
        height: 200,
        barGap: 3
    });

    wavesurfer.on('error', function(e) {
        console.warn(e);
    });

    // Load audio from URL
    wavesurfer.load('https://api.twilio.com//2010-04-01/Accounts/AC25aa00521bfac6d667f13fec086072df/Recordings/RE6d44bc34911342ce03d6ad290b66580c.mp3');


});
        </script>
    </head>

   <div class="container">
            <div id="demo">
                <div id="waveform">
                    <!-- Here be the waveform -->
                </div>
            </div>
        </div>
       
           <style>
          html {
      text-align: center;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #f4f4f4
    }
    </style>

 
</html>

`

const isValidUrl = (url: string) => {
  const regex = /^(http|https):\/\/[a-z0-9]+([-.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/
  return regex.test(url)
}

const isValidInstagramURL = (url: string) => {
  const regex =
    /^(?:https?:\/\/)?(?:www\.)?(?:instagram\.com|instagr\.am)\/([a-zA-Z0-9_.]+)(?:\/)?$/
  return regex.test(url)
}

const isValidYoutubeURL = (url: string) => {
  const regex =
    /^(?:(?:https?):\/\/)?(?:www\.)?(?:youtube\.com|youtu\.be)\/(?:watch\?v=|embed\/|v\/)?([A-Za-z0-9_-]{11})/
  return regex.test(url)
}

const isValidSnapChatURL = (url: string) => {
  const regex = /^(?:https?:\/\/)?(?:www\.)?(?:snapchat\.com)\/add\/([a-zA-Z0-9._-]+)$/
  return regex.test(url)
}

const isValidTwitchURL = (url: string) => {
  const regex = /^(?:https?:\/\/)?(?:www\.)?(?:twitch\.tv)\/([a-zA-Z0-9_]+)$/
  return regex.test(url)
}

const Utility = {
  deepClone,
  isValid,
  showToast,
  randomeUserName,
  convertToFriendlyNumber,
  secondsToMMSS,
  getDateString,
  getVoiceMessageHTML,
  isValidUrl,
  isValidInstagramURL,
  isValidSnapChatURL,
  isValidTwitchURL,
  isValidYoutubeURL
}

export default Utility
