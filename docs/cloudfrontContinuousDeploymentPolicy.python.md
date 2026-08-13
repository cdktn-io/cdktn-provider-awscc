# `cloudfrontContinuousDeploymentPolicy` Submodule <a name="`cloudfrontContinuousDeploymentPolicy` Submodule" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudfrontContinuousDeploymentPolicy <a name="CloudfrontContinuousDeploymentPolicy" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudfront_continuous_deployment_policy awscc_cloudfront_continuous_deployment_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.Initializer"></a>

```python
from cdktn_provider_awscc import cloudfront_continuous_deployment_policy

cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  continuous_deployment_policy_config: CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfig
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.Initializer.parameter.continuousDeploymentPolicyConfig">continuous_deployment_policy_config</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfig">CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfig</a></code> | Contains the configuration for a continuous deployment policy. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `continuous_deployment_policy_config`<sup>Required</sup> <a name="continuous_deployment_policy_config" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.Initializer.parameter.continuousDeploymentPolicyConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfig">CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfig</a>

Contains the configuration for a continuous deployment policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudfront_continuous_deployment_policy#continuous_deployment_policy_config CloudfrontContinuousDeploymentPolicy#continuous_deployment_policy_config}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.putContinuousDeploymentPolicyConfig">put_continuous_deployment_policy_config</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_continuous_deployment_policy_config` <a name="put_continuous_deployment_policy_config" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.putContinuousDeploymentPolicyConfig"></a>

```python
def put_continuous_deployment_policy_config(
  enabled: bool | IResolvable,
  staging_distribution_dns_names: typing.List[str],
  single_header_policy_config: CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfig = None,
  single_weight_policy_config: CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfig = None,
  traffic_config: CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfig = None,
  type: str = None
) -> None
```

###### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.putContinuousDeploymentPolicyConfig.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

A Boolean that indicates whether this continuous deployment policy is enabled (in effect).

When this value is `true`, this policy is enabled and in effect. When this value is `false`, this policy is not enabled and has no effect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudfront_continuous_deployment_policy#enabled CloudfrontContinuousDeploymentPolicy#enabled}

---

###### `staging_distribution_dns_names`<sup>Required</sup> <a name="staging_distribution_dns_names" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.putContinuousDeploymentPolicyConfig.parameter.stagingDistributionDnsNames"></a>

- *Type:* typing.List[str]

The CloudFront domain name of the staging distribution. For example: ``d111111abcdef8.cloudfront.net``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudfront_continuous_deployment_policy#staging_distribution_dns_names CloudfrontContinuousDeploymentPolicy#staging_distribution_dns_names}

---

###### `single_header_policy_config`<sup>Optional</sup> <a name="single_header_policy_config" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.putContinuousDeploymentPolicyConfig.parameter.singleHeaderPolicyConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfig">CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfig</a>

This configuration determines which HTTP requests are sent to the staging distribution.

If the HTTP request contains a header and value that matches what you specify here, the request is sent to the staging distribution. Otherwise the request is sent to the primary distribution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudfront_continuous_deployment_policy#single_header_policy_config CloudfrontContinuousDeploymentPolicy#single_header_policy_config}

---

###### `single_weight_policy_config`<sup>Optional</sup> <a name="single_weight_policy_config" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.putContinuousDeploymentPolicyConfig.parameter.singleWeightPolicyConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfig">CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfig</a>

This configuration determines the percentage of HTTP requests that are sent to the staging distribution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudfront_continuous_deployment_policy#single_weight_policy_config CloudfrontContinuousDeploymentPolicy#single_weight_policy_config}

---

###### `traffic_config`<sup>Optional</sup> <a name="traffic_config" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.putContinuousDeploymentPolicyConfig.parameter.trafficConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfig">CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfig</a>

Contains the parameters for routing production traffic from your primary to staging distributions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudfront_continuous_deployment_policy#traffic_config CloudfrontContinuousDeploymentPolicy#traffic_config}

---

###### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.putContinuousDeploymentPolicyConfig.parameter.type"></a>

- *Type:* str

The type of traffic configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudfront_continuous_deployment_policy#type CloudfrontContinuousDeploymentPolicy#type}

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a CloudfrontContinuousDeploymentPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.isConstruct"></a>

```python
from cdktn_provider_awscc import cloudfront_continuous_deployment_policy

cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.isTerraformElement"></a>

```python
from cdktn_provider_awscc import cloudfront_continuous_deployment_policy

cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.isTerraformResource"></a>

