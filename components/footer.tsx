/* eslint-disable react/react-in-jsx-scope */

const Footer = () => {
  return (
    <footer className="py-12 h-32 bg-gray-50 border-t">
      <div className="flex justify-between mx-auto max-w-5xl">
        <div className="flex items-center space-x-4">
          <img
            src="/react-bricks-icon.svg"
            alt="React Bricks"
            className="w-8"
          />
          <div className="text-sm tracking-wider uppercase">
            Next.js website starter
          </div>
        </div>
        <div className="text-sm text-gray-500">
          © {new Date().getFullYear()}{' '}
          <a href="https://reactbricks.com" className="hover:text-pink-600">
            React Bricks
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
