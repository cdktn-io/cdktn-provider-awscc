# `locationApiKey` Submodule <a name="`locationApiKey` Submodule" id="@cdktn/provider-awscc.locationApiKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LocationApiKey <a name="LocationApiKey" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/location_api_key awscc_location_api_key}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.Initializer"></a>

```python
from cdktn_provider_awscc import location_api_key

locationApiKey.LocationApiKey(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  key_name: str,
  restrictions: LocationApiKeyRestrictions,
  description: str = None,
  expire_time: str = None,
  force_delete: bool | IResolvable = None,
  force_update: bool | IResolvable = None,
  no_expiry: bool | IResolvable = None,
  tags: IResolvable | typing.List[LocationApiKeyTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.Initializer.parameter.keyName">key_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/location_api_key#key_name LocationApiKey#key_name}. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.Initializer.parameter.restrictions">restrictions</a></code> | <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictions">LocationApiKeyRestrictions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/location_api_key#restrictions LocationApiKey#restrictions}. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/location_api_key#description LocationApiKey#description}. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.Initializer.parameter.expireTime">expire_time</a></code> | <code>str</code> | The datetime value in ISO 8601 format. The timezone is always UTC. (YYYY-MM-DDThh:mm:ss.sssZ). |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.Initializer.parameter.forceDelete">force_delete</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/location_api_key#force_delete LocationApiKey#force_delete}. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.Initializer.parameter.forceUpdate">force_update</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/location_api_key#force_update LocationApiKey#force_update}. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.Initializer.parameter.noExpiry">no_expiry</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/location_api_key#no_expiry LocationApiKey#no_expiry}. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTags">LocationApiKeyTags</a>]</code> | An array of key-value pairs to apply to this resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `key_name`<sup>Required</sup> <a name="key_name" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.Initializer.parameter.keyName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/location_api_key#key_name LocationApiKey#key_name}.

---

##### `restrictions`<sup>Required</sup> <a name="restrictions" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.Initializer.parameter.restrictions"></a>

- *Type:* <a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictions">LocationApiKeyRestrictions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/location_api_key#restrictions LocationApiKey#restrictions}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/location_api_key#description LocationApiKey#description}.

---

##### `expire_time`<sup>Optional</sup> <a name="expire_time" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.Initializer.parameter.expireTime"></a>

- *Type:* str

The datetime value in ISO 8601 format. The timezone is always UTC. (YYYY-MM-DDThh:mm:ss.sssZ).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/location_api_key#expire_time LocationApiKey#expire_time}

---

##### `force_delete`<sup>Optional</sup> <a name="force_delete" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.Initializer.parameter.forceDelete"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/location_api_key#force_delete LocationApiKey#force_delete}.

---

##### `force_update`<sup>Optional</sup> <a name="force_update" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.Initializer.parameter.forceUpdate"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/location_api_key#force_update LocationApiKey#force_update}.

---

##### `no_expiry`<sup>Optional</sup> <a name="no_expiry" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.Initializer.parameter.noExpiry"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/location_api_key#no_expiry LocationApiKey#no_expiry}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTags">LocationApiKeyTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/location_api_key#tags LocationApiKey#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.putRestrictions">put_restrictions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.resetExpireTime">reset_expire_time</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.resetForceDelete">reset_force_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.resetForceUpdate">reset_force_update</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.resetNoExpiry">reset_no_expiry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_restrictions` <a name="put_restrictions" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.putRestrictions"></a>

```python
def put_restrictions(
  allow_actions: typing.List[str],
  allow_resources: typing.List[str],
  allow_android_apps: IResolvable | typing.List[LocationApiKeyRestrictionsAllowAndroidApps] = None,
  allow_apple_apps: IResolvable | typing.List[LocationApiKeyRestrictionsAllowAppleApps] = None,
  allow_referers: typing.List[str] = None
) -> None
```

###### `allow_actions`<sup>Required</sup> <a name="allow_actions" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.putRestrictions.parameter.allowActions"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/location_api_key#allow_actions LocationApiKey#allow_actions}.

---

###### `allow_resources`<sup>Required</sup> <a name="allow_resources" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.putRestrictions.parameter.allowResources"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/location_api_key#allow_resources LocationApiKey#allow_resources}.

---

