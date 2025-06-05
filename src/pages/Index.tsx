
import Header from "@/components/Header";
import NewsCard from "@/components/NewsCard";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

const featuredNews = {
  id: 1,
  title: "New Computer Science Program Launches This Fall",
  excerpt: "The university announces a groundbreaking new computer science program focused on artificial intelligence and machine learning, preparing students for the future of technology.",
  image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop",
  category: "Academic",
  date: "2024-06-03",
  author: "Dr. Sarah Johnson",
  readTime: "5 min read"
};

const newsArticles = [
  {
    id: 2,
    title: "Student Research Team Wins National Competition",
    excerpt: "A group of undergraduate students from the engineering department has won first place in the national robotics competition.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=250&fit=crop",
    category: "Student Life",
    date: "2024-06-02",
    author: "Mike Chen",
    readTime: "3 min read"
  },
  {
    id: 3,
    title: "New Library Wing Opens to Students",
    excerpt: "The state-of-the-art library extension features modern study spaces, collaborative areas, and advanced technology resources.",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=250&fit=crop",
    category: "Campus News",
    date: "2024-06-01",
    author: "Emily Rodriguez",
    readTime: "4 min read"
  },
  {
    id: 4,
    title: "International Exchange Program Expands",
    excerpt: "Students now have opportunities to study abroad in 15 new partner universities across Europe and Asia.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=250&fit=crop",
    category: "International",
    date: "2024-05-31",
    author: "Prof. David Kim",
    readTime: "6 min read"
  },
  {
    id: 5,
    title: "Campus Sustainability Initiative Launched",
    excerpt: "The college introduces new green policies and renewable energy systems to achieve carbon neutrality by 2030.",
    image: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=400&h=250&fit=crop",
    category: "Environment",
    date: "2024-05-30",
    author: "Lisa Thompson",
    readTime: "4 min read"
  },
  {
    id: 6,
    title: "Alumni Success Stories: Tech Entrepreneurs",
    excerpt: "Recent graduates share their journey from classroom to successful tech startups, inspiring current students.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=250&fit=crop",
    category: "Alumni",
    date: "2024-05-29",
    author: "John Anderson",
    readTime: "7 min read"
  },
  {
    id: 7,
    title: "Sports Championship Victory Celebration",
    excerpt: "The college basketball team brings home the regional championship trophy after an outstanding season.",
    image: "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?w=400&h=250&fit=crop",
    category: "Sports",
    date: "2024-05-28",
    author: "Coach Williams",
    readTime: "3 min read"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Campus News & Updates
          </h1>
          <p className="text-xl md:text-2xl text-blue-100">
            Stay informed with the latest news, events, and achievements from our academic community
          </p>
        </div>
      </section>

      {/* Breaking News Banner */}
      <div className="bg-red-600 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center">
            <span className="bg-white text-red-600 px-3 py-1 rounded text-sm font-bold mr-4">
              BREAKING
            </span>
            <p className="text-sm md:text-base">
              Registration for Fall 2024 semester begins Monday, June 10th
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Featured Article */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Featured Story</h2>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative">
                  <img
                    src={featuredNews.image}
                    alt={featuredNews.title}
                    className="w-full h-64 md:h-80 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {featuredNews.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 hover:text-blue-600 cursor-pointer">
                    {featuredNews.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-lg leading-relaxed">
                    {featuredNews.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-4">
                      <span>By {featuredNews.author}</span>
                      <span>{featuredNews.date}</span>
                    </div>
                    <span>{featuredNews.readTime}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Latest News Grid */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Latest News</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {newsArticles.map((article) => (
                  <NewsCard key={article.id} article={article} />
                ))}
              </div>
            </div>

            {/* Load More Button */}
            <div className="text-center">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold">
                Load More Articles
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 mt-8 lg:mt-0">
            <Sidebar />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Index;
