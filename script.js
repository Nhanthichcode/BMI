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
