# `entityresolutionIdNamespace` Submodule <a name="`entityresolutionIdNamespace` Submodule" id="@cdktn/provider-awscc.entityresolutionIdNamespace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EntityresolutionIdNamespace <a name="EntityresolutionIdNamespace" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_id_namespace awscc_entityresolution_id_namespace}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.Initializer"></a>

```python
from cdktn_provider_awscc import entityresolution_id_namespace

entityresolutionIdNamespace.EntityresolutionIdNamespace(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  id_namespace_name: str,
  type: str,
  description: str = None,
  id_mapping_workflow_properties: IResolvable | typing.List[EntityresolutionIdNamespaceIdMappingWorkflowProperties] = None,
  input_source_config: IResolvable | typing.List[EntityresolutionIdNamespaceInputSourceConfig] = None,
  role_arn: str = None,
  tags: IResolvable | typing.List[EntityresolutionIdNamespaceTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.Initializer.parameter.idNamespaceName">id_namespace_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_id_namespace#id_namespace_name EntityresolutionIdNamespace#id_namespace_name}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.Initializer.parameter.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_id_namespace#type EntityresolutionIdNamespace#type}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_id_namespace#description EntityresolutionIdNamespace#description}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.Initializer.parameter.idMappingWorkflowProperties">id_mapping_workflow_properties</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowProperties">EntityresolutionIdNamespaceIdMappingWorkflowProperties</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_id_namespace#id_mapping_workflow_properties EntityresolutionIdNamespace#id_mapping_workflow_properties}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.Initializer.parameter.inputSourceConfig">input_source_config</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfig">EntityresolutionIdNamespaceInputSourceConfig</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_id_namespace#input_source_config EntityresolutionIdNamespace#input_source_config}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.Initializer.parameter.roleArn">role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_id_namespace#role_arn EntityresolutionIdNamespace#role_arn}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTags">EntityresolutionIdNamespaceTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_id_namespace#tags EntityresolutionIdNamespace#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id_namespace_name`<sup>Required</sup> <a name="id_namespace_name" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.Initializer.parameter.idNamespaceName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_id_namespace#id_namespace_name EntityresolutionIdNamespace#id_namespace_name}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.Initializer.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_id_namespace#type EntityresolutionIdNamespace#type}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_id_namespace#description EntityresolutionIdNamespace#description}.

---

##### `id_mapping_workflow_properties`<sup>Optional</sup> <a name="id_mapping_workflow_properties" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.Initializer.parameter.idMappingWorkflowProperties"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowProperties">EntityresolutionIdNamespaceIdMappingWorkflowProperties</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_id_namespace#id_mapping_workflow_properties EntityresolutionIdNamespace#id_mapping_workflow_properties}.

---

##### `input_source_config`<sup>Optional</sup> <a name="input_source_config" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.Initializer.parameter.inputSourceConfig"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfig">EntityresolutionIdNamespaceInputSourceConfig</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_id_namespace#input_source_config EntityresolutionIdNamespace#input_source_config}.

---

##### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.Initializer.parameter.roleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_id_namespace#role_arn EntityresolutionIdNamespace#role_arn}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTags">EntityresolutionIdNamespaceTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_id_namespace#tags EntityresolutionIdNamespace#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.putIdMappingWorkflowProperties">put_id_mapping_workflow_properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.putInputSourceConfig">put_input_source_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.resetIdMappingWorkflowProperties">reset_id_mapping_workflow_properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.resetInputSourceConfig">reset_input_source_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.resetRoleArn">reset_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_id_mapping_workflow_properties` <a name="put_id_mapping_workflow_properties" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.putIdMappingWorkflowProperties"></a>

