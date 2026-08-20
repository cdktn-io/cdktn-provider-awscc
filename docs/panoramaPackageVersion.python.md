# `panoramaPackageVersion` Submodule <a name="`panoramaPackageVersion` Submodule" id="@cdktn/provider-awscc.panoramaPackageVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PanoramaPackageVersion <a name="PanoramaPackageVersion" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/panorama_package_version awscc_panorama_package_version}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.Initializer"></a>

```python
from cdktn_provider_awscc import panorama_package_version

panoramaPackageVersion.PanoramaPackageVersion(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  package_id: str,
  package_version: str,
  patch_version: str,
  mark_latest: bool | IResolvable = None,
  owner_account: str = None,
  updated_latest_patch_version: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.Initializer.parameter.packageId">package_id</a></code> | <code>str</code> | A package ID. |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.Initializer.parameter.packageVersion">package_version</a></code> | <code>str</code> | A package version. |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.Initializer.parameter.patchVersion">patch_version</a></code> | <code>str</code> | A patch version. |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.Initializer.parameter.markLatest">mark_latest</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether to mark the new version as the latest version. |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.Initializer.parameter.ownerAccount">owner_account</a></code> | <code>str</code> | An owner account. |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.Initializer.parameter.updatedLatestPatchVersion">updated_latest_patch_version</a></code> | <code>str</code> | If the version was marked latest, the new version to maker as latest. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `package_id`<sup>Required</sup> <a name="package_id" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.Initializer.parameter.packageId"></a>

- *Type:* str

A package ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/panorama_package_version#package_id PanoramaPackageVersion#package_id}

---

##### `package_version`<sup>Required</sup> <a name="package_version" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.Initializer.parameter.packageVersion"></a>

- *Type:* str

A package version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/panorama_package_version#package_version PanoramaPackageVersion#package_version}

---

##### `patch_version`<sup>Required</sup> <a name="patch_version" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.Initializer.parameter.patchVersion"></a>

- *Type:* str

A patch version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/panorama_package_version#patch_version PanoramaPackageVersion#patch_version}

---

##### `mark_latest`<sup>Optional</sup> <a name="mark_latest" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.Initializer.parameter.markLatest"></a>

- *Type:* bool | cdktn.IResolvable

Whether to mark the new version as the latest version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/panorama_package_version#mark_latest PanoramaPackageVersion#mark_latest}

---

##### `owner_account`<sup>Optional</sup> <a name="owner_account" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.Initializer.parameter.ownerAccount"></a>

- *Type:* str

An owner account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/panorama_package_version#owner_account PanoramaPackageVersion#owner_account}

---

##### `updated_latest_patch_version`<sup>Optional</sup> <a name="updated_latest_patch_version" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.Initializer.parameter.updatedLatestPatchVersion"></a>

- *Type:* str

If the version was marked latest, the new version to maker as latest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/panorama_package_version#updated_latest_patch_version PanoramaPackageVersion#updated_latest_patch_version}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.resetMarkLatest">reset_mark_latest</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.resetOwnerAccount">reset_owner_account</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.resetUpdatedLatestPatchVersion">reset_updated_latest_patch_version</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_mark_latest` <a name="reset_mark_latest" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.resetMarkLatest"></a>

```python
def reset_mark_latest() -> None
```

##### `reset_owner_account` <a name="reset_owner_account" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.resetOwnerAccount"></a>

```python
def reset_owner_account() -> None
```

##### `reset_updated_latest_patch_version` <a name="reset_updated_latest_patch_version" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.resetUpdatedLatestPatchVersion"></a>

```python
def reset_updated_latest_patch_version() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a PanoramaPackageVersion resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.isConstruct"></a>

```python
from cdktn_provider_awscc import panorama_package_version

panoramaPackageVersion.PanoramaPackageVersion.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.isTerraformElement"></a>

```python
from cdktn_provider_awscc import panorama_package_version

panoramaPackageVersion.PanoramaPackageVersion.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.isTerraformResource"></a>

```python
from cdktn_provider_awscc import panorama_package_version

panoramaPackageVersion.PanoramaPackageVersion.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import panorama_package_version

panoramaPackageVersion.PanoramaPackageVersion.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a PanoramaPackageVersion resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the PanoramaPackageVersion to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing PanoramaPackageVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/panorama_package_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the PanoramaPackageVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.isLatestPatch">is_latest_patch</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.packageArn">package_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.packageName">package_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.registeredTime">registered_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.statusDescription">status_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.markLatestInput">mark_latest_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.ownerAccountInput">owner_account_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.packageIdInput">package_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.packageVersionInput">package_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.patchVersionInput">patch_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.updatedLatestPatchVersionInput">updated_latest_patch_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.markLatest">mark_latest</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.ownerAccount">owner_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.packageId">package_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.packageVersion">package_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.patchVersion">patch_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.updatedLatestPatchVersion">updated_latest_patch_version</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_latest_patch`<sup>Required</sup> <a name="is_latest_patch" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.isLatestPatch"></a>

