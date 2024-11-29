import React from 'react';
import View from './View.jpg'; // Ensure the correct path to your image file

const Overview = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      {/* Image Section */}
      <div style={{ textAlign: 'center', marginBottom: '20px', width: '100%' }}>
        <img 
          src={View} 
          alt="Overview" 
          style={{ maxWidth: '100%', height: 'auto', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }} 
        />
      </div>

      {/* Text Section */}
      <div style={{ textAlign: 'left', maxWidth: '900px' }}>
        <h2 style={{ color: '#2c3e50', marginBottom: '20px' }}>Overview</h2>
        <p style={{ lineHeight: '1.8', color: '#34495e' }}>
          KLN is a prestigious institution that excels in the fields of Engineering, Science, and Technology for more than three successful decades. It offers multi-disciplinary academic programmes in various fields of Engineering, Science, Technology, Law, Dental Science, Pharmacy, Nursing, Management, Arts and Science, and Allied Health Sciences. It is established under Sec.3 of the UGC Act, 1956, and has been Accredited with an ‘A++’ Grade by the National Accreditation and Assessment Council. The Institution has been graded as Category I University by UGC under the UGC (Categorization of Universities (only) for Grant of Graded Autonomy) Regulations, 2018. 
        </p>
        <p style={{ lineHeight: '1.8', color: '#34495e' }}>
          KLN persistently seeks and adopts innovative methods to improve the quality of higher education and is responsive to the changes taking place in the field of education on a global scale. The Institution has a team of dynamic and outstanding faculty, innovative pedagogical practices, state-of-the-art infrastructure, and world-class Research Facilities. This glorious Institution is functioning under the dynamic leadership of Dr. Mariazeena Johnson, Chancellor, Dr. Marie Johnson, President, Mr. J. Arul Selvan Vice President, Ms. Maria Bernadette Tamilarasi, Vice President, and Ms. Maria Catherin Jayapriya Vice President.
        </p>
        <p style={{ lineHeight: '1.8', color: '#34495e' }}>
          KLN has a good presence in rankings and ratings at National and International levels. The Institution has been ranked in the 51st position by the National Institutional Ranking Framework (NIRF), Government of India among the Universities in India for the year 2023 and ranked among the top 100 Universities for eight consecutive years. KLN is ranked among the Top 5 Institutions in the Country for Innovation by the ATAL Ranking of Institution for Innovation Achievements, Govt. of India. Times Higher Education and QS have ranked KLN among the top Institutions worldwide. KLN Institute of Science & Technology has alliances with leading Universities and research establishments at National and International levels.
        </p>
        <p style={{ lineHeight: '1.8', color: '#34495e' }}>
          It is a research-intensive University with world-class laboratories and research facilities and is involved in research in the emerging areas of Science and Technology. KLN has undertaken various sponsored and collaborative R&D projects funded by National and International Organizations. KLN wrote a special page in the history of space research on 22nd June 2016 with the launch of “KLNSAT” in association with ISRO.
        </p>
        <p style={{ lineHeight: '1.8', color: '#34495e' }}>
          KLN has emerged as a leading Institution and achieved excellence in higher education to international standards owing to its research and academic excellence.
        </p>
      </div>
    </div>
  );
};

export default Overview;
