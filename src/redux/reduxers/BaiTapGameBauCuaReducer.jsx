const initialState = {
  danhSachCuoc: [
    { ma: "nai", hinhAnh: "./assets/nai.png", diemCuoc: 0 },
    { ma: "bau", hinhAnh: "./assets/bau.png", diemCuoc: 0 },
    { ma: "ga", hinhAnh: "./assets/ga.png", diemCuoc: 0 },
    { ma: "ca", hinhAnh: "./assets/ca.png", diemCuoc: 0 },
    { ma: "cua", hinhAnh: "./assets/cua.png", diemCuoc: 0 },
    { ma: "tom", hinhAnh: "./assets/tom.png", diemCuoc: 0 },
  ],
  tongDiem: 1000,
  mangXucXac: [
    { ma: "nai", hinhAnh: "./assets/nai.png" },
    { ma: "cua", hinhAnh: "./assets/cua.png" },
    { ma: "tom", hinhAnh: "./assets/tom.png" },
  ],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "DAT_CUOC_BAU_CUA": {
      // console.log('action', action)
      //Tìm trong danhs sách cược sẽ tăng hoặc giảm điểm
      const danhSachCuocUpdate = [...state.danhSachCuoc];
      const index = danhSachCuocUpdate.findIndex(
        (qc) => qc.ma === action.quanCuoc.ma
      );

      if (index != -1) {
        if (action.tangGiam&&state.tongDiem>0) {
          danhSachCuocUpdate[index].diemCuoc += 100;
          state.tongDiem -= 100;
        }else{
          if(danhSachCuocUpdate[index].diemCuoc>0){
            danhSachCuocUpdate[index].diemCuoc -= 100;
            state.tongDiem+=100;
          }
        }
      }
      return {
        ...state,
        danhSachCuoc: danhSachCuocUpdate,
      };
    }

    default:
      return state;
  }
};
