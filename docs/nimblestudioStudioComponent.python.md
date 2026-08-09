# `nimblestudioStudioComponent` Submodule <a name="`nimblestudioStudioComponent` Submodule" id="@cdktn/provider-awscc.nimblestudioStudioComponent"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NimblestudioStudioComponent <a name="NimblestudioStudioComponent" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/nimblestudio_studio_component awscc_nimblestudio_studio_component}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.Initializer"></a>

```python
from cdktn_provider_awscc import nimblestudio_studio_component

nimblestudioStudioComponent.NimblestudioStudioComponent(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  studio_id: str,
  type: str,
  configuration: NimblestudioStudioComponentConfiguration = None,
  description: str = None,
  ec2_security_group_ids: typing.List[str] = None,
  initialization_scripts: IResolvable | typing.List[NimblestudioStudioComponentInitializationScripts] = None,
  script_parameters: IResolvable | typing.List[NimblestudioStudioComponentScriptParameters] = None,
  subtype: str = None,
  tags: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/nimblestudio_studio_component#name NimblestudioStudioComponent#name}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.Initializer.parameter.studioId">studio_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/nimblestudio_studio_component#studio_id NimblestudioStudioComponent#studio_id}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.Initializer.parameter.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/nimblestudio_studio_component#type NimblestudioStudioComponent#type}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.Initializer.parameter.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfiguration">NimblestudioStudioComponentConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/nimblestudio_studio_component#configuration NimblestudioStudioComponent#configuration}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/nimblestudio_studio_component#description NimblestudioStudioComponent#description}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.Initializer.parameter.ec2SecurityGroupIds">ec2_security_group_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/nimblestudio_studio_component#ec_2_security_group_ids NimblestudioStudioComponent#ec_2_security_group_ids}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.Initializer.parameter.initializationScripts">initialization_scripts</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScripts">NimblestudioStudioComponentInitializationScripts</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/nimblestudio_studio_component#initialization_scripts NimblestudioStudioComponent#initialization_scripts}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.Initializer.parameter.scriptParameters">script_parameters</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParameters">NimblestudioStudioComponentScriptParameters</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/nimblestudio_studio_component#script_parameters NimblestudioStudioComponent#script_parameters}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.Initializer.parameter.subtype">subtype</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/nimblestudio_studio_component#subtype NimblestudioStudioComponent#subtype}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/nimblestudio_studio_component#tags NimblestudioStudioComponent#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/nimblestudio_studio_component#name NimblestudioStudioComponent#name}.

---

##### `studio_id`<sup>Required</sup> <a name="studio_id" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.Initializer.parameter.studioId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/nimblestudio_studio_component#studio_id NimblestudioStudioComponent#studio_id}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.Initializer.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/nimblestudio_studio_component#type NimblestudioStudioComponent#type}.

---

##### `configuration`<sup>Optional</sup> <a name="configuration" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.Initializer.parameter.configuration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfiguration">NimblestudioStudioComponentConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/nimblestudio_studio_component#configuration NimblestudioStudioComponent#configuration}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/nimblestudio_studio_component#description NimblestudioStudioComponent#description}.

---

##### `ec2_security_group_ids`<sup>Optional</sup> <a name="ec2_security_group_ids" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.Initializer.parameter.ec2SecurityGroupIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/nimblestudio_studio_component#ec_2_security_group_ids NimblestudioStudioComponent#ec_2_security_group_ids}.

---

##### `initialization_scripts`<sup>Optional</sup> <a name="initialization_scripts" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.Initializer.parameter.initializationScripts"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScripts">NimblestudioStudioComponentInitializationScripts</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/nimblestudio_studio_component#initialization_scripts NimblestudioStudioComponent#initialization_scripts}.

---

##### `script_parameters`<sup>Optional</sup> <a name="script_parameters" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.Initializer.parameter.scriptParameters"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParameters">NimblestudioStudioComponentScriptParameters</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/nimblestudio_studio_component#script_parameters NimblestudioStudioComponent#script_parameters}.

---

##### `subtype`<sup>Optional</sup> <a name="subtype" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.Initializer.parameter.subtype"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/nimblestudio_studio_component#subtype NimblestudioStudioComponent#subtype}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/nimblestudio_studio_component#tags NimblestudioStudioComponent#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.putConfiguration">put_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.putInitializationScripts">put_initialization_scripts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.putScriptParameters">put_script_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.resetConfiguration">reset_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.resetEc2SecurityGroupIds">reset_ec2_security_group_ids</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.resetInitializationScripts">reset_initialization_scripts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.resetScriptParameters">reset_script_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.resetSubtype">reset_subtype</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_configuration` <a name="put_configuration" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.putConfiguration"></a>

```python
def put_configuration(
  active_directory_configuration: NimblestudioStudioComponentConfigurationActiveDirectoryConfiguration = None,
  compute_farm_configuration: NimblestudioStudioComponentConfigurationComputeFarmConfiguration = None,
  license_service_configuration: NimblestudioStudioComponentConfigurationLicenseServiceConfiguration = None,
  shared_file_system_configuration: NimblestudioStudioComponentConfigurationSharedFileSystemConfiguration = None
) -> None
```

###### `active_directory_configuration`<sup>Optional</sup> <a name="active_directory_configuration" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.putConfiguration.parameter.activeDirectoryConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfiguration">NimblestudioStudioComponentConfigurationActiveDirectoryConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/nimblestudio_studio_component#active_directory_configuration NimblestudioStudioComponent#active_directory_configuration}.

---

###### `compute_farm_configuration`<sup>Optional</sup> <a name="compute_farm_configuration" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.putConfiguration.parameter.computeFarmConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfiguration">NimblestudioStudioComponentConfigurationComputeFarmConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/nimblestudio_studio_component#compute_farm_configuration NimblestudioStudioComponent#compute_farm_configuration}.

---

###### `license_service_configuration`<sup>Optional</sup> <a name="license_service_configuration" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.putConfiguration.parameter.licenseServiceConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfiguration">NimblestudioStudioComponentConfigurationLicenseServiceConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/nimblestudio_studio_component#license_service_configuration NimblestudioStudioComponent#license_service_configuration}.

---

