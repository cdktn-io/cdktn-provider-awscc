# `route53GlobalresolverFirewallRule` Submodule <a name="`route53GlobalresolverFirewallRule` Submodule" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Route53GlobalresolverFirewallRule <a name="Route53GlobalresolverFirewallRule" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_firewall_rule awscc_route53globalresolver_firewall_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.Initializer"></a>

```python
from cdktn_provider_awscc import route53_globalresolver_firewall_rule

route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  action: str,
  dns_view_id: str,
  name: str,
  block_override_dns_type: str = None,
  block_override_domain: str = None,
  block_override_ttl: typing.Union[int, float] = None,
  block_response: str = None,
  client_token: str = None,
  confidence_threshold: str = None,
  description: str = None,
  dns_advanced_protection: str = None,
  firewall_domain_list_id: str = None,
  priority: typing.Union[int, float] = None,
  q_type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.Initializer.parameter.action">action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_firewall_rule#action Route53GlobalresolverFirewallRule#action}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.Initializer.parameter.dnsViewId">dns_view_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_firewall_rule#dns_view_id Route53GlobalresolverFirewallRule#dns_view_id}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_firewall_rule#name Route53GlobalresolverFirewallRule#name}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.Initializer.parameter.blockOverrideDnsType">block_override_dns_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_firewall_rule#block_override_dns_type Route53GlobalresolverFirewallRule#block_override_dns_type}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.Initializer.parameter.blockOverrideDomain">block_override_domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_firewall_rule#block_override_domain Route53GlobalresolverFirewallRule#block_override_domain}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.Initializer.parameter.blockOverrideTtl">block_override_ttl</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_firewall_rule#block_override_ttl Route53GlobalresolverFirewallRule#block_override_ttl}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.Initializer.parameter.blockResponse">block_response</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_firewall_rule#block_response Route53GlobalresolverFirewallRule#block_response}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.Initializer.parameter.clientToken">client_token</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_firewall_rule#client_token Route53GlobalresolverFirewallRule#client_token}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.Initializer.parameter.confidenceThreshold">confidence_threshold</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_firewall_rule#confidence_threshold Route53GlobalresolverFirewallRule#confidence_threshold}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_firewall_rule#description Route53GlobalresolverFirewallRule#description}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.Initializer.parameter.dnsAdvancedProtection">dns_advanced_protection</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_firewall_rule#dns_advanced_protection Route53GlobalresolverFirewallRule#dns_advanced_protection}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.Initializer.parameter.firewallDomainListId">firewall_domain_list_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_firewall_rule#firewall_domain_list_id Route53GlobalresolverFirewallRule#firewall_domain_list_id}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.Initializer.parameter.priority">priority</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_firewall_rule#priority Route53GlobalresolverFirewallRule#priority}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.Initializer.parameter.qType">q_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_firewall_rule#q_type Route53GlobalresolverFirewallRule#q_type}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.Initializer.parameter.action"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_firewall_rule#action Route53GlobalresolverFirewallRule#action}.

---

##### `dns_view_id`<sup>Required</sup> <a name="dns_view_id" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.Initializer.parameter.dnsViewId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_firewall_rule#dns_view_id Route53GlobalresolverFirewallRule#dns_view_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_firewall_rule#name Route53GlobalresolverFirewallRule#name}.

---

##### `block_override_dns_type`<sup>Optional</sup> <a name="block_override_dns_type" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.Initializer.parameter.blockOverrideDnsType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_firewall_rule#block_override_dns_type Route53GlobalresolverFirewallRule#block_override_dns_type}.

---

##### `block_override_domain`<sup>Optional</sup> <a name="block_override_domain" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.Initializer.parameter.blockOverrideDomain"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_firewall_rule#block_override_domain Route53GlobalresolverFirewallRule#block_override_domain}.

---

##### `block_override_ttl`<sup>Optional</sup> <a name="block_override_ttl" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.Initializer.parameter.blockOverrideTtl"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_firewall_rule#block_override_ttl Route53GlobalresolverFirewallRule#block_override_ttl}.

---

##### `block_response`<sup>Optional</sup> <a name="block_response" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.Initializer.parameter.blockResponse"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_firewall_rule#block_response Route53GlobalresolverFirewallRule#block_response}.

---

##### `client_token`<sup>Optional</sup> <a name="client_token" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.Initializer.parameter.clientToken"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_firewall_rule#client_token Route53GlobalresolverFirewallRule#client_token}.

---

##### `confidence_threshold`<sup>Optional</sup> <a name="confidence_threshold" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.Initializer.parameter.confidenceThreshold"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_firewall_rule#confidence_threshold Route53GlobalresolverFirewallRule#confidence_threshold}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_firewall_rule#description Route53GlobalresolverFirewallRule#description}.

---

##### `dns_advanced_protection`<sup>Optional</sup> <a name="dns_advanced_protection" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.Initializer.parameter.dnsAdvancedProtection"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_firewall_rule#dns_advanced_protection Route53GlobalresolverFirewallRule#dns_advanced_protection}.

---

##### `firewall_domain_list_id`<sup>Optional</sup> <a name="firewall_domain_list_id" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.Initializer.parameter.firewallDomainListId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_firewall_rule#firewall_domain_list_id Route53GlobalresolverFirewallRule#firewall_domain_list_id}.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.Initializer.parameter.priority"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_firewall_rule#priority Route53GlobalresolverFirewallRule#priority}.

---

##### `q_type`<sup>Optional</sup> <a name="q_type" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.Initializer.parameter.qType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_firewall_rule#q_type Route53GlobalresolverFirewallRule#q_type}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.resetBlockOverrideDnsType">reset_block_override_dns_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.resetBlockOverrideDomain">reset_block_override_domain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.resetBlockOverrideTtl">reset_block_override_ttl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.resetBlockResponse">reset_block_response</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.resetClientToken">reset_client_token</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.resetConfidenceThreshold">reset_confidence_threshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.resetDnsAdvancedProtection">reset_dns_advanced_protection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.resetFirewallDomainListId">reset_firewall_domain_list_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.resetPriority">reset_priority</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.resetQType">reset_q_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.with"></a>

```python
def with(
  mixins: *IMixin
) -> IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_block_override_dns_type` <a name="reset_block_override_dns_type" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.resetBlockOverrideDnsType"></a>

```python
def reset_block_override_dns_type() -> None
```

##### `reset_block_override_domain` <a name="reset_block_override_domain" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.resetBlockOverrideDomain"></a>

```python
def reset_block_override_domain() -> None
```

##### `reset_block_override_ttl` <a name="reset_block_override_ttl" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.resetBlockOverrideTtl"></a>

```python
def reset_block_override_ttl() -> None
```

##### `reset_block_response` <a name="reset_block_response" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.resetBlockResponse"></a>

```python
def reset_block_response() -> None
```

##### `reset_client_token` <a name="reset_client_token" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.resetClientToken"></a>

```python
def reset_client_token() -> None
```

##### `reset_confidence_threshold` <a name="reset_confidence_threshold" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.resetConfidenceThreshold"></a>

```python
def reset_confidence_threshold() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_dns_advanced_protection` <a name="reset_dns_advanced_protection" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.resetDnsAdvancedProtection"></a>

```python
def reset_dns_advanced_protection() -> None
```

##### `reset_firewall_domain_list_id` <a name="reset_firewall_domain_list_id" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.resetFirewallDomainListId"></a>

```python
def reset_firewall_domain_list_id() -> None
```

##### `reset_priority` <a name="reset_priority" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.resetPriority"></a>

```python
def reset_priority() -> None
```

##### `reset_q_type` <a name="reset_q_type" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.resetQType"></a>

```python
def reset_q_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a Route53GlobalresolverFirewallRule resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.isConstruct"></a>

