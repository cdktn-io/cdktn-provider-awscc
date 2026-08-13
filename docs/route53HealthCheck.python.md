# `route53HealthCheck` Submodule <a name="`route53HealthCheck` Submodule" id="@cdktn/provider-awscc.route53HealthCheck"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Route53HealthCheck <a name="Route53HealthCheck" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53_health_check awscc_route53_health_check}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.Initializer"></a>

```python
from cdktn_provider_awscc import route53_health_check

route53HealthCheck.Route53HealthCheck(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  health_check_config: Route53HealthCheckHealthCheckConfig,
  health_check_tags: IResolvable | typing.List[Route53HealthCheckHealthCheckTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.Initializer.parameter.healthCheckConfig">health_check_config</a></code> | <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig">Route53HealthCheckHealthCheckConfig</a></code> | A complex type that contains information about the health check. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.Initializer.parameter.healthCheckTags">health_check_tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTags">Route53HealthCheckHealthCheckTags</a>]</code> | An array of key-value pairs to apply to this resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `health_check_config`<sup>Required</sup> <a name="health_check_config" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.Initializer.parameter.healthCheckConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig">Route53HealthCheckHealthCheckConfig</a>

A complex type that contains information about the health check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53_health_check#health_check_config Route53HealthCheck#health_check_config}

---

##### `health_check_tags`<sup>Optional</sup> <a name="health_check_tags" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.Initializer.parameter.healthCheckTags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTags">Route53HealthCheckHealthCheckTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53_health_check#health_check_tags Route53HealthCheck#health_check_tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.putHealthCheckConfig">put_health_check_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.putHealthCheckTags">put_health_check_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.resetHealthCheckTags">reset_health_check_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_health_check_config` <a name="put_health_check_config" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.putHealthCheckConfig"></a>

