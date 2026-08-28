# `route53GlobalresolverFirewallRule` Submodule <a name="`route53GlobalresolverFirewallRule` Submodule" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Route53GlobalresolverFirewallRule <a name="Route53GlobalresolverFirewallRule" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_firewall_rule awscc_route53globalresolver_firewall_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.Initializer"></a>

```java
import io.cdktn.providers.awscc.route53_globalresolver_firewall_rule.Route53GlobalresolverFirewallRule;

Route53GlobalresolverFirewallRule.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .action(java.lang.String)
    .dnsViewId(java.lang.String)
    .name(java.lang.String)
//  .blockOverrideDnsType(java.lang.String)
//  .blockOverrideDomain(java.lang.String)
//  .blockOverrideTtl(java.lang.Number)
//  .blockResponse(java.lang.String)
//  .clientToken(java.lang.String)
//  .confidenceThreshold(java.lang.String)
//  .description(java.lang.String)
//  .dnsAdvancedProtection(java.lang.String)
//  .firewallDomainListId(java.lang.String)
//  .priority(java.lang.Number)
//  .qType(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.Initializer.parameter.action">action</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_firewall_rule#action Route53GlobalresolverFirewallRule#action}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.Initializer.parameter.dnsViewId">dnsViewId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_firewall_rule#dns_view_id Route53GlobalresolverFirewallRule#dns_view_id}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_firewall_rule#name Route53GlobalresolverFirewallRule#name}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.Initializer.parameter.blockOverrideDnsType">blockOverrideDnsType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_firewall_rule#block_override_dns_type Route53GlobalresolverFirewallRule#block_override_dns_type}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.Initializer.parameter.blockOverrideDomain">blockOverrideDomain</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_firewall_rule#block_override_domain Route53GlobalresolverFirewallRule#block_override_domain}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.Initializer.parameter.blockOverrideTtl">blockOverrideTtl</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_firewall_rule#block_override_ttl Route53GlobalresolverFirewallRule#block_override_ttl}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.Initializer.parameter.blockResponse">blockResponse</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_firewall_rule#block_response Route53GlobalresolverFirewallRule#block_response}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.Initializer.parameter.clientToken">clientToken</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_firewall_rule#client_token Route53GlobalresolverFirewallRule#client_token}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.Initializer.parameter.confidenceThreshold">confidenceThreshold</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_firewall_rule#confidence_threshold Route53GlobalresolverFirewallRule#confidence_threshold}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_firewall_rule#description Route53GlobalresolverFirewallRule#description}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.Initializer.parameter.dnsAdvancedProtection">dnsAdvancedProtection</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_firewall_rule#dns_advanced_protection Route53GlobalresolverFirewallRule#dns_advanced_protection}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.Initializer.parameter.firewallDomainListId">firewallDomainListId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_firewall_rule#firewall_domain_list_id Route53GlobalresolverFirewallRule#firewall_domain_list_id}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.Initializer.parameter.priority">priority</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_firewall_rule#priority Route53GlobalresolverFirewallRule#priority}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.Initializer.parameter.qType">qType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_firewall_rule#q_type Route53GlobalresolverFirewallRule#q_type}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.Initializer.parameter.action"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_firewall_rule#action Route53GlobalresolverFirewallRule#action}.

---

##### `dnsViewId`<sup>Required</sup> <a name="dnsViewId" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.Initializer.parameter.dnsViewId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_firewall_rule#dns_view_id Route53GlobalresolverFirewallRule#dns_view_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_firewall_rule#name Route53GlobalresolverFirewallRule#name}.

---

##### `blockOverrideDnsType`<sup>Optional</sup> <a name="blockOverrideDnsType" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.Initializer.parameter.blockOverrideDnsType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_firewall_rule#block_override_dns_type Route53GlobalresolverFirewallRule#block_override_dns_type}.

---

##### `blockOverrideDomain`<sup>Optional</sup> <a name="blockOverrideDomain" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.Initializer.parameter.blockOverrideDomain"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_firewall_rule#block_override_domain Route53GlobalresolverFirewallRule#block_override_domain}.

---

##### `blockOverrideTtl`<sup>Optional</sup> <a name="blockOverrideTtl" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.Initializer.parameter.blockOverrideTtl"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_firewall_rule#block_override_ttl Route53GlobalresolverFirewallRule#block_override_ttl}.

---

##### `blockResponse`<sup>Optional</sup> <a name="blockResponse" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.Initializer.parameter.blockResponse"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_firewall_rule#block_response Route53GlobalresolverFirewallRule#block_response}.

---

##### `clientToken`<sup>Optional</sup> <a name="clientToken" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.Initializer.parameter.clientToken"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_firewall_rule#client_token Route53GlobalresolverFirewallRule#client_token}.

---

##### `confidenceThreshold`<sup>Optional</sup> <a name="confidenceThreshold" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.Initializer.parameter.confidenceThreshold"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_firewall_rule#confidence_threshold Route53GlobalresolverFirewallRule#confidence_threshold}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_firewall_rule#description Route53GlobalresolverFirewallRule#description}.

---

##### `dnsAdvancedProtection`<sup>Optional</sup> <a name="dnsAdvancedProtection" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.Initializer.parameter.dnsAdvancedProtection"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_firewall_rule#dns_advanced_protection Route53GlobalresolverFirewallRule#dns_advanced_protection}.

---

##### `firewallDomainListId`<sup>Optional</sup> <a name="firewallDomainListId" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.Initializer.parameter.firewallDomainListId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_firewall_rule#firewall_domain_list_id Route53GlobalresolverFirewallRule#firewall_domain_list_id}.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.Initializer.parameter.priority"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_firewall_rule#priority Route53GlobalresolverFirewallRule#priority}.

---

##### `qType`<sup>Optional</sup> <a name="qType" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.Initializer.parameter.qType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_firewall_rule#q_type Route53GlobalresolverFirewallRule#q_type}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.resetBlockOverrideDnsType">resetBlockOverrideDnsType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.resetBlockOverrideDomain">resetBlockOverrideDomain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.resetBlockOverrideTtl">resetBlockOverrideTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.resetBlockResponse">resetBlockResponse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.resetClientToken">resetClientToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.resetConfidenceThreshold">resetConfidenceThreshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.resetDnsAdvancedProtection">resetDnsAdvancedProtection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.resetFirewallDomainListId">resetFirewallDomainListId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.resetPriority">resetPriority</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.resetQType">resetQType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetBlockOverrideDnsType` <a name="resetBlockOverrideDnsType" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.resetBlockOverrideDnsType"></a>

