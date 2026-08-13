# `s3AccessGrant` Submodule <a name="`s3AccessGrant` Submodule" id="@cdktn/provider-awscc.s3AccessGrant"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### S3AccessGrant <a name="S3AccessGrant" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3_access_grant awscc_s3_access_grant}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.Initializer"></a>

```python
from cdktn_provider_awscc import s3_access_grant

s3AccessGrant.S3AccessGrant(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  access_grants_location_id: str,
  grantee: S3AccessGrantGrantee,
  permission: str,
  access_grants_location_configuration: S3AccessGrantAccessGrantsLocationConfiguration = None,
  application_arn: str = None,
  s3_prefix_type: str = None,
  tags: IResolvable | typing.List[S3AccessGrantTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.Initializer.parameter.accessGrantsLocationId">access_grants_location_id</a></code> | <code>str</code> | The custom S3 location to be accessed by the grantee. |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.Initializer.parameter.grantee">grantee</a></code> | <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGrantee">S3AccessGrantGrantee</a></code> | The principal who will be granted permission to access S3. |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.Initializer.parameter.permission">permission</a></code> | <code>str</code> | The level of access to be afforded to the grantee. |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.Initializer.parameter.accessGrantsLocationConfiguration">access_grants_location_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfiguration">S3AccessGrantAccessGrantsLocationConfiguration</a></code> | The configuration options of the grant location, which is the S3 path to the data to which you are granting access. |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.Initializer.parameter.applicationArn">application_arn</a></code> | <code>str</code> | The ARN of the application grantees will use to access the location. |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.Initializer.parameter.s3PrefixType">s3_prefix_type</a></code> | <code>str</code> | The type of S3SubPrefix. |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTags">S3AccessGrantTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3_access_grant#tags S3AccessGrant#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `access_grants_location_id`<sup>Required</sup> <a name="access_grants_location_id" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.Initializer.parameter.accessGrantsLocationId"></a>

- *Type:* str

The custom S3 location to be accessed by the grantee.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3_access_grant#access_grants_location_id S3AccessGrant#access_grants_location_id}

---

##### `grantee`<sup>Required</sup> <a name="grantee" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.Initializer.parameter.grantee"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGrantee">S3AccessGrantGrantee</a>

The principal who will be granted permission to access S3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3_access_grant#grantee S3AccessGrant#grantee}

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.Initializer.parameter.permission"></a>

- *Type:* str

The level of access to be afforded to the grantee.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3_access_grant#permission S3AccessGrant#permission}

---

##### `access_grants_location_configuration`<sup>Optional</sup> <a name="access_grants_location_configuration" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.Initializer.parameter.accessGrantsLocationConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfiguration">S3AccessGrantAccessGrantsLocationConfiguration</a>

The configuration options of the grant location, which is the S3 path to the data to which you are granting access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3_access_grant#access_grants_location_configuration S3AccessGrant#access_grants_location_configuration}

---

##### `application_arn`<sup>Optional</sup> <a name="application_arn" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.Initializer.parameter.applicationArn"></a>

- *Type:* str

The ARN of the application grantees will use to access the location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3_access_grant#application_arn S3AccessGrant#application_arn}

---

##### `s3_prefix_type`<sup>Optional</sup> <a name="s3_prefix_type" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.Initializer.parameter.s3PrefixType"></a>

- *Type:* str

The type of S3SubPrefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3_access_grant#s3_prefix_type S3AccessGrant#s3_prefix_type}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTags">S3AccessGrantTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3_access_grant#tags S3AccessGrant#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.putAccessGrantsLocationConfiguration">put_access_grants_location_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.putGrantee">put_grantee</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.resetAccessGrantsLocationConfiguration">reset_access_grants_location_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.resetApplicationArn">reset_application_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.resetS3PrefixType">reset_s3_prefix_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_access_grants_location_configuration` <a name="put_access_grants_location_configuration" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.putAccessGrantsLocationConfiguration"></a>

```python
def put_access_grants_location_configuration(
  s3_sub_prefix: str = None
) -> None
```

###### `s3_sub_prefix`<sup>Optional</sup> <a name="s3_sub_prefix" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.putAccessGrantsLocationConfiguration.parameter.s3SubPrefix"></a>

- *Type:* str

The S3 sub prefix of a registered location in your S3 Access Grants instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3_access_grant#s3_sub_prefix S3AccessGrant#s3_sub_prefix}

---

##### `put_grantee` <a name="put_grantee" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.putGrantee"></a>

```python
def put_grantee(
  grantee_identifier: str,
  grantee_type: str
) -> None
```

###### `grantee_identifier`<sup>Required</sup> <a name="grantee_identifier" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.putGrantee.parameter.granteeIdentifier"></a>

- *Type:* str

The unique identifier of the Grantee.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3_access_grant#grantee_identifier S3AccessGrant#grantee_identifier}