```python
is_latest_patch: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `package_arn`<sup>Required</sup> <a name="package_arn" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.packageArn"></a>

```python
package_arn: str
```

- *Type:* str

---

##### `package_name`<sup>Required</sup> <a name="package_name" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.packageName"></a>

```python
package_name: str
```

- *Type:* str

---

##### `registered_time`<sup>Required</sup> <a name="registered_time" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.registeredTime"></a>

```python
registered_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `status_description`<sup>Required</sup> <a name="status_description" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.statusDescription"></a>

```python
status_description: str
```

- *Type:* str

---

##### `mark_latest_input`<sup>Optional</sup> <a name="mark_latest_input" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.markLatestInput"></a>

```python
mark_latest_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `owner_account_input`<sup>Optional</sup> <a name="owner_account_input" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.ownerAccountInput"></a>

```python
owner_account_input: str
```

- *Type:* str

---

##### `package_id_input`<sup>Optional</sup> <a name="package_id_input" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.packageIdInput"></a>

```python
package_id_input: str
```

- *Type:* str

---

##### `package_version_input`<sup>Optional</sup> <a name="package_version_input" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.packageVersionInput"></a>

```python
package_version_input: str
```

- *Type:* str

---

##### `patch_version_input`<sup>Optional</sup> <a name="patch_version_input" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.patchVersionInput"></a>

```python
patch_version_input: str
```

- *Type:* str

---

##### `updated_latest_patch_version_input`<sup>Optional</sup> <a name="updated_latest_patch_version_input" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.updatedLatestPatchVersionInput"></a>

```python
updated_latest_patch_version_input: str
```

- *Type:* str

---

##### `mark_latest`<sup>Required</sup> <a name="mark_latest" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.markLatest"></a>

```python
mark_latest: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `owner_account`<sup>Required</sup> <a name="owner_account" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.ownerAccount"></a>

```python
owner_account: str
```

- *Type:* str

---

##### `package_id`<sup>Required</sup> <a name="package_id" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.packageId"></a>

```python
package_id: str
```

- *Type:* str

---

##### `package_version`<sup>Required</sup> <a name="package_version" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.packageVersion"></a>

```python
package_version: str
```

- *Type:* str

---

##### `patch_version`<sup>Required</sup> <a name="patch_version" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.patchVersion"></a>

```python
patch_version: str
```

- *Type:* str

---

##### `updated_latest_patch_version`<sup>Required</sup> <a name="updated_latest_patch_version" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.updatedLatestPatchVersion"></a>

```python
updated_latest_patch_version: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### PanoramaPackageVersionConfig <a name="PanoramaPackageVersionConfig" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersionConfig.Initializer"></a>

```python
from cdktn_provider_awscc import panorama_package_version

panoramaPackageVersion.PanoramaPackageVersionConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  package_id: str,
  package_version: str,
  patch_version: str,
  mark_latest: bool | IResolvable = None,
  owner_account: str = None,
  updated_latest_patch_version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersionConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersionConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersionConfig.property.packageId">package_id</a></code> | <code>str</code> | A package ID. |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersionConfig.property.packageVersion">package_version</a></code> | <code>str</code> | A package version. |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersionConfig.property.patchVersion">patch_version</a></code> | <code>str</code> | A patch version. |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersionConfig.property.markLatest">mark_latest</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether to mark the new version as the latest version. |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersionConfig.property.ownerAccount">owner_account</a></code> | <code>str</code> | An owner account. |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersionConfig.property.updatedLatestPatchVersion">updated_latest_patch_version</a></code> | <code>str</code> | If the version was marked latest, the new version to maker as latest. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersionConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersionConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersionConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `package_id`<sup>Required</sup> <a name="package_id" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersionConfig.property.packageId"></a>

```python
package_id: str
```

- *Type:* str

A package ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/panorama_package_version#package_id PanoramaPackageVersion#package_id}

---

##### `package_version`<sup>Required</sup> <a name="package_version" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersionConfig.property.packageVersion"></a>

```python
package_version: str
```

- *Type:* str

A package version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/panorama_package_version#package_version PanoramaPackageVersion#package_version}

---

##### `patch_version`<sup>Required</sup> <a name="patch_version" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersionConfig.property.patchVersion"></a>

```python
patch_version: str
```

- *Type:* str

A patch version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/panorama_package_version#patch_version PanoramaPackageVersion#patch_version}

---

##### `mark_latest`<sup>Optional</sup> <a name="mark_latest" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersionConfig.property.markLatest"></a>

```python
mark_latest: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether to mark the new version as the latest version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/panorama_package_version#mark_latest PanoramaPackageVersion#mark_latest}

---

##### `owner_account`<sup>Optional</sup> <a name="owner_account" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersionConfig.property.ownerAccount"></a>

```python
owner_account: str
```

- *Type:* str

An owner account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/panorama_package_version#owner_account PanoramaPackageVersion#owner_account}

---

##### `updated_latest_patch_version`<sup>Optional</sup> <a name="updated_latest_patch_version" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersionConfig.property.updatedLatestPatchVersion"></a>

```python
updated_latest_patch_version: str
```

- *Type:* str

If the version was marked latest, the new version to maker as latest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/panorama_package_version#updated_latest_patch_version PanoramaPackageVersion#updated_latest_patch_version}

---



