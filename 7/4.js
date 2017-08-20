/**
 * @author [KSH-Code]
 * @email [tjdgnsqn133@gmail.com]
 * @create date 2017-08-20 09:29:31
 * @modify date 2017-08-20 09:29:31
 * @desc [Intl.DateTiemFormat]
 */
var msPerDay = 24 * 60 * 60 * 1000
var now = new Date()
var options = {
    year: "2-digit",
    month: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    timeZoneName: "long"
}
var americanDateTime = Intl.DateTimeFormat('en-US', options).format
console.log(americanDateTime(now))