---

###### `grantee_type`<sup>Required</sup> <a name="grantee_type" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.putGrantee.parameter.granteeType"></a>

- *Type:* str

Configures the transfer acceleration state for an Amazon S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3_access_grant#grantee_type S3AccessGrant#grantee_type}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[S3AccessGrantTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTags">S3AccessGrantTags</a>]

---

##### `reset_access_grants_location_configuration` <a name="reset_access_grants_location_configuration" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.resetAccessGrantsLocationConfiguration"></a>

```python
def reset_access_grants_location_configuration() -> None
```

##### `reset_application_arn` <a name="reset_application_arn" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.resetApplicationArn"></a>

```python
def reset_application_arn() -> None
```

##### `reset_s3_prefix_type` <a name="reset_s3_prefix_type" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.resetS3PrefixType"></a>

```python
def reset_s3_prefix_type() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a S3AccessGrant resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.isConstruct"></a>

```python
from cdktn_provider_awscc import s3_access_grant

s3AccessGrant.S3AccessGrant.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.isTerraformElement"></a>

```python
from cdktn_provider_awscc import s3_access_grant

s3AccessGrant.S3AccessGrant.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.isTerraformResource"></a>

```python
from cdktn_provider_awscc import s3_access_grant

s3AccessGrant.S3AccessGrant.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import s3_access_grant

s3AccessGrant.S3AccessGrant.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a S3AccessGrant resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the S3AccessGrant to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing S3AccessGrant that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3_access_grant#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the S3AccessGrant to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.accessGrantArn">access_grant_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.accessGrantId">access_grant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.accessGrantsLocationConfiguration">access_grants_location_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference">S3AccessGrantAccessGrantsLocationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.grantee">grantee</a></code> | <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference">S3AccessGrantGranteeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.grantScope">grant_scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsList">S3AccessGrantTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.accessGrantsLocationConfigurationInput">access_grants_location_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfiguration">S3AccessGrantAccessGrantsLocationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.accessGrantsLocationIdInput">access_grants_location_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.applicationArnInput">application_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.granteeInput">grantee_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGrantee">S3AccessGrantGrantee</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.permissionInput">permission_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.s3PrefixTypeInput">s3_prefix_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTags">S3AccessGrantTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.accessGrantsLocationId">access_grants_location_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.applicationArn">application_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.permission">permission</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.s3PrefixType">s3_prefix_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `access_grant_arn`<sup>Required</sup> <a name="access_grant_arn" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.accessGrantArn"></a>

```python
access_grant_arn: str
```

- *Type:* str

---

##### `access_grant_id`<sup>Required</sup> <a name="access_grant_id" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.accessGrantId"></a>

```python
access_grant_id: str
```

- *Type:* str

---

##### `access_grants_location_configuration`<sup>Required</sup> <a name="access_grants_location_configuration" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.accessGrantsLocationConfiguration"></a>

```python
access_grants_location_configuration: S3AccessGrantAccessGrantsLocationConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference">S3AccessGrantAccessGrantsLocationConfigurationOutputReference</a>

---

##### `grantee`<sup>Required</sup> <a name="grantee" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.grantee"></a>

```python
grantee: S3AccessGrantGranteeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference">S3AccessGrantGranteeOutputReference</a>

---

##### `grant_scope`<sup>Required</sup> <a name="grant_scope" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.grantScope"></a>

```python
grant_scope: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.tags"></a>

```python
tags: S3AccessGrantTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsList">S3AccessGrantTagsList</a>

---

##### `access_grants_location_configuration_input`<sup>Optional</sup> <a name="access_grants_location_configuration_input" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.accessGrantsLocationConfigurationInput"></a>

```python
access_grants_location_configuration_input: IResolvable | S3AccessGrantAccessGrantsLocationConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfiguration">S3AccessGrantAccessGrantsLocationConfiguration</a>

---

##### `access_grants_location_id_input`<sup>Optional</sup> <a name="access_grants_location_id_input" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.accessGrantsLocationIdInput"></a>

```python
access_grants_location_id_input: str
```

- *Type:* str

---

##### `application_arn_input`<sup>Optional</sup> <a name="application_arn_input" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.applicationArnInput"></a>

```python
application_arn_input: str
```

- *Type:* str

---

##### `grantee_input`<sup>Optional</sup> <a name="grantee_input" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.granteeInput"></a>

```python
grantee_input: IResolvable | S3AccessGrantGrantee
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGrantee">S3AccessGrantGrantee</a>

---

##### `permission_input`<sup>Optional</sup> <a name="permission_input" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.permissionInput"></a>

```python
permission_input: str
```

- *Type:* str

---

##### `s3_prefix_type_input`<sup>Optional</sup> <a name="s3_prefix_type_input" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.s3PrefixTypeInput"></a>

