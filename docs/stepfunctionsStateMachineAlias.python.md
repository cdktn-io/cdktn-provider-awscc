# `stepfunctionsStateMachineAlias` Submodule <a name="`stepfunctionsStateMachineAlias` Submodule" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StepfunctionsStateMachineAlias <a name="StepfunctionsStateMachineAlias" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/stepfunctions_state_machine_alias awscc_stepfunctions_state_machine_alias}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.Initializer"></a>

```python
from cdktn_provider_awscc import stepfunctions_state_machine_alias

stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  deployment_preference: StepfunctionsStateMachineAliasDeploymentPreference = None,
  description: str = None,
  name: str = None,
  routing_configuration: IResolvable | typing.List[StepfunctionsStateMachineAliasRoutingConfiguration] = None,
  state_machine_arn: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.Initializer.parameter.deploymentPreference">deployment_preference</a></code> | <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreference">StepfunctionsStateMachineAliasDeploymentPreference</a></code> | The settings to enable gradual state machine deployments. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.Initializer.parameter.description">description</a></code> | <code>str</code> | An optional description of the alias. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.Initializer.parameter.name">name</a></code> | <code>str</code> | The alias name. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.Initializer.parameter.routingConfiguration">routing_configuration</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfiguration">StepfunctionsStateMachineAliasRoutingConfiguration</a>]</code> | The routing configuration of the alias. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.Initializer.parameter.stateMachineArn">state_machine_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/stepfunctions_state_machine_alias#state_machine_arn StepfunctionsStateMachineAlias#state_machine_arn}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `deployment_preference`<sup>Optional</sup> <a name="deployment_preference" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.Initializer.parameter.deploymentPreference"></a>

- *Type:* <a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreference">StepfunctionsStateMachineAliasDeploymentPreference</a>

The settings to enable gradual state machine deployments.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/stepfunctions_state_machine_alias#deployment_preference StepfunctionsStateMachineAlias#deployment_preference}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.Initializer.parameter.description"></a>

- *Type:* str

An optional description of the alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/stepfunctions_state_machine_alias#description StepfunctionsStateMachineAlias#description}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.Initializer.parameter.name"></a>

- *Type:* str

The alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/stepfunctions_state_machine_alias#name StepfunctionsStateMachineAlias#name}

---

##### `routing_configuration`<sup>Optional</sup> <a name="routing_configuration" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.Initializer.parameter.routingConfiguration"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfiguration">StepfunctionsStateMachineAliasRoutingConfiguration</a>]

The routing configuration of the alias.

One or two versions can be mapped to an alias to split StartExecution requests of the same state machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/stepfunctions_state_machine_alias#routing_configuration StepfunctionsStateMachineAlias#routing_configuration}

---

##### `state_machine_arn`<sup>Optional</sup> <a name="state_machine_arn" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.Initializer.parameter.stateMachineArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/stepfunctions_state_machine_alias#state_machine_arn StepfunctionsStateMachineAlias#state_machine_arn}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.putDeploymentPreference">put_deployment_preference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.putRoutingConfiguration">put_routing_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.resetDeploymentPreference">reset_deployment_preference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.resetRoutingConfiguration">reset_routing_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.resetStateMachineArn">reset_state_machine_arn</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_deployment_preference` <a name="put_deployment_preference" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.putDeploymentPreference"></a>

```python
def put_deployment_preference(
  alarms: typing.List[str] = None,
  interval: typing.Union[int, float] = None,
  percentage: typing.Union[int, float] = None,
  state_machine_version_arn: str = None,
  type: str = None
) -> None
```

###### `alarms`<sup>Optional</sup> <a name="alarms" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.putDeploymentPreference.parameter.alarms"></a>

- *Type:* typing.List[str]

A list of CloudWatch alarm names that will be monitored during the deployment.

The deployment will fail and rollback if any alarms go into ALARM state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/stepfunctions_state_machine_alias#alarms StepfunctionsStateMachineAlias#alarms}

---

###### `interval`<sup>Optional</sup> <a name="interval" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.putDeploymentPreference.parameter.interval"></a>

- *Type:* typing.Union[int, float]

The time in minutes between each traffic shifting increment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/stepfunctions_state_machine_alias#interval StepfunctionsStateMachineAlias#interval}

---

###### `percentage`<sup>Optional</sup> <a name="percentage" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.putDeploymentPreference.parameter.percentage"></a>

- *Type:* typing.Union[int, float]

The percentage of traffic to shift to the new version in each increment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/stepfunctions_state_machine_alias#percentage StepfunctionsStateMachineAlias#percentage}

---

###### `state_machine_version_arn`<sup>Optional</sup> <a name="state_machine_version_arn" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.putDeploymentPreference.parameter.stateMachineVersionArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/stepfunctions_state_machine_alias#state_machine_version_arn StepfunctionsStateMachineAlias#state_machine_version_arn}.

