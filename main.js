const colors = ['Tôi cảm thấy lo lắng và căng thẳng khi nghĩ về một kỳ thi sắp tới.', 'Tâm trí tôi trở nên trống rỗng hoặc tôi không thể nhớ lại thông tin quan trọng trong lúc thi.', 'Tôi rất lo lắng về kết quả thi và những hậu quả nếu tôi không đạt điểm cao.', 'Trong kỳ thi, tôi cảm thấy khó tập trung vì những suy nghĩ tiêu cực hoặc lo lắng.', 'Tôi thấy tim mình đập nhanh hoặc tay đổ mồ hôi khi đối mặt với các bài kiểm tra quan trọng.', 'Tôi cảm thấy dạ dày khó chịu, buồn nôn hoặc có các triệu chứng thể chất khác do lo lắng khi thi.', 'Tôi gặp khó khăn trong việc ngủ ngon vào đêm trước kỳ thi.', 'Tôi tin rằng mình sẽ làm bài thi kém, ngay cả khi tôi đã chuẩn bị kỹ lưỡng.', 'Tôi thường so sánh bản thân với các bạn học khác và cảm thấy mình không đủ giỏi.', 'Áp lực từ bản thân hoặc từ người khác về kết quả thi khiến tôi rất căng thẳng.', 'Tôi có xu hướng trì hoãn việc học hoặc chuẩn bị cho kỳ thi vì cảm giác lo sợ', 'Tôi cảm thấy bất lực hoặc tuyệt vọng khi nghĩ đến việc phải đối mặt với một kỳ thi khó', 'Tôi khó có thể thư giãn hoặc bình tĩnh trước và trong suốt kỳ thi', 'Những suy nghĩ tiêu cực về khả năng của mình xuất hiện thường xuyên khi tôi làm bài thi', 'Cơ thể tôi cảm thấy căng cứng hoặc đau nhức do mức độ lo lắng cao', 'Tôi cảm thấy choáng váng hoặc chóng mặt trong môi trường thi cử', 'Hô hấp của tôi trở nên nhanh và nông hoặc tôi cảm thấy khó thở khi lo lắng về thi cử', 'Tôi lo lắng về việc không đủ thời gian để hoàn thành bài thi, dù tôi đã cố gắng làm nhanh', 'Tôi thường xuyên kiểm tra lại câu trả lời nhiều lần vì không tin tưởng vào bản thân', 'Tôi cảm thấy mình không thể kiểm soát được cảm xúc lo lắng của mình khi thi', 'Tôi có xu hướng né tránh các tình huống thi cử hoặc tìm lý do để không phải tham gia', 'Sau khi thi xong, tôi vẫn tiếp tục lo lắng về kết quả trong một thời gian dài', 'Lo lắng khi thi cử ảnh hưởng tiêu cực đến khả năng thể hiện kiến thức thực sự của tôi', 'Khi tôi làm bài thi không tốt, tôi có những ý nghĩ rất tiêu cực về giá trị bản thân', 'Mức độ lo lắng khiến tôi không thể đọc hiểu hoặc phân tích đúng câu hỏi thi', 'Tôi có xu hướng hoảng sợ hoặc bị \'đơ\' khi gặp phải một câu hỏi quá khó trong đề thi', 'Lo lắng khi thi cử khiến tôi cảm thấy kiệt sức về mặt tinh thần và thể chất sau đó'];
const anxietyDescriptions = [
  'Bạn gần như không trải qua các triệu chứng lo âu khi thi cử. Bạn có khả năng quản lý căng thẳng tốt, tự tin vào năng lực của mình và xem các kỳ thi như một thử thách có thể vượt qua.',
  'Bạn có thể cảm thấy một chút lo lắng nhẹ nhàng trước kỳ thi, nhưng điều này không ảnh hưởng đáng kể đến hiệu suất làm bài. Đây là mức độ căng thẳng bình thường và thậm chí có thể giúp bạn tập trung hơn.',
  'Bạn thỉnh thoảng trải nghiệm các triệu chứng lo âu, có thể ảnh hưởng nhẹ đến sự tập trung hoặc hiệu suất trong một số kỳ thi. Bạn nên bắt đầu tìm hiểu và áp dụng một số kỹ thuật thư giãn đơn giản.',
  'Bạn thường xuyên cảm thấy lo lắng đáng kể. Các triệu chứng này có thể gây ảnh hưởng đến khả năng học tập, chuẩn bị và làm bài thi của bạn. Việc chủ động tìm kiếm các chiến lược đối phó là cần thiết.',
  'Bạn có thể gặp khó khăn trong việc kiểm soát cảm xúc và suy nghĩ tiêu cực. Hãy cân nhắc chia sẻ với người thân hoặc bạn bè.',
  'Bạn đang trải qua mức độ lo âu rất cao, gây ra căng thẳng và khó chịu nghiêm trọng. Các triệu chứng này có thể ảnh hưởng đến sức khỏe tinh thần và thể chất. Việc tìm kiếm sự hỗ trợ từ chuyên gia (như chuyên viên tư vấn tâm lý) là rất quan trọng.',
  'Bạn đang ở mức độ lo âu cực kỳ nghiêm trọng, có thể dẫn đến hoảng loạn hoặc tê liệt trong kỳ thi. Đây là dấu hiệu rõ ràng cho thấy bạn cần sự can thiệp và hỗ trợ chuyên nghiệp khẩn cấp để bảo vệ sức khỏe và kết quả học tập của mình.'
];
const anxietyRanges = [
  '27 - 40',
  '41 - 54',
  '55 - 72',
  '73 - 90',
  '91 - 108',
  '109 - 126',
  '127 - 135'
];

