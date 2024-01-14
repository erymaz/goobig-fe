import tw from 'twin.macro';
import { useState } from 'react';
import { ReactComponent as Logo } from 'assets/svg/logo.svg';
import { ReactComponent as Bell } from 'assets/svg/bell.svg';
import { ReactComponent as Avatar } from 'assets/svg/avatar.svg';
import WalletConnet from 'components/Modal/WalletConnet';
import { selectUser } from "store/auth/auth.selectors";
import { useDispatch, useSelector } from 'react-redux';
import { addressFormat, addressLongFormat, showNotification } from 'utils/helpers';
import walletIcon from 'assets/images/icon/wallet_white.png';
import SettingModal from 'components/Modal/SettingModal'
import LogoMobile from 'assets/images/icon/goobig_mobile.png';
import BellMobile from 'assets/images/icon/bell_mobile.png';
import MenuMobile from 'assets/images/icon/menu_mobile.png';
import CloseMobile from 'assets/images/icon/close.png';
import ExploreMobile from 'assets/images/icon/Explore_mobile.png';
import SearchMobile from 'assets/images/icon/Search_mobile.png';
import ActivityMobile from 'assets/images/icon/Activity_mobile.png';
import WalletMobile from 'assets/images/icon/Wallet_mobile.png';
import RightArrowMobile from 'assets/images/icon/Right_Arrow_mobile.png';

import { useLocation } from 'react-router-dom';
import { logout } from 'store/auth/auth.actions';

