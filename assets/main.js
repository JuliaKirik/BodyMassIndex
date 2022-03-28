function imt(){
    let mass = +weightInput.value;
    let height = +heightInput.value;
    
    if (height>3) {
        height = height/100;
    }
    let index = mass/height**2;
    index = Math.round(index*10)/10;
    let result = '';
    if (index<=16) {
        result = `Ваш интекс - ${index}. А это значит, что у Вас выраженный дефицит массы тела, кушайте больше пирогов и тортиков.`;
    } else if (index>16 && index<=18.5) {
        result = `Ваш интекс - ${index}. А это значит, что у Вас недостаточная масса тела, рекомендуется кушать булочки 2 раза в день.`;
    } else if (index>18.5 && index<=25) {
        result = `Ваш интекс - ${index}. А это значит, что у Вас все в норме. Так держать!`;
    } else if (index>25 && index<=30) {
        result = `Ваш интекс - ${index}. А это значит, что у Вас избыточная масса тела. Постарайтесь контролировать свое питание.`; 
    } else if (index>30 && index<=35) {
        result = `Ваш интекс - ${index}. А это значит, что у Вас ожирение 1 степени. Рекомендуется посещение диетолога.`;
    } else if (index>35 && index<=40) {
        result = `Ваш интекс - ${index}. А это значит, что у Вас ожирение 2 степени. Рекомендуется посещение диетологи и регулярные физические нагрузки.`;
    } else {
        result = `Ваш интекс - ${index}. А это значит, что у Вас ожирение 3 степени. Вам не рекомендуется есть.`;
    }
    resultPlace.innerHTML = result;
}

