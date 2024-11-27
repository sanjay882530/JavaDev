import React from 'react';
import './Home.css';
function Home() {
  return (
    <div className='home-table'>
      <table  class="md:table-fixed">
  <tr>
                  <td ><p>Whether you are working on a new cutting edge app or simply ramping up on new technology, Java documentation has all the information you need to make your project a smashing success. Use the rich set of code samples, tutorials, developer guides, API documentation, and more to quickly develop your prototype and scale it up to a real world application.</p>
                      <h1 className='text-xl font-bold'>Java Platform, Standard Edition (Java SE)</h1>
                      <span>Java SE lets you develop and deploy Java applications on desktops and servers. Java SE and component technologies offer the rich user interface, performance, versatility, portability, and security that today's applications require.</span>
                     </td>
                  <td >
                  <img src="home-icon.png" alt="student learing"/>
                      </td>
  </tr>
</table>
    </div>
  )
}

export default Home
