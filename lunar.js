exports.getMoonPhase = (tomorrow) =>
{
    var today = new Date(),
        day = today.getDate()-1,
        month = today.getMonth(),
        year = today.getFullYear();
        if(tomorrow==='tomorrow'){
          day = day+2;
        }
    var c = e = jd = b = 0;
    if (month < 3) {
        year--;
        month += 12;
    }

    ++month;
    c = 365.25 * year;
    e = 30.6 * month;
    jd = c + e + day - 694039.09;
    jd /= 29.5305882;
    b = parseInt(jd);
    jd -= b;
    b = Math.round(jd * 8);

    if (b >= 8 ) {
        b = 0;
    }
    const moon = b,
          current = ()=>{
      if(moon===0){
        return 'New Moon';
      } else if(moon===1){
        return 'Waxing Crescent';
      } else if(moon===2){
        return 'Quarter';
      } else if(moon===3){
        return 'Waxing Gibbous';
      } else if(moon===4){
        return 'Full Moon';
      } else if (moon===5){
        return 'Waning Gibbous';
      } else if (moon===6){
        return 'Last Quarter';
      } else if(moon===7){
        return 'Waning Crescent';
      }{return 'noMoon';}

    };
    return current();
}
