# `shieldProtection` Submodule <a name="`shieldProtection` Submodule" id="@cdktn/provider-awscc.shieldProtection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ShieldProtection <a name="ShieldProtection" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/shield_protection awscc_shield_protection}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.Initializer"></a>

```python
from cdktn_provider_awscc import shield_protection

shieldProtection.ShieldProtection(
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
  resource_arn: str,
  application_layer_automatic_response_configuration: ShieldProtectionApplicationLayerAutomaticResponseConfiguration = None,
  health_check_arns: typing.List[str] = None,
  tags: IResolvable | typing.List[ShieldProtectionTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.Initializer.parameter.name">name</a></code> | <code>str</code> | Friendly name for the Protection. |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.Initializer.parameter.resourceArn">resource_arn</a></code> | <code>str</code> | The ARN (Amazon Resource Name) of the resource to be protected. |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.Initializer.parameter.applicationLayerAutomaticResponseConfiguration">application_layer_automatic_response_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfiguration">ShieldProtectionApplicationLayerAutomaticResponseConfiguration</a></code> | The automatic application layer DDoS mitigation settings for a Protection. |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.Initializer.parameter.healthCheckArns">health_check_arns</a></code> | <code>typing.List[str]</code> | The Amazon Resource Names (ARNs) of the health check to associate with the protection. |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTags">ShieldProtectionTags</a>]</code> | One or more tag key-value pairs for the Protection object. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.Initializer.parameter.name"></a>

- *Type:* str

Friendly name for the Protection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/shield_protection#name ShieldProtection#name}

---

##### `resource_arn`<sup>Required</sup> <a name="resource_arn" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.Initializer.parameter.resourceArn"></a>

- *Type:* str

The ARN (Amazon Resource Name) of the resource to be protected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/shield_protection#resource_arn ShieldProtection#resource_arn}

---

##### `application_layer_automatic_response_configuration`<sup>Optional</sup> <a name="application_layer_automatic_response_configuration" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.Initializer.parameter.applicationLayerAutomaticResponseConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfiguration">ShieldProtectionApplicationLayerAutomaticResponseConfiguration</a>

The automatic application layer DDoS mitigation settings for a Protection.

This configuration determines whether Shield Advanced automatically manages rules in the web ACL in order to respond to application layer events that Shield Advanced determines to be DDoS attacks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/shield_protection#application_layer_automatic_response_configuration ShieldProtection#application_layer_automatic_response_configuration}

---

##### `health_check_arns`<sup>Optional</sup> <a name="health_check_arns" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.Initializer.parameter.healthCheckArns"></a>

- *Type:* typing.List[str]

The Amazon Resource Names (ARNs) of the health check to associate with the protection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/shield_protection#health_check_arns ShieldProtection#health_check_arns}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTags">ShieldProtectionTags</a>]

One or more tag key-value pairs for the Protection object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/shield_protection#tags ShieldProtection#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.putApplicationLayerAutomaticResponseConfiguration">put_application_layer_automatic_response_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.resetApplicationLayerAutomaticResponseConfiguration">reset_application_layer_automatic_response_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.resetHealthCheckArns">reset_health_check_arns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_application_layer_automatic_response_configuration` <a name="put_application_layer_automatic_response_configuration" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.putApplicationLayerAutomaticResponseConfiguration"></a>

```python
def put_application_layer_automatic_response_configuration(
  action: ShieldProtectionApplicationLayerAutomaticResponseConfigurationAction = None,
  status: str = None
) -> None
```

###### `action`<sup>Optional</sup> <a name="action" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.putApplicationLayerAutomaticResponseConfiguration.parameter.action"></a>

- *Type:* <a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationAction">ShieldProtectionApplicationLayerAutomaticResponseConfigurationAction</a>

Specifies the action setting that Shield Advanced should use in the AWS WAF rules that it creates on behalf of the protected resource in response to DDoS attacks.

You specify this as part of the configuration for the automatic application layer DDoS mitigation feature, when you enable or update automatic mitigation. Shield Advanced creates the AWS WAF rules in a Shield Advanced-managed rule group, inside the web ACL that you have associated with the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/shield_protection#action ShieldProtection#action}

---

###### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.putApplicationLayerAutomaticResponseConfiguration.parameter.status"></a>

- *Type:* str

Indicates whether automatic application layer DDoS mitigation is enabled for the protection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/shield_protection#status ShieldProtection#status}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[ShieldProtectionTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTags">ShieldProtectionTags</a>]

---

