# `ivsPlaybackRestrictionPolicy` Submodule <a name="`ivsPlaybackRestrictionPolicy` Submodule" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IvsPlaybackRestrictionPolicy <a name="IvsPlaybackRestrictionPolicy" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ivs_playback_restriction_policy awscc_ivs_playback_restriction_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.Initializer"></a>

```python
from cdktn_provider_awscc import ivs_playback_restriction_policy

ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  allowed_countries: typing.List[str] = None,
  allowed_origins: typing.List[str] = None,
  enable_strict_origin_enforcement: bool | IResolvable = None,
  name: str = None,
  tags: IResolvable | typing.List[IvsPlaybackRestrictionPolicyTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.Initializer.parameter.allowedCountries">allowed_countries</a></code> | <code>typing.List[str]</code> | A list of country codes that control geoblocking restriction. |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.Initializer.parameter.allowedOrigins">allowed_origins</a></code> | <code>typing.List[str]</code> | A list of origin sites that control CORS restriction. |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.Initializer.parameter.enableStrictOriginEnforcement">enable_strict_origin_enforcement</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether channel playback is constrained by origin site. |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.Initializer.parameter.name">name</a></code> | <code>str</code> | Playback-restriction-policy name. |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTags">IvsPlaybackRestrictionPolicyTags</a>]</code> | An array of key-value pairs to apply to this resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `allowed_countries`<sup>Optional</sup> <a name="allowed_countries" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.Initializer.parameter.allowedCountries"></a>

- *Type:* typing.List[str]

A list of country codes that control geoblocking restriction.

Allowed values are the officially assigned ISO 3166-1 alpha-2 codes. Default: All countries (an empty array).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ivs_playback_restriction_policy#allowed_countries IvsPlaybackRestrictionPolicy#allowed_countries}

---

##### `allowed_origins`<sup>Optional</sup> <a name="allowed_origins" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.Initializer.parameter.allowedOrigins"></a>

- *Type:* typing.List[str]

A list of origin sites that control CORS restriction.

Allowed values are the same as valid values of the Origin header defined at https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Origin

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ivs_playback_restriction_policy#allowed_origins IvsPlaybackRestrictionPolicy#allowed_origins}

---

##### `enable_strict_origin_enforcement`<sup>Optional</sup> <a name="enable_strict_origin_enforcement" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.Initializer.parameter.enableStrictOriginEnforcement"></a>

- *Type:* bool | cdktn.IResolvable

Whether channel playback is constrained by origin site.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ivs_playback_restriction_policy#enable_strict_origin_enforcement IvsPlaybackRestrictionPolicy#enable_strict_origin_enforcement}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.Initializer.parameter.name"></a>

- *Type:* str

Playback-restriction-policy name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ivs_playback_restriction_policy#name IvsPlaybackRestrictionPolicy#name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTags">IvsPlaybackRestrictionPolicyTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ivs_playback_restriction_policy#tags IvsPlaybackRestrictionPolicy#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.resetAllowedCountries">reset_allowed_countries</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.resetAllowedOrigins">reset_allowed_origins</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.resetEnableStrictOriginEnforcement">reset_enable_strict_origin_enforcement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[IvsPlaybackRestrictionPolicyTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTags">IvsPlaybackRestrictionPolicyTags</a>]

---

##### `reset_allowed_countries` <a name="reset_allowed_countries" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.resetAllowedCountries"></a>

```python
def reset_allowed_countries() -> None
```

##### `reset_allowed_origins` <a name="reset_allowed_origins" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.resetAllowedOrigins"></a>

```python
def reset_allowed_origins() -> None
```

##### `reset_enable_strict_origin_enforcement` <a name="reset_enable_strict_origin_enforcement" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.resetEnableStrictOriginEnforcement"></a>

```python
def reset_enable_strict_origin_enforcement() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a IvsPlaybackRestrictionPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.isConstruct"></a>

```python
from cdktn_provider_awscc import ivs_playback_restriction_policy

ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.isTerraformElement"></a>

```python
from cdktn_provider_awscc import ivs_playback_restriction_policy

ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.isTerraformResource"></a>

```python
from cdktn_provider_awscc import ivs_playback_restriction_policy

ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import ivs_playback_restriction_policy

ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a IvsPlaybackRestrictionPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the IvsPlaybackRestrictionPolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing IvsPlaybackRestrictionPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ivs_playback_restriction_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the IvsPlaybackRestrictionPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsList">IvsPlaybackRestrictionPolicyTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.property.allowedCountriesInput">allowed_countries_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.property.allowedOriginsInput">allowed_origins_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.property.enableStrictOriginEnforcementInput">enable_strict_origin_enforcement_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTags">IvsPlaybackRestrictionPolicyTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.property.allowedCountries">allowed_countries</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.property.allowedOrigins">allowed_origins</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.property.enableStrictOriginEnforcement">enable_strict_origin_enforcement</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.property.tags"></a>

```python
tags: IvsPlaybackRestrictionPolicyTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsList">IvsPlaybackRestrictionPolicyTagsList</a>

---

