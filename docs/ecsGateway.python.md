# `ecsGateway` Submodule <a name="`ecsGateway` Submodule" id="@cdktn/provider-awscc.ecsGateway"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EcsGateway <a name="EcsGateway" id="@cdktn/provider-awscc.ecsGateway.EcsGateway"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/ecs_gateway awscc_ecs_gateway}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.Initializer"></a>

```python
from cdktn_provider_awscc import ecs_gateway

ecsGateway.EcsGateway(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  configuration: EcsGatewayConfiguration,
  gateway_name: str,
  infrastructure_role_arn: str,
  deletion_protection: bool | IResolvable = None,
  propagate_tags: str = None,
  tags: IResolvable | typing.List[EcsGatewayTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGateway.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGateway.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGateway.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGateway.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGateway.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGateway.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGateway.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGateway.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGateway.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGateway.Initializer.parameter.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfiguration">EcsGatewayConfiguration</a></code> | The configuration for the gateway. |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGateway.Initializer.parameter.gatewayName">gateway_name</a></code> | <code>str</code> | The name of the gateway. Up to 255 letters (uppercase and lowercase), numbers, and hyphens are allowed. |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGateway.Initializer.parameter.infrastructureRoleArn">infrastructure_role_arn</a></code> | <code>str</code> | The ARN of the IAM role that ECS uses to manage infrastructure for the gateway. |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGateway.Initializer.parameter.deletionProtection">deletion_protection</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether deletion protection is enabled for the gateway. |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGateway.Initializer.parameter.propagateTags">propagate_tags</a></code> | <code>str</code> | Specifies whether to propagate the tags from the gateway to other resources. |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGateway.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayTags">EcsGatewayTags</a>]</code> | The metadata that you apply to the gateway to help you categorize and organize them. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.Initializer.parameter.configuration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfiguration">EcsGatewayConfiguration</a>

The configuration for the gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/ecs_gateway#configuration EcsGateway#configuration}

---

##### `gateway_name`<sup>Required</sup> <a name="gateway_name" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.Initializer.parameter.gatewayName"></a>

- *Type:* str

The name of the gateway. Up to 255 letters (uppercase and lowercase), numbers, and hyphens are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/ecs_gateway#gateway_name EcsGateway#gateway_name}

---

##### `infrastructure_role_arn`<sup>Required</sup> <a name="infrastructure_role_arn" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.Initializer.parameter.infrastructureRoleArn"></a>

- *Type:* str

The ARN of the IAM role that ECS uses to manage infrastructure for the gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/ecs_gateway#infrastructure_role_arn EcsGateway#infrastructure_role_arn}

---

##### `deletion_protection`<sup>Optional</sup> <a name="deletion_protection" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.Initializer.parameter.deletionProtection"></a>

- *Type:* bool | cdktn.IResolvable

Whether deletion protection is enabled for the gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/ecs_gateway#deletion_protection EcsGateway#deletion_protection}

---

##### `propagate_tags`<sup>Optional</sup> <a name="propagate_tags" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.Initializer.parameter.propagateTags"></a>

- *Type:* str

Specifies whether to propagate the tags from the gateway to other resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/ecs_gateway#propagate_tags EcsGateway#propagate_tags}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayTags">EcsGatewayTags</a>]

The metadata that you apply to the gateway to help you categorize and organize them.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/ecs_gateway#tags EcsGateway#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGateway.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGateway.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGateway.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGateway.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGateway.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGateway.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGateway.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGateway.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGateway.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGateway.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGateway.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGateway.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGateway.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGateway.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGateway.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGateway.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGateway.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGateway.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGateway.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGateway.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGateway.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGateway.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGateway.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGateway.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGateway.putConfiguration">put_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGateway.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGateway.resetDeletionProtection">reset_deletion_protection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGateway.resetPropagateTags">reset_propagate_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGateway.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_configuration` <a name="put_configuration" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.putConfiguration"></a>

```python
def put_configuration(
  host_shared_alb: EcsGatewayConfigurationHostSharedAlb
) -> None
```

###### `host_shared_alb`<sup>Required</sup> <a name="host_shared_alb" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.putConfiguration.parameter.hostSharedAlb"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlb">EcsGatewayConfigurationHostSharedAlb</a>

The host shared ALB configuration for the gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/ecs_gateway#host_shared_alb EcsGateway#host_shared_alb}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[EcsGatewayTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayTags">EcsGatewayTags</a>]

---

##### `reset_deletion_protection` <a name="reset_deletion_protection" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.resetDeletionProtection"></a>

```python
def reset_deletion_protection() -> None
```

##### `reset_propagate_tags` <a name="reset_propagate_tags" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.resetPropagateTags"></a>

```python
def reset_propagate_tags() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGateway.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGateway.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGateway.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGateway.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a EcsGateway resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.isConstruct"></a>

```python
from cdktn_provider_awscc import ecs_gateway

ecsGateway.EcsGateway.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.isTerraformElement"></a>

```python
from cdktn_provider_awscc import ecs_gateway

ecsGateway.EcsGateway.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.isTerraformResource"></a>

```python
from cdktn_provider_awscc import ecs_gateway

ecsGateway.EcsGateway.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import ecs_gateway