---

###### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.putDeploymentPreference.parameter.type"></a>

- *Type:* str

The type of deployment to perform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/stepfunctions_state_machine_alias#type StepfunctionsStateMachineAlias#type}

---

##### `put_routing_configuration` <a name="put_routing_configuration" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.putRoutingConfiguration"></a>

```python
def put_routing_configuration(
  value: IResolvable | typing.List[StepfunctionsStateMachineAliasRoutingConfiguration]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.putRoutingConfiguration.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfiguration">StepfunctionsStateMachineAliasRoutingConfiguration</a>]

---

##### `reset_deployment_preference` <a name="reset_deployment_preference" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.resetDeploymentPreference"></a>

```python
def reset_deployment_preference() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_routing_configuration` <a name="reset_routing_configuration" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.resetRoutingConfiguration"></a>

```python
def reset_routing_configuration() -> None
```

##### `reset_state_machine_arn` <a name="reset_state_machine_arn" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.resetStateMachineArn"></a>

```python
def reset_state_machine_arn() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a StepfunctionsStateMachineAlias resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.isConstruct"></a>

```python
from cdktn_provider_awscc import stepfunctions_state_machine_alias

stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.isTerraformElement"></a>

```python
from cdktn_provider_awscc import stepfunctions_state_machine_alias

stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.isTerraformResource"></a>

```python
from cdktn_provider_awscc import stepfunctions_state_machine_alias

stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import stepfunctions_state_machine_alias

stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a StepfunctionsStateMachineAlias resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the StepfunctionsStateMachineAlias to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing StepfunctionsStateMachineAlias that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/stepfunctions_state_machine_alias#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the StepfunctionsStateMachineAlias to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.deploymentPreference">deployment_preference</a></code> | <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference">StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.routingConfiguration">routing_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationList">StepfunctionsStateMachineAliasRoutingConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.deploymentPreferenceInput">deployment_preference_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreference">StepfunctionsStateMachineAliasDeploymentPreference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.routingConfigurationInput">routing_configuration_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfiguration">StepfunctionsStateMachineAliasRoutingConfiguration</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.stateMachineArnInput">state_machine_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.stateMachineArn">state_machine_arn</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `deployment_preference`<sup>Required</sup> <a name="deployment_preference" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.deploymentPreference"></a>

```python
deployment_preference: StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference">StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `routing_configuration`<sup>Required</sup> <a name="routing_configuration" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.routingConfiguration"></a>

```python
routing_configuration: StepfunctionsStateMachineAliasRoutingConfigurationList
```

- *Type:* <a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationList">StepfunctionsStateMachineAliasRoutingConfigurationList</a>

---

##### `deployment_preference_input`<sup>Optional</sup> <a name="deployment_preference_input" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.deploymentPreferenceInput"></a>

```python
deployment_preference_input: IResolvable | StepfunctionsStateMachineAliasDeploymentPreference
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreference">StepfunctionsStateMachineAliasDeploymentPreference</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `routing_configuration_input`<sup>Optional</sup> <a name="routing_configuration_input" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.routingConfigurationInput"></a>

```python
routing_configuration_input: IResolvable | typing.List[StepfunctionsStateMachineAliasRoutingConfiguration]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfiguration">StepfunctionsStateMachineAliasRoutingConfiguration</a>]

---

##### `state_machine_arn_input`<sup>Optional</sup> <a name="state_machine_arn_input" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.stateMachineArnInput"></a>

```python
state_machine_arn_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `state_machine_arn`<sup>Required</sup> <a name="state_machine_arn" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.stateMachineArn"></a>

```python
state_machine_arn: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### StepfunctionsStateMachineAliasConfig <a name="StepfunctionsStateMachineAliasConfig" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasConfig.Initializer"></a>