export const HeaderPage = () => {
  const dispatch = useDispatch();
  const [isWalletModalVisible, setIsWalletModalVisible] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isMobileModalVisible, setIsMobileModalVisible] = useState(false);
  const user = useSelector(selectUser);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const goHome = () => {
    window.location.href = '/';
  }

  const goBuyRaffle = () => {
    if (user._id) {
      window.location.href = '/buy/raffles';
    }
  }
  const { pathname } = useLocation();
  const goProfileDashboard = () => {
    window.location.href = `/profile/dashboard`;
  }
  const goProfileDashboardSold = () => {
    window.location.href = `/profile/dashboard/3`;
  }
  const onDisconnet = async () => {
    showNotification('Wallet Disconnected.');
    localStorage.clear();
    logout(dispatch);
  }
  return (
    <>
      {pathname == '/' && <WalletConnet isModalVisible={isWalletModalVisible} handleCancel={() => { setIsWalletModalVisible(false) }} handleOk={() => { setIsWalletModalVisible(false) }} />}
      <SettingModal isModalVisible={isModalVisible} handleOk={handleOk} handleCancel={handleCancel}></SettingModal>
      <div tw='pt-[16px] pb-[16px] pr-[50px] pl-[50px] flex m-auto items-center' className='desktop'>
        <Logo tw='cursor-pointer' onClick={goHome} />
        <div tw='ml-auto text-[#272727] text-base font-medium leading-6 cursor-pointer select-none w-[94px] text-center'
          onClick={goBuyRaffle}
        >Explore</div>
        <Bell tw='ml-[20px]' />
        {user._id ?
          <img alt="metamask" src={user.avatar} tw="ml-[29px] w-11 h-11 rounded-full border-4 border-white cursor-pointer select-none" onClick={showModal} />
          : <Avatar tw='ml-[29px]' />}

        <div tw='ml-[29px] bg-[#5204A8] rounded-[8px] w-[143px] h-[42px] flex justify-center items-center cursor-pointer select-none' onClick={() => { if (!user._id) setIsWalletModalVisible(true) }}>
          {user._id ?
            <>
              <img src={walletIcon} />
              <div tw="ml-[10px] text-white text-base font-medium leading-6" style={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>{addressFormat(user.account)}</div>
            </>
            :
            <div tw='text-white text-base font-medium leading-6'>
              Connect Wallet
            </div>}
        </div>
      </div>
      <div className='mobile' tw='fixed bg-[#FFFFFF] top-0 w-full z-[1000]'>
        <div tw='flex pt-[10px] pb-[10px] pl-[22px] pr-[18px]' style={{ boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.1)' }}>
          <img src={LogoMobile} onClick={goHome} tw='w-[31px] h-[34px]' />
          {user._id ?
            <>
              <img src={BellMobile} tw='ml-auto' />
              {isMobileModalVisible ? <img src={CloseMobile} onClick={() => setIsMobileModalVisible(false)} />
                : <img src={MenuMobile} onClick={() => setIsMobileModalVisible(true)} />}
            </>

            : <div tw='ml-auto bg-[#5204A8] rounded-[8px] w-[88px] h-[36px] flex justify-center items-center cursor-pointer select-none' onClick={() => { if (!user._id) setIsWalletModalVisible(true) }}>
              <div tw='text-white text-[14px] font-medium leading-4'>
                Connect
              </div>
            </div>}
        </div>
      </div>
      {isMobileModalVisible &&
        <div style={{ position: 'fixed', top: 55, height: 'calc(100vh - 55px)', left: 0, right: 0, zIndex: 999, background: 'rgba(0, 0, 0, 0.7)' }}>
          <div tw='h-full ml-auto' style={{ background: '#FFFFFF', width: 'calc(100vw - 50px)' }}>
            <div tw='flex items-center cursor-pointer pt-10 pl-[30px]'>
              <img alt="metamask" src={user.avatar} tw="w-14 h-14 rounded-full border-4 border-white" />
              <div>
                <div tw="flex items-center pl-2.5" style={{ width: "200px" }}>
                  <div tw="text-xl font-bold text-gray-100" style={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>{user.name}</div>
                </div>
                <div tw="flex items-center pl-2.5" style={{ width: "200px" }}>
                  <div tw="text-[12px] font-medium text-[#646166]" style={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>{addressLongFormat(user.account)}</div>
                </div>
              </div>
            </div>
            <div tw='h-[1px] bg-[#E0DCE5] mt-3.5 ml-5 mr-6'></div>
            <div tw='mt-4 flex items-center select-none cursor-pointer' onClick={goBuyRaffle}>
              <img tw='w-9 h-9 ml-5' src={ExploreMobile} />
              <div tw='ml-2.5 text-base font-semibold text-[#191819]'>Explore</div>
              <img tw='w-[27px] h-[27px] ml-auto mr-6' src={RightArrowMobile} />
            </div>
            <div tw='mt-4 flex items-center select-none cursor-pointer'>
              <img tw='w-9 h-9 ml-5' src={SearchMobile} />
              <div tw='ml-2.5 text-base font-semibold text-[#191819]' onClick={goProfileDashboard}>My items</div>
              <img tw='w-[27px] h-[27px] ml-auto mr-6' src={RightArrowMobile} />
            </div>
            <div tw='mt-4 flex items-center select-none cursor-pointer'>
              <img tw='w-9 h-9 ml-5' src={ActivityMobile} />
              <div tw='ml-2.5 text-base font-semibold text-[#191819]' onClick={goProfileDashboardSold}>Activity</div>
              <img tw='w-[27px] h-[27px] ml-auto mr-6' src={RightArrowMobile} />
            </div>
            <div tw='mt-4 flex items-center select-none cursor-pointer'>
              <img tw='w-9 h-9 ml-5' src={WalletMobile} />
              <div tw='ml-2.5 text-base font-semibold text-[#191819]'>My wallet</div>
              <img tw='w-[27px] h-[27px] ml-auto mr-6' src={RightArrowMobile} />
            </div>
            <div>
              <div tw='mt-6 ml-7 mr-6 pt-2.5 pb-2.5 text-sm text-[#5204A8] rounded text-center font-semibold select-none cursor-pointer' style={{ border: '1px solid #5204A8' }} onClick={onDisconnet}>Disconnect</div>
            </div>
          </div>
        </div>}
    </>
  );
}
