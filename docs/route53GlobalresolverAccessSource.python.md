# `route53GlobalresolverAccessSource` Submodule <a name="`route53GlobalresolverAccessSource` Submodule" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Route53GlobalresolverAccessSource <a name="Route53GlobalresolverAccessSource" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_access_source awscc_route53globalresolver_access_source}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.Initializer"></a>

```python
from cdktn_provider_awscc import route53_globalresolver_access_source

route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  cidr: str,
  dns_view_id: str,
  protocol: str,
  client_token: str = None,
  ip_address_type: str = None,
  name: str = None,
  tags: IResolvable | typing.List[Route53GlobalresolverAccessSourceTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.Initializer.parameter.cidr">cidr</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_access_source#cidr Route53GlobalresolverAccessSource#cidr}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.Initializer.parameter.dnsViewId">dns_view_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_access_source#dns_view_id Route53GlobalresolverAccessSource#dns_view_id}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.Initializer.parameter.protocol">protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_access_source#protocol Route53GlobalresolverAccessSource#protocol}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.Initializer.parameter.clientToken">client_token</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_access_source#client_token Route53GlobalresolverAccessSource#client_token}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.Initializer.parameter.ipAddressType">ip_address_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_access_source#ip_address_type Route53GlobalresolverAccessSource#ip_address_type}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_access_source#name Route53GlobalresolverAccessSource#name}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSourceTags">Route53GlobalresolverAccessSourceTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_access_source#tags Route53GlobalresolverAccessSource#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.Initializer.parameter.cidr"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_access_source#cidr Route53GlobalresolverAccessSource#cidr}.

---

##### `dns_view_id`<sup>Required</sup> <a name="dns_view_id" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.Initializer.parameter.dnsViewId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_access_source#dns_view_id Route53GlobalresolverAccessSource#dns_view_id}.

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.Initializer.parameter.protocol"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_access_source#protocol Route53GlobalresolverAccessSource#protocol}.

---

##### `client_token`<sup>Optional</sup> <a name="client_token" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.Initializer.parameter.clientToken"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_access_source#client_token Route53GlobalresolverAccessSource#client_token}.

---

##### `ip_address_type`<sup>Optional</sup> <a name="ip_address_type" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.Initializer.parameter.ipAddressType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_access_source#ip_address_type Route53GlobalresolverAccessSource#ip_address_type}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_access_source#name Route53GlobalresolverAccessSource#name}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSourceTags">Route53GlobalresolverAccessSourceTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_access_source#tags Route53GlobalresolverAccessSource#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.resetClientToken">reset_client_token</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.resetIpAddressType">reset_ip_address_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[Route53GlobalresolverAccessSourceTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSourceTags">Route53GlobalresolverAccessSourceTags</a>]

---

##### `reset_client_token` <a name="reset_client_token" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.resetClientToken"></a>

```python
def reset_client_token() -> None
```

##### `reset_ip_address_type` <a name="reset_ip_address_type" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.resetIpAddressType"></a>

```python
def reset_ip_address_type() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a Route53GlobalresolverAccessSource resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.isConstruct"></a>

```python
from cdktn_provider_awscc import route53_globalresolver_access_source

route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.isTerraformElement"></a>

```python
from cdktn_provider_awscc import route53_globalresolver_access_source

route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.isTerraformResource"></a>

```python
from cdktn_provider_awscc import route53_globalresolver_access_source

route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import route53_globalresolver_access_source

route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a Route53GlobalresolverAccessSource resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Route53GlobalresolverAccessSource to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Route53GlobalresolverAccessSource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_access_source#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Route53GlobalresolverAccessSource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.property.accessSourceId">access_source_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSourceTagsList">Route53GlobalresolverAccessSourceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.property.cidrInput">cidr_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.property.clientTokenInput">client_token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.property.dnsViewIdInput">dns_view_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.property.ipAddressTypeInput">ip_address_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.property.protocolInput">protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSourceTags">Route53GlobalresolverAccessSourceTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.property.cidr">cidr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.property.clientToken">client_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.property.dnsViewId">dns_view_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.property.ipAddressType">ip_address_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `access_source_id`<sup>Required</sup> <a name="access_source_id" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.property.accessSourceId"></a>

```python
access_source_id: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.property.tags"></a>

```python
tags: Route53GlobalresolverAccessSourceTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSourceTagsList">Route53GlobalresolverAccessSourceTagsList</a>

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `cidr_input`<sup>Optional</sup> <a name="cidr_input" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.property.cidrInput"></a>

```python
cidr_input: str
```

- *Type:* str

---

##### `client_token_input`<sup>Optional</sup> <a name="client_token_input" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.property.clientTokenInput"></a>

```python
client_token_input: str
```

- *Type:* str

---

##### `dns_view_id_input`<sup>Optional</sup> <a name="dns_view_id_input" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.property.dnsViewIdInput"></a>

```python
dns_view_id_input: str
```

- *Type:* str

---

##### `ip_address_type_input`<sup>Optional</sup> <a name="ip_address_type_input" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.property.ipAddressTypeInput"></a>

```python
ip_address_type_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `protocol_input`<sup>Optional</sup> <a name="protocol_input" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.property.protocolInput"></a>

