

function converter() {
    let medida = Number(de_grau.value);
    let unidade_medida = unidade.value;

    uni_select_pri.innerHTML = '';
    uni_select_seg.innerHTML = '';

    fim_conta_prim.innerHTML = ``;
    fim_conta_seg.innerHTML = ``;

    pri_var_pri.innerHTML = `${medida}º`;
    pri_var_seg.innerHTML = `${medida}º`;

    if (unidade_medida === 'celsius') {
        let para_kelvin = (medida + 273).toFixed(2);
        let para_fah = (medida * (9 / 5) + 32).toFixed(2);


        uni_select_pri.innerHTML = 'C = ';
        uni_select_seg.innerHTML = 'C = ';

        fim_conta_prim.innerHTML = `${para_kelvin}º K`;
        fim_conta_seg.innerHTML = `${para_fah}º F`;

    } else if (unidade_medida === 'kelvin') {
        let para_celsius = (medida - 273).toFixed(2);
        let para_fah = ((medida - 273.15) * (9 / 5) + 32).toFixed(2);

        uni_select_pri.innerHTML = 'K = ';
        uni_select_seg.innerHTML = 'K = ';


        fim_conta_prim.innerHTML = `${para_celsius}º C`;
        fim_conta_seg.innerHTML = `${para_fah}º F`;

    } else {
        let para_celsius = ((medida - 32) * (5 / 9)).toFixed(2);
        let para_kelvin = ((medida - 32) * (5 / 9) + 273.15).toFixed(2);

        uni_select_pri.innerHTML = 'F = ';
        uni_select_seg.innerHTML = 'F = ';

        fim_conta_prim.innerHTML = `${para_celsius}º C`;
        fim_conta_seg.innerHTML = `${para_kelvin}º K`;

    }
};