```python
from cdktn_provider_awscc import route53_globalresolver_firewall_rule

route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.is_construct(
  x: typing.Any
)
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

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.isTerraformElement"></a>

```python
from cdktn_provider_awscc import route53_globalresolver_firewall_rule

route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.isTerraformResource"></a>

```python
from cdktn_provider_awscc import route53_globalresolver_firewall_rule

route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import route53_globalresolver_firewall_rule

route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a Route53GlobalresolverFirewallRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Route53GlobalresolverFirewallRule to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Route53GlobalresolverFirewallRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_firewall_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Route53GlobalresolverFirewallRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.firewallRuleId">firewall_rule_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.queryType">query_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.actionInput">action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.blockOverrideDnsTypeInput">block_override_dns_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.blockOverrideDomainInput">block_override_domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.blockOverrideTtlInput">block_override_ttl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.blockResponseInput">block_response_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.clientTokenInput">client_token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.confidenceThresholdInput">confidence_threshold_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.dnsAdvancedProtectionInput">dns_advanced_protection_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.dnsViewIdInput">dns_view_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.firewallDomainListIdInput">firewall_domain_list_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.priorityInput">priority_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.qTypeInput">q_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.blockOverrideDnsType">block_override_dns_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.blockOverrideDomain">block_override_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.blockOverrideTtl">block_override_ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.blockResponse">block_response</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.clientToken">client_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.confidenceThreshold">confidence_threshold</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.dnsAdvancedProtection">dns_advanced_protection</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.dnsViewId">dns_view_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.firewallDomainListId">firewall_domain_list_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.qType">q_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `firewall_rule_id`<sup>Required</sup> <a name="firewall_rule_id" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.firewallRuleId"></a>

```python
firewall_rule_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `query_type`<sup>Required</sup> <a name="query_type" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.queryType"></a>