###### `allow_android_apps`<sup>Optional</sup> <a name="allow_android_apps" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.putRestrictions.parameter.allowAndroidApps"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidApps">LocationApiKeyRestrictionsAllowAndroidApps</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/location_api_key#allow_android_apps LocationApiKey#allow_android_apps}.

---

###### `allow_apple_apps`<sup>Optional</sup> <a name="allow_apple_apps" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.putRestrictions.parameter.allowAppleApps"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleApps">LocationApiKeyRestrictionsAllowAppleApps</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/location_api_key#allow_apple_apps LocationApiKey#allow_apple_apps}.

---

###### `allow_referers`<sup>Optional</sup> <a name="allow_referers" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.putRestrictions.parameter.allowReferers"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/location_api_key#allow_referers LocationApiKey#allow_referers}.

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[LocationApiKeyTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTags">LocationApiKeyTags</a>]

---

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_expire_time` <a name="reset_expire_time" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.resetExpireTime"></a>

```python
def reset_expire_time() -> None
```

##### `reset_force_delete` <a name="reset_force_delete" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.resetForceDelete"></a>

```python
def reset_force_delete() -> None
```

##### `reset_force_update` <a name="reset_force_update" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.resetForceUpdate"></a>

```python
def reset_force_update() -> None
```

##### `reset_no_expiry` <a name="reset_no_expiry" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.resetNoExpiry"></a>

```python
def reset_no_expiry() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a LocationApiKey resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.isConstruct"></a>

```python
from cdktn_provider_awscc import location_api_key

locationApiKey.LocationApiKey.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.isTerraformElement"></a>

```python
from cdktn_provider_awscc import location_api_key

locationApiKey.LocationApiKey.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.isTerraformResource"></a>

```python
from cdktn_provider_awscc import location_api_key

locationApiKey.LocationApiKey.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import location_api_key

locationApiKey.LocationApiKey.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a LocationApiKey resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the LocationApiKey to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing LocationApiKey that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/location_api_key#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the LocationApiKey to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.keyArn">key_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.restrictions">restrictions</a></code> | <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference">LocationApiKeyRestrictionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsList">LocationApiKeyTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.expireTimeInput">expire_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.forceDeleteInput">force_delete_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.forceUpdateInput">force_update_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.keyNameInput">key_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.noExpiryInput">no_expiry_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.restrictionsInput">restrictions_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictions">LocationApiKeyRestrictions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTags">LocationApiKeyTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.expireTime">expire_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.forceDelete">force_delete</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.forceUpdate">force_update</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.keyName">key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.noExpiry">no_expiry</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `key_arn`<sup>Required</sup> <a name="key_arn" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.keyArn"></a>

```python
key_arn: str
```

- *Type:* str

---

##### `restrictions`<sup>Required</sup> <a name="restrictions" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.restrictions"></a>

```python
restrictions: LocationApiKeyRestrictionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference">LocationApiKeyRestrictionsOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.tags"></a>

```python
tags: LocationApiKeyTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsList">LocationApiKeyTagsList</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `expire_time_input`<sup>Optional</sup> <a name="expire_time_input" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.expireTimeInput"></a>

```python
expire_time_input: str
```

- *Type:* str

---

##### `force_delete_input`<sup>Optional</sup> <a name="force_delete_input" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.forceDeleteInput"></a>

```python
force_delete_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `force_update_input`<sup>Optional</sup> <a name="force_update_input" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.forceUpdateInput"></a>

```python
force_update_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `key_name_input`<sup>Optional</sup> <a name="key_name_input" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.keyNameInput"></a>

```python
key_name_input: str
```

- *Type:* str

---

##### `no_expiry_input`<sup>Optional</sup> <a name="no_expiry_input" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.noExpiryInput"></a>

```python
no_expiry_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `restrictions_input`<sup>Optional</sup> <a name="restrictions_input" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.restrictionsInput"></a>

```python
restrictions_input: IResolvable | LocationApiKeyRestrictions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictions">LocationApiKeyRestrictions</a>

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[LocationApiKeyTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTags">LocationApiKeyTags</a>]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `expire_time`<sup>Required</sup> <a name="expire_time" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.expireTime"></a>

```python
expire_time: str
```

- *Type:* str

---

##### `force_delete`<sup>Required</sup> <a name="force_delete" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.forceDelete"></a>

```python
force_delete: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `force_update`<sup>Required</sup> <a name="force_update" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.forceUpdate"></a>

```python
force_update: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `key_name`<sup>Required</sup> <a name="key_name" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.keyName"></a>

```python
key_name: str
```

- *Type:* str

---

##### `no_expiry`<sup>Required</sup> <a name="no_expiry" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.noExpiry"></a>

```python
no_expiry: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.locationApiKey.LocationApiKey.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LocationApiKeyConfig <a name="LocationApiKeyConfig" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyConfig.Initializer"></a>

```python
from cdktn_provider_awscc import location_api_key

locationApiKey.LocationApiKeyConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  key_name: str,
  restrictions: LocationApiKeyRestrictions,
  description: str = None,
  expire_time: str = None,
  force_delete: bool | IResolvable = None,
  force_update: bool | IResolvable = None,
  no_expiry: bool | IResolvable = None,
  tags: IResolvable | typing.List[LocationApiKeyTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyConfig.property.keyName">key_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/location_api_key#key_name LocationApiKey#key_name}. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyConfig.property.restrictions">restrictions</a></code> | <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictions">LocationApiKeyRestrictions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/location_api_key#restrictions LocationApiKey#restrictions}. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/location_api_key#description LocationApiKey#description}. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyConfig.property.expireTime">expire_time</a></code> | <code>str</code> | The datetime value in ISO 8601 format. The timezone is always UTC. (YYYY-MM-DDThh:mm:ss.sssZ). |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyConfig.property.forceDelete">force_delete</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/location_api_key#force_delete LocationApiKey#force_delete}. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyConfig.property.forceUpdate">force_update</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/location_api_key#force_update LocationApiKey#force_update}. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyConfig.property.noExpiry">no_expiry</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/location_api_key#no_expiry LocationApiKey#no_expiry}. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTags">LocationApiKeyTags</a>]</code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `key_name`<sup>Required</sup> <a name="key_name" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyConfig.property.keyName"></a>

```python
key_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/location_api_key#key_name LocationApiKey#key_name}.

---

##### `restrictions`<sup>Required</sup> <a name="restrictions" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyConfig.property.restrictions"></a>

```python
restrictions: LocationApiKeyRestrictions
```

- *Type:* <a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictions">LocationApiKeyRestrictions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/location_api_key#restrictions LocationApiKey#restrictions}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/location_api_key#description LocationApiKey#description}.

---

##### `expire_time`<sup>Optional</sup> <a name="expire_time" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyConfig.property.expireTime"></a>

```python
expire_time: str
```

- *Type:* str

The datetime value in ISO 8601 format. The timezone is always UTC. (YYYY-MM-DDThh:mm:ss.sssZ).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/location_api_key#expire_time LocationApiKey#expire_time}

---

##### `force_delete`<sup>Optional</sup> <a name="force_delete" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyConfig.property.forceDelete"></a>

```python
force_delete: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/location_api_key#force_delete LocationApiKey#force_delete}.

---

##### `force_update`<sup>Optional</sup> <a name="force_update" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyConfig.property.forceUpdate"></a>

```python
force_update: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/location_api_key#force_update LocationApiKey#force_update}.

---

##### `no_expiry`<sup>Optional</sup> <a name="no_expiry" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyConfig.property.noExpiry"></a>

```python
no_expiry: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/location_api_key#no_expiry LocationApiKey#no_expiry}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[LocationApiKeyTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTags">LocationApiKeyTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/location_api_key#tags LocationApiKey#tags}

---

### LocationApiKeyRestrictions <a name="LocationApiKeyRestrictions" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictions.Initializer"></a>

```python
from cdktn_provider_awscc import location_api_key

locationApiKey.LocationApiKeyRestrictions(
  allow_actions: typing.List[str],
  allow_resources: typing.List[str],
  allow_android_apps: IResolvable | typing.List[LocationApiKeyRestrictionsAllowAndroidApps] = None,
  allow_apple_apps: IResolvable | typing.List[LocationApiKeyRestrictionsAllowAppleApps] = None,
  allow_referers: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictions.property.allowActions">allow_actions</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/location_api_key#allow_actions LocationApiKey#allow_actions}. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictions.property.allowResources">allow_resources</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/location_api_key#allow_resources LocationApiKey#allow_resources}. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictions.property.allowAndroidApps">allow_android_apps</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidApps">LocationApiKeyRestrictionsAllowAndroidApps</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/location_api_key#allow_android_apps LocationApiKey#allow_android_apps}. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictions.property.allowAppleApps">allow_apple_apps</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleApps">LocationApiKeyRestrictionsAllowAppleApps</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/location_api_key#allow_apple_apps LocationApiKey#allow_apple_apps}. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictions.property.allowReferers">allow_referers</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/location_api_key#allow_referers LocationApiKey#allow_referers}. |

---

##### `allow_actions`<sup>Required</sup> <a name="allow_actions" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictions.property.allowActions"></a>

```python
allow_actions: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/location_api_key#allow_actions LocationApiKey#allow_actions}.

---

##### `allow_resources`<sup>Required</sup> <a name="allow_resources" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictions.property.allowResources"></a>

```python
allow_resources: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/location_api_key#allow_resources LocationApiKey#allow_resources}.

---

##### `allow_android_apps`<sup>Optional</sup> <a name="allow_android_apps" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictions.property.allowAndroidApps"></a>

```python
allow_android_apps: IResolvable | typing.List[LocationApiKeyRestrictionsAllowAndroidApps]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidApps">LocationApiKeyRestrictionsAllowAndroidApps</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/location_api_key#allow_android_apps LocationApiKey#allow_android_apps}.

---

##### `allow_apple_apps`<sup>Optional</sup> <a name="allow_apple_apps" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictions.property.allowAppleApps"></a>

```python
allow_apple_apps: IResolvable | typing.List[LocationApiKeyRestrictionsAllowAppleApps]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleApps">LocationApiKeyRestrictionsAllowAppleApps</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/location_api_key#allow_apple_apps LocationApiKey#allow_apple_apps}.

---

##### `allow_referers`<sup>Optional</sup> <a name="allow_referers" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictions.property.allowReferers"></a>

```python
allow_referers: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/location_api_key#allow_referers LocationApiKey#allow_referers}.

---

### LocationApiKeyRestrictionsAllowAndroidApps <a name="LocationApiKeyRestrictionsAllowAndroidApps" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidApps"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidApps.Initializer"></a>

```python
from cdktn_provider_awscc import location_api_key

locationApiKey.LocationApiKeyRestrictionsAllowAndroidApps(
  certificate_fingerprint: str = None,
  package: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidApps.property.certificateFingerprint">certificate_fingerprint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/location_api_key#certificate_fingerprint LocationApiKey#certificate_fingerprint}. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidApps.property.package">package</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/location_api_key#package LocationApiKey#package}. |

---

##### `certificate_fingerprint`<sup>Optional</sup> <a name="certificate_fingerprint" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidApps.property.certificateFingerprint"></a>

```python
certificate_fingerprint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/location_api_key#certificate_fingerprint LocationApiKey#certificate_fingerprint}.

---

##### `package`<sup>Optional</sup> <a name="package" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidApps.property.package"></a>

```python
package: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/location_api_key#package LocationApiKey#package}.

---

### LocationApiKeyRestrictionsAllowAppleApps <a name="LocationApiKeyRestrictionsAllowAppleApps" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleApps"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleApps.Initializer"></a>

```python
from cdktn_provider_awscc import location_api_key

locationApiKey.LocationApiKeyRestrictionsAllowAppleApps(
  bundle_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleApps.property.bundleId">bundle_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/location_api_key#bundle_id LocationApiKey#bundle_id}. |

---

##### `bundle_id`<sup>Optional</sup> <a name="bundle_id" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleApps.property.bundleId"></a>

```python
bundle_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/location_api_key#bundle_id LocationApiKey#bundle_id}.

---

### LocationApiKeyTags <a name="LocationApiKeyTags" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTags.Initializer"></a>

```python
from cdktn_provider_awscc import location_api_key

locationApiKey.LocationApiKeyTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/location_api_key#key LocationApiKey#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/location_api_key#value LocationApiKey#value}

---

## Classes <a name="Classes" id="Classes"></a>

### LocationApiKeyRestrictionsAllowAndroidAppsList <a name="LocationApiKeyRestrictionsAllowAndroidAppsList" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsList.Initializer"></a>

```python
from cdktn_provider_awscc import location_api_key

locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LocationApiKeyRestrictionsAllowAndroidAppsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidApps">LocationApiKeyRestrictionsAllowAndroidApps</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[LocationApiKeyRestrictionsAllowAndroidApps]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidApps">LocationApiKeyRestrictionsAllowAndroidApps</a>]

---


### LocationApiKeyRestrictionsAllowAndroidAppsOutputReference <a name="LocationApiKeyRestrictionsAllowAndroidAppsOutputReference" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import location_api_key

locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.resetCertificateFingerprint">reset_certificate_fingerprint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.resetPackage">reset_package</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_certificate_fingerprint` <a name="reset_certificate_fingerprint" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.resetCertificateFingerprint"></a>

```python
def reset_certificate_fingerprint() -> None
```

##### `reset_package` <a name="reset_package" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.resetPackage"></a>

```python
def reset_package() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.property.certificateFingerprintInput">certificate_fingerprint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.property.packageInput">package_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.property.certificateFingerprint">certificate_fingerprint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.property.package">package</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidApps">LocationApiKeyRestrictionsAllowAndroidApps</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `certificate_fingerprint_input`<sup>Optional</sup> <a name="certificate_fingerprint_input" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.property.certificateFingerprintInput"></a>

```python
certificate_fingerprint_input: str
```

- *Type:* str

---

##### `package_input`<sup>Optional</sup> <a name="package_input" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.property.packageInput"></a>

```python
package_input: str
```

- *Type:* str

---

##### `certificate_fingerprint`<sup>Required</sup> <a name="certificate_fingerprint" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.property.certificateFingerprint"></a>

```python
certificate_fingerprint: str
```

- *Type:* str

---

##### `package`<sup>Required</sup> <a name="package" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.property.package"></a>

```python
package: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LocationApiKeyRestrictionsAllowAndroidApps
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidApps">LocationApiKeyRestrictionsAllowAndroidApps</a>

---


### LocationApiKeyRestrictionsAllowAppleAppsList <a name="LocationApiKeyRestrictionsAllowAppleAppsList" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsList.Initializer"></a>

```python
from cdktn_provider_awscc import location_api_key

locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LocationApiKeyRestrictionsAllowAppleAppsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleApps">LocationApiKeyRestrictionsAllowAppleApps</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[LocationApiKeyRestrictionsAllowAppleApps]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleApps">LocationApiKeyRestrictionsAllowAppleApps</a>]

---


### LocationApiKeyRestrictionsAllowAppleAppsOutputReference <a name="LocationApiKeyRestrictionsAllowAppleAppsOutputReference" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import location_api_key

locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.resetBundleId">reset_bundle_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_bundle_id` <a name="reset_bundle_id" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.resetBundleId"></a>

```python
def reset_bundle_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.property.bundleIdInput">bundle_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.property.bundleId">bundle_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleApps">LocationApiKeyRestrictionsAllowAppleApps</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bundle_id_input`<sup>Optional</sup> <a name="bundle_id_input" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.property.bundleIdInput"></a>

```python
bundle_id_input: str
```

- *Type:* str

---

##### `bundle_id`<sup>Required</sup> <a name="bundle_id" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.property.bundleId"></a>

```python
bundle_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LocationApiKeyRestrictionsAllowAppleApps
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleApps">LocationApiKeyRestrictionsAllowAppleApps</a>

---


### LocationApiKeyRestrictionsOutputReference <a name="LocationApiKeyRestrictionsOutputReference" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import location_api_key

locationApiKey.LocationApiKeyRestrictionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.putAllowAndroidApps">put_allow_android_apps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.putAllowAppleApps">put_allow_apple_apps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.resetAllowAndroidApps">reset_allow_android_apps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.resetAllowAppleApps">reset_allow_apple_apps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.resetAllowReferers">reset_allow_referers</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_allow_android_apps` <a name="put_allow_android_apps" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.putAllowAndroidApps"></a>

```python
def put_allow_android_apps(
  value: IResolvable | typing.List[LocationApiKeyRestrictionsAllowAndroidApps]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.putAllowAndroidApps.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidApps">LocationApiKeyRestrictionsAllowAndroidApps</a>]

---

##### `put_allow_apple_apps` <a name="put_allow_apple_apps" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.putAllowAppleApps"></a>

```python
def put_allow_apple_apps(
  value: IResolvable | typing.List[LocationApiKeyRestrictionsAllowAppleApps]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.putAllowAppleApps.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleApps">LocationApiKeyRestrictionsAllowAppleApps</a>]

---

##### `reset_allow_android_apps` <a name="reset_allow_android_apps" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.resetAllowAndroidApps"></a>

```python
def reset_allow_android_apps() -> None
```

##### `reset_allow_apple_apps` <a name="reset_allow_apple_apps" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.resetAllowAppleApps"></a>

```python
def reset_allow_apple_apps() -> None
```

##### `reset_allow_referers` <a name="reset_allow_referers" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.resetAllowReferers"></a>

```python
def reset_allow_referers() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.property.allowAndroidApps">allow_android_apps</a></code> | <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsList">LocationApiKeyRestrictionsAllowAndroidAppsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.property.allowAppleApps">allow_apple_apps</a></code> | <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsList">LocationApiKeyRestrictionsAllowAppleAppsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.property.allowActionsInput">allow_actions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.property.allowAndroidAppsInput">allow_android_apps_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidApps">LocationApiKeyRestrictionsAllowAndroidApps</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.property.allowAppleAppsInput">allow_apple_apps_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleApps">LocationApiKeyRestrictionsAllowAppleApps</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.property.allowReferersInput">allow_referers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.property.allowResourcesInput">allow_resources_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.property.allowActions">allow_actions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.property.allowReferers">allow_referers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.property.allowResources">allow_resources</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictions">LocationApiKeyRestrictions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allow_android_apps`<sup>Required</sup> <a name="allow_android_apps" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.property.allowAndroidApps"></a>

```python
allow_android_apps: LocationApiKeyRestrictionsAllowAndroidAppsList
```

- *Type:* <a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidAppsList">LocationApiKeyRestrictionsAllowAndroidAppsList</a>

---

##### `allow_apple_apps`<sup>Required</sup> <a name="allow_apple_apps" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.property.allowAppleApps"></a>

```python
allow_apple_apps: LocationApiKeyRestrictionsAllowAppleAppsList
```

- *Type:* <a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleAppsList">LocationApiKeyRestrictionsAllowAppleAppsList</a>

---

##### `allow_actions_input`<sup>Optional</sup> <a name="allow_actions_input" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.property.allowActionsInput"></a>

```python
allow_actions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allow_android_apps_input`<sup>Optional</sup> <a name="allow_android_apps_input" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.property.allowAndroidAppsInput"></a>

```python
allow_android_apps_input: IResolvable | typing.List[LocationApiKeyRestrictionsAllowAndroidApps]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAndroidApps">LocationApiKeyRestrictionsAllowAndroidApps</a>]

---

##### `allow_apple_apps_input`<sup>Optional</sup> <a name="allow_apple_apps_input" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.property.allowAppleAppsInput"></a>

```python
allow_apple_apps_input: IResolvable | typing.List[LocationApiKeyRestrictionsAllowAppleApps]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsAllowAppleApps">LocationApiKeyRestrictionsAllowAppleApps</a>]

---

##### `allow_referers_input`<sup>Optional</sup> <a name="allow_referers_input" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.property.allowReferersInput"></a>

```python
allow_referers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allow_resources_input`<sup>Optional</sup> <a name="allow_resources_input" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.property.allowResourcesInput"></a>

```python
allow_resources_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allow_actions`<sup>Required</sup> <a name="allow_actions" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.property.allowActions"></a>

```python
allow_actions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allow_referers`<sup>Required</sup> <a name="allow_referers" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.property.allowReferers"></a>

```python
allow_referers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allow_resources`<sup>Required</sup> <a name="allow_resources" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.property.allowResources"></a>

```python
allow_resources: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LocationApiKeyRestrictions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyRestrictions">LocationApiKeyRestrictions</a>

---


### LocationApiKeyTagsList <a name="LocationApiKeyTagsList" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import location_api_key

locationApiKey.LocationApiKeyTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LocationApiKeyTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTags">LocationApiKeyTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[LocationApiKeyTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTags">LocationApiKeyTags</a>]

---


### LocationApiKeyTagsOutputReference <a name="LocationApiKeyTagsOutputReference" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import location_api_key

locationApiKey.LocationApiKeyTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTags">LocationApiKeyTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.locationApiKey.LocationApiKeyTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LocationApiKeyTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.locationApiKey.LocationApiKeyTags">LocationApiKeyTags</a>

---