```python
protocol_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[Route53GlobalresolverAccessSourceTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSourceTags">Route53GlobalresolverAccessSourceTags</a>]

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.property.cidr"></a>

```python
cidr: str
```

- *Type:* str

---

##### `client_token`<sup>Required</sup> <a name="client_token" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.property.clientToken"></a>

```python
client_token: str
```

- *Type:* str

---

##### `dns_view_id`<sup>Required</sup> <a name="dns_view_id" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.property.dnsViewId"></a>

```python
dns_view_id: str
```

- *Type:* str

---

##### `ip_address_type`<sup>Required</sup> <a name="ip_address_type" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.property.ipAddressType"></a>

```python
ip_address_type: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSource.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### Route53GlobalresolverAccessSourceConfig <a name="Route53GlobalresolverAccessSourceConfig" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSourceConfig.Initializer"></a>

```python
from cdktn_provider_awscc import route53_globalresolver_access_source

route53GlobalresolverAccessSource.Route53GlobalresolverAccessSourceConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  cidr: str,
  dns_view_id: str,
  protocol: str,
  client_token: str = None,
  ip_address_type: str = None,
  name: str = None,
  tags: IResolvable | typing.List[Route53GlobalresolverAccessSourceTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSourceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSourceConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSourceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSourceConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSourceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSourceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSourceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSourceConfig.property.cidr">cidr</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_access_source#cidr Route53GlobalresolverAccessSource#cidr}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSourceConfig.property.dnsViewId">dns_view_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_access_source#dns_view_id Route53GlobalresolverAccessSource#dns_view_id}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSourceConfig.property.protocol">protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_access_source#protocol Route53GlobalresolverAccessSource#protocol}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSourceConfig.property.clientToken">client_token</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_access_source#client_token Route53GlobalresolverAccessSource#client_token}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSourceConfig.property.ipAddressType">ip_address_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_access_source#ip_address_type Route53GlobalresolverAccessSource#ip_address_type}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSourceConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_access_source#name Route53GlobalresolverAccessSource#name}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSourceConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSourceTags">Route53GlobalresolverAccessSourceTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_access_source#tags Route53GlobalresolverAccessSource#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSourceConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSourceConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSourceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSourceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSourceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSourceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSourceConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSourceConfig.property.cidr"></a>

```python
cidr: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_access_source#cidr Route53GlobalresolverAccessSource#cidr}.

---

##### `dns_view_id`<sup>Required</sup> <a name="dns_view_id" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSourceConfig.property.dnsViewId"></a>

```python
dns_view_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_access_source#dns_view_id Route53GlobalresolverAccessSource#dns_view_id}.

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSourceConfig.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_access_source#protocol Route53GlobalresolverAccessSource#protocol}.

---

##### `client_token`<sup>Optional</sup> <a name="client_token" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSourceConfig.property.clientToken"></a>

```python
client_token: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_access_source#client_token Route53GlobalresolverAccessSource#client_token}.

---

##### `ip_address_type`<sup>Optional</sup> <a name="ip_address_type" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSourceConfig.property.ipAddressType"></a>

```python
ip_address_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_access_source#ip_address_type Route53GlobalresolverAccessSource#ip_address_type}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSourceConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_access_source#name Route53GlobalresolverAccessSource#name}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSourceConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[Route53GlobalresolverAccessSourceTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSourceTags">Route53GlobalresolverAccessSourceTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_access_source#tags Route53GlobalresolverAccessSource#tags}.

---

### Route53GlobalresolverAccessSourceTags <a name="Route53GlobalresolverAccessSourceTags" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSourceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSourceTags.Initializer"></a>

```python
from cdktn_provider_awscc import route53_globalresolver_access_source

route53GlobalresolverAccessSource.Route53GlobalresolverAccessSourceTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSourceTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_access_source#key Route53GlobalresolverAccessSource#key}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSourceTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_access_source#value Route53GlobalresolverAccessSource#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSourceTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_access_source#key Route53GlobalresolverAccessSource#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSourceTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_access_source#value Route53GlobalresolverAccessSource#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### Route53GlobalresolverAccessSourceTagsList <a name="Route53GlobalresolverAccessSourceTagsList" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSourceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSourceTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import route53_globalresolver_access_source

route53GlobalresolverAccessSource.Route53GlobalresolverAccessSourceTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSourceTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSourceTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSourceTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSourceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSourceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSourceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSourceTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSourceTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSourceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSourceTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSourceTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSourceTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSourceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSourceTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSourceTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSourceTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSourceTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSourceTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Route53GlobalresolverAccessSourceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSourceTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSourceTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSourceTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSourceTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSourceTags">Route53GlobalresolverAccessSourceTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSourceTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSourceTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSourceTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Route53GlobalresolverAccessSourceTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSourceTags">Route53GlobalresolverAccessSourceTags</a>]

---


### Route53GlobalresolverAccessSourceTagsOutputReference <a name="Route53GlobalresolverAccessSourceTagsOutputReference" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSourceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSourceTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import route53_globalresolver_access_source

route53GlobalresolverAccessSource.Route53GlobalresolverAccessSourceTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSourceTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSourceTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSourceTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSourceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSourceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSourceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSourceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSourceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSourceTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSourceTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSourceTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSourceTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSourceTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSourceTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSourceTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSourceTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSourceTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSourceTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSourceTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSourceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSourceTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSourceTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSourceTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSourceTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSourceTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSourceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSourceTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSourceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSourceTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSourceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSourceTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSourceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSourceTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSourceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSourceTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSourceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSourceTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSourceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSourceTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSourceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSourceTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSourceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSourceTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSourceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSourceTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSourceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSourceTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSourceTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSourceTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSourceTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSourceTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSourceTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSourceTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSourceTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSourceTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSourceTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSourceTags">Route53GlobalresolverAccessSourceTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSourceTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSourceTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSourceTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSourceTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSourceTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSourceTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSourceTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Route53GlobalresolverAccessSourceTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53GlobalresolverAccessSource.Route53GlobalresolverAccessSourceTags">Route53GlobalresolverAccessSourceTags</a>

---