```python
query_type: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.actionInput"></a>

```python
action_input: str
```

- *Type:* str

---

##### `block_override_dns_type_input`<sup>Optional</sup> <a name="block_override_dns_type_input" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.blockOverrideDnsTypeInput"></a>

```python
block_override_dns_type_input: str
```

- *Type:* str

---

##### `block_override_domain_input`<sup>Optional</sup> <a name="block_override_domain_input" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.blockOverrideDomainInput"></a>

```python
block_override_domain_input: str
```

- *Type:* str

---

##### `block_override_ttl_input`<sup>Optional</sup> <a name="block_override_ttl_input" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.blockOverrideTtlInput"></a>

```python
block_override_ttl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `block_response_input`<sup>Optional</sup> <a name="block_response_input" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.blockResponseInput"></a>

```python
block_response_input: str
```

- *Type:* str

---

##### `client_token_input`<sup>Optional</sup> <a name="client_token_input" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.clientTokenInput"></a>

```python
client_token_input: str
```

- *Type:* str

---

##### `confidence_threshold_input`<sup>Optional</sup> <a name="confidence_threshold_input" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.confidenceThresholdInput"></a>

```python
confidence_threshold_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `dns_advanced_protection_input`<sup>Optional</sup> <a name="dns_advanced_protection_input" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.dnsAdvancedProtectionInput"></a>

```python
dns_advanced_protection_input: str
```

- *Type:* str

---

##### `dns_view_id_input`<sup>Optional</sup> <a name="dns_view_id_input" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.dnsViewIdInput"></a>

```python
dns_view_id_input: str
```

- *Type:* str

---

##### `firewall_domain_list_id_input`<sup>Optional</sup> <a name="firewall_domain_list_id_input" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.firewallDomainListIdInput"></a>

```python
firewall_domain_list_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `priority_input`<sup>Optional</sup> <a name="priority_input" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.priorityInput"></a>

```python
priority_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `q_type_input`<sup>Optional</sup> <a name="q_type_input" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.qTypeInput"></a>

```python
q_type_input: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `block_override_dns_type`<sup>Required</sup> <a name="block_override_dns_type" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.blockOverrideDnsType"></a>

```python
block_override_dns_type: str
```

- *Type:* str

---

##### `block_override_domain`<sup>Required</sup> <a name="block_override_domain" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.blockOverrideDomain"></a>

```python
block_override_domain: str
```

- *Type:* str

---

##### `block_override_ttl`<sup>Required</sup> <a name="block_override_ttl" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.blockOverrideTtl"></a>

```python
block_override_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `block_response`<sup>Required</sup> <a name="block_response" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.blockResponse"></a>

```python
block_response: str
```

- *Type:* str

---

##### `client_token`<sup>Required</sup> <a name="client_token" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.clientToken"></a>

```python
client_token: str
```

- *Type:* str

---

##### `confidence_threshold`<sup>Required</sup> <a name="confidence_threshold" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.confidenceThreshold"></a>

```python
confidence_threshold: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `dns_advanced_protection`<sup>Required</sup> <a name="dns_advanced_protection" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.dnsAdvancedProtection"></a>

```python
dns_advanced_protection: str
```

- *Type:* str

---

##### `dns_view_id`<sup>Required</sup> <a name="dns_view_id" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.dnsViewId"></a>

```python
dns_view_id: str
```

- *Type:* str

---

##### `firewall_domain_list_id`<sup>Required</sup> <a name="firewall_domain_list_id" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.firewallDomainListId"></a>

```python
firewall_domain_list_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `q_type`<sup>Required</sup> <a name="q_type" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.qType"></a>

```python
q_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### Route53GlobalresolverFirewallRuleConfig <a name="Route53GlobalresolverFirewallRuleConfig" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRuleConfig.Initializer"></a>