```python
from cdktn_provider_awscc import cloudfront_continuous_deployment_policy

cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import cloudfront_continuous_deployment_policy

cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a CloudfrontContinuousDeploymentPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CloudfrontContinuousDeploymentPolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CloudfrontContinuousDeploymentPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudfront_continuous_deployment_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CloudfrontContinuousDeploymentPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.continuousDeploymentPolicyConfig">continuous_deployment_policy_config</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference">CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.continuousDeploymentPolicyId">continuous_deployment_policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.lastModifiedTime">last_modified_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.continuousDeploymentPolicyConfigInput">continuous_deployment_policy_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfig">CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfig</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `continuous_deployment_policy_config`<sup>Required</sup> <a name="continuous_deployment_policy_config" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.continuousDeploymentPolicyConfig"></a>

```python
continuous_deployment_policy_config: CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference">CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference</a>

---

##### `continuous_deployment_policy_id`<sup>Required</sup> <a name="continuous_deployment_policy_id" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.continuousDeploymentPolicyId"></a>

```python
continuous_deployment_policy_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `last_modified_time`<sup>Required</sup> <a name="last_modified_time" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.lastModifiedTime"></a>

```python
last_modified_time: str
```

- *Type:* str

---

##### `continuous_deployment_policy_config_input`<sup>Optional</sup> <a name="continuous_deployment_policy_config_input" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.continuousDeploymentPolicyConfigInput"></a>

```python
continuous_deployment_policy_config_input: IResolvable | CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfig">CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfig</a>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CloudfrontContinuousDeploymentPolicyConfig <a name="CloudfrontContinuousDeploymentPolicyConfig" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyConfig.Initializer"></a>

```python
from cdktn_provider_awscc import cloudfront_continuous_deployment_policy

cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  continuous_deployment_policy_config: CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfig
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyConfig.property.continuousDeploymentPolicyConfig">continuous_deployment_policy_config</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfig">CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfig</a></code> | Contains the configuration for a continuous deployment policy. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `continuous_deployment_policy_config`<sup>Required</sup> <a name="continuous_deployment_policy_config" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyConfig.property.continuousDeploymentPolicyConfig"></a>

```python
continuous_deployment_policy_config: CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfig">CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfig</a>

Contains the configuration for a continuous deployment policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudfront_continuous_deployment_policy#continuous_deployment_policy_config CloudfrontContinuousDeploymentPolicy#continuous_deployment_policy_config}

---

### CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfig <a name="CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfig" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfig.Initializer"></a>

```python
from cdktn_provider_awscc import cloudfront_continuous_deployment_policy

cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfig(
  enabled: bool | IResolvable,
  staging_distribution_dns_names: typing.List[str],
  single_header_policy_config: CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfig = None,
  single_weight_policy_config: CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfig = None,
  traffic_config: CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfig = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfig.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | A Boolean that indicates whether this continuous deployment policy is enabled (in effect). |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfig.property.stagingDistributionDnsNames">staging_distribution_dns_names</a></code> | <code>typing.List[str]</code> | The CloudFront domain name of the staging distribution. For example: ``d111111abcdef8.cloudfront.net``. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfig.property.singleHeaderPolicyConfig">single_header_policy_config</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfig">CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfig</a></code> | This configuration determines which HTTP requests are sent to the staging distribution. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfig.property.singleWeightPolicyConfig">single_weight_policy_config</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfig">CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfig</a></code> | This configuration determines the percentage of HTTP requests that are sent to the staging distribution. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfig.property.trafficConfig">traffic_config</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfig">CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfig</a></code> | Contains the parameters for routing production traffic from your primary to staging distributions. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfig.property.type">type</a></code> | <code>str</code> | The type of traffic configuration. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfig.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

A Boolean that indicates whether this continuous deployment policy is enabled (in effect).

When this value is `true`, this policy is enabled and in effect. When this value is `false`, this policy is not enabled and has no effect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudfront_continuous_deployment_policy#enabled CloudfrontContinuousDeploymentPolicy#enabled}

---

##### `staging_distribution_dns_names`<sup>Required</sup> <a name="staging_distribution_dns_names" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfig.property.stagingDistributionDnsNames"></a>

```python
staging_distribution_dns_names: typing.List[str]
```

- *Type:* typing.List[str]

The CloudFront domain name of the staging distribution. For example: ``d111111abcdef8.cloudfront.net``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudfront_continuous_deployment_policy#staging_distribution_dns_names CloudfrontContinuousDeploymentPolicy#staging_distribution_dns_names}

---

##### `single_header_policy_config`<sup>Optional</sup> <a name="single_header_policy_config" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfig.property.singleHeaderPolicyConfig"></a>

```python
single_header_policy_config: CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfig">CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfig</a>

This configuration determines which HTTP requests are sent to the staging distribution.

If the HTTP request contains a header and value that matches what you specify here, the request is sent to the staging distribution. Otherwise the request is sent to the primary distribution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudfront_continuous_deployment_policy#single_header_policy_config CloudfrontContinuousDeploymentPolicy#single_header_policy_config}

---

##### `single_weight_policy_config`<sup>Optional</sup> <a name="single_weight_policy_config" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfig.property.singleWeightPolicyConfig"></a>

