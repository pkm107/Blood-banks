export class BloodBankModel{

    sr_no : number;
    _blood_bank_name: string
            __state: string
            __district: string
            __city: string
            __address: string
            _pincode: string
            __contact_no: string
            _mobile: string
            _helpline: string
            __fax: string
            _email: string
            __website: string
            __nodal_officer_: string
            _contact_nodal_officer: string
            _mobile_nodal_officer: string
            __email_nodal_officer: string
            __qualification_nodal_officer: string
            __category: string
            __blood_component_available: string
            __apheresis: string
            __service_time: string
            __license_: string
            __date_license_obtained: string
            __date_of_renewal: string
            __latitude: string
            __longitude: string
}

export class BBResponse{
    records : BloodBankModel[];
}
