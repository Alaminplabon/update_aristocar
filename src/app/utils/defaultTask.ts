import Contents from '../modules/contents/contents.models';
import { USER_ROLE } from '../modules/user/user.constants';
import { User } from '../modules/user/user.models';

export async function defaultTask() {
  // Add your default task here

  // check admin is exist
  const admin = await User.findOne({ role: USER_ROLE?.admin });
  if (!admin) {
    await User.create({
      name: 'hr-admin',
      email: 'hridoychandrapaul.10@gmail.com',
      phoneNumber: '+8801767517978',
      password: '112233',
      role: 'admin',
      verification: {
        otp: '0',
        status: true,
      },
    });
  }

  const content = await Contents.findOne({});
  if (!content) {
    await Contents.create({
      aboutUs: '',
      termsAndConditions: '',
      privacyPolicy: '',
      supports: '',
      faq: '',
    });
  }
}