```java
public void resetBlockOverrideDnsType()
```

##### `resetBlockOverrideDomain` <a name="resetBlockOverrideDomain" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.resetBlockOverrideDomain"></a>

```java
public void resetBlockOverrideDomain()
```

##### `resetBlockOverrideTtl` <a name="resetBlockOverrideTtl" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.resetBlockOverrideTtl"></a>

```java
public void resetBlockOverrideTtl()
```

##### `resetBlockResponse` <a name="resetBlockResponse" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.resetBlockResponse"></a>

```java
public void resetBlockResponse()
```

##### `resetClientToken` <a name="resetClientToken" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.resetClientToken"></a>

```java
public void resetClientToken()
```

##### `resetConfidenceThreshold` <a name="resetConfidenceThreshold" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.resetConfidenceThreshold"></a>

```java
public void resetConfidenceThreshold()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDnsAdvancedProtection` <a name="resetDnsAdvancedProtection" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.resetDnsAdvancedProtection"></a>

```java
public void resetDnsAdvancedProtection()
```

##### `resetFirewallDomainListId` <a name="resetFirewallDomainListId" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.resetFirewallDomainListId"></a>

```java
public void resetFirewallDomainListId()
```

##### `resetPriority` <a name="resetPriority" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.resetPriority"></a>

```java
public void resetPriority()
```

##### `resetQType` <a name="resetQType" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.resetQType"></a>

```java
public void resetQType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Route53GlobalresolverFirewallRule resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.isConstruct"></a>

```java
import io.cdktn.providers.awscc.route53_globalresolver_firewall_rule.Route53GlobalresolverFirewallRule;

Route53GlobalresolverFirewallRule.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.route53_globalresolver_firewall_rule.Route53GlobalresolverFirewallRule;

Route53GlobalresolverFirewallRule.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.route53_globalresolver_firewall_rule.Route53GlobalresolverFirewallRule;

Route53GlobalresolverFirewallRule.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.route53_globalresolver_firewall_rule.Route53GlobalresolverFirewallRule;