```python
from cdktn_provider_awscc import stepfunctions_state_machine_alias

stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  deployment_preference: StepfunctionsStateMachineAliasDeploymentPreference = None,
  description: str = None,
  name: str = None,
  routing_configuration: IResolvable | typing.List[StepfunctionsStateMachineAliasRoutingConfiguration] = None,
  state_machine_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasConfig.property.deploymentPreference">deployment_preference</a></code> | <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreference">StepfunctionsStateMachineAliasDeploymentPreference</a></code> | The settings to enable gradual state machine deployments. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasConfig.property.description">description</a></code> | <code>str</code> | An optional description of the alias. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasConfig.property.name">name</a></code> | <code>str</code> | The alias name. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasConfig.property.routingConfiguration">routing_configuration</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfiguration">StepfunctionsStateMachineAliasRoutingConfiguration</a>]</code> | The routing configuration of the alias. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasConfig.property.stateMachineArn">state_machine_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/stepfunctions_state_machine_alias#state_machine_arn StepfunctionsStateMachineAlias#state_machine_arn}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `deployment_preference`<sup>Optional</sup> <a name="deployment_preference" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasConfig.property.deploymentPreference"></a>

```python
deployment_preference: StepfunctionsStateMachineAliasDeploymentPreference
```

- *Type:* <a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreference">StepfunctionsStateMachineAliasDeploymentPreference</a>

The settings to enable gradual state machine deployments.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/stepfunctions_state_machine_alias#deployment_preference StepfunctionsStateMachineAlias#deployment_preference}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasConfig.property.description"></a>

```python
description: str
```

- *Type:* str

An optional description of the alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/stepfunctions_state_machine_alias#description StepfunctionsStateMachineAlias#description}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/stepfunctions_state_machine_alias#name StepfunctionsStateMachineAlias#name}

---

##### `routing_configuration`<sup>Optional</sup> <a name="routing_configuration" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasConfig.property.routingConfiguration"></a>

```python
routing_configuration: IResolvable | typing.List[StepfunctionsStateMachineAliasRoutingConfiguration]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfiguration">StepfunctionsStateMachineAliasRoutingConfiguration</a>]

The routing configuration of the alias.

One or two versions can be mapped to an alias to split StartExecution requests of the same state machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/stepfunctions_state_machine_alias#routing_configuration StepfunctionsStateMachineAlias#routing_configuration}

---

##### `state_machine_arn`<sup>Optional</sup> <a name="state_machine_arn" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasConfig.property.stateMachineArn"></a>

```python
state_machine_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/stepfunctions_state_machine_alias#state_machine_arn StepfunctionsStateMachineAlias#state_machine_arn}.

---

### StepfunctionsStateMachineAliasDeploymentPreference <a name="StepfunctionsStateMachineAliasDeploymentPreference" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreference"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreference.Initializer"></a>

```python
from cdktn_provider_awscc import stepfunctions_state_machine_alias

stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreference(
  alarms: typing.List[str] = None,
  interval: typing.Union[int, float] = None,
  percentage: typing.Union[int, float] = None,
  state_machine_version_arn: str = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreference.property.alarms">alarms</a></code> | <code>typing.List[str]</code> | A list of CloudWatch alarm names that will be monitored during the deployment. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreference.property.interval">interval</a></code> | <code>typing.Union[int, float]</code> | The time in minutes between each traffic shifting increment. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreference.property.percentage">percentage</a></code> | <code>typing.Union[int, float]</code> | The percentage of traffic to shift to the new version in each increment. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreference.property.stateMachineVersionArn">state_machine_version_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/stepfunctions_state_machine_alias#state_machine_version_arn StepfunctionsStateMachineAlias#state_machine_version_arn}. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreference.property.type">type</a></code> | <code>str</code> | The type of deployment to perform. |

---

##### `alarms`<sup>Optional</sup> <a name="alarms" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreference.property.alarms"></a>

```python
alarms: typing.List[str]
```

- *Type:* typing.List[str]

A list of CloudWatch alarm names that will be monitored during the deployment.

The deployment will fail and rollback if any alarms go into ALARM state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/stepfunctions_state_machine_alias#alarms StepfunctionsStateMachineAlias#alarms}

---

##### `interval`<sup>Optional</sup> <a name="interval" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreference.property.interval"></a>

```python
interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The time in minutes between each traffic shifting increment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/stepfunctions_state_machine_alias#interval StepfunctionsStateMachineAlias#interval}

---

##### `percentage`<sup>Optional</sup> <a name="percentage" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreference.property.percentage"></a>

```python
percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The percentage of traffic to shift to the new version in each increment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/stepfunctions_state_machine_alias#percentage StepfunctionsStateMachineAlias#percentage}

---

##### `state_machine_version_arn`<sup>Optional</sup> <a name="state_machine_version_arn" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreference.property.stateMachineVersionArn"></a>

```python
state_machine_version_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/stepfunctions_state_machine_alias#state_machine_version_arn StepfunctionsStateMachineAlias#state_machine_version_arn}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreference.property.type"></a>

```python
type: str
```

- *Type:* str

The type of deployment to perform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/stepfunctions_state_machine_alias#type StepfunctionsStateMachineAlias#type}

---

### StepfunctionsStateMachineAliasRoutingConfiguration <a name="StepfunctionsStateMachineAliasRoutingConfiguration" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import stepfunctions_state_machine_alias

stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfiguration(
  state_machine_version_arn: str = None,
  weight: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfiguration.property.stateMachineVersionArn">state_machine_version_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) that identifies one or two state machine versions defined in the routing configuration. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfiguration.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | The percentage of traffic you want to route to the state machine version. |

---

##### `state_machine_version_arn`<sup>Optional</sup> <a name="state_machine_version_arn" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfiguration.property.stateMachineVersionArn"></a>

```python
state_machine_version_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) that identifies one or two state machine versions defined in the routing configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/stepfunctions_state_machine_alias#state_machine_version_arn StepfunctionsStateMachineAlias#state_machine_version_arn}