ecsGateway.EcsGateway.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a EcsGateway resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the EcsGateway to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing EcsGateway that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/ecs_gateway#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the EcsGateway to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGateway.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGateway.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGateway.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGateway.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGateway.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGateway.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGateway.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGateway.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGateway.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGateway.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGateway.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGateway.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGateway.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGateway.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGateway.property.accessType">access_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGateway.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGateway.property.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationOutputReference">EcsGatewayConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGateway.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGateway.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGateway.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGateway.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsList">EcsGatewayTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGateway.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGateway.property.configurationInput">configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfiguration">EcsGatewayConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGateway.property.deletionProtectionInput">deletion_protection_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGateway.property.gatewayNameInput">gateway_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGateway.property.infrastructureRoleArnInput">infrastructure_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGateway.property.propagateTagsInput">propagate_tags_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGateway.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayTags">EcsGatewayTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGateway.property.deletionProtection">deletion_protection</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGateway.property.gatewayName">gateway_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGateway.property.infrastructureRoleArn">infrastructure_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGateway.property.propagateTags">propagate_tags</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `access_type`<sup>Required</sup> <a name="access_type" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.property.accessType"></a>

```python
access_type: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.property.configuration"></a>

```python
configuration: EcsGatewayConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationOutputReference">EcsGatewayConfigurationOutputReference</a>

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.property.tags"></a>

```python
tags: EcsGatewayTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsList">EcsGatewayTagsList</a>

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `configuration_input`<sup>Optional</sup> <a name="configuration_input" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.property.configurationInput"></a>

```python
configuration_input: IResolvable | EcsGatewayConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfiguration">EcsGatewayConfiguration</a>

---

##### `deletion_protection_input`<sup>Optional</sup> <a name="deletion_protection_input" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.property.deletionProtectionInput"></a>

