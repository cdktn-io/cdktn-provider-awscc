# `osisPipelineEndpoint` Submodule <a name="`osisPipelineEndpoint` Submodule" id="@cdktn/provider-awscc.osisPipelineEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OsisPipelineEndpoint <a name="OsisPipelineEndpoint" id="@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/osis_pipeline_endpoint awscc_osis_pipeline_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpoint.Initializer"></a>

```python
from cdktn_provider_awscc import osis_pipeline_endpoint

osisPipelineEndpoint.OsisPipelineEndpoint(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  pipeline_arn: str,
  vpc_options: OsisPipelineEndpointVpcOptions
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpoint.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpoint.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpoint.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpoint.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpoint.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpoint.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpoint.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpoint.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpoint.Initializer.parameter.pipelineArn">pipeline_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the pipeline to create the endpoint for. |
| <code><a href="#@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpoint.Initializer.parameter.vpcOptions">vpc_options</a></code> | <code><a href="#@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpointVpcOptions">OsisPipelineEndpointVpcOptions</a></code> | Configuration settings for the VPC endpoint. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpoint.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpoint.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpoint.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpoint.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpoint.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpoint.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpoint.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpoint.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `pipeline_arn`<sup>Required</sup> <a name="pipeline_arn" id="@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpoint.Initializer.parameter.pipelineArn"></a>

- *Type:* str

The Amazon Resource Name (ARN) of the pipeline to create the endpoint for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/osis_pipeline_endpoint#pipeline_arn OsisPipelineEndpoint#pipeline_arn}

---

##### `vpc_options`<sup>Required</sup> <a name="vpc_options" id="@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpoint.Initializer.parameter.vpcOptions"></a>

- *Type:* <a href="#@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpointVpcOptions">OsisPipelineEndpointVpcOptions</a>

Configuration settings for the VPC endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/osis_pipeline_endpoint#vpc_options OsisPipelineEndpoint#vpc_options}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpoint.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpoint.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpoint.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpoint.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpoint.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpoint.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpoint.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpoint.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpoint.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpoint.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpoint.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpoint.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpoint.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpoint.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpoint.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpoint.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpoint.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpoint.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpoint.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpoint.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpoint.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpoint.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpoint.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpoint.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpoint.putVpcOptions">put_vpc_options</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpoint.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpoint.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpoint.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpoint.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpoint.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpoint.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpoint.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpoint.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpoint.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpoint.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpoint.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpoint.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpoint.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpoint.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpoint.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpoint.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpoint.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpoint.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpoint.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpoint.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpoint.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpoint.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpoint.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpoint.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpoint.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpoint.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpoint.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpoint.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpoint.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpoint.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpoint.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpoint.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_vpc_options` <a name="put_vpc_options" id="@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpoint.putVpcOptions"></a>

```python
def put_vpc_options(
  security_group_ids: typing.List[str] = None,
  subnet_ids: typing.List[str] = None
) -> None
```

###### `security_group_ids`<sup>Optional</sup> <a name="security_group_ids" id="@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpoint.putVpcOptions.parameter.securityGroupIds"></a>

- *Type:* typing.List[str]

A list of security group IDs that control network access to the pipeline endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/osis_pipeline_endpoint#security_group_ids OsisPipelineEndpoint#security_group_ids}

---

###### `subnet_ids`<sup>Optional</sup> <a name="subnet_ids" id="@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpoint.putVpcOptions.parameter.subnetIds"></a>

- *Type:* typing.List[str]

A list of subnet IDs where the pipeline endpoint network interfaces are created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/osis_pipeline_endpoint#subnet_ids OsisPipelineEndpoint#subnet_ids}

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpoint.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpoint.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpoint.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpoint.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a OsisPipelineEndpoint resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpoint.isConstruct"></a>

```python
from cdktn_provider_awscc import osis_pipeline_endpoint

osisPipelineEndpoint.OsisPipelineEndpoint.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpoint.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpoint.isTerraformElement"></a>

```python
from cdktn_provider_awscc import osis_pipeline_endpoint

osisPipelineEndpoint.OsisPipelineEndpoint.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpoint.isTerraformResource"></a>