Route53GlobalresolverFirewallRule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),Route53GlobalresolverFirewallRule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a Route53GlobalresolverFirewallRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the Route53GlobalresolverFirewallRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing Route53GlobalresolverFirewallRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_firewall_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the Route53GlobalresolverFirewallRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.firewallRuleId">firewallRuleId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.queryType">queryType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.updatedAt">updatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.actionInput">actionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.blockOverrideDnsTypeInput">blockOverrideDnsTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.blockOverrideDomainInput">blockOverrideDomainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.blockOverrideTtlInput">blockOverrideTtlInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.blockResponseInput">blockResponseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.clientTokenInput">clientTokenInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.confidenceThresholdInput">confidenceThresholdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.dnsAdvancedProtectionInput">dnsAdvancedProtectionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.dnsViewIdInput">dnsViewIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.firewallDomainListIdInput">firewallDomainListIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.priorityInput">priorityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.qTypeInput">qTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.action">action</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.blockOverrideDnsType">blockOverrideDnsType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.blockOverrideDomain">blockOverrideDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.blockOverrideTtl">blockOverrideTtl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.blockResponse">blockResponse</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.clientToken">clientToken</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.confidenceThreshold">confidenceThreshold</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.dnsAdvancedProtection">dnsAdvancedProtection</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.dnsViewId">dnsViewId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.firewallDomainListId">firewallDomainListId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.priority">priority</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.qType">qType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `firewallRuleId`<sup>Required</sup> <a name="firewallRuleId" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.firewallRuleId"></a>

```java
public java.lang.String getFirewallRuleId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `queryType`<sup>Required</sup> <a name="queryType" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.queryType"></a>

```java
public java.lang.String getQueryType();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.updatedAt"></a>

```java
public java.lang.String getUpdatedAt();
```

- *Type:* java.lang.String

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.actionInput"></a>

```java
public java.lang.String getActionInput();
```

- *Type:* java.lang.String

---

##### `blockOverrideDnsTypeInput`<sup>Optional</sup> <a name="blockOverrideDnsTypeInput" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.blockOverrideDnsTypeInput"></a>

```java
public java.lang.String getBlockOverrideDnsTypeInput();
```

- *Type:* java.lang.String

---

##### `blockOverrideDomainInput`<sup>Optional</sup> <a name="blockOverrideDomainInput" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.blockOverrideDomainInput"></a>

```java
public java.lang.String getBlockOverrideDomainInput();
```

- *Type:* java.lang.String

---

##### `blockOverrideTtlInput`<sup>Optional</sup> <a name="blockOverrideTtlInput" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.blockOverrideTtlInput"></a>

```java
public java.lang.Number getBlockOverrideTtlInput();
```

- *Type:* java.lang.Number

---

##### `blockResponseInput`<sup>Optional</sup> <a name="blockResponseInput" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.blockResponseInput"></a>

```java
public java.lang.String getBlockResponseInput();
```

- *Type:* java.lang.String

---

##### `clientTokenInput`<sup>Optional</sup> <a name="clientTokenInput" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.clientTokenInput"></a>

```java
public java.lang.String getClientTokenInput();
```

- *Type:* java.lang.String

---

##### `confidenceThresholdInput`<sup>Optional</sup> <a name="confidenceThresholdInput" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.confidenceThresholdInput"></a>

```java
public java.lang.String getConfidenceThresholdInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `dnsAdvancedProtectionInput`<sup>Optional</sup> <a name="dnsAdvancedProtectionInput" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.dnsAdvancedProtectionInput"></a>

```java
public java.lang.String getDnsAdvancedProtectionInput();
```

- *Type:* java.lang.String

---

##### `dnsViewIdInput`<sup>Optional</sup> <a name="dnsViewIdInput" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.dnsViewIdInput"></a>

```java
public java.lang.String getDnsViewIdInput();
```

- *Type:* java.lang.String

---

##### `firewallDomainListIdInput`<sup>Optional</sup> <a name="firewallDomainListIdInput" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.firewallDomainListIdInput"></a>

```java
public java.lang.String getFirewallDomainListIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.priorityInput"></a>

```java
public java.lang.Number getPriorityInput();
```

- *Type:* java.lang.Number

---

##### `qTypeInput`<sup>Optional</sup> <a name="qTypeInput" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.qTypeInput"></a>

