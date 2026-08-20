# `route53ResolverFirewallDomainList` Submodule <a name="`route53ResolverFirewallDomainList` Submodule" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Route53ResolverFirewallDomainList <a name="Route53ResolverFirewallDomainList" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53resolver_firewall_domain_list awscc_route53resolver_firewall_domain_list}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.Initializer"></a>

```python
from cdktn_provider_awscc import route53_resolver_firewall_domain_list

route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  domain_file_url: str = None,
  domains: typing.List[str] = None,
  name: str = None,
  tags: IResolvable | typing.List[Route53ResolverFirewallDomainListTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.Initializer.parameter.domainFileUrl">domain_file_url</a></code> | <code>str</code> | S3 URL to import domains from. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.Initializer.parameter.domains">domains</a></code> | <code>typing.List[str]</code> | An inline list of domains to use for this domain list. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.Initializer.parameter.name">name</a></code> | <code>str</code> | FirewallDomainListName. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainListTags">Route53ResolverFirewallDomainListTags</a>]</code> | Tags. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `domain_file_url`<sup>Optional</sup> <a name="domain_file_url" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.Initializer.parameter.domainFileUrl"></a>

- *Type:* str

S3 URL to import domains from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53resolver_firewall_domain_list#domain_file_url Route53ResolverFirewallDomainList#domain_file_url}

---

##### `domains`<sup>Optional</sup> <a name="domains" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.Initializer.parameter.domains"></a>

- *Type:* typing.List[str]

An inline list of domains to use for this domain list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53resolver_firewall_domain_list#domains Route53ResolverFirewallDomainList#domains}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.Initializer.parameter.name"></a>

- *Type:* str

FirewallDomainListName.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53resolver_firewall_domain_list#name Route53ResolverFirewallDomainList#name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainListTags">Route53ResolverFirewallDomainListTags</a>]

Tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53resolver_firewall_domain_list#tags Route53ResolverFirewallDomainList#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.resetDomainFileUrl">reset_domain_file_url</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.resetDomains">reset_domains</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[Route53ResolverFirewallDomainListTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainListTags">Route53ResolverFirewallDomainListTags</a>]

---

##### `reset_domain_file_url` <a name="reset_domain_file_url" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.resetDomainFileUrl"></a>

```python
def reset_domain_file_url() -> None
```

##### `reset_domains` <a name="reset_domains" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.resetDomains"></a>

```python
def reset_domains() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a Route53ResolverFirewallDomainList resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.isConstruct"></a>

```python
from cdktn_provider_awscc import route53_resolver_firewall_domain_list

route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.isTerraformElement"></a>

```python
from cdktn_provider_awscc import route53_resolver_firewall_domain_list

route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.isTerraformResource"></a>

```python
from cdktn_provider_awscc import route53_resolver_firewall_domain_list

route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import route53_resolver_firewall_domain_list

route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a Route53ResolverFirewallDomainList resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Route53ResolverFirewallDomainList to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Route53ResolverFirewallDomainList that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53resolver_firewall_domain_list#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Route53ResolverFirewallDomainList to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.property.creationTime">creation_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.property.creatorRequestId">creator_request_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.property.domainCount">domain_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.property.firewallDomainListId">firewall_domain_list_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.property.managedOwnerName">managed_owner_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.property.modificationTime">modification_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.property.statusMessage">status_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainListTagsList">Route53ResolverFirewallDomainListTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.property.domainFileUrlInput">domain_file_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.property.domainsInput">domains_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainListTags">Route53ResolverFirewallDomainListTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.property.domainFileUrl">domain_file_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.property.domains">domains</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `creation_time`<sup>Required</sup> <a name="creation_time" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.property.creationTime"></a>

```python
creation_time: str
```

- *Type:* str

---

##### `creator_request_id`<sup>Required</sup> <a name="creator_request_id" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.property.creatorRequestId"></a>

```python
creator_request_id: str
```

- *Type:* str

---

##### `domain_count`<sup>Required</sup> <a name="domain_count" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.property.domainCount"></a>

```python
domain_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `firewall_domain_list_id`<sup>Required</sup> <a name="firewall_domain_list_id" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.property.firewallDomainListId"></a>

```python
firewall_domain_list_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `managed_owner_name`<sup>Required</sup> <a name="managed_owner_name" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.property.managedOwnerName"></a>

```python
managed_owner_name: str
```

- *Type:* str

---

##### `modification_time`<sup>Required</sup> <a name="modification_time" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.property.modificationTime"></a>

```python
modification_time: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `status_message`<sup>Required</sup> <a name="status_message" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.property.statusMessage"></a>

```python
status_message: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.property.tags"></a>

```python
tags: Route53ResolverFirewallDomainListTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainListTagsList">Route53ResolverFirewallDomainListTagsList</a>

---

##### `domain_file_url_input`<sup>Optional</sup> <a name="domain_file_url_input" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.property.domainFileUrlInput"></a>

```python
domain_file_url_input: str
```

- *Type:* str

---

##### `domains_input`<sup>Optional</sup> <a name="domains_input" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.property.domainsInput"></a>

