var work = [
    // 메인
    { "cate": "m01", "dep01": "메인", "dep02": "메인-홈", "url": "front/main/index.html" },
    { "cate": "m01", "dep01": "메인", "dep02": "메인-제품-3B-GENOME", "url": "front/main/genome.html" },
    { "cate": "m01", "dep01": "메인", "dep02": "메인-제품-3B-EXOME", "url": "front/main/exome.html" },
    { "cate": "m01", "dep01": "메인", "dep02": "메인-파트너 - Grant program (해외)", "url": "front/main/grantProgram.html" },
    { "cate": "m01", "dep01": "메인", "dep02": "메인-샘플 준비 가이드라인", "url": "front/main/guidePrepare.html" },
    { "cate": "m01", "dep01": "메인", "dep02": "메인-의료진", "url": "front/main/medical.html" },
    { "cate": "m01", "dep01": "메인", "dep02": "메인-파트너-제약사", "url": "front/main/partner.html" },
    { "cate": "m01", "dep01": "메인", "dep02": "메인-환자", "url": "front/main/patient.html" },
    { "cate": "m01", "dep01": "메인", "dep02": "메인-제품/검사 개요", "url": "front/main/product.html" },
    { "cate": "m01", "dep01": "메인", "dep02": "메인-파트너-연구 협업(국내)", "url": "front/main/research.html" },
    { "cate": "m01", "dep01": "메인", "dep02": "메인-제품-3B-VARIANT", "url": "front/main/variant.html" },
    
    // 회사
    { "cate": "m02", "dep01": "회사", "dep02": "소개", "url": "front/company/index.html" },
    { "cate": "m02", "dep01": "회사", "dep02": "회사-IR", "url": "front/company/ir.html" },
    { "cate": "m02", "dep01": "회사", "dep02": "회사-블로그", "url": "front/company/blog.html" },
    { "cate": "m02", "dep01": "회사", "dep02": "회사-블로그–필터 클릭 시", "url": "front/company/blog_detail.html" },
    { "cate": "m02", "dep01": "회사", "dep02": "회사-블로그 상세", "url": "front/company/blog_post.html" },
    { "cate": "m02", "dep01": "회사", "dep02": "회사-소식", "url": "front/company/news.html" },
    { "cate": "m02", "dep01": "회사", "dep02": "회사-소식 - 필터 클릭 시", "url": "front/company/news.html" },
    { "cate": "m02", "dep01": "회사", "dep02": "회사-소식 상세", "url": "front/company/news_detail.html" },
    { "cate": "m02", "dep01": "회사", "dep02": "회사-소식 이벤트 상세 (모집)", "url": "front/company/news_event_recruitment.html" },
    { "cate": "m02", "dep01": "회사", "dep02": "회사-소식 이벤트 상세 (종료 후)", "url": "front/company/news_event_end.html" },

    { "cate": "m02", "dep01": "회사", "dep02": "회사-채용", "url": "front/company/recruit.html" },
    { "cate": "m02", "dep01": "회사", "dep02": "회사-채용공고", "url": "front/company/recruitBoard.html" },
    { "cate": "m02", "dep01": "회사", "dep02": "회사-채용상세-정보", "url": "front/company/recruitInfo.html" },
    { "cate": "m02", "dep01": "회사", "dep02": "회사-채용상세-지원하기", "url": "front/company/recruitApply.html" },

    // 기술
    { "cate": "m03", "dep01": "기술", "dep02": "메인", "url": "front/skill/index.html" },
    { "cate": "m03", "dep01": "기술", "dep02": "EVIDENCE", "url": "front/skill/EVIDENCE.html" },
    { "cate": "m03", "dep01": "기술", "dep02": "3Cnet", "url": "front/skill/3Cnet.html" },
    { "cate": "m03", "dep01": "기술", "dep02": "고객지원", "url": "front/skill/client.html" },
    { "cate": "m03", "dep01": "기술", "dep02": "아카이브", "url": "front/skill/client_archive.html" },
    { "cate": "m03", "dep01": "기술", "dep02": "아카이브-상세", "url": "front/skill/client_archive_detail.html" },
    { "cate": "m03", "dep01": "기술", "dep02": "약관-개인정보 처리방침", "url": "front/skill/terms.html" },
    { "cate": "m03", "dep01": "기술", "dep02": "도구", "url": "front/skill/tool.html" },
    { "cate": "m03", "dep01": "기술", "dep02": "리소스", "url": "front/skill/resource.html" },
    { "cate": "m03", "dep01": "기술", "dep02": "재분석", "url": "front/skill/reanalysis.html" },
    { "cate": "m03", "dep01": "기술", "dep02": "논문", "url": "front/skill/paper.html" },
    { "cate": "m03", "dep01": "기술", "dep02": "신약 개발", "url": "front/skill/development.html" },
  
    
    
];


$(function() {
    listTable(".siteNavi li", ".siteNavi li .num");
});

function listTable(cls, num) {
    var tr;
    for (i = 0; i < work.length; i++) {
        tr += "<tr class=" + work[i].cate + ">";
        tr += "<td>" + work[i].dep01 + "</td>";
        tr += "<td>" + work[i].dep02 + "</td>";
        tr += "<td><a href='../" + work[i].url + "' target='_blank'>" + work[i].url + "</a></td>";
        // tr += "<td><a href='" + work[i].apply_url + "' target='_blank'>" + work[i].apply_url + "</a></td>";
        tr += "</tr>";
    }
    $("table tbody").append(tr);

    $(num).each(function(z) {
        if (z === 0) {
            $(num).eq(z).text("(" + work.length + "p)");
        } else {
            $(num).eq(z).text("(" + $('.m0' + z).length + "p)");
        }
    });
    $("body").on("click", cls, function() {
        $(cls).removeClass("on");
        $(this).addClass("on");
        $("table tbody tr").hide();
        if ($(this).index() === 0) {
            $("table tbody tr").show();
        } else {
            $(".m0" + $(this).index()).show();
        }
    });
}