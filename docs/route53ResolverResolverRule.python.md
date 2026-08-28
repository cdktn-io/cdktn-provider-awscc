# `route53ResolverResolverRule` Submodule <a name="`route53ResolverResolverRule` Submodule" id="@cdktn/provider-awscc.route53ResolverResolverRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Route53ResolverResolverRule <a name="Route53ResolverResolverRule" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53resolver_resolver_rule awscc_route53resolver_resolver_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.Initializer"></a>

```python
from cdktn_provider_awscc import route53_resolver_resolver_rule

route53ResolverResolverRule.Route53ResolverResolverRule(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  rule_type: str,
  delegation_record: str = None,
  domain_name: str = None,
  name: str = None,
  resolver_endpoint_id: str = None,
  tags: IResolvable | typing.List[Route53ResolverResolverRuleTags] = None,
  target_ips: IResolvable | typing.List[Route53ResolverResolverRuleTargetIps] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.Initializer.parameter.ruleType">rule_type</a></code> | <code>str</code> | When you want to forward DNS queries for specified domain name to resolvers on your network, specify FORWARD. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.Initializer.parameter.delegationRecord">delegation_record</a></code> | <code>str</code> | The name server domain for queries to be delegated to if a query matches the delegation record. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.Initializer.parameter.domainName">domain_name</a></code> | <code>str</code> | DNS queries for this domain name are forwarded to the IP addresses that are specified in TargetIps. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.Initializer.parameter.name">name</a></code> | <code>str</code> | The name for the Resolver rule. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.Initializer.parameter.resolverEndpointId">resolver_endpoint_id</a></code> | <code>str</code> | The ID of the endpoint that the rule is associated with. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTags">Route53ResolverResolverRuleTags</a>]</code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.Initializer.parameter.targetIps">target_ips</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIps">Route53ResolverResolverRuleTargetIps</a>]</code> | An array that contains the IP addresses and ports that an outbound endpoint forwards DNS queries to. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `rule_type`<sup>Required</sup> <a name="rule_type" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.Initializer.parameter.ruleType"></a>

- *Type:* str

When you want to forward DNS queries for specified domain name to resolvers on your network, specify FORWARD.

When you have a forwarding rule to forward DNS queries for a domain to your network and you want Resolver to process queries for a subdomain of that domain, specify SYSTEM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53resolver_resolver_rule#rule_type Route53ResolverResolverRule#rule_type}

---

##### `delegation_record`<sup>Optional</sup> <a name="delegation_record" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.Initializer.parameter.delegationRecord"></a>

- *Type:* str

The name server domain for queries to be delegated to if a query matches the delegation record.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53resolver_resolver_rule#delegation_record Route53ResolverResolverRule#delegation_record}

---

##### `domain_name`<sup>Optional</sup> <a name="domain_name" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.Initializer.parameter.domainName"></a>

- *Type:* str

DNS queries for this domain name are forwarded to the IP addresses that are specified in TargetIps.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53resolver_resolver_rule#domain_name Route53ResolverResolverRule#domain_name}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.Initializer.parameter.name"></a>

- *Type:* str

The name for the Resolver rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53resolver_resolver_rule#name Route53ResolverResolverRule#name}

---

##### `resolver_endpoint_id`<sup>Optional</sup> <a name="resolver_endpoint_id" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.Initializer.parameter.resolverEndpointId"></a>

- *Type:* str

The ID of the endpoint that the rule is associated with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53resolver_resolver_rule#resolver_endpoint_id Route53ResolverResolverRule#resolver_endpoint_id}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTags">Route53ResolverResolverRuleTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53resolver_resolver_rule#tags Route53ResolverResolverRule#tags}

---

##### `target_ips`<sup>Optional</sup> <a name="target_ips" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.Initializer.parameter.targetIps"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIps">Route53ResolverResolverRuleTargetIps</a>]

An array that contains the IP addresses and ports that an outbound endpoint forwards DNS queries to.

Typically, these are the IP addresses of DNS resolvers on your network. Specify IPv4 addresses. IPv6 is not supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53resolver_resolver_rule#target_ips Route53ResolverResolverRule#target_ips}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.putTargetIps">put_target_ips</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.resetDelegationRecord">reset_delegation_record</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.resetDomainName">reset_domain_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.resetResolverEndpointId">reset_resolver_endpoint_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.resetTargetIps">reset_target_ips</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[Route53ResolverResolverRuleTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTags">Route53ResolverResolverRuleTags</a>]

---

##### `put_target_ips` <a name="put_target_ips" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.putTargetIps"></a>

```python
def put_target_ips(
  value: IResolvable | typing.List[Route53ResolverResolverRuleTargetIps]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.putTargetIps.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIps">Route53ResolverResolverRuleTargetIps</a>]

---

##### `reset_delegation_record` <a name="reset_delegation_record" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.resetDelegationRecord"></a>

```python
def reset_delegation_record() -> None
```

##### `reset_domain_name` <a name="reset_domain_name" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.resetDomainName"></a>

```python
def reset_domain_name() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_resolver_endpoint_id` <a name="reset_resolver_endpoint_id" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.resetResolverEndpointId"></a>

```python
def reset_resolver_endpoint_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_target_ips` <a name="reset_target_ips" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.resetTargetIps"></a>

```python
def reset_target_ips() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a Route53ResolverResolverRule resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.isConstruct"></a>

```python
from cdktn_provider_awscc import route53_resolver_resolver_rule

route53ResolverResolverRule.Route53ResolverResolverRule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.isTerraformElement"></a>

```python
from cdktn_provider_awscc import route53_resolver_resolver_rule

route53ResolverResolverRule.Route53ResolverResolverRule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.isTerraformResource"></a>

```python
from cdktn_provider_awscc import route53_resolver_resolver_rule

route53ResolverResolverRule.Route53ResolverResolverRule.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import route53_resolver_resolver_rule

route53ResolverResolverRule.Route53ResolverResolverRule.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a Route53ResolverResolverRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Route53ResolverResolverRule to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Route53ResolverResolverRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53resolver_resolver_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Route53ResolverResolverRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.property.resolverRuleId">resolver_rule_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsList">Route53ResolverResolverRuleTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.property.targetIps">target_ips</a></code> | <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsList">Route53ResolverResolverRuleTargetIpsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.property.delegationRecordInput">delegation_record_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.property.domainNameInput">domain_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.property.resolverEndpointIdInput">resolver_endpoint_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.property.ruleTypeInput">rule_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTags">Route53ResolverResolverRuleTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.property.targetIpsInput">target_ips_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIps">Route53ResolverResolverRuleTargetIps</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.property.delegationRecord">delegation_record</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.property.domainName">domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.property.resolverEndpointId">resolver_endpoint_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.property.ruleType">rule_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `resolver_rule_id`<sup>Required</sup> <a name="resolver_rule_id" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.property.resolverRuleId"></a>

```python
resolver_rule_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.property.tags"></a>

```python
tags: Route53ResolverResolverRuleTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsList">Route53ResolverResolverRuleTagsList</a>

---

##### `target_ips`<sup>Required</sup> <a name="target_ips" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.property.targetIps"></a>

```python
target_ips: Route53ResolverResolverRuleTargetIpsList
```

- *Type:* <a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsList">Route53ResolverResolverRuleTargetIpsList</a>

---

##### `delegation_record_input`<sup>Optional</sup> <a name="delegation_record_input" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.property.delegationRecordInput"></a>

```python
delegation_record_input: str
```

- *Type:* str

---

##### `domain_name_input`<sup>Optional</sup> <a name="domain_name_input" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.property.domainNameInput"></a>

```python
domain_name_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `resolver_endpoint_id_input`<sup>Optional</sup> <a name="resolver_endpoint_id_input" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.property.resolverEndpointIdInput"></a>

```python
resolver_endpoint_id_input: str
```

- *Type:* str

---

##### `rule_type_input`<sup>Optional</sup> <a name="rule_type_input" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.property.ruleTypeInput"></a>

```python
rule_type_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[Route53ResolverResolverRuleTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTags">Route53ResolverResolverRuleTags</a>]

---

##### `target_ips_input`<sup>Optional</sup> <a name="target_ips_input" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.property.targetIpsInput"></a>

```python
target_ips_input: IResolvable | typing.List[Route53ResolverResolverRuleTargetIps]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIps">Route53ResolverResolverRuleTargetIps</a>]

---

##### `delegation_record`<sup>Required</sup> <a name="delegation_record" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.property.delegationRecord"></a>

```python
delegation_record: str
```

- *Type:* str

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resolver_endpoint_id`<sup>Required</sup> <a name="resolver_endpoint_id" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.property.resolverEndpointId"></a>

```python
resolver_endpoint_id: str
```

- *Type:* str

---

##### `rule_type`<sup>Required</sup> <a name="rule_type" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.property.ruleType"></a>

```python
rule_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### Route53ResolverResolverRuleConfig <a name="Route53ResolverResolverRuleConfig" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleConfig.Initializer"></a>

```python
from cdktn_provider_awscc import route53_resolver_resolver_rule

route53ResolverResolverRule.Route53ResolverResolverRuleConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  rule_type: str,
  delegation_record: str = None,
  domain_name: str = None,
  name: str = None,
  resolver_endpoint_id: str = None,
  tags: IResolvable | typing.List[Route53ResolverResolverRuleTags] = None,
  target_ips: IResolvable | typing.List[Route53ResolverResolverRuleTargetIps] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleConfig.property.ruleType">rule_type</a></code> | <code>str</code> | When you want to forward DNS queries for specified domain name to resolvers on your network, specify FORWARD. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleConfig.property.delegationRecord">delegation_record</a></code> | <code>str</code> | The name server domain for queries to be delegated to if a query matches the delegation record. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleConfig.property.domainName">domain_name</a></code> | <code>str</code> | DNS queries for this domain name are forwarded to the IP addresses that are specified in TargetIps. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleConfig.property.name">name</a></code> | <code>str</code> | The name for the Resolver rule. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleConfig.property.resolverEndpointId">resolver_endpoint_id</a></code> | <code>str</code> | The ID of the endpoint that the rule is associated with. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTags">Route53ResolverResolverRuleTags</a>]</code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleConfig.property.targetIps">target_ips</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIps">Route53ResolverResolverRuleTargetIps</a>]</code> | An array that contains the IP addresses and ports that an outbound endpoint forwards DNS queries to. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `rule_type`<sup>Required</sup> <a name="rule_type" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleConfig.property.ruleType"></a>

