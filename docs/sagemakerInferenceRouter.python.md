# `sagemakerInferenceRouter` Submodule <a name="`sagemakerInferenceRouter` Submodule" id="@cdktn/provider-awscc.sagemakerInferenceRouter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SagemakerInferenceRouter <a name="SagemakerInferenceRouter" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/sagemaker_inference_router awscc_sagemaker_inference_router}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_inference_router

sagemakerInferenceRouter.SagemakerInferenceRouter(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  routing_targets: IResolvable | typing.List[SagemakerInferenceRouterRoutingTargets],
  inference_router_name: str = None,
  tags: IResolvable | typing.List[SagemakerInferenceRouterTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.Initializer.parameter.routingTargets">routing_targets</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargets">SagemakerInferenceRouterRoutingTargets</a>]</code> | The routing targets of the Inference Router. An update replaces the full list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.Initializer.parameter.inferenceRouterName">inference_router_name</a></code> | <code>str</code> | The name of the Inference Router. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTags">SagemakerInferenceRouterTags</a>]</code> | Tags to associate with the Inference Router. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `routing_targets`<sup>Required</sup> <a name="routing_targets" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.Initializer.parameter.routingTargets"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargets">SagemakerInferenceRouterRoutingTargets</a>]

The routing targets of the Inference Router. An update replaces the full list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/sagemaker_inference_router#routing_targets SagemakerInferenceRouter#routing_targets}

---

##### `inference_router_name`<sup>Optional</sup> <a name="inference_router_name" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.Initializer.parameter.inferenceRouterName"></a>

- *Type:* str

The name of the Inference Router.

Unique per account per Region, case-sensitive. If you don't specify a name, CloudFormation generates one.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/sagemaker_inference_router#inference_router_name SagemakerInferenceRouter#inference_router_name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTags">SagemakerInferenceRouterTags</a>]

Tags to associate with the Inference Router.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/sagemaker_inference_router#tags SagemakerInferenceRouter#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.putRoutingTargets">put_routing_targets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.resetInferenceRouterName">reset_inference_router_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_routing_targets` <a name="put_routing_targets" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.putRoutingTargets"></a>

```python
def put_routing_targets(
  value: IResolvable | typing.List[SagemakerInferenceRouterRoutingTargets]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.putRoutingTargets.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargets">SagemakerInferenceRouterRoutingTargets</a>]

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[SagemakerInferenceRouterTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTags">SagemakerInferenceRouterTags</a>]

---

##### `reset_inference_router_name` <a name="reset_inference_router_name" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.resetInferenceRouterName"></a>

```python
def reset_inference_router_name() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a SagemakerInferenceRouter resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.isConstruct"></a>

```python
from cdktn_provider_awscc import sagemaker_inference_router

sagemakerInferenceRouter.SagemakerInferenceRouter.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.isTerraformElement"></a>

```python
from cdktn_provider_awscc import sagemaker_inference_router

sagemakerInferenceRouter.SagemakerInferenceRouter.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.isTerraformResource"></a>

```python
from cdktn_provider_awscc import sagemaker_inference_router

sagemakerInferenceRouter.SagemakerInferenceRouter.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import sagemaker_inference_router

sagemakerInferenceRouter.SagemakerInferenceRouter.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a SagemakerInferenceRouter resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SagemakerInferenceRouter to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SagemakerInferenceRouter that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/sagemaker_inference_router#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SagemakerInferenceRouter to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.property.creationTime">creation_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.property.inferenceRouterArn">inference_router_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.property.lastModifiedTime">last_modified_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.property.routingTargets">routing_targets</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsList">SagemakerInferenceRouterRoutingTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsList">SagemakerInferenceRouterTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.property.inferenceRouterNameInput">inference_router_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.property.routingTargetsInput">routing_targets_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargets">SagemakerInferenceRouterRoutingTargets</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTags">SagemakerInferenceRouterTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.property.inferenceRouterName">inference_router_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `creation_time`<sup>Required</sup> <a name="creation_time" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.property.creationTime"></a>

```python
creation_time: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `inference_router_arn`<sup>Required</sup> <a name="inference_router_arn" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.property.inferenceRouterArn"></a>

