import React from 'react'
import Image from 'next/image'
import Card from '../customs/Card'
import lfiLogo from '../../public/assets/images/LFILogo1.png'
import ethlogo from '../../public/assets/images/eth.png'

interface HeaderProps {
    checkWallet?: () => boolean;
    isDarkMode?: boolean
}

const Header: React.FC<HeaderProps> = () => {
    return (
        <>
        <Card height={5}  width="5/6" rounded="no" stack="row" j="evenly" className="absolute bg-transparent">
                <div className="justify-self-start self-start">
                    <Image src={lfiLogo} alt="some text" width={20} height={20}/>
                </div>
                <div>
                    <span>
                        <Image src={ethlogo} alt="Ethereum Logo" width={20} height={20} />
                        <span>Some texts </span>
                    </span>
                    <button>Connect Wallet</button>
                </div>
                <div>|||</div>
        </Card>
        </>
    )
}

export default Header
