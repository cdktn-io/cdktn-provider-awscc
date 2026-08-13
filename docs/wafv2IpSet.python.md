# `wafv2IpSet` Submodule <a name="`wafv2IpSet` Submodule" id="@cdktn/provider-awscc.wafv2IpSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Wafv2IpSet <a name="Wafv2IpSet" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wafv2_ip_set awscc_wafv2_ip_set}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.Initializer"></a>

```python
from cdktn_provider_awscc import wafv2_ip_set

wafv2IpSet.Wafv2IpSet(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  addresses: typing.List[str],
  ip_address_version: str,
  scope: str,
  description: str = None,
  name: str = None,
  tags: IResolvable | typing.List[Wafv2IpSetTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.Initializer.parameter.addresses">addresses</a></code> | <code>typing.List[str]</code> | List of IPAddresses. |
| <code><a href="#@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.Initializer.parameter.ipAddressVersion">ip_address_version</a></code> | <code>str</code> | Type of addresses in the IPSet, use IPV4 for IPV4 IP addresses, IPV6 for IPV6 address. |
| <code><a href="#@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.Initializer.parameter.scope">scope</a></code> | <code>str</code> | Use CLOUDFRONT for CloudFront IPSet, use REGIONAL for Application Load Balancer and API Gateway. |
| <code><a href="#@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.Initializer.parameter.description">description</a></code> | <code>str</code> | Description of the entity. |
| <code><a href="#@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the IPSet. |
| <code><a href="#@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSetTags">Wafv2IpSetTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wafv2_ip_set#tags Wafv2IpSet#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `addresses`<sup>Required</sup> <a name="addresses" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.Initializer.parameter.addresses"></a>

- *Type:* typing.List[str]

List of IPAddresses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wafv2_ip_set#addresses Wafv2IpSet#addresses}

---

##### `ip_address_version`<sup>Required</sup> <a name="ip_address_version" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.Initializer.parameter.ipAddressVersion"></a>

- *Type:* str

Type of addresses in the IPSet, use IPV4 for IPV4 IP addresses, IPV6 for IPV6 address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wafv2_ip_set#ip_address_version Wafv2IpSet#ip_address_version}

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.Initializer.parameter.scope"></a>

- *Type:* str

Use CLOUDFRONT for CloudFront IPSet, use REGIONAL for Application Load Balancer and API Gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wafv2_ip_set#scope Wafv2IpSet#scope}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.Initializer.parameter.description"></a>

- *Type:* str

Description of the entity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wafv2_ip_set#description Wafv2IpSet#description}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.Initializer.parameter.name"></a>

- *Type:* str

Name of the IPSet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wafv2_ip_set#name Wafv2IpSet#name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSetTags">Wafv2IpSetTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wafv2_ip_set#tags Wafv2IpSet#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[Wafv2IpSetTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSetTags">Wafv2IpSetTags</a>]

---

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a Wafv2IpSet resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.isConstruct"></a>

```python
from cdktn_provider_awscc import wafv2_ip_set

wafv2IpSet.Wafv2IpSet.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.isTerraformElement"></a>

```python
from cdktn_provider_awscc import wafv2_ip_set

wafv2IpSet.Wafv2IpSet.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.isTerraformResource"></a>

```python
from cdktn_provider_awscc import wafv2_ip_set

wafv2IpSet.Wafv2IpSet.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import wafv2_ip_set

wafv2IpSet.Wafv2IpSet.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a Wafv2IpSet resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Wafv2IpSet to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Wafv2IpSet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wafv2_ip_set#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Wafv2IpSet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.property.ipSetId">ip_set_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSetTagsList">Wafv2IpSetTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.property.addressesInput">addresses_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.property.ipAddressVersionInput">ip_address_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.property.scopeInput">scope_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSetTags">Wafv2IpSetTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.property.addresses">addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.property.ipAddressVersion">ip_address_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.property.scope">scope</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ip_set_id`<sup>Required</sup> <a name="ip_set_id" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.property.ipSetId"></a>

```python
ip_set_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.property.tags"></a>

```python
tags: Wafv2IpSetTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSetTagsList">Wafv2IpSetTagsList</a>

---

##### `addresses_input`<sup>Optional</sup> <a name="addresses_input" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.property.addressesInput"></a>

```python
addresses_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `ip_address_version_input`<sup>Optional</sup> <a name="ip_address_version_input" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.property.ipAddressVersionInput"></a>

```python
ip_address_version_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `scope_input`<sup>Optional</sup> <a name="scope_input" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.property.scopeInput"></a>

```python
scope_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[Wafv2IpSetTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSetTags">Wafv2IpSetTags</a>]

---

##### `addresses`<sup>Required</sup> <a name="addresses" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.property.addresses"></a>

```python
addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `ip_address_version`<sup>Required</sup> <a name="ip_address_version" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.property.ipAddressVersion"></a>

