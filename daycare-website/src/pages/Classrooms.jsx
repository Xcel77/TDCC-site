import React from 'react';
import Navbar from '../components/Navbar';

const classrooms = [  {
    title: 'Infant Room',
    description:
      'Our Infant Room provides a calm and nurturing environment focusing on sensory development and safe exploration for children aged 0-12 months.',
    image: '/images/Pictures/Classrooms/infant_room_1.jpeg',
  },
  {
    title: 'Toddler 1',
    description:
      'Toddler 1 encourages early language and motor skills development through play-based learning for children 12-24 months.',
    image: '/images/Pictures/Classrooms/toddler_one.jpeg',
  },
  {
    title: 'Toddler 2',
    description:
      'Toddler 2 focuses on socialization and self-help skills, preparing 2-year-olds for preschool readiness.',
    image: '/images/Pictures/Classrooms/toddler_two.jpeg',
  },
  {
    title: 'Toddler 3',
    description:
      'Our Toddler 3 room deepens creativity, problem solving and group interaction skills for older toddlers.',
    image: '/images/Pictures/Classrooms/toddler_three.jpeg',
  },
  {
    title: 'Preschool',
    description:
      'The Preschool room stimulates early literacy, numeracy, and social-emotional growth in a fun learning environment.',
    image: '/images/Pictures/Classrooms/pre_school_2.jpeg',
  },
  {
    title: 'Pre K',
    description:
      'Pre Kindergarten prepares children for the transition to elementary school with focused curriculum on academics and independence.',
    image: '/images/Pictures/Classrooms/pre_k_1.jpeg',
  },
];

function Classrooms() {
  return (
    <div>
      <Navbar />
      <main
        style={{
          paddingTop: '80px', // space for fixed navbar
          paddingLeft: '20px',
          paddingRight: '20px',
          maxWidth: '900px',
          margin: 'auto',
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
          backgroundColor: '#FDF6E3',
        }}
      >
        {classrooms.map((room, index) => (
          <section
            key={index}
            style={{
              backgroundColor: '#F5CBA7', // peach block from your palette
              borderRadius: '8px',
              display: 'flex',
              overflow: 'hidden',
              marginBottom: '40px',
              boxShadow: '10px 10px 10px rgba(46,64,83,0.1)',
              minHeight: '250px',
            }}
          >
            {/* Left half: title and description */}
            <div
              style={{
                width: '50%',
                padding: '20px',
                color: '#2E4053',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <h2 style={{ margin: '0 0 15px 0' }}>{room.title}</h2>
              <p style={{ margin: 0 }}>{room.description}</p>
            </div>

            {/* Right half: image */}
            <div
              style={{
                width: '50%',
                backgroundImage: `url(${room.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderTopRightRadius: '8px',
                borderBottomRightRadius: '8px',
              }}
              aria-label={`${room.title} image`}
              role="img"
            />
          </section>
        ))}
      </main>
    </div>
  );
}

export default Classrooms;