```python
inference_router_arn: str
```

- *Type:* str

---

##### `last_modified_time`<sup>Required</sup> <a name="last_modified_time" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.property.lastModifiedTime"></a>

```python
last_modified_time: str
```

- *Type:* str

---

##### `routing_targets`<sup>Required</sup> <a name="routing_targets" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.property.routingTargets"></a>

```python
routing_targets: SagemakerInferenceRouterRoutingTargetsList
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsList">SagemakerInferenceRouterRoutingTargetsList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.property.tags"></a>

```python
tags: SagemakerInferenceRouterTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsList">SagemakerInferenceRouterTagsList</a>

---

##### `inference_router_name_input`<sup>Optional</sup> <a name="inference_router_name_input" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.property.inferenceRouterNameInput"></a>

```python
inference_router_name_input: str
```

- *Type:* str

---

##### `routing_targets_input`<sup>Optional</sup> <a name="routing_targets_input" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.property.routingTargetsInput"></a>

```python
routing_targets_input: IResolvable | typing.List[SagemakerInferenceRouterRoutingTargets]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargets">SagemakerInferenceRouterRoutingTargets</a>]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[SagemakerInferenceRouterTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTags">SagemakerInferenceRouterTags</a>]

---

##### `inference_router_name`<sup>Required</sup> <a name="inference_router_name" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.property.inferenceRouterName"></a>

```python
inference_router_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouter.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SagemakerInferenceRouterConfig <a name="SagemakerInferenceRouterConfig" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterConfig.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_inference_router

sagemakerInferenceRouter.SagemakerInferenceRouterConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  routing_targets: IResolvable | typing.List[SagemakerInferenceRouterRoutingTargets],
  inference_router_name: str = None,
  tags: IResolvable | typing.List[SagemakerInferenceRouterTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterConfig.property.routingTargets">routing_targets</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargets">SagemakerInferenceRouterRoutingTargets</a>]</code> | The routing targets of the Inference Router. An update replaces the full list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterConfig.property.inferenceRouterName">inference_router_name</a></code> | <code>str</code> | The name of the Inference Router. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTags">SagemakerInferenceRouterTags</a>]</code> | Tags to associate with the Inference Router. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `routing_targets`<sup>Required</sup> <a name="routing_targets" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterConfig.property.routingTargets"></a>