const anxietyLevels = [
  'Không lo âu',
  'Lo âu nhưng không đáng kể',
  'Lo âu vừa',
  'Lo âu',
  'Lo âu đáng kể',
  'Lo âu cần hỗ trợ',
  'Lo âu tiêu cực'
];
function ShowPageId(pageId) {
  // Ẩn tất cả các section
  document.querySelectorAll('section').forEach(sec => {
    sec.style.display = 'none';
  });

  // Hiện section được chọn
  document.getElementById(pageId).style.display = 'block';
}

function getRandomItem(arr) {
  const index = Math.floor(Math.random() * arr.length);
  const item = arr[index];
  arr.splice(index, 1); // loại phần tử đã dùng
  return item;
}


function createParagraph(text) {
  const p = document.createElement('p');
  p.textContent = text;
  p.style.textAlign = 'center';
  return p;
}

function createButtons() {
  const wrapper = document.createElement('div');
  wrapper.classList.add('group');
  wrapper.style.display = 'flex';
  wrapper.style.alignItems = 'center';
  wrapper.style.justifyContent = 'space-between';
  wrapper.style.gap = '20px';
  if (window.innerWidth <= 768) {
    wrapper.style.width = '100%';
    wrapper.style.gap = '0';
  }

  const leftA = document.createElement('span');
  leftA.textContent = 'Hoàn toàn không đúng';
  leftA.style.flex = '1';
  leftA.style.textAlign = 'center';

  const rightA = document.createElement('span');
  rightA.textContent = 'Hoàn toàn đúng';
  rightA.style.flex = '1';
  rightA.style.textAlign = 'center';

  const buttons = [];

  for (let i = 0; i < 5; i++) {
    const btn = document.createElement('button');
    btn.dataset.value = i + 1;
    btn.style.width = '50px';
    btn.style.height = '50px';
    btn.style.borderRadius = '50%';
    btn.style.padding = '0';
    btn.style.display = 'flex';
    btn.style.alignItems = 'center';
    btn.style.justifyContent = 'center';
    btn.style.backgroundColor = '#444';
    btn.style.color = 'white';
    btn.style.border = 'none';
    btn.style.cursor = 'pointer';

    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });

    buttons.push(btn);
    wrapper.appendChild(btn);
  }

  wrapper.insertBefore(leftA, wrapper.firstChild);
  wrapper.appendChild(rightA);

  return wrapper;
}

// Gọi hàm và thêm vào main


