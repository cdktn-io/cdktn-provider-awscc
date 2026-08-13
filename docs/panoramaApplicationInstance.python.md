# `panoramaApplicationInstance` Submodule <a name="`panoramaApplicationInstance` Submodule" id="@cdktn/provider-awscc.panoramaApplicationInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PanoramaApplicationInstance <a name="PanoramaApplicationInstance" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/panorama_application_instance awscc_panorama_application_instance}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.Initializer"></a>

```python
from cdktn_provider_awscc import panorama_application_instance

panoramaApplicationInstance.PanoramaApplicationInstance(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  default_runtime_context_device: str,
  manifest_payload: PanoramaApplicationInstanceManifestPayload,
  application_instance_id_to_replace: str = None,
  description: str = None,
  manifest_overrides_payload: PanoramaApplicationInstanceManifestOverridesPayload = None,
  name: str = None,
  runtime_role_arn: str = None,
  tags: IResolvable | typing.List[PanoramaApplicationInstanceTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.Initializer.parameter.defaultRuntimeContextDevice">default_runtime_context_device</a></code> | <code>str</code> | The device's ID. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.Initializer.parameter.manifestPayload">manifest_payload</a></code> | <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayload">PanoramaApplicationInstanceManifestPayload</a></code> | The application's manifest document. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.Initializer.parameter.applicationInstanceIdToReplace">application_instance_id_to_replace</a></code> | <code>str</code> | The ID of an application instance to replace with the new instance. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.Initializer.parameter.description">description</a></code> | <code>str</code> | A description for the application instance. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.Initializer.parameter.manifestOverridesPayload">manifest_overrides_payload</a></code> | <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayload">PanoramaApplicationInstanceManifestOverridesPayload</a></code> | Setting overrides for the application manifest. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.Initializer.parameter.name">name</a></code> | <code>str</code> | A name for the application instance. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.Initializer.parameter.runtimeRoleArn">runtime_role_arn</a></code> | <code>str</code> | The ARN of a runtime role for the application instance. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTags">PanoramaApplicationInstanceTags</a>]</code> | Tags for the application instance. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `default_runtime_context_device`<sup>Required</sup> <a name="default_runtime_context_device" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.Initializer.parameter.defaultRuntimeContextDevice"></a>

- *Type:* str

The device's ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/panorama_application_instance#default_runtime_context_device PanoramaApplicationInstance#default_runtime_context_device}

---

##### `manifest_payload`<sup>Required</sup> <a name="manifest_payload" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.Initializer.parameter.manifestPayload"></a>

- *Type:* <a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayload">PanoramaApplicationInstanceManifestPayload</a>

The application's manifest document.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/panorama_application_instance#manifest_payload PanoramaApplicationInstance#manifest_payload}

---

##### `application_instance_id_to_replace`<sup>Optional</sup> <a name="application_instance_id_to_replace" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.Initializer.parameter.applicationInstanceIdToReplace"></a>

- *Type:* str

The ID of an application instance to replace with the new instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/panorama_application_instance#application_instance_id_to_replace PanoramaApplicationInstance#application_instance_id_to_replace}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.Initializer.parameter.description"></a>

- *Type:* str

A description for the application instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/panorama_application_instance#description PanoramaApplicationInstance#description}

---

##### `manifest_overrides_payload`<sup>Optional</sup> <a name="manifest_overrides_payload" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.Initializer.parameter.manifestOverridesPayload"></a>

- *Type:* <a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayload">PanoramaApplicationInstanceManifestOverridesPayload</a>

Setting overrides for the application manifest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/panorama_application_instance#manifest_overrides_payload PanoramaApplicationInstance#manifest_overrides_payload}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.Initializer.parameter.name"></a>

- *Type:* str

A name for the application instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/panorama_application_instance#name PanoramaApplicationInstance#name}

---

##### `runtime_role_arn`<sup>Optional</sup> <a name="runtime_role_arn" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.Initializer.parameter.runtimeRoleArn"></a>

- *Type:* str

The ARN of a runtime role for the application instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/panorama_application_instance#runtime_role_arn PanoramaApplicationInstance#runtime_role_arn}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTags">PanoramaApplicationInstanceTags</a>]

Tags for the application instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/panorama_application_instance#tags PanoramaApplicationInstance#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.putManifestOverridesPayload">put_manifest_overrides_payload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.putManifestPayload">put_manifest_payload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.resetApplicationInstanceIdToReplace">reset_application_instance_id_to_replace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.resetManifestOverridesPayload">reset_manifest_overrides_payload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.resetRuntimeRoleArn">reset_runtime_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_manifest_overrides_payload` <a name="put_manifest_overrides_payload" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.putManifestOverridesPayload"></a>

