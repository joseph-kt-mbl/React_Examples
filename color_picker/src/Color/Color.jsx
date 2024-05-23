import react,{useState} from 'react'

import styles from './Color.module.css'

function Color(){

    const [color,setColor] = useState('#fff');
    const [fontColor,setFontColor] = useState('black');

    const handleCopyColor = () => {
        navigator.clipboard.writeText(color).then(() => {
            alert(`Copied the color ${color} to clipboard.`);
        }, (error) => {
            alert('Failed to copy color: ' + error);
        });
    };

    const handleColorPick = (e)=>{
        setColor(e.target.value);
        setFontColor(getContrastingColor(e.target.value))
    }

    return(
        <div className={styles.colorPicker}>
            <h2>Color Picker</h2>
            <div className={styles.template} onClick={handleCopyColor} style={{
                    backgroundColor : color
                }}>

                <p style={{color : fontColor}}> 
                    selected Color : {color}
                    <small>click On The color area to copy</small>
                </p>

            </div>
            <div className={styles.chooseColor}>
                <span>choose a color : </span>
                <input type="color" onChange={handleColorPick}/>
            </div>
        </div>
    )
}
function toRgb(colorStr) {
    const rgb = { r: 0, g: 0, b: 0 };

    // Trim the string to remove any whitespace
    colorStr = colorStr.trim();

    // Check if it's a hex color (e.g., #ffffff or #fff)
    if (colorStr.startsWith('#')) {
        // Remove the hash
        const hex = colorStr.slice(1);
        
        if (hex.length === 3) {
            // Convert shorthand hex to full
            rgb.r = parseInt(hex[0] + hex[0], 16);
            rgb.g = parseInt(hex[1] + hex[1], 16);
            rgb.b = parseInt(hex[2] + hex[2], 16);
        } else if (hex.length === 6) {
            // Convert full hex to decimal
            rgb.r = parseInt(hex.substring(0, 2), 16);
            rgb.g = parseInt(hex.substring(2, 4), 16);
            rgb.b = parseInt(hex.substring(4, 6), 16);
        }
    }
    // Check if it's an RGB color (e.g., rgb(255, 255, 255))
    else if (colorStr.startsWith('rgb')) {
        // Extract numbers
        const matches = colorStr.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
        if (matches) {
            rgb.r = parseInt(matches[1]);
            rgb.g = parseInt(matches[2]);
            rgb.b = parseInt(matches[3]);
        }
    }
    // Handle named colors by creating a temporary element and using the browser to determine the color
    else {
        const fakeDiv = document.createElement("div");
        fakeDiv.style.color = colorStr;
        document.body.appendChild(fakeDiv);

        // Get the computed color style
        const computedColor = window.getComputedStyle(fakeDiv).color;
        document.body.removeChild(fakeDiv);

        // Extract the RGB values from computed style
        const rgbMatches = computedColor.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
        if (rgbMatches) {
            rgb.r = parseInt(rgbMatches[1]);
            rgb.g = parseInt(rgbMatches[2]);
            rgb.b = parseInt(rgbMatches[3]);
        }
    }

    return rgb;
}
function getContrastingColor(colorStr) {
    // Assuming `toRgb` function exists and returns an object like { r: 255, g: 255, b: 255 }
    const rgb = toRgb(colorStr);
    
    // Calculate the luminance using the formula for perceived luminance
    // Note: Constants are based on a formula used for calculating relative luminance according to the sRGB color space.
    const luminance = 0.2126 * rgb.r + 0.7152 * rgb.g + 0.0722 * rgb.b;
    
    // A common threshold for differentiating light from dark colors is 128 out of 255 in the perceived luminance
    if (luminance > 128) {
        return 'black'; // Light color, so return black for contrast
    } else {
        return 'white'; // Dark color, so return white for contrast
    }
}

export default Color