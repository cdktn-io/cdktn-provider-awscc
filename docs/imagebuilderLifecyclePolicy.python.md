# `imagebuilderLifecyclePolicy` Submodule <a name="`imagebuilderLifecyclePolicy` Submodule" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ImagebuilderLifecyclePolicy <a name="ImagebuilderLifecyclePolicy" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy awscc_imagebuilder_lifecycle_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.Initializer"></a>

```python
from cdktn_provider_awscc import imagebuilder_lifecycle_policy

imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  execution_role: str,
  name: str,
  policy_details: IResolvable | typing.List[ImagebuilderLifecyclePolicyPolicyDetails],
  resource_selection: ImagebuilderLifecyclePolicyResourceSelection,
  resource_type: str,
  description: str = None,
  status: str = None,
  tags: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.Initializer.parameter.executionRole">execution_role</a></code> | <code>str</code> | The execution role of the lifecycle policy. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the lifecycle policy. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.Initializer.parameter.policyDetails">policy_details</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetails">ImagebuilderLifecyclePolicyPolicyDetails</a>]</code> | The policy details of the lifecycle policy. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.Initializer.parameter.resourceSelection">resource_selection</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelection">ImagebuilderLifecyclePolicyResourceSelection</a></code> | The resource selection of the lifecycle policy. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.Initializer.parameter.resourceType">resource_type</a></code> | <code>str</code> | The resource type of the lifecycle policy. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.Initializer.parameter.description">description</a></code> | <code>str</code> | The description of the lifecycle policy. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.Initializer.parameter.status">status</a></code> | <code>str</code> | The status of the lifecycle policy. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | The tags associated with the lifecycle policy. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `execution_role`<sup>Required</sup> <a name="execution_role" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.Initializer.parameter.executionRole"></a>

- *Type:* str

The execution role of the lifecycle policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#execution_role ImagebuilderLifecyclePolicy#execution_role}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.Initializer.parameter.name"></a>

- *Type:* str

The name of the lifecycle policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#name ImagebuilderLifecyclePolicy#name}

---

##### `policy_details`<sup>Required</sup> <a name="policy_details" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.Initializer.parameter.policyDetails"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetails">ImagebuilderLifecyclePolicyPolicyDetails</a>]

The policy details of the lifecycle policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#policy_details ImagebuilderLifecyclePolicy#policy_details}

---

##### `resource_selection`<sup>Required</sup> <a name="resource_selection" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.Initializer.parameter.resourceSelection"></a>

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelection">ImagebuilderLifecyclePolicyResourceSelection</a>

The resource selection of the lifecycle policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#resource_selection ImagebuilderLifecyclePolicy#resource_selection}

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.Initializer.parameter.resourceType"></a>

- *Type:* str

The resource type of the lifecycle policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#resource_type ImagebuilderLifecyclePolicy#resource_type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.Initializer.parameter.description"></a>

- *Type:* str

The description of the lifecycle policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#description ImagebuilderLifecyclePolicy#description}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.Initializer.parameter.status"></a>

- *Type:* str

The status of the lifecycle policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#status ImagebuilderLifecyclePolicy#status}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

The tags associated with the lifecycle policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#tags ImagebuilderLifecyclePolicy#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.putPolicyDetails">put_policy_details</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.putResourceSelection">put_resource_selection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.resetStatus">reset_status</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_policy_details` <a name="put_policy_details" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.putPolicyDetails"></a>

```python
def put_policy_details(
  value: IResolvable | typing.List[ImagebuilderLifecyclePolicyPolicyDetails]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.putPolicyDetails.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetails">ImagebuilderLifecyclePolicyPolicyDetails</a>]

---

##### `put_resource_selection` <a name="put_resource_selection" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.putResourceSelection"></a>

```python
def put_resource_selection(
  recipes: IResolvable | typing.List[ImagebuilderLifecyclePolicyResourceSelectionRecipes] = None,
  tag_map: typing.Mapping[str] = None
) -> None
```

###### `recipes`<sup>Optional</sup> <a name="recipes" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.putResourceSelection.parameter.recipes"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipes">ImagebuilderLifecyclePolicyResourceSelectionRecipes</a>]

The recipes to select.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#recipes ImagebuilderLifecyclePolicy#recipes}

---

###### `tag_map`<sup>Optional</sup> <a name="tag_map" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.putResourceSelection.parameter.tagMap"></a>

- *Type:* typing.Mapping[str]

The Image Builder resources to select by tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#tag_map ImagebuilderLifecyclePolicy#tag_map}

---

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_status` <a name="reset_status" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.resetStatus"></a>

```python
def reset_status() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ImagebuilderLifecyclePolicy resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.isConstruct"></a>

```python
from cdktn_provider_awscc import imagebuilder_lifecycle_policy

imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.isTerraformElement"></a>

```python
from cdktn_provider_awscc import imagebuilder_lifecycle_policy

imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.isTerraformResource"></a>

```python
from cdktn_provider_awscc import imagebuilder_lifecycle_policy

imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import imagebuilder_lifecycle_policy

imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ImagebuilderLifecyclePolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ImagebuilderLifecyclePolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ImagebuilderLifecyclePolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ImagebuilderLifecyclePolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.policyDetails">policy_details</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsList">ImagebuilderLifecyclePolicyPolicyDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.resourceSelection">resource_selection</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference">ImagebuilderLifecyclePolicyResourceSelectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.executionRoleInput">execution_role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.policyDetailsInput">policy_details_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetails">ImagebuilderLifecyclePolicyPolicyDetails</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.resourceSelectionInput">resource_selection_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelection">ImagebuilderLifecyclePolicyResourceSelection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.resourceTypeInput">resource_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.executionRole">execution_role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `policy_details`<sup>Required</sup> <a name="policy_details" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.policyDetails"></a>

```python
policy_details: ImagebuilderLifecyclePolicyPolicyDetailsList
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsList">ImagebuilderLifecyclePolicyPolicyDetailsList</a>

---

##### `resource_selection`<sup>Required</sup> <a name="resource_selection" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.resourceSelection"></a>

```python
resource_selection: ImagebuilderLifecyclePolicyResourceSelectionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference">ImagebuilderLifecyclePolicyResourceSelectionOutputReference</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `execution_role_input`<sup>Optional</sup> <a name="execution_role_input" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.executionRoleInput"></a>

```python
execution_role_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `policy_details_input`<sup>Optional</sup> <a name="policy_details_input" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.policyDetailsInput"></a>

```python
policy_details_input: IResolvable | typing.List[ImagebuilderLifecyclePolicyPolicyDetails]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetails">ImagebuilderLifecyclePolicyPolicyDetails</a>]

---

##### `resource_selection_input`<sup>Optional</sup> <a name="resource_selection_input" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.resourceSelectionInput"></a>

```python
resource_selection_input: IResolvable | ImagebuilderLifecyclePolicyResourceSelection
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelection">ImagebuilderLifecyclePolicyResourceSelection</a>

---

##### `resource_type_input`<sup>Optional</sup> <a name="resource_type_input" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.resourceTypeInput"></a>

```python
resource_type_input: str
```

- *Type:* str

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `execution_role`<sup>Required</sup> <a name="execution_role" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.executionRole"></a>

```python
execution_role: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ImagebuilderLifecyclePolicyConfig <a name="ImagebuilderLifecyclePolicyConfig" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.Initializer"></a>

```python
from cdktn_provider_awscc import imagebuilder_lifecycle_policy

imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  execution_role: str,
  name: str,
  policy_details: IResolvable | typing.List[ImagebuilderLifecyclePolicyPolicyDetails],
  resource_selection: ImagebuilderLifecyclePolicyResourceSelection,
  resource_type: str,
  description: str = None,
  status: str = None,
  tags: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.executionRole">execution_role</a></code> | <code>str</code> | The execution role of the lifecycle policy. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.name">name</a></code> | <code>str</code> | The name of the lifecycle policy. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.policyDetails">policy_details</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetails">ImagebuilderLifecyclePolicyPolicyDetails</a>]</code> | The policy details of the lifecycle policy. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.resourceSelection">resource_selection</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelection">ImagebuilderLifecyclePolicyResourceSelection</a></code> | The resource selection of the lifecycle policy. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.resourceType">resource_type</a></code> | <code>str</code> | The resource type of the lifecycle policy. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.description">description</a></code> | <code>str</code> | The description of the lifecycle policy. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.status">status</a></code> | <code>str</code> | The status of the lifecycle policy. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | The tags associated with the lifecycle policy. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `execution_role`<sup>Required</sup> <a name="execution_role" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.executionRole"></a>

```python
execution_role: str
```

- *Type:* str

The execution role of the lifecycle policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#execution_role ImagebuilderLifecyclePolicy#execution_role}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the lifecycle policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#name ImagebuilderLifecyclePolicy#name}

---

##### `policy_details`<sup>Required</sup> <a name="policy_details" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.policyDetails"></a>

```python
policy_details: IResolvable | typing.List[ImagebuilderLifecyclePolicyPolicyDetails]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetails">ImagebuilderLifecyclePolicyPolicyDetails</a>]

The policy details of the lifecycle policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#policy_details ImagebuilderLifecyclePolicy#policy_details}

---

##### `resource_selection`<sup>Required</sup> <a name="resource_selection" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.resourceSelection"></a>

```python
resource_selection: ImagebuilderLifecyclePolicyResourceSelection
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelection">ImagebuilderLifecyclePolicyResourceSelection</a>

The resource selection of the lifecycle policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#resource_selection ImagebuilderLifecyclePolicy#resource_selection}

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

The resource type of the lifecycle policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#resource_type ImagebuilderLifecyclePolicy#resource_type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The description of the lifecycle policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#description ImagebuilderLifecyclePolicy#description}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.status"></a>

```python
status: str
```

- *Type:* str

The status of the lifecycle policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#status ImagebuilderLifecyclePolicy#status}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

The tags associated with the lifecycle policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#tags ImagebuilderLifecyclePolicy#tags}

---

### ImagebuilderLifecyclePolicyPolicyDetails <a name="ImagebuilderLifecyclePolicyPolicyDetails" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetails.Initializer"></a>

```python
from cdktn_provider_awscc import imagebuilder_lifecycle_policy

imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetails(
  action: ImagebuilderLifecyclePolicyPolicyDetailsAction,
  filter: ImagebuilderLifecyclePolicyPolicyDetailsFilter,
  exclusion_rules: ImagebuilderLifecyclePolicyPolicyDetailsExclusionRules = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetails.property.action">action</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsAction">ImagebuilderLifecyclePolicyPolicyDetailsAction</a></code> | The action of the policy detail. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetails.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilter">ImagebuilderLifecyclePolicyPolicyDetailsFilter</a></code> | The filters to apply of the policy detail. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetails.property.exclusionRules">exclusion_rules</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRules">ImagebuilderLifecyclePolicyPolicyDetailsExclusionRules</a></code> | The exclusion rules to apply of the policy detail. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetails.property.action"></a>

```python
action: ImagebuilderLifecyclePolicyPolicyDetailsAction
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsAction">ImagebuilderLifecyclePolicyPolicyDetailsAction</a>

The action of the policy detail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#action ImagebuilderLifecyclePolicy#action}

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetails.property.filter"></a>

```python
filter: ImagebuilderLifecyclePolicyPolicyDetailsFilter
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilter">ImagebuilderLifecyclePolicyPolicyDetailsFilter</a>

The filters to apply of the policy detail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#filter ImagebuilderLifecyclePolicy#filter}

---

##### `exclusion_rules`<sup>Optional</sup> <a name="exclusion_rules" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetails.property.exclusionRules"></a>

```python
exclusion_rules: ImagebuilderLifecyclePolicyPolicyDetailsExclusionRules
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRules">ImagebuilderLifecyclePolicyPolicyDetailsExclusionRules</a>

The exclusion rules to apply of the policy detail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#exclusion_rules ImagebuilderLifecyclePolicy#exclusion_rules}

---

### ImagebuilderLifecyclePolicyPolicyDetailsAction <a name="ImagebuilderLifecyclePolicyPolicyDetailsAction" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsAction.Initializer"></a>

```python
from cdktn_provider_awscc import imagebuilder_lifecycle_policy

imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsAction(
  type: str,
  include_resources: ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResources = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsAction.property.type">type</a></code> | <code>str</code> | The action type of the policy detail. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsAction.property.includeResources">include_resources</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResources">ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResources</a></code> | The included resources of the policy detail. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsAction.property.type"></a>

```python
type: str
```

- *Type:* str

The action type of the policy detail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#type ImagebuilderLifecyclePolicy#type}

---

##### `include_resources`<sup>Optional</sup> <a name="include_resources" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsAction.property.includeResources"></a>

```python
include_resources: ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResources
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResources">ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResources</a>

The included resources of the policy detail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#include_resources ImagebuilderLifecyclePolicy#include_resources}

---

### ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResources <a name="ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResources" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResources.Initializer"></a>

```python
from cdktn_provider_awscc import imagebuilder_lifecycle_policy

imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResources(
  amis: bool | IResolvable = None,
  containers: bool | IResolvable = None,
  snapshots: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResources.property.amis">amis</a></code> | <code>bool \| cdktn.IResolvable</code> | Use to configure lifecycle actions on AMIs. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResources.property.containers">containers</a></code> | <code>bool \| cdktn.IResolvable</code> | Use to configure lifecycle actions on containers. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResources.property.snapshots">snapshots</a></code> | <code>bool \| cdktn.IResolvable</code> | Use to configure lifecycle actions on snapshots. |

---

##### `amis`<sup>Optional</sup> <a name="amis" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResources.property.amis"></a>

```python
amis: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Use to configure lifecycle actions on AMIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#amis ImagebuilderLifecyclePolicy#amis}

---

##### `containers`<sup>Optional</sup> <a name="containers" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResources.property.containers"></a>

```python
containers: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Use to configure lifecycle actions on containers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#containers ImagebuilderLifecyclePolicy#containers}

---

##### `snapshots`<sup>Optional</sup> <a name="snapshots" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResources.property.snapshots"></a>

```python
snapshots: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Use to configure lifecycle actions on snapshots.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#snapshots ImagebuilderLifecyclePolicy#snapshots}

---

### ImagebuilderLifecyclePolicyPolicyDetailsExclusionRules <a name="ImagebuilderLifecyclePolicyPolicyDetailsExclusionRules" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRules.Initializer"></a>

```python
from cdktn_provider_awscc import imagebuilder_lifecycle_policy

imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRules(
  amis: ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis = None,
  tag_map: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRules.property.amis">amis</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis">ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis</a></code> | The AMI exclusion rules for the policy detail. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRules.property.tagMap">tag_map</a></code> | <code>typing.Mapping[str]</code> | The Image Builder tags to filter on. |

---

##### `amis`<sup>Optional</sup> <a name="amis" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRules.property.amis"></a>

```python
amis: ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis">ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis</a>

The AMI exclusion rules for the policy detail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#amis ImagebuilderLifecyclePolicy#amis}

---

##### `tag_map`<sup>Optional</sup> <a name="tag_map" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRules.property.tagMap"></a>

```python
tag_map: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

The Image Builder tags to filter on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#tag_map ImagebuilderLifecyclePolicy#tag_map}

---

### ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis <a name="ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis.Initializer"></a>

```python
from cdktn_provider_awscc import imagebuilder_lifecycle_policy

imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis(
  is_public: bool | IResolvable = None,
  last_launched: ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunched = None,
  regions: typing.List[str] = None,
  shared_accounts: typing.List[str] = None,
  tag_map: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis.property.isPublic">is_public</a></code> | <code>bool \| cdktn.IResolvable</code> | Use to apply lifecycle policy actions on whether the AMI is public. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis.property.lastLaunched">last_launched</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunched">ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunched</a></code> | Use to apply lifecycle policy actions on AMIs launched before a certain time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis.property.regions">regions</a></code> | <code>typing.List[str]</code> | Use to apply lifecycle policy actions on AMIs distributed to a set of regions. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis.property.sharedAccounts">shared_accounts</a></code> | <code>typing.List[str]</code> | Use to apply lifecycle policy actions on AMIs shared with a set of regions. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis.property.tagMap">tag_map</a></code> | <code>typing.Mapping[str]</code> | The AMIs to select by tag. |

---

##### `is_public`<sup>Optional</sup> <a name="is_public" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis.property.isPublic"></a>

```python
is_public: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Use to apply lifecycle policy actions on whether the AMI is public.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#is_public ImagebuilderLifecyclePolicy#is_public}

---

##### `last_launched`<sup>Optional</sup> <a name="last_launched" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis.property.lastLaunched"></a>

```python
last_launched: ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunched
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunched">ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunched</a>

Use to apply lifecycle policy actions on AMIs launched before a certain time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#last_launched ImagebuilderLifecyclePolicy#last_launched}

---

##### `regions`<sup>Optional</sup> <a name="regions" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis.property.regions"></a>

```python
regions: typing.List[str]
```

- *Type:* typing.List[str]

Use to apply lifecycle policy actions on AMIs distributed to a set of regions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#regions ImagebuilderLifecyclePolicy#regions}

---

##### `shared_accounts`<sup>Optional</sup> <a name="shared_accounts" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis.property.sharedAccounts"></a>

```python
shared_accounts: typing.List[str]
```

- *Type:* typing.List[str]

Use to apply lifecycle policy actions on AMIs shared with a set of regions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#shared_accounts ImagebuilderLifecyclePolicy#shared_accounts}

---

##### `tag_map`<sup>Optional</sup> <a name="tag_map" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis.property.tagMap"></a>

```python
tag_map: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

The AMIs to select by tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#tag_map ImagebuilderLifecyclePolicy#tag_map}

---

### ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunched <a name="ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunched" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunched"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunched.Initializer"></a>

```python
from cdktn_provider_awscc import imagebuilder_lifecycle_policy

imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunched(
  unit: str = None,
  value: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunched.property.unit">unit</a></code> | <code>str</code> | The value's time unit. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunched.property.value">value</a></code> | <code>typing.Union[int, float]</code> | The last launched value. |

---

##### `unit`<sup>Optional</sup> <a name="unit" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunched.property.unit"></a>

```python
unit: str
```

- *Type:* str

The value's time unit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#unit ImagebuilderLifecyclePolicy#unit}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunched.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The last launched value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#value ImagebuilderLifecyclePolicy#value}

---

### ImagebuilderLifecyclePolicyPolicyDetailsFilter <a name="ImagebuilderLifecyclePolicyPolicyDetailsFilter" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilter.Initializer"></a>

```python
from cdktn_provider_awscc import imagebuilder_lifecycle_policy

imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilter(
  type: str,
  value: typing.Union[int, float],
  retain_at_least: typing.Union[int, float] = None,
  unit: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilter.property.type">type</a></code> | <code>str</code> | The filter type. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilter.property.value">value</a></code> | <code>typing.Union[int, float]</code> | The filter value. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilter.property.retainAtLeast">retain_at_least</a></code> | <code>typing.Union[int, float]</code> | The minimum number of Image Builder resources to retain. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilter.property.unit">unit</a></code> | <code>str</code> | The value's time unit. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilter.property.type"></a>

```python
type: str
```

- *Type:* str

The filter type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#type ImagebuilderLifecyclePolicy#type}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilter.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The filter value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#value ImagebuilderLifecyclePolicy#value}

---

##### `retain_at_least`<sup>Optional</sup> <a name="retain_at_least" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilter.property.retainAtLeast"></a>

```python
retain_at_least: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The minimum number of Image Builder resources to retain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#retain_at_least ImagebuilderLifecyclePolicy#retain_at_least}

---

##### `unit`<sup>Optional</sup> <a name="unit" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilter.property.unit"></a>

```python
unit: str
```

- *Type:* str

The value's time unit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#unit ImagebuilderLifecyclePolicy#unit}

---

### ImagebuilderLifecyclePolicyResourceSelection <a name="ImagebuilderLifecyclePolicyResourceSelection" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelection.Initializer"></a>

```python
from cdktn_provider_awscc import imagebuilder_lifecycle_policy

imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelection(
  recipes: IResolvable | typing.List[ImagebuilderLifecyclePolicyResourceSelectionRecipes] = None,
  tag_map: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelection.property.recipes">recipes</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipes">ImagebuilderLifecyclePolicyResourceSelectionRecipes</a>]</code> | The recipes to select. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelection.property.tagMap">tag_map</a></code> | <code>typing.Mapping[str]</code> | The Image Builder resources to select by tag. |

---

##### `recipes`<sup>Optional</sup> <a name="recipes" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelection.property.recipes"></a>

```python
recipes: IResolvable | typing.List[ImagebuilderLifecyclePolicyResourceSelectionRecipes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipes">ImagebuilderLifecyclePolicyResourceSelectionRecipes</a>]

The recipes to select.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#recipes ImagebuilderLifecyclePolicy#recipes}

---

##### `tag_map`<sup>Optional</sup> <a name="tag_map" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelection.property.tagMap"></a>

```python
tag_map: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

The Image Builder resources to select by tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#tag_map ImagebuilderLifecyclePolicy#tag_map}

---

### ImagebuilderLifecyclePolicyResourceSelectionRecipes <a name="ImagebuilderLifecyclePolicyResourceSelectionRecipes" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipes.Initializer"></a>

```python
from cdktn_provider_awscc import imagebuilder_lifecycle_policy

imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipes(
  name: str = None,
  semantic_version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipes.property.name">name</a></code> | <code>str</code> | The recipe name. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipes.property.semanticVersion">semantic_version</a></code> | <code>str</code> | The recipe version. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipes.property.name"></a>

```python
name: str
```

- *Type:* str

The recipe name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#name ImagebuilderLifecyclePolicy#name}

---

##### `semantic_version`<sup>Optional</sup> <a name="semantic_version" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipes.property.semanticVersion"></a>

```python
semantic_version: str
```

- *Type:* str

The recipe version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#semantic_version ImagebuilderLifecyclePolicy#semantic_version}

---

## Classes <a name="Classes" id="Classes"></a>

### ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference <a name="ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import imagebuilder_lifecycle_policy

imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.resetAmis">reset_amis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.resetContainers">reset_containers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.resetSnapshots">reset_snapshots</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_amis` <a name="reset_amis" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.resetAmis"></a>

```python
def reset_amis() -> None
```

##### `reset_containers` <a name="reset_containers" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.resetContainers"></a>

```python
def reset_containers() -> None
```

##### `reset_snapshots` <a name="reset_snapshots" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.resetSnapshots"></a>

```python
def reset_snapshots() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.property.amisInput">amis_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.property.containersInput">containers_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.property.snapshotsInput">snapshots_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.property.amis">amis</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.property.containers">containers</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.property.snapshots">snapshots</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResources">ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResources</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `amis_input`<sup>Optional</sup> <a name="amis_input" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.property.amisInput"></a>

```python
amis_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `containers_input`<sup>Optional</sup> <a name="containers_input" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.property.containersInput"></a>

```python
containers_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `snapshots_input`<sup>Optional</sup> <a name="snapshots_input" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.property.snapshotsInput"></a>

```python
snapshots_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `amis`<sup>Required</sup> <a name="amis" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.property.amis"></a>

```python
amis: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `containers`<sup>Required</sup> <a name="containers" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.property.containers"></a>

```python
containers: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `snapshots`<sup>Required</sup> <a name="snapshots" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.property.snapshots"></a>

```python
snapshots: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResources
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResources">ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResources</a>

---


### ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference <a name="ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import imagebuilder_lifecycle_policy

imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.putIncludeResources">put_include_resources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.resetIncludeResources">reset_include_resources</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_include_resources` <a name="put_include_resources" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.putIncludeResources"></a>

```python
def put_include_resources(
  amis: bool | IResolvable = None,
  containers: bool | IResolvable = None,
  snapshots: bool | IResolvable = None
) -> None
```

###### `amis`<sup>Optional</sup> <a name="amis" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.putIncludeResources.parameter.amis"></a>

- *Type:* bool | cdktn.IResolvable

Use to configure lifecycle actions on AMIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#amis ImagebuilderLifecyclePolicy#amis}

---

###### `containers`<sup>Optional</sup> <a name="containers" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.putIncludeResources.parameter.containers"></a>

- *Type:* bool | cdktn.IResolvable

Use to configure lifecycle actions on containers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#containers ImagebuilderLifecyclePolicy#containers}

---

###### `snapshots`<sup>Optional</sup> <a name="snapshots" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.putIncludeResources.parameter.snapshots"></a>

- *Type:* bool | cdktn.IResolvable

Use to configure lifecycle actions on snapshots.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#snapshots ImagebuilderLifecyclePolicy#snapshots}

---

##### `reset_include_resources` <a name="reset_include_resources" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.resetIncludeResources"></a>

```python
def reset_include_resources() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.property.includeResources">include_resources</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference">ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.property.includeResourcesInput">include_resources_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResources">ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsAction">ImagebuilderLifecyclePolicyPolicyDetailsAction</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `include_resources`<sup>Required</sup> <a name="include_resources" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.property.includeResources"></a>

```python
include_resources: ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference">ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference</a>

---

##### `include_resources_input`<sup>Optional</sup> <a name="include_resources_input" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.property.includeResourcesInput"></a>

```python
include_resources_input: IResolvable | ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResources
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResources">ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResources</a>

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ImagebuilderLifecyclePolicyPolicyDetailsAction
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsAction">ImagebuilderLifecyclePolicyPolicyDetailsAction</a>

---


### ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference <a name="ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import imagebuilder_lifecycle_policy

imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.resetUnit">reset_unit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_unit` <a name="reset_unit" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.resetUnit"></a>

```python
def reset_unit() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.property.unitInput">unit_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.property.valueInput">value_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.property.unit">unit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.property.value">value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunched">ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunched</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `unit_input`<sup>Optional</sup> <a name="unit_input" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.property.unitInput"></a>

```python
unit_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.property.valueInput"></a>

```python
value_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.property.unit"></a>

```python
unit: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunched
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunched">ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunched</a>

---


### ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference <a name="ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import imagebuilder_lifecycle_policy

imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.putLastLaunched">put_last_launched</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.resetIsPublic">reset_is_public</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.resetLastLaunched">reset_last_launched</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.resetRegions">reset_regions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.resetSharedAccounts">reset_shared_accounts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.resetTagMap">reset_tag_map</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_last_launched` <a name="put_last_launched" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.putLastLaunched"></a>

```python
def put_last_launched(
  unit: str = None,
  value: typing.Union[int, float] = None
) -> None
```

###### `unit`<sup>Optional</sup> <a name="unit" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.putLastLaunched.parameter.unit"></a>

- *Type:* str

The value's time unit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#unit ImagebuilderLifecyclePolicy#unit}

---

###### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.putLastLaunched.parameter.value"></a>

- *Type:* typing.Union[int, float]

The last launched value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#value ImagebuilderLifecyclePolicy#value}

---

##### `reset_is_public` <a name="reset_is_public" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.resetIsPublic"></a>

```python
def reset_is_public() -> None
```

##### `reset_last_launched` <a name="reset_last_launched" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.resetLastLaunched"></a>

```python
def reset_last_launched() -> None
```

##### `reset_regions` <a name="reset_regions" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.resetRegions"></a>

```python
def reset_regions() -> None
```

##### `reset_shared_accounts` <a name="reset_shared_accounts" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.resetSharedAccounts"></a>

```python
def reset_shared_accounts() -> None
```

##### `reset_tag_map` <a name="reset_tag_map" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.resetTagMap"></a>

```python
def reset_tag_map() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.property.lastLaunched">last_launched</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference">ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.property.isPublicInput">is_public_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.property.lastLaunchedInput">last_launched_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunched">ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunched</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.property.regionsInput">regions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.property.sharedAccountsInput">shared_accounts_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.property.tagMapInput">tag_map_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.property.isPublic">is_public</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.property.regions">regions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.property.sharedAccounts">shared_accounts</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.property.tagMap">tag_map</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis">ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `last_launched`<sup>Required</sup> <a name="last_launched" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.property.lastLaunched"></a>

```python
last_launched: ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference">ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference</a>

---

##### `is_public_input`<sup>Optional</sup> <a name="is_public_input" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.property.isPublicInput"></a>

```python
is_public_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `last_launched_input`<sup>Optional</sup> <a name="last_launched_input" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.property.lastLaunchedInput"></a>

```python
last_launched_input: IResolvable | ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunched
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunched">ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunched</a>

---

##### `regions_input`<sup>Optional</sup> <a name="regions_input" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.property.regionsInput"></a>

```python
regions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `shared_accounts_input`<sup>Optional</sup> <a name="shared_accounts_input" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.property.sharedAccountsInput"></a>

```python
shared_accounts_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tag_map_input`<sup>Optional</sup> <a name="tag_map_input" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.property.tagMapInput"></a>

```python
tag_map_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `is_public`<sup>Required</sup> <a name="is_public" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.property.isPublic"></a>

```python
is_public: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `regions`<sup>Required</sup> <a name="regions" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.property.regions"></a>

```python
regions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `shared_accounts`<sup>Required</sup> <a name="shared_accounts" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.property.sharedAccounts"></a>

```python
shared_accounts: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tag_map`<sup>Required</sup> <a name="tag_map" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.property.tagMap"></a>

```python
tag_map: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis">ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis</a>

---


### ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference <a name="ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import imagebuilder_lifecycle_policy

imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.putAmis">put_amis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.resetAmis">reset_amis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.resetTagMap">reset_tag_map</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_amis` <a name="put_amis" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.putAmis"></a>

```python
def put_amis(
  is_public: bool | IResolvable = None,
  last_launched: ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunched = None,
  regions: typing.List[str] = None,
  shared_accounts: typing.List[str] = None,
  tag_map: typing.Mapping[str] = None
) -> None
```

###### `is_public`<sup>Optional</sup> <a name="is_public" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.putAmis.parameter.isPublic"></a>

- *Type:* bool | cdktn.IResolvable

Use to apply lifecycle policy actions on whether the AMI is public.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#is_public ImagebuilderLifecyclePolicy#is_public}

---

###### `last_launched`<sup>Optional</sup> <a name="last_launched" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.putAmis.parameter.lastLaunched"></a>

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunched">ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunched</a>

Use to apply lifecycle policy actions on AMIs launched before a certain time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#last_launched ImagebuilderLifecyclePolicy#last_launched}

---

###### `regions`<sup>Optional</sup> <a name="regions" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.putAmis.parameter.regions"></a>

- *Type:* typing.List[str]

Use to apply lifecycle policy actions on AMIs distributed to a set of regions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#regions ImagebuilderLifecyclePolicy#regions}

---

###### `shared_accounts`<sup>Optional</sup> <a name="shared_accounts" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.putAmis.parameter.sharedAccounts"></a>

- *Type:* typing.List[str]

Use to apply lifecycle policy actions on AMIs shared with a set of regions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#shared_accounts ImagebuilderLifecyclePolicy#shared_accounts}

---

###### `tag_map`<sup>Optional</sup> <a name="tag_map" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.putAmis.parameter.tagMap"></a>

- *Type:* typing.Mapping[str]

The AMIs to select by tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#tag_map ImagebuilderLifecyclePolicy#tag_map}

---

##### `reset_amis` <a name="reset_amis" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.resetAmis"></a>

```python
def reset_amis() -> None
```

##### `reset_tag_map` <a name="reset_tag_map" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.resetTagMap"></a>

```python
def reset_tag_map() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.property.amis">amis</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference">ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.property.amisInput">amis_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis">ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.property.tagMapInput">tag_map_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.property.tagMap">tag_map</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRules">ImagebuilderLifecyclePolicyPolicyDetailsExclusionRules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `amis`<sup>Required</sup> <a name="amis" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.property.amis"></a>

```python
amis: ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference">ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference</a>

---

##### `amis_input`<sup>Optional</sup> <a name="amis_input" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.property.amisInput"></a>

```python
amis_input: IResolvable | ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis">ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis</a>

---

##### `tag_map_input`<sup>Optional</sup> <a name="tag_map_input" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.property.tagMapInput"></a>

```python
tag_map_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tag_map`<sup>Required</sup> <a name="tag_map" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.property.tagMap"></a>

```python
tag_map: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ImagebuilderLifecyclePolicyPolicyDetailsExclusionRules
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRules">ImagebuilderLifecyclePolicyPolicyDetailsExclusionRules</a>

---


### ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference <a name="ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import imagebuilder_lifecycle_policy

imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.resetRetainAtLeast">reset_retain_at_least</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.resetUnit">reset_unit</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_retain_at_least` <a name="reset_retain_at_least" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.resetRetainAtLeast"></a>

```python
def reset_retain_at_least() -> None
```

##### `reset_unit` <a name="reset_unit" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.resetUnit"></a>

```python
def reset_unit() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.property.retainAtLeastInput">retain_at_least_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.property.unitInput">unit_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.property.valueInput">value_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.property.retainAtLeast">retain_at_least</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.property.unit">unit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.property.value">value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilter">ImagebuilderLifecyclePolicyPolicyDetailsFilter</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `retain_at_least_input`<sup>Optional</sup> <a name="retain_at_least_input" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.property.retainAtLeastInput"></a>

```python
retain_at_least_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `unit_input`<sup>Optional</sup> <a name="unit_input" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.property.unitInput"></a>

```python
unit_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.property.valueInput"></a>

```python
value_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `retain_at_least`<sup>Required</sup> <a name="retain_at_least" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.property.retainAtLeast"></a>

```python
retain_at_least: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.property.unit"></a>

```python
unit: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ImagebuilderLifecyclePolicyPolicyDetailsFilter
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilter">ImagebuilderLifecyclePolicyPolicyDetailsFilter</a>

---


### ImagebuilderLifecyclePolicyPolicyDetailsList <a name="ImagebuilderLifecyclePolicyPolicyDetailsList" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsList.Initializer"></a>

```python
from cdktn_provider_awscc import imagebuilder_lifecycle_policy

imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ImagebuilderLifecyclePolicyPolicyDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetails">ImagebuilderLifecyclePolicyPolicyDetails</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ImagebuilderLifecyclePolicyPolicyDetails]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetails">ImagebuilderLifecyclePolicyPolicyDetails</a>]

---


### ImagebuilderLifecyclePolicyPolicyDetailsOutputReference <a name="ImagebuilderLifecyclePolicyPolicyDetailsOutputReference" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import imagebuilder_lifecycle_policy

imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.putAction">put_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.putExclusionRules">put_exclusion_rules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.resetExclusionRules">reset_exclusion_rules</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_action` <a name="put_action" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.putAction"></a>

```python
def put_action(
  type: str,
  include_resources: ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResources = None
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.putAction.parameter.type"></a>

- *Type:* str

The action type of the policy detail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#type ImagebuilderLifecyclePolicy#type}

---

###### `include_resources`<sup>Optional</sup> <a name="include_resources" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.putAction.parameter.includeResources"></a>

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResources">ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResources</a>

The included resources of the policy detail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#include_resources ImagebuilderLifecyclePolicy#include_resources}

---

##### `put_exclusion_rules` <a name="put_exclusion_rules" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.putExclusionRules"></a>

```python
def put_exclusion_rules(
  amis: ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis = None,
  tag_map: typing.Mapping[str] = None
) -> None
```

###### `amis`<sup>Optional</sup> <a name="amis" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.putExclusionRules.parameter.amis"></a>

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis">ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis</a>

The AMI exclusion rules for the policy detail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#amis ImagebuilderLifecyclePolicy#amis}

---

###### `tag_map`<sup>Optional</sup> <a name="tag_map" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.putExclusionRules.parameter.tagMap"></a>

- *Type:* typing.Mapping[str]

The Image Builder tags to filter on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#tag_map ImagebuilderLifecyclePolicy#tag_map}

---

##### `put_filter` <a name="put_filter" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.putFilter"></a>

```python
def put_filter(
  type: str,
  value: typing.Union[int, float],
  retain_at_least: typing.Union[int, float] = None,
  unit: str = None
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.putFilter.parameter.type"></a>

- *Type:* str

The filter type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#type ImagebuilderLifecyclePolicy#type}

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.putFilter.parameter.value"></a>

- *Type:* typing.Union[int, float]

The filter value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#value ImagebuilderLifecyclePolicy#value}

---

###### `retain_at_least`<sup>Optional</sup> <a name="retain_at_least" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.putFilter.parameter.retainAtLeast"></a>

- *Type:* typing.Union[int, float]

The minimum number of Image Builder resources to retain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#retain_at_least ImagebuilderLifecyclePolicy#retain_at_least}

---

###### `unit`<sup>Optional</sup> <a name="unit" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.putFilter.parameter.unit"></a>

- *Type:* str

The value's time unit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#unit ImagebuilderLifecyclePolicy#unit}

---

##### `reset_exclusion_rules` <a name="reset_exclusion_rules" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.resetExclusionRules"></a>

```python
def reset_exclusion_rules() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.property.action">action</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference">ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.property.exclusionRules">exclusion_rules</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference">ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference">ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.property.actionInput">action_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsAction">ImagebuilderLifecyclePolicyPolicyDetailsAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.property.exclusionRulesInput">exclusion_rules_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRules">ImagebuilderLifecyclePolicyPolicyDetailsExclusionRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.property.filterInput">filter_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilter">ImagebuilderLifecyclePolicyPolicyDetailsFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetails">ImagebuilderLifecyclePolicyPolicyDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.property.action"></a>

```python
action: ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference">ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference</a>

---

##### `exclusion_rules`<sup>Required</sup> <a name="exclusion_rules" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.property.exclusionRules"></a>

```python
exclusion_rules: ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference">ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.property.filter"></a>

```python
filter: ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference">ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference</a>

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.property.actionInput"></a>

```python
action_input: IResolvable | ImagebuilderLifecyclePolicyPolicyDetailsAction
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsAction">ImagebuilderLifecyclePolicyPolicyDetailsAction</a>

---

##### `exclusion_rules_input`<sup>Optional</sup> <a name="exclusion_rules_input" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.property.exclusionRulesInput"></a>

```python
exclusion_rules_input: IResolvable | ImagebuilderLifecyclePolicyPolicyDetailsExclusionRules
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRules">ImagebuilderLifecyclePolicyPolicyDetailsExclusionRules</a>

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.property.filterInput"></a>

```python
filter_input: IResolvable | ImagebuilderLifecyclePolicyPolicyDetailsFilter
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilter">ImagebuilderLifecyclePolicyPolicyDetailsFilter</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ImagebuilderLifecyclePolicyPolicyDetails
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetails">ImagebuilderLifecyclePolicyPolicyDetails</a>

---


### ImagebuilderLifecyclePolicyResourceSelectionOutputReference <a name="ImagebuilderLifecyclePolicyResourceSelectionOutputReference" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import imagebuilder_lifecycle_policy

imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.putRecipes">put_recipes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.resetRecipes">reset_recipes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.resetTagMap">reset_tag_map</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_recipes` <a name="put_recipes" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.putRecipes"></a>

```python
def put_recipes(
  value: IResolvable | typing.List[ImagebuilderLifecyclePolicyResourceSelectionRecipes]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.putRecipes.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipes">ImagebuilderLifecyclePolicyResourceSelectionRecipes</a>]

---

##### `reset_recipes` <a name="reset_recipes" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.resetRecipes"></a>

```python
def reset_recipes() -> None
```

##### `reset_tag_map` <a name="reset_tag_map" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.resetTagMap"></a>

```python
def reset_tag_map() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.property.recipes">recipes</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesList">ImagebuilderLifecyclePolicyResourceSelectionRecipesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.property.recipesInput">recipes_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipes">ImagebuilderLifecyclePolicyResourceSelectionRecipes</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.property.tagMapInput">tag_map_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.property.tagMap">tag_map</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelection">ImagebuilderLifecyclePolicyResourceSelection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `recipes`<sup>Required</sup> <a name="recipes" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.property.recipes"></a>

```python
recipes: ImagebuilderLifecyclePolicyResourceSelectionRecipesList
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesList">ImagebuilderLifecyclePolicyResourceSelectionRecipesList</a>

---

##### `recipes_input`<sup>Optional</sup> <a name="recipes_input" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.property.recipesInput"></a>

```python
recipes_input: IResolvable | typing.List[ImagebuilderLifecyclePolicyResourceSelectionRecipes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipes">ImagebuilderLifecyclePolicyResourceSelectionRecipes</a>]

---

##### `tag_map_input`<sup>Optional</sup> <a name="tag_map_input" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.property.tagMapInput"></a>

```python
tag_map_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tag_map`<sup>Required</sup> <a name="tag_map" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.property.tagMap"></a>

```python
tag_map: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ImagebuilderLifecyclePolicyResourceSelection
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelection">ImagebuilderLifecyclePolicyResourceSelection</a>

---


### ImagebuilderLifecyclePolicyResourceSelectionRecipesList <a name="ImagebuilderLifecyclePolicyResourceSelectionRecipesList" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesList.Initializer"></a>

```python
from cdktn_provider_awscc import imagebuilder_lifecycle_policy

imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipes">ImagebuilderLifecyclePolicyResourceSelectionRecipes</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ImagebuilderLifecyclePolicyResourceSelectionRecipes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipes">ImagebuilderLifecyclePolicyResourceSelectionRecipes</a>]

---


### ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference <a name="ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import imagebuilder_lifecycle_policy

imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.resetSemanticVersion">reset_semantic_version</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_semantic_version` <a name="reset_semantic_version" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.resetSemanticVersion"></a>

```python
def reset_semantic_version() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.property.semanticVersionInput">semantic_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.property.semanticVersion">semantic_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipes">ImagebuilderLifecyclePolicyResourceSelectionRecipes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `semantic_version_input`<sup>Optional</sup> <a name="semantic_version_input" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.property.semanticVersionInput"></a>

```python
semantic_version_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `semantic_version`<sup>Required</sup> <a name="semantic_version" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.property.semanticVersion"></a>

```python
semantic_version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ImagebuilderLifecyclePolicyResourceSelectionRecipes
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipes">ImagebuilderLifecyclePolicyResourceSelectionRecipes</a>

---



