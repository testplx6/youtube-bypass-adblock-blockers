# Customizable YouTube Iframe Settings with URL Change Detection

## Introduction
This userscript enhances the YouTube viewing experience by allowing users to customize the behavior of YouTube's video player iframe. With features such as autoplay, control visibility, loop, mute, related videos, and start/end times, this script offers a more personalized watching experience. Additionally, it dynamically updates these settings as you navigate through YouTube without the need for page reloads, thanks to URL change detection.

## Features
- **Autoplay:** Automatically play videos upon loading.
- **Controls Visibility:** Choose to show or hide the player controls.
- **Loop:** Enable or disable video looping.
- **Mute:** Start videos in a muted state.
- **Related Videos:** Decide whether to show related videos after the current video ends.
- **Start/End Times:** Specify start and end times for video playback.
- **URL Change Detection:** Automatically apply iframe customizations when navigating to a new video without reloading the page.

## Installation
1. Install a userscript manager extension in your web browser, such as Tampermonkey or Greasemonkey.
2. Click on the userscript manager icon in your browser and find the option to create a new script.
3. Copy and paste the provided script code into the new script template in your userscript manager.
4. Save the script. It should now be active on YouTube.

## Usage
Navigate to YouTube and start watching a video. The script automatically applies your predefined settings to the video player iframe. As you navigate to other videos, the script will update the player according to your preferences without needing to reload the page.

## Customization
To customize the iframe settings, edit the following variables in the script according to your preferences:
- `autoplay`
- `controls`
- `loop`
- `mute`
- `rel`
- `start`
- `end`

## Credits
Created by testplx6 - Feel free to modify, share, and adapt this script as needed. If you encounter any issues or have suggestions for improvements, please feel free to submit a pull request or open an issue on GitHub.

## License
This script is released under the MIT License. See the LICENSE file for more details.
