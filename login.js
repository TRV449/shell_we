function login() {
    const form = document.login_form;
    const chkId = checkValidId1(form);
    const chkPw = checkValidPassword1(form);

    if (chkId) {
        document.getElementById('alert_id_log').innerText = "";
        form.id_log.style.borderColor = '#00D000';
    } else {
        form.id_log.style.borderColor = '#FF0000';
        document.getElementById('alert_id_log').style.color = '#FF0000';
    }

    if (chkPw) {
        document.getElementById('alert_password_log').innerText = "";
        form.password_log.style.borderColor = '#00D000';
    } else {
        form.password_log.style.borderColor = '#FF0000';
        document.getElementById('alert_password_log').style.color = '#FF0000';
    }

    if (chkId && chkPw) {
        console.log('complete. form.submit();');
        //form.submit();
    }
}

function checkValidId1(form) {
    if (form.id_log.value == "") {
        document.getElementById('alert_id_log').innerText = "Please enter Id.";
        //form.id.focus();
        return false;
    }

    return true;
}

function checkValidPassword1(form) {
    if (form.password_log.value == "") {
        document.getElementById('alert_password_log').innerText = "Please enter password.";
        //form.password.focus();
        return false;
    }

    const pw = form.password_log.value;
    // String.prototype.search() :: 검색된 문자열 중에 첫 번째로 매치되는 것의 인덱스를 반환한다. 찾지 못하면 -1 을 반환한다.
    // number
    const num = pw.search(/[0-9]/g);
    // alphabet
    const eng = pw.search(/[a-z]/ig);
    // special characters
    const spe = pw.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi);

    if (pw.length < 6) {
        // 최소 6문자.
        document.getElementById('alert_password_log').innerText = "Password must be at least 6 characters.";
        return false;
    } else if (pw.search(/\s/) != -1) {
        // 공백 제거.
        document.getElementById('alert_password_log').innerText = "Please enter your password without spaces.";
        return false;
    } else if (num < 0 && eng < 0 && spe < 0) {
        // 한글과 같은 문자열 입력 방지.
        document.getElementById('alert_password_log').innerText = "Password is not valid.";
        return false;
    }

    return true;
}