```python
s3_prefix_type_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[S3AccessGrantTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTags">S3AccessGrantTags</a>]

---

##### `access_grants_location_id`<sup>Required</sup> <a name="access_grants_location_id" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.accessGrantsLocationId"></a>

```python
access_grants_location_id: str
```

- *Type:* str

---

##### `application_arn`<sup>Required</sup> <a name="application_arn" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.applicationArn"></a>

```python
application_arn: str
```

- *Type:* str

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.permission"></a>

```python
permission: str
```

- *Type:* str

---

##### `s3_prefix_type`<sup>Required</sup> <a name="s3_prefix_type" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.s3PrefixType"></a>

```python
s3_prefix_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### S3AccessGrantAccessGrantsLocationConfiguration <a name="S3AccessGrantAccessGrantsLocationConfiguration" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import s3_access_grant

s3AccessGrant.S3AccessGrantAccessGrantsLocationConfiguration(
  s3_sub_prefix: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfiguration.property.s3SubPrefix">s3_sub_prefix</a></code> | <code>str</code> | The S3 sub prefix of a registered location in your S3 Access Grants instance. |

---

##### `s3_sub_prefix`<sup>Optional</sup> <a name="s3_sub_prefix" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfiguration.property.s3SubPrefix"></a>

```python
s3_sub_prefix: str
```

- *Type:* str

The S3 sub prefix of a registered location in your S3 Access Grants instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3_access_grant#s3_sub_prefix S3AccessGrant#s3_sub_prefix}

---

### S3AccessGrantConfig <a name="S3AccessGrantConfig" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantConfig.Initializer"></a>

```python
from cdktn_provider_awscc import s3_access_grant

s3AccessGrant.S3AccessGrantConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  access_grants_location_id: str,
  grantee: S3AccessGrantGrantee,
  permission: str,
  access_grants_location_configuration: S3AccessGrantAccessGrantsLocationConfiguration = None,
  application_arn: str = None,
  s3_prefix_type: str = None,
  tags: IResolvable | typing.List[S3AccessGrantTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantConfig.property.accessGrantsLocationId">access_grants_location_id</a></code> | <code>str</code> | The custom S3 location to be accessed by the grantee. |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantConfig.property.grantee">grantee</a></code> | <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGrantee">S3AccessGrantGrantee</a></code> | The principal who will be granted permission to access S3. |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantConfig.property.permission">permission</a></code> | <code>str</code> | The level of access to be afforded to the grantee. |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantConfig.property.accessGrantsLocationConfiguration">access_grants_location_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfiguration">S3AccessGrantAccessGrantsLocationConfiguration</a></code> | The configuration options of the grant location, which is the S3 path to the data to which you are granting access. |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantConfig.property.applicationArn">application_arn</a></code> | <code>str</code> | The ARN of the application grantees will use to access the location. |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantConfig.property.s3PrefixType">s3_prefix_type</a></code> | <code>str</code> | The type of S3SubPrefix. |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTags">S3AccessGrantTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3_access_grant#tags S3AccessGrant#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `access_grants_location_id`<sup>Required</sup> <a name="access_grants_location_id" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantConfig.property.accessGrantsLocationId"></a>

```python
access_grants_location_id: str
```

- *Type:* str

The custom S3 location to be accessed by the grantee.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3_access_grant#access_grants_location_id S3AccessGrant#access_grants_location_id}

---

##### `grantee`<sup>Required</sup> <a name="grantee" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantConfig.property.grantee"></a>

```python
grantee: S3AccessGrantGrantee
```

- *Type:* <a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGrantee">S3AccessGrantGrantee</a>

The principal who will be granted permission to access S3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3_access_grant#grantee S3AccessGrant#grantee}

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantConfig.property.permission"></a>

```python
permission: str
```

- *Type:* str

The level of access to be afforded to the grantee.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3_access_grant#permission S3AccessGrant#permission}

---

##### `access_grants_location_configuration`<sup>Optional</sup> <a name="access_grants_location_configuration" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantConfig.property.accessGrantsLocationConfiguration"></a>

```python
access_grants_location_configuration: S3AccessGrantAccessGrantsLocationConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfiguration">S3AccessGrantAccessGrantsLocationConfiguration</a>

The configuration options of the grant location, which is the S3 path to the data to which you are granting access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3_access_grant#access_grants_location_configuration S3AccessGrant#access_grants_location_configuration}

---

##### `application_arn`<sup>Optional</sup> <a name="application_arn" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantConfig.property.applicationArn"></a>

```python
application_arn: str
```

- *Type:* str

The ARN of the application grantees will use to access the location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3_access_grant#application_arn S3AccessGrant#application_arn}

---

##### `s3_prefix_type`<sup>Optional</sup> <a name="s3_prefix_type" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantConfig.property.s3PrefixType"></a>

```python
s3_prefix_type: str
```

- *Type:* str

The type of S3SubPrefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3_access_grant#s3_prefix_type S3AccessGrant#s3_prefix_type}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[S3AccessGrantTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTags">S3AccessGrantTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3_access_grant#tags S3AccessGrant#tags}.

---

### S3AccessGrantGrantee <a name="S3AccessGrantGrantee" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGrantee"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGrantee.Initializer"></a>

```python
from cdktn_provider_awscc import s3_access_grant

s3AccessGrant.S3AccessGrantGrantee(
  grantee_identifier: str,
  grantee_type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGrantee.property.granteeIdentifier">grantee_identifier</a></code> | <code>str</code> | The unique identifier of the Grantee. |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGrantee.property.granteeType">grantee_type</a></code> | <code>str</code> | Configures the transfer acceleration state for an Amazon S3 bucket. |

---

##### `grantee_identifier`<sup>Required</sup> <a name="grantee_identifier" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGrantee.property.granteeIdentifier"></a>

```python
grantee_identifier: str
```

- *Type:* str

The unique identifier of the Grantee.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3_access_grant#grantee_identifier S3AccessGrant#grantee_identifier}

---

##### `grantee_type`<sup>Required</sup> <a name="grantee_type" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGrantee.property.granteeType"></a>

```python
grantee_type: str
```

- *Type:* str

Configures the transfer acceleration state for an Amazon S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3_access_grant#grantee_type S3AccessGrant#grantee_type}

---

### S3AccessGrantTags <a name="S3AccessGrantTags" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTags.Initializer"></a>

```python
from cdktn_provider_awscc import s3_access_grant

s3AccessGrant.S3AccessGrantTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3_access_grant#key S3AccessGrant#key}. |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3_access_grant#value S3AccessGrant#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3_access_grant#key S3AccessGrant#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3_access_grant#value S3AccessGrant#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### S3AccessGrantAccessGrantsLocationConfigurationOutputReference <a name="S3AccessGrantAccessGrantsLocationConfigurationOutputReference" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import s3_access_grant

s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference.resetS3SubPrefix">reset_s3_sub_prefix</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_s3_sub_prefix` <a name="reset_s3_sub_prefix" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference.resetS3SubPrefix"></a>

```python
def reset_s3_sub_prefix() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference.property.s3SubPrefixInput">s3_sub_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference.property.s3SubPrefix">s3_sub_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfiguration">S3AccessGrantAccessGrantsLocationConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `s3_sub_prefix_input`<sup>Optional</sup> <a name="s3_sub_prefix_input" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference.property.s3SubPrefixInput"></a>

```python
s3_sub_prefix_input: str
```

- *Type:* str

---

##### `s3_sub_prefix`<sup>Required</sup> <a name="s3_sub_prefix" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference.property.s3SubPrefix"></a>

```python
s3_sub_prefix: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | S3AccessGrantAccessGrantsLocationConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfiguration">S3AccessGrantAccessGrantsLocationConfiguration</a>

---


### S3AccessGrantGranteeOutputReference <a name="S3AccessGrantGranteeOutputReference" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import s3_access_grant

s3AccessGrant.S3AccessGrantGranteeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference.property.granteeIdentifierInput">grantee_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference.property.granteeTypeInput">grantee_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference.property.granteeIdentifier">grantee_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference.property.granteeType">grantee_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGrantee">S3AccessGrantGrantee</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `grantee_identifier_input`<sup>Optional</sup> <a name="grantee_identifier_input" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference.property.granteeIdentifierInput"></a>

```python
grantee_identifier_input: str
```

- *Type:* str

---

##### `grantee_type_input`<sup>Optional</sup> <a name="grantee_type_input" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference.property.granteeTypeInput"></a>

```python
grantee_type_input: str
```

- *Type:* str

---

##### `grantee_identifier`<sup>Required</sup> <a name="grantee_identifier" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference.property.granteeIdentifier"></a>

```python
grantee_identifier: str
```

- *Type:* str

---

##### `grantee_type`<sup>Required</sup> <a name="grantee_type" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference.property.granteeType"></a>

```python
grantee_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | S3AccessGrantGrantee
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGrantee">S3AccessGrantGrantee</a>

---


### S3AccessGrantTagsList <a name="S3AccessGrantTagsList" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import s3_access_grant

s3AccessGrant.S3AccessGrantTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> S3AccessGrantTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTags">S3AccessGrantTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[S3AccessGrantTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTags">S3AccessGrantTags</a>]

---


### S3AccessGrantTagsOutputReference <a name="S3AccessGrantTagsOutputReference" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import s3_access_grant

s3AccessGrant.S3AccessGrantTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTags">S3AccessGrantTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | S3AccessGrantTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTags">S3AccessGrantTags</a>

---