for (let i = 0; i < 27; i++) {
  const randomColor = getRandomItem(colors);
  document.querySelector('main').appendChild(createParagraph(randomColor));
  document.querySelector('main').appendChild(createButtons());
  document.querySelector('main').appendChild(document.createElement('hr'));
}

function result() {
  const groups = document.querySelectorAll('.group');
  let total = 0;

  for (const group of groups) {
    const selected = group.querySelector('.active');
    if (!selected) {
      alert('Bạn chưa chọn đầy đủ trong một số nhóm!');
      return;
    }
    total += parseInt(selected.dataset.value);
  }
  const container = document.createElement('div');
  container.style.display = 'flex';
  container.style.gap = '20px';
  let a;

  if (total <= 40) {
    a = 0;
  } else if (total >= 41 && total <= 54) {
    a = 1;
  } else if (total >= 55 && total <= 72) {
    a = 2;
  } else if (total >= 73 && total <= 90) {
    a = 3;
  } else if (total >= 91 && total <= 108) {
    a = 4;
  } else if (total >= 109 && total <= 126) {
    a = 5;
  } else if (total >= 127 && total <= 135) {
    a = 6;
  } else {
    a = -1; // nằm ngoài các khoảng, nếu cần
  }

  const P1 = document.createElement('p');
  P1.textContent = anxietyRanges[a];
  P1.style.fontWeight = 'bold';
  container.appendChild(P1);
  const P2 = document.createElement('p');
  P2.textContent = anxietyLevels[a];
  container.appendChild(P2);
  const P3 = document.createElement('p');
  P3.textContent = anxietyDescriptions[a];
  container.appendChild(P3);
  document.querySelector('main').appendChild(container);
  document.querySelector('main').appendChild(createButton3());
}

function createButton2() {
  const btn = document.createElement('button');
  btn.textContent = "Gửi Kết Quả";
  btn.addEventListener("click", result, { once: true });
  btn.style.cursor = 'pointer';
  return btn;
}
function createButton3() {
  const btn = document.createElement('button');
  btn.textContent = "Xem bảng Diễn Giải mức độ lo âu?";
  btn.addEventListener("click", table, { once: true });
  btn.style.cursor = 'pointer';
  return btn;
}

function table() {
  const main = document.querySelector('main');

  // Tạo hàng tiêu đề
  const headerRow = document.createElement('div');
  headerRow.style.display = 'flex';
  headerRow.style.gap = '20px';
  headerRow.style.marginTop = '1rem';

  const P1 = document.createElement('p');
  P1.textContent = "Tổng điểm";
  P1.style.fontWeight = 'bold';
  P1.style.width = '10%';
  P1.style.margin = '0';

  const P2 = document.createElement('p');
  P2.textContent = "Mức độ Lo âu khi Thi cử";
  P2.style.fontWeight = 'bold';
  P2.style.width = '20%';
  P2.style.margin = '0';

  const P3 = document.createElement('p');
  P3.textContent = "Diễn giải mức độ lo âu";
  P3.style.fontWeight = 'bold';
  P3.style.width = '70%';
  P3.style.margin = '0';

  headerRow.appendChild(P1);
  headerRow.appendChild(P2);
  headerRow.appendChild(P3);
  main.appendChild(headerRow);

  // Tạo từng dòng dữ liệu
  for (let i = 0; i < 6; i++) {
    const row = document.createElement('div');
    row.style.display = 'flex';
    row.style.gap = '20px';
    row.style.marginTop = '1rem';

    const P1a = document.createElement('p');
    P1a.textContent = anxietyRanges[i];
    P1a.style.width = '10%';
    P1a.style.fontWeight = 'bold';
    P1a.style.margin = '0';

    const P2a = document.createElement('p');
    P2a.textContent = anxietyLevels[i];
    P2a.style.width = '20%';
    P2a.style.margin = '0';

    const P3a = document.createElement('p');
    P3a.textContent = anxietyDescriptions[i];
    P3a.style.width = '70%';
    P3a.style.margin = '0';

    row.appendChild(P1a);
    row.appendChild(P2a);
    row.appendChild(P3a);

    main.appendChild(row);
  }
}

document.querySelector('main').appendChild(createButton2());