```python
domains_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[Route53ResolverFirewallDomainListTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainListTags">Route53ResolverFirewallDomainListTags</a>]

---

##### `domain_file_url`<sup>Required</sup> <a name="domain_file_url" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.property.domainFileUrl"></a>

```python
domain_file_url: str
```

- *Type:* str

---

##### `domains`<sup>Required</sup> <a name="domains" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.property.domains"></a>

```python
domains: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainList.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### Route53ResolverFirewallDomainListConfig <a name="Route53ResolverFirewallDomainListConfig" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainListConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainListConfig.Initializer"></a>

```python
from cdktn_provider_awscc import route53_resolver_firewall_domain_list

route53ResolverFirewallDomainList.Route53ResolverFirewallDomainListConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  domain_file_url: str = None,
  domains: typing.List[str] = None,
  name: str = None,
  tags: IResolvable | typing.List[Route53ResolverFirewallDomainListTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainListConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainListConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainListConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainListConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainListConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainListConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainListConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainListConfig.property.domainFileUrl">domain_file_url</a></code> | <code>str</code> | S3 URL to import domains from. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainListConfig.property.domains">domains</a></code> | <code>typing.List[str]</code> | An inline list of domains to use for this domain list. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainListConfig.property.name">name</a></code> | <code>str</code> | FirewallDomainListName. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainListConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainListTags">Route53ResolverFirewallDomainListTags</a>]</code> | Tags. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainListConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainListConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainListConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainListConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainListConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainListConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainListConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `domain_file_url`<sup>Optional</sup> <a name="domain_file_url" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainListConfig.property.domainFileUrl"></a>

```python
domain_file_url: str
```

- *Type:* str

S3 URL to import domains from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53resolver_firewall_domain_list#domain_file_url Route53ResolverFirewallDomainList#domain_file_url}

---

##### `domains`<sup>Optional</sup> <a name="domains" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainListConfig.property.domains"></a>

```python
domains: typing.List[str]
```

- *Type:* typing.List[str]

An inline list of domains to use for this domain list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53resolver_firewall_domain_list#domains Route53ResolverFirewallDomainList#domains}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainListConfig.property.name"></a>

```python
name: str
```

- *Type:* str

FirewallDomainListName.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53resolver_firewall_domain_list#name Route53ResolverFirewallDomainList#name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainListConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[Route53ResolverFirewallDomainListTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainListTags">Route53ResolverFirewallDomainListTags</a>]

Tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53resolver_firewall_domain_list#tags Route53ResolverFirewallDomainList#tags}

---

### Route53ResolverFirewallDomainListTags <a name="Route53ResolverFirewallDomainListTags" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainListTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainListTags.Initializer"></a>

```python
from cdktn_provider_awscc import route53_resolver_firewall_domain_list

route53ResolverFirewallDomainList.Route53ResolverFirewallDomainListTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainListTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainListTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainListTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53resolver_firewall_domain_list#key Route53ResolverFirewallDomainList#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainListTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53resolver_firewall_domain_list#value Route53ResolverFirewallDomainList#value}

---

## Classes <a name="Classes" id="Classes"></a>

### Route53ResolverFirewallDomainListTagsList <a name="Route53ResolverFirewallDomainListTagsList" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainListTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainListTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import route53_resolver_firewall_domain_list

route53ResolverFirewallDomainList.Route53ResolverFirewallDomainListTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainListTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainListTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainListTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainListTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainListTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainListTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainListTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainListTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainListTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainListTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainListTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainListTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainListTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainListTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainListTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainListTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainListTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainListTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Route53ResolverFirewallDomainListTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainListTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainListTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainListTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainListTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainListTags">Route53ResolverFirewallDomainListTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainListTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainListTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainListTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Route53ResolverFirewallDomainListTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainListTags">Route53ResolverFirewallDomainListTags</a>]

---


### Route53ResolverFirewallDomainListTagsOutputReference <a name="Route53ResolverFirewallDomainListTagsOutputReference" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainListTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainListTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import route53_resolver_firewall_domain_list

route53ResolverFirewallDomainList.Route53ResolverFirewallDomainListTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainListTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainListTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainListTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainListTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainListTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainListTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainListTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainListTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainListTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainListTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainListTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainListTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainListTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainListTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainListTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainListTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainListTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainListTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainListTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainListTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainListTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainListTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainListTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainListTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainListTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainListTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainListTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainListTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainListTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainListTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainListTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainListTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainListTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainListTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainListTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainListTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainListTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainListTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainListTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainListTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainListTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainListTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainListTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainListTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainListTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainListTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainListTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainListTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainListTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainListTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainListTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainListTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainListTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainListTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainListTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainListTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainListTags">Route53ResolverFirewallDomainListTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainListTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainListTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainListTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainListTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainListTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainListTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainListTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Route53ResolverFirewallDomainListTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53ResolverFirewallDomainList.Route53ResolverFirewallDomainListTags">Route53ResolverFirewallDomainListTags</a>

---