##### `reset_application_layer_automatic_response_configuration` <a name="reset_application_layer_automatic_response_configuration" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.resetApplicationLayerAutomaticResponseConfiguration"></a>

```python
def reset_application_layer_automatic_response_configuration() -> None
```

##### `reset_health_check_arns` <a name="reset_health_check_arns" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.resetHealthCheckArns"></a>

```python
def reset_health_check_arns() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ShieldProtection resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.isConstruct"></a>

```python
from cdktn_provider_awscc import shield_protection

shieldProtection.ShieldProtection.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.isTerraformElement"></a>

```python
from cdktn_provider_awscc import shield_protection

shieldProtection.ShieldProtection.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.isTerraformResource"></a>

```python
from cdktn_provider_awscc import shield_protection

shieldProtection.ShieldProtection.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import shield_protection

shieldProtection.ShieldProtection.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ShieldProtection resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ShieldProtection to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ShieldProtection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/shield_protection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ShieldProtection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.applicationLayerAutomaticResponseConfiguration">application_layer_automatic_response_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference">ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.protectionArn">protection_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.protectionId">protection_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsList">ShieldProtectionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.applicationLayerAutomaticResponseConfigurationInput">application_layer_automatic_response_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfiguration">ShieldProtectionApplicationLayerAutomaticResponseConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.healthCheckArnsInput">health_check_arns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.resourceArnInput">resource_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTags">ShieldProtectionTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.healthCheckArns">health_check_arns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.resourceArn">resource_arn</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `application_layer_automatic_response_configuration`<sup>Required</sup> <a name="application_layer_automatic_response_configuration" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.applicationLayerAutomaticResponseConfiguration"></a>

```python
application_layer_automatic_response_configuration: ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference">ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `protection_arn`<sup>Required</sup> <a name="protection_arn" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.protectionArn"></a>

```python
protection_arn: str
```

- *Type:* str

---

##### `protection_id`<sup>Required</sup> <a name="protection_id" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.protectionId"></a>

```python
protection_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.tags"></a>

```python
tags: ShieldProtectionTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsList">ShieldProtectionTagsList</a>

---

##### `application_layer_automatic_response_configuration_input`<sup>Optional</sup> <a name="application_layer_automatic_response_configuration_input" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.applicationLayerAutomaticResponseConfigurationInput"></a>

```python
application_layer_automatic_response_configuration_input: IResolvable | ShieldProtectionApplicationLayerAutomaticResponseConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfiguration">ShieldProtectionApplicationLayerAutomaticResponseConfiguration</a>

---

##### `health_check_arns_input`<sup>Optional</sup> <a name="health_check_arns_input" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.healthCheckArnsInput"></a>

