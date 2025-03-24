package realty;

import javax.annotation.Resource;
import javax.inject.Inject;

import org.apache.ibatis.session.SqlSessionFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class controller {
	@Inject
	SqlSessionFactory sqlfact;
	
	@Resource(name = "member_dto")
	private member_dto m_dto;
	
	@Resource(name = "realty_dao")
	private realty_dao dao;
	
	
	//이메일 중복체크
	@ResponseBody
	@PostMapping("/realty/email_check.do")
	public String email_check(@RequestParam("memail") String memail) throws Exception {
		member_dto email_used = this.dao.email_check(memail);
		
		if (email_used != null) {
			return "false";
		}else {
			return "ok";
		}
	}
	

	//회원가입
	@PostMapping("/realty/joinok.do")
	public String joinok(member_dto m_dto,Model m) throws Exception {
		int result = this.dao.member_join(m_dto);
		String msg = "";
		m.addAttribute(msg);
		
		return "realty/index";
	}
	
	
	
	/////회원가입링크
	@GetMapping("/realty/member_join.do")
	public String join()  {
		return "realty/member_join";
	}

}
