import React from "react";
import { Search } from "@/assets/svgs/search";
import { useNavigate } from "react-router-dom";

const categories = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  name: `카테고리 ${i + 1}`,
}));

const CategorySelectPage: React.FC = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (categoryName: string, id: number) =>
    navigate("/search/category-result", {
      state: { category: categoryName, categoryId: id },
    });

  const handleSearchClick = () => navigate("/search");

  return (
    <div className="w-full max-w-[375px] mx-auto bg-white min-h-[812px] px-[34px] py-6">
      {/* 검색창 */}
      <div className="mb-6">
        <div
          className="flex items-center bg-white rounded-xl px-4 py-3 border border-grey09 cursor-pointer"
          onClick={handleSearchClick}
        >
          <Search className="w-4 h-4 mr-2" />
          <span className="text-med16 text-darkgrey02 placeholder-bluegrey04">
            검색어를 입력하세요
          </span>
        </div>
      </div>

      {/* 구분선 */}
      <div className="w-full border-t border-grey02 mb-6" />

      {/* 카테고리 */}
      <h2 className="text-base mb-6 font-med16 text-darkgrey05">
        카테고리 선택
      </h2>

      <div className="flex justify-center">
        <div className="grid grid-cols-3 gap-x-[21px] gap-y-[30px]">
          {categories.map(({ id, name }) => (
            <button
              key={id}
              onClick={() => handleCategoryClick(name, id)}
              className="w-[88px] h-[88px] bg-grey09 rounded-full cursor-pointer"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategorySelectPage;
