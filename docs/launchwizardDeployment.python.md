# `launchwizardDeployment` Submodule <a name="`launchwizardDeployment` Submodule" id="@cdktn/provider-awscc.launchwizardDeployment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LaunchwizardDeployment <a name="LaunchwizardDeployment" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/launchwizard_deployment awscc_launchwizard_deployment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.Initializer"></a>

```python
from cdktn_provider_awscc import launchwizard_deployment

launchwizardDeployment.LaunchwizardDeployment(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  deployment_pattern_name: str,
  name: str,
  workload_name: str,
  specifications: typing.Mapping[str] = None,
  tags: IResolvable | typing.List[LaunchwizardDeploymentTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.Initializer.parameter.deploymentPatternName">deployment_pattern_name</a></code> | <code>str</code> | Workload deployment pattern name. |
| <code><a href="#@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of LaunchWizard deployment. |
| <code><a href="#@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.Initializer.parameter.workloadName">workload_name</a></code> | <code>str</code> | Workload Name for LaunchWizard deployment. |
| <code><a href="#@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.Initializer.parameter.specifications">specifications</a></code> | <code>typing.Mapping[str]</code> | LaunchWizard deployment specifications. |
| <code><a href="#@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeploymentTags">LaunchwizardDeploymentTags</a>]</code> | Tags for LaunchWizard deployment. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `deployment_pattern_name`<sup>Required</sup> <a name="deployment_pattern_name" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.Initializer.parameter.deploymentPatternName"></a>

- *Type:* str

Workload deployment pattern name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/launchwizard_deployment#deployment_pattern_name LaunchwizardDeployment#deployment_pattern_name}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.Initializer.parameter.name"></a>

- *Type:* str

Name of LaunchWizard deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/launchwizard_deployment#name LaunchwizardDeployment#name}

---

##### `workload_name`<sup>Required</sup> <a name="workload_name" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.Initializer.parameter.workloadName"></a>

- *Type:* str

Workload Name for LaunchWizard deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/launchwizard_deployment#workload_name LaunchwizardDeployment#workload_name}

---

##### `specifications`<sup>Optional</sup> <a name="specifications" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.Initializer.parameter.specifications"></a>

- *Type:* typing.Mapping[str]

LaunchWizard deployment specifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/launchwizard_deployment#specifications LaunchwizardDeployment#specifications}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeploymentTags">LaunchwizardDeploymentTags</a>]

Tags for LaunchWizard deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/launchwizard_deployment#tags LaunchwizardDeployment#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.resetSpecifications">reset_specifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[LaunchwizardDeploymentTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeploymentTags">LaunchwizardDeploymentTags</a>]

---

##### `reset_specifications` <a name="reset_specifications" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.resetSpecifications"></a>

```python
def reset_specifications() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a LaunchwizardDeployment resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.isConstruct"></a>

```python
from cdktn_provider_awscc import launchwizard_deployment

launchwizardDeployment.LaunchwizardDeployment.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.isTerraformElement"></a>

```python
from cdktn_provider_awscc import launchwizard_deployment

launchwizardDeployment.LaunchwizardDeployment.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.isTerraformResource"></a>

```python
from cdktn_provider_awscc import launchwizard_deployment

launchwizardDeployment.LaunchwizardDeployment.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import launchwizard_deployment

launchwizardDeployment.LaunchwizardDeployment.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a LaunchwizardDeployment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the LaunchwizardDeployment to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing LaunchwizardDeployment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/launchwizard_deployment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the LaunchwizardDeployment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.property.deletedAt">deleted_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.property.deploymentId">deployment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.property.resourceGroup">resource_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeploymentTagsList">LaunchwizardDeploymentTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.property.deploymentPatternNameInput">deployment_pattern_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.property.specificationsInput">specifications_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeploymentTags">LaunchwizardDeploymentTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.property.workloadNameInput">workload_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.property.deploymentPatternName">deployment_pattern_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.property.specifications">specifications</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.property.workloadName">workload_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `deleted_at`<sup>Required</sup> <a name="deleted_at" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.property.deletedAt"></a>

```python
deleted_at: str
```

- *Type:* str

---

##### `deployment_id`<sup>Required</sup> <a name="deployment_id" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.property.deploymentId"></a>

```python
deployment_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `resource_group`<sup>Required</sup> <a name="resource_group" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.property.resourceGroup"></a>

```python
resource_group: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.property.tags"></a>

```python
tags: LaunchwizardDeploymentTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeploymentTagsList">LaunchwizardDeploymentTagsList</a>

---

##### `deployment_pattern_name_input`<sup>Optional</sup> <a name="deployment_pattern_name_input" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.property.deploymentPatternNameInput"></a>

