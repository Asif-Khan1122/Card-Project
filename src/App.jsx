import Card from "./components/Card";

function App() {
  const jobData = [
    {
      brandLogo:
        "https://1000logos.net/wp-content/uploads/2019/06/Apple-Logo.jpg",
      company: "Apple",
      datePosted: "2 days ago",
      post: "Lead iOS Developer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: 180,
      location: "Cupertino, USA",
    },
    {
      brandLogo:
        "https://1000logos.net/wp-content/uploads/2019/06/Google-Logo.jpg",
      company: "Google",
      datePosted: "5 days ago",
      post: "Frontend Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: 160,
      location: "Mountain View, USA",
    },
    {
      brandLogo:
        "https://1000logos.net/wp-content/uploads/2019/06/Microsoft-Logo.jpg",
      company: "Microsoft",
      datePosted: "1 week ago",
      post: "Software Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: 140,
      location: "Seattle, USA",
    },
    {
      brandLogo:
        "https://1000logos.net/wp-content/uploads/2016/10/Amazon-Logo-tumb.png",
      company: "Amazon",
      datePosted: "3 days ago",
      post: "Backend Developer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: 170,
      location: "Bangalore, India",
    },
    {
      brandLogo:
        "https://1000logos.net/wp-content/uploads/2019/06/Netflix-Logo.jpg",
      company: "Netflix",
      datePosted: "2 weeks ago",
      post: "UI/UX Designer",
      tag1: "Contract",
      tag2: "Senior Level",
      pay: 200,
      location: "Los Gatos, USA",
    },
    {
      brandLogo:
        "https://1000logos.net/wp-content/uploads/2016/11/meta-logo-sm.png",
      company: "Meta",
      datePosted: "4 days ago",
      post: "React Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: 165,
      location: "Menlo Park, USA",
    },
    {
      brandLogo:
        "https://1000logos.net/wp-content/uploads/2020/08/Infosys-Logo-tumb.jpg",
      company: "Infosys",
      datePosted: "1 day ago",
      post: "Full Stack Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: 90,
      location: "Pune, India",
    },
    {
      brandLogo:
        "https://1000logos.net/wp-content/uploads/2019/06/Adobe-Log.jpg",
      company: "Adobe",
      datePosted: "5 days ago",
      post: "Creative Designer",
      tag1: "Part Time",
      tag2: "Mid Level",
      pay: 120,
      location: "Noida, India",
    },
    {
      brandLogo:
        "https://1000logos.net/wp-content/uploads/2020/08/Uber-Eats-logo-tumb.jpg",
      company: "Uber",
      datePosted: "3 weeks ago",
      post: "Mobile Developer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: 175,
      location: "Hyderabad, India",
    },
    {
      brandLogo:
        "https://1000logos.net/wp-content/uploads/2021/02/Flipkart-logo-tumb.jpg",
      company: "Flipkart",
      datePosted: "6 days ago",
      post: "Product Manager",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: 150,
      location: "Gurgaon, India",
    },
    {
      brandLogo:
        "https://1000logos.net/wp-content/uploads/2021/02/Flipkart-logo-tumb.jpg",
      company: "Flipkart",
      datePosted: "6 days ago",
      post: "Product Manager",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: 150,
      location: "Gurgaon, India",
    },
    {
      brandLogo:
        "https://1000logos.net/wp-content/uploads/2021/02/Flipkart-logo-tumb.jpg",
      company: "Flipkart",
      datePosted: "6 days ago",
      post: "Product Manager",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: 150,
      location: "Gurgaon, India",
    },
  ];

  return (
    <div className='parent'>
      {jobData.map(function (elum, idx) {
        return (
          <div key={idx}>
            <Card
              company={elum.company}
              post={elum.post}
              tag1={elum.tag1}
              tag2={elum.tag2}
              brandLogo={elum.brandLogo}
              pay={elum.pay}
              location={elum.location}
              datePosted={elum.datePosted}
            />
          </div>
        );
      })}
    </div>
  );
}

export default App;