```python
rule_type: str
```

- *Type:* str

When you want to forward DNS queries for specified domain name to resolvers on your network, specify FORWARD.

When you have a forwarding rule to forward DNS queries for a domain to your network and you want Resolver to process queries for a subdomain of that domain, specify SYSTEM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53resolver_resolver_rule#rule_type Route53ResolverResolverRule#rule_type}

---

##### `delegation_record`<sup>Optional</sup> <a name="delegation_record" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleConfig.property.delegationRecord"></a>

```python
delegation_record: str
```

- *Type:* str

The name server domain for queries to be delegated to if a query matches the delegation record.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53resolver_resolver_rule#delegation_record Route53ResolverResolverRule#delegation_record}

---

##### `domain_name`<sup>Optional</sup> <a name="domain_name" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleConfig.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

DNS queries for this domain name are forwarded to the IP addresses that are specified in TargetIps.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53resolver_resolver_rule#domain_name Route53ResolverResolverRule#domain_name}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name for the Resolver rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53resolver_resolver_rule#name Route53ResolverResolverRule#name}

---

##### `resolver_endpoint_id`<sup>Optional</sup> <a name="resolver_endpoint_id" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleConfig.property.resolverEndpointId"></a>

```python
resolver_endpoint_id: str
```

- *Type:* str

