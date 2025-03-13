import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { HiOutlineChevronRight, HiOutlineSearch } from "react-icons/hi";
import { AiOutlineExport } from "react-icons/ai";

const HistoryPrice = () => {
  // Dữ liệu mẫu cho bảng lịch sử chỉnh sửa giá sản phẩm
  const sampleOrders = [
    {
      Id: 1,
      CreatedAt: "3/11/2025, 7:46:32 AM",
      StartDate: "3/1/2025",
      EndDate: "3/10/2025",
      ProductSizeId: 1,
      SellingPrice: 2000000,
      productPriceStatus: "Active",
      Description: "..Price updated for new stock..",
    },
    {
      Id: 2,
      CreatedAt: "3/3/2025, 12:00:00 AM",
      StartDate: "3/5/2025",
      EndDate: "3/15/2025",
      ProductSizeId: 2,
      SellingPrice: 2200000,
      productPriceStatus: "Active",
      Description: "Price updated for new stock",
    },
    {
      Id: 3,
      CreatedAt: "3/6/2025, 5:15:45 PM",
      StartDate: "3/7/2025",
      EndDate: "3/20/2025",
      ProductSizeId: 3,
      SellingPrice: 2500000,
      productPriceStatus: "Expired",
      Description: "Price updated for new stock",
    },
    {
      Id: 4,
      CreatedAt: "3/7/2025, 1:30:00 PM",
      StartDate: "3/10/2025",
      EndDate: "3/18/2025",
      ProductSizeId: 4,
      SellingPrice: 2400000,
      productPriceStatus: "Active",
      Description: "",
    },
    {
      Id: 5,
      CreatedAt: "3/9/2025, 9:00:00 AM",
      StartDate: "3/12/2025",
      EndDate: "3/22/2025",
      ProductSizeId: 5,
      SellingPrice: 2300000,
      productPriceStatus: "Expired",
      Description: "",
    },
    {
      Id: 6,
      CreatedAt: "3/10/2025, 11:00:00 AM",
      StartDate: "3/13/2025",
      EndDate: "3/25/2025",
      ProductSizeId: 6,
      SellingPrice: 2500000,
      productPriceStatus: "Active",
      Description: "",
    },
    {
        Id: 2,
        CreatedAt: "3/3/2025, 12:00:00 AM",
        StartDate: "3/5/2025",
        EndDate: "3/15/2025",
        ProductSizeId: 2,
        SellingPrice: 2200000,
        productPriceStatus: "Active",
        Description: "",
      },
      {
        Id: 3,
        CreatedAt: "3/6/2025, 5:15:45 PM",
        StartDate: "3/7/2025",
        EndDate: "3/20/2025",
        ProductSizeId: 3,
        SellingPrice: 2500000,
        productPriceStatus: "Expired",
        Description: "",
      },
      {
        Id: 4,
        CreatedAt: "3/7/2025, 1:30:00 PM",
        StartDate: "3/10/2025",
        EndDate: "3/18/2025",
        ProductSizeId: 4,
        SellingPrice: 2400000,
        productPriceStatus: "Active",
        Description: "",
      },
      {
        Id: 5,
        CreatedAt: "3/9/2025, 9:00:00 AM",
        StartDate: "3/12/2025",
        EndDate: "3/22/2025",
        ProductSizeId: 5,
        SellingPrice: 2300000,
        productPriceStatus: "Expired",
        Description: "",
      },
      {
        Id: 6,
        CreatedAt: "3/10/2025, 11:00:00 AM",
        StartDate: "3/13/2025",
        EndDate: "3/25/2025",
        ProductSizeId: 6,
        SellingPrice: 2500000,
        productPriceStatus: "Active",
        Description: "",
      },
      {
        Id: 2,
        CreatedAt: "3/3/2025, 12:00:00 AM",
        StartDate: "3/5/2025",
        EndDate: "3/15/2025",
        ProductSizeId: 2,
        SellingPrice: 2200000,
        productPriceStatus: "Active",
        Description: "",
      },
      {
        Id: 3,
        CreatedAt: "3/6/2025, 5:15:45 PM",
        StartDate: "3/7/2025",
        EndDate: "3/20/2025",
        ProductSizeId: 3,
        SellingPrice: 2500000,
        productPriceStatus: "Expired",
        Description: "",
      },
      {
        Id: 4,
        CreatedAt: "3/7/2025, 1:30:00 PM",
        StartDate: "3/10/2025",
        EndDate: "3/18/2025",
        ProductSizeId: 4,
        SellingPrice: 2400000,
        productPriceStatus: "Active",
        Description: "",
      },
      {
        Id: 5,
        CreatedAt: "3/9/2025, 9:00:00 AM",
        StartDate: "3/12/2025",
        EndDate: "3/22/2025",
        ProductSizeId: 5,
        SellingPrice: 2300000,
        productPriceStatus: "Expired",
        Description: "",
      },
      {
        Id: 6,
        CreatedAt: "3/10/2025, 11:00:00 AM",
        StartDate: "3/13/2025",
        EndDate: "3/25/2025",
        ProductSizeId: 6,
        SellingPrice: 2500000,
        productPriceStatus: "Active",
        Description: "",
      },
      {
        Id: 2,
        CreatedAt: "3/3/2025, 12:00:00 AM",
        StartDate: "3/5/2025",
        EndDate: "3/15/2025",
        ProductSizeId: 2,
        SellingPrice: 2200000,
        productPriceStatus: "Active",
        Description: "",
      },
      {
        Id: 3,
        CreatedAt: "3/6/2025, 5:15:45 PM",
        StartDate: "3/7/2025",
        EndDate: "3/20/2025",
        ProductSizeId: 3,
        SellingPrice: 2500000,
        productPriceStatus: "Expired",
        Description: "",
      },
      {
        Id: 4,
        CreatedAt: "3/7/2025, 1:30:00 PM",
        StartDate: "3/10/2025",
        EndDate: "3/18/2025",
        ProductSizeId: 4,
        SellingPrice: 2400000,
        productPriceStatus: "Active",
        Description: "",
      },
      {
        Id: 5,
        CreatedAt: "3/9/2025, 9:00:00 AM",
        StartDate: "3/12/2025",
        EndDate: "3/22/2025",
        ProductSizeId: 5,
        SellingPrice: 2300000,
        productPriceStatus: "Expired",
        Description: "",
      },
      {
        Id: 6,
        CreatedAt: "3/10/2025, 11:00:00 AM",
        StartDate: "3/13/2025",
        EndDate: "3/25/2025",
        ProductSizeId: 6,
        SellingPrice: 2500000,
        productPriceStatus: "Active",
        Description: "",
      },
      {
        Id: 2,
        CreatedAt: "3/3/2025, 12:00:00 AM",
        StartDate: "3/5/2025",
        EndDate: "3/15/2025",
        ProductSizeId: 2,
        SellingPrice: 2200000,
        productPriceStatus: "Active",
        Description: "",
      },
      {
        Id: 3,
        CreatedAt: "3/6/2025, 5:15:45 PM",
        StartDate: "3/7/2025",
        EndDate: "3/20/2025",
        ProductSizeId: 3,
        SellingPrice: 2500000,
        productPriceStatus: "Expired",
        Description: "",
      },
      {
        Id: 4,
        CreatedAt: "3/7/2025, 1:30:00 PM",
        StartDate: "3/10/2025",
        EndDate: "3/18/2025",
        ProductSizeId: 4,
        SellingPrice: 2400000,
        productPriceStatus: "Active",
        Description: "",
      },
      {
        Id: 5,
        CreatedAt: "3/9/2025, 9:00:00 AM",
        StartDate: "3/12/2025",
        EndDate: "3/22/2025",
        ProductSizeId: 5,
        SellingPrice: 2300000,
        productPriceStatus: "Expired",
        Description: "",
      },
      {
        Id: 6,
        CreatedAt: "3/10/2025, 11:00:00 AM",
        StartDate: "3/13/2025",
        EndDate: "3/25/2025",
        ProductSizeId: 6,
        SellingPrice: 2500000,
        productPriceStatus: "Active",
        Description: "",
      },
      {
        Id: 2,
        CreatedAt: "3/3/2025, 12:00:00 AM",
        StartDate: "3/5/2025",
        EndDate: "3/15/2025",
        ProductSizeId: 2,
        SellingPrice: 2200000,
        productPriceStatus: "Active",
        Description: "",
      },
      {
        Id: 3,
        CreatedAt: "3/6/2025, 5:15:45 PM",
        StartDate: "3/7/2025",
        EndDate: "3/20/2025",
        ProductSizeId: 3,
        SellingPrice: 2500000,
        productPriceStatus: "Expired",
        Description: "",
      },
      {
        Id: 4,
        CreatedAt: "3/7/2025, 1:30:00 PM",
        StartDate: "3/10/2025",
        EndDate: "3/18/2025",
        ProductSizeId: 4,
        SellingPrice: 2400000,
        productPriceStatus: "Active",
        Description: "",
      },
      
  ];

  // Hooks để quản lý các giá trị trong component
  const [searchQuery, setSearchQuery] = useState("");
  const [orders, setOrders] = useState(sampleOrders); 
  const [currentPage, setCurrentPage] = useState<number>(1);
  const rowsPerPage = 5; // Mỗi trang chỉ hiển thị 5 dòng dữ liệu
  const visiblePageCount = 3;

  const totalPages = Math.ceil(orders.length / rowsPerPage);

  const startPage = Math.max(
    Math.min(currentPage - 1, totalPages - visiblePageCount + 1),
    1
  );
  const endPage = Math.min(startPage + visiblePageCount - 1, totalPages);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
    console.log("Changing to page: ", page);
  };

  // Tính toán các hàng cần hiển thị trong trang hiện tại
  const paginatedOrders = orders.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  return (
    <div className="h-auto border-t border-blackSecondary border-1 flex dark:bg-blackPrimary bg-whiteSecondary">
      <Sidebar />
      <div className="dark:bg-blackPrimary bg-whiteSecondary w-full">
        <div className="dark:bg-blackPrimary bg-whiteSecondary py-10">
          <div className="px-4 sm:px-6 lg:px-8 flex justify-between items-center max-sm:flex-col max-sm:gap-5">
            <div className="flex flex-col gap-3">
              <h2 className="text-3xl font-bold leading-7 dark:text-whiteSecondary text-blackPrimary">
                History of Price Changes
              </h2>
              <p className="dark:text-whiteSecondary text-blackPrimary text-base font-normal flex items-center">
                <span>Dashboard</span>{" "}
                <HiOutlineChevronRight className="text-lg" />{" "}
                <span>Price History</span>
              </p>
            </div>
            <div className="flex gap-x-2 max-[370px]:flex-col max-[370px]:gap-2 max-[370px]:items-center">
              <button className="dark:bg-blackPrimary bg-whiteSecondary border border-gray-600 w-32 py-2 text-lg dark:hover:border-gray-500 hover:border-gray-400 duration-200 flex items-center justify-center gap-x-2">
                <AiOutlineExport className="dark:text-whiteSecondary text-blackPrimary text-base" />
                <span className="dark:text-whiteSecondary text-blackPrimary font-medium">
                  Export
                </span>
              </button>
            </div>
          </div>
          <div className="px-4 sm:px-6 lg:px-8 flex justify-between items-center mt-5 max-sm:flex-col max-sm:gap-2">
            <div className="relative">
              <HiOutlineSearch className="text-gray-400 text-lg absolute top-3 left-3" />
              <input
                type="text"
                className="w-60 h-10 border dark:bg-blackPrimary bg-white border-gray-600 dark:text-whiteSecondary text-blackPrimary outline-0 indent-10 dark:focus:border-gray-500 focus:border-gray-400"
                placeholder="Search price changes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          <table className="min-w-full table-auto border-collapse mt-5">
            <thead>
              <tr>
                <th className="px-4 py-2 border-b dark:text-whiteSecondary text-blackPrimary">Id</th>
                <th className="px-4 py-2 border-b dark:text-whiteSecondary text-blackPrimary">Created At</th>
                <th className="px-4 py-2 border-b dark:text-whiteSecondary text-blackPrimary">Start Date</th>
                <th className="px-4 py-2 border-b dark:text-whiteSecondary text-blackPrimary">End Date</th>
                <th className="px-4 py-2 border-b dark:text-whiteSecondary text-blackPrimary">Product Size</th>
                <th className="px-4 py-2 border-b dark:text-whiteSecondary text-blackPrimary">Selling Price</th>
                <th className="px-4 py-2 border-b dark:text-whiteSecondary text-blackPrimary">Status</th>
                <th className="px-4 py-2 border-b dark:text-whiteSecondary text-blackPrimary">Description</th>
                <th className="px-4 py-2 border-b dark:text-whiteSecondary text-blackPrimary">Actions</th>
              </tr>
            </thead>
            <tbody>
              {paginatedOrders.map((order) => (
                <tr key={order.Id}>
                  <td className="px-4 py-6 border-b text-center">{order.Id}</td>
                  <td className="px-4 py-5 border-b text-center">{order.CreatedAt}</td>
                  <td className="px-4 py-6 border-b text-center">{order.StartDate}</td>
                  <td className="px-4 py-6 border-b text-center">{order.EndDate}</td>
                  <td className="px-4 py-6 border-b text-center">{order.ProductSizeId}</td>
                  <td className="px-4 py-6 border-b text-center">{order.SellingPrice}</td>
                  <td className="px-4 py-6 border-b text-center">{order.productPriceStatus}</td>
                  <td className="px-4 py-6 border-b text-left">{order.Description}</td>
                  <td className="px-4 py-6 border-b text-center">
                    <button className="text-blue-500 hover:text-blue-700">Edit</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-center items-center px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex gap-2">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="dark:bg-blackPrimary bg-whiteSecondary border border-gray-600 dark:text-whiteSecondary text-blackPrimary py-1 px-3 hover:border-gray-500"
              >
                Prev
              </button>
              {Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i).map((page) => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`border border-gray-600 py-1 px-3 ${
                    currentPage === page
                      ? "dark:bg-whiteSecondary bg-blackPrimary dark:text-blackPrimary text-whiteSecondary"
                      : "dark:bg-blackPrimary bg-whiteSecondary dark:text-whiteSecondary text-blackPrimary"
                  } hover:border-gray-500`}
                >
                  {page}
                </button>
              ))}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="dark:bg-blackPrimary bg-whiteSecondary border border-gray-600 dark:text-whiteSecondary text-blackPrimary py-1 px-3 hover:border-gray-500"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryPrice;
