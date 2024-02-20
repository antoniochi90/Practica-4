function funUpdateTotals(disponibles, fueraDeServicio) {
    const totalsDiv = document.getElementById('totals');
    totalsDiv.innerHTML = `PCs Disponibles: ${disponibles} | PCs Fuera de Servicio: ${fueraDeServicio}`;
}