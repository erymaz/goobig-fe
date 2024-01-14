import tw from 'twin.macro';
export const FooterPage = () => {
  return (
    <>
      <div className='desktop'>
        <div tw='pt-[91px] pb-[50px] pl-[93px] pr-[93px]'>
          <div tw='flex'>
            <div tw='w-[205px] mr-[16px]'>
              <div tw='text-[#1E1E1E] text-base font-semibold select-none'>Company</div>
              <div tw='mt-[28px] font-normal leading-[160%] text-[#989898] text-sm cursor-pointer select-none'>About Us</div>
              <div tw='mt-[14px] font-normal leading-[160%] text-[#989898] text-sm cursor-pointer select-none'>Blog</div>
              <div tw='mt-[14px] font-normal leading-[160%] text-[#989898] text-sm cursor-pointer select-none'>Contact Us</div>
            </div>
            <div tw='w-[205px] mr-[16px]'>
              <div tw='text-[#1E1E1E] text-base font-semibold select-none'>Support</div>
              <div tw='mt-[28px] font-normal leading-[160%] text-[#989898] text-sm cursor-pointer select-none'>Help Center</div>
            </div>
            <div tw='w-[205px] mr-[16px]'>
              <div tw='text-[#1E1E1E] text-base font-semibold select-none'>Legal</div>
              <div tw='mt-[28px] font-normal leading-[160%] text-[#989898] text-sm cursor-pointer select-none'>Cookies Policy</div>
              <div tw='mt-[14px] font-normal leading-[160%] text-[#989898] text-sm'>Privacy Policy</div>
              <div tw='mt-[14px] font-normal leading-[160%] text-[#989898] text-sm cursor-pointer select-none'>Terms of Service</div>
            </div>
            <div tw='w-[205px] mr-[16px]'>
              <div tw='text-[#1E1E1E] text-base font-semibold select-none'>How it works</div>
              <div tw='mt-[28px] font-normal leading-[160%] text-[#989898] text-sm cursor-pointer select-none'>Whitepaper</div>
              <div tw='mt-[14px] font-normal leading-[160%] text-[#989898] text-sm cursor-pointer select-none'>Smart Contract</div>
              <div tw='mt-[14px] font-normal leading-[160%] text-[#989898] text-sm'>Goo Token</div>
            </div>
            <div tw='w-[258px] ml-auto'>
              <div tw='text-[#1E1E1E] font-semibold text-base select-none'>Follow us</div>
              <div tw='flex mt-[34px]'>
                <div tw='w-[42px] h-[42px] cursor-pointer select-none' style={{ background: 'url("/assets/png/Twitter.png")' }}></div>
                <div tw='w-[42px] h-[42px] ml-[30px] cursor-pointer select-none' style={{ background: 'url("/assets/png/Instagram.png")' }}></div>
                <div tw='w-[42px] h-[42px] ml-[30px] cursor-pointer select-none' style={{ background: 'url("/assets/png/Medium.png")' }}></div>
                <div tw='w-[42px] h-[42px] ml-[30px] cursor-pointer select-none' style={{ background: 'url("/assets/png/Discord.png")' }}></div>
              </div>
            </div>
          </div>
          <div tw='text-sm font-normal leading-[160%] text-[#171717] mt-[85px]'>© 2022 Goobig | All rights reserved</div>
        </div>
      </div>
      <div className='mobile'>
        <div tw='flex flex-col items-center'>
          <div tw='pt-12 text-2xl text-[#1E1E1E]'>Follow us</div>
          <div tw='flex mt-3'>
            <div tw='w-[42px] h-[42px] cursor-pointer select-none' style={{ background: 'url("/assets/png/Twitter_mobile.png")' }}></div>
            <div tw='w-[42px] h-[42px] ml-[15px] cursor-pointer select-none' style={{ background: 'url("/assets/png/Instagram_mobile.png")' }}></div>
            <div tw='w-[42px] h-[42px] ml-[15px] cursor-pointer select-none' style={{ background: 'url("/assets/png/Medium_mobile.png")' }}></div>
            <div tw='w-[42px] h-[42px] ml-[15px] cursor-pointer select-none' style={{ background: 'url("/assets/png/Discord_mobile.png")' }}></div>
          </div>
          <div tw='text-sm font-normal leading-[160%] text-[#171717] mt-[20px] pb-[35px]'>© 2022 Goobig | All rights reserved</div>
        </div>
      </div>
    </>
  )
}