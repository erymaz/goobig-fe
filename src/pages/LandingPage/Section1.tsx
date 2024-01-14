import tw from 'twin.macro';
export const Section1 = () => {

  return (
    <>
      <div className='desktop'>
        <div tw='bg-[#FBF8FB]'>
          <div tw='flex justify-center'>
            <div tw='w-[136px]'></div>
            <div tw='pr-[65px]'>
              <div tw='ml-auto w-[513px] relative mt-[102px]'>
                <div tw='font-bold w-[457px] text-[64px] leading-[80px] text-[#191819]'>Greater value for NFTs</div>
                <div tw='mt-[14px] w-[513px] font-normal text-lg leading-[27px] text-[#4B494C]'>
                  Goobig is the most innovative NFT marketplace designed to provide greater options, liquidity and access for NFTs.
                </div>
                <div tw='mt-[30px] flex'>
                  <div tw='w-[180px] h-[50px] bg-[#5204A8] rounded-lg flex justify-center items-center'>
                    <div tw='text-white font-semibold text-base cursor-pointer select-none'>Explore</div>
                  </div>
                  <div tw='w-[180px] h-[50px] rounded-lg border-[1px] border-[#5204A8] flex justify-center items-center ml-5'>
                    <div tw='font-bold text-base text-[#5204A8] cursor-pointer select-none'>List your NFT</div>
                  </div>
                </div>

                <div tw='mt-[46px] text-[#191819] font-semibold text-xs leading-[18px]'>
                  Our Partners:
                </div>
                <div tw='flex items-center mt-[15px]'>
                  <div tw='w-[82px] h-[25px]' style={{background: 'url("assets/png/chainlink_blue.png")'}}></div>
                  <div tw='w-[87px] h-[19px] ml-[30px]' style={{background: 'url("assets/png/polygon_blue.png")'}}></div>
                </div>
              </div>
            </div>
            <div tw='relative h-[631px]'>
              <div tw='w-[648px] h-[550px] mt-[56px] bg-no-repeat' style={{background: 'url("assets/png/bk00.png")'}}></div>
              <div tw='absolute top-[186px] left-[444px]'>
                <div tw='flex flex-col items-center'>
                  <div tw='w-[58px] h-[58px]' style={{background: 'url("assets/png/arrow.png")'}}></div>
                  <div tw='text-[#5204A8] text-[20px] leading-[30px] font-medium mt-[20px]'>Explore all raffles</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='mobile'>
        <div tw='pt-[72px] bg-[#FBF8FB]'>
          <div tw='font-bold w-full text-[48px] leading-[60px] text-[#191819] text-center px-4'>Greater value for NFTs</div>
          <div tw='w-full text-[14px] text-[#191819] text-center pt-3 px-8'>
            The most innovative NFT marketplace designed to provide greater options, liquidity and access for NFTs.
          </div>
          <div tw='mt-5 flex justify-center'>
            <div tw='w-[130px] h-[41px] bg-[#5204A8] rounded-lg flex justify-center items-center'>
              <div tw='text-white font-semibold text-base cursor-pointer select-none'>Explore</div>
            </div>
            <div tw='w-[130px] h-[41px] rounded-lg border-[1px] border-[#5204A8] flex justify-center items-center ml-5'>
              <div tw='font-bold text-base text-[#5204A8] cursor-pointer select-none'>List your NFT</div>
            </div>
          </div>
          <div tw='mt-2 px-4'>
            <img tw='w-full' src="assets/png/bk02.png" />
          </div>
          <div tw='flex justify-center items-center mt-3 pb-[63px]'>
            <div tw='text-[#5204A8] text-[20px] mr-4'>Explore all raffles</div>
            <img tw='w-[44px]' src="assets/png/arrow.png" />
          </div>
        </div>
      </div>
    </>
  )
}