##### `allowed_countries_input`<sup>Optional</sup> <a name="allowed_countries_input" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.property.allowedCountriesInput"></a>

```python
allowed_countries_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_origins_input`<sup>Optional</sup> <a name="allowed_origins_input" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.property.allowedOriginsInput"></a>

```python
allowed_origins_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `enable_strict_origin_enforcement_input`<sup>Optional</sup> <a name="enable_strict_origin_enforcement_input" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.property.enableStrictOriginEnforcementInput"></a>

```python
enable_strict_origin_enforcement_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[IvsPlaybackRestrictionPolicyTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTags">IvsPlaybackRestrictionPolicyTags</a>]

---

##### `allowed_countries`<sup>Required</sup> <a name="allowed_countries" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.property.allowedCountries"></a>

```python
allowed_countries: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_origins`<sup>Required</sup> <a name="allowed_origins" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.property.allowedOrigins"></a>

```python
allowed_origins: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `enable_strict_origin_enforcement`<sup>Required</sup> <a name="enable_strict_origin_enforcement" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.property.enableStrictOriginEnforcement"></a>

```python
enable_strict_origin_enforcement: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IvsPlaybackRestrictionPolicyConfig <a name="IvsPlaybackRestrictionPolicyConfig" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyConfig.Initializer"></a>

```python
from cdktn_provider_awscc import ivs_playback_restriction_policy

ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  allowed_countries: typing.List[str] = None,
  allowed_origins: typing.List[str] = None,
  enable_strict_origin_enforcement: bool | IResolvable = None,
  name: str = None,
  tags: IResolvable | typing.List[IvsPlaybackRestrictionPolicyTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyConfig.property.allowedCountries">allowed_countries</a></code> | <code>typing.List[str]</code> | A list of country codes that control geoblocking restriction. |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyConfig.property.allowedOrigins">allowed_origins</a></code> | <code>typing.List[str]</code> | A list of origin sites that control CORS restriction. |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyConfig.property.enableStrictOriginEnforcement">enable_strict_origin_enforcement</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether channel playback is constrained by origin site. |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyConfig.property.name">name</a></code> | <code>str</code> | Playback-restriction-policy name. |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTags">IvsPlaybackRestrictionPolicyTags</a>]</code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `allowed_countries`<sup>Optional</sup> <a name="allowed_countries" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyConfig.property.allowedCountries"></a>

```python
allowed_countries: typing.List[str]
```

- *Type:* typing.List[str]

A list of country codes that control geoblocking restriction.

Allowed values are the officially assigned ISO 3166-1 alpha-2 codes. Default: All countries (an empty array).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ivs_playback_restriction_policy#allowed_countries IvsPlaybackRestrictionPolicy#allowed_countries}

---

##### `allowed_origins`<sup>Optional</sup> <a name="allowed_origins" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyConfig.property.allowedOrigins"></a>

```python
allowed_origins: typing.List[str]
```

- *Type:* typing.List[str]

A list of origin sites that control CORS restriction.

Allowed values are the same as valid values of the Origin header defined at https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Origin

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ivs_playback_restriction_policy#allowed_origins IvsPlaybackRestrictionPolicy#allowed_origins}

---

##### `enable_strict_origin_enforcement`<sup>Optional</sup> <a name="enable_strict_origin_enforcement" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyConfig.property.enableStrictOriginEnforcement"></a>

```python
enable_strict_origin_enforcement: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether channel playback is constrained by origin site.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ivs_playback_restriction_policy#enable_strict_origin_enforcement IvsPlaybackRestrictionPolicy#enable_strict_origin_enforcement}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Playback-restriction-policy name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ivs_playback_restriction_policy#name IvsPlaybackRestrictionPolicy#name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[IvsPlaybackRestrictionPolicyTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTags">IvsPlaybackRestrictionPolicyTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ivs_playback_restriction_policy#tags IvsPlaybackRestrictionPolicy#tags}

---

### IvsPlaybackRestrictionPolicyTags <a name="IvsPlaybackRestrictionPolicyTags" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTags.Initializer"></a>

```python
from cdktn_provider_awscc import ivs_playback_restriction_policy

ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ivs_playback_restriction_policy#key IvsPlaybackRestrictionPolicy#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ivs_playback_restriction_policy#value IvsPlaybackRestrictionPolicy#value}

---

## Classes <a name="Classes" id="Classes"></a>

### IvsPlaybackRestrictionPolicyTagsList <a name="IvsPlaybackRestrictionPolicyTagsList" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import ivs_playback_restriction_policy

ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IvsPlaybackRestrictionPolicyTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTags">IvsPlaybackRestrictionPolicyTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[IvsPlaybackRestrictionPolicyTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTags">IvsPlaybackRestrictionPolicyTags</a>]

---


### IvsPlaybackRestrictionPolicyTagsOutputReference <a name="IvsPlaybackRestrictionPolicyTagsOutputReference" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ivs_playback_restriction_policy

ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTags">IvsPlaybackRestrictionPolicyTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IvsPlaybackRestrictionPolicyTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTags">IvsPlaybackRestrictionPolicyTags</a>

---



