package realty;

import javax.annotation.Resource;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

@Repository("realty_dao")
public class realty_dao {
	
	@Resource(name = "template")
	public SqlSessionTemplate st;
	
	//insert
	/////member_join
	public int member_join(member_dto m_dto) {
		int result = this.st.insert("member_join",m_dto);
		return result;
	}
	
	//select
	/////email_check
	member_dto email_check(String memail) {
		member_dto email_used = this.st.selectOne("email_check",memail);
		return email_used;
	}
	
	
	

}
