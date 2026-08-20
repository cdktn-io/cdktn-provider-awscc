# `mediapackagePackagingConfiguration` Submodule <a name="`mediapackagePackagingConfiguration` Submodule" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MediapackagePackagingConfiguration <a name="MediapackagePackagingConfiguration" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration awscc_mediapackage_packaging_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import mediapackage_packaging_configuration

mediapackagePackagingConfiguration.MediapackagePackagingConfiguration(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  packaging_configuration_id: str,
  packaging_group_id: str,
  cmaf_package: MediapackagePackagingConfigurationCmafPackage = None,
  dash_package: MediapackagePackagingConfigurationDashPackage = None,
  hls_package: MediapackagePackagingConfigurationHlsPackage = None,
  mss_package: MediapackagePackagingConfigurationMssPackage = None,
  tags: IResolvable | typing.List[MediapackagePackagingConfigurationTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.Initializer.parameter.packagingConfigurationId">packaging_configuration_id</a></code> | <code>str</code> | The ID of the PackagingConfiguration. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.Initializer.parameter.packagingGroupId">packaging_group_id</a></code> | <code>str</code> | The ID of a PackagingGroup. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.Initializer.parameter.cmafPackage">cmaf_package</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackage">MediapackagePackagingConfigurationCmafPackage</a></code> | A CMAF packaging configuration. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.Initializer.parameter.dashPackage">dash_package</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackage">MediapackagePackagingConfigurationDashPackage</a></code> | A Dynamic Adaptive Streaming over HTTP (DASH) packaging configuration. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.Initializer.parameter.hlsPackage">hls_package</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackage">MediapackagePackagingConfigurationHlsPackage</a></code> | An HTTP Live Streaming (HLS) packaging configuration. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.Initializer.parameter.mssPackage">mss_package</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackage">MediapackagePackagingConfigurationMssPackage</a></code> | A Microsoft Smooth Streaming (MSS) PackagingConfiguration. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTags">MediapackagePackagingConfigurationTags</a>]</code> | A collection of tags associated with a resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `packaging_configuration_id`<sup>Required</sup> <a name="packaging_configuration_id" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.Initializer.parameter.packagingConfigurationId"></a>

- *Type:* str

The ID of the PackagingConfiguration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#packaging_configuration_id MediapackagePackagingConfiguration#packaging_configuration_id}

---

##### `packaging_group_id`<sup>Required</sup> <a name="packaging_group_id" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.Initializer.parameter.packagingGroupId"></a>

- *Type:* str

The ID of a PackagingGroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#packaging_group_id MediapackagePackagingConfiguration#packaging_group_id}

---

##### `cmaf_package`<sup>Optional</sup> <a name="cmaf_package" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.Initializer.parameter.cmafPackage"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackage">MediapackagePackagingConfigurationCmafPackage</a>

A CMAF packaging configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#cmaf_package MediapackagePackagingConfiguration#cmaf_package}

---

##### `dash_package`<sup>Optional</sup> <a name="dash_package" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.Initializer.parameter.dashPackage"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackage">MediapackagePackagingConfigurationDashPackage</a>

A Dynamic Adaptive Streaming over HTTP (DASH) packaging configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#dash_package MediapackagePackagingConfiguration#dash_package}

---

##### `hls_package`<sup>Optional</sup> <a name="hls_package" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.Initializer.parameter.hlsPackage"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackage">MediapackagePackagingConfigurationHlsPackage</a>

An HTTP Live Streaming (HLS) packaging configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#hls_package MediapackagePackagingConfiguration#hls_package}

---

##### `mss_package`<sup>Optional</sup> <a name="mss_package" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.Initializer.parameter.mssPackage"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackage">MediapackagePackagingConfigurationMssPackage</a>

A Microsoft Smooth Streaming (MSS) PackagingConfiguration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#mss_package MediapackagePackagingConfiguration#mss_package}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTags">MediapackagePackagingConfigurationTags</a>]

A collection of tags associated with a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#tags MediapackagePackagingConfiguration#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.putCmafPackage">put_cmaf_package</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.putDashPackage">put_dash_package</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.putHlsPackage">put_hls_package</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.putMssPackage">put_mss_package</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.resetCmafPackage">reset_cmaf_package</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.resetDashPackage">reset_dash_package</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.resetHlsPackage">reset_hls_package</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.resetMssPackage">reset_mss_package</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_cmaf_package` <a name="put_cmaf_package" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.putCmafPackage"></a>

```python
def put_cmaf_package(
  encryption: MediapackagePackagingConfigurationCmafPackageEncryption = None,
  hls_manifests: IResolvable | typing.List[MediapackagePackagingConfigurationCmafPackageHlsManifests] = None,
  include_encoder_configuration_in_segments: bool | IResolvable = None,
  segment_duration_seconds: typing.Union[int, float] = None
) -> None
```

###### `encryption`<sup>Optional</sup> <a name="encryption" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.putCmafPackage.parameter.encryption"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryption">MediapackagePackagingConfigurationCmafPackageEncryption</a>

A CMAF encryption configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#encryption MediapackagePackagingConfiguration#encryption}

---

###### `hls_manifests`<sup>Optional</sup> <a name="hls_manifests" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.putCmafPackage.parameter.hlsManifests"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifests">MediapackagePackagingConfigurationCmafPackageHlsManifests</a>]

A list of HLS manifest configurations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#hls_manifests MediapackagePackagingConfiguration#hls_manifests}

---

###### `include_encoder_configuration_in_segments`<sup>Optional</sup> <a name="include_encoder_configuration_in_segments" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.putCmafPackage.parameter.includeEncoderConfigurationInSegments"></a>

- *Type:* bool | cdktn.IResolvable

When includeEncoderConfigurationInSegments is set to true, MediaPackage places your encoder's Sequence Parameter Set (SPS), Picture Parameter Set (PPS), and Video Parameter Set (VPS) metadata in every video segment instead of in the init fragment.

This lets you use different SPS/PPS/VPS settings for your assets during content playback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#include_encoder_configuration_in_segments MediapackagePackagingConfiguration#include_encoder_configuration_in_segments}

---

###### `segment_duration_seconds`<sup>Optional</sup> <a name="segment_duration_seconds" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.putCmafPackage.parameter.segmentDurationSeconds"></a>

- *Type:* typing.Union[int, float]

Duration (in seconds) of each fragment.

Actual fragments will be rounded to the nearest multiple of the source fragment duration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#segment_duration_seconds MediapackagePackagingConfiguration#segment_duration_seconds}

---

##### `put_dash_package` <a name="put_dash_package" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.putDashPackage"></a>

```python
def put_dash_package(
  dash_manifests: IResolvable | typing.List[MediapackagePackagingConfigurationDashPackageDashManifests] = None,
  encryption: MediapackagePackagingConfigurationDashPackageEncryption = None,
  include_encoder_configuration_in_segments: bool | IResolvable = None,
  include_iframe_only_stream: bool | IResolvable = None,
  period_triggers: typing.List[str] = None,
  segment_duration_seconds: typing.Union[int, float] = None,
  segment_template_format: str = None
) -> None
```

###### `dash_manifests`<sup>Optional</sup> <a name="dash_manifests" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.putDashPackage.parameter.dashManifests"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifests">MediapackagePackagingConfigurationDashPackageDashManifests</a>]

A list of DASH manifest configurations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#dash_manifests MediapackagePackagingConfiguration#dash_manifests}

---

###### `encryption`<sup>Optional</sup> <a name="encryption" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.putDashPackage.parameter.encryption"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryption">MediapackagePackagingConfigurationDashPackageEncryption</a>

A Dynamic Adaptive Streaming over HTTP (DASH) encryption configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#encryption MediapackagePackagingConfiguration#encryption}

---

###### `include_encoder_configuration_in_segments`<sup>Optional</sup> <a name="include_encoder_configuration_in_segments" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.putDashPackage.parameter.includeEncoderConfigurationInSegments"></a>

- *Type:* bool | cdktn.IResolvable

When includeEncoderConfigurationInSegments is set to true, MediaPackage places your encoder's Sequence Parameter Set (SPS), Picture Parameter Set (PPS), and Video Parameter Set (VPS) metadata in every video segment instead of in the init fragment.

This lets you use different SPS/PPS/VPS settings for your assets during content playback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#include_encoder_configuration_in_segments MediapackagePackagingConfiguration#include_encoder_configuration_in_segments}

---

###### `include_iframe_only_stream`<sup>Optional</sup> <a name="include_iframe_only_stream" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.putDashPackage.parameter.includeIframeOnlyStream"></a>

- *Type:* bool | cdktn.IResolvable

When enabled, an I-Frame only stream will be included in the output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#include_iframe_only_stream MediapackagePackagingConfiguration#include_iframe_only_stream}

---

###### `period_triggers`<sup>Optional</sup> <a name="period_triggers" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.putDashPackage.parameter.periodTriggers"></a>

- *Type:* typing.List[str]

A list of triggers that controls when the outgoing Dynamic Adaptive Streaming over HTTP (DASH) Media Presentation Description (MPD) will be partitioned into multiple periods.

If empty, the content will not be partitioned into more than one period. If the list contains "ADS", new periods will be created where the Asset contains SCTE-35 ad markers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#period_triggers MediapackagePackagingConfiguration#period_triggers}

---

###### `segment_duration_seconds`<sup>Optional</sup> <a name="segment_duration_seconds" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.putDashPackage.parameter.segmentDurationSeconds"></a>

- *Type:* typing.Union[int, float]

Duration (in seconds) of each fragment.

Actual fragments will be rounded to the nearest multiple of the source fragment duration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#segment_duration_seconds MediapackagePackagingConfiguration#segment_duration_seconds}

---

###### `segment_template_format`<sup>Optional</sup> <a name="segment_template_format" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.putDashPackage.parameter.segmentTemplateFormat"></a>

- *Type:* str

Determines the type of SegmentTemplate included in the Media Presentation Description (MPD).

When set to NUMBER_WITH_TIMELINE, a full timeline is presented in each SegmentTemplate, with $Number$ media URLs. When set to TIME_WITH_TIMELINE, a full timeline is presented in each SegmentTemplate, with $Time$ media URLs. When set to NUMBER_WITH_DURATION, only a duration is included in each SegmentTemplate, with $Number$ media URLs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#segment_template_format MediapackagePackagingConfiguration#segment_template_format}

---

##### `put_hls_package` <a name="put_hls_package" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.putHlsPackage"></a>

```python
def put_hls_package(
  encryption: MediapackagePackagingConfigurationHlsPackageEncryption = None,
  hls_manifests: IResolvable | typing.List[MediapackagePackagingConfigurationHlsPackageHlsManifests] = None,
  include_dvb_subtitles: bool | IResolvable = None,
  segment_duration_seconds: typing.Union[int, float] = None,
  use_audio_rendition_group: bool | IResolvable = None
) -> None
```

###### `encryption`<sup>Optional</sup> <a name="encryption" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.putHlsPackage.parameter.encryption"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryption">MediapackagePackagingConfigurationHlsPackageEncryption</a>

An HTTP Live Streaming (HLS) encryption configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#encryption MediapackagePackagingConfiguration#encryption}

---

###### `hls_manifests`<sup>Optional</sup> <a name="hls_manifests" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.putHlsPackage.parameter.hlsManifests"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifests">MediapackagePackagingConfigurationHlsPackageHlsManifests</a>]

A list of HLS manifest configurations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#hls_manifests MediapackagePackagingConfiguration#hls_manifests}

---

###### `include_dvb_subtitles`<sup>Optional</sup> <a name="include_dvb_subtitles" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.putHlsPackage.parameter.includeDvbSubtitles"></a>

- *Type:* bool | cdktn.IResolvable

When enabled, MediaPackage passes through digital video broadcasting (DVB) subtitles into the output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#include_dvb_subtitles MediapackagePackagingConfiguration#include_dvb_subtitles}

---

###### `segment_duration_seconds`<sup>Optional</sup> <a name="segment_duration_seconds" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.putHlsPackage.parameter.segmentDurationSeconds"></a>

- *Type:* typing.Union[int, float]

Duration (in seconds) of each fragment.

Actual fragments will be rounded to the nearest multiple of the source fragment duration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#segment_duration_seconds MediapackagePackagingConfiguration#segment_duration_seconds}

---

###### `use_audio_rendition_group`<sup>Optional</sup> <a name="use_audio_rendition_group" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.putHlsPackage.parameter.useAudioRenditionGroup"></a>

- *Type:* bool | cdktn.IResolvable

When enabled, audio streams will be placed in rendition groups in the output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#use_audio_rendition_group MediapackagePackagingConfiguration#use_audio_rendition_group}

---

##### `put_mss_package` <a name="put_mss_package" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.putMssPackage"></a>

```python
def put_mss_package(
  encryption: MediapackagePackagingConfigurationMssPackageEncryption = None,
  mss_manifests: IResolvable | typing.List[MediapackagePackagingConfigurationMssPackageMssManifests] = None,
  segment_duration_seconds: typing.Union[int, float] = None
) -> None
```

###### `encryption`<sup>Optional</sup> <a name="encryption" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.putMssPackage.parameter.encryption"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryption">MediapackagePackagingConfigurationMssPackageEncryption</a>

A CMAF encryption configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#encryption MediapackagePackagingConfiguration#encryption}

---

###### `mss_manifests`<sup>Optional</sup> <a name="mss_manifests" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.putMssPackage.parameter.mssManifests"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifests">MediapackagePackagingConfigurationMssPackageMssManifests</a>]

A list of MSS manifest configurations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#mss_manifests MediapackagePackagingConfiguration#mss_manifests}

---

###### `segment_duration_seconds`<sup>Optional</sup> <a name="segment_duration_seconds" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.putMssPackage.parameter.segmentDurationSeconds"></a>

- *Type:* typing.Union[int, float]

Duration (in seconds) of each fragment.

Actual fragments will be rounded to the nearest multiple of the source fragment duration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#segment_duration_seconds MediapackagePackagingConfiguration#segment_duration_seconds}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[MediapackagePackagingConfigurationTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTags">MediapackagePackagingConfigurationTags</a>]

---

##### `reset_cmaf_package` <a name="reset_cmaf_package" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.resetCmafPackage"></a>

```python
def reset_cmaf_package() -> None
```

##### `reset_dash_package` <a name="reset_dash_package" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.resetDashPackage"></a>

```python
def reset_dash_package() -> None
```

##### `reset_hls_package` <a name="reset_hls_package" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.resetHlsPackage"></a>

```python
def reset_hls_package() -> None
```

##### `reset_mss_package` <a name="reset_mss_package" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.resetMssPackage"></a>

```python
def reset_mss_package() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a MediapackagePackagingConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.isConstruct"></a>

```python
from cdktn_provider_awscc import mediapackage_packaging_configuration

mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.isTerraformElement"></a>

```python
from cdktn_provider_awscc import mediapackage_packaging_configuration

mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.isTerraformResource"></a>

```python
from cdktn_provider_awscc import mediapackage_packaging_configuration

mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import mediapackage_packaging_configuration

mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a MediapackagePackagingConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the MediapackagePackagingConfiguration to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing MediapackagePackagingConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the MediapackagePackagingConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.cmafPackage">cmaf_package</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference">MediapackagePackagingConfigurationCmafPackageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.dashPackage">dash_package</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference">MediapackagePackagingConfigurationDashPackageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.hlsPackage">hls_package</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference">MediapackagePackagingConfigurationHlsPackageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.mssPackage">mss_package</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference">MediapackagePackagingConfigurationMssPackageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsList">MediapackagePackagingConfigurationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.cmafPackageInput">cmaf_package_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackage">MediapackagePackagingConfigurationCmafPackage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.dashPackageInput">dash_package_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackage">MediapackagePackagingConfigurationDashPackage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.hlsPackageInput">hls_package_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackage">MediapackagePackagingConfigurationHlsPackage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.mssPackageInput">mss_package_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackage">MediapackagePackagingConfigurationMssPackage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.packagingConfigurationIdInput">packaging_configuration_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.packagingGroupIdInput">packaging_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTags">MediapackagePackagingConfigurationTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.packagingConfigurationId">packaging_configuration_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.packagingGroupId">packaging_group_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `cmaf_package`<sup>Required</sup> <a name="cmaf_package" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.cmafPackage"></a>

```python
cmaf_package: MediapackagePackagingConfigurationCmafPackageOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference">MediapackagePackagingConfigurationCmafPackageOutputReference</a>

---

##### `dash_package`<sup>Required</sup> <a name="dash_package" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.dashPackage"></a>

```python
dash_package: MediapackagePackagingConfigurationDashPackageOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference">MediapackagePackagingConfigurationDashPackageOutputReference</a>

---

##### `hls_package`<sup>Required</sup> <a name="hls_package" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.hlsPackage"></a>

```python
hls_package: MediapackagePackagingConfigurationHlsPackageOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference">MediapackagePackagingConfigurationHlsPackageOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `mss_package`<sup>Required</sup> <a name="mss_package" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.mssPackage"></a>

```python
mss_package: MediapackagePackagingConfigurationMssPackageOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference">MediapackagePackagingConfigurationMssPackageOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.tags"></a>

```python
tags: MediapackagePackagingConfigurationTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsList">MediapackagePackagingConfigurationTagsList</a>

---

##### `cmaf_package_input`<sup>Optional</sup> <a name="cmaf_package_input" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.cmafPackageInput"></a>

```python
cmaf_package_input: IResolvable | MediapackagePackagingConfigurationCmafPackage
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackage">MediapackagePackagingConfigurationCmafPackage</a>

---

##### `dash_package_input`<sup>Optional</sup> <a name="dash_package_input" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.dashPackageInput"></a>

```python
dash_package_input: IResolvable | MediapackagePackagingConfigurationDashPackage
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackage">MediapackagePackagingConfigurationDashPackage</a>

---

##### `hls_package_input`<sup>Optional</sup> <a name="hls_package_input" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.hlsPackageInput"></a>

```python
hls_package_input: IResolvable | MediapackagePackagingConfigurationHlsPackage
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackage">MediapackagePackagingConfigurationHlsPackage</a>

---

##### `mss_package_input`<sup>Optional</sup> <a name="mss_package_input" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.mssPackageInput"></a>

```python
mss_package_input: IResolvable | MediapackagePackagingConfigurationMssPackage
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackage">MediapackagePackagingConfigurationMssPackage</a>

---

##### `packaging_configuration_id_input`<sup>Optional</sup> <a name="packaging_configuration_id_input" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.packagingConfigurationIdInput"></a>

```python
packaging_configuration_id_input: str
```

- *Type:* str

---

##### `packaging_group_id_input`<sup>Optional</sup> <a name="packaging_group_id_input" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.packagingGroupIdInput"></a>

```python
packaging_group_id_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[MediapackagePackagingConfigurationTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTags">MediapackagePackagingConfigurationTags</a>]

---

##### `packaging_configuration_id`<sup>Required</sup> <a name="packaging_configuration_id" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.packagingConfigurationId"></a>

```python
packaging_configuration_id: str
```

- *Type:* str

---

##### `packaging_group_id`<sup>Required</sup> <a name="packaging_group_id" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.packagingGroupId"></a>

```python
packaging_group_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### MediapackagePackagingConfigurationCmafPackage <a name="MediapackagePackagingConfigurationCmafPackage" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackage.Initializer"></a>

```python
from cdktn_provider_awscc import mediapackage_packaging_configuration

mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackage(
  encryption: MediapackagePackagingConfigurationCmafPackageEncryption = None,
  hls_manifests: IResolvable | typing.List[MediapackagePackagingConfigurationCmafPackageHlsManifests] = None,
  include_encoder_configuration_in_segments: bool | IResolvable = None,
  segment_duration_seconds: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackage.property.encryption">encryption</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryption">MediapackagePackagingConfigurationCmafPackageEncryption</a></code> | A CMAF encryption configuration. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackage.property.hlsManifests">hls_manifests</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifests">MediapackagePackagingConfigurationCmafPackageHlsManifests</a>]</code> | A list of HLS manifest configurations. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackage.property.includeEncoderConfigurationInSegments">include_encoder_configuration_in_segments</a></code> | <code>bool \| cdktn.IResolvable</code> | When includeEncoderConfigurationInSegments is set to true, MediaPackage places your encoder's Sequence Parameter Set (SPS), Picture Parameter Set (PPS), and Video Parameter Set (VPS) metadata in every video segment instead of in the init fragment. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackage.property.segmentDurationSeconds">segment_duration_seconds</a></code> | <code>typing.Union[int, float]</code> | Duration (in seconds) of each fragment. |

---

##### `encryption`<sup>Optional</sup> <a name="encryption" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackage.property.encryption"></a>

```python
encryption: MediapackagePackagingConfigurationCmafPackageEncryption
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryption">MediapackagePackagingConfigurationCmafPackageEncryption</a>

A CMAF encryption configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#encryption MediapackagePackagingConfiguration#encryption}

---

##### `hls_manifests`<sup>Optional</sup> <a name="hls_manifests" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackage.property.hlsManifests"></a>

```python
hls_manifests: IResolvable | typing.List[MediapackagePackagingConfigurationCmafPackageHlsManifests]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifests">MediapackagePackagingConfigurationCmafPackageHlsManifests</a>]

A list of HLS manifest configurations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#hls_manifests MediapackagePackagingConfiguration#hls_manifests}

---

##### `include_encoder_configuration_in_segments`<sup>Optional</sup> <a name="include_encoder_configuration_in_segments" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackage.property.includeEncoderConfigurationInSegments"></a>

```python
include_encoder_configuration_in_segments: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

When includeEncoderConfigurationInSegments is set to true, MediaPackage places your encoder's Sequence Parameter Set (SPS), Picture Parameter Set (PPS), and Video Parameter Set (VPS) metadata in every video segment instead of in the init fragment.

This lets you use different SPS/PPS/VPS settings for your assets during content playback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#include_encoder_configuration_in_segments MediapackagePackagingConfiguration#include_encoder_configuration_in_segments}

---

##### `segment_duration_seconds`<sup>Optional</sup> <a name="segment_duration_seconds" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackage.property.segmentDurationSeconds"></a>

```python
segment_duration_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Duration (in seconds) of each fragment.

Actual fragments will be rounded to the nearest multiple of the source fragment duration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#segment_duration_seconds MediapackagePackagingConfiguration#segment_duration_seconds}

---

### MediapackagePackagingConfigurationCmafPackageEncryption <a name="MediapackagePackagingConfigurationCmafPackageEncryption" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryption.Initializer"></a>

```python
from cdktn_provider_awscc import mediapackage_packaging_configuration

mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryption(
  speke_key_provider: MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryption.property.spekeKeyProvider">speke_key_provider</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider">MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider</a></code> | A configuration for accessing an external Secure Packager and Encoder Key Exchange (SPEKE) service that will provide encryption keys. |

---

##### `speke_key_provider`<sup>Optional</sup> <a name="speke_key_provider" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryption.property.spekeKeyProvider"></a>

```python
speke_key_provider: MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider">MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider</a>

A configuration for accessing an external Secure Packager and Encoder Key Exchange (SPEKE) service that will provide encryption keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#speke_key_provider MediapackagePackagingConfiguration#speke_key_provider}

---

### MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider <a name="MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider.Initializer"></a>

```python
from cdktn_provider_awscc import mediapackage_packaging_configuration

mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider(
  encryption_contract_configuration: MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration = None,
  role_arn: str = None,
  system_ids: typing.List[str] = None,
  url: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider.property.encryptionContractConfiguration">encryption_contract_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration">MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration</a></code> | The configuration to use for encrypting one or more content tracks separately for endpoints that use SPEKE 2.0. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider.property.roleArn">role_arn</a></code> | <code>str</code> | An Amazon Resource Name (ARN) of an IAM role that AWS Elemental MediaPackage will assume when accessing the key provider service. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider.property.systemIds">system_ids</a></code> | <code>typing.List[str]</code> | The system IDs to include in key requests. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider.property.url">url</a></code> | <code>str</code> | The URL of the external key provider service. |

---

##### `encryption_contract_configuration`<sup>Optional</sup> <a name="encryption_contract_configuration" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider.property.encryptionContractConfiguration"></a>

```python
encryption_contract_configuration: MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration">MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration</a>

The configuration to use for encrypting one or more content tracks separately for endpoints that use SPEKE 2.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#encryption_contract_configuration MediapackagePackagingConfiguration#encryption_contract_configuration}

---

##### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

An Amazon Resource Name (ARN) of an IAM role that AWS Elemental MediaPackage will assume when accessing the key provider service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#role_arn MediapackagePackagingConfiguration#role_arn}

---

##### `system_ids`<sup>Optional</sup> <a name="system_ids" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider.property.systemIds"></a>

```python
system_ids: typing.List[str]
```

- *Type:* typing.List[str]

The system IDs to include in key requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#system_ids MediapackagePackagingConfiguration#system_ids}

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider.property.url"></a>

```python
url: str
```

- *Type:* str

The URL of the external key provider service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#url MediapackagePackagingConfiguration#url}

---

### MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration <a name="MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import mediapackage_packaging_configuration

mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration(
  preset_speke20_audio: str = None,
  preset_speke20_video: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration.property.presetSpeke20Audio">preset_speke20_audio</a></code> | <code>str</code> | A collection of audio encryption presets. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration.property.presetSpeke20Video">preset_speke20_video</a></code> | <code>str</code> | A collection of video encryption presets. |

---

##### `preset_speke20_audio`<sup>Optional</sup> <a name="preset_speke20_audio" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration.property.presetSpeke20Audio"></a>

```python
preset_speke20_audio: str
```

- *Type:* str

A collection of audio encryption presets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#preset_speke_20_audio MediapackagePackagingConfiguration#preset_speke_20_audio}

---

##### `preset_speke20_video`<sup>Optional</sup> <a name="preset_speke20_video" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration.property.presetSpeke20Video"></a>

```python
preset_speke20_video: str
```

- *Type:* str

A collection of video encryption presets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#preset_speke_20_video MediapackagePackagingConfiguration#preset_speke_20_video}

---

### MediapackagePackagingConfigurationCmafPackageHlsManifests <a name="MediapackagePackagingConfigurationCmafPackageHlsManifests" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifests"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifests.Initializer"></a>

```python
from cdktn_provider_awscc import mediapackage_packaging_configuration

mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifests(
  ad_markers: str = None,
  include_iframe_only_stream: bool | IResolvable = None,
  manifest_name: str = None,
  program_date_time_interval_seconds: typing.Union[int, float] = None,
  repeat_ext_x_key: bool | IResolvable = None,
  stream_selection: MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelection = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifests.property.adMarkers">ad_markers</a></code> | <code>str</code> | This setting controls how ad markers are included in the packaged OriginEndpoint. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifests.property.includeIframeOnlyStream">include_iframe_only_stream</a></code> | <code>bool \| cdktn.IResolvable</code> | When enabled, an I-Frame only stream will be included in the output. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifests.property.manifestName">manifest_name</a></code> | <code>str</code> | An optional string to include in the name of the manifest. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifests.property.programDateTimeIntervalSeconds">program_date_time_interval_seconds</a></code> | <code>typing.Union[int, float]</code> | The interval (in seconds) between each EXT-X-PROGRAM-DATE-TIME tag inserted into manifests. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifests.property.repeatExtXKey">repeat_ext_x_key</a></code> | <code>bool \| cdktn.IResolvable</code> | When enabled, the EXT-X-KEY tag will be repeated in output manifests. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifests.property.streamSelection">stream_selection</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelection">MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelection</a></code> | A StreamSelection configuration. |

---

##### `ad_markers`<sup>Optional</sup> <a name="ad_markers" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifests.property.adMarkers"></a>

```python
ad_markers: str
```

- *Type:* str

This setting controls how ad markers are included in the packaged OriginEndpoint.

"NONE" will omit all SCTE-35 ad markers from the output. "PASSTHROUGH" causes the manifest to contain a copy of the SCTE-35 ad markers (comments) taken directly from the input HTTP Live Streaming (HLS) manifest. "SCTE35_ENHANCED" generates ad markers and blackout tags based on SCTE-35 messages in the input source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#ad_markers MediapackagePackagingConfiguration#ad_markers}

---

##### `include_iframe_only_stream`<sup>Optional</sup> <a name="include_iframe_only_stream" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifests.property.includeIframeOnlyStream"></a>

```python
include_iframe_only_stream: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

When enabled, an I-Frame only stream will be included in the output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#include_iframe_only_stream MediapackagePackagingConfiguration#include_iframe_only_stream}

---

##### `manifest_name`<sup>Optional</sup> <a name="manifest_name" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifests.property.manifestName"></a>

```python
manifest_name: str
```

- *Type:* str

An optional string to include in the name of the manifest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#manifest_name MediapackagePackagingConfiguration#manifest_name}

---

##### `program_date_time_interval_seconds`<sup>Optional</sup> <a name="program_date_time_interval_seconds" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifests.property.programDateTimeIntervalSeconds"></a>

```python
program_date_time_interval_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The interval (in seconds) between each EXT-X-PROGRAM-DATE-TIME tag inserted into manifests.

Additionally, when an interval is specified ID3Timed Metadata messages will be generated every 5 seconds using the ingest time of the content. If the interval is not specified, or set to 0, then no EXT-X-PROGRAM-DATE-TIME tags will be inserted into manifests and no ID3Timed Metadata messages will be generated. Note that irrespective of this parameter, if any ID3 Timed Metadata is found in HTTP Live Streaming (HLS) input, it will be passed through to HLS output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#program_date_time_interval_seconds MediapackagePackagingConfiguration#program_date_time_interval_seconds}

---

##### `repeat_ext_x_key`<sup>Optional</sup> <a name="repeat_ext_x_key" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifests.property.repeatExtXKey"></a>

```python
repeat_ext_x_key: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

When enabled, the EXT-X-KEY tag will be repeated in output manifests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#repeat_ext_x_key MediapackagePackagingConfiguration#repeat_ext_x_key}

---

##### `stream_selection`<sup>Optional</sup> <a name="stream_selection" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifests.property.streamSelection"></a>

```python
stream_selection: MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelection
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelection">MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelection</a>

A StreamSelection configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#stream_selection MediapackagePackagingConfiguration#stream_selection}

---

### MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelection <a name="MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelection" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelection.Initializer"></a>

```python
from cdktn_provider_awscc import mediapackage_packaging_configuration

mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelection(
  max_video_bits_per_second: typing.Union[int, float] = None,
  min_video_bits_per_second: typing.Union[int, float] = None,
  stream_order: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelection.property.maxVideoBitsPerSecond">max_video_bits_per_second</a></code> | <code>typing.Union[int, float]</code> | The maximum video bitrate (bps) to include in output. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelection.property.minVideoBitsPerSecond">min_video_bits_per_second</a></code> | <code>typing.Union[int, float]</code> | The minimum video bitrate (bps) to include in output. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelection.property.streamOrder">stream_order</a></code> | <code>str</code> | A directive that determines the order of streams in the output. |

---

##### `max_video_bits_per_second`<sup>Optional</sup> <a name="max_video_bits_per_second" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelection.property.maxVideoBitsPerSecond"></a>

```python
max_video_bits_per_second: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum video bitrate (bps) to include in output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#max_video_bits_per_second MediapackagePackagingConfiguration#max_video_bits_per_second}

---

##### `min_video_bits_per_second`<sup>Optional</sup> <a name="min_video_bits_per_second" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelection.property.minVideoBitsPerSecond"></a>

```python
min_video_bits_per_second: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The minimum video bitrate (bps) to include in output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#min_video_bits_per_second MediapackagePackagingConfiguration#min_video_bits_per_second}

---

##### `stream_order`<sup>Optional</sup> <a name="stream_order" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelection.property.streamOrder"></a>

```python
stream_order: str
```

- *Type:* str

A directive that determines the order of streams in the output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#stream_order MediapackagePackagingConfiguration#stream_order}

---

### MediapackagePackagingConfigurationConfig <a name="MediapackagePackagingConfigurationConfig" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import mediapackage_packaging_configuration

mediapackagePackagingConfiguration.MediapackagePackagingConfigurationConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  packaging_configuration_id: str,
  packaging_group_id: str,
  cmaf_package: MediapackagePackagingConfigurationCmafPackage = None,
  dash_package: MediapackagePackagingConfigurationDashPackage = None,
  hls_package: MediapackagePackagingConfigurationHlsPackage = None,
  mss_package: MediapackagePackagingConfigurationMssPackage = None,
  tags: IResolvable | typing.List[MediapackagePackagingConfigurationTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationConfig.property.packagingConfigurationId">packaging_configuration_id</a></code> | <code>str</code> | The ID of the PackagingConfiguration. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationConfig.property.packagingGroupId">packaging_group_id</a></code> | <code>str</code> | The ID of a PackagingGroup. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationConfig.property.cmafPackage">cmaf_package</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackage">MediapackagePackagingConfigurationCmafPackage</a></code> | A CMAF packaging configuration. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationConfig.property.dashPackage">dash_package</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackage">MediapackagePackagingConfigurationDashPackage</a></code> | A Dynamic Adaptive Streaming over HTTP (DASH) packaging configuration. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationConfig.property.hlsPackage">hls_package</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackage">MediapackagePackagingConfigurationHlsPackage</a></code> | An HTTP Live Streaming (HLS) packaging configuration. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationConfig.property.mssPackage">mss_package</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackage">MediapackagePackagingConfigurationMssPackage</a></code> | A Microsoft Smooth Streaming (MSS) PackagingConfiguration. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTags">MediapackagePackagingConfigurationTags</a>]</code> | A collection of tags associated with a resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `packaging_configuration_id`<sup>Required</sup> <a name="packaging_configuration_id" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationConfig.property.packagingConfigurationId"></a>

```python
packaging_configuration_id: str
```

- *Type:* str

The ID of the PackagingConfiguration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#packaging_configuration_id MediapackagePackagingConfiguration#packaging_configuration_id}

---

##### `packaging_group_id`<sup>Required</sup> <a name="packaging_group_id" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationConfig.property.packagingGroupId"></a>

```python
packaging_group_id: str
```

- *Type:* str

The ID of a PackagingGroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#packaging_group_id MediapackagePackagingConfiguration#packaging_group_id}

---

##### `cmaf_package`<sup>Optional</sup> <a name="cmaf_package" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationConfig.property.cmafPackage"></a>

```python
cmaf_package: MediapackagePackagingConfigurationCmafPackage
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackage">MediapackagePackagingConfigurationCmafPackage</a>

A CMAF packaging configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#cmaf_package MediapackagePackagingConfiguration#cmaf_package}

---

##### `dash_package`<sup>Optional</sup> <a name="dash_package" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationConfig.property.dashPackage"></a>

```python
dash_package: MediapackagePackagingConfigurationDashPackage
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackage">MediapackagePackagingConfigurationDashPackage</a>

A Dynamic Adaptive Streaming over HTTP (DASH) packaging configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#dash_package MediapackagePackagingConfiguration#dash_package}

---

##### `hls_package`<sup>Optional</sup> <a name="hls_package" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationConfig.property.hlsPackage"></a>

```python
hls_package: MediapackagePackagingConfigurationHlsPackage
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackage">MediapackagePackagingConfigurationHlsPackage</a>

An HTTP Live Streaming (HLS) packaging configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#hls_package MediapackagePackagingConfiguration#hls_package}

---

##### `mss_package`<sup>Optional</sup> <a name="mss_package" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationConfig.property.mssPackage"></a>

```python
mss_package: MediapackagePackagingConfigurationMssPackage
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackage">MediapackagePackagingConfigurationMssPackage</a>

A Microsoft Smooth Streaming (MSS) PackagingConfiguration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#mss_package MediapackagePackagingConfiguration#mss_package}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[MediapackagePackagingConfigurationTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTags">MediapackagePackagingConfigurationTags</a>]

A collection of tags associated with a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#tags MediapackagePackagingConfiguration#tags}

---

### MediapackagePackagingConfigurationDashPackage <a name="MediapackagePackagingConfigurationDashPackage" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackage.Initializer"></a>

```python
from cdktn_provider_awscc import mediapackage_packaging_configuration

mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackage(
  dash_manifests: IResolvable | typing.List[MediapackagePackagingConfigurationDashPackageDashManifests] = None,
  encryption: MediapackagePackagingConfigurationDashPackageEncryption = None,
  include_encoder_configuration_in_segments: bool | IResolvable = None,
  include_iframe_only_stream: bool | IResolvable = None,
  period_triggers: typing.List[str] = None,
  segment_duration_seconds: typing.Union[int, float] = None,
  segment_template_format: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackage.property.dashManifests">dash_manifests</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifests">MediapackagePackagingConfigurationDashPackageDashManifests</a>]</code> | A list of DASH manifest configurations. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackage.property.encryption">encryption</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryption">MediapackagePackagingConfigurationDashPackageEncryption</a></code> | A Dynamic Adaptive Streaming over HTTP (DASH) encryption configuration. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackage.property.includeEncoderConfigurationInSegments">include_encoder_configuration_in_segments</a></code> | <code>bool \| cdktn.IResolvable</code> | When includeEncoderConfigurationInSegments is set to true, MediaPackage places your encoder's Sequence Parameter Set (SPS), Picture Parameter Set (PPS), and Video Parameter Set (VPS) metadata in every video segment instead of in the init fragment. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackage.property.includeIframeOnlyStream">include_iframe_only_stream</a></code> | <code>bool \| cdktn.IResolvable</code> | When enabled, an I-Frame only stream will be included in the output. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackage.property.periodTriggers">period_triggers</a></code> | <code>typing.List[str]</code> | A list of triggers that controls when the outgoing Dynamic Adaptive Streaming over HTTP (DASH) Media Presentation Description (MPD) will be partitioned into multiple periods. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackage.property.segmentDurationSeconds">segment_duration_seconds</a></code> | <code>typing.Union[int, float]</code> | Duration (in seconds) of each fragment. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackage.property.segmentTemplateFormat">segment_template_format</a></code> | <code>str</code> | Determines the type of SegmentTemplate included in the Media Presentation Description (MPD). |

---

##### `dash_manifests`<sup>Optional</sup> <a name="dash_manifests" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackage.property.dashManifests"></a>

```python
dash_manifests: IResolvable | typing.List[MediapackagePackagingConfigurationDashPackageDashManifests]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifests">MediapackagePackagingConfigurationDashPackageDashManifests</a>]

A list of DASH manifest configurations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#dash_manifests MediapackagePackagingConfiguration#dash_manifests}

---

##### `encryption`<sup>Optional</sup> <a name="encryption" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackage.property.encryption"></a>

```python
encryption: MediapackagePackagingConfigurationDashPackageEncryption
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryption">MediapackagePackagingConfigurationDashPackageEncryption</a>

A Dynamic Adaptive Streaming over HTTP (DASH) encryption configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#encryption MediapackagePackagingConfiguration#encryption}

---

##### `include_encoder_configuration_in_segments`<sup>Optional</sup> <a name="include_encoder_configuration_in_segments" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackage.property.includeEncoderConfigurationInSegments"></a>

```python
include_encoder_configuration_in_segments: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

When includeEncoderConfigurationInSegments is set to true, MediaPackage places your encoder's Sequence Parameter Set (SPS), Picture Parameter Set (PPS), and Video Parameter Set (VPS) metadata in every video segment instead of in the init fragment.

This lets you use different SPS/PPS/VPS settings for your assets during content playback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#include_encoder_configuration_in_segments MediapackagePackagingConfiguration#include_encoder_configuration_in_segments}

---

##### `include_iframe_only_stream`<sup>Optional</sup> <a name="include_iframe_only_stream" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackage.property.includeIframeOnlyStream"></a>

```python
include_iframe_only_stream: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

When enabled, an I-Frame only stream will be included in the output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#include_iframe_only_stream MediapackagePackagingConfiguration#include_iframe_only_stream}

---

##### `period_triggers`<sup>Optional</sup> <a name="period_triggers" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackage.property.periodTriggers"></a>

```python
period_triggers: typing.List[str]
```

- *Type:* typing.List[str]

A list of triggers that controls when the outgoing Dynamic Adaptive Streaming over HTTP (DASH) Media Presentation Description (MPD) will be partitioned into multiple periods.

If empty, the content will not be partitioned into more than one period. If the list contains "ADS", new periods will be created where the Asset contains SCTE-35 ad markers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#period_triggers MediapackagePackagingConfiguration#period_triggers}

---

##### `segment_duration_seconds`<sup>Optional</sup> <a name="segment_duration_seconds" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackage.property.segmentDurationSeconds"></a>

```python
segment_duration_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Duration (in seconds) of each fragment.

Actual fragments will be rounded to the nearest multiple of the source fragment duration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#segment_duration_seconds MediapackagePackagingConfiguration#segment_duration_seconds}

---

##### `segment_template_format`<sup>Optional</sup> <a name="segment_template_format" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackage.property.segmentTemplateFormat"></a>

```python
segment_template_format: str
```

- *Type:* str

Determines the type of SegmentTemplate included in the Media Presentation Description (MPD).

When set to NUMBER_WITH_TIMELINE, a full timeline is presented in each SegmentTemplate, with $Number$ media URLs. When set to TIME_WITH_TIMELINE, a full timeline is presented in each SegmentTemplate, with $Time$ media URLs. When set to NUMBER_WITH_DURATION, only a duration is included in each SegmentTemplate, with $Number$ media URLs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#segment_template_format MediapackagePackagingConfiguration#segment_template_format}

---

### MediapackagePackagingConfigurationDashPackageDashManifests <a name="MediapackagePackagingConfigurationDashPackageDashManifests" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifests"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifests.Initializer"></a>

```python
from cdktn_provider_awscc import mediapackage_packaging_configuration

mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifests(
  manifest_layout: str = None,
  manifest_name: str = None,
  min_buffer_time_seconds: typing.Union[int, float] = None,
  profile: str = None,
  scte_markers_source: str = None,
  stream_selection: MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelection = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifests.property.manifestLayout">manifest_layout</a></code> | <code>str</code> | Determines the position of some tags in the Media Presentation Description (MPD). |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifests.property.manifestName">manifest_name</a></code> | <code>str</code> | An optional string to include in the name of the manifest. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifests.property.minBufferTimeSeconds">min_buffer_time_seconds</a></code> | <code>typing.Union[int, float]</code> | Minimum duration (in seconds) that a player will buffer media before starting the presentation. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifests.property.profile">profile</a></code> | <code>str</code> | The Dynamic Adaptive Streaming over HTTP (DASH) profile type. When set to "HBBTV_1_5", HbbTV 1.5 compliant output is enabled. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifests.property.scteMarkersSource">scte_markers_source</a></code> | <code>str</code> | The source of scte markers used. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifests.property.streamSelection">stream_selection</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelection">MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelection</a></code> | A StreamSelection configuration. |

---

##### `manifest_layout`<sup>Optional</sup> <a name="manifest_layout" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifests.property.manifestLayout"></a>

```python
manifest_layout: str
```

- *Type:* str

Determines the position of some tags in the Media Presentation Description (MPD).

When set to FULL, elements like SegmentTemplate and ContentProtection are included in each Representation. When set to COMPACT, duplicate elements are combined and presented at the AdaptationSet level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#manifest_layout MediapackagePackagingConfiguration#manifest_layout}

---

##### `manifest_name`<sup>Optional</sup> <a name="manifest_name" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifests.property.manifestName"></a>

```python
manifest_name: str
```

- *Type:* str

An optional string to include in the name of the manifest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#manifest_name MediapackagePackagingConfiguration#manifest_name}

---

##### `min_buffer_time_seconds`<sup>Optional</sup> <a name="min_buffer_time_seconds" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifests.property.minBufferTimeSeconds"></a>

```python
min_buffer_time_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Minimum duration (in seconds) that a player will buffer media before starting the presentation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#min_buffer_time_seconds MediapackagePackagingConfiguration#min_buffer_time_seconds}

---

##### `profile`<sup>Optional</sup> <a name="profile" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifests.property.profile"></a>

```python
profile: str
```

- *Type:* str

The Dynamic Adaptive Streaming over HTTP (DASH) profile type. When set to "HBBTV_1_5", HbbTV 1.5 compliant output is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#profile MediapackagePackagingConfiguration#profile}

---

##### `scte_markers_source`<sup>Optional</sup> <a name="scte_markers_source" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifests.property.scteMarkersSource"></a>

```python
scte_markers_source: str
```

- *Type:* str

The source of scte markers used.

When set to SEGMENTS, the scte markers are sourced from the segments of the ingested content. When set to MANIFEST, the scte markers are sourced from the manifest of the ingested content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#scte_markers_source MediapackagePackagingConfiguration#scte_markers_source}

---

##### `stream_selection`<sup>Optional</sup> <a name="stream_selection" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifests.property.streamSelection"></a>

```python
stream_selection: MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelection
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelection">MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelection</a>

A StreamSelection configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#stream_selection MediapackagePackagingConfiguration#stream_selection}

---

### MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelection <a name="MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelection" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelection.Initializer"></a>

```python
from cdktn_provider_awscc import mediapackage_packaging_configuration

mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelection(
  max_video_bits_per_second: typing.Union[int, float] = None,
  min_video_bits_per_second: typing.Union[int, float] = None,
  stream_order: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelection.property.maxVideoBitsPerSecond">max_video_bits_per_second</a></code> | <code>typing.Union[int, float]</code> | The maximum video bitrate (bps) to include in output. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelection.property.minVideoBitsPerSecond">min_video_bits_per_second</a></code> | <code>typing.Union[int, float]</code> | The minimum video bitrate (bps) to include in output. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelection.property.streamOrder">stream_order</a></code> | <code>str</code> | A directive that determines the order of streams in the output. |

---

##### `max_video_bits_per_second`<sup>Optional</sup> <a name="max_video_bits_per_second" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelection.property.maxVideoBitsPerSecond"></a>

```python
max_video_bits_per_second: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum video bitrate (bps) to include in output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#max_video_bits_per_second MediapackagePackagingConfiguration#max_video_bits_per_second}

---

##### `min_video_bits_per_second`<sup>Optional</sup> <a name="min_video_bits_per_second" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelection.property.minVideoBitsPerSecond"></a>

```python
min_video_bits_per_second: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The minimum video bitrate (bps) to include in output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#min_video_bits_per_second MediapackagePackagingConfiguration#min_video_bits_per_second}

---

##### `stream_order`<sup>Optional</sup> <a name="stream_order" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelection.property.streamOrder"></a>

```python
stream_order: str
```

- *Type:* str

A directive that determines the order of streams in the output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#stream_order MediapackagePackagingConfiguration#stream_order}

---

### MediapackagePackagingConfigurationDashPackageEncryption <a name="MediapackagePackagingConfigurationDashPackageEncryption" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryption.Initializer"></a>

```python
from cdktn_provider_awscc import mediapackage_packaging_configuration

mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryption(
  speke_key_provider: MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProvider = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryption.property.spekeKeyProvider">speke_key_provider</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProvider">MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProvider</a></code> | A configuration for accessing an external Secure Packager and Encoder Key Exchange (SPEKE) service that will provide encryption keys. |

---

##### `speke_key_provider`<sup>Optional</sup> <a name="speke_key_provider" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryption.property.spekeKeyProvider"></a>

```python
speke_key_provider: MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProvider
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProvider">MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProvider</a>

A configuration for accessing an external Secure Packager and Encoder Key Exchange (SPEKE) service that will provide encryption keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#speke_key_provider MediapackagePackagingConfiguration#speke_key_provider}

---

### MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProvider <a name="MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProvider" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProvider"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProvider.Initializer"></a>

```python
from cdktn_provider_awscc import mediapackage_packaging_configuration

mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProvider(
  encryption_contract_configuration: MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration = None,
  role_arn: str = None,
  system_ids: typing.List[str] = None,
  url: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProvider.property.encryptionContractConfiguration">encryption_contract_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration">MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration</a></code> | The configuration to use for encrypting one or more content tracks separately for endpoints that use SPEKE 2.0. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProvider.property.roleArn">role_arn</a></code> | <code>str</code> | An Amazon Resource Name (ARN) of an IAM role that AWS Elemental MediaPackage will assume when accessing the key provider service. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProvider.property.systemIds">system_ids</a></code> | <code>typing.List[str]</code> | The system IDs to include in key requests. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProvider.property.url">url</a></code> | <code>str</code> | The URL of the external key provider service. |

---

##### `encryption_contract_configuration`<sup>Optional</sup> <a name="encryption_contract_configuration" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProvider.property.encryptionContractConfiguration"></a>

```python
encryption_contract_configuration: MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration">MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration</a>

The configuration to use for encrypting one or more content tracks separately for endpoints that use SPEKE 2.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#encryption_contract_configuration MediapackagePackagingConfiguration#encryption_contract_configuration}

---

##### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProvider.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

An Amazon Resource Name (ARN) of an IAM role that AWS Elemental MediaPackage will assume when accessing the key provider service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#role_arn MediapackagePackagingConfiguration#role_arn}

---

##### `system_ids`<sup>Optional</sup> <a name="system_ids" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProvider.property.systemIds"></a>

```python
system_ids: typing.List[str]
```

- *Type:* typing.List[str]

The system IDs to include in key requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#system_ids MediapackagePackagingConfiguration#system_ids}

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProvider.property.url"></a>

```python
url: str
```

- *Type:* str

The URL of the external key provider service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#url MediapackagePackagingConfiguration#url}

---

### MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration <a name="MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import mediapackage_packaging_configuration

mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration(
  preset_speke20_audio: str = None,
  preset_speke20_video: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration.property.presetSpeke20Audio">preset_speke20_audio</a></code> | <code>str</code> | A collection of audio encryption presets. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration.property.presetSpeke20Video">preset_speke20_video</a></code> | <code>str</code> | A collection of video encryption presets. |

---

##### `preset_speke20_audio`<sup>Optional</sup> <a name="preset_speke20_audio" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration.property.presetSpeke20Audio"></a>

```python
preset_speke20_audio: str
```

- *Type:* str

A collection of audio encryption presets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#preset_speke_20_audio MediapackagePackagingConfiguration#preset_speke_20_audio}

---

##### `preset_speke20_video`<sup>Optional</sup> <a name="preset_speke20_video" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration.property.presetSpeke20Video"></a>

```python
preset_speke20_video: str
```

- *Type:* str

A collection of video encryption presets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#preset_speke_20_video MediapackagePackagingConfiguration#preset_speke_20_video}

---

### MediapackagePackagingConfigurationHlsPackage <a name="MediapackagePackagingConfigurationHlsPackage" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackage.Initializer"></a>

```python
from cdktn_provider_awscc import mediapackage_packaging_configuration

mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackage(
  encryption: MediapackagePackagingConfigurationHlsPackageEncryption = None,
  hls_manifests: IResolvable | typing.List[MediapackagePackagingConfigurationHlsPackageHlsManifests] = None,
  include_dvb_subtitles: bool | IResolvable = None,
  segment_duration_seconds: typing.Union[int, float] = None,
  use_audio_rendition_group: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackage.property.encryption">encryption</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryption">MediapackagePackagingConfigurationHlsPackageEncryption</a></code> | An HTTP Live Streaming (HLS) encryption configuration. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackage.property.hlsManifests">hls_manifests</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifests">MediapackagePackagingConfigurationHlsPackageHlsManifests</a>]</code> | A list of HLS manifest configurations. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackage.property.includeDvbSubtitles">include_dvb_subtitles</a></code> | <code>bool \| cdktn.IResolvable</code> | When enabled, MediaPackage passes through digital video broadcasting (DVB) subtitles into the output. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackage.property.segmentDurationSeconds">segment_duration_seconds</a></code> | <code>typing.Union[int, float]</code> | Duration (in seconds) of each fragment. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackage.property.useAudioRenditionGroup">use_audio_rendition_group</a></code> | <code>bool \| cdktn.IResolvable</code> | When enabled, audio streams will be placed in rendition groups in the output. |

---

##### `encryption`<sup>Optional</sup> <a name="encryption" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackage.property.encryption"></a>

```python
encryption: MediapackagePackagingConfigurationHlsPackageEncryption
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryption">MediapackagePackagingConfigurationHlsPackageEncryption</a>

An HTTP Live Streaming (HLS) encryption configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#encryption MediapackagePackagingConfiguration#encryption}

---

##### `hls_manifests`<sup>Optional</sup> <a name="hls_manifests" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackage.property.hlsManifests"></a>

```python
hls_manifests: IResolvable | typing.List[MediapackagePackagingConfigurationHlsPackageHlsManifests]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifests">MediapackagePackagingConfigurationHlsPackageHlsManifests</a>]

A list of HLS manifest configurations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#hls_manifests MediapackagePackagingConfiguration#hls_manifests}

---

##### `include_dvb_subtitles`<sup>Optional</sup> <a name="include_dvb_subtitles" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackage.property.includeDvbSubtitles"></a>

```python
include_dvb_subtitles: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

When enabled, MediaPackage passes through digital video broadcasting (DVB) subtitles into the output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#include_dvb_subtitles MediapackagePackagingConfiguration#include_dvb_subtitles}

---

##### `segment_duration_seconds`<sup>Optional</sup> <a name="segment_duration_seconds" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackage.property.segmentDurationSeconds"></a>

```python
segment_duration_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Duration (in seconds) of each fragment.

Actual fragments will be rounded to the nearest multiple of the source fragment duration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#segment_duration_seconds MediapackagePackagingConfiguration#segment_duration_seconds}

---

##### `use_audio_rendition_group`<sup>Optional</sup> <a name="use_audio_rendition_group" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackage.property.useAudioRenditionGroup"></a>

```python
use_audio_rendition_group: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

When enabled, audio streams will be placed in rendition groups in the output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#use_audio_rendition_group MediapackagePackagingConfiguration#use_audio_rendition_group}

---

### MediapackagePackagingConfigurationHlsPackageEncryption <a name="MediapackagePackagingConfigurationHlsPackageEncryption" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryption.Initializer"></a>

```python
from cdktn_provider_awscc import mediapackage_packaging_configuration

mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryption(
  constant_initialization_vector: str = None,
  encryption_method: str = None,
  speke_key_provider: MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryption.property.constantInitializationVector">constant_initialization_vector</a></code> | <code>str</code> | An HTTP Live Streaming (HLS) encryption configuration. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryption.property.encryptionMethod">encryption_method</a></code> | <code>str</code> | The encryption method to use. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryption.property.spekeKeyProvider">speke_key_provider</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider">MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider</a></code> | A configuration for accessing an external Secure Packager and Encoder Key Exchange (SPEKE) service that will provide encryption keys. |

---

##### `constant_initialization_vector`<sup>Optional</sup> <a name="constant_initialization_vector" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryption.property.constantInitializationVector"></a>

```python
constant_initialization_vector: str
```

- *Type:* str

An HTTP Live Streaming (HLS) encryption configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#constant_initialization_vector MediapackagePackagingConfiguration#constant_initialization_vector}

---

##### `encryption_method`<sup>Optional</sup> <a name="encryption_method" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryption.property.encryptionMethod"></a>

```python
encryption_method: str
```

- *Type:* str

The encryption method to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#encryption_method MediapackagePackagingConfiguration#encryption_method}

---

##### `speke_key_provider`<sup>Optional</sup> <a name="speke_key_provider" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryption.property.spekeKeyProvider"></a>

```python
speke_key_provider: MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider">MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider</a>

A configuration for accessing an external Secure Packager and Encoder Key Exchange (SPEKE) service that will provide encryption keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#speke_key_provider MediapackagePackagingConfiguration#speke_key_provider}

---

### MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider <a name="MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider.Initializer"></a>

```python
from cdktn_provider_awscc import mediapackage_packaging_configuration

mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider(
  encryption_contract_configuration: MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration = None,
  role_arn: str = None,
  system_ids: typing.List[str] = None,
  url: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider.property.encryptionContractConfiguration">encryption_contract_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration">MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration</a></code> | The configuration to use for encrypting one or more content tracks separately for endpoints that use SPEKE 2.0. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider.property.roleArn">role_arn</a></code> | <code>str</code> | An Amazon Resource Name (ARN) of an IAM role that AWS Elemental MediaPackage will assume when accessing the key provider service. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider.property.systemIds">system_ids</a></code> | <code>typing.List[str]</code> | The system IDs to include in key requests. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider.property.url">url</a></code> | <code>str</code> | The URL of the external key provider service. |

---

##### `encryption_contract_configuration`<sup>Optional</sup> <a name="encryption_contract_configuration" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider.property.encryptionContractConfiguration"></a>

```python
encryption_contract_configuration: MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration">MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration</a>

The configuration to use for encrypting one or more content tracks separately for endpoints that use SPEKE 2.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#encryption_contract_configuration MediapackagePackagingConfiguration#encryption_contract_configuration}

---

##### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

An Amazon Resource Name (ARN) of an IAM role that AWS Elemental MediaPackage will assume when accessing the key provider service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#role_arn MediapackagePackagingConfiguration#role_arn}

---

##### `system_ids`<sup>Optional</sup> <a name="system_ids" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider.property.systemIds"></a>

```python
system_ids: typing.List[str]
```

- *Type:* typing.List[str]

The system IDs to include in key requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#system_ids MediapackagePackagingConfiguration#system_ids}

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider.property.url"></a>

```python
url: str
```

- *Type:* str

The URL of the external key provider service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#url MediapackagePackagingConfiguration#url}

---

### MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration <a name="MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import mediapackage_packaging_configuration

mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration(
  preset_speke20_audio: str = None,
  preset_speke20_video: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration.property.presetSpeke20Audio">preset_speke20_audio</a></code> | <code>str</code> | A collection of audio encryption presets. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration.property.presetSpeke20Video">preset_speke20_video</a></code> | <code>str</code> | A collection of video encryption presets. |

---

##### `preset_speke20_audio`<sup>Optional</sup> <a name="preset_speke20_audio" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration.property.presetSpeke20Audio"></a>

```python
preset_speke20_audio: str
```

- *Type:* str

A collection of audio encryption presets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#preset_speke_20_audio MediapackagePackagingConfiguration#preset_speke_20_audio}

---

##### `preset_speke20_video`<sup>Optional</sup> <a name="preset_speke20_video" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration.property.presetSpeke20Video"></a>

```python
preset_speke20_video: str
```

- *Type:* str

A collection of video encryption presets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#preset_speke_20_video MediapackagePackagingConfiguration#preset_speke_20_video}

---

### MediapackagePackagingConfigurationHlsPackageHlsManifests <a name="MediapackagePackagingConfigurationHlsPackageHlsManifests" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifests"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifests.Initializer"></a>

```python
from cdktn_provider_awscc import mediapackage_packaging_configuration

mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifests(
  ad_markers: str = None,
  include_iframe_only_stream: bool | IResolvable = None,
  manifest_name: str = None,
  program_date_time_interval_seconds: typing.Union[int, float] = None,
  repeat_ext_x_key: bool | IResolvable = None,
  stream_selection: MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelection = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifests.property.adMarkers">ad_markers</a></code> | <code>str</code> | This setting controls how ad markers are included in the packaged OriginEndpoint. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifests.property.includeIframeOnlyStream">include_iframe_only_stream</a></code> | <code>bool \| cdktn.IResolvable</code> | When enabled, an I-Frame only stream will be included in the output. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifests.property.manifestName">manifest_name</a></code> | <code>str</code> | An optional string to include in the name of the manifest. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifests.property.programDateTimeIntervalSeconds">program_date_time_interval_seconds</a></code> | <code>typing.Union[int, float]</code> | The interval (in seconds) between each EXT-X-PROGRAM-DATE-TIME tag inserted into manifests. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifests.property.repeatExtXKey">repeat_ext_x_key</a></code> | <code>bool \| cdktn.IResolvable</code> | When enabled, the EXT-X-KEY tag will be repeated in output manifests. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifests.property.streamSelection">stream_selection</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelection">MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelection</a></code> | A StreamSelection configuration. |

---

##### `ad_markers`<sup>Optional</sup> <a name="ad_markers" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifests.property.adMarkers"></a>

```python
ad_markers: str
```

- *Type:* str

This setting controls how ad markers are included in the packaged OriginEndpoint.

"NONE" will omit all SCTE-35 ad markers from the output. "PASSTHROUGH" causes the manifest to contain a copy of the SCTE-35 ad markers (comments) taken directly from the input HTTP Live Streaming (HLS) manifest. "SCTE35_ENHANCED" generates ad markers and blackout tags based on SCTE-35 messages in the input source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#ad_markers MediapackagePackagingConfiguration#ad_markers}

---

##### `include_iframe_only_stream`<sup>Optional</sup> <a name="include_iframe_only_stream" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifests.property.includeIframeOnlyStream"></a>

```python
include_iframe_only_stream: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

When enabled, an I-Frame only stream will be included in the output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#include_iframe_only_stream MediapackagePackagingConfiguration#include_iframe_only_stream}

---

##### `manifest_name`<sup>Optional</sup> <a name="manifest_name" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifests.property.manifestName"></a>

```python
manifest_name: str
```

- *Type:* str

An optional string to include in the name of the manifest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#manifest_name MediapackagePackagingConfiguration#manifest_name}

---

##### `program_date_time_interval_seconds`<sup>Optional</sup> <a name="program_date_time_interval_seconds" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifests.property.programDateTimeIntervalSeconds"></a>

```python
program_date_time_interval_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The interval (in seconds) between each EXT-X-PROGRAM-DATE-TIME tag inserted into manifests.

Additionally, when an interval is specified ID3Timed Metadata messages will be generated every 5 seconds using the ingest time of the content. If the interval is not specified, or set to 0, then no EXT-X-PROGRAM-DATE-TIME tags will be inserted into manifests and no ID3Timed Metadata messages will be generated. Note that irrespective of this parameter, if any ID3 Timed Metadata is found in HTTP Live Streaming (HLS) input, it will be passed through to HLS output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#program_date_time_interval_seconds MediapackagePackagingConfiguration#program_date_time_interval_seconds}

---

##### `repeat_ext_x_key`<sup>Optional</sup> <a name="repeat_ext_x_key" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifests.property.repeatExtXKey"></a>

```python
repeat_ext_x_key: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

When enabled, the EXT-X-KEY tag will be repeated in output manifests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#repeat_ext_x_key MediapackagePackagingConfiguration#repeat_ext_x_key}

---

##### `stream_selection`<sup>Optional</sup> <a name="stream_selection" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifests.property.streamSelection"></a>

```python
stream_selection: MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelection
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelection">MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelection</a>

A StreamSelection configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#stream_selection MediapackagePackagingConfiguration#stream_selection}

---

### MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelection <a name="MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelection" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelection.Initializer"></a>

```python
from cdktn_provider_awscc import mediapackage_packaging_configuration

mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelection(
  max_video_bits_per_second: typing.Union[int, float] = None,
  min_video_bits_per_second: typing.Union[int, float] = None,
  stream_order: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelection.property.maxVideoBitsPerSecond">max_video_bits_per_second</a></code> | <code>typing.Union[int, float]</code> | The maximum video bitrate (bps) to include in output. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelection.property.minVideoBitsPerSecond">min_video_bits_per_second</a></code> | <code>typing.Union[int, float]</code> | The minimum video bitrate (bps) to include in output. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelection.property.streamOrder">stream_order</a></code> | <code>str</code> | A directive that determines the order of streams in the output. |

---

##### `max_video_bits_per_second`<sup>Optional</sup> <a name="max_video_bits_per_second" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelection.property.maxVideoBitsPerSecond"></a>

```python
max_video_bits_per_second: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum video bitrate (bps) to include in output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#max_video_bits_per_second MediapackagePackagingConfiguration#max_video_bits_per_second}

---

##### `min_video_bits_per_second`<sup>Optional</sup> <a name="min_video_bits_per_second" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelection.property.minVideoBitsPerSecond"></a>

```python
min_video_bits_per_second: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The minimum video bitrate (bps) to include in output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#min_video_bits_per_second MediapackagePackagingConfiguration#min_video_bits_per_second}

---

##### `stream_order`<sup>Optional</sup> <a name="stream_order" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelection.property.streamOrder"></a>

```python
stream_order: str
```

- *Type:* str

A directive that determines the order of streams in the output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#stream_order MediapackagePackagingConfiguration#stream_order}

---

### MediapackagePackagingConfigurationMssPackage <a name="MediapackagePackagingConfigurationMssPackage" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackage.Initializer"></a>

```python
from cdktn_provider_awscc import mediapackage_packaging_configuration

mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackage(
  encryption: MediapackagePackagingConfigurationMssPackageEncryption = None,
  mss_manifests: IResolvable | typing.List[MediapackagePackagingConfigurationMssPackageMssManifests] = None,
  segment_duration_seconds: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackage.property.encryption">encryption</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryption">MediapackagePackagingConfigurationMssPackageEncryption</a></code> | A CMAF encryption configuration. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackage.property.mssManifests">mss_manifests</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifests">MediapackagePackagingConfigurationMssPackageMssManifests</a>]</code> | A list of MSS manifest configurations. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackage.property.segmentDurationSeconds">segment_duration_seconds</a></code> | <code>typing.Union[int, float]</code> | Duration (in seconds) of each fragment. |

---

##### `encryption`<sup>Optional</sup> <a name="encryption" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackage.property.encryption"></a>

```python
encryption: MediapackagePackagingConfigurationMssPackageEncryption
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryption">MediapackagePackagingConfigurationMssPackageEncryption</a>

A CMAF encryption configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#encryption MediapackagePackagingConfiguration#encryption}

---

##### `mss_manifests`<sup>Optional</sup> <a name="mss_manifests" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackage.property.mssManifests"></a>

```python
mss_manifests: IResolvable | typing.List[MediapackagePackagingConfigurationMssPackageMssManifests]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifests">MediapackagePackagingConfigurationMssPackageMssManifests</a>]

A list of MSS manifest configurations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#mss_manifests MediapackagePackagingConfiguration#mss_manifests}

---

##### `segment_duration_seconds`<sup>Optional</sup> <a name="segment_duration_seconds" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackage.property.segmentDurationSeconds"></a>

```python
segment_duration_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Duration (in seconds) of each fragment.

Actual fragments will be rounded to the nearest multiple of the source fragment duration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#segment_duration_seconds MediapackagePackagingConfiguration#segment_duration_seconds}

---

### MediapackagePackagingConfigurationMssPackageEncryption <a name="MediapackagePackagingConfigurationMssPackageEncryption" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryption.Initializer"></a>

```python
from cdktn_provider_awscc import mediapackage_packaging_configuration

mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryption(
  speke_key_provider: MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProvider = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryption.property.spekeKeyProvider">speke_key_provider</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProvider">MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProvider</a></code> | A configuration for accessing an external Secure Packager and Encoder Key Exchange (SPEKE) service that will provide encryption keys. |

---

##### `speke_key_provider`<sup>Optional</sup> <a name="speke_key_provider" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryption.property.spekeKeyProvider"></a>

```python
speke_key_provider: MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProvider
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProvider">MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProvider</a>

A configuration for accessing an external Secure Packager and Encoder Key Exchange (SPEKE) service that will provide encryption keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#speke_key_provider MediapackagePackagingConfiguration#speke_key_provider}

---

### MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProvider <a name="MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProvider" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProvider"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProvider.Initializer"></a>

```python
from cdktn_provider_awscc import mediapackage_packaging_configuration

mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProvider(
  encryption_contract_configuration: MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration = None,
  role_arn: str = None,
  system_ids: typing.List[str] = None,
  url: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProvider.property.encryptionContractConfiguration">encryption_contract_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration">MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration</a></code> | The configuration to use for encrypting one or more content tracks separately for endpoints that use SPEKE 2.0. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProvider.property.roleArn">role_arn</a></code> | <code>str</code> | An Amazon Resource Name (ARN) of an IAM role that AWS Elemental MediaPackage will assume when accessing the key provider service. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProvider.property.systemIds">system_ids</a></code> | <code>typing.List[str]</code> | The system IDs to include in key requests. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProvider.property.url">url</a></code> | <code>str</code> | The URL of the external key provider service. |

---

##### `encryption_contract_configuration`<sup>Optional</sup> <a name="encryption_contract_configuration" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProvider.property.encryptionContractConfiguration"></a>

```python
encryption_contract_configuration: MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration">MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration</a>

The configuration to use for encrypting one or more content tracks separately for endpoints that use SPEKE 2.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#encryption_contract_configuration MediapackagePackagingConfiguration#encryption_contract_configuration}

---

##### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProvider.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

An Amazon Resource Name (ARN) of an IAM role that AWS Elemental MediaPackage will assume when accessing the key provider service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#role_arn MediapackagePackagingConfiguration#role_arn}

---

##### `system_ids`<sup>Optional</sup> <a name="system_ids" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProvider.property.systemIds"></a>

```python
system_ids: typing.List[str]
```

- *Type:* typing.List[str]

The system IDs to include in key requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#system_ids MediapackagePackagingConfiguration#system_ids}

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProvider.property.url"></a>

```python
url: str
```

- *Type:* str

The URL of the external key provider service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#url MediapackagePackagingConfiguration#url}

---

### MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration <a name="MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import mediapackage_packaging_configuration

mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration(
  preset_speke20_audio: str = None,
  preset_speke20_video: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration.property.presetSpeke20Audio">preset_speke20_audio</a></code> | <code>str</code> | A collection of audio encryption presets. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration.property.presetSpeke20Video">preset_speke20_video</a></code> | <code>str</code> | A collection of video encryption presets. |

---

##### `preset_speke20_audio`<sup>Optional</sup> <a name="preset_speke20_audio" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration.property.presetSpeke20Audio"></a>

```python
preset_speke20_audio: str
```

- *Type:* str

A collection of audio encryption presets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#preset_speke_20_audio MediapackagePackagingConfiguration#preset_speke_20_audio}

---

##### `preset_speke20_video`<sup>Optional</sup> <a name="preset_speke20_video" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration.property.presetSpeke20Video"></a>

```python
preset_speke20_video: str
```

- *Type:* str

A collection of video encryption presets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#preset_speke_20_video MediapackagePackagingConfiguration#preset_speke_20_video}

---

### MediapackagePackagingConfigurationMssPackageMssManifests <a name="MediapackagePackagingConfigurationMssPackageMssManifests" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifests"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifests.Initializer"></a>

```python
from cdktn_provider_awscc import mediapackage_packaging_configuration

mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifests(
  manifest_name: str = None,
  stream_selection: MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelection = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifests.property.manifestName">manifest_name</a></code> | <code>str</code> | An optional string to include in the name of the manifest. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifests.property.streamSelection">stream_selection</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelection">MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelection</a></code> | A StreamSelection configuration. |

---

##### `manifest_name`<sup>Optional</sup> <a name="manifest_name" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifests.property.manifestName"></a>

```python
manifest_name: str
```

- *Type:* str

An optional string to include in the name of the manifest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#manifest_name MediapackagePackagingConfiguration#manifest_name}

---

##### `stream_selection`<sup>Optional</sup> <a name="stream_selection" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifests.property.streamSelection"></a>

```python
stream_selection: MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelection
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelection">MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelection</a>

A StreamSelection configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#stream_selection MediapackagePackagingConfiguration#stream_selection}

---

### MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelection <a name="MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelection" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelection.Initializer"></a>

```python
from cdktn_provider_awscc import mediapackage_packaging_configuration

mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelection(
  max_video_bits_per_second: typing.Union[int, float] = None,
  min_video_bits_per_second: typing.Union[int, float] = None,
  stream_order: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelection.property.maxVideoBitsPerSecond">max_video_bits_per_second</a></code> | <code>typing.Union[int, float]</code> | The maximum video bitrate (bps) to include in output. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelection.property.minVideoBitsPerSecond">min_video_bits_per_second</a></code> | <code>typing.Union[int, float]</code> | The minimum video bitrate (bps) to include in output. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelection.property.streamOrder">stream_order</a></code> | <code>str</code> | A directive that determines the order of streams in the output. |

---

##### `max_video_bits_per_second`<sup>Optional</sup> <a name="max_video_bits_per_second" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelection.property.maxVideoBitsPerSecond"></a>

```python
max_video_bits_per_second: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum video bitrate (bps) to include in output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#max_video_bits_per_second MediapackagePackagingConfiguration#max_video_bits_per_second}

---

##### `min_video_bits_per_second`<sup>Optional</sup> <a name="min_video_bits_per_second" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelection.property.minVideoBitsPerSecond"></a>

```python
min_video_bits_per_second: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The minimum video bitrate (bps) to include in output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#min_video_bits_per_second MediapackagePackagingConfiguration#min_video_bits_per_second}

---

##### `stream_order`<sup>Optional</sup> <a name="stream_order" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelection.property.streamOrder"></a>

```python
stream_order: str
```

- *Type:* str

A directive that determines the order of streams in the output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#stream_order MediapackagePackagingConfiguration#stream_order}

---

### MediapackagePackagingConfigurationTags <a name="MediapackagePackagingConfigurationTags" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTags.Initializer"></a>

```python
from cdktn_provider_awscc import mediapackage_packaging_configuration

mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#key MediapackagePackagingConfiguration#key}. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#value MediapackagePackagingConfiguration#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#key MediapackagePackagingConfiguration#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#value MediapackagePackagingConfiguration#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference <a name="MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import mediapackage_packaging_configuration

mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.putSpekeKeyProvider">put_speke_key_provider</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.resetSpekeKeyProvider">reset_speke_key_provider</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_speke_key_provider` <a name="put_speke_key_provider" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.putSpekeKeyProvider"></a>

```python
def put_speke_key_provider(
  encryption_contract_configuration: MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration = None,
  role_arn: str = None,
  system_ids: typing.List[str] = None,
  url: str = None
) -> None
```

###### `encryption_contract_configuration`<sup>Optional</sup> <a name="encryption_contract_configuration" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.putSpekeKeyProvider.parameter.encryptionContractConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration">MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration</a>

The configuration to use for encrypting one or more content tracks separately for endpoints that use SPEKE 2.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#encryption_contract_configuration MediapackagePackagingConfiguration#encryption_contract_configuration}

---

###### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.putSpekeKeyProvider.parameter.roleArn"></a>

- *Type:* str

An Amazon Resource Name (ARN) of an IAM role that AWS Elemental MediaPackage will assume when accessing the key provider service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#role_arn MediapackagePackagingConfiguration#role_arn}

---

###### `system_ids`<sup>Optional</sup> <a name="system_ids" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.putSpekeKeyProvider.parameter.systemIds"></a>

- *Type:* typing.List[str]

The system IDs to include in key requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#system_ids MediapackagePackagingConfiguration#system_ids}

---

###### `url`<sup>Optional</sup> <a name="url" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.putSpekeKeyProvider.parameter.url"></a>

- *Type:* str

The URL of the external key provider service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#url MediapackagePackagingConfiguration#url}

---

##### `reset_speke_key_provider` <a name="reset_speke_key_provider" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.resetSpekeKeyProvider"></a>

```python
def reset_speke_key_provider() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.property.spekeKeyProvider">speke_key_provider</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference">MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.property.spekeKeyProviderInput">speke_key_provider_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider">MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryption">MediapackagePackagingConfigurationCmafPackageEncryption</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `speke_key_provider`<sup>Required</sup> <a name="speke_key_provider" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.property.spekeKeyProvider"></a>

```python
speke_key_provider: MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference">MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference</a>

---

##### `speke_key_provider_input`<sup>Optional</sup> <a name="speke_key_provider_input" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.property.spekeKeyProviderInput"></a>

```python
speke_key_provider_input: IResolvable | MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider">MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MediapackagePackagingConfigurationCmafPackageEncryption
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryption">MediapackagePackagingConfigurationCmafPackageEncryption</a>

---


### MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference <a name="MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import mediapackage_packaging_configuration

mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.resetPresetSpeke20Audio">reset_preset_speke20_audio</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.resetPresetSpeke20Video">reset_preset_speke20_video</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_preset_speke20_audio` <a name="reset_preset_speke20_audio" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.resetPresetSpeke20Audio"></a>

```python
def reset_preset_speke20_audio() -> None
```

##### `reset_preset_speke20_video` <a name="reset_preset_speke20_video" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.resetPresetSpeke20Video"></a>

```python
def reset_preset_speke20_video() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20AudioInput">preset_speke20_audio_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20VideoInput">preset_speke20_video_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20Audio">preset_speke20_audio</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20Video">preset_speke20_video</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration">MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `preset_speke20_audio_input`<sup>Optional</sup> <a name="preset_speke20_audio_input" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20AudioInput"></a>

```python
preset_speke20_audio_input: str
```

- *Type:* str

---

##### `preset_speke20_video_input`<sup>Optional</sup> <a name="preset_speke20_video_input" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20VideoInput"></a>

```python
preset_speke20_video_input: str
```

- *Type:* str

---

##### `preset_speke20_audio`<sup>Required</sup> <a name="preset_speke20_audio" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20Audio"></a>

```python
preset_speke20_audio: str
```

- *Type:* str

---

##### `preset_speke20_video`<sup>Required</sup> <a name="preset_speke20_video" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20Video"></a>

```python
preset_speke20_video: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration">MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration</a>

---


### MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference <a name="MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import mediapackage_packaging_configuration

mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.putEncryptionContractConfiguration">put_encryption_contract_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.resetEncryptionContractConfiguration">reset_encryption_contract_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.resetRoleArn">reset_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.resetSystemIds">reset_system_ids</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.resetUrl">reset_url</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_encryption_contract_configuration` <a name="put_encryption_contract_configuration" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.putEncryptionContractConfiguration"></a>

```python
def put_encryption_contract_configuration(
  preset_speke20_audio: str = None,
  preset_speke20_video: str = None
) -> None
```

###### `preset_speke20_audio`<sup>Optional</sup> <a name="preset_speke20_audio" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.putEncryptionContractConfiguration.parameter.presetSpeke20Audio"></a>

- *Type:* str

A collection of audio encryption presets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#preset_speke_20_audio MediapackagePackagingConfiguration#preset_speke_20_audio}

---

###### `preset_speke20_video`<sup>Optional</sup> <a name="preset_speke20_video" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.putEncryptionContractConfiguration.parameter.presetSpeke20Video"></a>

- *Type:* str

A collection of video encryption presets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#preset_speke_20_video MediapackagePackagingConfiguration#preset_speke_20_video}

---

##### `reset_encryption_contract_configuration` <a name="reset_encryption_contract_configuration" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.resetEncryptionContractConfiguration"></a>

```python
def reset_encryption_contract_configuration() -> None
```

##### `reset_role_arn` <a name="reset_role_arn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.resetRoleArn"></a>

```python
def reset_role_arn() -> None
```

##### `reset_system_ids` <a name="reset_system_ids" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.resetSystemIds"></a>

```python
def reset_system_ids() -> None
```

##### `reset_url` <a name="reset_url" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.resetUrl"></a>

```python
def reset_url() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.property.encryptionContractConfiguration">encryption_contract_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference">MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.property.encryptionContractConfigurationInput">encryption_contract_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration">MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.property.systemIdsInput">system_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.property.urlInput">url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.property.systemIds">system_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider">MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `encryption_contract_configuration`<sup>Required</sup> <a name="encryption_contract_configuration" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.property.encryptionContractConfiguration"></a>

```python
encryption_contract_configuration: MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference">MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference</a>

---

##### `encryption_contract_configuration_input`<sup>Optional</sup> <a name="encryption_contract_configuration_input" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.property.encryptionContractConfigurationInput"></a>

```python
encryption_contract_configuration_input: IResolvable | MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration">MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration</a>

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `system_ids_input`<sup>Optional</sup> <a name="system_ids_input" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.property.systemIdsInput"></a>

```python
system_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `url_input`<sup>Optional</sup> <a name="url_input" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.property.urlInput"></a>

```python
url_input: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `system_ids`<sup>Required</sup> <a name="system_ids" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.property.systemIds"></a>

```python
system_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider">MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider</a>

---


### MediapackagePackagingConfigurationCmafPackageHlsManifestsList <a name="MediapackagePackagingConfigurationCmafPackageHlsManifestsList" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsList.Initializer"></a>

```python
from cdktn_provider_awscc import mediapackage_packaging_configuration

mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifests">MediapackagePackagingConfigurationCmafPackageHlsManifests</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[MediapackagePackagingConfigurationCmafPackageHlsManifests]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifests">MediapackagePackagingConfigurationCmafPackageHlsManifests</a>]

---


### MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference <a name="MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import mediapackage_packaging_configuration

mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.putStreamSelection">put_stream_selection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.resetAdMarkers">reset_ad_markers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.resetIncludeIframeOnlyStream">reset_include_iframe_only_stream</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.resetManifestName">reset_manifest_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.resetProgramDateTimeIntervalSeconds">reset_program_date_time_interval_seconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.resetRepeatExtXKey">reset_repeat_ext_x_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.resetStreamSelection">reset_stream_selection</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_stream_selection` <a name="put_stream_selection" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.putStreamSelection"></a>

```python
def put_stream_selection(
  max_video_bits_per_second: typing.Union[int, float] = None,
  min_video_bits_per_second: typing.Union[int, float] = None,
  stream_order: str = None
) -> None
```

###### `max_video_bits_per_second`<sup>Optional</sup> <a name="max_video_bits_per_second" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.putStreamSelection.parameter.maxVideoBitsPerSecond"></a>

- *Type:* typing.Union[int, float]

The maximum video bitrate (bps) to include in output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#max_video_bits_per_second MediapackagePackagingConfiguration#max_video_bits_per_second}

---

###### `min_video_bits_per_second`<sup>Optional</sup> <a name="min_video_bits_per_second" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.putStreamSelection.parameter.minVideoBitsPerSecond"></a>

- *Type:* typing.Union[int, float]

The minimum video bitrate (bps) to include in output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#min_video_bits_per_second MediapackagePackagingConfiguration#min_video_bits_per_second}

---

###### `stream_order`<sup>Optional</sup> <a name="stream_order" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.putStreamSelection.parameter.streamOrder"></a>

- *Type:* str

A directive that determines the order of streams in the output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#stream_order MediapackagePackagingConfiguration#stream_order}

---

##### `reset_ad_markers` <a name="reset_ad_markers" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.resetAdMarkers"></a>

```python
def reset_ad_markers() -> None
```

##### `reset_include_iframe_only_stream` <a name="reset_include_iframe_only_stream" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.resetIncludeIframeOnlyStream"></a>

```python
def reset_include_iframe_only_stream() -> None
```

##### `reset_manifest_name` <a name="reset_manifest_name" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.resetManifestName"></a>

```python
def reset_manifest_name() -> None
```

##### `reset_program_date_time_interval_seconds` <a name="reset_program_date_time_interval_seconds" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.resetProgramDateTimeIntervalSeconds"></a>

```python
def reset_program_date_time_interval_seconds() -> None
```

##### `reset_repeat_ext_x_key` <a name="reset_repeat_ext_x_key" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.resetRepeatExtXKey"></a>

```python
def reset_repeat_ext_x_key() -> None
```

##### `reset_stream_selection` <a name="reset_stream_selection" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.resetStreamSelection"></a>

```python
def reset_stream_selection() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.property.streamSelection">stream_selection</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference">MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.property.adMarkersInput">ad_markers_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.property.includeIframeOnlyStreamInput">include_iframe_only_stream_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.property.manifestNameInput">manifest_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.property.programDateTimeIntervalSecondsInput">program_date_time_interval_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.property.repeatExtXKeyInput">repeat_ext_x_key_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.property.streamSelectionInput">stream_selection_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelection">MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.property.adMarkers">ad_markers</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.property.includeIframeOnlyStream">include_iframe_only_stream</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.property.manifestName">manifest_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.property.programDateTimeIntervalSeconds">program_date_time_interval_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.property.repeatExtXKey">repeat_ext_x_key</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifests">MediapackagePackagingConfigurationCmafPackageHlsManifests</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `stream_selection`<sup>Required</sup> <a name="stream_selection" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.property.streamSelection"></a>

```python
stream_selection: MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference">MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference</a>

---

##### `ad_markers_input`<sup>Optional</sup> <a name="ad_markers_input" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.property.adMarkersInput"></a>

```python
ad_markers_input: str
```

- *Type:* str

---

##### `include_iframe_only_stream_input`<sup>Optional</sup> <a name="include_iframe_only_stream_input" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.property.includeIframeOnlyStreamInput"></a>

```python
include_iframe_only_stream_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `manifest_name_input`<sup>Optional</sup> <a name="manifest_name_input" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.property.manifestNameInput"></a>

```python
manifest_name_input: str
```

- *Type:* str

---

##### `program_date_time_interval_seconds_input`<sup>Optional</sup> <a name="program_date_time_interval_seconds_input" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.property.programDateTimeIntervalSecondsInput"></a>

```python
program_date_time_interval_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `repeat_ext_x_key_input`<sup>Optional</sup> <a name="repeat_ext_x_key_input" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.property.repeatExtXKeyInput"></a>

```python
repeat_ext_x_key_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `stream_selection_input`<sup>Optional</sup> <a name="stream_selection_input" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.property.streamSelectionInput"></a>

```python
stream_selection_input: IResolvable | MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelection
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelection">MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelection</a>

---

##### `ad_markers`<sup>Required</sup> <a name="ad_markers" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.property.adMarkers"></a>

```python
ad_markers: str
```

- *Type:* str

---

##### `include_iframe_only_stream`<sup>Required</sup> <a name="include_iframe_only_stream" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.property.includeIframeOnlyStream"></a>

```python
include_iframe_only_stream: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `manifest_name`<sup>Required</sup> <a name="manifest_name" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.property.manifestName"></a>

```python
manifest_name: str
```

- *Type:* str

---

##### `program_date_time_interval_seconds`<sup>Required</sup> <a name="program_date_time_interval_seconds" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.property.programDateTimeIntervalSeconds"></a>

```python
program_date_time_interval_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `repeat_ext_x_key`<sup>Required</sup> <a name="repeat_ext_x_key" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.property.repeatExtXKey"></a>

```python
repeat_ext_x_key: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MediapackagePackagingConfigurationCmafPackageHlsManifests
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifests">MediapackagePackagingConfigurationCmafPackageHlsManifests</a>

---


### MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference <a name="MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import mediapackage_packaging_configuration

mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.resetMaxVideoBitsPerSecond">reset_max_video_bits_per_second</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.resetMinVideoBitsPerSecond">reset_min_video_bits_per_second</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.resetStreamOrder">reset_stream_order</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_max_video_bits_per_second` <a name="reset_max_video_bits_per_second" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.resetMaxVideoBitsPerSecond"></a>

```python
def reset_max_video_bits_per_second() -> None
```

##### `reset_min_video_bits_per_second` <a name="reset_min_video_bits_per_second" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.resetMinVideoBitsPerSecond"></a>

```python
def reset_min_video_bits_per_second() -> None
```

##### `reset_stream_order` <a name="reset_stream_order" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.resetStreamOrder"></a>

```python
def reset_stream_order() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.property.maxVideoBitsPerSecondInput">max_video_bits_per_second_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.property.minVideoBitsPerSecondInput">min_video_bits_per_second_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.property.streamOrderInput">stream_order_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.property.maxVideoBitsPerSecond">max_video_bits_per_second</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.property.minVideoBitsPerSecond">min_video_bits_per_second</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.property.streamOrder">stream_order</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelection">MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_video_bits_per_second_input`<sup>Optional</sup> <a name="max_video_bits_per_second_input" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.property.maxVideoBitsPerSecondInput"></a>

```python
max_video_bits_per_second_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_video_bits_per_second_input`<sup>Optional</sup> <a name="min_video_bits_per_second_input" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.property.minVideoBitsPerSecondInput"></a>

```python
min_video_bits_per_second_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `stream_order_input`<sup>Optional</sup> <a name="stream_order_input" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.property.streamOrderInput"></a>

```python
stream_order_input: str
```

- *Type:* str

---

##### `max_video_bits_per_second`<sup>Required</sup> <a name="max_video_bits_per_second" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.property.maxVideoBitsPerSecond"></a>

```python
max_video_bits_per_second: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_video_bits_per_second`<sup>Required</sup> <a name="min_video_bits_per_second" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.property.minVideoBitsPerSecond"></a>

```python
min_video_bits_per_second: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `stream_order`<sup>Required</sup> <a name="stream_order" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.property.streamOrder"></a>

```python
stream_order: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelection
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelection">MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelection</a>

---


### MediapackagePackagingConfigurationCmafPackageOutputReference <a name="MediapackagePackagingConfigurationCmafPackageOutputReference" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import mediapackage_packaging_configuration

mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.putEncryption">put_encryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.putHlsManifests">put_hls_manifests</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.resetEncryption">reset_encryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.resetHlsManifests">reset_hls_manifests</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.resetIncludeEncoderConfigurationInSegments">reset_include_encoder_configuration_in_segments</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.resetSegmentDurationSeconds">reset_segment_duration_seconds</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_encryption` <a name="put_encryption" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.putEncryption"></a>

```python
def put_encryption(
  speke_key_provider: MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider = None
) -> None
```

###### `speke_key_provider`<sup>Optional</sup> <a name="speke_key_provider" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.putEncryption.parameter.spekeKeyProvider"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider">MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider</a>

A configuration for accessing an external Secure Packager and Encoder Key Exchange (SPEKE) service that will provide encryption keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#speke_key_provider MediapackagePackagingConfiguration#speke_key_provider}

---

##### `put_hls_manifests` <a name="put_hls_manifests" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.putHlsManifests"></a>

```python
def put_hls_manifests(
  value: IResolvable | typing.List[MediapackagePackagingConfigurationCmafPackageHlsManifests]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.putHlsManifests.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifests">MediapackagePackagingConfigurationCmafPackageHlsManifests</a>]

---

##### `reset_encryption` <a name="reset_encryption" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.resetEncryption"></a>

```python
def reset_encryption() -> None
```

##### `reset_hls_manifests` <a name="reset_hls_manifests" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.resetHlsManifests"></a>

```python
def reset_hls_manifests() -> None
```

##### `reset_include_encoder_configuration_in_segments` <a name="reset_include_encoder_configuration_in_segments" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.resetIncludeEncoderConfigurationInSegments"></a>

```python
def reset_include_encoder_configuration_in_segments() -> None
```

##### `reset_segment_duration_seconds` <a name="reset_segment_duration_seconds" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.resetSegmentDurationSeconds"></a>

```python
def reset_segment_duration_seconds() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.property.encryption">encryption</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference">MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.property.hlsManifests">hls_manifests</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsList">MediapackagePackagingConfigurationCmafPackageHlsManifestsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.property.encryptionInput">encryption_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryption">MediapackagePackagingConfigurationCmafPackageEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.property.hlsManifestsInput">hls_manifests_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifests">MediapackagePackagingConfigurationCmafPackageHlsManifests</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.property.includeEncoderConfigurationInSegmentsInput">include_encoder_configuration_in_segments_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.property.segmentDurationSecondsInput">segment_duration_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.property.includeEncoderConfigurationInSegments">include_encoder_configuration_in_segments</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.property.segmentDurationSeconds">segment_duration_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackage">MediapackagePackagingConfigurationCmafPackage</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `encryption`<sup>Required</sup> <a name="encryption" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.property.encryption"></a>

```python
encryption: MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference">MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference</a>

---

##### `hls_manifests`<sup>Required</sup> <a name="hls_manifests" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.property.hlsManifests"></a>

```python
hls_manifests: MediapackagePackagingConfigurationCmafPackageHlsManifestsList
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsList">MediapackagePackagingConfigurationCmafPackageHlsManifestsList</a>

---

##### `encryption_input`<sup>Optional</sup> <a name="encryption_input" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.property.encryptionInput"></a>

```python
encryption_input: IResolvable | MediapackagePackagingConfigurationCmafPackageEncryption
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryption">MediapackagePackagingConfigurationCmafPackageEncryption</a>

---

##### `hls_manifests_input`<sup>Optional</sup> <a name="hls_manifests_input" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.property.hlsManifestsInput"></a>

```python
hls_manifests_input: IResolvable | typing.List[MediapackagePackagingConfigurationCmafPackageHlsManifests]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifests">MediapackagePackagingConfigurationCmafPackageHlsManifests</a>]

---

##### `include_encoder_configuration_in_segments_input`<sup>Optional</sup> <a name="include_encoder_configuration_in_segments_input" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.property.includeEncoderConfigurationInSegmentsInput"></a>

```python
include_encoder_configuration_in_segments_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `segment_duration_seconds_input`<sup>Optional</sup> <a name="segment_duration_seconds_input" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.property.segmentDurationSecondsInput"></a>

```python
segment_duration_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `include_encoder_configuration_in_segments`<sup>Required</sup> <a name="include_encoder_configuration_in_segments" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.property.includeEncoderConfigurationInSegments"></a>

```python
include_encoder_configuration_in_segments: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `segment_duration_seconds`<sup>Required</sup> <a name="segment_duration_seconds" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.property.segmentDurationSeconds"></a>

```python
segment_duration_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MediapackagePackagingConfigurationCmafPackage
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackage">MediapackagePackagingConfigurationCmafPackage</a>

---


### MediapackagePackagingConfigurationDashPackageDashManifestsList <a name="MediapackagePackagingConfigurationDashPackageDashManifestsList" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsList.Initializer"></a>

```python
from cdktn_provider_awscc import mediapackage_packaging_configuration

mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifests">MediapackagePackagingConfigurationDashPackageDashManifests</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[MediapackagePackagingConfigurationDashPackageDashManifests]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifests">MediapackagePackagingConfigurationDashPackageDashManifests</a>]

---


### MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference <a name="MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import mediapackage_packaging_configuration

mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.putStreamSelection">put_stream_selection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.resetManifestLayout">reset_manifest_layout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.resetManifestName">reset_manifest_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.resetMinBufferTimeSeconds">reset_min_buffer_time_seconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.resetProfile">reset_profile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.resetScteMarkersSource">reset_scte_markers_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.resetStreamSelection">reset_stream_selection</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_stream_selection` <a name="put_stream_selection" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.putStreamSelection"></a>

```python
def put_stream_selection(
  max_video_bits_per_second: typing.Union[int, float] = None,
  min_video_bits_per_second: typing.Union[int, float] = None,
  stream_order: str = None
) -> None
```

###### `max_video_bits_per_second`<sup>Optional</sup> <a name="max_video_bits_per_second" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.putStreamSelection.parameter.maxVideoBitsPerSecond"></a>

- *Type:* typing.Union[int, float]

The maximum video bitrate (bps) to include in output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#max_video_bits_per_second MediapackagePackagingConfiguration#max_video_bits_per_second}

---

###### `min_video_bits_per_second`<sup>Optional</sup> <a name="min_video_bits_per_second" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.putStreamSelection.parameter.minVideoBitsPerSecond"></a>

- *Type:* typing.Union[int, float]

The minimum video bitrate (bps) to include in output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#min_video_bits_per_second MediapackagePackagingConfiguration#min_video_bits_per_second}

---

###### `stream_order`<sup>Optional</sup> <a name="stream_order" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.putStreamSelection.parameter.streamOrder"></a>

- *Type:* str

A directive that determines the order of streams in the output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#stream_order MediapackagePackagingConfiguration#stream_order}

---

##### `reset_manifest_layout` <a name="reset_manifest_layout" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.resetManifestLayout"></a>

```python
def reset_manifest_layout() -> None
```

##### `reset_manifest_name` <a name="reset_manifest_name" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.resetManifestName"></a>

```python
def reset_manifest_name() -> None
```

##### `reset_min_buffer_time_seconds` <a name="reset_min_buffer_time_seconds" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.resetMinBufferTimeSeconds"></a>

```python
def reset_min_buffer_time_seconds() -> None
```

##### `reset_profile` <a name="reset_profile" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.resetProfile"></a>

```python
def reset_profile() -> None
```

##### `reset_scte_markers_source` <a name="reset_scte_markers_source" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.resetScteMarkersSource"></a>

```python
def reset_scte_markers_source() -> None
```

##### `reset_stream_selection` <a name="reset_stream_selection" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.resetStreamSelection"></a>

```python
def reset_stream_selection() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.property.streamSelection">stream_selection</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference">MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.property.manifestLayoutInput">manifest_layout_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.property.manifestNameInput">manifest_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.property.minBufferTimeSecondsInput">min_buffer_time_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.property.profileInput">profile_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.property.scteMarkersSourceInput">scte_markers_source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.property.streamSelectionInput">stream_selection_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelection">MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.property.manifestLayout">manifest_layout</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.property.manifestName">manifest_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.property.minBufferTimeSeconds">min_buffer_time_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.property.profile">profile</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.property.scteMarkersSource">scte_markers_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifests">MediapackagePackagingConfigurationDashPackageDashManifests</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `stream_selection`<sup>Required</sup> <a name="stream_selection" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.property.streamSelection"></a>

```python
stream_selection: MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference">MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference</a>

---

##### `manifest_layout_input`<sup>Optional</sup> <a name="manifest_layout_input" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.property.manifestLayoutInput"></a>

```python
manifest_layout_input: str
```

- *Type:* str

---

##### `manifest_name_input`<sup>Optional</sup> <a name="manifest_name_input" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.property.manifestNameInput"></a>

```python
manifest_name_input: str
```

- *Type:* str

---

##### `min_buffer_time_seconds_input`<sup>Optional</sup> <a name="min_buffer_time_seconds_input" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.property.minBufferTimeSecondsInput"></a>

```python
min_buffer_time_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `profile_input`<sup>Optional</sup> <a name="profile_input" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.property.profileInput"></a>

```python
profile_input: str
```

- *Type:* str

---

##### `scte_markers_source_input`<sup>Optional</sup> <a name="scte_markers_source_input" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.property.scteMarkersSourceInput"></a>

```python
scte_markers_source_input: str
```

- *Type:* str

---

##### `stream_selection_input`<sup>Optional</sup> <a name="stream_selection_input" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.property.streamSelectionInput"></a>

```python
stream_selection_input: IResolvable | MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelection
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelection">MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelection</a>

---

##### `manifest_layout`<sup>Required</sup> <a name="manifest_layout" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.property.manifestLayout"></a>

```python
manifest_layout: str
```

- *Type:* str

---

##### `manifest_name`<sup>Required</sup> <a name="manifest_name" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.property.manifestName"></a>

```python
manifest_name: str
```

- *Type:* str

---

##### `min_buffer_time_seconds`<sup>Required</sup> <a name="min_buffer_time_seconds" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.property.minBufferTimeSeconds"></a>

```python
min_buffer_time_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `profile`<sup>Required</sup> <a name="profile" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.property.profile"></a>

```python
profile: str
```

- *Type:* str

---

##### `scte_markers_source`<sup>Required</sup> <a name="scte_markers_source" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.property.scteMarkersSource"></a>

```python
scte_markers_source: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MediapackagePackagingConfigurationDashPackageDashManifests
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifests">MediapackagePackagingConfigurationDashPackageDashManifests</a>

---


### MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference <a name="MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import mediapackage_packaging_configuration

mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.resetMaxVideoBitsPerSecond">reset_max_video_bits_per_second</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.resetMinVideoBitsPerSecond">reset_min_video_bits_per_second</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.resetStreamOrder">reset_stream_order</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_max_video_bits_per_second` <a name="reset_max_video_bits_per_second" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.resetMaxVideoBitsPerSecond"></a>

```python
def reset_max_video_bits_per_second() -> None
```

##### `reset_min_video_bits_per_second` <a name="reset_min_video_bits_per_second" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.resetMinVideoBitsPerSecond"></a>

```python
def reset_min_video_bits_per_second() -> None
```

##### `reset_stream_order` <a name="reset_stream_order" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.resetStreamOrder"></a>

```python
def reset_stream_order() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.property.maxVideoBitsPerSecondInput">max_video_bits_per_second_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.property.minVideoBitsPerSecondInput">min_video_bits_per_second_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.property.streamOrderInput">stream_order_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.property.maxVideoBitsPerSecond">max_video_bits_per_second</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.property.minVideoBitsPerSecond">min_video_bits_per_second</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.property.streamOrder">stream_order</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelection">MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_video_bits_per_second_input`<sup>Optional</sup> <a name="max_video_bits_per_second_input" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.property.maxVideoBitsPerSecondInput"></a>

```python
max_video_bits_per_second_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_video_bits_per_second_input`<sup>Optional</sup> <a name="min_video_bits_per_second_input" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.property.minVideoBitsPerSecondInput"></a>

```python
min_video_bits_per_second_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `stream_order_input`<sup>Optional</sup> <a name="stream_order_input" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.property.streamOrderInput"></a>

```python
stream_order_input: str
```

- *Type:* str

---

##### `max_video_bits_per_second`<sup>Required</sup> <a name="max_video_bits_per_second" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.property.maxVideoBitsPerSecond"></a>

```python
max_video_bits_per_second: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_video_bits_per_second`<sup>Required</sup> <a name="min_video_bits_per_second" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.property.minVideoBitsPerSecond"></a>

```python
min_video_bits_per_second: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `stream_order`<sup>Required</sup> <a name="stream_order" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.property.streamOrder"></a>

```python
stream_order: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelection
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelection">MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelection</a>

---


### MediapackagePackagingConfigurationDashPackageEncryptionOutputReference <a name="MediapackagePackagingConfigurationDashPackageEncryptionOutputReference" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import mediapackage_packaging_configuration

mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.putSpekeKeyProvider">put_speke_key_provider</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.resetSpekeKeyProvider">reset_speke_key_provider</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_speke_key_provider` <a name="put_speke_key_provider" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.putSpekeKeyProvider"></a>

```python
def put_speke_key_provider(
  encryption_contract_configuration: MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration = None,
  role_arn: str = None,
  system_ids: typing.List[str] = None,
  url: str = None
) -> None
```

###### `encryption_contract_configuration`<sup>Optional</sup> <a name="encryption_contract_configuration" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.putSpekeKeyProvider.parameter.encryptionContractConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration">MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration</a>

The configuration to use for encrypting one or more content tracks separately for endpoints that use SPEKE 2.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#encryption_contract_configuration MediapackagePackagingConfiguration#encryption_contract_configuration}

---

###### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.putSpekeKeyProvider.parameter.roleArn"></a>

- *Type:* str

An Amazon Resource Name (ARN) of an IAM role that AWS Elemental MediaPackage will assume when accessing the key provider service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#role_arn MediapackagePackagingConfiguration#role_arn}

---

###### `system_ids`<sup>Optional</sup> <a name="system_ids" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.putSpekeKeyProvider.parameter.systemIds"></a>

- *Type:* typing.List[str]

The system IDs to include in key requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#system_ids MediapackagePackagingConfiguration#system_ids}

---

###### `url`<sup>Optional</sup> <a name="url" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.putSpekeKeyProvider.parameter.url"></a>

- *Type:* str

The URL of the external key provider service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#url MediapackagePackagingConfiguration#url}

---

##### `reset_speke_key_provider` <a name="reset_speke_key_provider" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.resetSpekeKeyProvider"></a>

```python
def reset_speke_key_provider() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.property.spekeKeyProvider">speke_key_provider</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference">MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.property.spekeKeyProviderInput">speke_key_provider_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProvider">MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProvider</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryption">MediapackagePackagingConfigurationDashPackageEncryption</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `speke_key_provider`<sup>Required</sup> <a name="speke_key_provider" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.property.spekeKeyProvider"></a>

```python
speke_key_provider: MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference">MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference</a>

---

##### `speke_key_provider_input`<sup>Optional</sup> <a name="speke_key_provider_input" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.property.spekeKeyProviderInput"></a>

```python
speke_key_provider_input: IResolvable | MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProvider
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProvider">MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProvider</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MediapackagePackagingConfigurationDashPackageEncryption
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryption">MediapackagePackagingConfigurationDashPackageEncryption</a>

---


### MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference <a name="MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import mediapackage_packaging_configuration

mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.resetPresetSpeke20Audio">reset_preset_speke20_audio</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.resetPresetSpeke20Video">reset_preset_speke20_video</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_preset_speke20_audio` <a name="reset_preset_speke20_audio" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.resetPresetSpeke20Audio"></a>

```python
def reset_preset_speke20_audio() -> None
```

##### `reset_preset_speke20_video` <a name="reset_preset_speke20_video" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.resetPresetSpeke20Video"></a>

```python
def reset_preset_speke20_video() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20AudioInput">preset_speke20_audio_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20VideoInput">preset_speke20_video_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20Audio">preset_speke20_audio</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20Video">preset_speke20_video</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration">MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `preset_speke20_audio_input`<sup>Optional</sup> <a name="preset_speke20_audio_input" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20AudioInput"></a>

```python
preset_speke20_audio_input: str
```

- *Type:* str

---

##### `preset_speke20_video_input`<sup>Optional</sup> <a name="preset_speke20_video_input" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20VideoInput"></a>

```python
preset_speke20_video_input: str
```

- *Type:* str

---

##### `preset_speke20_audio`<sup>Required</sup> <a name="preset_speke20_audio" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20Audio"></a>

```python
preset_speke20_audio: str
```

- *Type:* str

---

##### `preset_speke20_video`<sup>Required</sup> <a name="preset_speke20_video" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20Video"></a>

```python
preset_speke20_video: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration">MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration</a>

---


### MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference <a name="MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import mediapackage_packaging_configuration

mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.putEncryptionContractConfiguration">put_encryption_contract_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.resetEncryptionContractConfiguration">reset_encryption_contract_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.resetRoleArn">reset_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.resetSystemIds">reset_system_ids</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.resetUrl">reset_url</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_encryption_contract_configuration` <a name="put_encryption_contract_configuration" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.putEncryptionContractConfiguration"></a>

```python
def put_encryption_contract_configuration(
  preset_speke20_audio: str = None,
  preset_speke20_video: str = None
) -> None
```

###### `preset_speke20_audio`<sup>Optional</sup> <a name="preset_speke20_audio" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.putEncryptionContractConfiguration.parameter.presetSpeke20Audio"></a>

- *Type:* str

A collection of audio encryption presets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#preset_speke_20_audio MediapackagePackagingConfiguration#preset_speke_20_audio}

---

###### `preset_speke20_video`<sup>Optional</sup> <a name="preset_speke20_video" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.putEncryptionContractConfiguration.parameter.presetSpeke20Video"></a>

- *Type:* str

A collection of video encryption presets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#preset_speke_20_video MediapackagePackagingConfiguration#preset_speke_20_video}

---

##### `reset_encryption_contract_configuration` <a name="reset_encryption_contract_configuration" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.resetEncryptionContractConfiguration"></a>

```python
def reset_encryption_contract_configuration() -> None
```

##### `reset_role_arn` <a name="reset_role_arn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.resetRoleArn"></a>

```python
def reset_role_arn() -> None
```

##### `reset_system_ids` <a name="reset_system_ids" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.resetSystemIds"></a>

```python
def reset_system_ids() -> None
```

##### `reset_url` <a name="reset_url" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.resetUrl"></a>

```python
def reset_url() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.property.encryptionContractConfiguration">encryption_contract_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference">MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.property.encryptionContractConfigurationInput">encryption_contract_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration">MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.property.systemIdsInput">system_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.property.urlInput">url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.property.systemIds">system_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProvider">MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProvider</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `encryption_contract_configuration`<sup>Required</sup> <a name="encryption_contract_configuration" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.property.encryptionContractConfiguration"></a>

```python
encryption_contract_configuration: MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference">MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference</a>

---

##### `encryption_contract_configuration_input`<sup>Optional</sup> <a name="encryption_contract_configuration_input" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.property.encryptionContractConfigurationInput"></a>

```python
encryption_contract_configuration_input: IResolvable | MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration">MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration</a>

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `system_ids_input`<sup>Optional</sup> <a name="system_ids_input" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.property.systemIdsInput"></a>

```python
system_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `url_input`<sup>Optional</sup> <a name="url_input" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.property.urlInput"></a>

```python
url_input: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `system_ids`<sup>Required</sup> <a name="system_ids" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.property.systemIds"></a>

```python
system_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProvider
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProvider">MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProvider</a>

---


### MediapackagePackagingConfigurationDashPackageOutputReference <a name="MediapackagePackagingConfigurationDashPackageOutputReference" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import mediapackage_packaging_configuration

mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.putDashManifests">put_dash_manifests</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.putEncryption">put_encryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.resetDashManifests">reset_dash_manifests</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.resetEncryption">reset_encryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.resetIncludeEncoderConfigurationInSegments">reset_include_encoder_configuration_in_segments</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.resetIncludeIframeOnlyStream">reset_include_iframe_only_stream</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.resetPeriodTriggers">reset_period_triggers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.resetSegmentDurationSeconds">reset_segment_duration_seconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.resetSegmentTemplateFormat">reset_segment_template_format</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_dash_manifests` <a name="put_dash_manifests" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.putDashManifests"></a>

```python
def put_dash_manifests(
  value: IResolvable | typing.List[MediapackagePackagingConfigurationDashPackageDashManifests]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.putDashManifests.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifests">MediapackagePackagingConfigurationDashPackageDashManifests</a>]

---

##### `put_encryption` <a name="put_encryption" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.putEncryption"></a>

```python
def put_encryption(
  speke_key_provider: MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProvider = None
) -> None
```

###### `speke_key_provider`<sup>Optional</sup> <a name="speke_key_provider" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.putEncryption.parameter.spekeKeyProvider"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProvider">MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProvider</a>

A configuration for accessing an external Secure Packager and Encoder Key Exchange (SPEKE) service that will provide encryption keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#speke_key_provider MediapackagePackagingConfiguration#speke_key_provider}

---

##### `reset_dash_manifests` <a name="reset_dash_manifests" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.resetDashManifests"></a>

```python
def reset_dash_manifests() -> None
```

##### `reset_encryption` <a name="reset_encryption" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.resetEncryption"></a>

```python
def reset_encryption() -> None
```

##### `reset_include_encoder_configuration_in_segments` <a name="reset_include_encoder_configuration_in_segments" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.resetIncludeEncoderConfigurationInSegments"></a>

```python
def reset_include_encoder_configuration_in_segments() -> None
```

##### `reset_include_iframe_only_stream` <a name="reset_include_iframe_only_stream" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.resetIncludeIframeOnlyStream"></a>

```python
def reset_include_iframe_only_stream() -> None
```

##### `reset_period_triggers` <a name="reset_period_triggers" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.resetPeriodTriggers"></a>

```python
def reset_period_triggers() -> None
```

##### `reset_segment_duration_seconds` <a name="reset_segment_duration_seconds" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.resetSegmentDurationSeconds"></a>

```python
def reset_segment_duration_seconds() -> None
```

##### `reset_segment_template_format` <a name="reset_segment_template_format" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.resetSegmentTemplateFormat"></a>

```python
def reset_segment_template_format() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.property.dashManifests">dash_manifests</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsList">MediapackagePackagingConfigurationDashPackageDashManifestsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.property.encryption">encryption</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference">MediapackagePackagingConfigurationDashPackageEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.property.dashManifestsInput">dash_manifests_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifests">MediapackagePackagingConfigurationDashPackageDashManifests</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.property.encryptionInput">encryption_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryption">MediapackagePackagingConfigurationDashPackageEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.property.includeEncoderConfigurationInSegmentsInput">include_encoder_configuration_in_segments_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.property.includeIframeOnlyStreamInput">include_iframe_only_stream_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.property.periodTriggersInput">period_triggers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.property.segmentDurationSecondsInput">segment_duration_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.property.segmentTemplateFormatInput">segment_template_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.property.includeEncoderConfigurationInSegments">include_encoder_configuration_in_segments</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.property.includeIframeOnlyStream">include_iframe_only_stream</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.property.periodTriggers">period_triggers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.property.segmentDurationSeconds">segment_duration_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.property.segmentTemplateFormat">segment_template_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackage">MediapackagePackagingConfigurationDashPackage</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dash_manifests`<sup>Required</sup> <a name="dash_manifests" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.property.dashManifests"></a>

```python
dash_manifests: MediapackagePackagingConfigurationDashPackageDashManifestsList
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsList">MediapackagePackagingConfigurationDashPackageDashManifestsList</a>

---

##### `encryption`<sup>Required</sup> <a name="encryption" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.property.encryption"></a>

```python
encryption: MediapackagePackagingConfigurationDashPackageEncryptionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference">MediapackagePackagingConfigurationDashPackageEncryptionOutputReference</a>

---

##### `dash_manifests_input`<sup>Optional</sup> <a name="dash_manifests_input" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.property.dashManifestsInput"></a>

```python
dash_manifests_input: IResolvable | typing.List[MediapackagePackagingConfigurationDashPackageDashManifests]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifests">MediapackagePackagingConfigurationDashPackageDashManifests</a>]

---

##### `encryption_input`<sup>Optional</sup> <a name="encryption_input" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.property.encryptionInput"></a>

```python
encryption_input: IResolvable | MediapackagePackagingConfigurationDashPackageEncryption
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryption">MediapackagePackagingConfigurationDashPackageEncryption</a>

---

##### `include_encoder_configuration_in_segments_input`<sup>Optional</sup> <a name="include_encoder_configuration_in_segments_input" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.property.includeEncoderConfigurationInSegmentsInput"></a>

```python
include_encoder_configuration_in_segments_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `include_iframe_only_stream_input`<sup>Optional</sup> <a name="include_iframe_only_stream_input" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.property.includeIframeOnlyStreamInput"></a>

```python
include_iframe_only_stream_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `period_triggers_input`<sup>Optional</sup> <a name="period_triggers_input" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.property.periodTriggersInput"></a>

```python
period_triggers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `segment_duration_seconds_input`<sup>Optional</sup> <a name="segment_duration_seconds_input" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.property.segmentDurationSecondsInput"></a>

```python
segment_duration_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `segment_template_format_input`<sup>Optional</sup> <a name="segment_template_format_input" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.property.segmentTemplateFormatInput"></a>

```python
segment_template_format_input: str
```

- *Type:* str

---

##### `include_encoder_configuration_in_segments`<sup>Required</sup> <a name="include_encoder_configuration_in_segments" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.property.includeEncoderConfigurationInSegments"></a>

```python
include_encoder_configuration_in_segments: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `include_iframe_only_stream`<sup>Required</sup> <a name="include_iframe_only_stream" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.property.includeIframeOnlyStream"></a>

```python
include_iframe_only_stream: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `period_triggers`<sup>Required</sup> <a name="period_triggers" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.property.periodTriggers"></a>

```python
period_triggers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `segment_duration_seconds`<sup>Required</sup> <a name="segment_duration_seconds" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.property.segmentDurationSeconds"></a>

```python
segment_duration_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `segment_template_format`<sup>Required</sup> <a name="segment_template_format" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.property.segmentTemplateFormat"></a>

```python
segment_template_format: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MediapackagePackagingConfigurationDashPackage
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackage">MediapackagePackagingConfigurationDashPackage</a>

---


### MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference <a name="MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import mediapackage_packaging_configuration

mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.putSpekeKeyProvider">put_speke_key_provider</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.resetConstantInitializationVector">reset_constant_initialization_vector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.resetEncryptionMethod">reset_encryption_method</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.resetSpekeKeyProvider">reset_speke_key_provider</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_speke_key_provider` <a name="put_speke_key_provider" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.putSpekeKeyProvider"></a>

```python
def put_speke_key_provider(
  encryption_contract_configuration: MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration = None,
  role_arn: str = None,
  system_ids: typing.List[str] = None,
  url: str = None
) -> None
```

###### `encryption_contract_configuration`<sup>Optional</sup> <a name="encryption_contract_configuration" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.putSpekeKeyProvider.parameter.encryptionContractConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration">MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration</a>

The configuration to use for encrypting one or more content tracks separately for endpoints that use SPEKE 2.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#encryption_contract_configuration MediapackagePackagingConfiguration#encryption_contract_configuration}

---

###### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.putSpekeKeyProvider.parameter.roleArn"></a>

- *Type:* str

An Amazon Resource Name (ARN) of an IAM role that AWS Elemental MediaPackage will assume when accessing the key provider service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#role_arn MediapackagePackagingConfiguration#role_arn}

---

###### `system_ids`<sup>Optional</sup> <a name="system_ids" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.putSpekeKeyProvider.parameter.systemIds"></a>

- *Type:* typing.List[str]

The system IDs to include in key requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#system_ids MediapackagePackagingConfiguration#system_ids}

---

###### `url`<sup>Optional</sup> <a name="url" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.putSpekeKeyProvider.parameter.url"></a>

- *Type:* str

The URL of the external key provider service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#url MediapackagePackagingConfiguration#url}

---

##### `reset_constant_initialization_vector` <a name="reset_constant_initialization_vector" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.resetConstantInitializationVector"></a>

```python
def reset_constant_initialization_vector() -> None
```

##### `reset_encryption_method` <a name="reset_encryption_method" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.resetEncryptionMethod"></a>

```python
def reset_encryption_method() -> None
```

##### `reset_speke_key_provider` <a name="reset_speke_key_provider" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.resetSpekeKeyProvider"></a>

```python
def reset_speke_key_provider() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.property.spekeKeyProvider">speke_key_provider</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference">MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.property.constantInitializationVectorInput">constant_initialization_vector_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.property.encryptionMethodInput">encryption_method_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.property.spekeKeyProviderInput">speke_key_provider_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider">MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.property.constantInitializationVector">constant_initialization_vector</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.property.encryptionMethod">encryption_method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryption">MediapackagePackagingConfigurationHlsPackageEncryption</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `speke_key_provider`<sup>Required</sup> <a name="speke_key_provider" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.property.spekeKeyProvider"></a>

```python
speke_key_provider: MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference">MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference</a>

---

##### `constant_initialization_vector_input`<sup>Optional</sup> <a name="constant_initialization_vector_input" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.property.constantInitializationVectorInput"></a>

```python
constant_initialization_vector_input: str
```

- *Type:* str

---

##### `encryption_method_input`<sup>Optional</sup> <a name="encryption_method_input" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.property.encryptionMethodInput"></a>

```python
encryption_method_input: str
```

- *Type:* str

---

##### `speke_key_provider_input`<sup>Optional</sup> <a name="speke_key_provider_input" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.property.spekeKeyProviderInput"></a>

```python
speke_key_provider_input: IResolvable | MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider">MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider</a>

---

##### `constant_initialization_vector`<sup>Required</sup> <a name="constant_initialization_vector" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.property.constantInitializationVector"></a>

```python
constant_initialization_vector: str
```

- *Type:* str

---

##### `encryption_method`<sup>Required</sup> <a name="encryption_method" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.property.encryptionMethod"></a>

```python
encryption_method: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MediapackagePackagingConfigurationHlsPackageEncryption
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryption">MediapackagePackagingConfigurationHlsPackageEncryption</a>

---


### MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference <a name="MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import mediapackage_packaging_configuration

mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.resetPresetSpeke20Audio">reset_preset_speke20_audio</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.resetPresetSpeke20Video">reset_preset_speke20_video</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_preset_speke20_audio` <a name="reset_preset_speke20_audio" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.resetPresetSpeke20Audio"></a>

```python
def reset_preset_speke20_audio() -> None
```

##### `reset_preset_speke20_video` <a name="reset_preset_speke20_video" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.resetPresetSpeke20Video"></a>

```python
def reset_preset_speke20_video() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20AudioInput">preset_speke20_audio_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20VideoInput">preset_speke20_video_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20Audio">preset_speke20_audio</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20Video">preset_speke20_video</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration">MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `preset_speke20_audio_input`<sup>Optional</sup> <a name="preset_speke20_audio_input" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20AudioInput"></a>

```python
preset_speke20_audio_input: str
```

- *Type:* str

---

##### `preset_speke20_video_input`<sup>Optional</sup> <a name="preset_speke20_video_input" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20VideoInput"></a>

```python
preset_speke20_video_input: str
```

- *Type:* str

---

##### `preset_speke20_audio`<sup>Required</sup> <a name="preset_speke20_audio" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20Audio"></a>

```python
preset_speke20_audio: str
```

- *Type:* str

---

##### `preset_speke20_video`<sup>Required</sup> <a name="preset_speke20_video" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20Video"></a>

```python
preset_speke20_video: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration">MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration</a>

---


### MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference <a name="MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import mediapackage_packaging_configuration

mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.putEncryptionContractConfiguration">put_encryption_contract_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.resetEncryptionContractConfiguration">reset_encryption_contract_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.resetRoleArn">reset_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.resetSystemIds">reset_system_ids</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.resetUrl">reset_url</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_encryption_contract_configuration` <a name="put_encryption_contract_configuration" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.putEncryptionContractConfiguration"></a>

```python
def put_encryption_contract_configuration(
  preset_speke20_audio: str = None,
  preset_speke20_video: str = None
) -> None
```

###### `preset_speke20_audio`<sup>Optional</sup> <a name="preset_speke20_audio" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.putEncryptionContractConfiguration.parameter.presetSpeke20Audio"></a>

- *Type:* str

A collection of audio encryption presets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#preset_speke_20_audio MediapackagePackagingConfiguration#preset_speke_20_audio}

---

###### `preset_speke20_video`<sup>Optional</sup> <a name="preset_speke20_video" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.putEncryptionContractConfiguration.parameter.presetSpeke20Video"></a>

- *Type:* str

A collection of video encryption presets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#preset_speke_20_video MediapackagePackagingConfiguration#preset_speke_20_video}

---

##### `reset_encryption_contract_configuration` <a name="reset_encryption_contract_configuration" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.resetEncryptionContractConfiguration"></a>

```python
def reset_encryption_contract_configuration() -> None
```

##### `reset_role_arn` <a name="reset_role_arn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.resetRoleArn"></a>

```python
def reset_role_arn() -> None
```

##### `reset_system_ids` <a name="reset_system_ids" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.resetSystemIds"></a>

```python
def reset_system_ids() -> None
```

##### `reset_url` <a name="reset_url" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.resetUrl"></a>

```python
def reset_url() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.property.encryptionContractConfiguration">encryption_contract_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference">MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.property.encryptionContractConfigurationInput">encryption_contract_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration">MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.property.systemIdsInput">system_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.property.urlInput">url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.property.systemIds">system_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider">MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `encryption_contract_configuration`<sup>Required</sup> <a name="encryption_contract_configuration" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.property.encryptionContractConfiguration"></a>

```python
encryption_contract_configuration: MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference">MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference</a>

---

##### `encryption_contract_configuration_input`<sup>Optional</sup> <a name="encryption_contract_configuration_input" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.property.encryptionContractConfigurationInput"></a>

```python
encryption_contract_configuration_input: IResolvable | MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration">MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration</a>

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `system_ids_input`<sup>Optional</sup> <a name="system_ids_input" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.property.systemIdsInput"></a>

```python
system_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `url_input`<sup>Optional</sup> <a name="url_input" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.property.urlInput"></a>

```python
url_input: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `system_ids`<sup>Required</sup> <a name="system_ids" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.property.systemIds"></a>

```python
system_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider">MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider</a>

---


### MediapackagePackagingConfigurationHlsPackageHlsManifestsList <a name="MediapackagePackagingConfigurationHlsPackageHlsManifestsList" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsList.Initializer"></a>

```python
from cdktn_provider_awscc import mediapackage_packaging_configuration

mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifests">MediapackagePackagingConfigurationHlsPackageHlsManifests</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[MediapackagePackagingConfigurationHlsPackageHlsManifests]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifests">MediapackagePackagingConfigurationHlsPackageHlsManifests</a>]

---


### MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference <a name="MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import mediapackage_packaging_configuration

mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.putStreamSelection">put_stream_selection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.resetAdMarkers">reset_ad_markers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.resetIncludeIframeOnlyStream">reset_include_iframe_only_stream</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.resetManifestName">reset_manifest_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.resetProgramDateTimeIntervalSeconds">reset_program_date_time_interval_seconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.resetRepeatExtXKey">reset_repeat_ext_x_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.resetStreamSelection">reset_stream_selection</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_stream_selection` <a name="put_stream_selection" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.putStreamSelection"></a>

```python
def put_stream_selection(
  max_video_bits_per_second: typing.Union[int, float] = None,
  min_video_bits_per_second: typing.Union[int, float] = None,
  stream_order: str = None
) -> None
```

###### `max_video_bits_per_second`<sup>Optional</sup> <a name="max_video_bits_per_second" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.putStreamSelection.parameter.maxVideoBitsPerSecond"></a>

- *Type:* typing.Union[int, float]

The maximum video bitrate (bps) to include in output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#max_video_bits_per_second MediapackagePackagingConfiguration#max_video_bits_per_second}

---

###### `min_video_bits_per_second`<sup>Optional</sup> <a name="min_video_bits_per_second" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.putStreamSelection.parameter.minVideoBitsPerSecond"></a>

- *Type:* typing.Union[int, float]

The minimum video bitrate (bps) to include in output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#min_video_bits_per_second MediapackagePackagingConfiguration#min_video_bits_per_second}

---

###### `stream_order`<sup>Optional</sup> <a name="stream_order" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.putStreamSelection.parameter.streamOrder"></a>

- *Type:* str

A directive that determines the order of streams in the output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#stream_order MediapackagePackagingConfiguration#stream_order}

---

##### `reset_ad_markers` <a name="reset_ad_markers" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.resetAdMarkers"></a>

```python
def reset_ad_markers() -> None
```

##### `reset_include_iframe_only_stream` <a name="reset_include_iframe_only_stream" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.resetIncludeIframeOnlyStream"></a>

```python
def reset_include_iframe_only_stream() -> None
```

##### `reset_manifest_name` <a name="reset_manifest_name" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.resetManifestName"></a>

```python
def reset_manifest_name() -> None
```

##### `reset_program_date_time_interval_seconds` <a name="reset_program_date_time_interval_seconds" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.resetProgramDateTimeIntervalSeconds"></a>

```python
def reset_program_date_time_interval_seconds() -> None
```

##### `reset_repeat_ext_x_key` <a name="reset_repeat_ext_x_key" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.resetRepeatExtXKey"></a>

```python
def reset_repeat_ext_x_key() -> None
```

##### `reset_stream_selection` <a name="reset_stream_selection" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.resetStreamSelection"></a>

```python
def reset_stream_selection() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.property.streamSelection">stream_selection</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference">MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.property.adMarkersInput">ad_markers_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.property.includeIframeOnlyStreamInput">include_iframe_only_stream_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.property.manifestNameInput">manifest_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.property.programDateTimeIntervalSecondsInput">program_date_time_interval_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.property.repeatExtXKeyInput">repeat_ext_x_key_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.property.streamSelectionInput">stream_selection_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelection">MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.property.adMarkers">ad_markers</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.property.includeIframeOnlyStream">include_iframe_only_stream</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.property.manifestName">manifest_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.property.programDateTimeIntervalSeconds">program_date_time_interval_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.property.repeatExtXKey">repeat_ext_x_key</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifests">MediapackagePackagingConfigurationHlsPackageHlsManifests</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `stream_selection`<sup>Required</sup> <a name="stream_selection" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.property.streamSelection"></a>

```python
stream_selection: MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference">MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference</a>

---

##### `ad_markers_input`<sup>Optional</sup> <a name="ad_markers_input" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.property.adMarkersInput"></a>

```python
ad_markers_input: str
```

- *Type:* str

---

##### `include_iframe_only_stream_input`<sup>Optional</sup> <a name="include_iframe_only_stream_input" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.property.includeIframeOnlyStreamInput"></a>

```python
include_iframe_only_stream_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `manifest_name_input`<sup>Optional</sup> <a name="manifest_name_input" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.property.manifestNameInput"></a>

```python
manifest_name_input: str
```

- *Type:* str

---

##### `program_date_time_interval_seconds_input`<sup>Optional</sup> <a name="program_date_time_interval_seconds_input" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.property.programDateTimeIntervalSecondsInput"></a>

```python
program_date_time_interval_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `repeat_ext_x_key_input`<sup>Optional</sup> <a name="repeat_ext_x_key_input" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.property.repeatExtXKeyInput"></a>

```python
repeat_ext_x_key_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `stream_selection_input`<sup>Optional</sup> <a name="stream_selection_input" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.property.streamSelectionInput"></a>

```python
stream_selection_input: IResolvable | MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelection
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelection">MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelection</a>

---

##### `ad_markers`<sup>Required</sup> <a name="ad_markers" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.property.adMarkers"></a>

```python
ad_markers: str
```

- *Type:* str

---

##### `include_iframe_only_stream`<sup>Required</sup> <a name="include_iframe_only_stream" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.property.includeIframeOnlyStream"></a>

```python
include_iframe_only_stream: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `manifest_name`<sup>Required</sup> <a name="manifest_name" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.property.manifestName"></a>

```python
manifest_name: str
```

- *Type:* str

---

##### `program_date_time_interval_seconds`<sup>Required</sup> <a name="program_date_time_interval_seconds" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.property.programDateTimeIntervalSeconds"></a>

```python
program_date_time_interval_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `repeat_ext_x_key`<sup>Required</sup> <a name="repeat_ext_x_key" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.property.repeatExtXKey"></a>

```python
repeat_ext_x_key: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MediapackagePackagingConfigurationHlsPackageHlsManifests
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifests">MediapackagePackagingConfigurationHlsPackageHlsManifests</a>

---


### MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference <a name="MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import mediapackage_packaging_configuration

mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.resetMaxVideoBitsPerSecond">reset_max_video_bits_per_second</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.resetMinVideoBitsPerSecond">reset_min_video_bits_per_second</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.resetStreamOrder">reset_stream_order</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_max_video_bits_per_second` <a name="reset_max_video_bits_per_second" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.resetMaxVideoBitsPerSecond"></a>

```python
def reset_max_video_bits_per_second() -> None
```

##### `reset_min_video_bits_per_second` <a name="reset_min_video_bits_per_second" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.resetMinVideoBitsPerSecond"></a>

```python
def reset_min_video_bits_per_second() -> None
```

##### `reset_stream_order` <a name="reset_stream_order" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.resetStreamOrder"></a>

```python
def reset_stream_order() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.property.maxVideoBitsPerSecondInput">max_video_bits_per_second_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.property.minVideoBitsPerSecondInput">min_video_bits_per_second_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.property.streamOrderInput">stream_order_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.property.maxVideoBitsPerSecond">max_video_bits_per_second</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.property.minVideoBitsPerSecond">min_video_bits_per_second</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.property.streamOrder">stream_order</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelection">MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_video_bits_per_second_input`<sup>Optional</sup> <a name="max_video_bits_per_second_input" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.property.maxVideoBitsPerSecondInput"></a>

```python
max_video_bits_per_second_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_video_bits_per_second_input`<sup>Optional</sup> <a name="min_video_bits_per_second_input" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.property.minVideoBitsPerSecondInput"></a>

```python
min_video_bits_per_second_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `stream_order_input`<sup>Optional</sup> <a name="stream_order_input" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.property.streamOrderInput"></a>

```python
stream_order_input: str
```

- *Type:* str

---

##### `max_video_bits_per_second`<sup>Required</sup> <a name="max_video_bits_per_second" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.property.maxVideoBitsPerSecond"></a>

```python
max_video_bits_per_second: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_video_bits_per_second`<sup>Required</sup> <a name="min_video_bits_per_second" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.property.minVideoBitsPerSecond"></a>

```python
min_video_bits_per_second: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `stream_order`<sup>Required</sup> <a name="stream_order" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.property.streamOrder"></a>

```python
stream_order: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelection
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelection">MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelection</a>

---


### MediapackagePackagingConfigurationHlsPackageOutputReference <a name="MediapackagePackagingConfigurationHlsPackageOutputReference" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import mediapackage_packaging_configuration

mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.putEncryption">put_encryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.putHlsManifests">put_hls_manifests</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.resetEncryption">reset_encryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.resetHlsManifests">reset_hls_manifests</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.resetIncludeDvbSubtitles">reset_include_dvb_subtitles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.resetSegmentDurationSeconds">reset_segment_duration_seconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.resetUseAudioRenditionGroup">reset_use_audio_rendition_group</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_encryption` <a name="put_encryption" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.putEncryption"></a>

```python
def put_encryption(
  constant_initialization_vector: str = None,
  encryption_method: str = None,
  speke_key_provider: MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider = None
) -> None
```

###### `constant_initialization_vector`<sup>Optional</sup> <a name="constant_initialization_vector" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.putEncryption.parameter.constantInitializationVector"></a>

- *Type:* str

An HTTP Live Streaming (HLS) encryption configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#constant_initialization_vector MediapackagePackagingConfiguration#constant_initialization_vector}

---

###### `encryption_method`<sup>Optional</sup> <a name="encryption_method" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.putEncryption.parameter.encryptionMethod"></a>

- *Type:* str

The encryption method to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#encryption_method MediapackagePackagingConfiguration#encryption_method}

---

###### `speke_key_provider`<sup>Optional</sup> <a name="speke_key_provider" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.putEncryption.parameter.spekeKeyProvider"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider">MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider</a>

A configuration for accessing an external Secure Packager and Encoder Key Exchange (SPEKE) service that will provide encryption keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#speke_key_provider MediapackagePackagingConfiguration#speke_key_provider}

---

##### `put_hls_manifests` <a name="put_hls_manifests" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.putHlsManifests"></a>

```python
def put_hls_manifests(
  value: IResolvable | typing.List[MediapackagePackagingConfigurationHlsPackageHlsManifests]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.putHlsManifests.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifests">MediapackagePackagingConfigurationHlsPackageHlsManifests</a>]

---

##### `reset_encryption` <a name="reset_encryption" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.resetEncryption"></a>

```python
def reset_encryption() -> None
```

##### `reset_hls_manifests` <a name="reset_hls_manifests" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.resetHlsManifests"></a>

```python
def reset_hls_manifests() -> None
```

##### `reset_include_dvb_subtitles` <a name="reset_include_dvb_subtitles" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.resetIncludeDvbSubtitles"></a>

```python
def reset_include_dvb_subtitles() -> None
```

##### `reset_segment_duration_seconds` <a name="reset_segment_duration_seconds" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.resetSegmentDurationSeconds"></a>

```python
def reset_segment_duration_seconds() -> None
```

##### `reset_use_audio_rendition_group` <a name="reset_use_audio_rendition_group" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.resetUseAudioRenditionGroup"></a>

```python
def reset_use_audio_rendition_group() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.property.encryption">encryption</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference">MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.property.hlsManifests">hls_manifests</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsList">MediapackagePackagingConfigurationHlsPackageHlsManifestsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.property.encryptionInput">encryption_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryption">MediapackagePackagingConfigurationHlsPackageEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.property.hlsManifestsInput">hls_manifests_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifests">MediapackagePackagingConfigurationHlsPackageHlsManifests</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.property.includeDvbSubtitlesInput">include_dvb_subtitles_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.property.segmentDurationSecondsInput">segment_duration_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.property.useAudioRenditionGroupInput">use_audio_rendition_group_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.property.includeDvbSubtitles">include_dvb_subtitles</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.property.segmentDurationSeconds">segment_duration_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.property.useAudioRenditionGroup">use_audio_rendition_group</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackage">MediapackagePackagingConfigurationHlsPackage</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `encryption`<sup>Required</sup> <a name="encryption" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.property.encryption"></a>

```python
encryption: MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference">MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference</a>

---

##### `hls_manifests`<sup>Required</sup> <a name="hls_manifests" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.property.hlsManifests"></a>

```python
hls_manifests: MediapackagePackagingConfigurationHlsPackageHlsManifestsList
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsList">MediapackagePackagingConfigurationHlsPackageHlsManifestsList</a>

---

##### `encryption_input`<sup>Optional</sup> <a name="encryption_input" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.property.encryptionInput"></a>

```python
encryption_input: IResolvable | MediapackagePackagingConfigurationHlsPackageEncryption
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryption">MediapackagePackagingConfigurationHlsPackageEncryption</a>

---

##### `hls_manifests_input`<sup>Optional</sup> <a name="hls_manifests_input" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.property.hlsManifestsInput"></a>

```python
hls_manifests_input: IResolvable | typing.List[MediapackagePackagingConfigurationHlsPackageHlsManifests]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifests">MediapackagePackagingConfigurationHlsPackageHlsManifests</a>]

---

##### `include_dvb_subtitles_input`<sup>Optional</sup> <a name="include_dvb_subtitles_input" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.property.includeDvbSubtitlesInput"></a>

```python
include_dvb_subtitles_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `segment_duration_seconds_input`<sup>Optional</sup> <a name="segment_duration_seconds_input" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.property.segmentDurationSecondsInput"></a>

```python
segment_duration_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `use_audio_rendition_group_input`<sup>Optional</sup> <a name="use_audio_rendition_group_input" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.property.useAudioRenditionGroupInput"></a>

```python
use_audio_rendition_group_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `include_dvb_subtitles`<sup>Required</sup> <a name="include_dvb_subtitles" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.property.includeDvbSubtitles"></a>

```python
include_dvb_subtitles: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `segment_duration_seconds`<sup>Required</sup> <a name="segment_duration_seconds" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.property.segmentDurationSeconds"></a>

```python
segment_duration_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `use_audio_rendition_group`<sup>Required</sup> <a name="use_audio_rendition_group" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.property.useAudioRenditionGroup"></a>

```python
use_audio_rendition_group: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MediapackagePackagingConfigurationHlsPackage
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackage">MediapackagePackagingConfigurationHlsPackage</a>

---


### MediapackagePackagingConfigurationMssPackageEncryptionOutputReference <a name="MediapackagePackagingConfigurationMssPackageEncryptionOutputReference" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import mediapackage_packaging_configuration

mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.putSpekeKeyProvider">put_speke_key_provider</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.resetSpekeKeyProvider">reset_speke_key_provider</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_speke_key_provider` <a name="put_speke_key_provider" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.putSpekeKeyProvider"></a>

```python
def put_speke_key_provider(
  encryption_contract_configuration: MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration = None,
  role_arn: str = None,
  system_ids: typing.List[str] = None,
  url: str = None
) -> None
```

###### `encryption_contract_configuration`<sup>Optional</sup> <a name="encryption_contract_configuration" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.putSpekeKeyProvider.parameter.encryptionContractConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration">MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration</a>

The configuration to use for encrypting one or more content tracks separately for endpoints that use SPEKE 2.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#encryption_contract_configuration MediapackagePackagingConfiguration#encryption_contract_configuration}

---

###### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.putSpekeKeyProvider.parameter.roleArn"></a>

- *Type:* str

An Amazon Resource Name (ARN) of an IAM role that AWS Elemental MediaPackage will assume when accessing the key provider service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#role_arn MediapackagePackagingConfiguration#role_arn}

---

###### `system_ids`<sup>Optional</sup> <a name="system_ids" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.putSpekeKeyProvider.parameter.systemIds"></a>

- *Type:* typing.List[str]

The system IDs to include in key requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#system_ids MediapackagePackagingConfiguration#system_ids}

---

###### `url`<sup>Optional</sup> <a name="url" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.putSpekeKeyProvider.parameter.url"></a>

- *Type:* str

The URL of the external key provider service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#url MediapackagePackagingConfiguration#url}

---

##### `reset_speke_key_provider` <a name="reset_speke_key_provider" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.resetSpekeKeyProvider"></a>

```python
def reset_speke_key_provider() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.property.spekeKeyProvider">speke_key_provider</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference">MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.property.spekeKeyProviderInput">speke_key_provider_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProvider">MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProvider</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryption">MediapackagePackagingConfigurationMssPackageEncryption</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `speke_key_provider`<sup>Required</sup> <a name="speke_key_provider" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.property.spekeKeyProvider"></a>

```python
speke_key_provider: MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference">MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference</a>

---

##### `speke_key_provider_input`<sup>Optional</sup> <a name="speke_key_provider_input" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.property.spekeKeyProviderInput"></a>

```python
speke_key_provider_input: IResolvable | MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProvider
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProvider">MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProvider</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MediapackagePackagingConfigurationMssPackageEncryption
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryption">MediapackagePackagingConfigurationMssPackageEncryption</a>

---


### MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference <a name="MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import mediapackage_packaging_configuration

mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.resetPresetSpeke20Audio">reset_preset_speke20_audio</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.resetPresetSpeke20Video">reset_preset_speke20_video</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_preset_speke20_audio` <a name="reset_preset_speke20_audio" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.resetPresetSpeke20Audio"></a>

```python
def reset_preset_speke20_audio() -> None
```

##### `reset_preset_speke20_video` <a name="reset_preset_speke20_video" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.resetPresetSpeke20Video"></a>

```python
def reset_preset_speke20_video() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20AudioInput">preset_speke20_audio_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20VideoInput">preset_speke20_video_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20Audio">preset_speke20_audio</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20Video">preset_speke20_video</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration">MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `preset_speke20_audio_input`<sup>Optional</sup> <a name="preset_speke20_audio_input" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20AudioInput"></a>

```python
preset_speke20_audio_input: str
```

- *Type:* str

---

##### `preset_speke20_video_input`<sup>Optional</sup> <a name="preset_speke20_video_input" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20VideoInput"></a>

```python
preset_speke20_video_input: str
```

- *Type:* str

---

##### `preset_speke20_audio`<sup>Required</sup> <a name="preset_speke20_audio" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20Audio"></a>

```python
preset_speke20_audio: str
```

- *Type:* str

---

##### `preset_speke20_video`<sup>Required</sup> <a name="preset_speke20_video" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20Video"></a>

```python
preset_speke20_video: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration">MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration</a>

---


### MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference <a name="MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import mediapackage_packaging_configuration

mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.putEncryptionContractConfiguration">put_encryption_contract_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.resetEncryptionContractConfiguration">reset_encryption_contract_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.resetRoleArn">reset_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.resetSystemIds">reset_system_ids</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.resetUrl">reset_url</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_encryption_contract_configuration` <a name="put_encryption_contract_configuration" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.putEncryptionContractConfiguration"></a>

```python
def put_encryption_contract_configuration(
  preset_speke20_audio: str = None,
  preset_speke20_video: str = None
) -> None
```

###### `preset_speke20_audio`<sup>Optional</sup> <a name="preset_speke20_audio" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.putEncryptionContractConfiguration.parameter.presetSpeke20Audio"></a>

- *Type:* str

A collection of audio encryption presets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#preset_speke_20_audio MediapackagePackagingConfiguration#preset_speke_20_audio}

---

###### `preset_speke20_video`<sup>Optional</sup> <a name="preset_speke20_video" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.putEncryptionContractConfiguration.parameter.presetSpeke20Video"></a>

- *Type:* str

A collection of video encryption presets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#preset_speke_20_video MediapackagePackagingConfiguration#preset_speke_20_video}

---

##### `reset_encryption_contract_configuration` <a name="reset_encryption_contract_configuration" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.resetEncryptionContractConfiguration"></a>

```python
def reset_encryption_contract_configuration() -> None
```

##### `reset_role_arn` <a name="reset_role_arn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.resetRoleArn"></a>

```python
def reset_role_arn() -> None
```

##### `reset_system_ids` <a name="reset_system_ids" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.resetSystemIds"></a>

```python
def reset_system_ids() -> None
```

##### `reset_url` <a name="reset_url" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.resetUrl"></a>

```python
def reset_url() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.property.encryptionContractConfiguration">encryption_contract_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference">MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.property.encryptionContractConfigurationInput">encryption_contract_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration">MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.property.systemIdsInput">system_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.property.urlInput">url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.property.systemIds">system_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProvider">MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProvider</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `encryption_contract_configuration`<sup>Required</sup> <a name="encryption_contract_configuration" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.property.encryptionContractConfiguration"></a>

```python
encryption_contract_configuration: MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference">MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference</a>

---

##### `encryption_contract_configuration_input`<sup>Optional</sup> <a name="encryption_contract_configuration_input" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.property.encryptionContractConfigurationInput"></a>

```python
encryption_contract_configuration_input: IResolvable | MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration">MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration</a>

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `system_ids_input`<sup>Optional</sup> <a name="system_ids_input" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.property.systemIdsInput"></a>

```python
system_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `url_input`<sup>Optional</sup> <a name="url_input" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.property.urlInput"></a>

```python
url_input: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `system_ids`<sup>Required</sup> <a name="system_ids" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.property.systemIds"></a>

```python
system_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProvider
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProvider">MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProvider</a>

---


### MediapackagePackagingConfigurationMssPackageMssManifestsList <a name="MediapackagePackagingConfigurationMssPackageMssManifestsList" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsList.Initializer"></a>

```python
from cdktn_provider_awscc import mediapackage_packaging_configuration

mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifests">MediapackagePackagingConfigurationMssPackageMssManifests</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[MediapackagePackagingConfigurationMssPackageMssManifests]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifests">MediapackagePackagingConfigurationMssPackageMssManifests</a>]

---


### MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference <a name="MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import mediapackage_packaging_configuration

mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.putStreamSelection">put_stream_selection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.resetManifestName">reset_manifest_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.resetStreamSelection">reset_stream_selection</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_stream_selection` <a name="put_stream_selection" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.putStreamSelection"></a>

```python
def put_stream_selection(
  max_video_bits_per_second: typing.Union[int, float] = None,
  min_video_bits_per_second: typing.Union[int, float] = None,
  stream_order: str = None
) -> None
```

###### `max_video_bits_per_second`<sup>Optional</sup> <a name="max_video_bits_per_second" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.putStreamSelection.parameter.maxVideoBitsPerSecond"></a>

- *Type:* typing.Union[int, float]

The maximum video bitrate (bps) to include in output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#max_video_bits_per_second MediapackagePackagingConfiguration#max_video_bits_per_second}

---

###### `min_video_bits_per_second`<sup>Optional</sup> <a name="min_video_bits_per_second" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.putStreamSelection.parameter.minVideoBitsPerSecond"></a>

- *Type:* typing.Union[int, float]

The minimum video bitrate (bps) to include in output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#min_video_bits_per_second MediapackagePackagingConfiguration#min_video_bits_per_second}

---

###### `stream_order`<sup>Optional</sup> <a name="stream_order" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.putStreamSelection.parameter.streamOrder"></a>

- *Type:* str

A directive that determines the order of streams in the output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#stream_order MediapackagePackagingConfiguration#stream_order}

---

##### `reset_manifest_name` <a name="reset_manifest_name" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.resetManifestName"></a>

```python
def reset_manifest_name() -> None
```

##### `reset_stream_selection` <a name="reset_stream_selection" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.resetStreamSelection"></a>

```python
def reset_stream_selection() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.property.streamSelection">stream_selection</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference">MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.property.manifestNameInput">manifest_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.property.streamSelectionInput">stream_selection_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelection">MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.property.manifestName">manifest_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifests">MediapackagePackagingConfigurationMssPackageMssManifests</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `stream_selection`<sup>Required</sup> <a name="stream_selection" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.property.streamSelection"></a>

```python
stream_selection: MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference">MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference</a>

---

##### `manifest_name_input`<sup>Optional</sup> <a name="manifest_name_input" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.property.manifestNameInput"></a>

```python
manifest_name_input: str
```

- *Type:* str

---

##### `stream_selection_input`<sup>Optional</sup> <a name="stream_selection_input" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.property.streamSelectionInput"></a>

```python
stream_selection_input: IResolvable | MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelection
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelection">MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelection</a>

---

##### `manifest_name`<sup>Required</sup> <a name="manifest_name" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.property.manifestName"></a>

```python
manifest_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MediapackagePackagingConfigurationMssPackageMssManifests
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifests">MediapackagePackagingConfigurationMssPackageMssManifests</a>

---


### MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference <a name="MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import mediapackage_packaging_configuration

mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.resetMaxVideoBitsPerSecond">reset_max_video_bits_per_second</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.resetMinVideoBitsPerSecond">reset_min_video_bits_per_second</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.resetStreamOrder">reset_stream_order</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_max_video_bits_per_second` <a name="reset_max_video_bits_per_second" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.resetMaxVideoBitsPerSecond"></a>

```python
def reset_max_video_bits_per_second() -> None
```

##### `reset_min_video_bits_per_second` <a name="reset_min_video_bits_per_second" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.resetMinVideoBitsPerSecond"></a>

```python
def reset_min_video_bits_per_second() -> None
```

##### `reset_stream_order` <a name="reset_stream_order" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.resetStreamOrder"></a>

```python
def reset_stream_order() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.property.maxVideoBitsPerSecondInput">max_video_bits_per_second_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.property.minVideoBitsPerSecondInput">min_video_bits_per_second_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.property.streamOrderInput">stream_order_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.property.maxVideoBitsPerSecond">max_video_bits_per_second</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.property.minVideoBitsPerSecond">min_video_bits_per_second</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.property.streamOrder">stream_order</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelection">MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_video_bits_per_second_input`<sup>Optional</sup> <a name="max_video_bits_per_second_input" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.property.maxVideoBitsPerSecondInput"></a>

```python
max_video_bits_per_second_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_video_bits_per_second_input`<sup>Optional</sup> <a name="min_video_bits_per_second_input" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.property.minVideoBitsPerSecondInput"></a>

```python
min_video_bits_per_second_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `stream_order_input`<sup>Optional</sup> <a name="stream_order_input" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.property.streamOrderInput"></a>

```python
stream_order_input: str
```

- *Type:* str

---

##### `max_video_bits_per_second`<sup>Required</sup> <a name="max_video_bits_per_second" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.property.maxVideoBitsPerSecond"></a>

```python
max_video_bits_per_second: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_video_bits_per_second`<sup>Required</sup> <a name="min_video_bits_per_second" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.property.minVideoBitsPerSecond"></a>

```python
min_video_bits_per_second: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `stream_order`<sup>Required</sup> <a name="stream_order" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.property.streamOrder"></a>

```python
stream_order: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelection
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelection">MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelection</a>

---


### MediapackagePackagingConfigurationMssPackageOutputReference <a name="MediapackagePackagingConfigurationMssPackageOutputReference" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import mediapackage_packaging_configuration

mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.putEncryption">put_encryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.putMssManifests">put_mss_manifests</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.resetEncryption">reset_encryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.resetMssManifests">reset_mss_manifests</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.resetSegmentDurationSeconds">reset_segment_duration_seconds</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_encryption` <a name="put_encryption" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.putEncryption"></a>

```python
def put_encryption(
  speke_key_provider: MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProvider = None
) -> None
```

###### `speke_key_provider`<sup>Optional</sup> <a name="speke_key_provider" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.putEncryption.parameter.spekeKeyProvider"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProvider">MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProvider</a>

A configuration for accessing an external Secure Packager and Encoder Key Exchange (SPEKE) service that will provide encryption keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#speke_key_provider MediapackagePackagingConfiguration#speke_key_provider}

---

##### `put_mss_manifests` <a name="put_mss_manifests" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.putMssManifests"></a>

```python
def put_mss_manifests(
  value: IResolvable | typing.List[MediapackagePackagingConfigurationMssPackageMssManifests]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.putMssManifests.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifests">MediapackagePackagingConfigurationMssPackageMssManifests</a>]

---

##### `reset_encryption` <a name="reset_encryption" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.resetEncryption"></a>

```python
def reset_encryption() -> None
```

##### `reset_mss_manifests` <a name="reset_mss_manifests" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.resetMssManifests"></a>

```python
def reset_mss_manifests() -> None
```

##### `reset_segment_duration_seconds` <a name="reset_segment_duration_seconds" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.resetSegmentDurationSeconds"></a>

```python
def reset_segment_duration_seconds() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.property.encryption">encryption</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference">MediapackagePackagingConfigurationMssPackageEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.property.mssManifests">mss_manifests</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsList">MediapackagePackagingConfigurationMssPackageMssManifestsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.property.encryptionInput">encryption_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryption">MediapackagePackagingConfigurationMssPackageEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.property.mssManifestsInput">mss_manifests_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifests">MediapackagePackagingConfigurationMssPackageMssManifests</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.property.segmentDurationSecondsInput">segment_duration_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.property.segmentDurationSeconds">segment_duration_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackage">MediapackagePackagingConfigurationMssPackage</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `encryption`<sup>Required</sup> <a name="encryption" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.property.encryption"></a>

```python
encryption: MediapackagePackagingConfigurationMssPackageEncryptionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference">MediapackagePackagingConfigurationMssPackageEncryptionOutputReference</a>

---

##### `mss_manifests`<sup>Required</sup> <a name="mss_manifests" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.property.mssManifests"></a>

```python
mss_manifests: MediapackagePackagingConfigurationMssPackageMssManifestsList
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsList">MediapackagePackagingConfigurationMssPackageMssManifestsList</a>

---

##### `encryption_input`<sup>Optional</sup> <a name="encryption_input" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.property.encryptionInput"></a>

```python
encryption_input: IResolvable | MediapackagePackagingConfigurationMssPackageEncryption
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryption">MediapackagePackagingConfigurationMssPackageEncryption</a>

---

##### `mss_manifests_input`<sup>Optional</sup> <a name="mss_manifests_input" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.property.mssManifestsInput"></a>

```python
mss_manifests_input: IResolvable | typing.List[MediapackagePackagingConfigurationMssPackageMssManifests]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifests">MediapackagePackagingConfigurationMssPackageMssManifests</a>]

---

##### `segment_duration_seconds_input`<sup>Optional</sup> <a name="segment_duration_seconds_input" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.property.segmentDurationSecondsInput"></a>

```python
segment_duration_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `segment_duration_seconds`<sup>Required</sup> <a name="segment_duration_seconds" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.property.segmentDurationSeconds"></a>

```python
segment_duration_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MediapackagePackagingConfigurationMssPackage
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackage">MediapackagePackagingConfigurationMssPackage</a>

---


### MediapackagePackagingConfigurationTagsList <a name="MediapackagePackagingConfigurationTagsList" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import mediapackage_packaging_configuration

mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MediapackagePackagingConfigurationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTags">MediapackagePackagingConfigurationTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[MediapackagePackagingConfigurationTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTags">MediapackagePackagingConfigurationTags</a>]

---


### MediapackagePackagingConfigurationTagsOutputReference <a name="MediapackagePackagingConfigurationTagsOutputReference" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import mediapackage_packaging_configuration

mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTags">MediapackagePackagingConfigurationTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MediapackagePackagingConfigurationTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTags">MediapackagePackagingConfigurationTags</a>

---



