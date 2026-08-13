# `datasyncAgent` Submodule <a name="`datasyncAgent` Submodule" id="@cdktn/provider-awscc.datasyncAgent"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatasyncAgent <a name="DatasyncAgent" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datasync_agent awscc_datasync_agent}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.Initializer"></a>

```python
from cdktn_provider_awscc import datasync_agent

datasyncAgent.DatasyncAgent(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  activation_key: str = None,
  agent_name: str = None,
  security_group_arns: typing.List[str] = None,
  subnet_arns: typing.List[str] = None,
  tags: IResolvable | typing.List[DatasyncAgentTags] = None,
  vpc_endpoint_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.Initializer.parameter.activationKey">activation_key</a></code> | <code>str</code> | Activation key of the Agent. |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.Initializer.parameter.agentName">agent_name</a></code> | <code>str</code> | The name configured for the agent. Text reference used to identify the agent in the console. |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.Initializer.parameter.securityGroupArns">security_group_arns</a></code> | <code>typing.List[str]</code> | The ARNs of the security group used to protect your data transfer task subnets. |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.Initializer.parameter.subnetArns">subnet_arns</a></code> | <code>typing.List[str]</code> | The ARNs of the subnets in which DataSync will create elastic network interfaces for each data transfer task. |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTags">DatasyncAgentTags</a>]</code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.Initializer.parameter.vpcEndpointId">vpc_endpoint_id</a></code> | <code>str</code> | The ID of the VPC endpoint that the agent has access to. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `activation_key`<sup>Optional</sup> <a name="activation_key" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.Initializer.parameter.activationKey"></a>

- *Type:* str

Activation key of the Agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datasync_agent#activation_key DatasyncAgent#activation_key}

---

##### `agent_name`<sup>Optional</sup> <a name="agent_name" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.Initializer.parameter.agentName"></a>

- *Type:* str

The name configured for the agent. Text reference used to identify the agent in the console.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datasync_agent#agent_name DatasyncAgent#agent_name}

---

##### `security_group_arns`<sup>Optional</sup> <a name="security_group_arns" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.Initializer.parameter.securityGroupArns"></a>

- *Type:* typing.List[str]

The ARNs of the security group used to protect your data transfer task subnets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datasync_agent#security_group_arns DatasyncAgent#security_group_arns}

---

##### `subnet_arns`<sup>Optional</sup> <a name="subnet_arns" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.Initializer.parameter.subnetArns"></a>

- *Type:* typing.List[str]

The ARNs of the subnets in which DataSync will create elastic network interfaces for each data transfer task.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datasync_agent#subnet_arns DatasyncAgent#subnet_arns}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTags">DatasyncAgentTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datasync_agent#tags DatasyncAgent#tags}

---

##### `vpc_endpoint_id`<sup>Optional</sup> <a name="vpc_endpoint_id" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.Initializer.parameter.vpcEndpointId"></a>

- *Type:* str

The ID of the VPC endpoint that the agent has access to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datasync_agent#vpc_endpoint_id DatasyncAgent#vpc_endpoint_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.resetActivationKey">reset_activation_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.resetAgentName">reset_agent_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.resetSecurityGroupArns">reset_security_group_arns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.resetSubnetArns">reset_subnet_arns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.resetVpcEndpointId">reset_vpc_endpoint_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[DatasyncAgentTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTags">DatasyncAgentTags</a>]

---

##### `reset_activation_key` <a name="reset_activation_key" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.resetActivationKey"></a>

```python
def reset_activation_key() -> None
```

##### `reset_agent_name` <a name="reset_agent_name" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.resetAgentName"></a>

```python
def reset_agent_name() -> None
```

##### `reset_security_group_arns` <a name="reset_security_group_arns" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.resetSecurityGroupArns"></a>

```python
def reset_security_group_arns() -> None
```

##### `reset_subnet_arns` <a name="reset_subnet_arns" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.resetSubnetArns"></a>

```python
def reset_subnet_arns() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_vpc_endpoint_id` <a name="reset_vpc_endpoint_id" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.resetVpcEndpointId"></a>

```python
def reset_vpc_endpoint_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DatasyncAgent resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.isConstruct"></a>