```python
def put_manifest_overrides_payload(
  payload_data: str = None
) -> None
```

###### `payload_data`<sup>Optional</sup> <a name="payload_data" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.putManifestOverridesPayload.parameter.payloadData"></a>

- *Type:* str

The overrides document.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/panorama_application_instance#payload_data PanoramaApplicationInstance#payload_data}

---

##### `put_manifest_payload` <a name="put_manifest_payload" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.putManifestPayload"></a>

```python
def put_manifest_payload(
  payload_data: str = None
) -> None
```

###### `payload_data`<sup>Optional</sup> <a name="payload_data" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.putManifestPayload.parameter.payloadData"></a>

- *Type:* str

The application manifest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/panorama_application_instance#payload_data PanoramaApplicationInstance#payload_data}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[PanoramaApplicationInstanceTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTags">PanoramaApplicationInstanceTags</a>]

---

##### `reset_application_instance_id_to_replace` <a name="reset_application_instance_id_to_replace" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.resetApplicationInstanceIdToReplace"></a>

```python
def reset_application_instance_id_to_replace() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_manifest_overrides_payload` <a name="reset_manifest_overrides_payload" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.resetManifestOverridesPayload"></a>

```python
def reset_manifest_overrides_payload() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_runtime_role_arn` <a name="reset_runtime_role_arn" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.resetRuntimeRoleArn"></a>

```python
def reset_runtime_role_arn() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a PanoramaApplicationInstance resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.isConstruct"></a>

```python
from cdktn_provider_awscc import panorama_application_instance

panoramaApplicationInstance.PanoramaApplicationInstance.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.isTerraformElement"></a>

```python
from cdktn_provider_awscc import panorama_application_instance

panoramaApplicationInstance.PanoramaApplicationInstance.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.isTerraformResource"></a>

```python
from cdktn_provider_awscc import panorama_application_instance

panoramaApplicationInstance.PanoramaApplicationInstance.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import panorama_application_instance

panoramaApplicationInstance.PanoramaApplicationInstance.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a PanoramaApplicationInstance resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the PanoramaApplicationInstance to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing PanoramaApplicationInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/panorama_application_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the PanoramaApplicationInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.applicationInstanceId">application_instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.createdTime">created_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.defaultRuntimeContextDeviceName">default_runtime_context_device_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.healthStatus">health_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.lastUpdatedTime">last_updated_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.manifestOverridesPayload">manifest_overrides_payload</a></code> | <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference">PanoramaApplicationInstanceManifestOverridesPayloadOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.manifestPayload">manifest_payload</a></code> | <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference">PanoramaApplicationInstanceManifestPayloadOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.statusDescription">status_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsList">PanoramaApplicationInstanceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.applicationInstanceIdToReplaceInput">application_instance_id_to_replace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.defaultRuntimeContextDeviceInput">default_runtime_context_device_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.manifestOverridesPayloadInput">manifest_overrides_payload_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayload">PanoramaApplicationInstanceManifestOverridesPayload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.manifestPayloadInput">manifest_payload_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayload">PanoramaApplicationInstanceManifestPayload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.runtimeRoleArnInput">runtime_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTags">PanoramaApplicationInstanceTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.applicationInstanceIdToReplace">application_instance_id_to_replace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.defaultRuntimeContextDevice">default_runtime_context_device</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.runtimeRoleArn">runtime_role_arn</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `application_instance_id`<sup>Required</sup> <a name="application_instance_id" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.applicationInstanceId"></a>