```java
public java.lang.String getQTypeInput();
```

- *Type:* java.lang.String

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

---

##### `blockOverrideDnsType`<sup>Required</sup> <a name="blockOverrideDnsType" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.blockOverrideDnsType"></a>

```java
public java.lang.String getBlockOverrideDnsType();
```

- *Type:* java.lang.String

---

##### `blockOverrideDomain`<sup>Required</sup> <a name="blockOverrideDomain" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.blockOverrideDomain"></a>

```java
public java.lang.String getBlockOverrideDomain();
```

- *Type:* java.lang.String

---

##### `blockOverrideTtl`<sup>Required</sup> <a name="blockOverrideTtl" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.blockOverrideTtl"></a>

```java
public java.lang.Number getBlockOverrideTtl();
```

- *Type:* java.lang.Number

---

##### `blockResponse`<sup>Required</sup> <a name="blockResponse" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.blockResponse"></a>

```java
public java.lang.String getBlockResponse();
```

- *Type:* java.lang.String

---

##### `clientToken`<sup>Required</sup> <a name="clientToken" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.clientToken"></a>

```java
public java.lang.String getClientToken();
```

- *Type:* java.lang.String

---

##### `confidenceThreshold`<sup>Required</sup> <a name="confidenceThreshold" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.confidenceThreshold"></a>

```java
public java.lang.String getConfidenceThreshold();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `dnsAdvancedProtection`<sup>Required</sup> <a name="dnsAdvancedProtection" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.dnsAdvancedProtection"></a>

```java
public java.lang.String getDnsAdvancedProtection();
```

- *Type:* java.lang.String

---

##### `dnsViewId`<sup>Required</sup> <a name="dnsViewId" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.dnsViewId"></a>

```java
public java.lang.String getDnsViewId();
```

- *Type:* java.lang.String

---

##### `firewallDomainListId`<sup>Required</sup> <a name="firewallDomainListId" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.firewallDomainListId"></a>

```java
public java.lang.String getFirewallDomainListId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

---

##### `qType`<sup>Required</sup> <a name="qType" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.qType"></a>

```java
public java.lang.String getQType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### Route53GlobalresolverFirewallRuleConfig <a name="Route53GlobalresolverFirewallRuleConfig" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRuleConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.route53_globalresolver_firewall_rule.Route53GlobalresolverFirewallRuleConfig;

Route53GlobalresolverFirewallRuleConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .action(java.lang.String)
    .dnsViewId(java.lang.String)
    .name(java.lang.String)
//  .blockOverrideDnsType(java.lang.String)
//  .blockOverrideDomain(java.lang.String)
//  .blockOverrideTtl(java.lang.Number)
//  .blockResponse(java.lang.String)
//  .clientToken(java.lang.String)
//  .confidenceThreshold(java.lang.String)
//  .description(java.lang.String)
//  .dnsAdvancedProtection(java.lang.String)
//  .firewallDomainListId(java.lang.String)
//  .priority(java.lang.Number)
//  .qType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRuleConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRuleConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRuleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRuleConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRuleConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRuleConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRuleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRuleConfig.property.action">action</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_firewall_rule#action Route53GlobalresolverFirewallRule#action}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRuleConfig.property.dnsViewId">dnsViewId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_firewall_rule#dns_view_id Route53GlobalresolverFirewallRule#dns_view_id}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRuleConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_firewall_rule#name Route53GlobalresolverFirewallRule#name}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRuleConfig.property.blockOverrideDnsType">blockOverrideDnsType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_firewall_rule#block_override_dns_type Route53GlobalresolverFirewallRule#block_override_dns_type}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRuleConfig.property.blockOverrideDomain">blockOverrideDomain</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_firewall_rule#block_override_domain Route53GlobalresolverFirewallRule#block_override_domain}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRuleConfig.property.blockOverrideTtl">blockOverrideTtl</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_firewall_rule#block_override_ttl Route53GlobalresolverFirewallRule#block_override_ttl}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRuleConfig.property.blockResponse">blockResponse</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_firewall_rule#block_response Route53GlobalresolverFirewallRule#block_response}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRuleConfig.property.clientToken">clientToken</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_firewall_rule#client_token Route53GlobalresolverFirewallRule#client_token}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRuleConfig.property.confidenceThreshold">confidenceThreshold</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_firewall_rule#confidence_threshold Route53GlobalresolverFirewallRule#confidence_threshold}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRuleConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_firewall_rule#description Route53GlobalresolverFirewallRule#description}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRuleConfig.property.dnsAdvancedProtection">dnsAdvancedProtection</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_firewall_rule#dns_advanced_protection Route53GlobalresolverFirewallRule#dns_advanced_protection}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRuleConfig.property.firewallDomainListId">firewallDomainListId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_firewall_rule#firewall_domain_list_id Route53GlobalresolverFirewallRule#firewall_domain_list_id}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRuleConfig.property.priority">priority</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_firewall_rule#priority Route53GlobalresolverFirewallRule#priority}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRuleConfig.property.qType">qType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_firewall_rule#q_type Route53GlobalresolverFirewallRule#q_type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRuleConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRuleConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRuleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRuleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRuleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRuleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRuleConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRuleConfig.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_firewall_rule#action Route53GlobalresolverFirewallRule#action}.

---

##### `dnsViewId`<sup>Required</sup> <a name="dnsViewId" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRuleConfig.property.dnsViewId"></a>

```java
public java.lang.String getDnsViewId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_firewall_rule#dns_view_id Route53GlobalresolverFirewallRule#dns_view_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRuleConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_firewall_rule#name Route53GlobalresolverFirewallRule#name}.