```python
from cdktn_provider_awscc import osis_pipeline_endpoint

osisPipelineEndpoint.OsisPipelineEndpoint.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpoint.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import osis_pipeline_endpoint

osisPipelineEndpoint.OsisPipelineEndpoint.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a OsisPipelineEndpoint resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the OsisPipelineEndpoint to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing OsisPipelineEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/osis_pipeline_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the OsisPipelineEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpoint.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpoint.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpoint.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpoint.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpoint.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpoint.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpoint.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpoint.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpoint.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpoint.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpoint.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpoint.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpoint.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpoint.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpoint.property.endpointId">endpoint_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpoint.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpoint.property.ingestEndpointUrl">ingest_endpoint_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpoint.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpoint.property.vpcId">vpc_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpoint.property.vpcOptions">vpc_options</a></code> | <code><a href="#@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpointVpcOptionsOutputReference">OsisPipelineEndpointVpcOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpoint.property.pipelineArnInput">pipeline_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpoint.property.vpcOptionsInput">vpc_options_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpointVpcOptions">OsisPipelineEndpointVpcOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpoint.property.pipelineArn">pipeline_arn</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpoint.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpoint.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpoint.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpoint.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpoint.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpoint.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpoint.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpoint.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpoint.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpoint.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpoint.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpoint.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpoint.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpoint.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpoint.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `endpoint_id`<sup>Required</sup> <a name="endpoint_id" id="@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpoint.property.endpointId"></a>

```python
endpoint_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpoint.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ingest_endpoint_url`<sup>Required</sup> <a name="ingest_endpoint_url" id="@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpoint.property.ingestEndpointUrl"></a>

```python
ingest_endpoint_url: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpoint.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpoint.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

---

##### `vpc_options`<sup>Required</sup> <a name="vpc_options" id="@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpoint.property.vpcOptions"></a>

```python
vpc_options: OsisPipelineEndpointVpcOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpointVpcOptionsOutputReference">OsisPipelineEndpointVpcOptionsOutputReference</a>

---

##### `pipeline_arn_input`<sup>Optional</sup> <a name="pipeline_arn_input" id="@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpoint.property.pipelineArnInput"></a>

```python
pipeline_arn_input: str
```

- *Type:* str

---

##### `vpc_options_input`<sup>Optional</sup> <a name="vpc_options_input" id="@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpoint.property.vpcOptionsInput"></a>

```python
vpc_options_input: IResolvable | OsisPipelineEndpointVpcOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpointVpcOptions">OsisPipelineEndpointVpcOptions</a>

---

##### `pipeline_arn`<sup>Required</sup> <a name="pipeline_arn" id="@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpoint.property.pipelineArn"></a>

```python
pipeline_arn: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpoint.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### OsisPipelineEndpointConfig <a name="OsisPipelineEndpointConfig" id="@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpointConfig.Initializer"></a>

```python
from cdktn_provider_awscc import osis_pipeline_endpoint

osisPipelineEndpoint.OsisPipelineEndpointConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  pipeline_arn: str,
  vpc_options: OsisPipelineEndpointVpcOptions
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpointConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpointConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpointConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpointConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpointConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpointConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpointConfig.property.pipelineArn">pipeline_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the pipeline to create the endpoint for. |
| <code><a href="#@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpointConfig.property.vpcOptions">vpc_options</a></code> | <code><a href="#@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpointVpcOptions">OsisPipelineEndpointVpcOptions</a></code> | Configuration settings for the VPC endpoint. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpointConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpointConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpointConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpointConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpointConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpointConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpointConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `pipeline_arn`<sup>Required</sup> <a name="pipeline_arn" id="@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpointConfig.property.pipelineArn"></a>

```python
pipeline_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) of the pipeline to create the endpoint for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/osis_pipeline_endpoint#pipeline_arn OsisPipelineEndpoint#pipeline_arn}

---

##### `vpc_options`<sup>Required</sup> <a name="vpc_options" id="@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpointConfig.property.vpcOptions"></a>

```python
vpc_options: OsisPipelineEndpointVpcOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpointVpcOptions">OsisPipelineEndpointVpcOptions</a>

Configuration settings for the VPC endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/osis_pipeline_endpoint#vpc_options OsisPipelineEndpoint#vpc_options}

---

### OsisPipelineEndpointVpcOptions <a name="OsisPipelineEndpointVpcOptions" id="@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpointVpcOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpointVpcOptions.Initializer"></a>

