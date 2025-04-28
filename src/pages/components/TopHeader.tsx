
const TopHeader = () => {
  return (
    <section className="bg-gray-950 h-12 flex items-center justify-center text-sm">
      <div className="flex items-center justify-center gap-4 container md:flex-row md:justify-end">
        <p className="hidden text-gray-50 text-center mx-auto md:block">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! 
          <strong className="ml-4">Shop Now</strong>
        </p>
        <select className="flex items-center gap-2 text-gray-50 outline-0 text-sm">
          <option value="">English</option>
          <option value="">Hausa</option>
        </select>
      </div>
    </section>
  )
}

export default TopHeader