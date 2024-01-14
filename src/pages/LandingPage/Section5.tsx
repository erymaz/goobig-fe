import tw from 'twin.macro';
import {ReactComponent as GPattern} from 'assets/svg/g_pattern.svg';
export const Section5 = () => {
  return (
    <>
      <div className="desktop">
        <div tw='flex pb-[123px]'>
          <div tw='flex-1 pr-4'>
            <div tw='bg-[#983BCE] h-[433px] rounded-tr-[50px] rounded-br-[216.5px]'>
              <div tw='w-[408px] ml-auto mr-[109px]'>
                <div tw='font-bold text-white leading-[50px] text-4xl pt-[73px]'>
                  Earn up to 200% APY with $GOO
                </div>
                <div tw='font-normal text-white leading-[27px] text-lg mt-[24px]'>
                  In addition to staking, you earn $GOO on every transaction you make on GooBig.
                </div>
                <div tw='font-normal text-white leading-[27px] text-lg mt-[22px]'>
                  Pay fees with $GOO<br/>
                  Get your NFTs featured<br/>
                  Get access to pre ICOs
                </div>
              </div>
            </div>
          </div>
          <div tw='flex-1'>
            <div tw='ml-[60px] mt-[67px] relative'>
              <GPattern />
              <div tw='font-bold text-base leading-6 text-white pt-[12px] pb-[12px] pl-[37px] pr-[37px] w-[181px] h-[48px] bg-[#522294] absolute rounded-[4px] top-[124px] left-[208px] cursor-pointer'>
                Start earning
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mobile">
        section5
      </div>
    </>
  )
}