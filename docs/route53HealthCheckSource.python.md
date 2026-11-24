# `route53HealthCheckSource` Submodule <a name="`route53HealthCheckSource` Submodule" id="@cdktn/provider-awscc.route53HealthCheckSource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Route53HealthCheckSource <a name="Route53HealthCheckSource" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53_health_check_source awscc_route53_health_check_source}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.Initializer"></a>

```python
from cdktn_provider_awscc import route53_health_check_source

route53HealthCheckSource.Route53HealthCheckSource(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  health_check_source_config: Route53HealthCheckSourceHealthCheckSourceConfig,
  tags: IResolvable | typing.List[Route53HealthCheckSourceTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.Initializer.parameter.healthCheckSourceConfig">health_check_source_config</a></code> | <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfig">Route53HealthCheckSourceHealthCheckSourceConfig</a></code> | <p>The VPC, subnets, and security groups for the health check source.</p>. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTags">Route53HealthCheckSourceTags</a>]</code> | An array of key-value pairs to apply to this resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `health_check_source_config`<sup>Required</sup> <a name="health_check_source_config" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.Initializer.parameter.healthCheckSourceConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfig">Route53HealthCheckSourceHealthCheckSourceConfig</a>

<p>The VPC, subnets, and security groups for the health check source.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53_health_check_source#health_check_source_config Route53HealthCheckSource#health_check_source_config}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTags">Route53HealthCheckSourceTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53_health_check_source#tags Route53HealthCheckSource#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.putHealthCheckSourceConfig">put_health_check_source_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_health_check_source_config` <a name="put_health_check_source_config" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.putHealthCheckSourceConfig"></a>

```python
def put_health_check_source_config(
  subnet_configuration_list: IResolvable | typing.List[Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStruct],
  vpc_id: str
) -> None
```

###### `subnet_configuration_list`<sup>Required</sup> <a name="subnet_configuration_list" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.putHealthCheckSourceConfig.parameter.subnetConfigurationList"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStruct">Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStruct</a>]

<p>A complex type that contains one <code>SubnetConfiguration</code> element for each Availability Zone that Route 53 uses for private endpoint health checks in the Amazon Web Services Region.

Each element must be in a different Availability Zone. Most Regions require three elements. Regions that have only two such Availability Zones, such as US West (N. California), require two elements. Route 53 creates network interfaces in each subnet and sends health check requests from all of them.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53_health_check_source#subnet_configuration_list Route53HealthCheckSource#subnet_configuration_list}

---

###### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.putHealthCheckSourceConfig.parameter.vpcId"></a>

- *Type:* str

<p>The ID of the VPC that contains the subnets for the health check source.

All subnets in <code>SubnetConfigurationList</code> must belong to this VPC.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53_health_check_source#vpc_id Route53HealthCheckSource#vpc_id}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[Route53HealthCheckSourceTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTags">Route53HealthCheckSourceTags</a>]

---

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a Route53HealthCheckSource resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.isConstruct"></a>

```python
from cdktn_provider_awscc import route53_health_check_source

route53HealthCheckSource.Route53HealthCheckSource.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.isTerraformElement"></a>

```python
from cdktn_provider_awscc import route53_health_check_source

route53HealthCheckSource.Route53HealthCheckSource.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.isTerraformResource"></a>

```python
from cdktn_provider_awscc import route53_health_check_source

route53HealthCheckSource.Route53HealthCheckSource.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import route53_health_check_source

route53HealthCheckSource.Route53HealthCheckSource.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a Route53HealthCheckSource resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Route53HealthCheckSource to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Route53HealthCheckSource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53_health_check_source#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Route53HealthCheckSource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.property.healthCheckSourceConfig">health_check_source_config</a></code> | <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference">Route53HealthCheckSourceHealthCheckSourceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.property.healthCheckSourceId">health_check_source_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.property.healthCheckSourceStatus">health_check_source_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsList">Route53HealthCheckSourceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.property.healthCheckSourceConfigInput">health_check_source_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfig">Route53HealthCheckSourceHealthCheckSourceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTags">Route53HealthCheckSourceTags</a>]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `health_check_source_config`<sup>Required</sup> <a name="health_check_source_config" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.property.healthCheckSourceConfig"></a>

```python
health_check_source_config: Route53HealthCheckSourceHealthCheckSourceConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference">Route53HealthCheckSourceHealthCheckSourceConfigOutputReference</a>

---

##### `health_check_source_id`<sup>Required</sup> <a name="health_check_source_id" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.property.healthCheckSourceId"></a>

```python
health_check_source_id: str
```

- *Type:* str

---

##### `health_check_source_status`<sup>Required</sup> <a name="health_check_source_status" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.property.healthCheckSourceStatus"></a>

```python
health_check_source_status: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.property.tags"></a>

```python
tags: Route53HealthCheckSourceTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsList">Route53HealthCheckSourceTagsList</a>