```python
def put_health_check_config(
  type: str,
  alarm_identifier: Route53HealthCheckHealthCheckConfigAlarmIdentifier = None,
  child_health_checks: typing.List[str] = None,
  enable_sni: bool | IResolvable = None,
  failure_threshold: typing.Union[int, float] = None,
  fully_qualified_domain_name: str = None,
  health_threshold: typing.Union[int, float] = None,
  insufficient_data_health_status: str = None,
  inverted: bool | IResolvable = None,
  ip_address: str = None,
  measure_latency: bool | IResolvable = None,
  port: typing.Union[int, float] = None,
  regions: typing.List[str] = None,
  request_interval: typing.Union[int, float] = None,
  resource_path: str = None,
  routing_control_arn: str = None,
  search_string: str = None
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.putHealthCheckConfig.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53_health_check#type Route53HealthCheck#type}.

---

###### `alarm_identifier`<sup>Optional</sup> <a name="alarm_identifier" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.putHealthCheckConfig.parameter.alarmIdentifier"></a>

- *Type:* <a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifier">Route53HealthCheckHealthCheckConfigAlarmIdentifier</a>

A complex type that identifies the CloudWatch alarm that you want Amazon Route 53 health checkers to use to determine whether the specified health check is healthy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53_health_check#alarm_identifier Route53HealthCheck#alarm_identifier}

---

###### `child_health_checks`<sup>Optional</sup> <a name="child_health_checks" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.putHealthCheckConfig.parameter.childHealthChecks"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53_health_check#child_health_checks Route53HealthCheck#child_health_checks}.

---

###### `enable_sni`<sup>Optional</sup> <a name="enable_sni" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.putHealthCheckConfig.parameter.enableSni"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53_health_check#enable_sni Route53HealthCheck#enable_sni}.

---

###### `failure_threshold`<sup>Optional</sup> <a name="failure_threshold" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.putHealthCheckConfig.parameter.failureThreshold"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53_health_check#failure_threshold Route53HealthCheck#failure_threshold}.

---

###### `fully_qualified_domain_name`<sup>Optional</sup> <a name="fully_qualified_domain_name" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.putHealthCheckConfig.parameter.fullyQualifiedDomainName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53_health_check#fully_qualified_domain_name Route53HealthCheck#fully_qualified_domain_name}.

---

###### `health_threshold`<sup>Optional</sup> <a name="health_threshold" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.putHealthCheckConfig.parameter.healthThreshold"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53_health_check#health_threshold Route53HealthCheck#health_threshold}.

---

###### `insufficient_data_health_status`<sup>Optional</sup> <a name="insufficient_data_health_status" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.putHealthCheckConfig.parameter.insufficientDataHealthStatus"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53_health_check#insufficient_data_health_status Route53HealthCheck#insufficient_data_health_status}.

---

###### `inverted`<sup>Optional</sup> <a name="inverted" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.putHealthCheckConfig.parameter.inverted"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53_health_check#inverted Route53HealthCheck#inverted}.

---

###### `ip_address`<sup>Optional</sup> <a name="ip_address" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.putHealthCheckConfig.parameter.ipAddress"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53_health_check#ip_address Route53HealthCheck#ip_address}.

---

###### `measure_latency`<sup>Optional</sup> <a name="measure_latency" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.putHealthCheckConfig.parameter.measureLatency"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53_health_check#measure_latency Route53HealthCheck#measure_latency}.

---

###### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.putHealthCheckConfig.parameter.port"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53_health_check#port Route53HealthCheck#port}.

---

###### `regions`<sup>Optional</sup> <a name="regions" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.putHealthCheckConfig.parameter.regions"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53_health_check#regions Route53HealthCheck#regions}.

---

###### `request_interval`<sup>Optional</sup> <a name="request_interval" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.putHealthCheckConfig.parameter.requestInterval"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53_health_check#request_interval Route53HealthCheck#request_interval}.

---

###### `resource_path`<sup>Optional</sup> <a name="resource_path" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.putHealthCheckConfig.parameter.resourcePath"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53_health_check#resource_path Route53HealthCheck#resource_path}.

---

###### `routing_control_arn`<sup>Optional</sup> <a name="routing_control_arn" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.putHealthCheckConfig.parameter.routingControlArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53_health_check#routing_control_arn Route53HealthCheck#routing_control_arn}.

---

###### `search_string`<sup>Optional</sup> <a name="search_string" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.putHealthCheckConfig.parameter.searchString"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53_health_check#search_string Route53HealthCheck#search_string}.

---

##### `put_health_check_tags` <a name="put_health_check_tags" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.putHealthCheckTags"></a>

```python
def put_health_check_tags(
  value: IResolvable | typing.List[Route53HealthCheckHealthCheckTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.putHealthCheckTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTags">Route53HealthCheckHealthCheckTags</a>]

---

##### `reset_health_check_tags` <a name="reset_health_check_tags" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.resetHealthCheckTags"></a>

```python
def reset_health_check_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a Route53HealthCheck resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.isConstruct"></a>

```python
from cdktn_provider_awscc import route53_health_check

route53HealthCheck.Route53HealthCheck.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.isTerraformElement"></a>

```python
from cdktn_provider_awscc import route53_health_check

route53HealthCheck.Route53HealthCheck.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.isTerraformResource"></a>

```python
from cdktn_provider_awscc import route53_health_check

route53HealthCheck.Route53HealthCheck.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import route53_health_check

route53HealthCheck.Route53HealthCheck.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a Route53HealthCheck resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Route53HealthCheck to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Route53HealthCheck that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53_health_check#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Route53HealthCheck to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.healthCheckConfig">health_check_config</a></code> | <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference">Route53HealthCheckHealthCheckConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.healthCheckId">health_check_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.healthCheckTags">health_check_tags</a></code> | <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsList">Route53HealthCheckHealthCheckTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.healthCheckConfigInput">health_check_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig">Route53HealthCheckHealthCheckConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.healthCheckTagsInput">health_check_tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTags">Route53HealthCheckHealthCheckTags</a>]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `health_check_config`<sup>Required</sup> <a name="health_check_config" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.healthCheckConfig"></a>

```python
health_check_config: Route53HealthCheckHealthCheckConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference">Route53HealthCheckHealthCheckConfigOutputReference</a>

---

##### `health_check_id`<sup>Required</sup> <a name="health_check_id" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.healthCheckId"></a>

```python
health_check_id: str
```

- *Type:* str

---

##### `health_check_tags`<sup>Required</sup> <a name="health_check_tags" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.healthCheckTags"></a>

```python
health_check_tags: Route53HealthCheckHealthCheckTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsList">Route53HealthCheckHealthCheckTagsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `health_check_config_input`<sup>Optional</sup> <a name="health_check_config_input" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.healthCheckConfigInput"></a>

```python
health_check_config_input: IResolvable | Route53HealthCheckHealthCheckConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig">Route53HealthCheckHealthCheckConfig</a>

---

##### `health_check_tags_input`<sup>Optional</sup> <a name="health_check_tags_input" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.healthCheckTagsInput"></a>

```python
health_check_tags_input: IResolvable | typing.List[Route53HealthCheckHealthCheckTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTags">Route53HealthCheckHealthCheckTags</a>]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### Route53HealthCheckConfig <a name="Route53HealthCheckConfig" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckConfig.Initializer"></a>

```python
from cdktn_provider_awscc import route53_health_check

route53HealthCheck.Route53HealthCheckConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  health_check_config: Route53HealthCheckHealthCheckConfig,
  health_check_tags: IResolvable | typing.List[Route53HealthCheckHealthCheckTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckConfig.property.healthCheckConfig">health_check_config</a></code> | <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig">Route53HealthCheckHealthCheckConfig</a></code> | A complex type that contains information about the health check. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckConfig.property.healthCheckTags">health_check_tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTags">Route53HealthCheckHealthCheckTags</a>]</code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `health_check_config`<sup>Required</sup> <a name="health_check_config" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckConfig.property.healthCheckConfig"></a>

```python
health_check_config: Route53HealthCheckHealthCheckConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig">Route53HealthCheckHealthCheckConfig</a>

A complex type that contains information about the health check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53_health_check#health_check_config Route53HealthCheck#health_check_config}

---

##### `health_check_tags`<sup>Optional</sup> <a name="health_check_tags" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckConfig.property.healthCheckTags"></a>

```python
health_check_tags: IResolvable | typing.List[Route53HealthCheckHealthCheckTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTags">Route53HealthCheckHealthCheckTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53_health_check#health_check_tags Route53HealthCheck#health_check_tags}

---

### Route53HealthCheckHealthCheckConfig <a name="Route53HealthCheckHealthCheckConfig" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.Initializer"></a>

```python
from cdktn_provider_awscc import route53_health_check

route53HealthCheck.Route53HealthCheckHealthCheckConfig(
  type: str,
  alarm_identifier: Route53HealthCheckHealthCheckConfigAlarmIdentifier = None,
  child_health_checks: typing.List[str] = None,
  enable_sni: bool | IResolvable = None,
  failure_threshold: typing.Union[int, float] = None,
  fully_qualified_domain_name: str = None,
  health_threshold: typing.Union[int, float] = None,
  insufficient_data_health_status: str = None,
  inverted: bool | IResolvable = None,
  ip_address: str = None,
  measure_latency: bool | IResolvable = None,
  port: typing.Union[int, float] = None,
  regions: typing.List[str] = None,
  request_interval: typing.Union[int, float] = None,
  resource_path: str = None,
  routing_control_arn: str = None,
  search_string: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53_health_check#type Route53HealthCheck#type}. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.property.alarmIdentifier">alarm_identifier</a></code> | <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifier">Route53HealthCheckHealthCheckConfigAlarmIdentifier</a></code> | A complex type that identifies the CloudWatch alarm that you want Amazon Route 53 health checkers to use to determine whether the specified health check is healthy. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.property.childHealthChecks">child_health_checks</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53_health_check#child_health_checks Route53HealthCheck#child_health_checks}. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.property.enableSni">enable_sni</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53_health_check#enable_sni Route53HealthCheck#enable_sni}. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.property.failureThreshold">failure_threshold</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53_health_check#failure_threshold Route53HealthCheck#failure_threshold}. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.property.fullyQualifiedDomainName">fully_qualified_domain_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53_health_check#fully_qualified_domain_name Route53HealthCheck#fully_qualified_domain_name}. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.property.healthThreshold">health_threshold</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53_health_check#health_threshold Route53HealthCheck#health_threshold}. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.property.insufficientDataHealthStatus">insufficient_data_health_status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53_health_check#insufficient_data_health_status Route53HealthCheck#insufficient_data_health_status}. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.property.inverted">inverted</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53_health_check#inverted Route53HealthCheck#inverted}. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.property.ipAddress">ip_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53_health_check#ip_address Route53HealthCheck#ip_address}. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.property.measureLatency">measure_latency</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53_health_check#measure_latency Route53HealthCheck#measure_latency}. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53_health_check#port Route53HealthCheck#port}. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.property.regions">regions</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53_health_check#regions Route53HealthCheck#regions}. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.property.requestInterval">request_interval</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53_health_check#request_interval Route53HealthCheck#request_interval}. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.property.resourcePath">resource_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53_health_check#resource_path Route53HealthCheck#resource_path}. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.property.routingControlArn">routing_control_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53_health_check#routing_control_arn Route53HealthCheck#routing_control_arn}. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.property.searchString">search_string</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53_health_check#search_string Route53HealthCheck#search_string}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53_health_check#type Route53HealthCheck#type}.

---

##### `alarm_identifier`<sup>Optional</sup> <a name="alarm_identifier" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.property.alarmIdentifier"></a>

```python
alarm_identifier: Route53HealthCheckHealthCheckConfigAlarmIdentifier
```

- *Type:* <a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifier">Route53HealthCheckHealthCheckConfigAlarmIdentifier</a>

A complex type that identifies the CloudWatch alarm that you want Amazon Route 53 health checkers to use to determine whether the specified health check is healthy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53_health_check#alarm_identifier Route53HealthCheck#alarm_identifier}

---

##### `child_health_checks`<sup>Optional</sup> <a name="child_health_checks" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.property.childHealthChecks"></a>

```python
child_health_checks: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53_health_check#child_health_checks Route53HealthCheck#child_health_checks}.

---

##### `enable_sni`<sup>Optional</sup> <a name="enable_sni" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.property.enableSni"></a>

```python
enable_sni: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53_health_check#enable_sni Route53HealthCheck#enable_sni}.

---

##### `failure_threshold`<sup>Optional</sup> <a name="failure_threshold" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.property.failureThreshold"></a>

```python
failure_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53_health_check#failure_threshold Route53HealthCheck#failure_threshold}.

---

##### `fully_qualified_domain_name`<sup>Optional</sup> <a name="fully_qualified_domain_name" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.property.fullyQualifiedDomainName"></a>

```python
fully_qualified_domain_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53_health_check#fully_qualified_domain_name Route53HealthCheck#fully_qualified_domain_name}.

---

##### `health_threshold`<sup>Optional</sup> <a name="health_threshold" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.property.healthThreshold"></a>

```python
health_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53_health_check#health_threshold Route53HealthCheck#health_threshold}.

---

##### `insufficient_data_health_status`<sup>Optional</sup> <a name="insufficient_data_health_status" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.property.insufficientDataHealthStatus"></a>

```python
insufficient_data_health_status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53_health_check#insufficient_data_health_status Route53HealthCheck#insufficient_data_health_status}.

---

##### `inverted`<sup>Optional</sup> <a name="inverted" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.property.inverted"></a>

```python
inverted: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53_health_check#inverted Route53HealthCheck#inverted}.

---

##### `ip_address`<sup>Optional</sup> <a name="ip_address" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53_health_check#ip_address Route53HealthCheck#ip_address}.

---

##### `measure_latency`<sup>Optional</sup> <a name="measure_latency" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.property.measureLatency"></a>

```python
measure_latency: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53_health_check#measure_latency Route53HealthCheck#measure_latency}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53_health_check#port Route53HealthCheck#port}.

---

##### `regions`<sup>Optional</sup> <a name="regions" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.property.regions"></a>

```python
regions: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53_health_check#regions Route53HealthCheck#regions}.

---

##### `request_interval`<sup>Optional</sup> <a name="request_interval" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.property.requestInterval"></a>

```python
request_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53_health_check#request_interval Route53HealthCheck#request_interval}.

---

##### `resource_path`<sup>Optional</sup> <a name="resource_path" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.property.resourcePath"></a>

```python
resource_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53_health_check#resource_path Route53HealthCheck#resource_path}.

---

##### `routing_control_arn`<sup>Optional</sup> <a name="routing_control_arn" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.property.routingControlArn"></a>

```python
routing_control_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53_health_check#routing_control_arn Route53HealthCheck#routing_control_arn}.

---

##### `search_string`<sup>Optional</sup> <a name="search_string" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.property.searchString"></a>

```python
search_string: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53_health_check#search_string Route53HealthCheck#search_string}.

---

### Route53HealthCheckHealthCheckConfigAlarmIdentifier <a name="Route53HealthCheckHealthCheckConfigAlarmIdentifier" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifier"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifier.Initializer"></a>

```python
from cdktn_provider_awscc import route53_health_check

route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifier(
  name: str = None,
  region: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifier.property.name">name</a></code> | <code>str</code> | The name of the CloudWatch alarm that you want Amazon Route 53 health checkers to use to determine whether this health check is healthy. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifier.property.region">region</a></code> | <code>str</code> | For the CloudWatch alarm that you want Route 53 health checkers to use to determine whether this health check is healthy, the region that the alarm was created in. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifier.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the CloudWatch alarm that you want Amazon Route 53 health checkers to use to determine whether this health check is healthy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53_health_check#name Route53HealthCheck#name}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifier.property.region"></a>

```python
region: str
```

- *Type:* str

For the CloudWatch alarm that you want Route 53 health checkers to use to determine whether this health check is healthy, the region that the alarm was created in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53_health_check#region Route53HealthCheck#region}

---

### Route53HealthCheckHealthCheckTags <a name="Route53HealthCheckHealthCheckTags" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTags.Initializer"></a>

```python
from cdktn_provider_awscc import route53_health_check

route53HealthCheck.Route53HealthCheckHealthCheckTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53_health_check#key Route53HealthCheck#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53_health_check#value Route53HealthCheck#value}

---

## Classes <a name="Classes" id="Classes"></a>

### Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference <a name="Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import route53_health_check

route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.resetRegion">reset_region</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.resetRegion"></a>

```python
def reset_region() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifier">Route53HealthCheckHealthCheckConfigAlarmIdentifier</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Route53HealthCheckHealthCheckConfigAlarmIdentifier
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifier">Route53HealthCheckHealthCheckConfigAlarmIdentifier</a>

---


### Route53HealthCheckHealthCheckConfigOutputReference <a name="Route53HealthCheckHealthCheckConfigOutputReference" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import route53_health_check

route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.putAlarmIdentifier">put_alarm_identifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resetAlarmIdentifier">reset_alarm_identifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resetChildHealthChecks">reset_child_health_checks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resetEnableSni">reset_enable_sni</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resetFailureThreshold">reset_failure_threshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resetFullyQualifiedDomainName">reset_fully_qualified_domain_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resetHealthThreshold">reset_health_threshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resetInsufficientDataHealthStatus">reset_insufficient_data_health_status</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resetInverted">reset_inverted</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resetIpAddress">reset_ip_address</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resetMeasureLatency">reset_measure_latency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resetPort">reset_port</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resetRegions">reset_regions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resetRequestInterval">reset_request_interval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resetResourcePath">reset_resource_path</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resetRoutingControlArn">reset_routing_control_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resetSearchString">reset_search_string</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_alarm_identifier` <a name="put_alarm_identifier" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.putAlarmIdentifier"></a>

```python
def put_alarm_identifier(
  name: str = None,
  region: str = None
) -> None
```

###### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.putAlarmIdentifier.parameter.name"></a>

- *Type:* str

The name of the CloudWatch alarm that you want Amazon Route 53 health checkers to use to determine whether this health check is healthy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53_health_check#name Route53HealthCheck#name}

---

###### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.putAlarmIdentifier.parameter.region"></a>

- *Type:* str

For the CloudWatch alarm that you want Route 53 health checkers to use to determine whether this health check is healthy, the region that the alarm was created in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53_health_check#region Route53HealthCheck#region}

---

##### `reset_alarm_identifier` <a name="reset_alarm_identifier" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resetAlarmIdentifier"></a>

```python
def reset_alarm_identifier() -> None
```

##### `reset_child_health_checks` <a name="reset_child_health_checks" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resetChildHealthChecks"></a>

```python
def reset_child_health_checks() -> None
```

##### `reset_enable_sni` <a name="reset_enable_sni" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resetEnableSni"></a>

```python
def reset_enable_sni() -> None
```

##### `reset_failure_threshold` <a name="reset_failure_threshold" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resetFailureThreshold"></a>

```python
def reset_failure_threshold() -> None
```

##### `reset_fully_qualified_domain_name` <a name="reset_fully_qualified_domain_name" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resetFullyQualifiedDomainName"></a>

```python
def reset_fully_qualified_domain_name() -> None
```

##### `reset_health_threshold` <a name="reset_health_threshold" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resetHealthThreshold"></a>

```python
def reset_health_threshold() -> None
```

##### `reset_insufficient_data_health_status` <a name="reset_insufficient_data_health_status" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resetInsufficientDataHealthStatus"></a>

```python
def reset_insufficient_data_health_status() -> None
```

##### `reset_inverted` <a name="reset_inverted" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resetInverted"></a>

```python
def reset_inverted() -> None
```

##### `reset_ip_address` <a name="reset_ip_address" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resetIpAddress"></a>

```python
def reset_ip_address() -> None
```

##### `reset_measure_latency` <a name="reset_measure_latency" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resetMeasureLatency"></a>

```python
def reset_measure_latency() -> None
```

##### `reset_port` <a name="reset_port" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resetPort"></a>

```python
def reset_port() -> None
```

##### `reset_regions` <a name="reset_regions" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resetRegions"></a>

```python
def reset_regions() -> None
```

##### `reset_request_interval` <a name="reset_request_interval" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resetRequestInterval"></a>

```python
def reset_request_interval() -> None
```

##### `reset_resource_path` <a name="reset_resource_path" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resetResourcePath"></a>

```python
def reset_resource_path() -> None
```

##### `reset_routing_control_arn` <a name="reset_routing_control_arn" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resetRoutingControlArn"></a>

```python
def reset_routing_control_arn() -> None
```

##### `reset_search_string` <a name="reset_search_string" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resetSearchString"></a>

```python
def reset_search_string() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.alarmIdentifier">alarm_identifier</a></code> | <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference">Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.alarmIdentifierInput">alarm_identifier_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifier">Route53HealthCheckHealthCheckConfigAlarmIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.childHealthChecksInput">child_health_checks_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.enableSniInput">enable_sni_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.failureThresholdInput">failure_threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.fullyQualifiedDomainNameInput">fully_qualified_domain_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.healthThresholdInput">health_threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.insufficientDataHealthStatusInput">insufficient_data_health_status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.invertedInput">inverted_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.ipAddressInput">ip_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.measureLatencyInput">measure_latency_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.regionsInput">regions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.requestIntervalInput">request_interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.resourcePathInput">resource_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.routingControlArnInput">routing_control_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.searchStringInput">search_string_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.childHealthChecks">child_health_checks</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.enableSni">enable_sni</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.failureThreshold">failure_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.fullyQualifiedDomainName">fully_qualified_domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.healthThreshold">health_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.insufficientDataHealthStatus">insufficient_data_health_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.inverted">inverted</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.ipAddress">ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.measureLatency">measure_latency</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.regions">regions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.requestInterval">request_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.resourcePath">resource_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.routingControlArn">routing_control_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.searchString">search_string</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig">Route53HealthCheckHealthCheckConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `alarm_identifier`<sup>Required</sup> <a name="alarm_identifier" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.alarmIdentifier"></a>

```python
alarm_identifier: Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference">Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference</a>

---

##### `alarm_identifier_input`<sup>Optional</sup> <a name="alarm_identifier_input" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.alarmIdentifierInput"></a>

```python
alarm_identifier_input: IResolvable | Route53HealthCheckHealthCheckConfigAlarmIdentifier
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifier">Route53HealthCheckHealthCheckConfigAlarmIdentifier</a>

---

##### `child_health_checks_input`<sup>Optional</sup> <a name="child_health_checks_input" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.childHealthChecksInput"></a>

```python
child_health_checks_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `enable_sni_input`<sup>Optional</sup> <a name="enable_sni_input" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.enableSniInput"></a>

```python
enable_sni_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `failure_threshold_input`<sup>Optional</sup> <a name="failure_threshold_input" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.failureThresholdInput"></a>

```python
failure_threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `fully_qualified_domain_name_input`<sup>Optional</sup> <a name="fully_qualified_domain_name_input" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.fullyQualifiedDomainNameInput"></a>

```python
fully_qualified_domain_name_input: str
```

- *Type:* str

---

##### `health_threshold_input`<sup>Optional</sup> <a name="health_threshold_input" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.healthThresholdInput"></a>

```python
health_threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `insufficient_data_health_status_input`<sup>Optional</sup> <a name="insufficient_data_health_status_input" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.insufficientDataHealthStatusInput"></a>

```python
insufficient_data_health_status_input: str
```

- *Type:* str

---

##### `inverted_input`<sup>Optional</sup> <a name="inverted_input" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.invertedInput"></a>

```python
inverted_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `ip_address_input`<sup>Optional</sup> <a name="ip_address_input" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.ipAddressInput"></a>

```python
ip_address_input: str
```

- *Type:* str

---

##### `measure_latency_input`<sup>Optional</sup> <a name="measure_latency_input" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.measureLatencyInput"></a>

```python
measure_latency_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `regions_input`<sup>Optional</sup> <a name="regions_input" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.regionsInput"></a>

```python
regions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `request_interval_input`<sup>Optional</sup> <a name="request_interval_input" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.requestIntervalInput"></a>

```python
request_interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_path_input`<sup>Optional</sup> <a name="resource_path_input" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.resourcePathInput"></a>

```python
resource_path_input: str
```

- *Type:* str

---

##### `routing_control_arn_input`<sup>Optional</sup> <a name="routing_control_arn_input" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.routingControlArnInput"></a>

```python
routing_control_arn_input: str
```

- *Type:* str

---

##### `search_string_input`<sup>Optional</sup> <a name="search_string_input" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.searchStringInput"></a>

```python
search_string_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `child_health_checks`<sup>Required</sup> <a name="child_health_checks" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.childHealthChecks"></a>

```python
child_health_checks: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `enable_sni`<sup>Required</sup> <a name="enable_sni" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.enableSni"></a>

```python
enable_sni: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `failure_threshold`<sup>Required</sup> <a name="failure_threshold" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.failureThreshold"></a>

```python
failure_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `fully_qualified_domain_name`<sup>Required</sup> <a name="fully_qualified_domain_name" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.fullyQualifiedDomainName"></a>

```python
fully_qualified_domain_name: str
```

- *Type:* str

---

##### `health_threshold`<sup>Required</sup> <a name="health_threshold" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.healthThreshold"></a>

```python
health_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `insufficient_data_health_status`<sup>Required</sup> <a name="insufficient_data_health_status" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.insufficientDataHealthStatus"></a>

```python
insufficient_data_health_status: str
```

- *Type:* str

---

##### `inverted`<sup>Required</sup> <a name="inverted" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.inverted"></a>

```python
inverted: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `ip_address`<sup>Required</sup> <a name="ip_address" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

---

##### `measure_latency`<sup>Required</sup> <a name="measure_latency" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.measureLatency"></a>

```python
measure_latency: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `regions`<sup>Required</sup> <a name="regions" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.regions"></a>

```python
regions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `request_interval`<sup>Required</sup> <a name="request_interval" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.requestInterval"></a>

```python
request_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_path`<sup>Required</sup> <a name="resource_path" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.resourcePath"></a>

```python
resource_path: str
```

- *Type:* str

---

##### `routing_control_arn`<sup>Required</sup> <a name="routing_control_arn" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.routingControlArn"></a>

```python
routing_control_arn: str
```

- *Type:* str

---

##### `search_string`<sup>Required</sup> <a name="search_string" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.searchString"></a>

```python
search_string: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Route53HealthCheckHealthCheckConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig">Route53HealthCheckHealthCheckConfig</a>

---


### Route53HealthCheckHealthCheckTagsList <a name="Route53HealthCheckHealthCheckTagsList" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import route53_health_check

route53HealthCheck.Route53HealthCheckHealthCheckTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Route53HealthCheckHealthCheckTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTags">Route53HealthCheckHealthCheckTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Route53HealthCheckHealthCheckTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTags">Route53HealthCheckHealthCheckTags</a>]

---


### Route53HealthCheckHealthCheckTagsOutputReference <a name="Route53HealthCheckHealthCheckTagsOutputReference" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import route53_health_check

route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTags">Route53HealthCheckHealthCheckTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Route53HealthCheckHealthCheckTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTags">Route53HealthCheckHealthCheckTags</a>

---