```python
from cdktn_provider_awscc import datasync_agent

datasyncAgent.DatasyncAgent.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.isTerraformElement"></a>

```python
from cdktn_provider_awscc import datasync_agent

datasyncAgent.DatasyncAgent.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.isTerraformResource"></a>

```python
from cdktn_provider_awscc import datasync_agent

datasyncAgent.DatasyncAgent.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import datasync_agent

datasyncAgent.DatasyncAgent.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DatasyncAgent resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DatasyncAgent to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DatasyncAgent that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datasync_agent#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DatasyncAgent to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.property.agentArn">agent_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.property.endpointType">endpoint_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsList">DatasyncAgentTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.property.activationKeyInput">activation_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.property.agentNameInput">agent_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.property.securityGroupArnsInput">security_group_arns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.property.subnetArnsInput">subnet_arns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTags">DatasyncAgentTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.property.vpcEndpointIdInput">vpc_endpoint_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.property.activationKey">activation_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.property.agentName">agent_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.property.securityGroupArns">security_group_arns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.property.subnetArns">subnet_arns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.property.vpcEndpointId">vpc_endpoint_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `agent_arn`<sup>Required</sup> <a name="agent_arn" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.property.agentArn"></a>

```python
agent_arn: str
```

- *Type:* str

---

##### `endpoint_type`<sup>Required</sup> <a name="endpoint_type" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.property.endpointType"></a>

```python
endpoint_type: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.property.tags"></a>

