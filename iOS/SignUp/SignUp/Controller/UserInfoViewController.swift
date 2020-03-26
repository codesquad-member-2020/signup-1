//
//  UserInfoViewController.swift
//  SignUp
//
//  Created by Keunna Lee on 2020/03/23.
//  Copyright © 2020 dev-Lena. All rights reserved.
//

import UIKit

class UserInfoViewController: UIViewController {
    let idTextFieldDelegate = IDTextFieldDelegate()

    @IBOutlet weak var idTextField: UITextField!
    override func viewDidLoad() {
        super.viewDidLoad()
        idTextField.delegate = idTextFieldDelegate
    }
}

