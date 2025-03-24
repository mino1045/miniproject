package realty;

import javax.annotation.Resource;
import javax.inject.Inject;

import org.apache.ibatis.session.SqlSessionFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class controller {
	@Inject
	SqlSessionFactory sqlfact;
	
	@Resource(name = "member_dto")
	private member_dto m_dto;
	
	@Resource(name = "realty_dao")
	private realty_dao dao;
	
	

	@GetMapping("/realty/member_join.do")
	public String join()  {
		System.out.println("dfdfsdfdsfsdfsdfdsfsfsdfdssdfs");
		return "realty/member_join";
	}
	
	@PostMapping("/realty/joinok.do")
	public String joinok(member_dto m_dto,Model m) throws Exception {
		int result = this.dao.member_join(m_dto);
		String msg = "";
		m.addAttribute(msg);
		
		return null;
	}

}