```python
def put_id_mapping_workflow_properties(
  value: IResolvable | typing.List[EntityresolutionIdNamespaceIdMappingWorkflowProperties]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.putIdMappingWorkflowProperties.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowProperties">EntityresolutionIdNamespaceIdMappingWorkflowProperties</a>]

---

##### `put_input_source_config` <a name="put_input_source_config" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.putInputSourceConfig"></a>

```python
def put_input_source_config(
  value: IResolvable | typing.List[EntityresolutionIdNamespaceInputSourceConfig]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.putInputSourceConfig.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfig">EntityresolutionIdNamespaceInputSourceConfig</a>]

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[EntityresolutionIdNamespaceTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTags">EntityresolutionIdNamespaceTags</a>]

---

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id_mapping_workflow_properties` <a name="reset_id_mapping_workflow_properties" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.resetIdMappingWorkflowProperties"></a>

```python
def reset_id_mapping_workflow_properties() -> None
```

##### `reset_input_source_config` <a name="reset_input_source_config" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.resetInputSourceConfig"></a>

```python
def reset_input_source_config() -> None
```

##### `reset_role_arn` <a name="reset_role_arn" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.resetRoleArn"></a>

```python
def reset_role_arn() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a EntityresolutionIdNamespace resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.isConstruct"></a>

```python
from cdktn_provider_awscc import entityresolution_id_namespace

entityresolutionIdNamespace.EntityresolutionIdNamespace.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.isTerraformElement"></a>

```python
from cdktn_provider_awscc import entityresolution_id_namespace

entityresolutionIdNamespace.EntityresolutionIdNamespace.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.isTerraformResource"></a>

```python
from cdktn_provider_awscc import entityresolution_id_namespace

entityresolutionIdNamespace.EntityresolutionIdNamespace.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import entityresolution_id_namespace

entityresolutionIdNamespace.EntityresolutionIdNamespace.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a EntityresolutionIdNamespace resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the EntityresolutionIdNamespace to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing EntityresolutionIdNamespace that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_id_namespace#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the EntityresolutionIdNamespace to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.property.idMappingWorkflowProperties">id_mapping_workflow_properties</a></code> | <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesList">EntityresolutionIdNamespaceIdMappingWorkflowPropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.property.idNamespaceArn">id_namespace_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.property.inputSourceConfig">input_source_config</a></code> | <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigList">EntityresolutionIdNamespaceInputSourceConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsList">EntityresolutionIdNamespaceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.property.idMappingWorkflowPropertiesInput">id_mapping_workflow_properties_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowProperties">EntityresolutionIdNamespaceIdMappingWorkflowProperties</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.property.idNamespaceNameInput">id_namespace_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.property.inputSourceConfigInput">input_source_config_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfig">EntityresolutionIdNamespaceInputSourceConfig</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTags">EntityresolutionIdNamespaceTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.property.idNamespaceName">id_namespace_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `id_mapping_workflow_properties`<sup>Required</sup> <a name="id_mapping_workflow_properties" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.property.idMappingWorkflowProperties"></a>

```python
id_mapping_workflow_properties: EntityresolutionIdNamespaceIdMappingWorkflowPropertiesList
```

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesList">EntityresolutionIdNamespaceIdMappingWorkflowPropertiesList</a>

---

##### `id_namespace_arn`<sup>Required</sup> <a name="id_namespace_arn" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.property.idNamespaceArn"></a>

```python
id_namespace_arn: str
```

- *Type:* str

---

##### `input_source_config`<sup>Required</sup> <a name="input_source_config" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.property.inputSourceConfig"></a>

```python
input_source_config: EntityresolutionIdNamespaceInputSourceConfigList
```

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigList">EntityresolutionIdNamespaceInputSourceConfigList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.property.tags"></a>

```python
tags: EntityresolutionIdNamespaceTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsList">EntityresolutionIdNamespaceTagsList</a>

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_mapping_workflow_properties_input`<sup>Optional</sup> <a name="id_mapping_workflow_properties_input" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.property.idMappingWorkflowPropertiesInput"></a>

```python
id_mapping_workflow_properties_input: IResolvable | typing.List[EntityresolutionIdNamespaceIdMappingWorkflowProperties]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowProperties">EntityresolutionIdNamespaceIdMappingWorkflowProperties</a>]

---

##### `id_namespace_name_input`<sup>Optional</sup> <a name="id_namespace_name_input" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.property.idNamespaceNameInput"></a>

```python
id_namespace_name_input: str
```

- *Type:* str

---

##### `input_source_config_input`<sup>Optional</sup> <a name="input_source_config_input" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.property.inputSourceConfigInput"></a>

```python
input_source_config_input: IResolvable | typing.List[EntityresolutionIdNamespaceInputSourceConfig]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfig">EntityresolutionIdNamespaceInputSourceConfig</a>]

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[EntityresolutionIdNamespaceTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTags">EntityresolutionIdNamespaceTags</a>]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id_namespace_name`<sup>Required</sup> <a name="id_namespace_name" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.property.idNamespaceName"></a>

```python
id_namespace_name: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### EntityresolutionIdNamespaceConfig <a name="EntityresolutionIdNamespaceConfig" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceConfig.Initializer"></a>

```python
from cdktn_provider_awscc import entityresolution_id_namespace

entityresolutionIdNamespace.EntityresolutionIdNamespaceConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  id_namespace_name: str,
  type: str,
  description: str = None,
  id_mapping_workflow_properties: IResolvable | typing.List[EntityresolutionIdNamespaceIdMappingWorkflowProperties] = None,
  input_source_config: IResolvable | typing.List[EntityresolutionIdNamespaceInputSourceConfig] = None,
  role_arn: str = None,
  tags: IResolvable | typing.List[EntityresolutionIdNamespaceTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceConfig.property.idNamespaceName">id_namespace_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_id_namespace#id_namespace_name EntityresolutionIdNamespace#id_namespace_name}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceConfig.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_id_namespace#type EntityresolutionIdNamespace#type}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_id_namespace#description EntityresolutionIdNamespace#description}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceConfig.property.idMappingWorkflowProperties">id_mapping_workflow_properties</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowProperties">EntityresolutionIdNamespaceIdMappingWorkflowProperties</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_id_namespace#id_mapping_workflow_properties EntityresolutionIdNamespace#id_mapping_workflow_properties}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceConfig.property.inputSourceConfig">input_source_config</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfig">EntityresolutionIdNamespaceInputSourceConfig</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_id_namespace#input_source_config EntityresolutionIdNamespace#input_source_config}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceConfig.property.roleArn">role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_id_namespace#role_arn EntityresolutionIdNamespace#role_arn}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTags">EntityresolutionIdNamespaceTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_id_namespace#tags EntityresolutionIdNamespace#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id_namespace_name`<sup>Required</sup> <a name="id_namespace_name" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceConfig.property.idNamespaceName"></a>

```python
id_namespace_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_id_namespace#id_namespace_name EntityresolutionIdNamespace#id_namespace_name}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_id_namespace#type EntityresolutionIdNamespace#type}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_id_namespace#description EntityresolutionIdNamespace#description}.

---

##### `id_mapping_workflow_properties`<sup>Optional</sup> <a name="id_mapping_workflow_properties" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceConfig.property.idMappingWorkflowProperties"></a>

```python
id_mapping_workflow_properties: IResolvable | typing.List[EntityresolutionIdNamespaceIdMappingWorkflowProperties]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowProperties">EntityresolutionIdNamespaceIdMappingWorkflowProperties</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_id_namespace#id_mapping_workflow_properties EntityresolutionIdNamespace#id_mapping_workflow_properties}.

---

##### `input_source_config`<sup>Optional</sup> <a name="input_source_config" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceConfig.property.inputSourceConfig"></a>

```python
input_source_config: IResolvable | typing.List[EntityresolutionIdNamespaceInputSourceConfig]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfig">EntityresolutionIdNamespaceInputSourceConfig</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_id_namespace#input_source_config EntityresolutionIdNamespace#input_source_config}.

---

##### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceConfig.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_id_namespace#role_arn EntityresolutionIdNamespace#role_arn}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[EntityresolutionIdNamespaceTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTags">EntityresolutionIdNamespaceTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_id_namespace#tags EntityresolutionIdNamespace#tags}.

---

### EntityresolutionIdNamespaceIdMappingWorkflowProperties <a name="EntityresolutionIdNamespaceIdMappingWorkflowProperties" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowProperties.Initializer"></a>

```python
from cdktn_provider_awscc import entityresolution_id_namespace

entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowProperties(
  id_mapping_type: str = None,
  provider_properties: EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderProperties = None,
  rule_based_properties: EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedProperties = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowProperties.property.idMappingType">id_mapping_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_id_namespace#id_mapping_type EntityresolutionIdNamespace#id_mapping_type}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowProperties.property.providerProperties">provider_properties</a></code> | <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderProperties">EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderProperties</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_id_namespace#provider_properties EntityresolutionIdNamespace#provider_properties}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowProperties.property.ruleBasedProperties">rule_based_properties</a></code> | <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedProperties">EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedProperties</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_id_namespace#rule_based_properties EntityresolutionIdNamespace#rule_based_properties}. |

---

##### `id_mapping_type`<sup>Optional</sup> <a name="id_mapping_type" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowProperties.property.idMappingType"></a>

```python
id_mapping_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_id_namespace#id_mapping_type EntityresolutionIdNamespace#id_mapping_type}.

---

##### `provider_properties`<sup>Optional</sup> <a name="provider_properties" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowProperties.property.providerProperties"></a>

```python
provider_properties: EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderProperties
```

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderProperties">EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderProperties</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_id_namespace#provider_properties EntityresolutionIdNamespace#provider_properties}.

---

##### `rule_based_properties`<sup>Optional</sup> <a name="rule_based_properties" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowProperties.property.ruleBasedProperties"></a>

```python
rule_based_properties: EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedProperties
```

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedProperties">EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedProperties</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_id_namespace#rule_based_properties EntityresolutionIdNamespace#rule_based_properties}.

---

### EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderProperties <a name="EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderProperties" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderProperties.Initializer"></a>

```python
from cdktn_provider_awscc import entityresolution_id_namespace

entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderProperties(
  provider_configuration: typing.Mapping[str] = None,
  provider_service_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderProperties.property.providerConfiguration">provider_configuration</a></code> | <code>typing.Mapping[str]</code> | Additional Provider configuration that would be required for the provider service. The Configuration must be in JSON string format. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderProperties.property.providerServiceArn">provider_service_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_id_namespace#provider_service_arn EntityresolutionIdNamespace#provider_service_arn}. |

---

##### `provider_configuration`<sup>Optional</sup> <a name="provider_configuration" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderProperties.property.providerConfiguration"></a>

```python
provider_configuration: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Additional Provider configuration that would be required for the provider service. The Configuration must be in JSON string format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_id_namespace#provider_configuration EntityresolutionIdNamespace#provider_configuration}

---

##### `provider_service_arn`<sup>Optional</sup> <a name="provider_service_arn" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderProperties.property.providerServiceArn"></a>

```python
provider_service_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_id_namespace#provider_service_arn EntityresolutionIdNamespace#provider_service_arn}.

---

### EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedProperties <a name="EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedProperties" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedProperties.Initializer"></a>

```python
from cdktn_provider_awscc import entityresolution_id_namespace

entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedProperties(
  attribute_matching_model: str = None,
  record_matching_models: typing.List[str] = None,
  rule_definition_types: typing.List[str] = None,
  rules: IResolvable | typing.List[EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRules] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedProperties.property.attributeMatchingModel">attribute_matching_model</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_id_namespace#attribute_matching_model EntityresolutionIdNamespace#attribute_matching_model}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedProperties.property.recordMatchingModels">record_matching_models</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_id_namespace#record_matching_models EntityresolutionIdNamespace#record_matching_models}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedProperties.property.ruleDefinitionTypes">rule_definition_types</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_id_namespace#rule_definition_types EntityresolutionIdNamespace#rule_definition_types}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedProperties.property.rules">rules</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRules">EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRules</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_id_namespace#rules EntityresolutionIdNamespace#rules}. |

---

##### `attribute_matching_model`<sup>Optional</sup> <a name="attribute_matching_model" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedProperties.property.attributeMatchingModel"></a>

```python
attribute_matching_model: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_id_namespace#attribute_matching_model EntityresolutionIdNamespace#attribute_matching_model}.

---

##### `record_matching_models`<sup>Optional</sup> <a name="record_matching_models" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedProperties.property.recordMatchingModels"></a>

```python
record_matching_models: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_id_namespace#record_matching_models EntityresolutionIdNamespace#record_matching_models}.

---

##### `rule_definition_types`<sup>Optional</sup> <a name="rule_definition_types" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedProperties.property.ruleDefinitionTypes"></a>

```python
rule_definition_types: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_id_namespace#rule_definition_types EntityresolutionIdNamespace#rule_definition_types}.

---

##### `rules`<sup>Optional</sup> <a name="rules" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedProperties.property.rules"></a>

```python
rules: IResolvable | typing.List[EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRules]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRules">EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRules</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_id_namespace#rules EntityresolutionIdNamespace#rules}.

---

### EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRules <a name="EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRules" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRules.Initializer"></a>

```python
from cdktn_provider_awscc import entityresolution_id_namespace

entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRules(
  matching_keys: typing.List[str] = None,
  rule_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRules.property.matchingKeys">matching_keys</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_id_namespace#matching_keys EntityresolutionIdNamespace#matching_keys}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRules.property.ruleName">rule_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_id_namespace#rule_name EntityresolutionIdNamespace#rule_name}. |

---

##### `matching_keys`<sup>Optional</sup> <a name="matching_keys" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRules.property.matchingKeys"></a>

```python
matching_keys: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_id_namespace#matching_keys EntityresolutionIdNamespace#matching_keys}.

---

##### `rule_name`<sup>Optional</sup> <a name="rule_name" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRules.property.ruleName"></a>

```python
rule_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_id_namespace#rule_name EntityresolutionIdNamespace#rule_name}.

---

### EntityresolutionIdNamespaceInputSourceConfig <a name="EntityresolutionIdNamespaceInputSourceConfig" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfig.Initializer"></a>

```python
from cdktn_provider_awscc import entityresolution_id_namespace

entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfig(
  input_source_arn: str = None,
  schema_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfig.property.inputSourceArn">input_source_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_id_namespace#input_source_arn EntityresolutionIdNamespace#input_source_arn}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfig.property.schemaName">schema_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_id_namespace#schema_name EntityresolutionIdNamespace#schema_name}. |

---

##### `input_source_arn`<sup>Optional</sup> <a name="input_source_arn" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfig.property.inputSourceArn"></a>

```python
input_source_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_id_namespace#input_source_arn EntityresolutionIdNamespace#input_source_arn}.

---

##### `schema_name`<sup>Optional</sup> <a name="schema_name" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfig.property.schemaName"></a>

```python
schema_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_id_namespace#schema_name EntityresolutionIdNamespace#schema_name}.

---

### EntityresolutionIdNamespaceTags <a name="EntityresolutionIdNamespaceTags" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTags.Initializer"></a>

```python
from cdktn_provider_awscc import entityresolution_id_namespace

entityresolutionIdNamespace.EntityresolutionIdNamespaceTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_id_namespace#key EntityresolutionIdNamespace#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_id_namespace#value EntityresolutionIdNamespace#value}

---

## Classes <a name="Classes" id="Classes"></a>

### EntityresolutionIdNamespaceIdMappingWorkflowPropertiesList <a name="EntityresolutionIdNamespaceIdMappingWorkflowPropertiesList" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesList.Initializer"></a>

```python
from cdktn_provider_awscc import entityresolution_id_namespace

entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowProperties">EntityresolutionIdNamespaceIdMappingWorkflowProperties</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[EntityresolutionIdNamespaceIdMappingWorkflowProperties]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowProperties">EntityresolutionIdNamespaceIdMappingWorkflowProperties</a>]

---


### EntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference <a name="EntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import entityresolution_id_namespace

entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.putProviderProperties">put_provider_properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.putRuleBasedProperties">put_rule_based_properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.resetIdMappingType">reset_id_mapping_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.resetProviderProperties">reset_provider_properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.resetRuleBasedProperties">reset_rule_based_properties</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_provider_properties` <a name="put_provider_properties" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.putProviderProperties"></a>

```python
def put_provider_properties(
  provider_configuration: typing.Mapping[str] = None,
  provider_service_arn: str = None
) -> None
```

###### `provider_configuration`<sup>Optional</sup> <a name="provider_configuration" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.putProviderProperties.parameter.providerConfiguration"></a>

- *Type:* typing.Mapping[str]

Additional Provider configuration that would be required for the provider service. The Configuration must be in JSON string format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_id_namespace#provider_configuration EntityresolutionIdNamespace#provider_configuration}

---

###### `provider_service_arn`<sup>Optional</sup> <a name="provider_service_arn" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.putProviderProperties.parameter.providerServiceArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_id_namespace#provider_service_arn EntityresolutionIdNamespace#provider_service_arn}.

---

##### `put_rule_based_properties` <a name="put_rule_based_properties" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.putRuleBasedProperties"></a>

```python
def put_rule_based_properties(
  attribute_matching_model: str = None,
  record_matching_models: typing.List[str] = None,
  rule_definition_types: typing.List[str] = None,
  rules: IResolvable | typing.List[EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRules] = None
) -> None
```

###### `attribute_matching_model`<sup>Optional</sup> <a name="attribute_matching_model" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.putRuleBasedProperties.parameter.attributeMatchingModel"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_id_namespace#attribute_matching_model EntityresolutionIdNamespace#attribute_matching_model}.

---

###### `record_matching_models`<sup>Optional</sup> <a name="record_matching_models" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.putRuleBasedProperties.parameter.recordMatchingModels"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_id_namespace#record_matching_models EntityresolutionIdNamespace#record_matching_models}.

---

###### `rule_definition_types`<sup>Optional</sup> <a name="rule_definition_types" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.putRuleBasedProperties.parameter.ruleDefinitionTypes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_id_namespace#rule_definition_types EntityresolutionIdNamespace#rule_definition_types}.

---

###### `rules`<sup>Optional</sup> <a name="rules" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.putRuleBasedProperties.parameter.rules"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRules">EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRules</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_id_namespace#rules EntityresolutionIdNamespace#rules}.

---

##### `reset_id_mapping_type` <a name="reset_id_mapping_type" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.resetIdMappingType"></a>

```python
def reset_id_mapping_type() -> None
```

##### `reset_provider_properties` <a name="reset_provider_properties" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.resetProviderProperties"></a>

```python
def reset_provider_properties() -> None
```

##### `reset_rule_based_properties` <a name="reset_rule_based_properties" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.resetRuleBasedProperties"></a>

```python
def reset_rule_based_properties() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.property.providerProperties">provider_properties</a></code> | <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference">EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.property.ruleBasedProperties">rule_based_properties</a></code> | <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference">EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.property.idMappingTypeInput">id_mapping_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.property.providerPropertiesInput">provider_properties_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderProperties">EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.property.ruleBasedPropertiesInput">rule_based_properties_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedProperties">EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.property.idMappingType">id_mapping_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowProperties">EntityresolutionIdNamespaceIdMappingWorkflowProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `provider_properties`<sup>Required</sup> <a name="provider_properties" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.property.providerProperties"></a>

```python
provider_properties: EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference">EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference</a>

---

##### `rule_based_properties`<sup>Required</sup> <a name="rule_based_properties" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.property.ruleBasedProperties"></a>

```python
rule_based_properties: EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference">EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference</a>

---

##### `id_mapping_type_input`<sup>Optional</sup> <a name="id_mapping_type_input" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.property.idMappingTypeInput"></a>

```python
id_mapping_type_input: str
```

- *Type:* str

---

##### `provider_properties_input`<sup>Optional</sup> <a name="provider_properties_input" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.property.providerPropertiesInput"></a>

```python
provider_properties_input: IResolvable | EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderProperties
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderProperties">EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderProperties</a>

---

##### `rule_based_properties_input`<sup>Optional</sup> <a name="rule_based_properties_input" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.property.ruleBasedPropertiesInput"></a>

```python
rule_based_properties_input: IResolvable | EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedProperties
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedProperties">EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedProperties</a>

---

##### `id_mapping_type`<sup>Required</sup> <a name="id_mapping_type" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.property.idMappingType"></a>

```python
id_mapping_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EntityresolutionIdNamespaceIdMappingWorkflowProperties
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowProperties">EntityresolutionIdNamespaceIdMappingWorkflowProperties</a>

---


### EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference <a name="EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import entityresolution_id_namespace

entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.resetProviderConfiguration">reset_provider_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.resetProviderServiceArn">reset_provider_service_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_provider_configuration` <a name="reset_provider_configuration" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.resetProviderConfiguration"></a>

```python
def reset_provider_configuration() -> None
```

##### `reset_provider_service_arn` <a name="reset_provider_service_arn" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.resetProviderServiceArn"></a>

```python
def reset_provider_service_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.property.providerConfigurationInput">provider_configuration_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.property.providerServiceArnInput">provider_service_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.property.providerConfiguration">provider_configuration</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.property.providerServiceArn">provider_service_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderProperties">EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `provider_configuration_input`<sup>Optional</sup> <a name="provider_configuration_input" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.property.providerConfigurationInput"></a>

```python
provider_configuration_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `provider_service_arn_input`<sup>Optional</sup> <a name="provider_service_arn_input" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.property.providerServiceArnInput"></a>

```python
provider_service_arn_input: str
```

- *Type:* str

---

##### `provider_configuration`<sup>Required</sup> <a name="provider_configuration" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.property.providerConfiguration"></a>

```python
provider_configuration: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `provider_service_arn`<sup>Required</sup> <a name="provider_service_arn" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.property.providerServiceArn"></a>

```python
provider_service_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderProperties
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderProperties">EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderProperties</a>

---


### EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference <a name="EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import entityresolution_id_namespace

entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.putRules">put_rules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.resetAttributeMatchingModel">reset_attribute_matching_model</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.resetRecordMatchingModels">reset_record_matching_models</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.resetRuleDefinitionTypes">reset_rule_definition_types</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.resetRules">reset_rules</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_rules` <a name="put_rules" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.putRules"></a>

```python
def put_rules(
  value: IResolvable | typing.List[EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRules]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.putRules.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRules">EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRules</a>]

---

##### `reset_attribute_matching_model` <a name="reset_attribute_matching_model" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.resetAttributeMatchingModel"></a>

```python
def reset_attribute_matching_model() -> None
```

##### `reset_record_matching_models` <a name="reset_record_matching_models" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.resetRecordMatchingModels"></a>

```python
def reset_record_matching_models() -> None
```

##### `reset_rule_definition_types` <a name="reset_rule_definition_types" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.resetRuleDefinitionTypes"></a>

```python
def reset_rule_definition_types() -> None
```

##### `reset_rules` <a name="reset_rules" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.resetRules"></a>

```python
def reset_rules() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.property.rules">rules</a></code> | <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesList">EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.property.attributeMatchingModelInput">attribute_matching_model_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.property.recordMatchingModelsInput">record_matching_models_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.property.ruleDefinitionTypesInput">rule_definition_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.property.rulesInput">rules_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRules">EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRules</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.property.attributeMatchingModel">attribute_matching_model</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.property.recordMatchingModels">record_matching_models</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.property.ruleDefinitionTypes">rule_definition_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedProperties">EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.property.rules"></a>

```python
rules: EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesList
```

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesList">EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesList</a>

---

##### `attribute_matching_model_input`<sup>Optional</sup> <a name="attribute_matching_model_input" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.property.attributeMatchingModelInput"></a>

```python
attribute_matching_model_input: str
```

- *Type:* str

---

##### `record_matching_models_input`<sup>Optional</sup> <a name="record_matching_models_input" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.property.recordMatchingModelsInput"></a>

```python
record_matching_models_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `rule_definition_types_input`<sup>Optional</sup> <a name="rule_definition_types_input" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.property.ruleDefinitionTypesInput"></a>

```python
rule_definition_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `rules_input`<sup>Optional</sup> <a name="rules_input" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.property.rulesInput"></a>

```python
rules_input: IResolvable | typing.List[EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRules]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRules">EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRules</a>]

---

##### `attribute_matching_model`<sup>Required</sup> <a name="attribute_matching_model" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.property.attributeMatchingModel"></a>

```python
attribute_matching_model: str
```

- *Type:* str

---

##### `record_matching_models`<sup>Required</sup> <a name="record_matching_models" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.property.recordMatchingModels"></a>

```python
record_matching_models: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `rule_definition_types`<sup>Required</sup> <a name="rule_definition_types" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.property.ruleDefinitionTypes"></a>

```python
rule_definition_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedProperties
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedProperties">EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedProperties</a>

---


### EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesList <a name="EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesList" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesList.Initializer"></a>

```python
from cdktn_provider_awscc import entityresolution_id_namespace

entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRules">EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRules</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRules]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRules">EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRules</a>]

---


### EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference <a name="EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import entityresolution_id_namespace

entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.resetMatchingKeys">reset_matching_keys</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.resetRuleName">reset_rule_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_matching_keys` <a name="reset_matching_keys" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.resetMatchingKeys"></a>

```python
def reset_matching_keys() -> None
```

##### `reset_rule_name` <a name="reset_rule_name" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.resetRuleName"></a>

```python
def reset_rule_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.property.matchingKeysInput">matching_keys_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.property.ruleNameInput">rule_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.property.matchingKeys">matching_keys</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.property.ruleName">rule_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRules">EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `matching_keys_input`<sup>Optional</sup> <a name="matching_keys_input" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.property.matchingKeysInput"></a>

```python
matching_keys_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `rule_name_input`<sup>Optional</sup> <a name="rule_name_input" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.property.ruleNameInput"></a>

```python
rule_name_input: str
```

- *Type:* str

---

##### `matching_keys`<sup>Required</sup> <a name="matching_keys" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.property.matchingKeys"></a>

```python
matching_keys: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `rule_name`<sup>Required</sup> <a name="rule_name" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.property.ruleName"></a>

```python
rule_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRules
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRules">EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRules</a>

---


### EntityresolutionIdNamespaceInputSourceConfigList <a name="EntityresolutionIdNamespaceInputSourceConfigList" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigList.Initializer"></a>

```python
from cdktn_provider_awscc import entityresolution_id_namespace

entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EntityresolutionIdNamespaceInputSourceConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfig">EntityresolutionIdNamespaceInputSourceConfig</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[EntityresolutionIdNamespaceInputSourceConfig]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfig">EntityresolutionIdNamespaceInputSourceConfig</a>]

---


### EntityresolutionIdNamespaceInputSourceConfigOutputReference <a name="EntityresolutionIdNamespaceInputSourceConfigOutputReference" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import entityresolution_id_namespace

entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigOutputReference.resetInputSourceArn">reset_input_source_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigOutputReference.resetSchemaName">reset_schema_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_input_source_arn` <a name="reset_input_source_arn" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigOutputReference.resetInputSourceArn"></a>

```python
def reset_input_source_arn() -> None
```

##### `reset_schema_name` <a name="reset_schema_name" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigOutputReference.resetSchemaName"></a>

```python
def reset_schema_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigOutputReference.property.inputSourceArnInput">input_source_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigOutputReference.property.schemaNameInput">schema_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigOutputReference.property.inputSourceArn">input_source_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigOutputReference.property.schemaName">schema_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfig">EntityresolutionIdNamespaceInputSourceConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `input_source_arn_input`<sup>Optional</sup> <a name="input_source_arn_input" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigOutputReference.property.inputSourceArnInput"></a>

```python
input_source_arn_input: str
```

- *Type:* str

---

##### `schema_name_input`<sup>Optional</sup> <a name="schema_name_input" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigOutputReference.property.schemaNameInput"></a>

```python
schema_name_input: str
```

- *Type:* str

---

##### `input_source_arn`<sup>Required</sup> <a name="input_source_arn" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigOutputReference.property.inputSourceArn"></a>

```python
input_source_arn: str
```

- *Type:* str

---

##### `schema_name`<sup>Required</sup> <a name="schema_name" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigOutputReference.property.schemaName"></a>

```python
schema_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EntityresolutionIdNamespaceInputSourceConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfig">EntityresolutionIdNamespaceInputSourceConfig</a>

---


### EntityresolutionIdNamespaceTagsList <a name="EntityresolutionIdNamespaceTagsList" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import entityresolution_id_namespace

entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EntityresolutionIdNamespaceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTags">EntityresolutionIdNamespaceTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[EntityresolutionIdNamespaceTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTags">EntityresolutionIdNamespaceTags</a>]

---


### EntityresolutionIdNamespaceTagsOutputReference <a name="EntityresolutionIdNamespaceTagsOutputReference" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import entityresolution_id_namespace

entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTags">EntityresolutionIdNamespaceTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EntityresolutionIdNamespaceTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTags">EntityresolutionIdNamespaceTags</a>

---



