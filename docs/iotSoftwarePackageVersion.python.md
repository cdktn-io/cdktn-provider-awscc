# `iotSoftwarePackageVersion` Submodule <a name="`iotSoftwarePackageVersion` Submodule" id="@cdktn/provider-awscc.iotSoftwarePackageVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotSoftwarePackageVersion <a name="IotSoftwarePackageVersion" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_software_package_version awscc_iot_software_package_version}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.Initializer"></a>

```python
from cdktn_provider_awscc import iot_software_package_version

iotSoftwarePackageVersion.IotSoftwarePackageVersion(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  package_name: str,
  artifact: IotSoftwarePackageVersionArtifact = None,
  attributes: typing.Mapping[str] = None,
  description: str = None,
  recipe: str = None,
  sbom: IotSoftwarePackageVersionSbom = None,
  tags: IResolvable | typing.List[IotSoftwarePackageVersionTags] = None,
  version_name: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.Initializer.parameter.packageName">package_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_software_package_version#package_name IotSoftwarePackageVersion#package_name}. |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.Initializer.parameter.artifact">artifact</a></code> | <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifact">IotSoftwarePackageVersionArtifact</a></code> | The artifact location of the package version. |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.Initializer.parameter.attributes">attributes</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_software_package_version#attributes IotSoftwarePackageVersion#attributes}. |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_software_package_version#description IotSoftwarePackageVersion#description}. |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.Initializer.parameter.recipe">recipe</a></code> | <code>str</code> | The inline json job document associated with a software package version. |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.Initializer.parameter.sbom">sbom</a></code> | <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbom">IotSoftwarePackageVersionSbom</a></code> | The sbom zip archive location of the package version. |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTags">IotSoftwarePackageVersionTags</a>]</code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.Initializer.parameter.versionName">version_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_software_package_version#version_name IotSoftwarePackageVersion#version_name}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `package_name`<sup>Required</sup> <a name="package_name" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.Initializer.parameter.packageName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_software_package_version#package_name IotSoftwarePackageVersion#package_name}.

---

##### `artifact`<sup>Optional</sup> <a name="artifact" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.Initializer.parameter.artifact"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifact">IotSoftwarePackageVersionArtifact</a>

The artifact location of the package version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_software_package_version#artifact IotSoftwarePackageVersion#artifact}

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.Initializer.parameter.attributes"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_software_package_version#attributes IotSoftwarePackageVersion#attributes}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_software_package_version#description IotSoftwarePackageVersion#description}.

---

##### `recipe`<sup>Optional</sup> <a name="recipe" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.Initializer.parameter.recipe"></a>

- *Type:* str

The inline json job document associated with a software package version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_software_package_version#recipe IotSoftwarePackageVersion#recipe}

---

##### `sbom`<sup>Optional</sup> <a name="sbom" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.Initializer.parameter.sbom"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbom">IotSoftwarePackageVersionSbom</a>

The sbom zip archive location of the package version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_software_package_version#sbom IotSoftwarePackageVersion#sbom}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTags">IotSoftwarePackageVersionTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_software_package_version#tags IotSoftwarePackageVersion#tags}

---

##### `version_name`<sup>Optional</sup> <a name="version_name" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.Initializer.parameter.versionName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_software_package_version#version_name IotSoftwarePackageVersion#version_name}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.putArtifact">put_artifact</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.putSbom">put_sbom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.resetArtifact">reset_artifact</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.resetAttributes">reset_attributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.resetRecipe">reset_recipe</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.resetSbom">reset_sbom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.resetVersionName">reset_version_name</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_artifact` <a name="put_artifact" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.putArtifact"></a>

```python
def put_artifact(
  s3_location: IotSoftwarePackageVersionArtifactS3Location = None
) -> None
```

###### `s3_location`<sup>Optional</sup> <a name="s3_location" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.putArtifact.parameter.s3Location"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3Location">IotSoftwarePackageVersionArtifactS3Location</a>

The Amazon S3 location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_software_package_version#s3_location IotSoftwarePackageVersion#s3_location}

---

##### `put_sbom` <a name="put_sbom" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.putSbom"></a>

```python
def put_sbom(
  s3_location: IotSoftwarePackageVersionSbomS3Location = None
) -> None
```

###### `s3_location`<sup>Optional</sup> <a name="s3_location" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.putSbom.parameter.s3Location"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3Location">IotSoftwarePackageVersionSbomS3Location</a>

The Amazon S3 location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_software_package_version#s3_location IotSoftwarePackageVersion#s3_location}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[IotSoftwarePackageVersionTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTags">IotSoftwarePackageVersionTags</a>]

---