```python
application_instance_id: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `created_time`<sup>Required</sup> <a name="created_time" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.createdTime"></a>

```python
created_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `default_runtime_context_device_name`<sup>Required</sup> <a name="default_runtime_context_device_name" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.defaultRuntimeContextDeviceName"></a>

```python
default_runtime_context_device_name: str
```

- *Type:* str

---

##### `health_status`<sup>Required</sup> <a name="health_status" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.healthStatus"></a>

```python
health_status: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `last_updated_time`<sup>Required</sup> <a name="last_updated_time" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.lastUpdatedTime"></a>

```python
last_updated_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `manifest_overrides_payload`<sup>Required</sup> <a name="manifest_overrides_payload" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.manifestOverridesPayload"></a>

```python
manifest_overrides_payload: PanoramaApplicationInstanceManifestOverridesPayloadOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference">PanoramaApplicationInstanceManifestOverridesPayloadOutputReference</a>

---

##### `manifest_payload`<sup>Required</sup> <a name="manifest_payload" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.manifestPayload"></a>

```python
manifest_payload: PanoramaApplicationInstanceManifestPayloadOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference">PanoramaApplicationInstanceManifestPayloadOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `status_description`<sup>Required</sup> <a name="status_description" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.statusDescription"></a>

```python
status_description: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.tags"></a>

```python
tags: PanoramaApplicationInstanceTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsList">PanoramaApplicationInstanceTagsList</a>

---

##### `application_instance_id_to_replace_input`<sup>Optional</sup> <a name="application_instance_id_to_replace_input" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.applicationInstanceIdToReplaceInput"></a>

```python
application_instance_id_to_replace_input: str
```

- *Type:* str

---

##### `default_runtime_context_device_input`<sup>Optional</sup> <a name="default_runtime_context_device_input" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.defaultRuntimeContextDeviceInput"></a>

```python
default_runtime_context_device_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `manifest_overrides_payload_input`<sup>Optional</sup> <a name="manifest_overrides_payload_input" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.manifestOverridesPayloadInput"></a>

```python
manifest_overrides_payload_input: IResolvable | PanoramaApplicationInstanceManifestOverridesPayload
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayload">PanoramaApplicationInstanceManifestOverridesPayload</a>

---

##### `manifest_payload_input`<sup>Optional</sup> <a name="manifest_payload_input" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.manifestPayloadInput"></a>

