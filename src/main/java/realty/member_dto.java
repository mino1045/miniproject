package realty;

import org.springframework.stereotype.Repository;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@Repository("member_dto")
public class member_dto {
int midx;
String memail,mpass,mname,mtel,age_terms,service_terms,privacy_terms,marketing_terms,mdate;
}
