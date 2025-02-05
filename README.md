# CrimsonCare

# CrimsonCare - Blood Bank Management System

## 📌 Overview

CrimsonCare is a Blood Bank Management System designed to streamline the process of blood donation, storage, and distribution. This system helps hospitals, donors, and recipients manage blood availability efficiently.

## 🚀 Features

- 🔴 **Donor Registration & Management**
- 🏥 **Blood Bank Inventory Tracking**
- 🩸 **Blood Requests & Approvals**
- 📊 **User Dashboard for Admins & Donors**
- 🔍 **Search & Filter Blood Availability**
- 📅 **Appointment Scheduling for Donations**

## 🛠️ Tech Stack

- **Frontend:** React.js, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB / PostgreSQL
- **Authentication:** JWT (JSON Web Tokens)
- **Version Control:** Git & GitHub

## 📂 Project Structure

```
CrimsonCare/
│── client/          # Frontend (React.js)
│── server/          # Backend (Node.js, Express.js)
│── database/        # Database scripts & schemas
│── docs/            # Documentation & API details
│── README.md        # Project documentation
```

## 🚀 Installation & Setup

### Clone the Repository

```bash
git clone https://github.com/somyagupta05/CrimsonCare.git
cd CrimsonCare
```

### Backend Setup

```bash
cd server
npm install
npm start
```

### Frontend Setup

```bash
cd client
npm install
npm start
```

## 🔑 Environment Variables

Create a `.env` file in the `server/` directory and add:

```env
MONGO_URI=mongodb://localhost:27017/crimsoncare
PORT=5000
JWT_SECRET=your_secret_key
```

## 🤝 Contributing

Feel free to fork this repo and submit pull requests. Contributions are welcome!

## 📜 License

This project is licensed under the MIT License.

## 📬 Contact

For any queries, reach out to [Somya Gupta](https://github.com/somyagupta05).