```python
health_check_arns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `resource_arn_input`<sup>Optional</sup> <a name="resource_arn_input" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.resourceArnInput"></a>

```python
resource_arn_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[ShieldProtectionTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTags">ShieldProtectionTags</a>]

---

##### `health_check_arns`<sup>Required</sup> <a name="health_check_arns" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.healthCheckArns"></a>

```python
health_check_arns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_arn`<sup>Required</sup> <a name="resource_arn" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.resourceArn"></a>

```python
resource_arn: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.shieldProtection.ShieldProtection.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ShieldProtectionApplicationLayerAutomaticResponseConfiguration <a name="ShieldProtectionApplicationLayerAutomaticResponseConfiguration" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import shield_protection

shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfiguration(
  action: ShieldProtectionApplicationLayerAutomaticResponseConfigurationAction = None,
  status: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfiguration.property.action">action</a></code> | <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationAction">ShieldProtectionApplicationLayerAutomaticResponseConfigurationAction</a></code> | Specifies the action setting that Shield Advanced should use in the AWS WAF rules that it creates on behalf of the protected resource in response to DDoS attacks. |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfiguration.property.status">status</a></code> | <code>str</code> | Indicates whether automatic application layer DDoS mitigation is enabled for the protection. |

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfiguration.property.action"></a>

```python
action: ShieldProtectionApplicationLayerAutomaticResponseConfigurationAction
```

- *Type:* <a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationAction">ShieldProtectionApplicationLayerAutomaticResponseConfigurationAction</a>

Specifies the action setting that Shield Advanced should use in the AWS WAF rules that it creates on behalf of the protected resource in response to DDoS attacks.

You specify this as part of the configuration for the automatic application layer DDoS mitigation feature, when you enable or update automatic mitigation. Shield Advanced creates the AWS WAF rules in a Shield Advanced-managed rule group, inside the web ACL that you have associated with the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/shield_protection#action ShieldProtection#action}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfiguration.property.status"></a>

```python
status: str
```

- *Type:* str

Indicates whether automatic application layer DDoS mitigation is enabled for the protection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/shield_protection#status ShieldProtection#status}

---

### ShieldProtectionApplicationLayerAutomaticResponseConfigurationAction <a name="ShieldProtectionApplicationLayerAutomaticResponseConfigurationAction" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationAction.Initializer"></a>

```python
from cdktn_provider_awscc import shield_protection

shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationAction(
  block: str = None,
  count: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationAction.property.block">block</a></code> | <code>str</code> | Specifies that Shield Advanced should configure its AWS WAF rules with the AWS WAF `Block` action. |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationAction.property.count">count</a></code> | <code>str</code> | Specifies that Shield Advanced should configure its AWS WAF rules with the AWS WAF `Count` action. |

---

##### `block`<sup>Optional</sup> <a name="block" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationAction.property.block"></a>

```python
block: str
```

- *Type:* str

Specifies that Shield Advanced should configure its AWS WAF rules with the AWS WAF `Block` action.

You must specify exactly one action, either `Block` or `Count`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/shield_protection#block ShieldProtection#block}

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationAction.property.count"></a>

```python
count: str
```

- *Type:* str

Specifies that Shield Advanced should configure its AWS WAF rules with the AWS WAF `Count` action.

You must specify exactly one action, either `Block` or `Count`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/shield_protection#count ShieldProtection#count}

---

### ShieldProtectionConfig <a name="ShieldProtectionConfig" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionConfig.Initializer"></a>

```python
from cdktn_provider_awscc import shield_protection

shieldProtection.ShieldProtectionConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  resource_arn: str,
  application_layer_automatic_response_configuration: ShieldProtectionApplicationLayerAutomaticResponseConfiguration = None,
  health_check_arns: typing.List[str] = None,
  tags: IResolvable | typing.List[ShieldProtectionTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionConfig.property.name">name</a></code> | <code>str</code> | Friendly name for the Protection. |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionConfig.property.resourceArn">resource_arn</a></code> | <code>str</code> | The ARN (Amazon Resource Name) of the resource to be protected. |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionConfig.property.applicationLayerAutomaticResponseConfiguration">application_layer_automatic_response_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfiguration">ShieldProtectionApplicationLayerAutomaticResponseConfiguration</a></code> | The automatic application layer DDoS mitigation settings for a Protection. |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionConfig.property.healthCheckArns">health_check_arns</a></code> | <code>typing.List[str]</code> | The Amazon Resource Names (ARNs) of the health check to associate with the protection. |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTags">ShieldProtectionTags</a>]</code> | One or more tag key-value pairs for the Protection object. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Friendly name for the Protection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/shield_protection#name ShieldProtection#name}

---

##### `resource_arn`<sup>Required</sup> <a name="resource_arn" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionConfig.property.resourceArn"></a>

```python
resource_arn: str
```

- *Type:* str

The ARN (Amazon Resource Name) of the resource to be protected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/shield_protection#resource_arn ShieldProtection#resource_arn}

---

##### `application_layer_automatic_response_configuration`<sup>Optional</sup> <a name="application_layer_automatic_response_configuration" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionConfig.property.applicationLayerAutomaticResponseConfiguration"></a>

```python
application_layer_automatic_response_configuration: ShieldProtectionApplicationLayerAutomaticResponseConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfiguration">ShieldProtectionApplicationLayerAutomaticResponseConfiguration</a>

The automatic application layer DDoS mitigation settings for a Protection.

This configuration determines whether Shield Advanced automatically manages rules in the web ACL in order to respond to application layer events that Shield Advanced determines to be DDoS attacks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/shield_protection#application_layer_automatic_response_configuration ShieldProtection#application_layer_automatic_response_configuration}

---

##### `health_check_arns`<sup>Optional</sup> <a name="health_check_arns" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionConfig.property.healthCheckArns"></a>

```python
health_check_arns: typing.List[str]
```

- *Type:* typing.List[str]

The Amazon Resource Names (ARNs) of the health check to associate with the protection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/shield_protection#health_check_arns ShieldProtection#health_check_arns}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[ShieldProtectionTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTags">ShieldProtectionTags</a>]

One or more tag key-value pairs for the Protection object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/shield_protection#tags ShieldProtection#tags}

---

### ShieldProtectionTags <a name="ShieldProtectionTags" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTags.Initializer"></a>

```python
from cdktn_provider_awscc import shield_protection

shieldProtection.ShieldProtectionTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTags.property.key">key</a></code> | <code>str</code> | Part of the key:value pair that defines a tag. |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTags.property.value">value</a></code> | <code>str</code> | Part of the key:value pair that defines a tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTags.property.key"></a>

```python
key: str
```

- *Type:* str

Part of the key:value pair that defines a tag.

You can use a tag key to describe a category of information, such as "customer." Tag keys are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/shield_protection#key ShieldProtection#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTags.property.value"></a>

```python
value: str
```

- *Type:* str

Part of the key:value pair that defines a tag.

You can use a tag value to describe a specific value within a category, such as "companyA" or "companyB." Tag values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/shield_protection#value ShieldProtection#value}

---

## Classes <a name="Classes" id="Classes"></a>

### ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference <a name="ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import shield_protection

shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.resetBlock">reset_block</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.resetCount">reset_count</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_block` <a name="reset_block" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.resetBlock"></a>

```python
def reset_block() -> None
```

##### `reset_count` <a name="reset_count" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.resetCount"></a>

```python
def reset_count() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.property.blockInput">block_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.property.countInput">count_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.property.block">block</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.property.count">count</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationAction">ShieldProtectionApplicationLayerAutomaticResponseConfigurationAction</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `block_input`<sup>Optional</sup> <a name="block_input" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.property.blockInput"></a>

```python
block_input: str
```

- *Type:* str

---

##### `count_input`<sup>Optional</sup> <a name="count_input" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.property.countInput"></a>

```python
count_input: str
```

- *Type:* str

---

##### `block`<sup>Required</sup> <a name="block" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.property.block"></a>

```python
block: str
```

- *Type:* str

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.property.count"></a>

```python
count: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ShieldProtectionApplicationLayerAutomaticResponseConfigurationAction
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationAction">ShieldProtectionApplicationLayerAutomaticResponseConfigurationAction</a>

---


### ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference <a name="ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import shield_protection

shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.putAction">put_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.resetAction">reset_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.resetStatus">reset_status</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_action` <a name="put_action" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.putAction"></a>

```python
def put_action(
  block: str = None,
  count: str = None
) -> None
```

###### `block`<sup>Optional</sup> <a name="block" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.putAction.parameter.block"></a>

- *Type:* str

Specifies that Shield Advanced should configure its AWS WAF rules with the AWS WAF `Block` action.

You must specify exactly one action, either `Block` or `Count`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/shield_protection#block ShieldProtection#block}

---

###### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.putAction.parameter.count"></a>

- *Type:* str

Specifies that Shield Advanced should configure its AWS WAF rules with the AWS WAF `Count` action.

You must specify exactly one action, either `Block` or `Count`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/shield_protection#count ShieldProtection#count}

---

##### `reset_action` <a name="reset_action" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.resetAction"></a>

```python
def reset_action() -> None
```

##### `reset_status` <a name="reset_status" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.resetStatus"></a>

```python
def reset_status() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.property.action">action</a></code> | <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference">ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.property.actionInput">action_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationAction">ShieldProtectionApplicationLayerAutomaticResponseConfigurationAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfiguration">ShieldProtectionApplicationLayerAutomaticResponseConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.property.action"></a>

```python
action: ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference">ShieldProtectionApplicationLayerAutomaticResponseConfigurationActionOutputReference</a>

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.property.actionInput"></a>

```python
action_input: IResolvable | ShieldProtectionApplicationLayerAutomaticResponseConfigurationAction
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationAction">ShieldProtectionApplicationLayerAutomaticResponseConfigurationAction</a>

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ShieldProtectionApplicationLayerAutomaticResponseConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionApplicationLayerAutomaticResponseConfiguration">ShieldProtectionApplicationLayerAutomaticResponseConfiguration</a>

---


### ShieldProtectionTagsList <a name="ShieldProtectionTagsList" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import shield_protection

shieldProtection.ShieldProtectionTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ShieldProtectionTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTags">ShieldProtectionTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ShieldProtectionTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTags">ShieldProtectionTags</a>]

---


### ShieldProtectionTagsOutputReference <a name="ShieldProtectionTagsOutputReference" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import shield_protection

shieldProtection.ShieldProtectionTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTags">ShieldProtectionTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.shieldProtection.ShieldProtectionTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ShieldProtectionTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.shieldProtection.ShieldProtectionTags">ShieldProtectionTags</a>

---