##### `reset_artifact` <a name="reset_artifact" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.resetArtifact"></a>

```python
def reset_artifact() -> None
```

##### `reset_attributes` <a name="reset_attributes" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.resetAttributes"></a>

```python
def reset_attributes() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_recipe` <a name="reset_recipe" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.resetRecipe"></a>

```python
def reset_recipe() -> None
```

##### `reset_sbom` <a name="reset_sbom" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.resetSbom"></a>

```python
def reset_sbom() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_version_name` <a name="reset_version_name" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.resetVersionName"></a>

```python
def reset_version_name() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a IotSoftwarePackageVersion resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.isConstruct"></a>

```python
from cdktn_provider_awscc import iot_software_package_version

iotSoftwarePackageVersion.IotSoftwarePackageVersion.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.isTerraformElement"></a>

```python
from cdktn_provider_awscc import iot_software_package_version

iotSoftwarePackageVersion.IotSoftwarePackageVersion.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.isTerraformResource"></a>

```python
from cdktn_provider_awscc import iot_software_package_version

iotSoftwarePackageVersion.IotSoftwarePackageVersion.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import iot_software_package_version

iotSoftwarePackageVersion.IotSoftwarePackageVersion.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a IotSoftwarePackageVersion resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the IotSoftwarePackageVersion to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing IotSoftwarePackageVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_software_package_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the IotSoftwarePackageVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.artifact">artifact</a></code> | <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference">IotSoftwarePackageVersionArtifactOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.errorReason">error_reason</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.packageVersionArn">package_version_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.sbom">sbom</a></code> | <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference">IotSoftwarePackageVersionSbomOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.sbomValidationStatus">sbom_validation_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsList">IotSoftwarePackageVersionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.artifactInput">artifact_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifact">IotSoftwarePackageVersionArtifact</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.attributesInput">attributes_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.packageNameInput">package_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.recipeInput">recipe_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.sbomInput">sbom_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbom">IotSoftwarePackageVersionSbom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTags">IotSoftwarePackageVersionTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.versionNameInput">version_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.attributes">attributes</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.packageName">package_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.recipe">recipe</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.versionName">version_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `artifact`<sup>Required</sup> <a name="artifact" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.artifact"></a>

```python
artifact: IotSoftwarePackageVersionArtifactOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference">IotSoftwarePackageVersionArtifactOutputReference</a>

---

##### `error_reason`<sup>Required</sup> <a name="error_reason" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.errorReason"></a>

```python
error_reason: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `package_version_arn`<sup>Required</sup> <a name="package_version_arn" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.packageVersionArn"></a>

```python
package_version_arn: str
```

- *Type:* str

---

##### `sbom`<sup>Required</sup> <a name="sbom" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.sbom"></a>

```python
sbom: IotSoftwarePackageVersionSbomOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference">IotSoftwarePackageVersionSbomOutputReference</a>

---

##### `sbom_validation_status`<sup>Required</sup> <a name="sbom_validation_status" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.sbomValidationStatus"></a>

```python
sbom_validation_status: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.tags"></a>

```python
tags: IotSoftwarePackageVersionTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsList">IotSoftwarePackageVersionTagsList</a>

---

##### `artifact_input`<sup>Optional</sup> <a name="artifact_input" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.artifactInput"></a>

```python
artifact_input: IResolvable | IotSoftwarePackageVersionArtifact
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifact">IotSoftwarePackageVersionArtifact</a>

---

##### `attributes_input`<sup>Optional</sup> <a name="attributes_input" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.attributesInput"></a>

