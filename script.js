//#region div_1
const _txt_height = document.getElementById(`txt_height`);
const _txt_weight = document.getElementById(`txt_weight`);
const _txt_yoursName = document.getElementById(`txt_yoursName`);
const _btn_Start = document.getElementById(`btn_Start`);
const _btn_Reset = document.getElementById(`btn_Reset`);
const _txt_Result = document.getElementById(`txt_Result`);

_txt_height.addEventListener(`click`, () => {
  _txt_height.value = "";
});
_txt_weight.addEventListener(`click`, () => {
  _txt_weight.value = "";
});

_btn_Start.addEventListener(`click`, () => {
  _tinhBmi(_txt_height, _txt_weight);
  console.log(`Bạn nhấn tính`);
});
_btn_Reset.addEventListener("click", () => {
  _txt_weight.value = "";
  _txt_height.value = "";
  _txt_Result.value = "";
});
function _tinhBmi(txt_height, txt_weight) {
  let height = parseFloat(txt_height.value);
  let weight = parseFloat(txt_weight.value);
  if (isNaN(height) || isNaN(weight)) {
    alert(`Nhập đầy đủ thông tin để tính toán`);
    return;
  }
  if (height <= 0 || weight <= 0) {
    alert(`Chiều cao và cân nặng phải > 0, nhập lại đi`);
    return;
  }
  if (height < 100) {
    alert(`Chiều cao của bạn là ${height / 100}m hả?, nhập lại`);
    return;
  }
  height = height / 100;
  let _BMI = weight / Math.pow(height, 2);
  _tinh(_BMI.toFixed(3));
}

function _tinh(_BMI) {
  if (_BMI < 18.5) {
    _txt_Result.value = `BMI= ${_BMI}, Thiếu cân`;
    console.log(`BMI= ${_BMI}`);
  } else if (18.5 <= _BMI && _BMI < 22.9) {
    _txt_Result.value = `BMI= ${_BMI}, Bình thường`;
    console.log(`BMI= ${_BMI}`);
  } else if (23 <= _BMI && _BMI < 24.9) {
    _txt_Result.value = `BMI= ${_BMI}, Thừa cân`;
    console.log(`BMI= ${_BMI}`);
  } else if (_BMI >= 25) {
    _txt_Result.value = `BMI= ${_BMI}, Béo phì`;
    console.log(`BMI= ${_BMI}`);
  }
  console.log(`Hoàn thành`);
}
//#endregion
//#region div_2
const _btnThuchien = document.getElementById(`btn_thuchien`);
const _btnLamlai = document.getElementById(`btn_lamlai_div`);
const _txt_A = document.getElementById(`txt_numnerA`);
const _txt_B = document.getElementById(`txt_numnerB`);
const _txt_ketqua = document.getElementById(`txt_ketqua`);
const _rdb_c = document.getElementById(`rdb_C`);
const _rdb_t = document.getElementById(`rdb_T`);
const _rdb_n = document.getElementById(`rdb_N`);
const _rdb_ch = document.getElementById(`rdb_Ch`);

