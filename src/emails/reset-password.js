/** @format */

/**
 *
 * @param {string} userId
 * @param {string} token
 * @returns {string}
 */
exports.resetPasswordTemplate = (userId, token) => {
  const resetLink = `${process.env.FRONT_END_BASE_URL}/auth/password-reset/${userId}/${token}`;
  return `
    <html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="x-apple-disable-message-reformatting" />
        <title></title>
        <style>
          table,
          td,
          div,
          h1,
          p {
            font-family: Arial, sans-serif;
          }
        </style>
      </head>
      <body style="margin: 0; padding: 0">
        <table
          role="presentation"
          style="width: 100%; border-collapse: collapse; border: 0; border-spacing: 0; background: #ffffff"
        >
          <tr>
            <td align="center" style="padding: 0">
              <table
                role="presentation"
                style="
                  width: 602px;
                  border-collapse: collapse;
                  border: 1px solid #cccccc;
                  border-spacing: 0;
                  text-align: left;
                "
              >
                <tr>
                  <td align="center" style="padding: 40px 0 30px 0; background: #70bbd9">
                    <img
                      src="https://cbie.ca/wp-content/uploads/2018/10/pdf-icon-round.png"
                      alt=""
                      width="150"
                      style="height: auto; display: block"
                    />
                  </td>
                </tr>
                <tr>
                  <td style="padding: 36px 30px 42px 30px">
                    <table role="presentation" style="width: 100%; border-collapse: collapse; border: 0; border-spacing: 0">
                      <tr>
                        <td style="padding: 0 0 36px 0; color: #153643">
                          <h1 style="font-size: 24px; margin: 0 0 20px 0; font-family: Arial, sans-serif">Team Nova reset password request:</h1>
                          <p style="margin: 0 0 12px 0; font-size: 16px; line-height: 24px; font-family: Arial, sans-serif">
                            Your link to reset password: <a href='${resetLink}'>${resetLink}</a>.
                          </p>
                          <p style="margin: 0; font-size: 16px; line-height: 24px; font-family: Arial, sans-serif">
                            Regards:
                            <a href="http://www.example.com" style="color: #ee4c50; text-decoration: underline"
                              >Team Nova</a
                            >
                          </p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 30px; background: #ee4c50">
                    <table
                      role="presentation"
                      style="
                        width: 100%;
                        border-collapse: collapse;
                        border: 0;
                        border-spacing: 0;
                        font-size: 9px;
                        font-family: Arial, sans-serif;
                      "
                    >
                      <tr>
                        <td style="padding: 0; width: 50%" align="left">
                          <p
                            style="
                              margin: 0;
                              font-size: 14px;
                              line-height: 16px;
                              font-family: Arial, sans-serif;
                              color: #ffffff;
                            "
                          >
                            Copyrights &copy; Team Nova 2023<br /><a
                              href="http://www.example.com"
                              style="color: #ffffff; text-decoration: underline"
                              >Company Link</a
                            >
                          </p>
                        </td>
                        <td style="padding: 0; width: 50%" align="right">
                          <table role="presentation" style="border-collapse: collapse; border: 0; border-spacing: 0">
                            <tr>
                              <td style="padding: 0 0 0 10px; width: 38px">
                                <a href="http://www.twitter.com/" style="color: #ffffff"
                                  ><img
                                    src="https://assets.codepen.io/210284/tw_1.png"
                                    alt="Twitter"
                                    width="38"
                                    style="height: auto; display: block; border: 0"
                                /></a>
                              </td>
                              <td style="padding: 0 0 0 10px; width: 38px">
                                <a href="http://www.facebook.com/" style="color: #ffffff"
                                  ><img
                                    src="https://assets.codepen.io/210284/fb_1.png"
                                    alt="Facebook"
                                    width="38"
                                    style="height: auto; display: block; border: 0"
                                /></a>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>`;
};
