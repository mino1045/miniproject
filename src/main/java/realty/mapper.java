package realty;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface mapper {
	public int member_join(member_dto m_dto);

}
