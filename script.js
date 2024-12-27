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