The ID of the endpoint that the rule is associated with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53resolver_resolver_rule#resolver_endpoint_id Route53ResolverResolverRule#resolver_endpoint_id}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[Route53ResolverResolverRuleTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTags">Route53ResolverResolverRuleTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53resolver_resolver_rule#tags Route53ResolverResolverRule#tags}

---

##### `target_ips`<sup>Optional</sup> <a name="target_ips" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleConfig.property.targetIps"></a>

```python
target_ips: IResolvable | typing.List[Route53ResolverResolverRuleTargetIps]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIps">Route53ResolverResolverRuleTargetIps</a>]

An array that contains the IP addresses and ports that an outbound endpoint forwards DNS queries to.

Typically, these are the IP addresses of DNS resolvers on your network. Specify IPv4 addresses. IPv6 is not supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53resolver_resolver_rule#target_ips Route53ResolverResolverRule#target_ips}

---

### Route53ResolverResolverRuleTags <a name="Route53ResolverResolverRuleTags" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTags.Initializer"></a>

```python
from cdktn_provider_awscc import route53_resolver_resolver_rule

route53ResolverResolverRule.Route53ResolverResolverRuleTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53resolver_resolver_rule#key Route53ResolverResolverRule#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53resolver_resolver_rule#value Route53ResolverResolverRule#value}