---

##### `blockOverrideDnsType`<sup>Optional</sup> <a name="blockOverrideDnsType" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRuleConfig.property.blockOverrideDnsType"></a>

```java
public java.lang.String getBlockOverrideDnsType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_firewall_rule#block_override_dns_type Route53GlobalresolverFirewallRule#block_override_dns_type}.

---

##### `blockOverrideDomain`<sup>Optional</sup> <a name="blockOverrideDomain" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRuleConfig.property.blockOverrideDomain"></a>

```java
public java.lang.String getBlockOverrideDomain();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_firewall_rule#block_override_domain Route53GlobalresolverFirewallRule#block_override_domain}.

---

##### `blockOverrideTtl`<sup>Optional</sup> <a name="blockOverrideTtl" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRuleConfig.property.blockOverrideTtl"></a>

```java
public java.lang.Number getBlockOverrideTtl();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_firewall_rule#block_override_ttl Route53GlobalresolverFirewallRule#block_override_ttl}.

---

##### `blockResponse`<sup>Optional</sup> <a name="blockResponse" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRuleConfig.property.blockResponse"></a>

```java
public java.lang.String getBlockResponse();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_firewall_rule#block_response Route53GlobalresolverFirewallRule#block_response}.

---

##### `clientToken`<sup>Optional</sup> <a name="clientToken" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRuleConfig.property.clientToken"></a>

```java
public java.lang.String getClientToken();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_firewall_rule#client_token Route53GlobalresolverFirewallRule#client_token}.

---

##### `confidenceThreshold`<sup>Optional</sup> <a name="confidenceThreshold" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRuleConfig.property.confidenceThreshold"></a>

```java
public java.lang.String getConfidenceThreshold();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_firewall_rule#confidence_threshold Route53GlobalresolverFirewallRule#confidence_threshold}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRuleConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_firewall_rule#description Route53GlobalresolverFirewallRule#description}.

---

##### `dnsAdvancedProtection`<sup>Optional</sup> <a name="dnsAdvancedProtection" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRuleConfig.property.dnsAdvancedProtection"></a>

```java
public java.lang.String getDnsAdvancedProtection();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_firewall_rule#dns_advanced_protection Route53GlobalresolverFirewallRule#dns_advanced_protection}.

---

##### `firewallDomainListId`<sup>Optional</sup> <a name="firewallDomainListId" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRuleConfig.property.firewallDomainListId"></a>

```java
public java.lang.String getFirewallDomainListId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_firewall_rule#firewall_domain_list_id Route53GlobalresolverFirewallRule#firewall_domain_list_id}.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRuleConfig.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_firewall_rule#priority Route53GlobalresolverFirewallRule#priority}.

---

##### `qType`<sup>Optional</sup> <a name="qType" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRuleConfig.property.qType"></a>

```java
public java.lang.String getQType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_firewall_rule#q_type Route53GlobalresolverFirewallRule#q_type}.

---



