# `redshiftSnapshotCopyGrant` Submodule <a name="`redshiftSnapshotCopyGrant` Submodule" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RedshiftSnapshotCopyGrant <a name="RedshiftSnapshotCopyGrant" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/redshift_snapshot_copy_grant awscc_redshift_snapshot_copy_grant}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.Initializer"></a>

```python
from cdktn_provider_awscc import redshift_snapshot_copy_grant

redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  snapshot_copy_grant_name: str,
  kms_key_id: str = None,
  tags: IResolvable | typing.List[RedshiftSnapshotCopyGrantTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.Initializer.parameter.snapshotCopyGrantName">snapshot_copy_grant_name</a></code> | <code>str</code> | The name of the snapshot copy grant. This name must be unique in the region for the AWS account. |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.Initializer.parameter.kmsKeyId">kms_key_id</a></code> | <code>str</code> | The unique identifier of the encrypted symmetric key to which to grant Amazon Redshift permission. |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTags">RedshiftSnapshotCopyGrantTags</a>]</code> | A list of tag instances. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `snapshot_copy_grant_name`<sup>Required</sup> <a name="snapshot_copy_grant_name" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.Initializer.parameter.snapshotCopyGrantName"></a>

- *Type:* str

The name of the snapshot copy grant. This name must be unique in the region for the AWS account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/redshift_snapshot_copy_grant#snapshot_copy_grant_name RedshiftSnapshotCopyGrant#snapshot_copy_grant_name}

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.Initializer.parameter.kmsKeyId"></a>

- *Type:* str

The unique identifier of the encrypted symmetric key to which to grant Amazon Redshift permission.

If no key is specified, the default key is used. Marked writeOnly because Create accepts aliases/key-ids but Describe returns the resolved key ARN, which would fail drift detection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/redshift_snapshot_copy_grant#kms_key_id RedshiftSnapshotCopyGrant#kms_key_id}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTags">RedshiftSnapshotCopyGrantTags</a>]

A list of tag instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/redshift_snapshot_copy_grant#tags RedshiftSnapshotCopyGrant#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.resetKmsKeyId">reset_kms_key_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[RedshiftSnapshotCopyGrantTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTags">RedshiftSnapshotCopyGrantTags</a>]

---

##### `reset_kms_key_id` <a name="reset_kms_key_id" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.resetKmsKeyId"></a>

```python
def reset_kms_key_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a RedshiftSnapshotCopyGrant resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.isConstruct"></a>

```python
from cdktn_provider_awscc import redshift_snapshot_copy_grant

redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.isTerraformElement"></a>

```python
from cdktn_provider_awscc import redshift_snapshot_copy_grant

redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.isTerraformResource"></a>

```python
from cdktn_provider_awscc import redshift_snapshot_copy_grant

redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import redshift_snapshot_copy_grant

redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a RedshiftSnapshotCopyGrant resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the RedshiftSnapshotCopyGrant to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing RedshiftSnapshotCopyGrant that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/redshift_snapshot_copy_grant#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the RedshiftSnapshotCopyGrant to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsList">RedshiftSnapshotCopyGrantTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.kmsKeyIdInput">kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.snapshotCopyGrantNameInput">snapshot_copy_grant_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTags">RedshiftSnapshotCopyGrantTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.snapshotCopyGrantName">snapshot_copy_grant_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.tags"></a>

```python
tags: RedshiftSnapshotCopyGrantTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsList">RedshiftSnapshotCopyGrantTagsList</a>

---

##### `kms_key_id_input`<sup>Optional</sup> <a name="kms_key_id_input" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.kmsKeyIdInput"></a>

```python
kms_key_id_input: str
```

- *Type:* str

---

##### `snapshot_copy_grant_name_input`<sup>Optional</sup> <a name="snapshot_copy_grant_name_input" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.snapshotCopyGrantNameInput"></a>

```python
snapshot_copy_grant_name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[RedshiftSnapshotCopyGrantTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTags">RedshiftSnapshotCopyGrantTags</a>]

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `snapshot_copy_grant_name`<sup>Required</sup> <a name="snapshot_copy_grant_name" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.snapshotCopyGrantName"></a>

```python
snapshot_copy_grant_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### RedshiftSnapshotCopyGrantConfig <a name="RedshiftSnapshotCopyGrantConfig" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantConfig.Initializer"></a>

```python
from cdktn_provider_awscc import redshift_snapshot_copy_grant

redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  snapshot_copy_grant_name: str,
  kms_key_id: str = None,
  tags: IResolvable | typing.List[RedshiftSnapshotCopyGrantTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantConfig.property.snapshotCopyGrantName">snapshot_copy_grant_name</a></code> | <code>str</code> | The name of the snapshot copy grant. This name must be unique in the region for the AWS account. |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantConfig.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | The unique identifier of the encrypted symmetric key to which to grant Amazon Redshift permission. |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTags">RedshiftSnapshotCopyGrantTags</a>]</code> | A list of tag instances. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `snapshot_copy_grant_name`<sup>Required</sup> <a name="snapshot_copy_grant_name" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantConfig.property.snapshotCopyGrantName"></a>

```python
snapshot_copy_grant_name: str
```

- *Type:* str

The name of the snapshot copy grant. This name must be unique in the region for the AWS account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/redshift_snapshot_copy_grant#snapshot_copy_grant_name RedshiftSnapshotCopyGrant#snapshot_copy_grant_name}

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantConfig.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

The unique identifier of the encrypted symmetric key to which to grant Amazon Redshift permission.

If no key is specified, the default key is used. Marked writeOnly because Create accepts aliases/key-ids but Describe returns the resolved key ARN, which would fail drift detection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/redshift_snapshot_copy_grant#kms_key_id RedshiftSnapshotCopyGrant#kms_key_id}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[RedshiftSnapshotCopyGrantTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTags">RedshiftSnapshotCopyGrantTags</a>]

A list of tag instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/redshift_snapshot_copy_grant#tags RedshiftSnapshotCopyGrant#tags}

---

### RedshiftSnapshotCopyGrantTags <a name="RedshiftSnapshotCopyGrantTags" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTags.Initializer"></a>

```python
from cdktn_provider_awscc import redshift_snapshot_copy_grant

redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTags.property.key">key</a></code> | <code>str</code> | The key, or name, for the resource tag. |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTags.property.value">value</a></code> | <code>str</code> | The value for the resource tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key, or name, for the resource tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/redshift_snapshot_copy_grant#key RedshiftSnapshotCopyGrant#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the resource tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/redshift_snapshot_copy_grant#value RedshiftSnapshotCopyGrant#value}

---

## Classes <a name="Classes" id="Classes"></a>

### RedshiftSnapshotCopyGrantTagsList <a name="RedshiftSnapshotCopyGrantTagsList" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import redshift_snapshot_copy_grant

redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> RedshiftSnapshotCopyGrantTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTags">RedshiftSnapshotCopyGrantTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[RedshiftSnapshotCopyGrantTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTags">RedshiftSnapshotCopyGrantTags</a>]

---


### RedshiftSnapshotCopyGrantTagsOutputReference <a name="RedshiftSnapshotCopyGrantTagsOutputReference" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import redshift_snapshot_copy_grant

redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTags">RedshiftSnapshotCopyGrantTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | RedshiftSnapshotCopyGrantTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTags">RedshiftSnapshotCopyGrantTags</a>

---



