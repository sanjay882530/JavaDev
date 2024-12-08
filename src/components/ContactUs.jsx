import React from "react";

const ContactUs = () => {
  return (
    <div className="home-table mt-10">
      <table className="md:table-fixed">
        <tr>
          <td>
            {" "}
            <div>
              <h3 className="font-bold text-lg mb-2">Contact</h3>
              <p className="text-sm">Email: sanjayprasad7293@gmail.com</p>
              <p className="text-sm">Phone: +917033442168</p>
              <p className="text-sm">
                Address: 12B Main Street, Madurdaha, Kolkata 700100
              </p>
            </div>
          </td>
          <td>
            <img src="home-icon.png" alt="student learing" />
          </td>
        </tr>
      </table>
    </div>
  );
};

export default ContactUs;
