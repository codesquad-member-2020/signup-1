//
//  UserInfo.swift
//  SignUp
//
//  Created by Keunna Lee on 2020/03/26.
//  Copyright © 2020 dev-Lena. All rights reserved.
//

import Foundation

struct Response: Codable {
    let results: [UserInfo]
}

struct UserInfo: Codable {
    let userId: String
    let password: String
    let name: String
    let birthday: String
    let gender: String
    let email: String
    let phoneNumber: String
}

struct Validation: Codable {
    let valid: Bool
}