```python
deployment_pattern_name_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `specifications_input`<sup>Optional</sup> <a name="specifications_input" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.property.specificationsInput"></a>

```python
specifications_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[LaunchwizardDeploymentTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeploymentTags">LaunchwizardDeploymentTags</a>]

---

##### `workload_name_input`<sup>Optional</sup> <a name="workload_name_input" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.property.workloadNameInput"></a>

```python
workload_name_input: str
```

- *Type:* str

---

##### `deployment_pattern_name`<sup>Required</sup> <a name="deployment_pattern_name" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.property.deploymentPatternName"></a>

```python
deployment_pattern_name: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `specifications`<sup>Required</sup> <a name="specifications" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.property.specifications"></a>

```python
specifications: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `workload_name`<sup>Required</sup> <a name="workload_name" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.property.workloadName"></a>

```python
workload_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeployment.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LaunchwizardDeploymentConfig <a name="LaunchwizardDeploymentConfig" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeploymentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeploymentConfig.Initializer"></a>

```python
from cdktn_provider_awscc import launchwizard_deployment

launchwizardDeployment.LaunchwizardDeploymentConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  deployment_pattern_name: str,
  name: str,
  workload_name: str,
  specifications: typing.Mapping[str] = None,
  tags: IResolvable | typing.List[LaunchwizardDeploymentTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeploymentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeploymentConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeploymentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeploymentConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeploymentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeploymentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeploymentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeploymentConfig.property.deploymentPatternName">deployment_pattern_name</a></code> | <code>str</code> | Workload deployment pattern name. |
| <code><a href="#@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeploymentConfig.property.name">name</a></code> | <code>str</code> | Name of LaunchWizard deployment. |
| <code><a href="#@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeploymentConfig.property.workloadName">workload_name</a></code> | <code>str</code> | Workload Name for LaunchWizard deployment. |
| <code><a href="#@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeploymentConfig.property.specifications">specifications</a></code> | <code>typing.Mapping[str]</code> | LaunchWizard deployment specifications. |
| <code><a href="#@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeploymentConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeploymentTags">LaunchwizardDeploymentTags</a>]</code> | Tags for LaunchWizard deployment. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeploymentConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeploymentConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeploymentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeploymentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeploymentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeploymentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeploymentConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `deployment_pattern_name`<sup>Required</sup> <a name="deployment_pattern_name" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeploymentConfig.property.deploymentPatternName"></a>

```python
deployment_pattern_name: str
```

- *Type:* str

Workload deployment pattern name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/launchwizard_deployment#deployment_pattern_name LaunchwizardDeployment#deployment_pattern_name}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeploymentConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of LaunchWizard deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/launchwizard_deployment#name LaunchwizardDeployment#name}

---

##### `workload_name`<sup>Required</sup> <a name="workload_name" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeploymentConfig.property.workloadName"></a>

```python
workload_name: str
```

- *Type:* str

Workload Name for LaunchWizard deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/launchwizard_deployment#workload_name LaunchwizardDeployment#workload_name}

---

##### `specifications`<sup>Optional</sup> <a name="specifications" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeploymentConfig.property.specifications"></a>

```python
specifications: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

LaunchWizard deployment specifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/launchwizard_deployment#specifications LaunchwizardDeployment#specifications}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeploymentConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[LaunchwizardDeploymentTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeploymentTags">LaunchwizardDeploymentTags</a>]

Tags for LaunchWizard deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/launchwizard_deployment#tags LaunchwizardDeployment#tags}

---

### LaunchwizardDeploymentTags <a name="LaunchwizardDeploymentTags" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeploymentTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeploymentTags.Initializer"></a>

```python
from cdktn_provider_awscc import launchwizard_deployment

launchwizardDeployment.LaunchwizardDeploymentTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeploymentTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeploymentTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeploymentTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/launchwizard_deployment#key LaunchwizardDeployment#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeploymentTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

You can specify a value that is 0 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/launchwizard_deployment#value LaunchwizardDeployment#value}

---

## Classes <a name="Classes" id="Classes"></a>

### LaunchwizardDeploymentTagsList <a name="LaunchwizardDeploymentTagsList" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeploymentTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeploymentTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import launchwizard_deployment

launchwizardDeployment.LaunchwizardDeploymentTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeploymentTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeploymentTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeploymentTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeploymentTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeploymentTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeploymentTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeploymentTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeploymentTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeploymentTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeploymentTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeploymentTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeploymentTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeploymentTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeploymentTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeploymentTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeploymentTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeploymentTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeploymentTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LaunchwizardDeploymentTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeploymentTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeploymentTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeploymentTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeploymentTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeploymentTags">LaunchwizardDeploymentTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeploymentTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeploymentTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeploymentTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[LaunchwizardDeploymentTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeploymentTags">LaunchwizardDeploymentTags</a>]

---


### LaunchwizardDeploymentTagsOutputReference <a name="LaunchwizardDeploymentTagsOutputReference" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeploymentTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeploymentTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import launchwizard_deployment

launchwizardDeployment.LaunchwizardDeploymentTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeploymentTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeploymentTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeploymentTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeploymentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeploymentTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeploymentTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeploymentTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeploymentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeploymentTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeploymentTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeploymentTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeploymentTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeploymentTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeploymentTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeploymentTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeploymentTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeploymentTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeploymentTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeploymentTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeploymentTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeploymentTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeploymentTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeploymentTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeploymentTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeploymentTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeploymentTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeploymentTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeploymentTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeploymentTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeploymentTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeploymentTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeploymentTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeploymentTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeploymentTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeploymentTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeploymentTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeploymentTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeploymentTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeploymentTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeploymentTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeploymentTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeploymentTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeploymentTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeploymentTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeploymentTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeploymentTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeploymentTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeploymentTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeploymentTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeploymentTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeploymentTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeploymentTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeploymentTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeploymentTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeploymentTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeploymentTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeploymentTags">LaunchwizardDeploymentTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeploymentTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeploymentTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeploymentTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeploymentTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeploymentTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeploymentTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeploymentTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LaunchwizardDeploymentTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.launchwizardDeployment.LaunchwizardDeploymentTags">LaunchwizardDeploymentTags</a>

---