_btnLamlai.addEventListener(`click`, () => {
  _txt_A.value = "";
  _txt_B.value = "";
  _txt_ketqua.value = "";
});
_btnThuchien.addEventListener(`click`, () => {
  tinhToan(_txt_A, _txt_B);
  console.log(`bạn đã nhấn nút thực hiện`);
});
function tinhToan(_txt_A, _txt_B) {
  let a = parseFloat(_txt_A.value);
  let b = parseFloat(_txt_B.value);
  let kq = 0;
  if (isNaN(a) || isNaN(b)) {
    alert(`Hãy nhập số vào ô !!!`);
    return;
  }
  if (_rdb_c.checked) {
    kq = a + b;
  } else if (_rdb_t.checked) {
    kq = a - b;
  } else if (_rdb_n.checked) {
    kq = a * b;
  } else if (_rdb_ch.checked) {
    if (b <= 0) {
      _txt_BB.value = "";
      alert(`${a} Không thể chia hết cho 0, hãy nhập số khác`);
      return;
    }
    kq = a / b;
  }
  _txt_ketqua.value = kq.toFixed(3);
}
//#endregion
//#region div_3
const _txt_soN = document.getElementById(`txt_soN`);
const _txt_ketqua_div_3 = document.getElementById(`txt_ketqua_div3`);
const _btn_thuchien_div3 = document.getElementById(`btn_tinh`);
const _btn_lamlai_div3 = document.getElementById(`btn_lamlai_div3`);
const _rdb_array = document.getElementById(`rdb_array`);
const _rdb_dequy = document.getElementById(`rdb_dequy`);
_btn_lamlai_div3.addEventListener(`click`, () => {
  _txt_soN.value = "";
  _txt_ketqua_div_3.value = "";
});
_btn_thuchien_div3.addEventListener(`click`, () => {
  thuchien();
  console.log("Div 3");
});
function thuchien() {
  let soN = parseFloat(_txt_soN.value);
  if (isNaN(soN) || soN <= 0) {
    alert("Nhập lại 1 số tự nhiên >0");
    _txt_soN.value = "";
    return;
  } else {
    if (_rdb_array.checked) {
      let ar = [];
      for (let i = 0; i < soN; i++) {
        ar[i] = (Math.random() * 10 + 1).toFixed(2);
      }
      _txt_ketqua_div_3.value = ar.join(", ");
      console.log(ar.join(", "));
    } else if (_rdb_dequy.checked) {
      _txt_ketqua_div_3.value = `Đệ quy của ${soN} = ${_deQuy(soN)}`;
    }
  }
}
function _deQuy(n) {
  if (n == 0) {
    return 1;
  } else {
    console.log(n);
    return n * _deQuy(n - 1);
  }
}
//#endregion
// #region div_4
const _div4_btnthuchien = document.getElementById(`btn_ketqua_div4`);
const _div4_txt_input = document.getElementById(`txt_input_thang`);
const txt_ketqua_div4 = document.getElementById(`txt_ketqua_div4`);

-_div4_btnthuchien.addEventListener(`click`, () => {
  TinhSoNgay();
});
function TinhSoNgay() {
  let month = parseInt(_div4_txt_input.value);
  if (isNaN(month) || month <= 0) {
    console.log(`bạn đã nhấn tính ngày trong năm !!`);
    alert(`Nhập vào 1 số nguyên lớn hơn 0`);
    return;
  }
  if (month > 12) {
    alert(`Tháng ${month} không tồn tại !!`);
    return;
  }
  switch (month) {
    case 1:
      alert(`Tháng ${month} không tồn tại !!`);
      txt_ketqua_div4.value = `Tháng ${month} có 31 ngày`;
      break;
    case 2:
      txt_ketqua_div4.value = `Tháng ${month} có 29 ngày`;
      break;
    case 3:
      txt_ketqua_div4.value = `Tháng ${month} có 31 ngày`;
      break;
    case 4:
      txt_ketqua_div4.value = `Tháng ${month} có 30 ngày`;
      break;
    case 5:
      txt_ketqua_div4.value = `Tháng ${month} có 31 ngày`;
      break;
    case 6:
      txt_ketqua_div4.value = `Tháng ${month} có 30 ngày`;
      break;
    case 7:
      txt_ketqua_div4.value = `Tháng ${month} có 31 ngày`;
      break;
    case 8:
      txt_ketqua_div4.value = `Tháng ${month} có 31 ngày`;
      break;
    case 9:
      txt_ketqua_div4.value = `Tháng ${month} có 30 ngày`;
      break;
    case 10:
      txt_ketqua_div4.value = `Tháng ${month} có 31 ngày`;
      break;
    case 11:
      txt_ketqua_div4.value = `Tháng ${month} có 30 ngày`;
      break;
    case 12:
      txt_ketqua_div4.value = `Tháng ${month} có 31 ngày`;
      break;
  }
}
//#endregion