```python
attributes_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `package_name_input`<sup>Optional</sup> <a name="package_name_input" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.packageNameInput"></a>

```python
package_name_input: str
```

- *Type:* str

---

##### `recipe_input`<sup>Optional</sup> <a name="recipe_input" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.recipeInput"></a>

```python
recipe_input: str
```

- *Type:* str

---

##### `sbom_input`<sup>Optional</sup> <a name="sbom_input" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.sbomInput"></a>

```python
sbom_input: IResolvable | IotSoftwarePackageVersionSbom
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbom">IotSoftwarePackageVersionSbom</a>

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[IotSoftwarePackageVersionTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTags">IotSoftwarePackageVersionTags</a>]

---

##### `version_name_input`<sup>Optional</sup> <a name="version_name_input" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.versionNameInput"></a>

```python
version_name_input: str
```

- *Type:* str

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.attributes"></a>

```python
attributes: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `package_name`<sup>Required</sup> <a name="package_name" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.packageName"></a>

```python
package_name: str
```

- *Type:* str

---

##### `recipe`<sup>Required</sup> <a name="recipe" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.recipe"></a>

```python
recipe: str
```

- *Type:* str

---

##### `version_name`<sup>Required</sup> <a name="version_name" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.versionName"></a>

```python
version_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersion.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IotSoftwarePackageVersionArtifact <a name="IotSoftwarePackageVersionArtifact" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifact"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifact.Initializer"></a>

```python
from cdktn_provider_awscc import iot_software_package_version

iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifact(
  s3_location: IotSoftwarePackageVersionArtifactS3Location = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifact.property.s3Location">s3_location</a></code> | <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3Location">IotSoftwarePackageVersionArtifactS3Location</a></code> | The Amazon S3 location. |

---

##### `s3_location`<sup>Optional</sup> <a name="s3_location" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifact.property.s3Location"></a>

```python
s3_location: IotSoftwarePackageVersionArtifactS3Location
```

- *Type:* <a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3Location">IotSoftwarePackageVersionArtifactS3Location</a>

The Amazon S3 location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_software_package_version#s3_location IotSoftwarePackageVersion#s3_location}

---

### IotSoftwarePackageVersionArtifactS3Location <a name="IotSoftwarePackageVersionArtifactS3Location" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3Location"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3Location.Initializer"></a>

```python
from cdktn_provider_awscc import iot_software_package_version

iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3Location(
  bucket: str = None,
  key: str = None,
  version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3Location.property.bucket">bucket</a></code> | <code>str</code> | The S3 bucket. |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3Location.property.key">key</a></code> | <code>str</code> | The S3 key. |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3Location.property.version">version</a></code> | <code>str</code> | The S3 version. |

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3Location.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

The S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_software_package_version#bucket IotSoftwarePackageVersion#bucket}

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3Location.property.key"></a>

```python
key: str
```

- *Type:* str

The S3 key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_software_package_version#key IotSoftwarePackageVersion#key}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3Location.property.version"></a>

```python
version: str
```

- *Type:* str

The S3 version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_software_package_version#version IotSoftwarePackageVersion#version}

---

### IotSoftwarePackageVersionConfig <a name="IotSoftwarePackageVersionConfig" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionConfig.Initializer"></a>

```python
from cdktn_provider_awscc import iot_software_package_version

iotSoftwarePackageVersion.IotSoftwarePackageVersionConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  package_name: str,
  artifact: IotSoftwarePackageVersionArtifact = None,
  attributes: typing.Mapping[str] = None,
  description: str = None,
  recipe: str = None,
  sbom: IotSoftwarePackageVersionSbom = None,
  tags: IResolvable | typing.List[IotSoftwarePackageVersionTags] = None,
  version_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionConfig.property.packageName">package_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_software_package_version#package_name IotSoftwarePackageVersion#package_name}. |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionConfig.property.artifact">artifact</a></code> | <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifact">IotSoftwarePackageVersionArtifact</a></code> | The artifact location of the package version. |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionConfig.property.attributes">attributes</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_software_package_version#attributes IotSoftwarePackageVersion#attributes}. |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_software_package_version#description IotSoftwarePackageVersion#description}. |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionConfig.property.recipe">recipe</a></code> | <code>str</code> | The inline json job document associated with a software package version. |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionConfig.property.sbom">sbom</a></code> | <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbom">IotSoftwarePackageVersionSbom</a></code> | The sbom zip archive location of the package version. |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTags">IotSoftwarePackageVersionTags</a>]</code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionConfig.property.versionName">version_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_software_package_version#version_name IotSoftwarePackageVersion#version_name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `package_name`<sup>Required</sup> <a name="package_name" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionConfig.property.packageName"></a>

```python
package_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_software_package_version#package_name IotSoftwarePackageVersion#package_name}.

---

##### `artifact`<sup>Optional</sup> <a name="artifact" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionConfig.property.artifact"></a>

```python
artifact: IotSoftwarePackageVersionArtifact
```

- *Type:* <a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifact">IotSoftwarePackageVersionArtifact</a>

The artifact location of the package version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_software_package_version#artifact IotSoftwarePackageVersion#artifact}

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionConfig.property.attributes"></a>

```python
attributes: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_software_package_version#attributes IotSoftwarePackageVersion#attributes}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_software_package_version#description IotSoftwarePackageVersion#description}.

---

##### `recipe`<sup>Optional</sup> <a name="recipe" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionConfig.property.recipe"></a>

```python
recipe: str
```

- *Type:* str

The inline json job document associated with a software package version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_software_package_version#recipe IotSoftwarePackageVersion#recipe}

---

##### `sbom`<sup>Optional</sup> <a name="sbom" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionConfig.property.sbom"></a>

```python
sbom: IotSoftwarePackageVersionSbom
```

- *Type:* <a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbom">IotSoftwarePackageVersionSbom</a>

The sbom zip archive location of the package version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_software_package_version#sbom IotSoftwarePackageVersion#sbom}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[IotSoftwarePackageVersionTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTags">IotSoftwarePackageVersionTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_software_package_version#tags IotSoftwarePackageVersion#tags}

---

##### `version_name`<sup>Optional</sup> <a name="version_name" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionConfig.property.versionName"></a>

```python
version_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_software_package_version#version_name IotSoftwarePackageVersion#version_name}.

---

### IotSoftwarePackageVersionSbom <a name="IotSoftwarePackageVersionSbom" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbom"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbom.Initializer"></a>

```python
from cdktn_provider_awscc import iot_software_package_version

iotSoftwarePackageVersion.IotSoftwarePackageVersionSbom(
  s3_location: IotSoftwarePackageVersionSbomS3Location = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbom.property.s3Location">s3_location</a></code> | <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3Location">IotSoftwarePackageVersionSbomS3Location</a></code> | The Amazon S3 location. |

---

##### `s3_location`<sup>Optional</sup> <a name="s3_location" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbom.property.s3Location"></a>

```python
s3_location: IotSoftwarePackageVersionSbomS3Location
```

- *Type:* <a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3Location">IotSoftwarePackageVersionSbomS3Location</a>

The Amazon S3 location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_software_package_version#s3_location IotSoftwarePackageVersion#s3_location}

---

### IotSoftwarePackageVersionSbomS3Location <a name="IotSoftwarePackageVersionSbomS3Location" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3Location"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3Location.Initializer"></a>

```python
from cdktn_provider_awscc import iot_software_package_version

iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3Location(
  bucket: str = None,
  key: str = None,
  version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3Location.property.bucket">bucket</a></code> | <code>str</code> | The S3 bucket. |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3Location.property.key">key</a></code> | <code>str</code> | The S3 key. |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3Location.property.version">version</a></code> | <code>str</code> | The S3 version. |

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3Location.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

The S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_software_package_version#bucket IotSoftwarePackageVersion#bucket}

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3Location.property.key"></a>

```python
key: str
```

- *Type:* str

The S3 key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_software_package_version#key IotSoftwarePackageVersion#key}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3Location.property.version"></a>

```python
version: str
```

- *Type:* str

The S3 version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_software_package_version#version IotSoftwarePackageVersion#version}

---

### IotSoftwarePackageVersionTags <a name="IotSoftwarePackageVersionTags" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTags.Initializer"></a>

```python
from cdktn_provider_awscc import iot_software_package_version

iotSoftwarePackageVersion.IotSoftwarePackageVersionTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_software_package_version#key IotSoftwarePackageVersion#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

You can specify a value that is 1 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_software_package_version#value IotSoftwarePackageVersion#value}

---

## Classes <a name="Classes" id="Classes"></a>

### IotSoftwarePackageVersionArtifactOutputReference <a name="IotSoftwarePackageVersionArtifactOutputReference" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iot_software_package_version

iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.putS3Location">put_s3_location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.resetS3Location">reset_s3_location</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_s3_location` <a name="put_s3_location" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.putS3Location"></a>

```python
def put_s3_location(
  bucket: str = None,
  key: str = None,
  version: str = None
) -> None
```

###### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.putS3Location.parameter.bucket"></a>

- *Type:* str

The S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_software_package_version#bucket IotSoftwarePackageVersion#bucket}

---

###### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.putS3Location.parameter.key"></a>

- *Type:* str

The S3 key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_software_package_version#key IotSoftwarePackageVersion#key}

---

###### `version`<sup>Optional</sup> <a name="version" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.putS3Location.parameter.version"></a>

- *Type:* str

The S3 version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_software_package_version#version IotSoftwarePackageVersion#version}

---

##### `reset_s3_location` <a name="reset_s3_location" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.resetS3Location"></a>

```python
def reset_s3_location() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.property.s3Location">s3_location</a></code> | <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference">IotSoftwarePackageVersionArtifactS3LocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.property.s3LocationInput">s3_location_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3Location">IotSoftwarePackageVersionArtifactS3Location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifact">IotSoftwarePackageVersionArtifact</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `s3_location`<sup>Required</sup> <a name="s3_location" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.property.s3Location"></a>

```python
s3_location: IotSoftwarePackageVersionArtifactS3LocationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference">IotSoftwarePackageVersionArtifactS3LocationOutputReference</a>

---

##### `s3_location_input`<sup>Optional</sup> <a name="s3_location_input" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.property.s3LocationInput"></a>

```python
s3_location_input: IResolvable | IotSoftwarePackageVersionArtifactS3Location
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3Location">IotSoftwarePackageVersionArtifactS3Location</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotSoftwarePackageVersionArtifact
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifact">IotSoftwarePackageVersionArtifact</a>

---


### IotSoftwarePackageVersionArtifactS3LocationOutputReference <a name="IotSoftwarePackageVersionArtifactS3LocationOutputReference" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iot_software_package_version

iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.resetBucket">reset_bucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.resetVersion">reset_version</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_bucket` <a name="reset_bucket" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.resetBucket"></a>

```python
def reset_bucket() -> None
```

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_version` <a name="reset_version" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.resetVersion"></a>

```python
def reset_version() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.property.bucketInput">bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3Location">IotSoftwarePackageVersionArtifactS3Location</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_input`<sup>Optional</sup> <a name="bucket_input" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.property.bucketInput"></a>

```python
bucket_input: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3LocationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotSoftwarePackageVersionArtifactS3Location
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionArtifactS3Location">IotSoftwarePackageVersionArtifactS3Location</a>

---


### IotSoftwarePackageVersionSbomOutputReference <a name="IotSoftwarePackageVersionSbomOutputReference" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iot_software_package_version

iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.putS3Location">put_s3_location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.resetS3Location">reset_s3_location</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_s3_location` <a name="put_s3_location" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.putS3Location"></a>

```python
def put_s3_location(
  bucket: str = None,
  key: str = None,
  version: str = None
) -> None
```

###### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.putS3Location.parameter.bucket"></a>

- *Type:* str

The S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_software_package_version#bucket IotSoftwarePackageVersion#bucket}

---

###### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.putS3Location.parameter.key"></a>

- *Type:* str

The S3 key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_software_package_version#key IotSoftwarePackageVersion#key}

---

###### `version`<sup>Optional</sup> <a name="version" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.putS3Location.parameter.version"></a>

- *Type:* str

The S3 version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_software_package_version#version IotSoftwarePackageVersion#version}

---

##### `reset_s3_location` <a name="reset_s3_location" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.resetS3Location"></a>

```python
def reset_s3_location() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.property.s3Location">s3_location</a></code> | <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference">IotSoftwarePackageVersionSbomS3LocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.property.s3LocationInput">s3_location_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3Location">IotSoftwarePackageVersionSbomS3Location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbom">IotSoftwarePackageVersionSbom</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `s3_location`<sup>Required</sup> <a name="s3_location" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.property.s3Location"></a>

```python
s3_location: IotSoftwarePackageVersionSbomS3LocationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference">IotSoftwarePackageVersionSbomS3LocationOutputReference</a>

---

##### `s3_location_input`<sup>Optional</sup> <a name="s3_location_input" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.property.s3LocationInput"></a>

```python
s3_location_input: IResolvable | IotSoftwarePackageVersionSbomS3Location
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3Location">IotSoftwarePackageVersionSbomS3Location</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotSoftwarePackageVersionSbom
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbom">IotSoftwarePackageVersionSbom</a>

---


### IotSoftwarePackageVersionSbomS3LocationOutputReference <a name="IotSoftwarePackageVersionSbomS3LocationOutputReference" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iot_software_package_version

iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.resetBucket">reset_bucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.resetVersion">reset_version</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_bucket` <a name="reset_bucket" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.resetBucket"></a>

```python
def reset_bucket() -> None
```

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_version` <a name="reset_version" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.resetVersion"></a>

```python
def reset_version() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.property.bucketInput">bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3Location">IotSoftwarePackageVersionSbomS3Location</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_input`<sup>Optional</sup> <a name="bucket_input" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.property.bucketInput"></a>

```python
bucket_input: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3LocationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotSoftwarePackageVersionSbomS3Location
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionSbomS3Location">IotSoftwarePackageVersionSbomS3Location</a>

---


### IotSoftwarePackageVersionTagsList <a name="IotSoftwarePackageVersionTagsList" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import iot_software_package_version

iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IotSoftwarePackageVersionTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTags">IotSoftwarePackageVersionTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[IotSoftwarePackageVersionTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTags">IotSoftwarePackageVersionTags</a>]

---


### IotSoftwarePackageVersionTagsOutputReference <a name="IotSoftwarePackageVersionTagsOutputReference" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iot_software_package_version

iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTags">IotSoftwarePackageVersionTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotSoftwarePackageVersionTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotSoftwarePackageVersion.IotSoftwarePackageVersionTags">IotSoftwarePackageVersionTags</a>

---



