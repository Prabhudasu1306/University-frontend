import React from 'react';
import Coreview from './Coreview.jpg'; // Ensure this path is correct

const CoreValues = () => {
    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h2 style={{ textAlign: 'center', color: '#2c3e50' }}>Core Values</h2>
            <img 
                src={Coreview} 
                alt="University Profile" 
                style={{ display: 'block', margin: '20px auto', maxWidth: '100%', height: 'auto', borderRadius: '10px' }} 
            />
            
            <div style={{ marginTop: '20px', lineHeight: '1.6', color: '#34495e' }}>
                <h3 style={{ color: '#16a085' }}>Integrity</h3>
                <p>We emphasise on high ethical standards in our actions and are committed to being transparent, responsible, and accountable.</p>
                
                <h3 style={{ color: '#16a085' }}>Nobility</h3>
                <p>We inculcate ethical values parallel to the curriculum enrichment to the student community, so that they outstand amongst their peers irrespective of the environment in which they are placed.</p>
                
                <h3 style={{ color: '#16a085' }}>Sustainability</h3>
                <p>We develop, practise, and emphasize protocols in academics and research enabling ourselves to be competitive, ensuring environmental and social sustainability.</p>
                
                <h3 style={{ color: '#16a085' }}>Partnership and Collaboration</h3>
                <p>We encourage academic and research partnerships with organisations and universities at National and International levels. We value and applaud the relationships we have with our partners.</p>
                
                <h3 style={{ color: '#16a085' }}>Inclusion and Diversity</h3>
                <p>
                    We are committed to facilitating diverse student and faculty culture and encourage multi-cultural learning in the University. 
                    We provide opportunities to work, learn, and embrace the diversity of every individual irrespective of race, gender, religion, nationality, 
                    age, social background, physical ability, and mental competence.
                </p>
                
                <h3 style={{ color: '#16a085' }}>Responsibility</h3>
                <p>
                    We believe in education for all. We take pride in owning responsibility and commitment towards society by supporting the education 
                    of students from rural, economically backward communities, differently abled individuals, and acid attack victims with full financial assistance.
                </p>
                
                <h3 style={{ color: '#16a085' }}>Excellence</h3>
                <p>
                    We focus on excelling in all our academic and research activities, ensure the best academic quality in our programmes, encourage 
                    innovations, and remain receptive to the ever-changing needs of our stakeholders.
                </p>
            </div>
        </div>
    );
};

export default CoreValues;
