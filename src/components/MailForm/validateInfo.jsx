export default function validateInfo(values) {
    let errors = {};

    // 希望職種
    // 必要なし

    // 名前
    if(!values.name.trim()) {
        errors.name = "名前を入力してください"
    }
    // フリガナ
    if(!values.hurigana) {
        errors.hurigana = "フリガナを入力してください"
    }
    // 最終学歴
    if(!values.education) {
        errors.education = "最終学歴を入力してください"
    }
    // 生年月日
    // if(!values.year) {
    //     errors.year = "年を入力してください"
    // }else if(!/^[0-9\b]+$/.test(values.tell)) {
    //     errors.year="半角数字で入力してください"
    // }
    // if(!values.month) {
    //     errors.month = "月を入力してください"
    // }else if(!/^[0-9\b]+$/.test(values.tell)) {
    //     errors.month="半角数字で入力してください"
    // }
    // if(!values.date) {
    //     errors.date = "日を入力してください"
    // }else if(!/^[0-9\b]+$/.test(values.tell)) {
    //     errors.date="半角数字で入力してください"
    // }
    if(!values.birth) {
        errors.birth = "生年月日を入力してください"
    }
    // }else if(!/^[0-9\b]+$/.test(values.tell)) {
    //     errors.date="半角数字で入力してください"
    // }
    // 電話番号
    if(!values.tel) {
        errors.tel = "電話番号を入力してください"
    }
    // }else if(!/^[0-9\b]+$/.test(values.tell)) {
    //     errors.tel="半角数字で入力してください"
    // }
    // eメール
    if(!values.email) {
        errors.email="メールアドレスを入力してください"
    }
    // }else if (!/\S+@\S+\.\S+/.test(values.email)) {
    //     errors.email="正しいメールアドレスを入力してください"
    // }
    // 備考欄
    // 必要なし

    return errors;

}