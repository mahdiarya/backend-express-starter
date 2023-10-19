import otp from 'otp-generator';
import config from '../../configs/app.config';

const generateOTP = (): string => {
  return otp.generate(config.opt.length, {
    upperCaseAlphabets: config.opt.upper_case_alphabets,
    lowerCaseAlphabets: config.opt.lower_case_alphabets,
    specialChars: config.opt.special_chars,
  });
};

export const optHelpers = { generateOTP };