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
    alert(`Nhập lại số hoàn chỉnh nào !!!`);
    return;
  }
  if (a <= 0 || b <= 0) {
    alert(`Nhập lại số > 0 nào !`);
    return;
  }
  if (_rdb_c.checked) {
    kq = a + b;
  } else if (_rdb_t.checked) {
    kq = a - b;
  } else if (_rdb_n.checked) {
    kq = a * b;
  } else if (_rdb_ch.checked) {
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