---

### Route53ResolverResolverRuleTargetIps <a name="Route53ResolverResolverRuleTargetIps" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIps"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIps.Initializer"></a>

```python
from cdktn_provider_awscc import route53_resolver_resolver_rule

route53ResolverResolverRule.Route53ResolverResolverRuleTargetIps(
  ip: str = None,
  ipv6: str = None,
  port: str = None,
  protocol: str = None,
  server_name_indication: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIps.property.ip">ip</a></code> | <code>str</code> | One IP address that you want to forward DNS queries to. You can specify only IPv4 addresses. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIps.property.ipv6">ipv6</a></code> | <code>str</code> | One IPv6 address that you want to forward DNS queries to. You can specify only IPv6 addresses. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIps.property.port">port</a></code> | <code>str</code> | The port at Ip that you want to forward DNS queries to. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIps.property.protocol">protocol</a></code> | <code>str</code> | The protocol that you want to use to forward DNS queries. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIps.property.serverNameIndication">server_name_indication</a></code> | <code>str</code> | The SNI of the target name servers for DoH/DoH-FIPS outbound endpoints. |

---

##### `ip`<sup>Optional</sup> <a name="ip" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIps.property.ip"></a>

```python
ip: str
```

- *Type:* str

One IP address that you want to forward DNS queries to. You can specify only IPv4 addresses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53resolver_resolver_rule#ip Route53ResolverResolverRule#ip}

---

##### `ipv6`<sup>Optional</sup> <a name="ipv6" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIps.property.ipv6"></a>

```python
ipv6: str
```

- *Type:* str

One IPv6 address that you want to forward DNS queries to. You can specify only IPv6 addresses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53resolver_resolver_rule#ipv_6 Route53ResolverResolverRule#ipv_6}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIps.property.port"></a>

```python
port: str
```

- *Type:* str

The port at Ip that you want to forward DNS queries to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53resolver_resolver_rule#port Route53ResolverResolverRule#port}

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIps.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

The protocol that you want to use to forward DNS queries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53resolver_resolver_rule#protocol Route53ResolverResolverRule#protocol}

---

##### `server_name_indication`<sup>Optional</sup> <a name="server_name_indication" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIps.property.serverNameIndication"></a>

```python
server_name_indication: str
```

- *Type:* str

The SNI of the target name servers for DoH/DoH-FIPS outbound endpoints.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53resolver_resolver_rule#server_name_indication Route53ResolverResolverRule#server_name_indication}

---

## Classes <a name="Classes" id="Classes"></a>

### Route53ResolverResolverRuleTagsList <a name="Route53ResolverResolverRuleTagsList" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import route53_resolver_resolver_rule

route53ResolverResolverRule.Route53ResolverResolverRuleTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Route53ResolverResolverRuleTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTags">Route53ResolverResolverRuleTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Route53ResolverResolverRuleTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTags">Route53ResolverResolverRuleTags</a>]

---


### Route53ResolverResolverRuleTagsOutputReference <a name="Route53ResolverResolverRuleTagsOutputReference" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import route53_resolver_resolver_rule

route53ResolverResolverRule.Route53ResolverResolverRuleTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTags">Route53ResolverResolverRuleTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Route53ResolverResolverRuleTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTags">Route53ResolverResolverRuleTags</a>

---


### Route53ResolverResolverRuleTargetIpsList <a name="Route53ResolverResolverRuleTargetIpsList" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsList.Initializer"></a>

```python
from cdktn_provider_awscc import route53_resolver_resolver_rule