```python
single_weight_policy_config: CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfig">CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfig</a>

This configuration determines the percentage of HTTP requests that are sent to the staging distribution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudfront_continuous_deployment_policy#single_weight_policy_config CloudfrontContinuousDeploymentPolicy#single_weight_policy_config}

---

##### `traffic_config`<sup>Optional</sup> <a name="traffic_config" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfig.property.trafficConfig"></a>

```python
traffic_config: CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfig">CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfig</a>

Contains the parameters for routing production traffic from your primary to staging distributions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudfront_continuous_deployment_policy#traffic_config CloudfrontContinuousDeploymentPolicy#traffic_config}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfig.property.type"></a>

```python
type: str
```

- *Type:* str

The type of traffic configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudfront_continuous_deployment_policy#type CloudfrontContinuousDeploymentPolicy#type}

---

### CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfig <a name="CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfig" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfig.Initializer"></a>

```python
from cdktn_provider_awscc import cloudfront_continuous_deployment_policy

cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfig(
  header: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfig.property.header">header</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudfront_continuous_deployment_policy#header CloudfrontContinuousDeploymentPolicy#header}. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfig.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudfront_continuous_deployment_policy#value CloudfrontContinuousDeploymentPolicy#value}. |

---

##### `header`<sup>Optional</sup> <a name="header" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfig.property.header"></a>

```python
header: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudfront_continuous_deployment_policy#header CloudfrontContinuousDeploymentPolicy#header}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfig.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudfront_continuous_deployment_policy#value CloudfrontContinuousDeploymentPolicy#value}.

---

### CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfig <a name="CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfig" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfig.Initializer"></a>

```python
from cdktn_provider_awscc import cloudfront_continuous_deployment_policy

cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfig(
  session_stickiness_config: CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfig = None,
  weight: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfig.property.sessionStickinessConfig">session_stickiness_config</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfig">CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfig</a></code> | Session stickiness provides the ability to define multiple requests from a single viewer as a single session. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfig.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudfront_continuous_deployment_policy#weight CloudfrontContinuousDeploymentPolicy#weight}. |

---

##### `session_stickiness_config`<sup>Optional</sup> <a name="session_stickiness_config" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfig.property.sessionStickinessConfig"></a>

```python
session_stickiness_config: CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfig">CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfig</a>

Session stickiness provides the ability to define multiple requests from a single viewer as a single session.

This prevents the potentially inconsistent experience of sending some of a given user's requests to your staging distribution, while others are sent to your primary distribution. Define the session duration using TTL values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudfront_continuous_deployment_policy#session_stickiness_config CloudfrontContinuousDeploymentPolicy#session_stickiness_config}

---

##### `weight`<sup>Optional</sup> <a name="weight" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfig.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudfront_continuous_deployment_policy#weight CloudfrontContinuousDeploymentPolicy#weight}.

---

### CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfig <a name="CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfig" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfig.Initializer"></a>

```python
from cdktn_provider_awscc import cloudfront_continuous_deployment_policy

cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfig(
  idle_ttl: typing.Union[int, float] = None,
  maximum_ttl: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfig.property.idleTtl">idle_ttl</a></code> | <code>typing.Union[int, float]</code> | The amount of time after which you want sessions to cease if no requests are received. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfig.property.maximumTtl">maximum_ttl</a></code> | <code>typing.Union[int, float]</code> | The maximum amount of time to consider requests from the viewer as being part of the same session. |

---

##### `idle_ttl`<sup>Optional</sup> <a name="idle_ttl" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfig.property.idleTtl"></a>

```python
idle_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The amount of time after which you want sessions to cease if no requests are received.

Allowed values are 300?3600 seconds (5?60 minutes).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudfront_continuous_deployment_policy#idle_ttl CloudfrontContinuousDeploymentPolicy#idle_ttl}

---

##### `maximum_ttl`<sup>Optional</sup> <a name="maximum_ttl" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfig.property.maximumTtl"></a>

```python
maximum_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum amount of time to consider requests from the viewer as being part of the same session.

Allowed values are 300?3600 seconds (5?60 minutes).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudfront_continuous_deployment_policy#maximum_ttl CloudfrontContinuousDeploymentPolicy#maximum_ttl}

---

### CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfig <a name="CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfig" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfig.Initializer"></a>

```python
from cdktn_provider_awscc import cloudfront_continuous_deployment_policy

cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfig(
  single_header_config: CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfig = None,
  single_weight_config: CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfig = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfig.property.singleHeaderConfig">single_header_config</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfig">CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfig</a></code> | Determines which HTTP requests are sent to the staging distribution. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfig.property.singleWeightConfig">single_weight_config</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfig">CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfig</a></code> | Contains the percentage of traffic to send to the staging distribution. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfig.property.type">type</a></code> | <code>str</code> | The type of traffic configuration. |

---

##### `single_header_config`<sup>Optional</sup> <a name="single_header_config" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfig.property.singleHeaderConfig"></a>

```python
single_header_config: CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfig">CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfig</a>

Determines which HTTP requests are sent to the staging distribution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudfront_continuous_deployment_policy#single_header_config CloudfrontContinuousDeploymentPolicy#single_header_config}

---

##### `single_weight_config`<sup>Optional</sup> <a name="single_weight_config" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfig.property.singleWeightConfig"></a>

```python
single_weight_config: CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfig">CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfig</a>

Contains the percentage of traffic to send to the staging distribution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudfront_continuous_deployment_policy#single_weight_config CloudfrontContinuousDeploymentPolicy#single_weight_config}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfig.property.type"></a>

```python
type: str
```

- *Type:* str

The type of traffic configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudfront_continuous_deployment_policy#type CloudfrontContinuousDeploymentPolicy#type}

---

### CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfig <a name="CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfig" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfig.Initializer"></a>

```python
from cdktn_provider_awscc import cloudfront_continuous_deployment_policy

cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfig(
  header: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfig.property.header">header</a></code> | <code>str</code> | The request header name that you want CloudFront to send to your staging distribution. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfig.property.value">value</a></code> | <code>str</code> | The request header value. |

---

##### `header`<sup>Optional</sup> <a name="header" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfig.property.header"></a>

```python
header: str
```

- *Type:* str

The request header name that you want CloudFront to send to your staging distribution.

The header must contain the prefix `aws-cf-cd-`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudfront_continuous_deployment_policy#header CloudfrontContinuousDeploymentPolicy#header}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfig.property.value"></a>

```python
value: str
```

- *Type:* str

The request header value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudfront_continuous_deployment_policy#value CloudfrontContinuousDeploymentPolicy#value}

---

### CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfig <a name="CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfig" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfig.Initializer"></a>

```python
from cdktn_provider_awscc import cloudfront_continuous_deployment_policy

cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfig(
  session_stickiness_config: CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfig = None,
  weight: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfig.property.sessionStickinessConfig">session_stickiness_config</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfig">CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfig</a></code> | Session stickiness provides the ability to define multiple requests from a single viewer as a single session. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfig.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | The percentage of traffic to send to a staging distribution, expressed as a decimal number between 0 and 0.15. For example, a value of 0.10 means 10% of traffic is sent to the staging distribution. |

---

##### `session_stickiness_config`<sup>Optional</sup> <a name="session_stickiness_config" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfig.property.sessionStickinessConfig"></a>

```python
session_stickiness_config: CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfig">CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfig</a>

Session stickiness provides the ability to define multiple requests from a single viewer as a single session.

This prevents the potentially inconsistent experience of sending some of a given user's requests to your staging distribution, while others are sent to your primary distribution. Define the session duration using TTL values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudfront_continuous_deployment_policy#session_stickiness_config CloudfrontContinuousDeploymentPolicy#session_stickiness_config}

---

##### `weight`<sup>Optional</sup> <a name="weight" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfig.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The percentage of traffic to send to a staging distribution, expressed as a decimal number between 0 and 0.15. For example, a value of 0.10 means 10% of traffic is sent to the staging distribution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudfront_continuous_deployment_policy#weight CloudfrontContinuousDeploymentPolicy#weight}

---

### CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfig <a name="CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfig" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfig.Initializer"></a>

```python
from cdktn_provider_awscc import cloudfront_continuous_deployment_policy

cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfig(
  idle_ttl: typing.Union[int, float] = None,
  maximum_ttl: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfig.property.idleTtl">idle_ttl</a></code> | <code>typing.Union[int, float]</code> | The amount of time after which you want sessions to cease if no requests are received. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfig.property.maximumTtl">maximum_ttl</a></code> | <code>typing.Union[int, float]</code> | The maximum amount of time to consider requests from the viewer as being part of the same session. |

---

##### `idle_ttl`<sup>Optional</sup> <a name="idle_ttl" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfig.property.idleTtl"></a>

```python
idle_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The amount of time after which you want sessions to cease if no requests are received.

Allowed values are 300?3600 seconds (5?60 minutes).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudfront_continuous_deployment_policy#idle_ttl CloudfrontContinuousDeploymentPolicy#idle_ttl}

---

##### `maximum_ttl`<sup>Optional</sup> <a name="maximum_ttl" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfig.property.maximumTtl"></a>

```python
maximum_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum amount of time to consider requests from the viewer as being part of the same session.

Allowed values are 300?3600 seconds (5?60 minutes).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudfront_continuous_deployment_policy#maximum_ttl CloudfrontContinuousDeploymentPolicy#maximum_ttl}

---

## Classes <a name="Classes" id="Classes"></a>

### CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference <a name="CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cloudfront_continuous_deployment_policy

cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.putSingleHeaderPolicyConfig">put_single_header_policy_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.putSingleWeightPolicyConfig">put_single_weight_policy_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.putTrafficConfig">put_traffic_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.resetSingleHeaderPolicyConfig">reset_single_header_policy_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.resetSingleWeightPolicyConfig">reset_single_weight_policy_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.resetTrafficConfig">reset_traffic_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_single_header_policy_config` <a name="put_single_header_policy_config" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.putSingleHeaderPolicyConfig"></a>

```python
def put_single_header_policy_config(
  header: str = None,
  value: str = None
) -> None
```

###### `header`<sup>Optional</sup> <a name="header" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.putSingleHeaderPolicyConfig.parameter.header"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudfront_continuous_deployment_policy#header CloudfrontContinuousDeploymentPolicy#header}.

---

###### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.putSingleHeaderPolicyConfig.parameter.value"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudfront_continuous_deployment_policy#value CloudfrontContinuousDeploymentPolicy#value}.

---

##### `put_single_weight_policy_config` <a name="put_single_weight_policy_config" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.putSingleWeightPolicyConfig"></a>

```python
def put_single_weight_policy_config(
  session_stickiness_config: CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfig = None,
  weight: typing.Union[int, float] = None
) -> None
```

###### `session_stickiness_config`<sup>Optional</sup> <a name="session_stickiness_config" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.putSingleWeightPolicyConfig.parameter.sessionStickinessConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfig">CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfig</a>

Session stickiness provides the ability to define multiple requests from a single viewer as a single session.

This prevents the potentially inconsistent experience of sending some of a given user's requests to your staging distribution, while others are sent to your primary distribution. Define the session duration using TTL values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudfront_continuous_deployment_policy#session_stickiness_config CloudfrontContinuousDeploymentPolicy#session_stickiness_config}

---

###### `weight`<sup>Optional</sup> <a name="weight" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.putSingleWeightPolicyConfig.parameter.weight"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudfront_continuous_deployment_policy#weight CloudfrontContinuousDeploymentPolicy#weight}.

---

##### `put_traffic_config` <a name="put_traffic_config" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.putTrafficConfig"></a>

```python
def put_traffic_config(
  single_header_config: CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfig = None,
  single_weight_config: CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfig = None,
  type: str = None
) -> None
```

###### `single_header_config`<sup>Optional</sup> <a name="single_header_config" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.putTrafficConfig.parameter.singleHeaderConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfig">CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfig</a>

Determines which HTTP requests are sent to the staging distribution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudfront_continuous_deployment_policy#single_header_config CloudfrontContinuousDeploymentPolicy#single_header_config}

---

###### `single_weight_config`<sup>Optional</sup> <a name="single_weight_config" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.putTrafficConfig.parameter.singleWeightConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfig">CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfig</a>

Contains the percentage of traffic to send to the staging distribution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudfront_continuous_deployment_policy#single_weight_config CloudfrontContinuousDeploymentPolicy#single_weight_config}

---

###### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.putTrafficConfig.parameter.type"></a>

- *Type:* str

The type of traffic configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudfront_continuous_deployment_policy#type CloudfrontContinuousDeploymentPolicy#type}

---

##### `reset_single_header_policy_config` <a name="reset_single_header_policy_config" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.resetSingleHeaderPolicyConfig"></a>

```python
def reset_single_header_policy_config() -> None
```

##### `reset_single_weight_policy_config` <a name="reset_single_weight_policy_config" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.resetSingleWeightPolicyConfig"></a>

```python
def reset_single_weight_policy_config() -> None
```

##### `reset_traffic_config` <a name="reset_traffic_config" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.resetTrafficConfig"></a>

```python
def reset_traffic_config() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.property.singleHeaderPolicyConfig">single_header_policy_config</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfigOutputReference">CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.property.singleWeightPolicyConfig">single_weight_policy_config</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigOutputReference">CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.property.trafficConfig">traffic_config</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigOutputReference">CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.property.singleHeaderPolicyConfigInput">single_header_policy_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfig">CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.property.singleWeightPolicyConfigInput">single_weight_policy_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfig">CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.property.stagingDistributionDnsNamesInput">staging_distribution_dns_names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.property.trafficConfigInput">traffic_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfig">CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.property.stagingDistributionDnsNames">staging_distribution_dns_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfig">CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `single_header_policy_config`<sup>Required</sup> <a name="single_header_policy_config" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.property.singleHeaderPolicyConfig"></a>

```python
single_header_policy_config: CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfigOutputReference">CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfigOutputReference</a>

---

##### `single_weight_policy_config`<sup>Required</sup> <a name="single_weight_policy_config" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.property.singleWeightPolicyConfig"></a>

```python
single_weight_policy_config: CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigOutputReference">CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigOutputReference</a>

---

##### `traffic_config`<sup>Required</sup> <a name="traffic_config" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.property.trafficConfig"></a>

```python
traffic_config: CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigOutputReference">CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigOutputReference</a>

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `single_header_policy_config_input`<sup>Optional</sup> <a name="single_header_policy_config_input" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.property.singleHeaderPolicyConfigInput"></a>

```python
single_header_policy_config_input: IResolvable | CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfig">CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfig</a>

---

##### `single_weight_policy_config_input`<sup>Optional</sup> <a name="single_weight_policy_config_input" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.property.singleWeightPolicyConfigInput"></a>

```python
single_weight_policy_config_input: IResolvable | CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfig">CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfig</a>

---

##### `staging_distribution_dns_names_input`<sup>Optional</sup> <a name="staging_distribution_dns_names_input" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.property.stagingDistributionDnsNamesInput"></a>

```python
staging_distribution_dns_names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `traffic_config_input`<sup>Optional</sup> <a name="traffic_config_input" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.property.trafficConfigInput"></a>

```python
traffic_config_input: IResolvable | CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfig">CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfig</a>

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `staging_distribution_dns_names`<sup>Required</sup> <a name="staging_distribution_dns_names" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.property.stagingDistributionDnsNames"></a>

```python
staging_distribution_dns_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfig">CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfig</a>

---


### CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfigOutputReference <a name="CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfigOutputReference" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cloudfront_continuous_deployment_policy

cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfigOutputReference.resetHeader">reset_header</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfigOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_header` <a name="reset_header" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfigOutputReference.resetHeader"></a>

```python
def reset_header() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfigOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfigOutputReference.property.headerInput">header_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfigOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfigOutputReference.property.header">header</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfigOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfig">CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `header_input`<sup>Optional</sup> <a name="header_input" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfigOutputReference.property.headerInput"></a>

```python
header_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfigOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `header`<sup>Required</sup> <a name="header" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfigOutputReference.property.header"></a>

```python
header: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfigOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfig">CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfig</a>

---


### CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigOutputReference <a name="CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigOutputReference" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cloudfront_continuous_deployment_policy

cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigOutputReference.putSessionStickinessConfig">put_session_stickiness_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigOutputReference.resetSessionStickinessConfig">reset_session_stickiness_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigOutputReference.resetWeight">reset_weight</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_session_stickiness_config` <a name="put_session_stickiness_config" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigOutputReference.putSessionStickinessConfig"></a>

```python
def put_session_stickiness_config(
  idle_ttl: typing.Union[int, float] = None,
  maximum_ttl: typing.Union[int, float] = None
) -> None
```

###### `idle_ttl`<sup>Optional</sup> <a name="idle_ttl" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigOutputReference.putSessionStickinessConfig.parameter.idleTtl"></a>

- *Type:* typing.Union[int, float]

The amount of time after which you want sessions to cease if no requests are received.

Allowed values are 300?3600 seconds (5?60 minutes).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudfront_continuous_deployment_policy#idle_ttl CloudfrontContinuousDeploymentPolicy#idle_ttl}

---

###### `maximum_ttl`<sup>Optional</sup> <a name="maximum_ttl" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigOutputReference.putSessionStickinessConfig.parameter.maximumTtl"></a>

- *Type:* typing.Union[int, float]

The maximum amount of time to consider requests from the viewer as being part of the same session.

Allowed values are 300?3600 seconds (5?60 minutes).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudfront_continuous_deployment_policy#maximum_ttl CloudfrontContinuousDeploymentPolicy#maximum_ttl}

---

##### `reset_session_stickiness_config` <a name="reset_session_stickiness_config" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigOutputReference.resetSessionStickinessConfig"></a>

```python
def reset_session_stickiness_config() -> None
```

##### `reset_weight` <a name="reset_weight" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigOutputReference.resetWeight"></a>

```python
def reset_weight() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigOutputReference.property.sessionStickinessConfig">session_stickiness_config</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfigOutputReference">CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigOutputReference.property.sessionStickinessConfigInput">session_stickiness_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfig">CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigOutputReference.property.weightInput">weight_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigOutputReference.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfig">CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `session_stickiness_config`<sup>Required</sup> <a name="session_stickiness_config" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigOutputReference.property.sessionStickinessConfig"></a>

```python
session_stickiness_config: CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfigOutputReference">CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfigOutputReference</a>

---

##### `session_stickiness_config_input`<sup>Optional</sup> <a name="session_stickiness_config_input" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigOutputReference.property.sessionStickinessConfigInput"></a>

```python
session_stickiness_config_input: IResolvable | CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfig">CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfig</a>

---

##### `weight_input`<sup>Optional</sup> <a name="weight_input" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigOutputReference.property.weightInput"></a>

```python
weight_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigOutputReference.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfig">CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfig</a>

---


### CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfigOutputReference <a name="CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfigOutputReference" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cloudfront_continuous_deployment_policy

cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfigOutputReference.resetIdleTtl">reset_idle_ttl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfigOutputReference.resetMaximumTtl">reset_maximum_ttl</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_idle_ttl` <a name="reset_idle_ttl" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfigOutputReference.resetIdleTtl"></a>

```python
def reset_idle_ttl() -> None
```

##### `reset_maximum_ttl` <a name="reset_maximum_ttl" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfigOutputReference.resetMaximumTtl"></a>

```python
def reset_maximum_ttl() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfigOutputReference.property.idleTtlInput">idle_ttl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfigOutputReference.property.maximumTtlInput">maximum_ttl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfigOutputReference.property.idleTtl">idle_ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfigOutputReference.property.maximumTtl">maximum_ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfig">CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `idle_ttl_input`<sup>Optional</sup> <a name="idle_ttl_input" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfigOutputReference.property.idleTtlInput"></a>

```python
idle_ttl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `maximum_ttl_input`<sup>Optional</sup> <a name="maximum_ttl_input" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfigOutputReference.property.maximumTtlInput"></a>

```python
maximum_ttl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `idle_ttl`<sup>Required</sup> <a name="idle_ttl" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfigOutputReference.property.idleTtl"></a>

```python
idle_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `maximum_ttl`<sup>Required</sup> <a name="maximum_ttl" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfigOutputReference.property.maximumTtl"></a>

```python
maximum_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfig">CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfig</a>

---


### CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigOutputReference <a name="CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigOutputReference" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cloudfront_continuous_deployment_policy

cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigOutputReference.putSingleHeaderConfig">put_single_header_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigOutputReference.putSingleWeightConfig">put_single_weight_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigOutputReference.resetSingleHeaderConfig">reset_single_header_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigOutputReference.resetSingleWeightConfig">reset_single_weight_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_single_header_config` <a name="put_single_header_config" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigOutputReference.putSingleHeaderConfig"></a>

```python
def put_single_header_config(
  header: str = None,
  value: str = None
) -> None
```

###### `header`<sup>Optional</sup> <a name="header" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigOutputReference.putSingleHeaderConfig.parameter.header"></a>

- *Type:* str

The request header name that you want CloudFront to send to your staging distribution.

The header must contain the prefix `aws-cf-cd-`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudfront_continuous_deployment_policy#header CloudfrontContinuousDeploymentPolicy#header}

---

###### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigOutputReference.putSingleHeaderConfig.parameter.value"></a>

- *Type:* str

The request header value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudfront_continuous_deployment_policy#value CloudfrontContinuousDeploymentPolicy#value}

---

##### `put_single_weight_config` <a name="put_single_weight_config" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigOutputReference.putSingleWeightConfig"></a>

```python
def put_single_weight_config(
  session_stickiness_config: CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfig = None,
  weight: typing.Union[int, float] = None
) -> None
```

###### `session_stickiness_config`<sup>Optional</sup> <a name="session_stickiness_config" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigOutputReference.putSingleWeightConfig.parameter.sessionStickinessConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfig">CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfig</a>

Session stickiness provides the ability to define multiple requests from a single viewer as a single session.

This prevents the potentially inconsistent experience of sending some of a given user's requests to your staging distribution, while others are sent to your primary distribution. Define the session duration using TTL values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudfront_continuous_deployment_policy#session_stickiness_config CloudfrontContinuousDeploymentPolicy#session_stickiness_config}

---

###### `weight`<sup>Optional</sup> <a name="weight" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigOutputReference.putSingleWeightConfig.parameter.weight"></a>

- *Type:* typing.Union[int, float]

The percentage of traffic to send to a staging distribution, expressed as a decimal number between 0 and 0.15. For example, a value of 0.10 means 10% of traffic is sent to the staging distribution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudfront_continuous_deployment_policy#weight CloudfrontContinuousDeploymentPolicy#weight}

---

##### `reset_single_header_config` <a name="reset_single_header_config" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigOutputReference.resetSingleHeaderConfig"></a>

```python
def reset_single_header_config() -> None
```

##### `reset_single_weight_config` <a name="reset_single_weight_config" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigOutputReference.resetSingleWeightConfig"></a>

```python
def reset_single_weight_config() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigOutputReference.property.singleHeaderConfig">single_header_config</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfigOutputReference">CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigOutputReference.property.singleWeightConfig">single_weight_config</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigOutputReference">CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigOutputReference.property.singleHeaderConfigInput">single_header_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfig">CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigOutputReference.property.singleWeightConfigInput">single_weight_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfig">CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfig">CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `single_header_config`<sup>Required</sup> <a name="single_header_config" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigOutputReference.property.singleHeaderConfig"></a>

```python
single_header_config: CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfigOutputReference">CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfigOutputReference</a>

---

##### `single_weight_config`<sup>Required</sup> <a name="single_weight_config" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigOutputReference.property.singleWeightConfig"></a>

```python
single_weight_config: CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigOutputReference">CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigOutputReference</a>

---

##### `single_header_config_input`<sup>Optional</sup> <a name="single_header_config_input" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigOutputReference.property.singleHeaderConfigInput"></a>

```python
single_header_config_input: IResolvable | CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfig">CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfig</a>

---

##### `single_weight_config_input`<sup>Optional</sup> <a name="single_weight_config_input" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigOutputReference.property.singleWeightConfigInput"></a>

```python
single_weight_config_input: IResolvable | CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfig">CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfig</a>

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfig">CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfig</a>

---


### CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfigOutputReference <a name="CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfigOutputReference" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cloudfront_continuous_deployment_policy

cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfigOutputReference.resetHeader">reset_header</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfigOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_header` <a name="reset_header" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfigOutputReference.resetHeader"></a>

```python
def reset_header() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfigOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfigOutputReference.property.headerInput">header_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfigOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfigOutputReference.property.header">header</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfigOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfig">CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `header_input`<sup>Optional</sup> <a name="header_input" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfigOutputReference.property.headerInput"></a>

```python
header_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfigOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `header`<sup>Required</sup> <a name="header" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfigOutputReference.property.header"></a>

```python
header: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfigOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfig">CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfig</a>

---


### CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigOutputReference <a name="CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigOutputReference" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cloudfront_continuous_deployment_policy

cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigOutputReference.putSessionStickinessConfig">put_session_stickiness_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigOutputReference.resetSessionStickinessConfig">reset_session_stickiness_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigOutputReference.resetWeight">reset_weight</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_session_stickiness_config` <a name="put_session_stickiness_config" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigOutputReference.putSessionStickinessConfig"></a>

```python
def put_session_stickiness_config(
  idle_ttl: typing.Union[int, float] = None,
  maximum_ttl: typing.Union[int, float] = None
) -> None
```

###### `idle_ttl`<sup>Optional</sup> <a name="idle_ttl" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigOutputReference.putSessionStickinessConfig.parameter.idleTtl"></a>

- *Type:* typing.Union[int, float]

The amount of time after which you want sessions to cease if no requests are received.

Allowed values are 300?3600 seconds (5?60 minutes).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudfront_continuous_deployment_policy#idle_ttl CloudfrontContinuousDeploymentPolicy#idle_ttl}

---

###### `maximum_ttl`<sup>Optional</sup> <a name="maximum_ttl" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigOutputReference.putSessionStickinessConfig.parameter.maximumTtl"></a>

- *Type:* typing.Union[int, float]

The maximum amount of time to consider requests from the viewer as being part of the same session.

Allowed values are 300?3600 seconds (5?60 minutes).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudfront_continuous_deployment_policy#maximum_ttl CloudfrontContinuousDeploymentPolicy#maximum_ttl}

---

##### `reset_session_stickiness_config` <a name="reset_session_stickiness_config" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigOutputReference.resetSessionStickinessConfig"></a>

```python
def reset_session_stickiness_config() -> None
```

##### `reset_weight` <a name="reset_weight" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigOutputReference.resetWeight"></a>

```python
def reset_weight() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigOutputReference.property.sessionStickinessConfig">session_stickiness_config</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference">CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigOutputReference.property.sessionStickinessConfigInput">session_stickiness_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfig">CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigOutputReference.property.weightInput">weight_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigOutputReference.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfig">CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `session_stickiness_config`<sup>Required</sup> <a name="session_stickiness_config" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigOutputReference.property.sessionStickinessConfig"></a>

```python
session_stickiness_config: CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference">CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference</a>

---

##### `session_stickiness_config_input`<sup>Optional</sup> <a name="session_stickiness_config_input" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigOutputReference.property.sessionStickinessConfigInput"></a>

```python
session_stickiness_config_input: IResolvable | CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfig">CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfig</a>

---

##### `weight_input`<sup>Optional</sup> <a name="weight_input" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigOutputReference.property.weightInput"></a>

```python
weight_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigOutputReference.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfig">CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfig</a>

---


### CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference <a name="CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cloudfront_continuous_deployment_policy

cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.resetIdleTtl">reset_idle_ttl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.resetMaximumTtl">reset_maximum_ttl</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_idle_ttl` <a name="reset_idle_ttl" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.resetIdleTtl"></a>

```python
def reset_idle_ttl() -> None
```

##### `reset_maximum_ttl` <a name="reset_maximum_ttl" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.resetMaximumTtl"></a>

```python
def reset_maximum_ttl() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.property.idleTtlInput">idle_ttl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.property.maximumTtlInput">maximum_ttl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.property.idleTtl">idle_ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.property.maximumTtl">maximum_ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfig">CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `idle_ttl_input`<sup>Optional</sup> <a name="idle_ttl_input" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.property.idleTtlInput"></a>

```python
idle_ttl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `maximum_ttl_input`<sup>Optional</sup> <a name="maximum_ttl_input" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.property.maximumTtlInput"></a>

```python
maximum_ttl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `idle_ttl`<sup>Required</sup> <a name="idle_ttl" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.property.idleTtl"></a>

```python
idle_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `maximum_ttl`<sup>Required</sup> <a name="maximum_ttl" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.property.maximumTtl"></a>

```python
maximum_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfig">CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfig</a>

---