```python
manifest_payload_input: IResolvable | PanoramaApplicationInstanceManifestPayload
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayload">PanoramaApplicationInstanceManifestPayload</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `runtime_role_arn_input`<sup>Optional</sup> <a name="runtime_role_arn_input" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.runtimeRoleArnInput"></a>

```python
runtime_role_arn_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[PanoramaApplicationInstanceTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTags">PanoramaApplicationInstanceTags</a>]

---

##### `application_instance_id_to_replace`<sup>Required</sup> <a name="application_instance_id_to_replace" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.applicationInstanceIdToReplace"></a>

```python
application_instance_id_to_replace: str
```

- *Type:* str

---

##### `default_runtime_context_device`<sup>Required</sup> <a name="default_runtime_context_device" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.defaultRuntimeContextDevice"></a>

```python
default_runtime_context_device: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `runtime_role_arn`<sup>Required</sup> <a name="runtime_role_arn" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.runtimeRoleArn"></a>

```python
runtime_role_arn: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### PanoramaApplicationInstanceConfig <a name="PanoramaApplicationInstanceConfig" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceConfig.Initializer"></a>

```python
from cdktn_provider_awscc import panorama_application_instance

panoramaApplicationInstance.PanoramaApplicationInstanceConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  default_runtime_context_device: str,
  manifest_payload: PanoramaApplicationInstanceManifestPayload,
  application_instance_id_to_replace: str = None,
  description: str = None,
  manifest_overrides_payload: PanoramaApplicationInstanceManifestOverridesPayload = None,
  name: str = None,
  runtime_role_arn: str = None,
  tags: IResolvable | typing.List[PanoramaApplicationInstanceTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceConfig.property.defaultRuntimeContextDevice">default_runtime_context_device</a></code> | <code>str</code> | The device's ID. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceConfig.property.manifestPayload">manifest_payload</a></code> | <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayload">PanoramaApplicationInstanceManifestPayload</a></code> | The application's manifest document. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceConfig.property.applicationInstanceIdToReplace">application_instance_id_to_replace</a></code> | <code>str</code> | The ID of an application instance to replace with the new instance. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceConfig.property.description">description</a></code> | <code>str</code> | A description for the application instance. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceConfig.property.manifestOverridesPayload">manifest_overrides_payload</a></code> | <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayload">PanoramaApplicationInstanceManifestOverridesPayload</a></code> | Setting overrides for the application manifest. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceConfig.property.name">name</a></code> | <code>str</code> | A name for the application instance. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceConfig.property.runtimeRoleArn">runtime_role_arn</a></code> | <code>str</code> | The ARN of a runtime role for the application instance. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTags">PanoramaApplicationInstanceTags</a>]</code> | Tags for the application instance. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `default_runtime_context_device`<sup>Required</sup> <a name="default_runtime_context_device" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceConfig.property.defaultRuntimeContextDevice"></a>

```python
default_runtime_context_device: str
```

- *Type:* str

The device's ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/panorama_application_instance#default_runtime_context_device PanoramaApplicationInstance#default_runtime_context_device}

---

##### `manifest_payload`<sup>Required</sup> <a name="manifest_payload" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceConfig.property.manifestPayload"></a>

```python
manifest_payload: PanoramaApplicationInstanceManifestPayload
```

- *Type:* <a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayload">PanoramaApplicationInstanceManifestPayload</a>

The application's manifest document.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/panorama_application_instance#manifest_payload PanoramaApplicationInstance#manifest_payload}

---

##### `application_instance_id_to_replace`<sup>Optional</sup> <a name="application_instance_id_to_replace" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceConfig.property.applicationInstanceIdToReplace"></a>

```python
application_instance_id_to_replace: str
```

- *Type:* str

The ID of an application instance to replace with the new instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/panorama_application_instance#application_instance_id_to_replace PanoramaApplicationInstance#application_instance_id_to_replace}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A description for the application instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/panorama_application_instance#description PanoramaApplicationInstance#description}

---

##### `manifest_overrides_payload`<sup>Optional</sup> <a name="manifest_overrides_payload" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceConfig.property.manifestOverridesPayload"></a>

```python
manifest_overrides_payload: PanoramaApplicationInstanceManifestOverridesPayload
```

- *Type:* <a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayload">PanoramaApplicationInstanceManifestOverridesPayload</a>

Setting overrides for the application manifest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/panorama_application_instance#manifest_overrides_payload PanoramaApplicationInstance#manifest_overrides_payload}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceConfig.property.name"></a>

```python
name: str
```

- *Type:* str

A name for the application instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/panorama_application_instance#name PanoramaApplicationInstance#name}

---

##### `runtime_role_arn`<sup>Optional</sup> <a name="runtime_role_arn" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceConfig.property.runtimeRoleArn"></a>

```python
runtime_role_arn: str
```

- *Type:* str

The ARN of a runtime role for the application instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/panorama_application_instance#runtime_role_arn PanoramaApplicationInstance#runtime_role_arn}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[PanoramaApplicationInstanceTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTags">PanoramaApplicationInstanceTags</a>]

Tags for the application instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/panorama_application_instance#tags PanoramaApplicationInstance#tags}

---

### PanoramaApplicationInstanceManifestOverridesPayload <a name="PanoramaApplicationInstanceManifestOverridesPayload" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayload"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayload.Initializer"></a>

```python
from cdktn_provider_awscc import panorama_application_instance

panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayload(
  payload_data: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayload.property.payloadData">payload_data</a></code> | <code>str</code> | The overrides document. |

---

##### `payload_data`<sup>Optional</sup> <a name="payload_data" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayload.property.payloadData"></a>

```python
payload_data: str
```

- *Type:* str

The overrides document.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/panorama_application_instance#payload_data PanoramaApplicationInstance#payload_data}

---

### PanoramaApplicationInstanceManifestPayload <a name="PanoramaApplicationInstanceManifestPayload" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayload"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayload.Initializer"></a>

```python
from cdktn_provider_awscc import panorama_application_instance

panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayload(
  payload_data: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayload.property.payloadData">payload_data</a></code> | <code>str</code> | The application manifest. |

---

##### `payload_data`<sup>Optional</sup> <a name="payload_data" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayload.property.payloadData"></a>

```python
payload_data: str
```

- *Type:* str

The application manifest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/panorama_application_instance#payload_data PanoramaApplicationInstance#payload_data}

---

### PanoramaApplicationInstanceTags <a name="PanoramaApplicationInstanceTags" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTags.Initializer"></a>

```python
from cdktn_provider_awscc import panorama_application_instance

panoramaApplicationInstance.PanoramaApplicationInstanceTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/panorama_application_instance#key PanoramaApplicationInstance#key}. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/panorama_application_instance#value PanoramaApplicationInstance#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/panorama_application_instance#key PanoramaApplicationInstance#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/panorama_application_instance#value PanoramaApplicationInstance#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### PanoramaApplicationInstanceManifestOverridesPayloadOutputReference <a name="PanoramaApplicationInstanceManifestOverridesPayloadOutputReference" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import panorama_application_instance

panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.resetPayloadData">reset_payload_data</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_payload_data` <a name="reset_payload_data" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.resetPayloadData"></a>

```python
def reset_payload_data() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.property.payloadDataInput">payload_data_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.property.payloadData">payload_data</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayload">PanoramaApplicationInstanceManifestOverridesPayload</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `payload_data_input`<sup>Optional</sup> <a name="payload_data_input" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.property.payloadDataInput"></a>

```python
payload_data_input: str
```

- *Type:* str

---

##### `payload_data`<sup>Required</sup> <a name="payload_data" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.property.payloadData"></a>

```python
payload_data: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | PanoramaApplicationInstanceManifestOverridesPayload
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayload">PanoramaApplicationInstanceManifestOverridesPayload</a>

---


### PanoramaApplicationInstanceManifestPayloadOutputReference <a name="PanoramaApplicationInstanceManifestPayloadOutputReference" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import panorama_application_instance

panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.resetPayloadData">reset_payload_data</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_payload_data` <a name="reset_payload_data" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.resetPayloadData"></a>

```python
def reset_payload_data() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.property.payloadDataInput">payload_data_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.property.payloadData">payload_data</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayload">PanoramaApplicationInstanceManifestPayload</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `payload_data_input`<sup>Optional</sup> <a name="payload_data_input" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.property.payloadDataInput"></a>

```python
payload_data_input: str
```

- *Type:* str

---

##### `payload_data`<sup>Required</sup> <a name="payload_data" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.property.payloadData"></a>

```python
payload_data: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | PanoramaApplicationInstanceManifestPayload
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayload">PanoramaApplicationInstanceManifestPayload</a>

---


### PanoramaApplicationInstanceTagsList <a name="PanoramaApplicationInstanceTagsList" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import panorama_application_instance

panoramaApplicationInstance.PanoramaApplicationInstanceTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> PanoramaApplicationInstanceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTags">PanoramaApplicationInstanceTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[PanoramaApplicationInstanceTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTags">PanoramaApplicationInstanceTags</a>]

---


### PanoramaApplicationInstanceTagsOutputReference <a name="PanoramaApplicationInstanceTagsOutputReference" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import panorama_application_instance

panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTags">PanoramaApplicationInstanceTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | PanoramaApplicationInstanceTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTags">PanoramaApplicationInstanceTags</a>

---