```python
from cdktn_provider_awscc import osis_pipeline_endpoint

osisPipelineEndpoint.OsisPipelineEndpointVpcOptions(
  security_group_ids: typing.List[str] = None,
  subnet_ids: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpointVpcOptions.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | A list of security group IDs that control network access to the pipeline endpoint. |
| <code><a href="#@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpointVpcOptions.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | A list of subnet IDs where the pipeline endpoint network interfaces are created. |

---

##### `security_group_ids`<sup>Optional</sup> <a name="security_group_ids" id="@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpointVpcOptions.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

A list of security group IDs that control network access to the pipeline endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/osis_pipeline_endpoint#security_group_ids OsisPipelineEndpoint#security_group_ids}

---

##### `subnet_ids`<sup>Optional</sup> <a name="subnet_ids" id="@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpointVpcOptions.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

A list of subnet IDs where the pipeline endpoint network interfaces are created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/osis_pipeline_endpoint#subnet_ids OsisPipelineEndpoint#subnet_ids}

---

## Classes <a name="Classes" id="Classes"></a>

### OsisPipelineEndpointVpcOptionsOutputReference <a name="OsisPipelineEndpointVpcOptionsOutputReference" id="@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpointVpcOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpointVpcOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import osis_pipeline_endpoint

osisPipelineEndpoint.OsisPipelineEndpointVpcOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpointVpcOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpointVpcOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpointVpcOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpointVpcOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpointVpcOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpointVpcOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpointVpcOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpointVpcOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpointVpcOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpointVpcOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpointVpcOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpointVpcOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpointVpcOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpointVpcOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpointVpcOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpointVpcOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpointVpcOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpointVpcOptionsOutputReference.resetSecurityGroupIds">reset_security_group_ids</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpointVpcOptionsOutputReference.resetSubnetIds">reset_subnet_ids</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpointVpcOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpointVpcOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpointVpcOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpointVpcOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpointVpcOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpointVpcOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpointVpcOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpointVpcOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpointVpcOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpointVpcOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpointVpcOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpointVpcOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpointVpcOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpointVpcOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpointVpcOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpointVpcOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpointVpcOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpointVpcOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpointVpcOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpointVpcOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpointVpcOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpointVpcOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpointVpcOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpointVpcOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_security_group_ids` <a name="reset_security_group_ids" id="@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpointVpcOptionsOutputReference.resetSecurityGroupIds"></a>

```python
def reset_security_group_ids() -> None
```

##### `reset_subnet_ids` <a name="reset_subnet_ids" id="@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpointVpcOptionsOutputReference.resetSubnetIds"></a>

```python
def reset_subnet_ids() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpointVpcOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpointVpcOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpointVpcOptionsOutputReference.property.securityGroupIdsInput">security_group_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpointVpcOptionsOutputReference.property.subnetIdsInput">subnet_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpointVpcOptionsOutputReference.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpointVpcOptionsOutputReference.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpointVpcOptionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpointVpcOptions">OsisPipelineEndpointVpcOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpointVpcOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpointVpcOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `security_group_ids_input`<sup>Optional</sup> <a name="security_group_ids_input" id="@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpointVpcOptionsOutputReference.property.securityGroupIdsInput"></a>

```python
security_group_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_ids_input`<sup>Optional</sup> <a name="subnet_ids_input" id="@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpointVpcOptionsOutputReference.property.subnetIdsInput"></a>

```python
subnet_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `security_group_ids`<sup>Required</sup> <a name="security_group_ids" id="@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpointVpcOptionsOutputReference.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_ids`<sup>Required</sup> <a name="subnet_ids" id="@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpointVpcOptionsOutputReference.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpointVpcOptionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | OsisPipelineEndpointVpcOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.osisPipelineEndpoint.OsisPipelineEndpointVpcOptions">OsisPipelineEndpointVpcOptions</a>

---



