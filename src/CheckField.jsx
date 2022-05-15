import React from "react";

const CheckField = ({ prefectures }) => {
  // 都道府県一覧のチェックボックスを表示するコンポーネント
  return (
    <>
      <div>
        {prefectures && prefectures.map((prefecture, onChange) => (
          <div key={prefecture.prefName}>
            <input
              type="checkbox"
              name="Prefecture name"
              id={"checkbox" + prefecture.prefCode}
              onChange={(event) =>
                onChange(
                  prefecture.prefName,
                  prefecture.prefCode,
                  event.target.checked
                )}
            />
            <label htmlFor={"checkbox" + prefecture.prefCode}>
              {prefecture.prefName.length === 3
                ? "　" + prefecture.prefName
                : prefecture.prefName}
            </label>
          </div>
        ))}
      </div>
    </>
  );
};

export default CheckField;
