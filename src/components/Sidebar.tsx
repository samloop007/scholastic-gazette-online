
import { TrendingUp, Calendar, Tag, Users } from "lucide-react";

const Sidebar = () => {
  const categories = [
    { name: "Academic", count: 24, color: "bg-blue-500" },
    { name: "Student Life", count: 18, color: "bg-green-500" },
    { name: "Sports", count: 15, color: "bg-red-500" },
    { name: "Campus News", count: 21, color: "bg-yellow-500" },
    { name: "Events", count: 12, color: "bg-purple-500" },
    { name: "Alumni", count: 9, color: "bg-indigo-500" },
  ];

  const trendingNews = [
    {
      id: 1,
      title: "New Research Center Opens",
      date: "2024-06-04",
      views: "2.3k"
    },
    {
      id: 2,
      title: "Student Wins Science Fair",
      date: "2024-06-03",
      views: "1.8k"
    },
    {
      id: 3,
      title: "Campus Art Exhibition",
      date: "2024-06-02",
      views: "1.5k"
    },
    {
      id: 4,
      title: "Technology Workshop Series",
      date: "2024-06-01",
      views: "1.2k"
    },
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: "Graduation Ceremony",
      date: "June 15, 2024",
      time: "10:00 AM"
    },
    {
      id: 2,
      title: "Career Fair",
      date: "June 20, 2024",
      time: "9:00 AM"
    },
    {
      id: 3,
      title: "Summer Research Symposium",
      date: "June 25, 2024",
      time: "2:00 PM"
    },
  ];

  return (
    <div className="space-y-6">
      {/* Search Box */}
      <div className="bg-white rounded-lg shadow-md p-4">
        <h3 className="text-lg font-bold text-gray-900 mb-3">Search News</h3>
        <div className="relative">
          <input
            type="text"
            placeholder="Search articles..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button className="absolute right-2 top-2 text-gray-400 hover:text-blue-600">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Categories */}
      <div className="bg-white rounded-lg shadow-md p-4">
        <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
          <Tag className="w-5 h-5 mr-2 text-blue-600" />
          Categories
        </h3>
        <ul className="space-y-2">
          {categories.map((category) => (
            <li key={category.name}>
              <a
                href="#"
                className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 transition-colors group"
              >
                <div className="flex items-center">
                  <div className={`w-3 h-3 rounded-full ${category.color} mr-3`}></div>
                  <span className="text-gray-700 group-hover:text-blue-600">{category.name}</span>
                </div>
                <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                  {category.count}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Trending News */}
      <div className="bg-white rounded-lg shadow-md p-4">
        <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
          <TrendingUp className="w-5 h-5 mr-2 text-red-500" />
          Trending News
        </h3>
        <ul className="space-y-3">
          {trendingNews.map((news) => (
            <li key={news.id}>
              <a href="#" className="block hover:bg-gray-50 p-2 rounded-lg transition-colors group">
                <h4 className="text-sm font-semibold text-gray-900 group-hover:text-blue-600 mb-1">
                  {news.title}
                </h4>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>{news.date}</span>
                  <span className="flex items-center">
                    <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    {news.views}
                  </span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Upcoming Events */}
      <div className="bg-white rounded-lg shadow-md p-4">
        <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
          <Calendar className="w-5 h-5 mr-2 text-green-600" />
          Upcoming Events
        </h3>
        <ul className="space-y-3">
          {upcomingEvents.map((event) => (
            <li key={event.id} className="border-l-4 border-blue-500 pl-4">
              <h4 className="text-sm font-semibold text-gray-900 mb-1">
                {event.title}
              </h4>
              <div className="text-xs text-gray-500">
                <p>{event.date}</p>
                <p>{event.time}</p>
              </div>
            </li>
          ))}
        </ul>
        <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-semibold">
          View All Events
        </button>
      </div>

      {/* Newsletter Signup */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg shadow-md p-4 text-white">
        <h3 className="text-lg font-bold mb-2 flex items-center">
          <Users className="w-5 h-5 mr-2" />
          Stay Updated
        </h3>
        <p className="text-blue-100 text-sm mb-4">
          Get the latest campus news delivered to your inbox weekly.
        </p>
        <div className="space-y-2">
          <input
            type="email"
            placeholder="Your email address"
            className="w-full px-3 py-2 rounded-lg text-gray-900 text-sm focus:ring-2 focus:ring-blue-300"
          />
          <button className="w-full bg-white text-blue-600 py-2 rounded-lg hover:bg-gray-100 transition-colors text-sm font-semibold">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