---

##### `weight`<sup>Optional</sup> <a name="weight" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfiguration.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The percentage of traffic you want to route to the state machine version.

The sum of the weights in the routing configuration must be equal to 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/stepfunctions_state_machine_alias#weight StepfunctionsStateMachineAlias#weight}

---

## Classes <a name="Classes" id="Classes"></a>

### StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference <a name="StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import stepfunctions_state_machine_alias

stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.resetAlarms">reset_alarms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.resetInterval">reset_interval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.resetPercentage">reset_percentage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.resetStateMachineVersionArn">reset_state_machine_version_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_alarms` <a name="reset_alarms" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.resetAlarms"></a>

```python
def reset_alarms() -> None
```

##### `reset_interval` <a name="reset_interval" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.resetInterval"></a>

```python
def reset_interval() -> None
```

##### `reset_percentage` <a name="reset_percentage" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.resetPercentage"></a>

```python
def reset_percentage() -> None
```

##### `reset_state_machine_version_arn` <a name="reset_state_machine_version_arn" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.resetStateMachineVersionArn"></a>

```python
def reset_state_machine_version_arn() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.property.alarmsInput">alarms_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.property.intervalInput">interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.property.percentageInput">percentage_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.property.stateMachineVersionArnInput">state_machine_version_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.property.alarms">alarms</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.property.interval">interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.property.percentage">percentage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.property.stateMachineVersionArn">state_machine_version_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreference">StepfunctionsStateMachineAliasDeploymentPreference</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `alarms_input`<sup>Optional</sup> <a name="alarms_input" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.property.alarmsInput"></a>

```python
alarms_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `interval_input`<sup>Optional</sup> <a name="interval_input" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.property.intervalInput"></a>

```python
interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `percentage_input`<sup>Optional</sup> <a name="percentage_input" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.property.percentageInput"></a>

```python
percentage_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `state_machine_version_arn_input`<sup>Optional</sup> <a name="state_machine_version_arn_input" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.property.stateMachineVersionArnInput"></a>

```python
state_machine_version_arn_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `alarms`<sup>Required</sup> <a name="alarms" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.property.alarms"></a>

```python
alarms: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.property.interval"></a>

```python
interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `percentage`<sup>Required</sup> <a name="percentage" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.property.percentage"></a>

```python
percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `state_machine_version_arn`<sup>Required</sup> <a name="state_machine_version_arn" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.property.stateMachineVersionArn"></a>

```python
state_machine_version_arn: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | StepfunctionsStateMachineAliasDeploymentPreference
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreference">StepfunctionsStateMachineAliasDeploymentPreference</a>

---


### StepfunctionsStateMachineAliasRoutingConfigurationList <a name="StepfunctionsStateMachineAliasRoutingConfigurationList" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationList.Initializer"></a>

```python
from cdktn_provider_awscc import stepfunctions_state_machine_alias

stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> StepfunctionsStateMachineAliasRoutingConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfiguration">StepfunctionsStateMachineAliasRoutingConfiguration</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[StepfunctionsStateMachineAliasRoutingConfiguration]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfiguration">StepfunctionsStateMachineAliasRoutingConfiguration</a>]

---


### StepfunctionsStateMachineAliasRoutingConfigurationOutputReference <a name="StepfunctionsStateMachineAliasRoutingConfigurationOutputReference" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import stepfunctions_state_machine_alias

stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.resetStateMachineVersionArn">reset_state_machine_version_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.resetWeight">reset_weight</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_state_machine_version_arn` <a name="reset_state_machine_version_arn" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.resetStateMachineVersionArn"></a>

```python
def reset_state_machine_version_arn() -> None
```

##### `reset_weight` <a name="reset_weight" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.resetWeight"></a>

```python
def reset_weight() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.property.stateMachineVersionArnInput">state_machine_version_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.property.weightInput">weight_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.property.stateMachineVersionArn">state_machine_version_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfiguration">StepfunctionsStateMachineAliasRoutingConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `state_machine_version_arn_input`<sup>Optional</sup> <a name="state_machine_version_arn_input" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.property.stateMachineVersionArnInput"></a>

```python
state_machine_version_arn_input: str
```

- *Type:* str

---

##### `weight_input`<sup>Optional</sup> <a name="weight_input" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.property.weightInput"></a>

```python
weight_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `state_machine_version_arn`<sup>Required</sup> <a name="state_machine_version_arn" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.property.stateMachineVersionArn"></a>

```python
state_machine_version_arn: str
```

- *Type:* str

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | StepfunctionsStateMachineAliasRoutingConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfiguration">StepfunctionsStateMachineAliasRoutingConfiguration</a>

---