###### `shared_file_system_configuration`<sup>Optional</sup> <a name="shared_file_system_configuration" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.putConfiguration.parameter.sharedFileSystemConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfiguration">NimblestudioStudioComponentConfigurationSharedFileSystemConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/nimblestudio_studio_component#shared_file_system_configuration NimblestudioStudioComponent#shared_file_system_configuration}.

---

##### `put_initialization_scripts` <a name="put_initialization_scripts" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.putInitializationScripts"></a>

```python
def put_initialization_scripts(
  value: IResolvable | typing.List[NimblestudioStudioComponentInitializationScripts]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.putInitializationScripts.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScripts">NimblestudioStudioComponentInitializationScripts</a>]

---

##### `put_script_parameters` <a name="put_script_parameters" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.putScriptParameters"></a>

```python
def put_script_parameters(
  value: IResolvable | typing.List[NimblestudioStudioComponentScriptParameters]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.putScriptParameters.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParameters">NimblestudioStudioComponentScriptParameters</a>]

---

##### `reset_configuration` <a name="reset_configuration" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.resetConfiguration"></a>

```python
def reset_configuration() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_ec2_security_group_ids` <a name="reset_ec2_security_group_ids" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.resetEc2SecurityGroupIds"></a>

```python
def reset_ec2_security_group_ids() -> None
```

##### `reset_initialization_scripts` <a name="reset_initialization_scripts" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.resetInitializationScripts"></a>

```python
def reset_initialization_scripts() -> None
```

##### `reset_script_parameters` <a name="reset_script_parameters" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.resetScriptParameters"></a>

```python
def reset_script_parameters() -> None
```

##### `reset_subtype` <a name="reset_subtype" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.resetSubtype"></a>

```python
def reset_subtype() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a NimblestudioStudioComponent resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.isConstruct"></a>

```python
from cdktn_provider_awscc import nimblestudio_studio_component

nimblestudioStudioComponent.NimblestudioStudioComponent.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.isTerraformElement"></a>

```python
from cdktn_provider_awscc import nimblestudio_studio_component

nimblestudioStudioComponent.NimblestudioStudioComponent.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.isTerraformResource"></a>

```python
from cdktn_provider_awscc import nimblestudio_studio_component

nimblestudioStudioComponent.NimblestudioStudioComponent.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import nimblestudio_studio_component

nimblestudioStudioComponent.NimblestudioStudioComponent.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a NimblestudioStudioComponent resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the NimblestudioStudioComponent to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing NimblestudioStudioComponent that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/nimblestudio_studio_component#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the NimblestudioStudioComponent to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference">NimblestudioStudioComponentConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.initializationScripts">initialization_scripts</a></code> | <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsList">NimblestudioStudioComponentInitializationScriptsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.scriptParameters">script_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersList">NimblestudioStudioComponentScriptParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.studioComponentId">studio_component_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.configurationInput">configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfiguration">NimblestudioStudioComponentConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.ec2SecurityGroupIdsInput">ec2_security_group_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.initializationScriptsInput">initialization_scripts_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScripts">NimblestudioStudioComponentInitializationScripts</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.scriptParametersInput">script_parameters_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParameters">NimblestudioStudioComponentScriptParameters</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.studioIdInput">studio_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.subtypeInput">subtype_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.ec2SecurityGroupIds">ec2_security_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.studioId">studio_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.subtype">subtype</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.configuration"></a>

```python
configuration: NimblestudioStudioComponentConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference">NimblestudioStudioComponentConfigurationOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `initialization_scripts`<sup>Required</sup> <a name="initialization_scripts" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.initializationScripts"></a>

```python
initialization_scripts: NimblestudioStudioComponentInitializationScriptsList
```

- *Type:* <a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsList">NimblestudioStudioComponentInitializationScriptsList</a>

---

##### `script_parameters`<sup>Required</sup> <a name="script_parameters" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.scriptParameters"></a>

```python
script_parameters: NimblestudioStudioComponentScriptParametersList
```

- *Type:* <a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersList">NimblestudioStudioComponentScriptParametersList</a>

---

##### `studio_component_id`<sup>Required</sup> <a name="studio_component_id" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.studioComponentId"></a>

```python
studio_component_id: str
```

- *Type:* str

---

##### `configuration_input`<sup>Optional</sup> <a name="configuration_input" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.configurationInput"></a>

```python
configuration_input: IResolvable | NimblestudioStudioComponentConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfiguration">NimblestudioStudioComponentConfiguration</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `ec2_security_group_ids_input`<sup>Optional</sup> <a name="ec2_security_group_ids_input" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.ec2SecurityGroupIdsInput"></a>

```python
ec2_security_group_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `initialization_scripts_input`<sup>Optional</sup> <a name="initialization_scripts_input" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.initializationScriptsInput"></a>

```python
initialization_scripts_input: IResolvable | typing.List[NimblestudioStudioComponentInitializationScripts]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScripts">NimblestudioStudioComponentInitializationScripts</a>]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `script_parameters_input`<sup>Optional</sup> <a name="script_parameters_input" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.scriptParametersInput"></a>

```python
script_parameters_input: IResolvable | typing.List[NimblestudioStudioComponentScriptParameters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParameters">NimblestudioStudioComponentScriptParameters</a>]

---

##### `studio_id_input`<sup>Optional</sup> <a name="studio_id_input" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.studioIdInput"></a>

```python
studio_id_input: str
```

- *Type:* str

---

##### `subtype_input`<sup>Optional</sup> <a name="subtype_input" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.subtypeInput"></a>

```python
subtype_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `ec2_security_group_ids`<sup>Required</sup> <a name="ec2_security_group_ids" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.ec2SecurityGroupIds"></a>

```python
ec2_security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `studio_id`<sup>Required</sup> <a name="studio_id" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.studioId"></a>

```python
studio_id: str
```

- *Type:* str

---

##### `subtype`<sup>Required</sup> <a name="subtype" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.subtype"></a>

```python
subtype: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### NimblestudioStudioComponentConfig <a name="NimblestudioStudioComponentConfig" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfig.Initializer"></a>

```python
from cdktn_provider_awscc import nimblestudio_studio_component

nimblestudioStudioComponent.NimblestudioStudioComponentConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  studio_id: str,
  type: str,
  configuration: NimblestudioStudioComponentConfiguration = None,
  description: str = None,
  ec2_security_group_ids: typing.List[str] = None,
  initialization_scripts: IResolvable | typing.List[NimblestudioStudioComponentInitializationScripts] = None,
  script_parameters: IResolvable | typing.List[NimblestudioStudioComponentScriptParameters] = None,
  subtype: str = None,
  tags: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/nimblestudio_studio_component#name NimblestudioStudioComponent#name}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfig.property.studioId">studio_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/nimblestudio_studio_component#studio_id NimblestudioStudioComponent#studio_id}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfig.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/nimblestudio_studio_component#type NimblestudioStudioComponent#type}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfig.property.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfiguration">NimblestudioStudioComponentConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/nimblestudio_studio_component#configuration NimblestudioStudioComponent#configuration}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/nimblestudio_studio_component#description NimblestudioStudioComponent#description}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfig.property.ec2SecurityGroupIds">ec2_security_group_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/nimblestudio_studio_component#ec_2_security_group_ids NimblestudioStudioComponent#ec_2_security_group_ids}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfig.property.initializationScripts">initialization_scripts</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScripts">NimblestudioStudioComponentInitializationScripts</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/nimblestudio_studio_component#initialization_scripts NimblestudioStudioComponent#initialization_scripts}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfig.property.scriptParameters">script_parameters</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParameters">NimblestudioStudioComponentScriptParameters</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/nimblestudio_studio_component#script_parameters NimblestudioStudioComponent#script_parameters}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfig.property.subtype">subtype</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/nimblestudio_studio_component#subtype NimblestudioStudioComponent#subtype}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/nimblestudio_studio_component#tags NimblestudioStudioComponent#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/nimblestudio_studio_component#name NimblestudioStudioComponent#name}.

---

##### `studio_id`<sup>Required</sup> <a name="studio_id" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfig.property.studioId"></a>

```python
studio_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/nimblestudio_studio_component#studio_id NimblestudioStudioComponent#studio_id}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/nimblestudio_studio_component#type NimblestudioStudioComponent#type}.

---

##### `configuration`<sup>Optional</sup> <a name="configuration" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfig.property.configuration"></a>

```python
configuration: NimblestudioStudioComponentConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfiguration">NimblestudioStudioComponentConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/nimblestudio_studio_component#configuration NimblestudioStudioComponent#configuration}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/nimblestudio_studio_component#description NimblestudioStudioComponent#description}.

---

##### `ec2_security_group_ids`<sup>Optional</sup> <a name="ec2_security_group_ids" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfig.property.ec2SecurityGroupIds"></a>

```python
ec2_security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/nimblestudio_studio_component#ec_2_security_group_ids NimblestudioStudioComponent#ec_2_security_group_ids}.

---

##### `initialization_scripts`<sup>Optional</sup> <a name="initialization_scripts" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfig.property.initializationScripts"></a>

```python
initialization_scripts: IResolvable | typing.List[NimblestudioStudioComponentInitializationScripts]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScripts">NimblestudioStudioComponentInitializationScripts</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/nimblestudio_studio_component#initialization_scripts NimblestudioStudioComponent#initialization_scripts}.

---

##### `script_parameters`<sup>Optional</sup> <a name="script_parameters" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfig.property.scriptParameters"></a>

```python
script_parameters: IResolvable | typing.List[NimblestudioStudioComponentScriptParameters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParameters">NimblestudioStudioComponentScriptParameters</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/nimblestudio_studio_component#script_parameters NimblestudioStudioComponent#script_parameters}.

---

##### `subtype`<sup>Optional</sup> <a name="subtype" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfig.property.subtype"></a>

```python
subtype: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/nimblestudio_studio_component#subtype NimblestudioStudioComponent#subtype}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/nimblestudio_studio_component#tags NimblestudioStudioComponent#tags}.

---

### NimblestudioStudioComponentConfiguration <a name="NimblestudioStudioComponentConfiguration" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import nimblestudio_studio_component

nimblestudioStudioComponent.NimblestudioStudioComponentConfiguration(
  active_directory_configuration: NimblestudioStudioComponentConfigurationActiveDirectoryConfiguration = None,
  compute_farm_configuration: NimblestudioStudioComponentConfigurationComputeFarmConfiguration = None,
  license_service_configuration: NimblestudioStudioComponentConfigurationLicenseServiceConfiguration = None,
  shared_file_system_configuration: NimblestudioStudioComponentConfigurationSharedFileSystemConfiguration = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfiguration.property.activeDirectoryConfiguration">active_directory_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfiguration">NimblestudioStudioComponentConfigurationActiveDirectoryConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/nimblestudio_studio_component#active_directory_configuration NimblestudioStudioComponent#active_directory_configuration}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfiguration.property.computeFarmConfiguration">compute_farm_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfiguration">NimblestudioStudioComponentConfigurationComputeFarmConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/nimblestudio_studio_component#compute_farm_configuration NimblestudioStudioComponent#compute_farm_configuration}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfiguration.property.licenseServiceConfiguration">license_service_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfiguration">NimblestudioStudioComponentConfigurationLicenseServiceConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/nimblestudio_studio_component#license_service_configuration NimblestudioStudioComponent#license_service_configuration}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfiguration.property.sharedFileSystemConfiguration">shared_file_system_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfiguration">NimblestudioStudioComponentConfigurationSharedFileSystemConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/nimblestudio_studio_component#shared_file_system_configuration NimblestudioStudioComponent#shared_file_system_configuration}. |

---

##### `active_directory_configuration`<sup>Optional</sup> <a name="active_directory_configuration" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfiguration.property.activeDirectoryConfiguration"></a>

```python
active_directory_configuration: NimblestudioStudioComponentConfigurationActiveDirectoryConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfiguration">NimblestudioStudioComponentConfigurationActiveDirectoryConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/nimblestudio_studio_component#active_directory_configuration NimblestudioStudioComponent#active_directory_configuration}.

---

##### `compute_farm_configuration`<sup>Optional</sup> <a name="compute_farm_configuration" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfiguration.property.computeFarmConfiguration"></a>

```python
compute_farm_configuration: NimblestudioStudioComponentConfigurationComputeFarmConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfiguration">NimblestudioStudioComponentConfigurationComputeFarmConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/nimblestudio_studio_component#compute_farm_configuration NimblestudioStudioComponent#compute_farm_configuration}.

---

##### `license_service_configuration`<sup>Optional</sup> <a name="license_service_configuration" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfiguration.property.licenseServiceConfiguration"></a>

```python
license_service_configuration: NimblestudioStudioComponentConfigurationLicenseServiceConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfiguration">NimblestudioStudioComponentConfigurationLicenseServiceConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/nimblestudio_studio_component#license_service_configuration NimblestudioStudioComponent#license_service_configuration}.

---

##### `shared_file_system_configuration`<sup>Optional</sup> <a name="shared_file_system_configuration" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfiguration.property.sharedFileSystemConfiguration"></a>

```python
shared_file_system_configuration: NimblestudioStudioComponentConfigurationSharedFileSystemConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfiguration">NimblestudioStudioComponentConfigurationSharedFileSystemConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/nimblestudio_studio_component#shared_file_system_configuration NimblestudioStudioComponent#shared_file_system_configuration}.

---

### NimblestudioStudioComponentConfigurationActiveDirectoryConfiguration <a name="NimblestudioStudioComponentConfigurationActiveDirectoryConfiguration" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import nimblestudio_studio_component

nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfiguration(
  computer_attributes: IResolvable | typing.List[NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes] = None,
  directory_id: str = None,
  organizational_unit_distinguished_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfiguration.property.computerAttributes">computer_attributes</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes">NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/nimblestudio_studio_component#computer_attributes NimblestudioStudioComponent#computer_attributes}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfiguration.property.directoryId">directory_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/nimblestudio_studio_component#directory_id NimblestudioStudioComponent#directory_id}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfiguration.property.organizationalUnitDistinguishedName">organizational_unit_distinguished_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/nimblestudio_studio_component#organizational_unit_distinguished_name NimblestudioStudioComponent#organizational_unit_distinguished_name}. |

---

##### `computer_attributes`<sup>Optional</sup> <a name="computer_attributes" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfiguration.property.computerAttributes"></a>

```python
computer_attributes: IResolvable | typing.List[NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes">NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/nimblestudio_studio_component#computer_attributes NimblestudioStudioComponent#computer_attributes}.

---

##### `directory_id`<sup>Optional</sup> <a name="directory_id" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfiguration.property.directoryId"></a>

```python
directory_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/nimblestudio_studio_component#directory_id NimblestudioStudioComponent#directory_id}.

---

##### `organizational_unit_distinguished_name`<sup>Optional</sup> <a name="organizational_unit_distinguished_name" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfiguration.property.organizationalUnitDistinguishedName"></a>

```python
organizational_unit_distinguished_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/nimblestudio_studio_component#organizational_unit_distinguished_name NimblestudioStudioComponent#organizational_unit_distinguished_name}.

---

### NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes <a name="NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes.Initializer"></a>

```python
from cdktn_provider_awscc import nimblestudio_studio_component

nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes(
  name: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/nimblestudio_studio_component#name NimblestudioStudioComponent#name}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/nimblestudio_studio_component#value NimblestudioStudioComponent#value}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/nimblestudio_studio_component#name NimblestudioStudioComponent#name}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/nimblestudio_studio_component#value NimblestudioStudioComponent#value}.

---

### NimblestudioStudioComponentConfigurationComputeFarmConfiguration <a name="NimblestudioStudioComponentConfigurationComputeFarmConfiguration" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import nimblestudio_studio_component

nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfiguration(
  active_directory_user: str = None,
  endpoint: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfiguration.property.activeDirectoryUser">active_directory_user</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/nimblestudio_studio_component#active_directory_user NimblestudioStudioComponent#active_directory_user}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfiguration.property.endpoint">endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/nimblestudio_studio_component#endpoint NimblestudioStudioComponent#endpoint}. |

---

##### `active_directory_user`<sup>Optional</sup> <a name="active_directory_user" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfiguration.property.activeDirectoryUser"></a>

```python
active_directory_user: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/nimblestudio_studio_component#active_directory_user NimblestudioStudioComponent#active_directory_user}.

---

##### `endpoint`<sup>Optional</sup> <a name="endpoint" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfiguration.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/nimblestudio_studio_component#endpoint NimblestudioStudioComponent#endpoint}.

---

### NimblestudioStudioComponentConfigurationLicenseServiceConfiguration <a name="NimblestudioStudioComponentConfigurationLicenseServiceConfiguration" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import nimblestudio_studio_component

nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfiguration(
  endpoint: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfiguration.property.endpoint">endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/nimblestudio_studio_component#endpoint NimblestudioStudioComponent#endpoint}. |

---

##### `endpoint`<sup>Optional</sup> <a name="endpoint" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfiguration.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/nimblestudio_studio_component#endpoint NimblestudioStudioComponent#endpoint}.

---

### NimblestudioStudioComponentConfigurationSharedFileSystemConfiguration <a name="NimblestudioStudioComponentConfigurationSharedFileSystemConfiguration" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import nimblestudio_studio_component

nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfiguration(
  endpoint: str = None,
  file_system_id: str = None,
  linux_mount_point: str = None,
  share_name: str = None,
  windows_mount_drive: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfiguration.property.endpoint">endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/nimblestudio_studio_component#endpoint NimblestudioStudioComponent#endpoint}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfiguration.property.fileSystemId">file_system_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/nimblestudio_studio_component#file_system_id NimblestudioStudioComponent#file_system_id}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfiguration.property.linuxMountPoint">linux_mount_point</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/nimblestudio_studio_component#linux_mount_point NimblestudioStudioComponent#linux_mount_point}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfiguration.property.shareName">share_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/nimblestudio_studio_component#share_name NimblestudioStudioComponent#share_name}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfiguration.property.windowsMountDrive">windows_mount_drive</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/nimblestudio_studio_component#windows_mount_drive NimblestudioStudioComponent#windows_mount_drive}. |

---

##### `endpoint`<sup>Optional</sup> <a name="endpoint" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfiguration.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/nimblestudio_studio_component#endpoint NimblestudioStudioComponent#endpoint}.

---

##### `file_system_id`<sup>Optional</sup> <a name="file_system_id" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfiguration.property.fileSystemId"></a>

```python
file_system_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/nimblestudio_studio_component#file_system_id NimblestudioStudioComponent#file_system_id}.

---

##### `linux_mount_point`<sup>Optional</sup> <a name="linux_mount_point" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfiguration.property.linuxMountPoint"></a>

```python
linux_mount_point: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/nimblestudio_studio_component#linux_mount_point NimblestudioStudioComponent#linux_mount_point}.

---

##### `share_name`<sup>Optional</sup> <a name="share_name" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfiguration.property.shareName"></a>

```python
share_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/nimblestudio_studio_component#share_name NimblestudioStudioComponent#share_name}.

---

##### `windows_mount_drive`<sup>Optional</sup> <a name="windows_mount_drive" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfiguration.property.windowsMountDrive"></a>

```python
windows_mount_drive: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/nimblestudio_studio_component#windows_mount_drive NimblestudioStudioComponent#windows_mount_drive}.

---

### NimblestudioStudioComponentInitializationScripts <a name="NimblestudioStudioComponentInitializationScripts" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScripts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScripts.Initializer"></a>

```python
from cdktn_provider_awscc import nimblestudio_studio_component

nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScripts(
  launch_profile_protocol_version: str = None,
  platform: str = None,
  run_context: str = None,
  script: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScripts.property.launchProfileProtocolVersion">launch_profile_protocol_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/nimblestudio_studio_component#launch_profile_protocol_version NimblestudioStudioComponent#launch_profile_protocol_version}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScripts.property.platform">platform</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/nimblestudio_studio_component#platform NimblestudioStudioComponent#platform}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScripts.property.runContext">run_context</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/nimblestudio_studio_component#run_context NimblestudioStudioComponent#run_context}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScripts.property.script">script</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/nimblestudio_studio_component#script NimblestudioStudioComponent#script}. |

---

##### `launch_profile_protocol_version`<sup>Optional</sup> <a name="launch_profile_protocol_version" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScripts.property.launchProfileProtocolVersion"></a>

```python
launch_profile_protocol_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/nimblestudio_studio_component#launch_profile_protocol_version NimblestudioStudioComponent#launch_profile_protocol_version}.

---

##### `platform`<sup>Optional</sup> <a name="platform" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScripts.property.platform"></a>

```python
platform: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/nimblestudio_studio_component#platform NimblestudioStudioComponent#platform}.

---

##### `run_context`<sup>Optional</sup> <a name="run_context" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScripts.property.runContext"></a>

```python
run_context: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/nimblestudio_studio_component#run_context NimblestudioStudioComponent#run_context}.

---

##### `script`<sup>Optional</sup> <a name="script" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScripts.property.script"></a>

```python
script: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/nimblestudio_studio_component#script NimblestudioStudioComponent#script}.

---

### NimblestudioStudioComponentScriptParameters <a name="NimblestudioStudioComponentScriptParameters" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParameters.Initializer"></a>

```python
from cdktn_provider_awscc import nimblestudio_studio_component

nimblestudioStudioComponent.NimblestudioStudioComponentScriptParameters(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParameters.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/nimblestudio_studio_component#key NimblestudioStudioComponent#key}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParameters.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/nimblestudio_studio_component#value NimblestudioStudioComponent#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParameters.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/nimblestudio_studio_component#key NimblestudioStudioComponent#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParameters.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/nimblestudio_studio_component#value NimblestudioStudioComponent#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList <a name="NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.Initializer"></a>

```python
from cdktn_provider_awscc import nimblestudio_studio_component

nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes">NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes">NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes</a>]

---


### NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference <a name="NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import nimblestudio_studio_component

nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes">NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes">NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes</a>

---


### NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference <a name="NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import nimblestudio_studio_component

nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.putComputerAttributes">put_computer_attributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.resetComputerAttributes">reset_computer_attributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.resetDirectoryId">reset_directory_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.resetOrganizationalUnitDistinguishedName">reset_organizational_unit_distinguished_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_computer_attributes` <a name="put_computer_attributes" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.putComputerAttributes"></a>

```python
def put_computer_attributes(
  value: IResolvable | typing.List[NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.putComputerAttributes.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes">NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes</a>]

---

##### `reset_computer_attributes` <a name="reset_computer_attributes" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.resetComputerAttributes"></a>

```python
def reset_computer_attributes() -> None
```

##### `reset_directory_id` <a name="reset_directory_id" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.resetDirectoryId"></a>

```python
def reset_directory_id() -> None
```

##### `reset_organizational_unit_distinguished_name` <a name="reset_organizational_unit_distinguished_name" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.resetOrganizationalUnitDistinguishedName"></a>

```python
def reset_organizational_unit_distinguished_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.property.computerAttributes">computer_attributes</a></code> | <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList">NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.property.computerAttributesInput">computer_attributes_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes">NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.property.directoryIdInput">directory_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.property.organizationalUnitDistinguishedNameInput">organizational_unit_distinguished_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.property.directoryId">directory_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.property.organizationalUnitDistinguishedName">organizational_unit_distinguished_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfiguration">NimblestudioStudioComponentConfigurationActiveDirectoryConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `computer_attributes`<sup>Required</sup> <a name="computer_attributes" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.property.computerAttributes"></a>

```python
computer_attributes: NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList
```

- *Type:* <a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList">NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList</a>

---

##### `computer_attributes_input`<sup>Optional</sup> <a name="computer_attributes_input" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.property.computerAttributesInput"></a>

```python
computer_attributes_input: IResolvable | typing.List[NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes">NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes</a>]

---

##### `directory_id_input`<sup>Optional</sup> <a name="directory_id_input" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.property.directoryIdInput"></a>

```python
directory_id_input: str
```

- *Type:* str

---

##### `organizational_unit_distinguished_name_input`<sup>Optional</sup> <a name="organizational_unit_distinguished_name_input" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.property.organizationalUnitDistinguishedNameInput"></a>

```python
organizational_unit_distinguished_name_input: str
```

- *Type:* str

---

##### `directory_id`<sup>Required</sup> <a name="directory_id" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.property.directoryId"></a>

```python
directory_id: str
```

- *Type:* str

---

##### `organizational_unit_distinguished_name`<sup>Required</sup> <a name="organizational_unit_distinguished_name" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.property.organizationalUnitDistinguishedName"></a>

```python
organizational_unit_distinguished_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | NimblestudioStudioComponentConfigurationActiveDirectoryConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfiguration">NimblestudioStudioComponentConfigurationActiveDirectoryConfiguration</a>

---


### NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference <a name="NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import nimblestudio_studio_component

nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.resetActiveDirectoryUser">reset_active_directory_user</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.resetEndpoint">reset_endpoint</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_active_directory_user` <a name="reset_active_directory_user" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.resetActiveDirectoryUser"></a>

```python
def reset_active_directory_user() -> None
```

##### `reset_endpoint` <a name="reset_endpoint" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.resetEndpoint"></a>

```python
def reset_endpoint() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.property.activeDirectoryUserInput">active_directory_user_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.property.endpointInput">endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.property.activeDirectoryUser">active_directory_user</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.property.endpoint">endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfiguration">NimblestudioStudioComponentConfigurationComputeFarmConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `active_directory_user_input`<sup>Optional</sup> <a name="active_directory_user_input" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.property.activeDirectoryUserInput"></a>

```python
active_directory_user_input: str
```

- *Type:* str

---

##### `endpoint_input`<sup>Optional</sup> <a name="endpoint_input" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.property.endpointInput"></a>

```python
endpoint_input: str
```

- *Type:* str

---

##### `active_directory_user`<sup>Required</sup> <a name="active_directory_user" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.property.activeDirectoryUser"></a>

```python
active_directory_user: str
```

- *Type:* str

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | NimblestudioStudioComponentConfigurationComputeFarmConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfiguration">NimblestudioStudioComponentConfigurationComputeFarmConfiguration</a>

---


### NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference <a name="NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import nimblestudio_studio_component

nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.resetEndpoint">reset_endpoint</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_endpoint` <a name="reset_endpoint" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.resetEndpoint"></a>

```python
def reset_endpoint() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.property.endpointInput">endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.property.endpoint">endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfiguration">NimblestudioStudioComponentConfigurationLicenseServiceConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `endpoint_input`<sup>Optional</sup> <a name="endpoint_input" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.property.endpointInput"></a>

```python
endpoint_input: str
```

- *Type:* str

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | NimblestudioStudioComponentConfigurationLicenseServiceConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfiguration">NimblestudioStudioComponentConfigurationLicenseServiceConfiguration</a>

---


### NimblestudioStudioComponentConfigurationOutputReference <a name="NimblestudioStudioComponentConfigurationOutputReference" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import nimblestudio_studio_component

nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.putActiveDirectoryConfiguration">put_active_directory_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.putComputeFarmConfiguration">put_compute_farm_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.putLicenseServiceConfiguration">put_license_service_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.putSharedFileSystemConfiguration">put_shared_file_system_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.resetActiveDirectoryConfiguration">reset_active_directory_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.resetComputeFarmConfiguration">reset_compute_farm_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.resetLicenseServiceConfiguration">reset_license_service_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.resetSharedFileSystemConfiguration">reset_shared_file_system_configuration</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_active_directory_configuration` <a name="put_active_directory_configuration" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.putActiveDirectoryConfiguration"></a>

```python
def put_active_directory_configuration(
  computer_attributes: IResolvable | typing.List[NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes] = None,
  directory_id: str = None,
  organizational_unit_distinguished_name: str = None
) -> None
```

###### `computer_attributes`<sup>Optional</sup> <a name="computer_attributes" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.putActiveDirectoryConfiguration.parameter.computerAttributes"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes">NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/nimblestudio_studio_component#computer_attributes NimblestudioStudioComponent#computer_attributes}.

---

###### `directory_id`<sup>Optional</sup> <a name="directory_id" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.putActiveDirectoryConfiguration.parameter.directoryId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/nimblestudio_studio_component#directory_id NimblestudioStudioComponent#directory_id}.

---

###### `organizational_unit_distinguished_name`<sup>Optional</sup> <a name="organizational_unit_distinguished_name" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.putActiveDirectoryConfiguration.parameter.organizationalUnitDistinguishedName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/nimblestudio_studio_component#organizational_unit_distinguished_name NimblestudioStudioComponent#organizational_unit_distinguished_name}.

---

##### `put_compute_farm_configuration` <a name="put_compute_farm_configuration" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.putComputeFarmConfiguration"></a>

```python
def put_compute_farm_configuration(
  active_directory_user: str = None,
  endpoint: str = None
) -> None
```

###### `active_directory_user`<sup>Optional</sup> <a name="active_directory_user" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.putComputeFarmConfiguration.parameter.activeDirectoryUser"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/nimblestudio_studio_component#active_directory_user NimblestudioStudioComponent#active_directory_user}.

---

###### `endpoint`<sup>Optional</sup> <a name="endpoint" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.putComputeFarmConfiguration.parameter.endpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/nimblestudio_studio_component#endpoint NimblestudioStudioComponent#endpoint}.

---

##### `put_license_service_configuration` <a name="put_license_service_configuration" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.putLicenseServiceConfiguration"></a>

```python
def put_license_service_configuration(
  endpoint: str = None
) -> None
```

###### `endpoint`<sup>Optional</sup> <a name="endpoint" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.putLicenseServiceConfiguration.parameter.endpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/nimblestudio_studio_component#endpoint NimblestudioStudioComponent#endpoint}.

---

##### `put_shared_file_system_configuration` <a name="put_shared_file_system_configuration" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.putSharedFileSystemConfiguration"></a>

```python
def put_shared_file_system_configuration(
  endpoint: str = None,
  file_system_id: str = None,
  linux_mount_point: str = None,
  share_name: str = None,
  windows_mount_drive: str = None
) -> None
```

###### `endpoint`<sup>Optional</sup> <a name="endpoint" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.putSharedFileSystemConfiguration.parameter.endpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/nimblestudio_studio_component#endpoint NimblestudioStudioComponent#endpoint}.

---

###### `file_system_id`<sup>Optional</sup> <a name="file_system_id" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.putSharedFileSystemConfiguration.parameter.fileSystemId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/nimblestudio_studio_component#file_system_id NimblestudioStudioComponent#file_system_id}.

---

###### `linux_mount_point`<sup>Optional</sup> <a name="linux_mount_point" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.putSharedFileSystemConfiguration.parameter.linuxMountPoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/nimblestudio_studio_component#linux_mount_point NimblestudioStudioComponent#linux_mount_point}.

---

###### `share_name`<sup>Optional</sup> <a name="share_name" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.putSharedFileSystemConfiguration.parameter.shareName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/nimblestudio_studio_component#share_name NimblestudioStudioComponent#share_name}.

---

###### `windows_mount_drive`<sup>Optional</sup> <a name="windows_mount_drive" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.putSharedFileSystemConfiguration.parameter.windowsMountDrive"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/nimblestudio_studio_component#windows_mount_drive NimblestudioStudioComponent#windows_mount_drive}.

---

##### `reset_active_directory_configuration` <a name="reset_active_directory_configuration" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.resetActiveDirectoryConfiguration"></a>

```python
def reset_active_directory_configuration() -> None
```

##### `reset_compute_farm_configuration` <a name="reset_compute_farm_configuration" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.resetComputeFarmConfiguration"></a>

```python
def reset_compute_farm_configuration() -> None
```

##### `reset_license_service_configuration` <a name="reset_license_service_configuration" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.resetLicenseServiceConfiguration"></a>

```python
def reset_license_service_configuration() -> None
```

##### `reset_shared_file_system_configuration` <a name="reset_shared_file_system_configuration" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.resetSharedFileSystemConfiguration"></a>

```python
def reset_shared_file_system_configuration() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.property.activeDirectoryConfiguration">active_directory_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference">NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.property.computeFarmConfiguration">compute_farm_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference">NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.property.licenseServiceConfiguration">license_service_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference">NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.property.sharedFileSystemConfiguration">shared_file_system_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference">NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.property.activeDirectoryConfigurationInput">active_directory_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfiguration">NimblestudioStudioComponentConfigurationActiveDirectoryConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.property.computeFarmConfigurationInput">compute_farm_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfiguration">NimblestudioStudioComponentConfigurationComputeFarmConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.property.licenseServiceConfigurationInput">license_service_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfiguration">NimblestudioStudioComponentConfigurationLicenseServiceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.property.sharedFileSystemConfigurationInput">shared_file_system_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfiguration">NimblestudioStudioComponentConfigurationSharedFileSystemConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfiguration">NimblestudioStudioComponentConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `active_directory_configuration`<sup>Required</sup> <a name="active_directory_configuration" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.property.activeDirectoryConfiguration"></a>

```python
active_directory_configuration: NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference">NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference</a>

---

##### `compute_farm_configuration`<sup>Required</sup> <a name="compute_farm_configuration" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.property.computeFarmConfiguration"></a>

```python
compute_farm_configuration: NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference">NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference</a>

---

##### `license_service_configuration`<sup>Required</sup> <a name="license_service_configuration" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.property.licenseServiceConfiguration"></a>

```python
license_service_configuration: NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference">NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference</a>

---

##### `shared_file_system_configuration`<sup>Required</sup> <a name="shared_file_system_configuration" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.property.sharedFileSystemConfiguration"></a>

```python
shared_file_system_configuration: NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference">NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference</a>

---

##### `active_directory_configuration_input`<sup>Optional</sup> <a name="active_directory_configuration_input" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.property.activeDirectoryConfigurationInput"></a>

```python
active_directory_configuration_input: IResolvable | NimblestudioStudioComponentConfigurationActiveDirectoryConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfiguration">NimblestudioStudioComponentConfigurationActiveDirectoryConfiguration</a>

---

##### `compute_farm_configuration_input`<sup>Optional</sup> <a name="compute_farm_configuration_input" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.property.computeFarmConfigurationInput"></a>

```python
compute_farm_configuration_input: IResolvable | NimblestudioStudioComponentConfigurationComputeFarmConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfiguration">NimblestudioStudioComponentConfigurationComputeFarmConfiguration</a>

---

##### `license_service_configuration_input`<sup>Optional</sup> <a name="license_service_configuration_input" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.property.licenseServiceConfigurationInput"></a>

```python
license_service_configuration_input: IResolvable | NimblestudioStudioComponentConfigurationLicenseServiceConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfiguration">NimblestudioStudioComponentConfigurationLicenseServiceConfiguration</a>

---

##### `shared_file_system_configuration_input`<sup>Optional</sup> <a name="shared_file_system_configuration_input" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.property.sharedFileSystemConfigurationInput"></a>

```python
shared_file_system_configuration_input: IResolvable | NimblestudioStudioComponentConfigurationSharedFileSystemConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfiguration">NimblestudioStudioComponentConfigurationSharedFileSystemConfiguration</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | NimblestudioStudioComponentConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfiguration">NimblestudioStudioComponentConfiguration</a>

---


### NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference <a name="NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import nimblestudio_studio_component

nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.resetEndpoint">reset_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.resetFileSystemId">reset_file_system_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.resetLinuxMountPoint">reset_linux_mount_point</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.resetShareName">reset_share_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.resetWindowsMountDrive">reset_windows_mount_drive</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_endpoint` <a name="reset_endpoint" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.resetEndpoint"></a>

```python
def reset_endpoint() -> None
```

##### `reset_file_system_id` <a name="reset_file_system_id" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.resetFileSystemId"></a>

```python
def reset_file_system_id() -> None
```

##### `reset_linux_mount_point` <a name="reset_linux_mount_point" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.resetLinuxMountPoint"></a>

```python
def reset_linux_mount_point() -> None
```

##### `reset_share_name` <a name="reset_share_name" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.resetShareName"></a>

```python
def reset_share_name() -> None
```

##### `reset_windows_mount_drive` <a name="reset_windows_mount_drive" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.resetWindowsMountDrive"></a>

```python
def reset_windows_mount_drive() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.property.endpointInput">endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.property.fileSystemIdInput">file_system_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.property.linuxMountPointInput">linux_mount_point_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.property.shareNameInput">share_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.property.windowsMountDriveInput">windows_mount_drive_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.property.endpoint">endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.property.fileSystemId">file_system_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.property.linuxMountPoint">linux_mount_point</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.property.shareName">share_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.property.windowsMountDrive">windows_mount_drive</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfiguration">NimblestudioStudioComponentConfigurationSharedFileSystemConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `endpoint_input`<sup>Optional</sup> <a name="endpoint_input" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.property.endpointInput"></a>

```python
endpoint_input: str
```

- *Type:* str

---

##### `file_system_id_input`<sup>Optional</sup> <a name="file_system_id_input" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.property.fileSystemIdInput"></a>

```python
file_system_id_input: str
```

- *Type:* str

---

##### `linux_mount_point_input`<sup>Optional</sup> <a name="linux_mount_point_input" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.property.linuxMountPointInput"></a>

```python
linux_mount_point_input: str
```

- *Type:* str

---

##### `share_name_input`<sup>Optional</sup> <a name="share_name_input" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.property.shareNameInput"></a>

```python
share_name_input: str
```

- *Type:* str

---

##### `windows_mount_drive_input`<sup>Optional</sup> <a name="windows_mount_drive_input" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.property.windowsMountDriveInput"></a>

```python
windows_mount_drive_input: str
```

- *Type:* str

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

---

##### `file_system_id`<sup>Required</sup> <a name="file_system_id" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.property.fileSystemId"></a>

```python
file_system_id: str
```

- *Type:* str

---

##### `linux_mount_point`<sup>Required</sup> <a name="linux_mount_point" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.property.linuxMountPoint"></a>

```python
linux_mount_point: str
```

- *Type:* str

---

##### `share_name`<sup>Required</sup> <a name="share_name" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.property.shareName"></a>

```python
share_name: str
```

- *Type:* str

---

##### `windows_mount_drive`<sup>Required</sup> <a name="windows_mount_drive" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.property.windowsMountDrive"></a>

```python
windows_mount_drive: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | NimblestudioStudioComponentConfigurationSharedFileSystemConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfiguration">NimblestudioStudioComponentConfigurationSharedFileSystemConfiguration</a>

---


### NimblestudioStudioComponentInitializationScriptsList <a name="NimblestudioStudioComponentInitializationScriptsList" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsList.Initializer"></a>

```python
from cdktn_provider_awscc import nimblestudio_studio_component

nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> NimblestudioStudioComponentInitializationScriptsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScripts">NimblestudioStudioComponentInitializationScripts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[NimblestudioStudioComponentInitializationScripts]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScripts">NimblestudioStudioComponentInitializationScripts</a>]

---


### NimblestudioStudioComponentInitializationScriptsOutputReference <a name="NimblestudioStudioComponentInitializationScriptsOutputReference" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import nimblestudio_studio_component

nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.resetLaunchProfileProtocolVersion">reset_launch_profile_protocol_version</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.resetPlatform">reset_platform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.resetRunContext">reset_run_context</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.resetScript">reset_script</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_launch_profile_protocol_version` <a name="reset_launch_profile_protocol_version" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.resetLaunchProfileProtocolVersion"></a>

```python
def reset_launch_profile_protocol_version() -> None
```

##### `reset_platform` <a name="reset_platform" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.resetPlatform"></a>

```python
def reset_platform() -> None
```

##### `reset_run_context` <a name="reset_run_context" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.resetRunContext"></a>

```python
def reset_run_context() -> None
```

##### `reset_script` <a name="reset_script" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.resetScript"></a>

```python
def reset_script() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.property.launchProfileProtocolVersionInput">launch_profile_protocol_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.property.platformInput">platform_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.property.runContextInput">run_context_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.property.scriptInput">script_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.property.launchProfileProtocolVersion">launch_profile_protocol_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.property.platform">platform</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.property.runContext">run_context</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.property.script">script</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScripts">NimblestudioStudioComponentInitializationScripts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `launch_profile_protocol_version_input`<sup>Optional</sup> <a name="launch_profile_protocol_version_input" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.property.launchProfileProtocolVersionInput"></a>

```python
launch_profile_protocol_version_input: str
```

- *Type:* str

---

##### `platform_input`<sup>Optional</sup> <a name="platform_input" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.property.platformInput"></a>

```python
platform_input: str
```

- *Type:* str

---

##### `run_context_input`<sup>Optional</sup> <a name="run_context_input" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.property.runContextInput"></a>

```python
run_context_input: str
```

- *Type:* str

---

##### `script_input`<sup>Optional</sup> <a name="script_input" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.property.scriptInput"></a>

```python
script_input: str
```

- *Type:* str

---

##### `launch_profile_protocol_version`<sup>Required</sup> <a name="launch_profile_protocol_version" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.property.launchProfileProtocolVersion"></a>

```python
launch_profile_protocol_version: str
```

- *Type:* str

---

##### `platform`<sup>Required</sup> <a name="platform" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.property.platform"></a>

```python
platform: str
```

- *Type:* str

---

##### `run_context`<sup>Required</sup> <a name="run_context" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.property.runContext"></a>

```python
run_context: str
```

- *Type:* str

---

##### `script`<sup>Required</sup> <a name="script" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.property.script"></a>

```python
script: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | NimblestudioStudioComponentInitializationScripts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScripts">NimblestudioStudioComponentInitializationScripts</a>

---


### NimblestudioStudioComponentScriptParametersList <a name="NimblestudioStudioComponentScriptParametersList" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersList.Initializer"></a>

```python
from cdktn_provider_awscc import nimblestudio_studio_component

nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> NimblestudioStudioComponentScriptParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParameters">NimblestudioStudioComponentScriptParameters</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[NimblestudioStudioComponentScriptParameters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParameters">NimblestudioStudioComponentScriptParameters</a>]

---


### NimblestudioStudioComponentScriptParametersOutputReference <a name="NimblestudioStudioComponentScriptParametersOutputReference" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import nimblestudio_studio_component

nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParameters">NimblestudioStudioComponentScriptParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | NimblestudioStudioComponentScriptParameters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParameters">NimblestudioStudioComponentScriptParameters</a>

---



