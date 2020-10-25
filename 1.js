var dongho = {
    hangsx: 'casio',
    mau: 'den',
    gia: 5000,
    gioitinh:'nam',
    xemngay: function(){
        return this.hangsx + ' '+ this.gioitinh;
    }
};
console.log(dongho.xemngay());