route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Route53ResolverResolverRuleTargetIpsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIps">Route53ResolverResolverRuleTargetIps</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Route53ResolverResolverRuleTargetIps]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIps">Route53ResolverResolverRuleTargetIps</a>]

---


### Route53ResolverResolverRuleTargetIpsOutputReference <a name="Route53ResolverResolverRuleTargetIpsOutputReference" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import route53_resolver_resolver_rule

route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsOutputReference.resetIp">reset_ip</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsOutputReference.resetIpv6">reset_ipv6</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsOutputReference.resetPort">reset_port</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsOutputReference.resetProtocol">reset_protocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsOutputReference.resetServerNameIndication">reset_server_name_indication</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_ip` <a name="reset_ip" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsOutputReference.resetIp"></a>

```python
def reset_ip() -> None
```

##### `reset_ipv6` <a name="reset_ipv6" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsOutputReference.resetIpv6"></a>

```python
def reset_ipv6() -> None
```

##### `reset_port` <a name="reset_port" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsOutputReference.resetPort"></a>

```python
def reset_port() -> None
```

##### `reset_protocol` <a name="reset_protocol" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsOutputReference.resetProtocol"></a>

```python
def reset_protocol() -> None
```

##### `reset_server_name_indication` <a name="reset_server_name_indication" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsOutputReference.resetServerNameIndication"></a>

```python
def reset_server_name_indication() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsOutputReference.property.ipInput">ip_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsOutputReference.property.ipv6Input">ipv6_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsOutputReference.property.portInput">port_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsOutputReference.property.protocolInput">protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsOutputReference.property.serverNameIndicationInput">server_name_indication_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsOutputReference.property.ip">ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsOutputReference.property.ipv6">ipv6</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsOutputReference.property.port">port</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsOutputReference.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsOutputReference.property.serverNameIndication">server_name_indication</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIps">Route53ResolverResolverRuleTargetIps</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ip_input`<sup>Optional</sup> <a name="ip_input" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsOutputReference.property.ipInput"></a>

```python
ip_input: str
```

- *Type:* str

---

##### `ipv6_input`<sup>Optional</sup> <a name="ipv6_input" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsOutputReference.property.ipv6Input"></a>

```python
ipv6_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsOutputReference.property.portInput"></a>

```python
port_input: str
```

- *Type:* str

---

##### `protocol_input`<sup>Optional</sup> <a name="protocol_input" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsOutputReference.property.protocolInput"></a>

```python
protocol_input: str
```

- *Type:* str

---

##### `server_name_indication_input`<sup>Optional</sup> <a name="server_name_indication_input" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsOutputReference.property.serverNameIndicationInput"></a>

```python
server_name_indication_input: str
```

- *Type:* str

---

##### `ip`<sup>Required</sup> <a name="ip" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsOutputReference.property.ip"></a>

```python
ip: str
```

- *Type:* str

---

##### `ipv6`<sup>Required</sup> <a name="ipv6" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsOutputReference.property.ipv6"></a>

```python
ipv6: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsOutputReference.property.port"></a>

```python
port: str
```

- *Type:* str

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsOutputReference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `server_name_indication`<sup>Required</sup> <a name="server_name_indication" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsOutputReference.property.serverNameIndication"></a>

```python
server_name_indication: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIpsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Route53ResolverResolverRuleTargetIps
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53ResolverResolverRule.Route53ResolverResolverRuleTargetIps">Route53ResolverResolverRuleTargetIps</a>

---