```python
ip_address_version: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.property.scope"></a>

```python
scope: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSet.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### Wafv2IpSetConfig <a name="Wafv2IpSetConfig" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSetConfig.Initializer"></a>

```python
from cdktn_provider_awscc import wafv2_ip_set

wafv2IpSet.Wafv2IpSetConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  addresses: typing.List[str],
  ip_address_version: str,
  scope: str,
  description: str = None,
  name: str = None,
  tags: IResolvable | typing.List[Wafv2IpSetTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSetConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSetConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSetConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSetConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSetConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSetConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSetConfig.property.addresses">addresses</a></code> | <code>typing.List[str]</code> | List of IPAddresses. |
| <code><a href="#@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSetConfig.property.ipAddressVersion">ip_address_version</a></code> | <code>str</code> | Type of addresses in the IPSet, use IPV4 for IPV4 IP addresses, IPV6 for IPV6 address. |
| <code><a href="#@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSetConfig.property.scope">scope</a></code> | <code>str</code> | Use CLOUDFRONT for CloudFront IPSet, use REGIONAL for Application Load Balancer and API Gateway. |
| <code><a href="#@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSetConfig.property.description">description</a></code> | <code>str</code> | Description of the entity. |
| <code><a href="#@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSetConfig.property.name">name</a></code> | <code>str</code> | Name of the IPSet. |
| <code><a href="#@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSetConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSetTags">Wafv2IpSetTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wafv2_ip_set#tags Wafv2IpSet#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSetConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSetConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSetConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSetConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSetConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSetConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSetConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `addresses`<sup>Required</sup> <a name="addresses" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSetConfig.property.addresses"></a>

```python
addresses: typing.List[str]
```

- *Type:* typing.List[str]

List of IPAddresses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wafv2_ip_set#addresses Wafv2IpSet#addresses}

---

##### `ip_address_version`<sup>Required</sup> <a name="ip_address_version" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSetConfig.property.ipAddressVersion"></a>

```python
ip_address_version: str
```

- *Type:* str

Type of addresses in the IPSet, use IPV4 for IPV4 IP addresses, IPV6 for IPV6 address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wafv2_ip_set#ip_address_version Wafv2IpSet#ip_address_version}

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSetConfig.property.scope"></a>

```python
scope: str
```

- *Type:* str

Use CLOUDFRONT for CloudFront IPSet, use REGIONAL for Application Load Balancer and API Gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wafv2_ip_set#scope Wafv2IpSet#scope}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSetConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Description of the entity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wafv2_ip_set#description Wafv2IpSet#description}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSetConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the IPSet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wafv2_ip_set#name Wafv2IpSet#name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSetConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[Wafv2IpSetTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSetTags">Wafv2IpSetTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wafv2_ip_set#tags Wafv2IpSet#tags}.

---

### Wafv2IpSetTags <a name="Wafv2IpSetTags" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSetTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSetTags.Initializer"></a>

```python
from cdktn_provider_awscc import wafv2_ip_set

wafv2IpSet.Wafv2IpSetTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSetTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wafv2_ip_set#key Wafv2IpSet#key}. |
| <code><a href="#@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSetTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wafv2_ip_set#value Wafv2IpSet#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSetTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wafv2_ip_set#key Wafv2IpSet#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSetTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wafv2_ip_set#value Wafv2IpSet#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### Wafv2IpSetTagsList <a name="Wafv2IpSetTagsList" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSetTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSetTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import wafv2_ip_set

wafv2IpSet.Wafv2IpSetTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSetTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSetTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSetTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSetTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSetTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSetTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSetTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSetTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSetTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSetTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSetTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSetTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSetTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSetTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSetTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSetTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSetTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSetTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Wafv2IpSetTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSetTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSetTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSetTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSetTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSetTags">Wafv2IpSetTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSetTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSetTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSetTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Wafv2IpSetTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSetTags">Wafv2IpSetTags</a>]

---


### Wafv2IpSetTagsOutputReference <a name="Wafv2IpSetTagsOutputReference" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSetTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSetTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import wafv2_ip_set

wafv2IpSet.Wafv2IpSetTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSetTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSetTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSetTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSetTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSetTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSetTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSetTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSetTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSetTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSetTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSetTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSetTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSetTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSetTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSetTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSetTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSetTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSetTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSetTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSetTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSetTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSetTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSetTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSetTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSetTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSetTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSetTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSetTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSetTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSetTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSetTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSetTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSetTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSetTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSetTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSetTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSetTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSetTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSetTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSetTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSetTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSetTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSetTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSetTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSetTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSetTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSetTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSetTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSetTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSetTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSetTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSetTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSetTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSetTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSetTags">Wafv2IpSetTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSetTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSetTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSetTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSetTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSetTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSetTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSetTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Wafv2IpSetTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wafv2IpSet.Wafv2IpSetTags">Wafv2IpSetTags</a>

---