```python
deletion_protection_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `gateway_name_input`<sup>Optional</sup> <a name="gateway_name_input" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.property.gatewayNameInput"></a>

```python
gateway_name_input: str
```

- *Type:* str

---

##### `infrastructure_role_arn_input`<sup>Optional</sup> <a name="infrastructure_role_arn_input" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.property.infrastructureRoleArnInput"></a>

```python
infrastructure_role_arn_input: str
```

- *Type:* str

---

##### `propagate_tags_input`<sup>Optional</sup> <a name="propagate_tags_input" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.property.propagateTagsInput"></a>

```python
propagate_tags_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[EcsGatewayTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayTags">EcsGatewayTags</a>]

---

##### `deletion_protection`<sup>Required</sup> <a name="deletion_protection" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.property.deletionProtection"></a>

```python
deletion_protection: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `gateway_name`<sup>Required</sup> <a name="gateway_name" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.property.gatewayName"></a>

```python
gateway_name: str
```

- *Type:* str

---

##### `infrastructure_role_arn`<sup>Required</sup> <a name="infrastructure_role_arn" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.property.infrastructureRoleArn"></a>

```python
infrastructure_role_arn: str
```

- *Type:* str

---

##### `propagate_tags`<sup>Required</sup> <a name="propagate_tags" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.property.propagateTags"></a>

```python
propagate_tags: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGateway.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### EcsGatewayConfig <a name="EcsGatewayConfig" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfig.Initializer"></a>

```python
from cdktn_provider_awscc import ecs_gateway

ecsGateway.EcsGatewayConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  configuration: EcsGatewayConfiguration,
  gateway_name: str,
  infrastructure_role_arn: str,
  deletion_protection: bool | IResolvable = None,
  propagate_tags: str = None,
  tags: IResolvable | typing.List[EcsGatewayTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfig.property.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfiguration">EcsGatewayConfiguration</a></code> | The configuration for the gateway. |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfig.property.gatewayName">gateway_name</a></code> | <code>str</code> | The name of the gateway. Up to 255 letters (uppercase and lowercase), numbers, and hyphens are allowed. |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfig.property.infrastructureRoleArn">infrastructure_role_arn</a></code> | <code>str</code> | The ARN of the IAM role that ECS uses to manage infrastructure for the gateway. |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfig.property.deletionProtection">deletion_protection</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether deletion protection is enabled for the gateway. |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfig.property.propagateTags">propagate_tags</a></code> | <code>str</code> | Specifies whether to propagate the tags from the gateway to other resources. |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayTags">EcsGatewayTags</a>]</code> | The metadata that you apply to the gateway to help you categorize and organize them. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfig.property.configuration"></a>

```python
configuration: EcsGatewayConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfiguration">EcsGatewayConfiguration</a>

The configuration for the gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/ecs_gateway#configuration EcsGateway#configuration}

---

##### `gateway_name`<sup>Required</sup> <a name="gateway_name" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfig.property.gatewayName"></a>

```python
gateway_name: str
```

- *Type:* str

The name of the gateway. Up to 255 letters (uppercase and lowercase), numbers, and hyphens are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/ecs_gateway#gateway_name EcsGateway#gateway_name}

---

##### `infrastructure_role_arn`<sup>Required</sup> <a name="infrastructure_role_arn" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfig.property.infrastructureRoleArn"></a>

```python
infrastructure_role_arn: str
```

- *Type:* str

The ARN of the IAM role that ECS uses to manage infrastructure for the gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/ecs_gateway#infrastructure_role_arn EcsGateway#infrastructure_role_arn}

---

##### `deletion_protection`<sup>Optional</sup> <a name="deletion_protection" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfig.property.deletionProtection"></a>

```python
deletion_protection: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether deletion protection is enabled for the gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/ecs_gateway#deletion_protection EcsGateway#deletion_protection}

---

##### `propagate_tags`<sup>Optional</sup> <a name="propagate_tags" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfig.property.propagateTags"></a>

```python
propagate_tags: str
```

- *Type:* str

Specifies whether to propagate the tags from the gateway to other resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/ecs_gateway#propagate_tags EcsGateway#propagate_tags}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[EcsGatewayTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayTags">EcsGatewayTags</a>]

The metadata that you apply to the gateway to help you categorize and organize them.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/ecs_gateway#tags EcsGateway#tags}

---

### EcsGatewayConfiguration <a name="EcsGatewayConfiguration" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import ecs_gateway

ecsGateway.EcsGatewayConfiguration(
  host_shared_alb: EcsGatewayConfigurationHostSharedAlb
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfiguration.property.hostSharedAlb">host_shared_alb</a></code> | <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlb">EcsGatewayConfigurationHostSharedAlb</a></code> | The host shared ALB configuration for the gateway. |

---

##### `host_shared_alb`<sup>Required</sup> <a name="host_shared_alb" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfiguration.property.hostSharedAlb"></a>

```python
host_shared_alb: EcsGatewayConfigurationHostSharedAlb
```

- *Type:* <a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlb">EcsGatewayConfigurationHostSharedAlb</a>

The host shared ALB configuration for the gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/ecs_gateway#host_shared_alb EcsGateway#host_shared_alb}

---

### EcsGatewayConfigurationHostSharedAlb <a name="EcsGatewayConfigurationHostSharedAlb" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlb"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlb.Initializer"></a>

```python
from cdktn_provider_awscc import ecs_gateway

ecsGateway.EcsGatewayConfigurationHostSharedAlb(
  access_logs: EcsGatewayConfigurationHostSharedAlbAccessLogs = None,
  http_desync: str = None,
  max_alb_count: typing.Union[int, float] = None,
  network_configuration: EcsGatewayConfigurationHostSharedAlbNetworkConfiguration = None,
  port: typing.Union[int, float] = None,
  protocol: str = None,
  scheme: str = None,
  test_traffic_rules: EcsGatewayConfigurationHostSharedAlbTestTrafficRules = None,
  web_acl_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlb.property.accessLogs">access_logs</a></code> | <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogs">EcsGatewayConfigurationHostSharedAlbAccessLogs</a></code> | The access log configuration for the gateway ALB. Access logging is enabled by the presence of a destination. |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlb.property.httpDesync">http_desync</a></code> | <code>str</code> | The HTTP desync mitigation mode for the ALB. |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlb.property.maxAlbCount">max_alb_count</a></code> | <code>typing.Union[int, float]</code> | The maximum number of ALBs to provision for the gateway. |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlb.property.networkConfiguration">network_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbNetworkConfiguration">EcsGatewayConfigurationHostSharedAlbNetworkConfiguration</a></code> | The network configuration for the gateway ALB. |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlb.property.port">port</a></code> | <code>typing.Union[int, float]</code> | The port on which the ALB listens. |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlb.property.protocol">protocol</a></code> | <code>str</code> | The protocol for the ALB listener. |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlb.property.scheme">scheme</a></code> | <code>str</code> | The scheme for the ALB. |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlb.property.testTrafficRules">test_traffic_rules</a></code> | <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRules">EcsGatewayConfigurationHostSharedAlbTestTrafficRules</a></code> | The test traffic rules for the gateway ALB. |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlb.property.webAclArn">web_acl_arn</a></code> | <code>str</code> | The ARN of the WAFv2 web ACL to associate with the ALB. |

---

##### `access_logs`<sup>Optional</sup> <a name="access_logs" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlb.property.accessLogs"></a>

```python
access_logs: EcsGatewayConfigurationHostSharedAlbAccessLogs
```

- *Type:* <a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogs">EcsGatewayConfigurationHostSharedAlbAccessLogs</a>

The access log configuration for the gateway ALB. Access logging is enabled by the presence of a destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/ecs_gateway#access_logs EcsGateway#access_logs}

---

##### `http_desync`<sup>Optional</sup> <a name="http_desync" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlb.property.httpDesync"></a>

```python
http_desync: str
```

- *Type:* str

The HTTP desync mitigation mode for the ALB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/ecs_gateway#http_desync EcsGateway#http_desync}

---

##### `max_alb_count`<sup>Optional</sup> <a name="max_alb_count" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlb.property.maxAlbCount"></a>

```python
max_alb_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum number of ALBs to provision for the gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/ecs_gateway#max_alb_count EcsGateway#max_alb_count}

---

##### `network_configuration`<sup>Optional</sup> <a name="network_configuration" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlb.property.networkConfiguration"></a>

```python
network_configuration: EcsGatewayConfigurationHostSharedAlbNetworkConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbNetworkConfiguration">EcsGatewayConfigurationHostSharedAlbNetworkConfiguration</a>

The network configuration for the gateway ALB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/ecs_gateway#network_configuration EcsGateway#network_configuration}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlb.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The port on which the ALB listens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/ecs_gateway#port EcsGateway#port}

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlb.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

The protocol for the ALB listener.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/ecs_gateway#protocol EcsGateway#protocol}

---

##### `scheme`<sup>Optional</sup> <a name="scheme" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlb.property.scheme"></a>

```python
scheme: str
```

- *Type:* str

The scheme for the ALB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/ecs_gateway#scheme EcsGateway#scheme}

---

##### `test_traffic_rules`<sup>Optional</sup> <a name="test_traffic_rules" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlb.property.testTrafficRules"></a>

```python
test_traffic_rules: EcsGatewayConfigurationHostSharedAlbTestTrafficRules
```

- *Type:* <a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRules">EcsGatewayConfigurationHostSharedAlbTestTrafficRules</a>

The test traffic rules for the gateway ALB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/ecs_gateway#test_traffic_rules EcsGateway#test_traffic_rules}

---

##### `web_acl_arn`<sup>Optional</sup> <a name="web_acl_arn" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlb.property.webAclArn"></a>

```python
web_acl_arn: str
```

- *Type:* str

The ARN of the WAFv2 web ACL to associate with the ALB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/ecs_gateway#web_acl_arn EcsGateway#web_acl_arn}

---

### EcsGatewayConfigurationHostSharedAlbAccessLogs <a name="EcsGatewayConfigurationHostSharedAlbAccessLogs" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogs.Initializer"></a>

```python
from cdktn_provider_awscc import ecs_gateway

ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogs(
  destination: EcsGatewayConfigurationHostSharedAlbAccessLogsDestination = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogs.property.destination">destination</a></code> | <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestination">EcsGatewayConfigurationHostSharedAlbAccessLogsDestination</a></code> | The destination for gateway ALB access logs. Exactly one destination type must be specified. |

---

##### `destination`<sup>Optional</sup> <a name="destination" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogs.property.destination"></a>

```python
destination: EcsGatewayConfigurationHostSharedAlbAccessLogsDestination
```

- *Type:* <a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestination">EcsGatewayConfigurationHostSharedAlbAccessLogsDestination</a>

The destination for gateway ALB access logs. Exactly one destination type must be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/ecs_gateway#destination EcsGateway#destination}

---

### EcsGatewayConfigurationHostSharedAlbAccessLogsDestination <a name="EcsGatewayConfigurationHostSharedAlbAccessLogsDestination" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestination.Initializer"></a>

```python
from cdktn_provider_awscc import ecs_gateway

ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestination(
  s3: EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3 = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestination.property.s3">s3</a></code> | <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3">EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3</a></code> | The S3 destination for gateway ALB access logs. |

---

##### `s3`<sup>Optional</sup> <a name="s3" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestination.property.s3"></a>

```python
s3: EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3
```

- *Type:* <a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3">EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3</a>

The S3 destination for gateway ALB access logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/ecs_gateway#s3 EcsGateway#s3}

---

### EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3 <a name="EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3.Initializer"></a>

```python
from cdktn_provider_awscc import ecs_gateway

ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3(
  bucket: str = None,
  prefix: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3.property.bucket">bucket</a></code> | <code>str</code> | The S3 bucket for access logs. |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3.property.prefix">prefix</a></code> | <code>str</code> | The S3 prefix for access logs. |

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

The S3 bucket for access logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/ecs_gateway#bucket EcsGateway#bucket}

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

The S3 prefix for access logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/ecs_gateway#prefix EcsGateway#prefix}

---

### EcsGatewayConfigurationHostSharedAlbNetworkConfiguration <a name="EcsGatewayConfigurationHostSharedAlbNetworkConfiguration" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbNetworkConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import ecs_gateway

ecsGateway.EcsGatewayConfigurationHostSharedAlbNetworkConfiguration(
  inbound_security_group: str = None,
  ip_address_type: str = None,
  subnets: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbNetworkConfiguration.property.inboundSecurityGroup">inbound_security_group</a></code> | <code>str</code> | The inbound security group for the ALB. |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbNetworkConfiguration.property.ipAddressType">ip_address_type</a></code> | <code>str</code> | The IP address type for the ALB. |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbNetworkConfiguration.property.subnets">subnets</a></code> | <code>typing.List[str]</code> | The subnets for the ALB. |

---

##### `inbound_security_group`<sup>Optional</sup> <a name="inbound_security_group" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbNetworkConfiguration.property.inboundSecurityGroup"></a>

```python
inbound_security_group: str
```

- *Type:* str

The inbound security group for the ALB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/ecs_gateway#inbound_security_group EcsGateway#inbound_security_group}

---

##### `ip_address_type`<sup>Optional</sup> <a name="ip_address_type" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbNetworkConfiguration.property.ipAddressType"></a>

```python
ip_address_type: str
```

- *Type:* str

The IP address type for the ALB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/ecs_gateway#ip_address_type EcsGateway#ip_address_type}

---

##### `subnets`<sup>Optional</sup> <a name="subnets" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbNetworkConfiguration.property.subnets"></a>

```python
subnets: typing.List[str]
```

- *Type:* typing.List[str]

The subnets for the ALB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/ecs_gateway#subnets EcsGateway#subnets}

---

### EcsGatewayConfigurationHostSharedAlbTestTrafficRules <a name="EcsGatewayConfigurationHostSharedAlbTestTrafficRules" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRules.Initializer"></a>

```python
from cdktn_provider_awscc import ecs_gateway

ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRules(
  header: EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeader = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRules.property.header">header</a></code> | <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeader">EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeader</a></code> | The header configuration for test traffic routing. |

---

##### `header`<sup>Optional</sup> <a name="header" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRules.property.header"></a>

```python
header: EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeader
```

- *Type:* <a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeader">EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeader</a>

The header configuration for test traffic routing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/ecs_gateway#header EcsGateway#header}

---

### EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeader <a name="EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeader" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeader"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeader.Initializer"></a>

```python
from cdktn_provider_awscc import ecs_gateway

ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeader(
  name: str = None,
  values: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeader.property.name">name</a></code> | <code>str</code> | The name of the header. |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeader.property.values">values</a></code> | <code>typing.List[str]</code> | The values for the header. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeader.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/ecs_gateway#name EcsGateway#name}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeader.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

The values for the header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/ecs_gateway#values EcsGateway#values}

---

### EcsGatewayTags <a name="EcsGatewayTags" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayTags.Initializer"></a>

```python
from cdktn_provider_awscc import ecs_gateway

ecsGateway.EcsGatewayTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/ecs_gateway#key EcsGateway#key}. |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/ecs_gateway#value EcsGateway#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/ecs_gateway#key EcsGateway#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/ecs_gateway#value EcsGateway#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference <a name="EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ecs_gateway

ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.putS3">put_s3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.resetS3">reset_s3</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_s3` <a name="put_s3" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.putS3"></a>

```python
def put_s3(
  bucket: str = None,
  prefix: str = None
) -> None
```

###### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.putS3.parameter.bucket"></a>

- *Type:* str

The S3 bucket for access logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/ecs_gateway#bucket EcsGateway#bucket}

---

###### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.putS3.parameter.prefix"></a>

- *Type:* str

The S3 prefix for access logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/ecs_gateway#prefix EcsGateway#prefix}

---

##### `reset_s3` <a name="reset_s3" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.resetS3"></a>

```python
def reset_s3() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.property.s3">s3</a></code> | <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference">EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.property.s3Input">s3_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3">EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestination">EcsGatewayConfigurationHostSharedAlbAccessLogsDestination</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `s3`<sup>Required</sup> <a name="s3" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.property.s3"></a>

```python
s3: EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference">EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference</a>

---

##### `s3_input`<sup>Optional</sup> <a name="s3_input" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.property.s3Input"></a>

```python
s3_input: IResolvable | EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3">EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EcsGatewayConfigurationHostSharedAlbAccessLogsDestination
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestination">EcsGatewayConfigurationHostSharedAlbAccessLogsDestination</a>

---


### EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference <a name="EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ecs_gateway

ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.resetBucket">reset_bucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.resetPrefix">reset_prefix</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_bucket` <a name="reset_bucket" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.resetBucket"></a>

```python
def reset_bucket() -> None
```

##### `reset_prefix` <a name="reset_prefix" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.resetPrefix"></a>

```python
def reset_prefix() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.property.bucketInput">bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.property.prefixInput">prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.property.prefix">prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3">EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_input`<sup>Optional</sup> <a name="bucket_input" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.property.bucketInput"></a>

```python
bucket_input: str
```

- *Type:* str

---

##### `prefix_input`<sup>Optional</sup> <a name="prefix_input" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.property.prefixInput"></a>

```python
prefix_input: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3">EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3</a>

---


### EcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference <a name="EcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ecs_gateway

ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.putDestination">put_destination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.resetDestination">reset_destination</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_destination` <a name="put_destination" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.putDestination"></a>

```python
def put_destination(
  s3: EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3 = None
) -> None
```

###### `s3`<sup>Optional</sup> <a name="s3" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.putDestination.parameter.s3"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3">EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3</a>

The S3 destination for gateway ALB access logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/ecs_gateway#s3 EcsGateway#s3}

---

##### `reset_destination` <a name="reset_destination" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.resetDestination"></a>

```python
def reset_destination() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.property.destination">destination</a></code> | <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference">EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.property.destinationInput">destination_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestination">EcsGatewayConfigurationHostSharedAlbAccessLogsDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogs">EcsGatewayConfigurationHostSharedAlbAccessLogs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.property.destination"></a>

```python
destination: EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference">EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference</a>

---

##### `destination_input`<sup>Optional</sup> <a name="destination_input" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.property.destinationInput"></a>

```python
destination_input: IResolvable | EcsGatewayConfigurationHostSharedAlbAccessLogsDestination
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestination">EcsGatewayConfigurationHostSharedAlbAccessLogsDestination</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EcsGatewayConfigurationHostSharedAlbAccessLogs
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogs">EcsGatewayConfigurationHostSharedAlbAccessLogs</a>

---


### EcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference <a name="EcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ecs_gateway

ecsGateway.EcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.resetInboundSecurityGroup">reset_inbound_security_group</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.resetIpAddressType">reset_ip_address_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.resetSubnets">reset_subnets</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_inbound_security_group` <a name="reset_inbound_security_group" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.resetInboundSecurityGroup"></a>

```python
def reset_inbound_security_group() -> None
```

##### `reset_ip_address_type` <a name="reset_ip_address_type" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.resetIpAddressType"></a>

```python
def reset_ip_address_type() -> None
```

##### `reset_subnets` <a name="reset_subnets" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.resetSubnets"></a>

```python
def reset_subnets() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.property.inboundSecurityGroupInput">inbound_security_group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.property.ipAddressTypeInput">ip_address_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.property.subnetsInput">subnets_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.property.inboundSecurityGroup">inbound_security_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.property.ipAddressType">ip_address_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.property.subnets">subnets</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbNetworkConfiguration">EcsGatewayConfigurationHostSharedAlbNetworkConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `inbound_security_group_input`<sup>Optional</sup> <a name="inbound_security_group_input" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.property.inboundSecurityGroupInput"></a>

```python
inbound_security_group_input: str
```

- *Type:* str

---

##### `ip_address_type_input`<sup>Optional</sup> <a name="ip_address_type_input" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.property.ipAddressTypeInput"></a>

```python
ip_address_type_input: str
```

- *Type:* str

---

##### `subnets_input`<sup>Optional</sup> <a name="subnets_input" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.property.subnetsInput"></a>

```python
subnets_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `inbound_security_group`<sup>Required</sup> <a name="inbound_security_group" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.property.inboundSecurityGroup"></a>

```python
inbound_security_group: str
```

- *Type:* str

---

##### `ip_address_type`<sup>Required</sup> <a name="ip_address_type" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.property.ipAddressType"></a>

```python
ip_address_type: str
```

- *Type:* str

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.property.subnets"></a>

```python
subnets: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EcsGatewayConfigurationHostSharedAlbNetworkConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbNetworkConfiguration">EcsGatewayConfigurationHostSharedAlbNetworkConfiguration</a>

---


### EcsGatewayConfigurationHostSharedAlbOutputReference <a name="EcsGatewayConfigurationHostSharedAlbOutputReference" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ecs_gateway

ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.putAccessLogs">put_access_logs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.putNetworkConfiguration">put_network_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.putTestTrafficRules">put_test_traffic_rules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.resetAccessLogs">reset_access_logs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.resetHttpDesync">reset_http_desync</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.resetMaxAlbCount">reset_max_alb_count</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.resetNetworkConfiguration">reset_network_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.resetPort">reset_port</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.resetProtocol">reset_protocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.resetScheme">reset_scheme</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.resetTestTrafficRules">reset_test_traffic_rules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.resetWebAclArn">reset_web_acl_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_access_logs` <a name="put_access_logs" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.putAccessLogs"></a>

```python
def put_access_logs(
  destination: EcsGatewayConfigurationHostSharedAlbAccessLogsDestination = None
) -> None
```

###### `destination`<sup>Optional</sup> <a name="destination" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.putAccessLogs.parameter.destination"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestination">EcsGatewayConfigurationHostSharedAlbAccessLogsDestination</a>

The destination for gateway ALB access logs. Exactly one destination type must be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/ecs_gateway#destination EcsGateway#destination}

---

##### `put_network_configuration` <a name="put_network_configuration" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.putNetworkConfiguration"></a>

```python
def put_network_configuration(
  inbound_security_group: str = None,
  ip_address_type: str = None,
  subnets: typing.List[str] = None
) -> None
```

###### `inbound_security_group`<sup>Optional</sup> <a name="inbound_security_group" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.putNetworkConfiguration.parameter.inboundSecurityGroup"></a>

- *Type:* str

The inbound security group for the ALB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/ecs_gateway#inbound_security_group EcsGateway#inbound_security_group}

---

###### `ip_address_type`<sup>Optional</sup> <a name="ip_address_type" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.putNetworkConfiguration.parameter.ipAddressType"></a>

- *Type:* str

The IP address type for the ALB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/ecs_gateway#ip_address_type EcsGateway#ip_address_type}

---

###### `subnets`<sup>Optional</sup> <a name="subnets" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.putNetworkConfiguration.parameter.subnets"></a>

- *Type:* typing.List[str]

The subnets for the ALB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/ecs_gateway#subnets EcsGateway#subnets}

---

##### `put_test_traffic_rules` <a name="put_test_traffic_rules" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.putTestTrafficRules"></a>

```python
def put_test_traffic_rules(
  header: EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeader = None
) -> None
```

###### `header`<sup>Optional</sup> <a name="header" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.putTestTrafficRules.parameter.header"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeader">EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeader</a>

The header configuration for test traffic routing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/ecs_gateway#header EcsGateway#header}

---

##### `reset_access_logs` <a name="reset_access_logs" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.resetAccessLogs"></a>

```python
def reset_access_logs() -> None
```

##### `reset_http_desync` <a name="reset_http_desync" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.resetHttpDesync"></a>

```python
def reset_http_desync() -> None
```

##### `reset_max_alb_count` <a name="reset_max_alb_count" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.resetMaxAlbCount"></a>

```python
def reset_max_alb_count() -> None
```

##### `reset_network_configuration` <a name="reset_network_configuration" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.resetNetworkConfiguration"></a>

```python
def reset_network_configuration() -> None
```

##### `reset_port` <a name="reset_port" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.resetPort"></a>

```python
def reset_port() -> None
```

##### `reset_protocol` <a name="reset_protocol" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.resetProtocol"></a>

```python
def reset_protocol() -> None
```

##### `reset_scheme` <a name="reset_scheme" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.resetScheme"></a>

```python
def reset_scheme() -> None
```

##### `reset_test_traffic_rules` <a name="reset_test_traffic_rules" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.resetTestTrafficRules"></a>

```python
def reset_test_traffic_rules() -> None
```

##### `reset_web_acl_arn` <a name="reset_web_acl_arn" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.resetWebAclArn"></a>

```python
def reset_web_acl_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.property.accessLogs">access_logs</a></code> | <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference">EcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.property.currentAlbCount">current_alb_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.property.networkConfiguration">network_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference">EcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.property.testTrafficRules">test_traffic_rules</a></code> | <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference">EcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.property.accessLogsInput">access_logs_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogs">EcsGatewayConfigurationHostSharedAlbAccessLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.property.httpDesyncInput">http_desync_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.property.maxAlbCountInput">max_alb_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.property.networkConfigurationInput">network_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbNetworkConfiguration">EcsGatewayConfigurationHostSharedAlbNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.property.protocolInput">protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.property.schemeInput">scheme_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.property.testTrafficRulesInput">test_traffic_rules_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRules">EcsGatewayConfigurationHostSharedAlbTestTrafficRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.property.webAclArnInput">web_acl_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.property.httpDesync">http_desync</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.property.maxAlbCount">max_alb_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.property.scheme">scheme</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.property.webAclArn">web_acl_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlb">EcsGatewayConfigurationHostSharedAlb</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_logs`<sup>Required</sup> <a name="access_logs" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.property.accessLogs"></a>

```python
access_logs: EcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference">EcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference</a>

---

##### `current_alb_count`<sup>Required</sup> <a name="current_alb_count" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.property.currentAlbCount"></a>

```python
current_alb_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `network_configuration`<sup>Required</sup> <a name="network_configuration" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.property.networkConfiguration"></a>

```python
network_configuration: EcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference">EcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference</a>

---

##### `test_traffic_rules`<sup>Required</sup> <a name="test_traffic_rules" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.property.testTrafficRules"></a>

```python
test_traffic_rules: EcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference">EcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference</a>

---

##### `access_logs_input`<sup>Optional</sup> <a name="access_logs_input" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.property.accessLogsInput"></a>

```python
access_logs_input: IResolvable | EcsGatewayConfigurationHostSharedAlbAccessLogs
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogs">EcsGatewayConfigurationHostSharedAlbAccessLogs</a>

---

##### `http_desync_input`<sup>Optional</sup> <a name="http_desync_input" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.property.httpDesyncInput"></a>

```python
http_desync_input: str
```

- *Type:* str

---

##### `max_alb_count_input`<sup>Optional</sup> <a name="max_alb_count_input" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.property.maxAlbCountInput"></a>

```python
max_alb_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `network_configuration_input`<sup>Optional</sup> <a name="network_configuration_input" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.property.networkConfigurationInput"></a>

```python
network_configuration_input: IResolvable | EcsGatewayConfigurationHostSharedAlbNetworkConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbNetworkConfiguration">EcsGatewayConfigurationHostSharedAlbNetworkConfiguration</a>

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protocol_input`<sup>Optional</sup> <a name="protocol_input" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.property.protocolInput"></a>

```python
protocol_input: str
```

- *Type:* str

---

##### `scheme_input`<sup>Optional</sup> <a name="scheme_input" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.property.schemeInput"></a>

```python
scheme_input: str
```

- *Type:* str

---

##### `test_traffic_rules_input`<sup>Optional</sup> <a name="test_traffic_rules_input" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.property.testTrafficRulesInput"></a>

```python
test_traffic_rules_input: IResolvable | EcsGatewayConfigurationHostSharedAlbTestTrafficRules
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRules">EcsGatewayConfigurationHostSharedAlbTestTrafficRules</a>

---

##### `web_acl_arn_input`<sup>Optional</sup> <a name="web_acl_arn_input" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.property.webAclArnInput"></a>

```python
web_acl_arn_input: str
```

- *Type:* str

---

##### `http_desync`<sup>Required</sup> <a name="http_desync" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.property.httpDesync"></a>

```python
http_desync: str
```

- *Type:* str

---

##### `max_alb_count`<sup>Required</sup> <a name="max_alb_count" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.property.maxAlbCount"></a>

```python
max_alb_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `scheme`<sup>Required</sup> <a name="scheme" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.property.scheme"></a>

```python
scheme: str
```

- *Type:* str

---

##### `web_acl_arn`<sup>Required</sup> <a name="web_acl_arn" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.property.webAclArn"></a>

```python
web_acl_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EcsGatewayConfigurationHostSharedAlb
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlb">EcsGatewayConfigurationHostSharedAlb</a>

---


### EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference <a name="EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ecs_gateway

ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.resetValues">reset_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_values` <a name="reset_values" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.resetValues"></a>

```python
def reset_values() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeader">EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeader</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeader
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeader">EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeader</a>

---


### EcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference <a name="EcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ecs_gateway

ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.putHeader">put_header</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.resetHeader">reset_header</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_header` <a name="put_header" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.putHeader"></a>

```python
def put_header(
  name: str = None,
  values: typing.List[str] = None
) -> None
```

###### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.putHeader.parameter.name"></a>

- *Type:* str

The name of the header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/ecs_gateway#name EcsGateway#name}

---

###### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.putHeader.parameter.values"></a>

- *Type:* typing.List[str]

The values for the header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/ecs_gateway#values EcsGateway#values}

---

##### `reset_header` <a name="reset_header" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.resetHeader"></a>

```python
def reset_header() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.property.header">header</a></code> | <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference">EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.property.headerInput">header_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeader">EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeader</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRules">EcsGatewayConfigurationHostSharedAlbTestTrafficRules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `header`<sup>Required</sup> <a name="header" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.property.header"></a>

```python
header: EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference">EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference</a>

---

##### `header_input`<sup>Optional</sup> <a name="header_input" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.property.headerInput"></a>

```python
header_input: IResolvable | EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeader
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeader">EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeader</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EcsGatewayConfigurationHostSharedAlbTestTrafficRules
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRules">EcsGatewayConfigurationHostSharedAlbTestTrafficRules</a>

---


### EcsGatewayConfigurationOutputReference <a name="EcsGatewayConfigurationOutputReference" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ecs_gateway

ecsGateway.EcsGatewayConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationOutputReference.putHostSharedAlb">put_host_shared_alb</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_host_shared_alb` <a name="put_host_shared_alb" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationOutputReference.putHostSharedAlb"></a>

```python
def put_host_shared_alb(
  access_logs: EcsGatewayConfigurationHostSharedAlbAccessLogs = None,
  http_desync: str = None,
  max_alb_count: typing.Union[int, float] = None,
  network_configuration: EcsGatewayConfigurationHostSharedAlbNetworkConfiguration = None,
  port: typing.Union[int, float] = None,
  protocol: str = None,
  scheme: str = None,
  test_traffic_rules: EcsGatewayConfigurationHostSharedAlbTestTrafficRules = None,
  web_acl_arn: str = None
) -> None
```

###### `access_logs`<sup>Optional</sup> <a name="access_logs" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationOutputReference.putHostSharedAlb.parameter.accessLogs"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogs">EcsGatewayConfigurationHostSharedAlbAccessLogs</a>

The access log configuration for the gateway ALB. Access logging is enabled by the presence of a destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/ecs_gateway#access_logs EcsGateway#access_logs}

---

###### `http_desync`<sup>Optional</sup> <a name="http_desync" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationOutputReference.putHostSharedAlb.parameter.httpDesync"></a>

- *Type:* str

The HTTP desync mitigation mode for the ALB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/ecs_gateway#http_desync EcsGateway#http_desync}

---

###### `max_alb_count`<sup>Optional</sup> <a name="max_alb_count" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationOutputReference.putHostSharedAlb.parameter.maxAlbCount"></a>

- *Type:* typing.Union[int, float]

The maximum number of ALBs to provision for the gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/ecs_gateway#max_alb_count EcsGateway#max_alb_count}

---

###### `network_configuration`<sup>Optional</sup> <a name="network_configuration" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationOutputReference.putHostSharedAlb.parameter.networkConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbNetworkConfiguration">EcsGatewayConfigurationHostSharedAlbNetworkConfiguration</a>

The network configuration for the gateway ALB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/ecs_gateway#network_configuration EcsGateway#network_configuration}

---

###### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationOutputReference.putHostSharedAlb.parameter.port"></a>

- *Type:* typing.Union[int, float]

The port on which the ALB listens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/ecs_gateway#port EcsGateway#port}

---

###### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationOutputReference.putHostSharedAlb.parameter.protocol"></a>

- *Type:* str

The protocol for the ALB listener.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/ecs_gateway#protocol EcsGateway#protocol}

---

###### `scheme`<sup>Optional</sup> <a name="scheme" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationOutputReference.putHostSharedAlb.parameter.scheme"></a>

- *Type:* str

The scheme for the ALB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/ecs_gateway#scheme EcsGateway#scheme}

---

###### `test_traffic_rules`<sup>Optional</sup> <a name="test_traffic_rules" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationOutputReference.putHostSharedAlb.parameter.testTrafficRules"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRules">EcsGatewayConfigurationHostSharedAlbTestTrafficRules</a>

The test traffic rules for the gateway ALB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/ecs_gateway#test_traffic_rules EcsGateway#test_traffic_rules}

---

###### `web_acl_arn`<sup>Optional</sup> <a name="web_acl_arn" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationOutputReference.putHostSharedAlb.parameter.webAclArn"></a>

- *Type:* str

The ARN of the WAFv2 web ACL to associate with the ALB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/ecs_gateway#web_acl_arn EcsGateway#web_acl_arn}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationOutputReference.property.hostSharedAlb">host_shared_alb</a></code> | <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference">EcsGatewayConfigurationHostSharedAlbOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationOutputReference.property.hostSharedAlbInput">host_shared_alb_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlb">EcsGatewayConfigurationHostSharedAlb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfiguration">EcsGatewayConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `host_shared_alb`<sup>Required</sup> <a name="host_shared_alb" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationOutputReference.property.hostSharedAlb"></a>

```python
host_shared_alb: EcsGatewayConfigurationHostSharedAlbOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference">EcsGatewayConfigurationHostSharedAlbOutputReference</a>

---

##### `host_shared_alb_input`<sup>Optional</sup> <a name="host_shared_alb_input" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationOutputReference.property.hostSharedAlbInput"></a>

```python
host_shared_alb_input: IResolvable | EcsGatewayConfigurationHostSharedAlb
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlb">EcsGatewayConfigurationHostSharedAlb</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EcsGatewayConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfiguration">EcsGatewayConfiguration</a>

---


### EcsGatewayTagsList <a name="EcsGatewayTagsList" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import ecs_gateway

ecsGateway.EcsGatewayTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EcsGatewayTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayTags">EcsGatewayTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[EcsGatewayTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayTags">EcsGatewayTags</a>]

---


### EcsGatewayTagsOutputReference <a name="EcsGatewayTagsOutputReference" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ecs_gateway

ecsGateway.EcsGatewayTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayTags">EcsGatewayTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EcsGatewayTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayTags">EcsGatewayTags</a>

---