```python
from cdktn_provider_awscc import route53_globalresolver_firewall_rule

route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRuleConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  action: str,
  dns_view_id: str,
  name: str,
  block_override_dns_type: str = None,
  block_override_domain: str = None,
  block_override_ttl: typing.Union[int, float] = None,
  block_response: str = None,
  client_token: str = None,
  confidence_threshold: str = None,
  description: str = None,
  dns_advanced_protection: str = None,
  firewall_domain_list_id: str = None,
  priority: typing.Union[int, float] = None,
  q_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRuleConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRuleConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRuleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRuleConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRuleConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRuleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRuleConfig.property.action">action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_firewall_rule#action Route53GlobalresolverFirewallRule#action}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRuleConfig.property.dnsViewId">dns_view_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_firewall_rule#dns_view_id Route53GlobalresolverFirewallRule#dns_view_id}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRuleConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_firewall_rule#name Route53GlobalresolverFirewallRule#name}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRuleConfig.property.blockOverrideDnsType">block_override_dns_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_firewall_rule#block_override_dns_type Route53GlobalresolverFirewallRule#block_override_dns_type}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRuleConfig.property.blockOverrideDomain">block_override_domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_firewall_rule#block_override_domain Route53GlobalresolverFirewallRule#block_override_domain}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRuleConfig.property.blockOverrideTtl">block_override_ttl</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_firewall_rule#block_override_ttl Route53GlobalresolverFirewallRule#block_override_ttl}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRuleConfig.property.blockResponse">block_response</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_firewall_rule#block_response Route53GlobalresolverFirewallRule#block_response}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRuleConfig.property.clientToken">client_token</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_firewall_rule#client_token Route53GlobalresolverFirewallRule#client_token}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRuleConfig.property.confidenceThreshold">confidence_threshold</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_firewall_rule#confidence_threshold Route53GlobalresolverFirewallRule#confidence_threshold}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRuleConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_firewall_rule#description Route53GlobalresolverFirewallRule#description}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRuleConfig.property.dnsAdvancedProtection">dns_advanced_protection</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_firewall_rule#dns_advanced_protection Route53GlobalresolverFirewallRule#dns_advanced_protection}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRuleConfig.property.firewallDomainListId">firewall_domain_list_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_firewall_rule#firewall_domain_list_id Route53GlobalresolverFirewallRule#firewall_domain_list_id}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRuleConfig.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_firewall_rule#priority Route53GlobalresolverFirewallRule#priority}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRuleConfig.property.qType">q_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_firewall_rule#q_type Route53GlobalresolverFirewallRule#q_type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRuleConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRuleConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRuleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRuleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRuleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRuleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRuleConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRuleConfig.property.action"></a>

```python
action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_firewall_rule#action Route53GlobalresolverFirewallRule#action}.

---

##### `dns_view_id`<sup>Required</sup> <a name="dns_view_id" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRuleConfig.property.dnsViewId"></a>

```python
dns_view_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_firewall_rule#dns_view_id Route53GlobalresolverFirewallRule#dns_view_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRuleConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_firewall_rule#name Route53GlobalresolverFirewallRule#name}.

---

##### `block_override_dns_type`<sup>Optional</sup> <a name="block_override_dns_type" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRuleConfig.property.blockOverrideDnsType"></a>

```python
block_override_dns_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_firewall_rule#block_override_dns_type Route53GlobalresolverFirewallRule#block_override_dns_type}.

---

##### `block_override_domain`<sup>Optional</sup> <a name="block_override_domain" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRuleConfig.property.blockOverrideDomain"></a>

```python
block_override_domain: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_firewall_rule#block_override_domain Route53GlobalresolverFirewallRule#block_override_domain}.

---

##### `block_override_ttl`<sup>Optional</sup> <a name="block_override_ttl" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRuleConfig.property.blockOverrideTtl"></a>

```python
block_override_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_firewall_rule#block_override_ttl Route53GlobalresolverFirewallRule#block_override_ttl}.

---

##### `block_response`<sup>Optional</sup> <a name="block_response" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRuleConfig.property.blockResponse"></a>

```python
block_response: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_firewall_rule#block_response Route53GlobalresolverFirewallRule#block_response}.

---

##### `client_token`<sup>Optional</sup> <a name="client_token" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRuleConfig.property.clientToken"></a>

```python
client_token: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_firewall_rule#client_token Route53GlobalresolverFirewallRule#client_token}.

---

##### `confidence_threshold`<sup>Optional</sup> <a name="confidence_threshold" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRuleConfig.property.confidenceThreshold"></a>

```python
confidence_threshold: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_firewall_rule#confidence_threshold Route53GlobalresolverFirewallRule#confidence_threshold}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRuleConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_firewall_rule#description Route53GlobalresolverFirewallRule#description}.

---

##### `dns_advanced_protection`<sup>Optional</sup> <a name="dns_advanced_protection" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRuleConfig.property.dnsAdvancedProtection"></a>

```python
dns_advanced_protection: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_firewall_rule#dns_advanced_protection Route53GlobalresolverFirewallRule#dns_advanced_protection}.

---

##### `firewall_domain_list_id`<sup>Optional</sup> <a name="firewall_domain_list_id" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRuleConfig.property.firewallDomainListId"></a>

```python
firewall_domain_list_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_firewall_rule#firewall_domain_list_id Route53GlobalresolverFirewallRule#firewall_domain_list_id}.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRuleConfig.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_firewall_rule#priority Route53GlobalresolverFirewallRule#priority}.

---

##### `q_type`<sup>Optional</sup> <a name="q_type" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRuleConfig.property.qType"></a>

```python
q_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_firewall_rule#q_type Route53GlobalresolverFirewallRule#q_type}.

---