```python
tags: DatasyncAgentTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsList">DatasyncAgentTagsList</a>

---

##### `activation_key_input`<sup>Optional</sup> <a name="activation_key_input" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.property.activationKeyInput"></a>

```python
activation_key_input: str
```

- *Type:* str

---

##### `agent_name_input`<sup>Optional</sup> <a name="agent_name_input" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.property.agentNameInput"></a>

```python
agent_name_input: str
```

- *Type:* str

---

##### `security_group_arns_input`<sup>Optional</sup> <a name="security_group_arns_input" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.property.securityGroupArnsInput"></a>

```python
security_group_arns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_arns_input`<sup>Optional</sup> <a name="subnet_arns_input" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.property.subnetArnsInput"></a>

```python
subnet_arns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[DatasyncAgentTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTags">DatasyncAgentTags</a>]

---

##### `vpc_endpoint_id_input`<sup>Optional</sup> <a name="vpc_endpoint_id_input" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.property.vpcEndpointIdInput"></a>

```python
vpc_endpoint_id_input: str
```

- *Type:* str

---

##### `activation_key`<sup>Required</sup> <a name="activation_key" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.property.activationKey"></a>

```python
activation_key: str
```

- *Type:* str

---

##### `agent_name`<sup>Required</sup> <a name="agent_name" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.property.agentName"></a>

```python
agent_name: str
```

- *Type:* str

---

##### `security_group_arns`<sup>Required</sup> <a name="security_group_arns" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.property.securityGroupArns"></a>

```python
security_group_arns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_arns`<sup>Required</sup> <a name="subnet_arns" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.property.subnetArns"></a>

```python
subnet_arns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `vpc_endpoint_id`<sup>Required</sup> <a name="vpc_endpoint_id" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.property.vpcEndpointId"></a>

```python
vpc_endpoint_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DatasyncAgentConfig <a name="DatasyncAgentConfig" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgentConfig.Initializer"></a>

```python
from cdktn_provider_awscc import datasync_agent

datasyncAgent.DatasyncAgentConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  activation_key: str = None,
  agent_name: str = None,
  security_group_arns: typing.List[str] = None,
  subnet_arns: typing.List[str] = None,
  tags: IResolvable | typing.List[DatasyncAgentTags] = None,
  vpc_endpoint_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgentConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgentConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgentConfig.property.activationKey">activation_key</a></code> | <code>str</code> | Activation key of the Agent. |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgentConfig.property.agentName">agent_name</a></code> | <code>str</code> | The name configured for the agent. Text reference used to identify the agent in the console. |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgentConfig.property.securityGroupArns">security_group_arns</a></code> | <code>typing.List[str]</code> | The ARNs of the security group used to protect your data transfer task subnets. |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgentConfig.property.subnetArns">subnet_arns</a></code> | <code>typing.List[str]</code> | The ARNs of the subnets in which DataSync will create elastic network interfaces for each data transfer task. |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgentConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTags">DatasyncAgentTags</a>]</code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgentConfig.property.vpcEndpointId">vpc_endpoint_id</a></code> | <code>str</code> | The ID of the VPC endpoint that the agent has access to. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgentConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgentConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgentConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `activation_key`<sup>Optional</sup> <a name="activation_key" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgentConfig.property.activationKey"></a>

```python
activation_key: str
```

- *Type:* str

Activation key of the Agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datasync_agent#activation_key DatasyncAgent#activation_key}

---

##### `agent_name`<sup>Optional</sup> <a name="agent_name" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgentConfig.property.agentName"></a>

```python
agent_name: str
```

- *Type:* str

The name configured for the agent. Text reference used to identify the agent in the console.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datasync_agent#agent_name DatasyncAgent#agent_name}

---

##### `security_group_arns`<sup>Optional</sup> <a name="security_group_arns" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgentConfig.property.securityGroupArns"></a>

```python
security_group_arns: typing.List[str]
```

- *Type:* typing.List[str]

The ARNs of the security group used to protect your data transfer task subnets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datasync_agent#security_group_arns DatasyncAgent#security_group_arns}

---

##### `subnet_arns`<sup>Optional</sup> <a name="subnet_arns" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgentConfig.property.subnetArns"></a>

```python
subnet_arns: typing.List[str]
```

- *Type:* typing.List[str]

The ARNs of the subnets in which DataSync will create elastic network interfaces for each data transfer task.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datasync_agent#subnet_arns DatasyncAgent#subnet_arns}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgentConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[DatasyncAgentTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTags">DatasyncAgentTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datasync_agent#tags DatasyncAgent#tags}

---

##### `vpc_endpoint_id`<sup>Optional</sup> <a name="vpc_endpoint_id" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgentConfig.property.vpcEndpointId"></a>

```python
vpc_endpoint_id: str
```

- *Type:* str

The ID of the VPC endpoint that the agent has access to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datasync_agent#vpc_endpoint_id DatasyncAgent#vpc_endpoint_id}

---

### DatasyncAgentTags <a name="DatasyncAgentTags" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTags.Initializer"></a>

```python
from cdktn_provider_awscc import datasync_agent

datasyncAgent.DatasyncAgentTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTags.property.key">key</a></code> | <code>str</code> | The key for an AWS resource tag. |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTags.property.value">value</a></code> | <code>str</code> | The value for an AWS resource tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key for an AWS resource tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datasync_agent#key DatasyncAgent#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for an AWS resource tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datasync_agent#value DatasyncAgent#value}

---

## Classes <a name="Classes" id="Classes"></a>

### DatasyncAgentTagsList <a name="DatasyncAgentTagsList" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import datasync_agent

datasyncAgent.DatasyncAgentTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DatasyncAgentTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTags">DatasyncAgentTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DatasyncAgentTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTags">DatasyncAgentTags</a>]

---


### DatasyncAgentTagsOutputReference <a name="DatasyncAgentTagsOutputReference" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import datasync_agent

datasyncAgent.DatasyncAgentTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTags">DatasyncAgentTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DatasyncAgentTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTags">DatasyncAgentTags</a>

---