```python
routing_targets: IResolvable | typing.List[SagemakerInferenceRouterRoutingTargets]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargets">SagemakerInferenceRouterRoutingTargets</a>]

The routing targets of the Inference Router. An update replaces the full list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/sagemaker_inference_router#routing_targets SagemakerInferenceRouter#routing_targets}

---

##### `inference_router_name`<sup>Optional</sup> <a name="inference_router_name" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterConfig.property.inferenceRouterName"></a>

```python
inference_router_name: str
```

- *Type:* str

The name of the Inference Router.

Unique per account per Region, case-sensitive. If you don't specify a name, CloudFormation generates one.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/sagemaker_inference_router#inference_router_name SagemakerInferenceRouter#inference_router_name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[SagemakerInferenceRouterTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTags">SagemakerInferenceRouterTags</a>]

Tags to associate with the Inference Router.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/sagemaker_inference_router#tags SagemakerInferenceRouter#tags}

---

### SagemakerInferenceRouterRoutingTargets <a name="SagemakerInferenceRouterRoutingTargets" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargets.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_inference_router

sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargets(
  destinations: IResolvable | typing.List[SagemakerInferenceRouterRoutingTargetsDestinations],
  name: str,
  async_inference_config: SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfig = None,
  routing_preference: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargets.property.destinations">destinations</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinations">SagemakerInferenceRouterRoutingTargetsDestinations</a>]</code> | The endpoints and inference components that serve this routing target. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargets.property.name">name</a></code> | <code>str</code> | The logical model name a caller passes at invoke time. Unique within an Inference Router. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargets.property.asyncInferenceConfig">async_inference_config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfig">SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfig</a></code> | Set this when the routing target's destinations are asynchronous inference endpoints. A routing target without it serves real-time requests. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargets.property.routingPreference">routing_preference</a></code> | <code>str</code> | How the router prefers this routing target's destinations. |

---

##### `destinations`<sup>Required</sup> <a name="destinations" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargets.property.destinations"></a>

```python
destinations: IResolvable | typing.List[SagemakerInferenceRouterRoutingTargetsDestinations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinations">SagemakerInferenceRouterRoutingTargetsDestinations</a>]

The endpoints and inference components that serve this routing target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/sagemaker_inference_router#destinations SagemakerInferenceRouter#destinations}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargets.property.name"></a>

```python
name: str
```

- *Type:* str

The logical model name a caller passes at invoke time. Unique within an Inference Router.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/sagemaker_inference_router#name SagemakerInferenceRouter#name}

---

##### `async_inference_config`<sup>Optional</sup> <a name="async_inference_config" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargets.property.asyncInferenceConfig"></a>

```python
async_inference_config: SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfig">SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfig</a>

Set this when the routing target's destinations are asynchronous inference endpoints. A routing target without it serves real-time requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/sagemaker_inference_router#async_inference_config SagemakerInferenceRouter#async_inference_config}

---

##### `routing_preference`<sup>Optional</sup> <a name="routing_preference" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargets.property.routingPreference"></a>

```python
routing_preference: str
```

- *Type:* str

How the router prefers this routing target's destinations.

LocalRegionFirst (the default) uses destinations in the router's Region first, then the others, each group in the order listed. InstancePoolOrder, for asynchronous routing targets only, tries destinations in order of the best instance pool they can serve from now. In both, degraded destinations are used after the others. If omitted, LocalRegionFirst is used and returned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/sagemaker_inference_router#routing_preference SagemakerInferenceRouter#routing_preference}

---

### SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfig <a name="SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfig" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfig.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_inference_router

sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfig(
  client_config: SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfig = None,
  output_config: SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfig.property.clientConfig">client_config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfig">SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfig</a></code> | How the Inference Router submits a request to a destination. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfig.property.outputConfig">output_config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfig">SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfig</a></code> | Where the results of asynchronous requests are written. Every destination of the routing target writes to these paths. |

---

##### `client_config`<sup>Optional</sup> <a name="client_config" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfig.property.clientConfig"></a>

```python
client_config: SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfig">SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfig</a>

How the Inference Router submits a request to a destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/sagemaker_inference_router#client_config SagemakerInferenceRouter#client_config}

---

##### `output_config`<sup>Optional</sup> <a name="output_config" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfig.property.outputConfig"></a>

```python
output_config: SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfig">SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfig</a>

Where the results of asynchronous requests are written. Every destination of the routing target writes to these paths.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/sagemaker_inference_router#output_config SagemakerInferenceRouter#output_config}

---

### SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfig <a name="SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfig" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfig.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_inference_router

sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfig(
  max_time_in_backlog_seconds: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfig.property.maxTimeInBacklogSeconds">max_time_in_backlog_seconds</a></code> | <code>typing.Union[int, float]</code> | How long, in seconds, a request can wait for a destination to pick it up before it expires. |

---

##### `max_time_in_backlog_seconds`<sup>Optional</sup> <a name="max_time_in_backlog_seconds" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfig.property.maxTimeInBacklogSeconds"></a>

```python
max_time_in_backlog_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

How long, in seconds, a request can wait for a destination to pick it up before it expires.

The default is 900.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/sagemaker_inference_router#max_time_in_backlog_seconds SagemakerInferenceRouter#max_time_in_backlog_seconds}

---

### SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfig <a name="SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfig" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfig.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_inference_router

sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfig(
  kms_key_id: str = None,
  notification_config: SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfig = None,
  s3_failure_path: str = None,
  s3_output_path: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfig.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | The AWS KMS key that encrypts the results. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfig.property.notificationConfig">notification_config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfig">SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfig</a></code> | The SNS topics the Inference Router publishes a completion to. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfig.property.s3FailurePath">s3_failure_path</a></code> | <code>str</code> | The Amazon S3 location for failed requests. It can be in any Region and account. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfig.property.s3OutputPath">s3_output_path</a></code> | <code>str</code> | The Amazon S3 location for successful results. It can be in any Region and account. |

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfig.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

The AWS KMS key that encrypts the results.

If any destination is in a different account or Region from the Inference Router, use a key ARN or an alias ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/sagemaker_inference_router#kms_key_id SagemakerInferenceRouter#kms_key_id}

---

##### `notification_config`<sup>Optional</sup> <a name="notification_config" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfig.property.notificationConfig"></a>

```python
notification_config: SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfig">SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfig</a>

The SNS topics the Inference Router publishes a completion to.

The notification carries the location of the result, not the result.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/sagemaker_inference_router#notification_config SagemakerInferenceRouter#notification_config}

---

##### `s3_failure_path`<sup>Optional</sup> <a name="s3_failure_path" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfig.property.s3FailurePath"></a>

```python
s3_failure_path: str
```

- *Type:* str

The Amazon S3 location for failed requests. It can be in any Region and account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/sagemaker_inference_router#s3_failure_path SagemakerInferenceRouter#s3_failure_path}

---

##### `s3_output_path`<sup>Optional</sup> <a name="s3_output_path" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfig.property.s3OutputPath"></a>

```python
s3_output_path: str
```

- *Type:* str

The Amazon S3 location for successful results. It can be in any Region and account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/sagemaker_inference_router#s3_output_path SagemakerInferenceRouter#s3_output_path}

---

### SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfig <a name="SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfig" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_inference_router

sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfig(
  error_topic: str = None,
  success_topic: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfig.property.errorTopic">error_topic</a></code> | <code>str</code> | The ARN of a standard (not FIFO) SNS topic to notify when a request fails. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfig.property.successTopic">success_topic</a></code> | <code>str</code> | The ARN of a standard (not FIFO) SNS topic to notify when a request succeeds. |

---

##### `error_topic`<sup>Optional</sup> <a name="error_topic" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfig.property.errorTopic"></a>

```python
error_topic: str
```

- *Type:* str

The ARN of a standard (not FIFO) SNS topic to notify when a request fails.

It can be in any Region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/sagemaker_inference_router#error_topic SagemakerInferenceRouter#error_topic}

---

##### `success_topic`<sup>Optional</sup> <a name="success_topic" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfig.property.successTopic"></a>

```python
success_topic: str
```

- *Type:* str

The ARN of a standard (not FIFO) SNS topic to notify when a request succeeds.

It can be in any Region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/sagemaker_inference_router#success_topic SagemakerInferenceRouter#success_topic}

---

### SagemakerInferenceRouterRoutingTargetsDestinations <a name="SagemakerInferenceRouterRoutingTargetsDestinations" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinations.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_inference_router

sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinations(
  resource_arn: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinations.property.resourceArn">resource_arn</a></code> | <code>str</code> | The ARN of a SageMaker endpoint or inference component that serves the routing target. |

---

##### `resource_arn`<sup>Required</sup> <a name="resource_arn" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinations.property.resourceArn"></a>

```python
resource_arn: str
```

- *Type:* str

The ARN of a SageMaker endpoint or inference component that serves the routing target.

It can be in any Region and account within the Inference Router's partition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/sagemaker_inference_router#resource_arn SagemakerInferenceRouter#resource_arn}

---

### SagemakerInferenceRouterTags <a name="SagemakerInferenceRouterTags" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTags.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_inference_router

sagemakerInferenceRouter.SagemakerInferenceRouterTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTags.property.key">key</a></code> | <code>str</code> | The tag key. Tag keys must be unique per resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTags.property.value">value</a></code> | <code>str</code> | The tag value. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTags.property.key"></a>

```python
key: str
```

- *Type:* str

The tag key. Tag keys must be unique per resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/sagemaker_inference_router#key SagemakerInferenceRouter#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTags.property.value"></a>

```python
value: str
```

- *Type:* str

The tag value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/sagemaker_inference_router#value SagemakerInferenceRouter#value}

---

## Classes <a name="Classes" id="Classes"></a>

### SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference <a name="SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_inference_router

sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.resetMaxTimeInBacklogSeconds">reset_max_time_in_backlog_seconds</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_max_time_in_backlog_seconds` <a name="reset_max_time_in_backlog_seconds" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.resetMaxTimeInBacklogSeconds"></a>

```python
def reset_max_time_in_backlog_seconds() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.property.maxTimeInBacklogSecondsInput">max_time_in_backlog_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.property.maxTimeInBacklogSeconds">max_time_in_backlog_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfig">SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_time_in_backlog_seconds_input`<sup>Optional</sup> <a name="max_time_in_backlog_seconds_input" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.property.maxTimeInBacklogSecondsInput"></a>

```python
max_time_in_backlog_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_time_in_backlog_seconds`<sup>Required</sup> <a name="max_time_in_backlog_seconds" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.property.maxTimeInBacklogSeconds"></a>

```python
max_time_in_backlog_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfig">SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfig</a>

---


### SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference <a name="SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_inference_router

sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.resetErrorTopic">reset_error_topic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.resetSuccessTopic">reset_success_topic</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_error_topic` <a name="reset_error_topic" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.resetErrorTopic"></a>

```python
def reset_error_topic() -> None
```

##### `reset_success_topic` <a name="reset_success_topic" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.resetSuccessTopic"></a>

```python
def reset_success_topic() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.property.errorTopicInput">error_topic_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.property.successTopicInput">success_topic_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.property.errorTopic">error_topic</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.property.successTopic">success_topic</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfig">SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `error_topic_input`<sup>Optional</sup> <a name="error_topic_input" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.property.errorTopicInput"></a>

```python
error_topic_input: str
```

- *Type:* str

---

##### `success_topic_input`<sup>Optional</sup> <a name="success_topic_input" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.property.successTopicInput"></a>

```python
success_topic_input: str
```

- *Type:* str

---

##### `error_topic`<sup>Required</sup> <a name="error_topic" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.property.errorTopic"></a>

```python
error_topic: str
```

- *Type:* str

---

##### `success_topic`<sup>Required</sup> <a name="success_topic" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.property.successTopic"></a>

```python
success_topic: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfig">SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfig</a>

---


### SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference <a name="SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_inference_router

sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.putNotificationConfig">put_notification_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.resetKmsKeyId">reset_kms_key_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.resetNotificationConfig">reset_notification_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.resetS3FailurePath">reset_s3_failure_path</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.resetS3OutputPath">reset_s3_output_path</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_notification_config` <a name="put_notification_config" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.putNotificationConfig"></a>

```python
def put_notification_config(
  error_topic: str = None,
  success_topic: str = None
) -> None
```

###### `error_topic`<sup>Optional</sup> <a name="error_topic" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.putNotificationConfig.parameter.errorTopic"></a>

- *Type:* str

The ARN of a standard (not FIFO) SNS topic to notify when a request fails.

It can be in any Region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/sagemaker_inference_router#error_topic SagemakerInferenceRouter#error_topic}

---

###### `success_topic`<sup>Optional</sup> <a name="success_topic" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.putNotificationConfig.parameter.successTopic"></a>

- *Type:* str

The ARN of a standard (not FIFO) SNS topic to notify when a request succeeds.

It can be in any Region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/sagemaker_inference_router#success_topic SagemakerInferenceRouter#success_topic}

---

##### `reset_kms_key_id` <a name="reset_kms_key_id" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.resetKmsKeyId"></a>

```python
def reset_kms_key_id() -> None
```

##### `reset_notification_config` <a name="reset_notification_config" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.resetNotificationConfig"></a>

```python
def reset_notification_config() -> None
```

##### `reset_s3_failure_path` <a name="reset_s3_failure_path" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.resetS3FailurePath"></a>

```python
def reset_s3_failure_path() -> None
```

##### `reset_s3_output_path` <a name="reset_s3_output_path" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.resetS3OutputPath"></a>

```python
def reset_s3_output_path() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.property.notificationConfig">notification_config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference">SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.property.kmsKeyIdInput">kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.property.notificationConfigInput">notification_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfig">SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.property.s3FailurePathInput">s3_failure_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.property.s3OutputPathInput">s3_output_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.property.s3FailurePath">s3_failure_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.property.s3OutputPath">s3_output_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfig">SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `notification_config`<sup>Required</sup> <a name="notification_config" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.property.notificationConfig"></a>

```python
notification_config: SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference">SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfigOutputReference</a>

---

##### `kms_key_id_input`<sup>Optional</sup> <a name="kms_key_id_input" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.property.kmsKeyIdInput"></a>

```python
kms_key_id_input: str
```

- *Type:* str

---

##### `notification_config_input`<sup>Optional</sup> <a name="notification_config_input" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.property.notificationConfigInput"></a>

```python
notification_config_input: IResolvable | SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfig">SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfig</a>

---

##### `s3_failure_path_input`<sup>Optional</sup> <a name="s3_failure_path_input" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.property.s3FailurePathInput"></a>

```python
s3_failure_path_input: str
```

- *Type:* str

---

##### `s3_output_path_input`<sup>Optional</sup> <a name="s3_output_path_input" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.property.s3OutputPathInput"></a>

```python
s3_output_path_input: str
```

- *Type:* str

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `s3_failure_path`<sup>Required</sup> <a name="s3_failure_path" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.property.s3FailurePath"></a>

```python
s3_failure_path: str
```

- *Type:* str

---

##### `s3_output_path`<sup>Required</sup> <a name="s3_output_path" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.property.s3OutputPath"></a>

```python
s3_output_path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfig">SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfig</a>

---


### SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference <a name="SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_inference_router

sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.putClientConfig">put_client_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.putOutputConfig">put_output_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.resetClientConfig">reset_client_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.resetOutputConfig">reset_output_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_client_config` <a name="put_client_config" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.putClientConfig"></a>

```python
def put_client_config(
  max_time_in_backlog_seconds: typing.Union[int, float] = None
) -> None
```

###### `max_time_in_backlog_seconds`<sup>Optional</sup> <a name="max_time_in_backlog_seconds" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.putClientConfig.parameter.maxTimeInBacklogSeconds"></a>

- *Type:* typing.Union[int, float]

How long, in seconds, a request can wait for a destination to pick it up before it expires.

The default is 900.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/sagemaker_inference_router#max_time_in_backlog_seconds SagemakerInferenceRouter#max_time_in_backlog_seconds}

---

##### `put_output_config` <a name="put_output_config" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.putOutputConfig"></a>

```python
def put_output_config(
  kms_key_id: str = None,
  notification_config: SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfig = None,
  s3_failure_path: str = None,
  s3_output_path: str = None
) -> None
```

###### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.putOutputConfig.parameter.kmsKeyId"></a>

- *Type:* str

The AWS KMS key that encrypts the results.

If any destination is in a different account or Region from the Inference Router, use a key ARN or an alias ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/sagemaker_inference_router#kms_key_id SagemakerInferenceRouter#kms_key_id}

---

###### `notification_config`<sup>Optional</sup> <a name="notification_config" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.putOutputConfig.parameter.notificationConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfig">SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigNotificationConfig</a>

The SNS topics the Inference Router publishes a completion to.

The notification carries the location of the result, not the result.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/sagemaker_inference_router#notification_config SagemakerInferenceRouter#notification_config}

---

###### `s3_failure_path`<sup>Optional</sup> <a name="s3_failure_path" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.putOutputConfig.parameter.s3FailurePath"></a>

- *Type:* str

The Amazon S3 location for failed requests. It can be in any Region and account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/sagemaker_inference_router#s3_failure_path SagemakerInferenceRouter#s3_failure_path}

---

###### `s3_output_path`<sup>Optional</sup> <a name="s3_output_path" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.putOutputConfig.parameter.s3OutputPath"></a>

- *Type:* str

The Amazon S3 location for successful results. It can be in any Region and account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/sagemaker_inference_router#s3_output_path SagemakerInferenceRouter#s3_output_path}

---

##### `reset_client_config` <a name="reset_client_config" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.resetClientConfig"></a>

```python
def reset_client_config() -> None
```

##### `reset_output_config` <a name="reset_output_config" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.resetOutputConfig"></a>

```python
def reset_output_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.property.clientConfig">client_config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference">SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.property.outputConfig">output_config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference">SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.property.clientConfigInput">client_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfig">SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.property.outputConfigInput">output_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfig">SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfig">SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `client_config`<sup>Required</sup> <a name="client_config" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.property.clientConfig"></a>

```python
client_config: SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference">SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfigOutputReference</a>

---

##### `output_config`<sup>Required</sup> <a name="output_config" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.property.outputConfig"></a>

```python
output_config: SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference">SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfigOutputReference</a>

---

##### `client_config_input`<sup>Optional</sup> <a name="client_config_input" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.property.clientConfigInput"></a>

```python
client_config_input: IResolvable | SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfig">SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfig</a>

---

##### `output_config_input`<sup>Optional</sup> <a name="output_config_input" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.property.outputConfigInput"></a>

```python
output_config_input: IResolvable | SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfig">SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfig</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfig">SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfig</a>

---


### SagemakerInferenceRouterRoutingTargetsDestinationsList <a name="SagemakerInferenceRouterRoutingTargetsDestinationsList" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsList.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_inference_router

sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinations">SagemakerInferenceRouterRoutingTargetsDestinations</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SagemakerInferenceRouterRoutingTargetsDestinations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinations">SagemakerInferenceRouterRoutingTargetsDestinations</a>]

---


### SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference <a name="SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_inference_router

sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.property.resourceArnInput">resource_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.property.resourceArn">resource_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinations">SagemakerInferenceRouterRoutingTargetsDestinations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `resource_arn_input`<sup>Optional</sup> <a name="resource_arn_input" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.property.resourceArnInput"></a>

```python
resource_arn_input: str
```

- *Type:* str

---

##### `resource_arn`<sup>Required</sup> <a name="resource_arn" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.property.resourceArn"></a>

```python
resource_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerInferenceRouterRoutingTargetsDestinations
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinations">SagemakerInferenceRouterRoutingTargetsDestinations</a>

---


### SagemakerInferenceRouterRoutingTargetsList <a name="SagemakerInferenceRouterRoutingTargetsList" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsList.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_inference_router

sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SagemakerInferenceRouterRoutingTargetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargets">SagemakerInferenceRouterRoutingTargets</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SagemakerInferenceRouterRoutingTargets]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargets">SagemakerInferenceRouterRoutingTargets</a>]

---


### SagemakerInferenceRouterRoutingTargetsOutputReference <a name="SagemakerInferenceRouterRoutingTargetsOutputReference" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_inference_router

sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.putAsyncInferenceConfig">put_async_inference_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.putDestinations">put_destinations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.resetAsyncInferenceConfig">reset_async_inference_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.resetRoutingPreference">reset_routing_preference</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_async_inference_config` <a name="put_async_inference_config" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.putAsyncInferenceConfig"></a>

```python
def put_async_inference_config(
  client_config: SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfig = None,
  output_config: SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfig = None
) -> None
```

###### `client_config`<sup>Optional</sup> <a name="client_config" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.putAsyncInferenceConfig.parameter.clientConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfig">SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigClientConfig</a>

How the Inference Router submits a request to a destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/sagemaker_inference_router#client_config SagemakerInferenceRouter#client_config}

---

###### `output_config`<sup>Optional</sup> <a name="output_config" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.putAsyncInferenceConfig.parameter.outputConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfig">SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputConfig</a>

Where the results of asynchronous requests are written. Every destination of the routing target writes to these paths.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/sagemaker_inference_router#output_config SagemakerInferenceRouter#output_config}

---

##### `put_destinations` <a name="put_destinations" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.putDestinations"></a>

```python
def put_destinations(
  value: IResolvable | typing.List[SagemakerInferenceRouterRoutingTargetsDestinations]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.putDestinations.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinations">SagemakerInferenceRouterRoutingTargetsDestinations</a>]

---

##### `reset_async_inference_config` <a name="reset_async_inference_config" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.resetAsyncInferenceConfig"></a>

```python
def reset_async_inference_config() -> None
```

##### `reset_routing_preference` <a name="reset_routing_preference" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.resetRoutingPreference"></a>

```python
def reset_routing_preference() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.property.asyncInferenceConfig">async_inference_config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference">SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.property.destinations">destinations</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsList">SagemakerInferenceRouterRoutingTargetsDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.property.asyncInferenceConfigInput">async_inference_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfig">SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.property.destinationsInput">destinations_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinations">SagemakerInferenceRouterRoutingTargetsDestinations</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.property.routingPreferenceInput">routing_preference_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.property.routingPreference">routing_preference</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargets">SagemakerInferenceRouterRoutingTargets</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `async_inference_config`<sup>Required</sup> <a name="async_inference_config" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.property.asyncInferenceConfig"></a>

```python
async_inference_config: SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference">SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfigOutputReference</a>

---

##### `destinations`<sup>Required</sup> <a name="destinations" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.property.destinations"></a>

```python
destinations: SagemakerInferenceRouterRoutingTargetsDestinationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinationsList">SagemakerInferenceRouterRoutingTargetsDestinationsList</a>

---

##### `async_inference_config_input`<sup>Optional</sup> <a name="async_inference_config_input" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.property.asyncInferenceConfigInput"></a>

```python
async_inference_config_input: IResolvable | SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfig">SagemakerInferenceRouterRoutingTargetsAsyncInferenceConfig</a>

---

##### `destinations_input`<sup>Optional</sup> <a name="destinations_input" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.property.destinationsInput"></a>

```python
destinations_input: IResolvable | typing.List[SagemakerInferenceRouterRoutingTargetsDestinations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsDestinations">SagemakerInferenceRouterRoutingTargetsDestinations</a>]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `routing_preference_input`<sup>Optional</sup> <a name="routing_preference_input" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.property.routingPreferenceInput"></a>

```python
routing_preference_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `routing_preference`<sup>Required</sup> <a name="routing_preference" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.property.routingPreference"></a>

```python
routing_preference: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargetsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerInferenceRouterRoutingTargets
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterRoutingTargets">SagemakerInferenceRouterRoutingTargets</a>

---


### SagemakerInferenceRouterTagsList <a name="SagemakerInferenceRouterTagsList" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_inference_router

sagemakerInferenceRouter.SagemakerInferenceRouterTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SagemakerInferenceRouterTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTags">SagemakerInferenceRouterTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SagemakerInferenceRouterTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTags">SagemakerInferenceRouterTags</a>]

---


### SagemakerInferenceRouterTagsOutputReference <a name="SagemakerInferenceRouterTagsOutputReference" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_inference_router

sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTags">SagemakerInferenceRouterTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerInferenceRouterTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerInferenceRouter.SagemakerInferenceRouterTags">SagemakerInferenceRouterTags</a>

---