---

##### `health_check_source_config_input`<sup>Optional</sup> <a name="health_check_source_config_input" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.property.healthCheckSourceConfigInput"></a>

```python
health_check_source_config_input: IResolvable | Route53HealthCheckSourceHealthCheckSourceConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfig">Route53HealthCheckSourceHealthCheckSourceConfig</a>

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[Route53HealthCheckSourceTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTags">Route53HealthCheckSourceTags</a>]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### Route53HealthCheckSourceConfig <a name="Route53HealthCheckSourceConfig" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceConfig.Initializer"></a>

```python
from cdktn_provider_awscc import route53_health_check_source

route53HealthCheckSource.Route53HealthCheckSourceConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  health_check_source_config: Route53HealthCheckSourceHealthCheckSourceConfig,
  tags: IResolvable | typing.List[Route53HealthCheckSourceTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceConfig.property.healthCheckSourceConfig">health_check_source_config</a></code> | <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfig">Route53HealthCheckSourceHealthCheckSourceConfig</a></code> | <p>The VPC, subnets, and security groups for the health check source.</p>. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTags">Route53HealthCheckSourceTags</a>]</code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `health_check_source_config`<sup>Required</sup> <a name="health_check_source_config" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceConfig.property.healthCheckSourceConfig"></a>

```python
health_check_source_config: Route53HealthCheckSourceHealthCheckSourceConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfig">Route53HealthCheckSourceHealthCheckSourceConfig</a>

<p>The VPC, subnets, and security groups for the health check source.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53_health_check_source#health_check_source_config Route53HealthCheckSource#health_check_source_config}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[Route53HealthCheckSourceTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTags">Route53HealthCheckSourceTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53_health_check_source#tags Route53HealthCheckSource#tags}

---

### Route53HealthCheckSourceHealthCheckSourceConfig <a name="Route53HealthCheckSourceHealthCheckSourceConfig" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfig.Initializer"></a>

```python
from cdktn_provider_awscc import route53_health_check_source

route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfig(
  subnet_configuration_list: IResolvable | typing.List[Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStruct],
  vpc_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfig.property.subnetConfigurationList">subnet_configuration_list</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStruct">Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStruct</a>]</code> | <p>A complex type that contains one <code>SubnetConfiguration</code> element for each Availability Zone that Route 53 uses for private endpoint health checks in the Amazon Web Services Region. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfig.property.vpcId">vpc_id</a></code> | <code>str</code> | <p>The ID of the VPC that contains the subnets for the health check source. |

---

##### `subnet_configuration_list`<sup>Required</sup> <a name="subnet_configuration_list" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfig.property.subnetConfigurationList"></a>

```python
subnet_configuration_list: IResolvable | typing.List[Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStruct]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStruct">Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStruct</a>]

<p>A complex type that contains one <code>SubnetConfiguration</code> element for each Availability Zone that Route 53 uses for private endpoint health checks in the Amazon Web Services Region.

Each element must be in a different Availability Zone. Most Regions require three elements. Regions that have only two such Availability Zones, such as US West (N. California), require two elements. Route 53 creates network interfaces in each subnet and sends health check requests from all of them.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53_health_check_source#subnet_configuration_list Route53HealthCheckSource#subnet_configuration_list}

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfig.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

<p>The ID of the VPC that contains the subnets for the health check source.

All subnets in <code>SubnetConfigurationList</code> must belong to this VPC.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53_health_check_source#vpc_id Route53HealthCheckSource#vpc_id}

---

### Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStruct <a name="Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStruct" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStruct.Initializer"></a>

```python
from cdktn_provider_awscc import route53_health_check_source

route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStruct(
  availability_zone_id: str,
  security_group_id_list: typing.List[str],
  subnet_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStruct.property.availabilityZoneId">availability_zone_id</a></code> | <code>str</code> | <p>The ID of the Availability Zone that contains the subnet, for example <code>use1-az1</code>. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStruct.property.securityGroupIdList">security_group_id_list</a></code> | <code>typing.List[str]</code> | <p>The IDs of one to ten security groups in the same VPC to associate with the network interfaces that Route 53 creates in this subnet. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStruct.property.subnetId">subnet_id</a></code> | <code>str</code> | <p>The ID of the subnet. The subnet must have free IP addresses for the network interfaces that Route 53 creates.</p>. |

---

##### `availability_zone_id`<sup>Required</sup> <a name="availability_zone_id" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStruct.property.availabilityZoneId"></a>

```python
availability_zone_id: str
```

- *Type:* str

<p>The ID of the Availability Zone that contains the subnet, for example <code>use1-az1</code>.

Specify the Availability Zone ID, not the Availability Zone name. Each subnet in a health check source must be in a different Availability Zone.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53_health_check_source#availability_zone_id Route53HealthCheckSource#availability_zone_id}

---

##### `security_group_id_list`<sup>Required</sup> <a name="security_group_id_list" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStruct.property.securityGroupIdList"></a>

```python
security_group_id_list: typing.List[str]
```

- *Type:* typing.List[str]

<p>The IDs of one to ten security groups in the same VPC to associate with the network interfaces that Route 53 creates in this subnet.

The security groups must allow outbound traffic to the endpoints that the health checks monitor.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53_health_check_source#security_group_id_list Route53HealthCheckSource#security_group_id_list}

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStruct.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

<p>The ID of the subnet. The subnet must have free IP addresses for the network interfaces that Route 53 creates.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53_health_check_source#subnet_id Route53HealthCheckSource#subnet_id}

---

### Route53HealthCheckSourceTags <a name="Route53HealthCheckSourceTags" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTags.Initializer"></a>

```python
from cdktn_provider_awscc import route53_health_check_source

route53HealthCheckSource.Route53HealthCheckSourceTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53_health_check_source#key Route53HealthCheckSource#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53_health_check_source#value Route53HealthCheckSource#value}

---

## Classes <a name="Classes" id="Classes"></a>

### Route53HealthCheckSourceHealthCheckSourceConfigOutputReference <a name="Route53HealthCheckSourceHealthCheckSourceConfigOutputReference" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import route53_health_check_source

route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.putSubnetConfigurationList">put_subnet_configuration_list</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_subnet_configuration_list` <a name="put_subnet_configuration_list" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.putSubnetConfigurationList"></a>

```python
def put_subnet_configuration_list(
  value: IResolvable | typing.List[Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStruct]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.putSubnetConfigurationList.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStruct">Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStruct</a>]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.property.subnetConfigurationList">subnet_configuration_list</a></code> | <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList">Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.property.subnetConfigurationListInput">subnet_configuration_list_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStruct">Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStruct</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.property.vpcIdInput">vpc_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.property.vpcId">vpc_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfig">Route53HealthCheckSourceHealthCheckSourceConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `subnet_configuration_list`<sup>Required</sup> <a name="subnet_configuration_list" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.property.subnetConfigurationList"></a>

```python
subnet_configuration_list: Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList
```

- *Type:* <a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList">Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList</a>

---

##### `subnet_configuration_list_input`<sup>Optional</sup> <a name="subnet_configuration_list_input" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.property.subnetConfigurationListInput"></a>

```python
subnet_configuration_list_input: IResolvable | typing.List[Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStruct]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStruct">Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStruct</a>]

---

##### `vpc_id_input`<sup>Optional</sup> <a name="vpc_id_input" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.property.vpcIdInput"></a>

```python
vpc_id_input: str
```

- *Type:* str

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Route53HealthCheckSourceHealthCheckSourceConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfig">Route53HealthCheckSourceHealthCheckSourceConfig</a>

---


### Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList <a name="Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList.Initializer"></a>

```python
from cdktn_provider_awscc import route53_health_check_source

route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStruct">Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStruct</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStruct]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStruct">Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStruct</a>]

---


### Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference <a name="Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import route53_health_check_source

route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.property.availabilityZoneIdInput">availability_zone_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.property.securityGroupIdListInput">security_group_id_list_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.property.subnetIdInput">subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.property.availabilityZoneId">availability_zone_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.property.securityGroupIdList">security_group_id_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStruct">Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStruct</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `availability_zone_id_input`<sup>Optional</sup> <a name="availability_zone_id_input" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.property.availabilityZoneIdInput"></a>

```python
availability_zone_id_input: str
```

- *Type:* str

---

##### `security_group_id_list_input`<sup>Optional</sup> <a name="security_group_id_list_input" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.property.securityGroupIdListInput"></a>

```python
security_group_id_list_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_id_input`<sup>Optional</sup> <a name="subnet_id_input" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.property.subnetIdInput"></a>

```python
subnet_id_input: str
```

- *Type:* str

---

##### `availability_zone_id`<sup>Required</sup> <a name="availability_zone_id" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.property.availabilityZoneId"></a>

```python
availability_zone_id: str
```

- *Type:* str

---

##### `security_group_id_list`<sup>Required</sup> <a name="security_group_id_list" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.property.securityGroupIdList"></a>

```python
security_group_id_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStruct
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStruct">Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStruct</a>

---


### Route53HealthCheckSourceTagsList <a name="Route53HealthCheckSourceTagsList" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import route53_health_check_source

route53HealthCheckSource.Route53HealthCheckSourceTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Route53HealthCheckSourceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTags">Route53HealthCheckSourceTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Route53HealthCheckSourceTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTags">Route53HealthCheckSourceTags</a>]

---


### Route53HealthCheckSourceTagsOutputReference <a name="Route53HealthCheckSourceTagsOutputReference" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import route53_health_check_source

route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTags">Route53HealthCheckSourceTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Route53HealthCheckSourceTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTags">Route53HealthCheckSourceTags</a>

---



