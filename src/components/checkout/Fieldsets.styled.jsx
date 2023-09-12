import styled from 'styled-components'

export const StyledFieldset = styled.fieldset`
	& legend {
		width: 100%;
		font-size: 1.125rem;
		font-weight: ${({ theme }) => theme.fw.medium};
		padding: 0.61em 0;
		margin-bottom: 1.94em;
		border-bottom: ${({ theme }) => `2px solid ${theme.color.black}`};
	}

	& .label {
		width: 10em;
	}

	& .invalid {
		margin-left: 11.7em;
	}

	&:not(:last-child) {
		margin-bottom: 2.75em;
	}
`

export const Wrapper = styled.div`
	/* max-width: 600px; */
	// flexbox는 px로 강제할 수가 없다!
	// 1. 수령인, 휴대폰 인풋 크기 제한
	// 2. 모바일 뷰에서 배송지 이상하게 보임
	// 3. 우편번호 검색에서 카카오맵 사용?
	// 4. 체크아웃 써머리 만들기
`
