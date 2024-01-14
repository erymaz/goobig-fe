import tw from 'twin.macro';
import { ReactComponent as ETH } from 'assets/svg/eth.svg';
import { ReactComponent as Chainlink } from 'assets/svg/chainlink.svg';
export const Section4 = () => {
  return (
    <>
      <div className="desktop">
        <div tw="pt-[78px] flex flex-col items-center bg-[#FBF8FF]">
          <div tw='font-bold text-5xl leading-[130%] text-[#191819]'>
            Raffle your NFT
          </div>
          <div tw='font-normal text-xl leading-[30px] text-[#5204A8]'>
            Sell higher and faster · Buy cheaper
          </div>
          <div tw='mt-[80px] flex justify-between w-[1078px]' style={{background: 'url("assets/png/eth_01.png") no-repeat center'}}>
            <div tw='shadow-[0_0_26px_-4px_rgba(82,4,168,0.25)] rounded-[9px]'>
              <div tw='w-[200px] h-[193px]' style={{background: 'url("assets/png/raffle.png")'}}>
              </div>
              <div tw='h-[65px] bg-white rounded-[9px] flex justify-center items-center leading-[21px] text-[18px]'>
                <div tw='flex items-center'>
                  <div tw='text-[#191819] font-medium text-sm leading-[21px]'>
                    Listed price:
                  </div>
                  <ETH tw='ml-[25px]'/>
                  <div tw='font-medium text-2xl leading-[36px] ml-[6px] text-[#191819]'>10
                  </div>
                </div>
              </div>
            </div>
            <div tw='flex flex-col items-center mt-[9px]'>
              <div tw='flex justify-center items-center font-normal text-[12px] leading-[18px]'>
                <div tw='text-[#31066A] w-[100px] text-right'>Powered by</div>
                <Chainlink tw='ml-2 mr-2' />
                <div tw='text-[#375BD2] w-[100px]'>Chainlink</div>
              </div>
              <div tw='mt-[6px] w-[113.6px] h-[161.18px] flex justify-center text-center' style={{background: 'url("assets/png/chainlink.png")'}}>
                <div tw='text-white font-extrabold w-[90px] h-[71px] leading-[21px] pt-[64px]'>
                  Random winner is selected
                </div>
              </div>
              <div tw='mt-[36px] font-normal text-[16px] text-[#272727]'>
                100 tickets issued for <span tw='font-semibold'>(0.1 ETH)</span> each
              </div>
            </div>
            <div tw='shadow-[0_0_26px_-4px_rgba(82,4,168,0.25)] rounded-[9px]'>
              <div tw='w-[200px] h-[193px]' style={{background: 'url("assets/png/raffle.png")'}}>
              </div>
              <div tw='h-[65px] bg-white rounded-[9px] flex justify-center items-center leading-[21px] text-[18px]'>
                <div tw='flex items-center'>
                  <div tw='text-[#191819] font-medium text-sm leading-[21px]'>
                    Winner pays
                  </div>
                  <ETH tw='ml-[12px]'/>
                  <div tw='font-medium text-2xl leading-[36px] ml-[6px] text-[#191819]'>0.1
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div tw='mt-[31px] flex justify-center pb-[117px]'>
            <div tw='w-[190px] h-[50px] bg-[#5204A8] rounded-[4px] flex justify-center items-center'>
              <div tw='text-white font-semibold text-base cursor-pointer'>List a raffle</div>
            </div>
          </div>
        </div>
      </div>
      <div className="mobile">
        <div tw="flex flex-col items-center pt-[78px] pb-[75px] bg-[#FBF8FF] text-center">
          <div tw='font-bold text-4xl leading-[130%] text-[#191819]'>
            Raffle your NFT
          </div>
          <div tw='w-64 font-normal text-xl leading-[30px] mt-4 text-[#5204A8]'>
            Sell higher and faster · Buy cheaper
          </div>
          <div tw='flex justify-center items-center font-normal text-[12px] leading-[18px] mt-10'>
            <div tw='text-[#31066A] w-[100px] text-right'>Powered by</div>
            <Chainlink tw='ml-2 mr-2' />
            <div tw='text-[#375BD2] w-[100px]'>Chainlink</div>
          </div>
          <div tw='shadow-[0_0_26px_-4px_rgba(82,4,168,0.25)] rounded-[9px] mt-7'>
            <img tw='w-[250px]' src="assets/png/raffle.png" />
            <div tw='h-[65px] bg-white rounded-[9px] flex justify-center items-center leading-[21px] text-[18px]'>
              <div tw='flex items-center'>
                <div tw='text-[#191819] font-medium text-sm leading-[21px]'>
                  Seller lists for:
                </div>
                <ETH tw='ml-[25px]'/>
                <div tw='font-medium text-2xl leading-[36px] ml-[6px] text-[#191819]'>10
                </div>
              </div>
            </div>
          </div>
          <div tw="w-52 pl-1 pr-2 bg-[#F5EFFC]">
            <img tw="w-full" src="assets/png/eth_02.png" />
          </div>
          <div tw='shadow-[0_0_26px_-4px_rgba(82,4,168,0.25)] rounded-[9px] mt-[-5px]'>
            <img tw='w-[250px]' src="assets/png/raffle.png" />
            <div tw='h-[65px] bg-white rounded-[9px] flex justify-center items-center leading-[21px] text-[18px]'>
              <div tw='flex items-center'>
                <div tw='text-[#191819] font-medium text-sm leading-[21px]'>
                  Winner pays:
                </div>
                <ETH tw='ml-[25px]'/>
                <div tw='font-medium text-2xl leading-[36px] ml-[6px] text-[#191819]'>0.1
                </div>
              </div>
            </div>
          </div>
          <div tw="text-[#4B494C] mt-5">
            100 tickets issued for (0.1 ETH) each
          </div>
          <div tw='mt-[31px] flex justify-center'>
            <div tw='w-[130px] h-[40px] bg-[#5204A8] rounded-[4px] flex justify-center items-center'>
              <div tw='text-white font-semibold text-base cursor-pointer'>List a raffle</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}