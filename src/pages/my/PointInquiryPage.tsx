import Header from "@/components/my/header/Header";
import PointItem from "@/components/my/pointItem/PointItem";
import { mockPointHistory } from "@/mock/pointHistory";

const PointInquiryPage = () => {
  const pointHistory = mockPointHistory;

  return (
    <div>
      <Header />

      <div className="flex flex-col h-full px-4">
        {pointHistory.map(point => (
          <PointItem
            key={point.id}
            type={point.type}
            title={point.title}
            date={point.date}
            amount={point.amount}
          />
        ))}
      </div>
    </div>
  );
};

export default PointInquiryPage;
