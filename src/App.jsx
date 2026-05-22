import Card from "./components/Card";

function App() {
  const jobData = [
    {
      brandLogo: "https://cdn.tickerlogos.com/apple.com",
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
        "https://cdn.brandfetch.io/id6O2oGzv-/theme/dark/symbol.svg?c=1dxbfHSJFAPEGdCLU4o5B",
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
        "https://cdn.brandfetch.io/idsWBrtc_i/w/400/h/400/theme/dark/icon.png?c=1dxbfHSJFAPEGdCLU4o5B",
      company: "Microsoft",
      datePosted: "1 week ago",
      post: "Software Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: 140,
      location: "Seattle, USA",
    },
    {
      brandLogo: "https://cdn.tickerlogos.com/amazon.com",
      company: "Amazon",
      datePosted: "3 days ago",
      post: "Backend Developer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: 170,
      location: "Bangalore, India",
    },
    {
      brandLogo: "https://cdn.tickerlogos.com/netflix.com",
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
        "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg",
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
        "https://upload.wikimedia.org/wikipedia/commons/8/8d/Adobe_Corporate_Logo.png",
      company: "Adobe",
      datePosted: "5 days ago",
      post: "Creative Designer",
      tag1: "Part Time",
      tag2: "Mid Level",
      pay: 120,
      location: "Noida, India",
    },
  ];

  return (
    <div className='parent'>
      {jobData.map(function (elum, idx) {
        return (
          <Card
            key={`${elum.company}-${elum.post}`}
            company={elum.company}
            post={elum.post}
            tag1={elum.tag1}
            tag2={elum.tag2}
            brandLogo={elum.brandLogo}
            pay={elum.pay}
            location={elum.location}
            datePosted={elum.datePosted}
          />
        );
      })}
    </div>
  );
}

export default App;
