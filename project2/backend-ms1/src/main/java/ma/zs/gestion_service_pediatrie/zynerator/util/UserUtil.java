package ma.zs.gestion_service_pediatrie.zynerator.util;

import ma.zs.gestion_service_pediatrie.zynerator.security.bean.User;
import org.springframework.security.core.context.SecurityContextHolder;

public class UserUtil {

    private UserUtil() {
    }

    public static Long getCurrentUserId() {
        if (SecurityContextHolder.getContext().getAuthentication() != null) {
            User currentUser = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
            return currentUser.getId();
        }
        return 0L;
    }

    public static String getCurrentUserName() {
        if (SecurityContextHolder.getContext().getAuthentication() != null) {
            User currentUser = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
            return currentUser.getUsername();
        }
        return null;
    }

}
