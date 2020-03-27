//
//  TextField.swift
//  SignUp
//
//  Created by Keunna Lee on 2020/03/26.
//  Copyright © 2020 dev-Lena. All rights reserved.
//

import UIKit
class IDTextField: UITextField {
    
    enum States {
        case valid, invalid, unselected
    }
    
    override init(frame: CGRect) {
        super.init(frame: frame)
    }

    required init?(coder: NSCoder) {
        super.init(coder: coder)
    }
    
    func changeBorder(state: States) {
        switch state {
        case .invalid:
            self.layer.borderWidth = 1
            self.layer.borderColor = UIColor.red.cgColor
        case .valid:
            self.layer.borderWidth = 1
            self.layer.borderColor = UIColor.green.cgColor
        case .unselected:
            self.layer.borderWidth = 1
            self.layer.borderColor = UIColor.lightGray.cgColor
        }
    }
}

