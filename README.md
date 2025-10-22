# DEX UI

A modern React-based dashboard application for educational institution management, featuring fee tracking, authentication, and data visualization.

## 🚀 Features

- **Fee Management Dashboard**: Comprehensive fee tracking with class-wise breakdowns
- **Interactive Charts**: Visual representation of fee data using Chart.js
- **Authentication**: Secure login with Auth0 integration
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Real-time Data**: Live fee status updates and KPI tracking
- **Expandable Views**: Collapsible dashboard components for better UX

## 🛠️ Tech Stack

- **Frontend**: React 19.1.0 with TypeScript
- **Build Tool**: Vite 7.0.4
- **Styling**: Tailwind CSS 4.1.11
- **Charts**: Chart.js 4.5.0 with react-chartjs-2
- **Authentication**: Auth0 React SDK
- **Routing**: React Router 7.7.0
- **Development**: ESLint, TypeScript, Vite plugins

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd dex-ui
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**

   This project uses OAuth as Authentication layer and as such is setup to use Auth0.

   Create a `.env` file in the root directory:
   ```env
   VITE_AUTH0_DOMAIN=your-auth0-domain
   VITE_AUTH0_CLIENTID=your-auth0-client-id
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Card/           # Card component with size variants
│   ├── FeesView/       # Fee management dashboard
│   ├── UserAvatar/     # User profile components
│   └── CollapsibleHeader/
├── pages/              # Application pages
│   ├── home/          # Main dashboard
│   ├── login/         # Authentication page
│   └── layout/        # App layout wrapper
├── hooks/              # Custom React hooks
├── themes/             # Theme configuration
├── utils/              # Utility functions
└── DATA_MOCKS/         # Mock data for development
```

## 🎯 Key Components

### FeesView
- **Expanded View**: Full dashboard with charts, tables, and filtering
- **Collapsed View**: Compact summary with key metrics
- **KPI Strip**: Real-time fee completion statistics
- **Interactive Charts**: Bar charts showing paid vs pending fees

### Card Component
- Flexible sizing system (S, M, L, XL, FULL)
- Customizable styling with Tailwind CSS
- Responsive design patterns

### Authentication
- Auth0 integration for secure user management
- Protected routes and user state management
- Custom authentication hooks

## 📊 Data Management

The application uses mock data for development and testing:

- **Class-wise Fee Data**: Structured data for different classes
- **Fee Status Tracking**: Paid and pending fee amounts
- **Completion Metrics**: Percentage calculations and KPI generation

## 🚀 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint for code quality

## 🔧 Development

### Adding New Features
1. Create components in the `src/components/` directory
2. Add pages to `src/pages/`
3. Use the existing Card component for consistent styling
4. Follow TypeScript patterns for type safety

### Styling Guidelines
- Use Tailwind CSS classes for styling
- Follow the existing color scheme and spacing patterns
- Ensure responsive design for mobile and desktop

### Data Integration
- Replace mock data in `DATA_MOCKS/` with real API calls
- Update the `transformData` utility for new data structures
- Maintain TypeScript interfaces for type safety

## 🔐 Environment Setup

### Auth0 Configuration
1. Create an Auth0 account and application
2. Configure the domain and client ID in environment variables
3. Set up the redirect URI for your application
4. Configure user permissions and roles as needed

### SSL Development
The project includes `vite-plugin-mkcert` for local HTTPS development, ensuring secure authentication flows.

## 📱 Responsive Design

The application is built with a mobile-first approach:
- Responsive grid layouts
- Collapsible components for smaller screens
- Touch-friendly interface elements
- Optimized chart rendering for different screen sizes

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📄 License

This project is private and proprietary.

## 🆘 Support

For questions or issues, please contact the development team or create an issue in the repository.
