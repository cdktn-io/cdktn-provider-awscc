# `greengrassv2Deployment` Submodule <a name="`greengrassv2Deployment` Submodule" id="@cdktn/provider-awscc.greengrassv2Deployment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Greengrassv2Deployment <a name="Greengrassv2Deployment" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/greengrassv2_deployment awscc_greengrassv2_deployment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.Initializer"></a>

```python
from cdktn_provider_awscc import greengrassv2_deployment

greengrassv2Deployment.Greengrassv2Deployment(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  target_arn: str,
  components: IResolvable | typing.Mapping[Greengrassv2DeploymentComponents] = None,
  deployment_name: str = None,
  deployment_policies: Greengrassv2DeploymentDeploymentPolicies = None,
  iot_job_configuration: Greengrassv2DeploymentIotJobConfiguration = None,
  parent_target_arn: str = None,
  tags: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.Initializer.parameter.targetArn">target_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/greengrassv2_deployment#target_arn Greengrassv2Deployment#target_arn}. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.Initializer.parameter.components">components</a></code> | <code>cdktn.IResolvable \| typing.Mapping[<a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponents">Greengrassv2DeploymentComponents</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/greengrassv2_deployment#components Greengrassv2Deployment#components}. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.Initializer.parameter.deploymentName">deployment_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/greengrassv2_deployment#deployment_name Greengrassv2Deployment#deployment_name}. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.Initializer.parameter.deploymentPolicies">deployment_policies</a></code> | <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPolicies">Greengrassv2DeploymentDeploymentPolicies</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/greengrassv2_deployment#deployment_policies Greengrassv2Deployment#deployment_policies}. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.Initializer.parameter.iotJobConfiguration">iot_job_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfiguration">Greengrassv2DeploymentIotJobConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/greengrassv2_deployment#iot_job_configuration Greengrassv2Deployment#iot_job_configuration}. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.Initializer.parameter.parentTargetArn">parent_target_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/greengrassv2_deployment#parent_target_arn Greengrassv2Deployment#parent_target_arn}. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/greengrassv2_deployment#tags Greengrassv2Deployment#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `target_arn`<sup>Required</sup> <a name="target_arn" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.Initializer.parameter.targetArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/greengrassv2_deployment#target_arn Greengrassv2Deployment#target_arn}.

---

##### `components`<sup>Optional</sup> <a name="components" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.Initializer.parameter.components"></a>

- *Type:* cdktn.IResolvable | typing.Mapping[<a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponents">Greengrassv2DeploymentComponents</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/greengrassv2_deployment#components Greengrassv2Deployment#components}.

---

##### `deployment_name`<sup>Optional</sup> <a name="deployment_name" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.Initializer.parameter.deploymentName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/greengrassv2_deployment#deployment_name Greengrassv2Deployment#deployment_name}.

---

##### `deployment_policies`<sup>Optional</sup> <a name="deployment_policies" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.Initializer.parameter.deploymentPolicies"></a>

- *Type:* <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPolicies">Greengrassv2DeploymentDeploymentPolicies</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/greengrassv2_deployment#deployment_policies Greengrassv2Deployment#deployment_policies}.

---

##### `iot_job_configuration`<sup>Optional</sup> <a name="iot_job_configuration" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.Initializer.parameter.iotJobConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfiguration">Greengrassv2DeploymentIotJobConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/greengrassv2_deployment#iot_job_configuration Greengrassv2Deployment#iot_job_configuration}.

---

##### `parent_target_arn`<sup>Optional</sup> <a name="parent_target_arn" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.Initializer.parameter.parentTargetArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/greengrassv2_deployment#parent_target_arn Greengrassv2Deployment#parent_target_arn}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/greengrassv2_deployment#tags Greengrassv2Deployment#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.putComponents">put_components</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.putDeploymentPolicies">put_deployment_policies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.putIotJobConfiguration">put_iot_job_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.resetComponents">reset_components</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.resetDeploymentName">reset_deployment_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.resetDeploymentPolicies">reset_deployment_policies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.resetIotJobConfiguration">reset_iot_job_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.resetParentTargetArn">reset_parent_target_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_components` <a name="put_components" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.putComponents"></a>

```python
def put_components(
  value: IResolvable | typing.Mapping[Greengrassv2DeploymentComponents]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.putComponents.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.Mapping[<a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponents">Greengrassv2DeploymentComponents</a>]

---

##### `put_deployment_policies` <a name="put_deployment_policies" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.putDeploymentPolicies"></a>

```python
def put_deployment_policies(
  component_update_policy: Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicy = None,
  configuration_validation_policy: Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicy = None,
  failure_handling_policy: str = None
) -> None
```

###### `component_update_policy`<sup>Optional</sup> <a name="component_update_policy" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.putDeploymentPolicies.parameter.componentUpdatePolicy"></a>

- *Type:* <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicy">Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicy</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/greengrassv2_deployment#component_update_policy Greengrassv2Deployment#component_update_policy}.

---

###### `configuration_validation_policy`<sup>Optional</sup> <a name="configuration_validation_policy" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.putDeploymentPolicies.parameter.configurationValidationPolicy"></a>

- *Type:* <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicy">Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicy</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/greengrassv2_deployment#configuration_validation_policy Greengrassv2Deployment#configuration_validation_policy}.

---

###### `failure_handling_policy`<sup>Optional</sup> <a name="failure_handling_policy" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.putDeploymentPolicies.parameter.failureHandlingPolicy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/greengrassv2_deployment#failure_handling_policy Greengrassv2Deployment#failure_handling_policy}.

---

##### `put_iot_job_configuration` <a name="put_iot_job_configuration" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.putIotJobConfiguration"></a>

```python
def put_iot_job_configuration(
  abort_config: Greengrassv2DeploymentIotJobConfigurationAbortConfig = None,
  job_executions_rollout_config: Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfig = None,
  timeout_config: Greengrassv2DeploymentIotJobConfigurationTimeoutConfig = None
) -> None
```

###### `abort_config`<sup>Optional</sup> <a name="abort_config" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.putIotJobConfiguration.parameter.abortConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfig">Greengrassv2DeploymentIotJobConfigurationAbortConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/greengrassv2_deployment#abort_config Greengrassv2Deployment#abort_config}.

---

###### `job_executions_rollout_config`<sup>Optional</sup> <a name="job_executions_rollout_config" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.putIotJobConfiguration.parameter.jobExecutionsRolloutConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfig">Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/greengrassv2_deployment#job_executions_rollout_config Greengrassv2Deployment#job_executions_rollout_config}.

---

###### `timeout_config`<sup>Optional</sup> <a name="timeout_config" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.putIotJobConfiguration.parameter.timeoutConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfig">Greengrassv2DeploymentIotJobConfigurationTimeoutConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/greengrassv2_deployment#timeout_config Greengrassv2Deployment#timeout_config}.

---

##### `reset_components` <a name="reset_components" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.resetComponents"></a>

```python
def reset_components() -> None
```

##### `reset_deployment_name` <a name="reset_deployment_name" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.resetDeploymentName"></a>

```python
def reset_deployment_name() -> None
```

##### `reset_deployment_policies` <a name="reset_deployment_policies" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.resetDeploymentPolicies"></a>

```python
def reset_deployment_policies() -> None
```

##### `reset_iot_job_configuration` <a name="reset_iot_job_configuration" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.resetIotJobConfiguration"></a>

```python
def reset_iot_job_configuration() -> None
```

##### `reset_parent_target_arn` <a name="reset_parent_target_arn" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.resetParentTargetArn"></a>

```python
def reset_parent_target_arn() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a Greengrassv2Deployment resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.isConstruct"></a>

```python
from cdktn_provider_awscc import greengrassv2_deployment

greengrassv2Deployment.Greengrassv2Deployment.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.isTerraformElement"></a>

```python
from cdktn_provider_awscc import greengrassv2_deployment

greengrassv2Deployment.Greengrassv2Deployment.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.isTerraformResource"></a>

```python
from cdktn_provider_awscc import greengrassv2_deployment

greengrassv2Deployment.Greengrassv2Deployment.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import greengrassv2_deployment

greengrassv2Deployment.Greengrassv2Deployment.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a Greengrassv2Deployment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Greengrassv2Deployment to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Greengrassv2Deployment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/greengrassv2_deployment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Greengrassv2Deployment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.components">components</a></code> | <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsMap">Greengrassv2DeploymentComponentsMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.deploymentId">deployment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.deploymentPolicies">deployment_policies</a></code> | <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference">Greengrassv2DeploymentDeploymentPoliciesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.iotJobConfiguration">iot_job_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference">Greengrassv2DeploymentIotJobConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.componentsInput">components_input</a></code> | <code>cdktn.IResolvable \| typing.Mapping[<a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponents">Greengrassv2DeploymentComponents</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.deploymentNameInput">deployment_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.deploymentPoliciesInput">deployment_policies_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPolicies">Greengrassv2DeploymentDeploymentPolicies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.iotJobConfigurationInput">iot_job_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfiguration">Greengrassv2DeploymentIotJobConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.parentTargetArnInput">parent_target_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.targetArnInput">target_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.deploymentName">deployment_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.parentTargetArn">parent_target_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.targetArn">target_arn</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `components`<sup>Required</sup> <a name="components" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.components"></a>

```python
components: Greengrassv2DeploymentComponentsMap
```

- *Type:* <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsMap">Greengrassv2DeploymentComponentsMap</a>

---

##### `deployment_id`<sup>Required</sup> <a name="deployment_id" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.deploymentId"></a>

```python
deployment_id: str
```

- *Type:* str

---

##### `deployment_policies`<sup>Required</sup> <a name="deployment_policies" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.deploymentPolicies"></a>

```python
deployment_policies: Greengrassv2DeploymentDeploymentPoliciesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference">Greengrassv2DeploymentDeploymentPoliciesOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `iot_job_configuration`<sup>Required</sup> <a name="iot_job_configuration" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.iotJobConfiguration"></a>

```python
iot_job_configuration: Greengrassv2DeploymentIotJobConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference">Greengrassv2DeploymentIotJobConfigurationOutputReference</a>

---

##### `components_input`<sup>Optional</sup> <a name="components_input" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.componentsInput"></a>

```python
components_input: IResolvable | typing.Mapping[Greengrassv2DeploymentComponents]
```

- *Type:* cdktn.IResolvable | typing.Mapping[<a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponents">Greengrassv2DeploymentComponents</a>]

---

##### `deployment_name_input`<sup>Optional</sup> <a name="deployment_name_input" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.deploymentNameInput"></a>

```python
deployment_name_input: str
```

- *Type:* str

---

##### `deployment_policies_input`<sup>Optional</sup> <a name="deployment_policies_input" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.deploymentPoliciesInput"></a>

```python
deployment_policies_input: IResolvable | Greengrassv2DeploymentDeploymentPolicies
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPolicies">Greengrassv2DeploymentDeploymentPolicies</a>

---

##### `iot_job_configuration_input`<sup>Optional</sup> <a name="iot_job_configuration_input" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.iotJobConfigurationInput"></a>

```python
iot_job_configuration_input: IResolvable | Greengrassv2DeploymentIotJobConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfiguration">Greengrassv2DeploymentIotJobConfiguration</a>

---

##### `parent_target_arn_input`<sup>Optional</sup> <a name="parent_target_arn_input" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.parentTargetArnInput"></a>

```python
parent_target_arn_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `target_arn_input`<sup>Optional</sup> <a name="target_arn_input" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.targetArnInput"></a>

```python
target_arn_input: str
```

- *Type:* str

---

##### `deployment_name`<sup>Required</sup> <a name="deployment_name" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.deploymentName"></a>

```python
deployment_name: str
```

- *Type:* str

---

##### `parent_target_arn`<sup>Required</sup> <a name="parent_target_arn" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.parentTargetArn"></a>

```python
parent_target_arn: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `target_arn`<sup>Required</sup> <a name="target_arn" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.targetArn"></a>

```python
target_arn: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### Greengrassv2DeploymentComponents <a name="Greengrassv2DeploymentComponents" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponents"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponents.Initializer"></a>

```python
from cdktn_provider_awscc import greengrassv2_deployment

greengrassv2Deployment.Greengrassv2DeploymentComponents(
  component_version: str = None,
  configuration_update: Greengrassv2DeploymentComponentsConfigurationUpdate = None,
  run_with: Greengrassv2DeploymentComponentsRunWith = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponents.property.componentVersion">component_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/greengrassv2_deployment#component_version Greengrassv2Deployment#component_version}. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponents.property.configurationUpdate">configuration_update</a></code> | <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdate">Greengrassv2DeploymentComponentsConfigurationUpdate</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/greengrassv2_deployment#configuration_update Greengrassv2Deployment#configuration_update}. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponents.property.runWith">run_with</a></code> | <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWith">Greengrassv2DeploymentComponentsRunWith</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/greengrassv2_deployment#run_with Greengrassv2Deployment#run_with}. |

---

##### `component_version`<sup>Optional</sup> <a name="component_version" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponents.property.componentVersion"></a>

```python
component_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/greengrassv2_deployment#component_version Greengrassv2Deployment#component_version}.

---

##### `configuration_update`<sup>Optional</sup> <a name="configuration_update" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponents.property.configurationUpdate"></a>

```python
configuration_update: Greengrassv2DeploymentComponentsConfigurationUpdate
```

- *Type:* <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdate">Greengrassv2DeploymentComponentsConfigurationUpdate</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/greengrassv2_deployment#configuration_update Greengrassv2Deployment#configuration_update}.

---

##### `run_with`<sup>Optional</sup> <a name="run_with" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponents.property.runWith"></a>

```python
run_with: Greengrassv2DeploymentComponentsRunWith
```

- *Type:* <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWith">Greengrassv2DeploymentComponentsRunWith</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/greengrassv2_deployment#run_with Greengrassv2Deployment#run_with}.

---

### Greengrassv2DeploymentComponentsConfigurationUpdate <a name="Greengrassv2DeploymentComponentsConfigurationUpdate" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdate.Initializer"></a>

```python
from cdktn_provider_awscc import greengrassv2_deployment

greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdate(
  merge: str = None,
  reset: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdate.property.merge">merge</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/greengrassv2_deployment#merge Greengrassv2Deployment#merge}. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdate.property.reset">reset</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/greengrassv2_deployment#reset Greengrassv2Deployment#reset}. |

---

##### `merge`<sup>Optional</sup> <a name="merge" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdate.property.merge"></a>

```python
merge: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/greengrassv2_deployment#merge Greengrassv2Deployment#merge}.

---

##### `reset`<sup>Optional</sup> <a name="reset" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdate.property.reset"></a>

```python
reset: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/greengrassv2_deployment#reset Greengrassv2Deployment#reset}.

---

### Greengrassv2DeploymentComponentsRunWith <a name="Greengrassv2DeploymentComponentsRunWith" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWith"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWith.Initializer"></a>

```python
from cdktn_provider_awscc import greengrassv2_deployment

greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWith(
  posix_user: str = None,
  system_resource_limits: Greengrassv2DeploymentComponentsRunWithSystemResourceLimits = None,
  windows_user: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWith.property.posixUser">posix_user</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/greengrassv2_deployment#posix_user Greengrassv2Deployment#posix_user}. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWith.property.systemResourceLimits">system_resource_limits</a></code> | <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimits">Greengrassv2DeploymentComponentsRunWithSystemResourceLimits</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/greengrassv2_deployment#system_resource_limits Greengrassv2Deployment#system_resource_limits}. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWith.property.windowsUser">windows_user</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/greengrassv2_deployment#windows_user Greengrassv2Deployment#windows_user}. |

---

##### `posix_user`<sup>Optional</sup> <a name="posix_user" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWith.property.posixUser"></a>

```python
posix_user: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/greengrassv2_deployment#posix_user Greengrassv2Deployment#posix_user}.

---

##### `system_resource_limits`<sup>Optional</sup> <a name="system_resource_limits" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWith.property.systemResourceLimits"></a>

```python
system_resource_limits: Greengrassv2DeploymentComponentsRunWithSystemResourceLimits
```

- *Type:* <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimits">Greengrassv2DeploymentComponentsRunWithSystemResourceLimits</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/greengrassv2_deployment#system_resource_limits Greengrassv2Deployment#system_resource_limits}.

---

##### `windows_user`<sup>Optional</sup> <a name="windows_user" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWith.property.windowsUser"></a>

```python
windows_user: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/greengrassv2_deployment#windows_user Greengrassv2Deployment#windows_user}.

---

### Greengrassv2DeploymentComponentsRunWithSystemResourceLimits <a name="Greengrassv2DeploymentComponentsRunWithSystemResourceLimits" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimits"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimits.Initializer"></a>

```python
from cdktn_provider_awscc import greengrassv2_deployment

greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimits(
  cpus: typing.Union[int, float] = None,
  memory: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimits.property.cpus">cpus</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/greengrassv2_deployment#cpus Greengrassv2Deployment#cpus}. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimits.property.memory">memory</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/greengrassv2_deployment#memory Greengrassv2Deployment#memory}. |

---

##### `cpus`<sup>Optional</sup> <a name="cpus" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimits.property.cpus"></a>

```python
cpus: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/greengrassv2_deployment#cpus Greengrassv2Deployment#cpus}.

---

##### `memory`<sup>Optional</sup> <a name="memory" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimits.property.memory"></a>

```python
memory: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/greengrassv2_deployment#memory Greengrassv2Deployment#memory}.

---

### Greengrassv2DeploymentConfig <a name="Greengrassv2DeploymentConfig" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentConfig.Initializer"></a>

```python
from cdktn_provider_awscc import greengrassv2_deployment

greengrassv2Deployment.Greengrassv2DeploymentConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  target_arn: str,
  components: IResolvable | typing.Mapping[Greengrassv2DeploymentComponents] = None,
  deployment_name: str = None,
  deployment_policies: Greengrassv2DeploymentDeploymentPolicies = None,
  iot_job_configuration: Greengrassv2DeploymentIotJobConfiguration = None,
  parent_target_arn: str = None,
  tags: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentConfig.property.targetArn">target_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/greengrassv2_deployment#target_arn Greengrassv2Deployment#target_arn}. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentConfig.property.components">components</a></code> | <code>cdktn.IResolvable \| typing.Mapping[<a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponents">Greengrassv2DeploymentComponents</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/greengrassv2_deployment#components Greengrassv2Deployment#components}. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentConfig.property.deploymentName">deployment_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/greengrassv2_deployment#deployment_name Greengrassv2Deployment#deployment_name}. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentConfig.property.deploymentPolicies">deployment_policies</a></code> | <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPolicies">Greengrassv2DeploymentDeploymentPolicies</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/greengrassv2_deployment#deployment_policies Greengrassv2Deployment#deployment_policies}. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentConfig.property.iotJobConfiguration">iot_job_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfiguration">Greengrassv2DeploymentIotJobConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/greengrassv2_deployment#iot_job_configuration Greengrassv2Deployment#iot_job_configuration}. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentConfig.property.parentTargetArn">parent_target_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/greengrassv2_deployment#parent_target_arn Greengrassv2Deployment#parent_target_arn}. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/greengrassv2_deployment#tags Greengrassv2Deployment#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `target_arn`<sup>Required</sup> <a name="target_arn" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentConfig.property.targetArn"></a>

```python
target_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/greengrassv2_deployment#target_arn Greengrassv2Deployment#target_arn}.

---

##### `components`<sup>Optional</sup> <a name="components" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentConfig.property.components"></a>

```python
components: IResolvable | typing.Mapping[Greengrassv2DeploymentComponents]
```

- *Type:* cdktn.IResolvable | typing.Mapping[<a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponents">Greengrassv2DeploymentComponents</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/greengrassv2_deployment#components Greengrassv2Deployment#components}.

---

##### `deployment_name`<sup>Optional</sup> <a name="deployment_name" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentConfig.property.deploymentName"></a>

```python
deployment_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/greengrassv2_deployment#deployment_name Greengrassv2Deployment#deployment_name}.

---

##### `deployment_policies`<sup>Optional</sup> <a name="deployment_policies" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentConfig.property.deploymentPolicies"></a>

```python
deployment_policies: Greengrassv2DeploymentDeploymentPolicies
```

- *Type:* <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPolicies">Greengrassv2DeploymentDeploymentPolicies</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/greengrassv2_deployment#deployment_policies Greengrassv2Deployment#deployment_policies}.

---

##### `iot_job_configuration`<sup>Optional</sup> <a name="iot_job_configuration" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentConfig.property.iotJobConfiguration"></a>

```python
iot_job_configuration: Greengrassv2DeploymentIotJobConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfiguration">Greengrassv2DeploymentIotJobConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/greengrassv2_deployment#iot_job_configuration Greengrassv2Deployment#iot_job_configuration}.

---

##### `parent_target_arn`<sup>Optional</sup> <a name="parent_target_arn" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentConfig.property.parentTargetArn"></a>

```python
parent_target_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/greengrassv2_deployment#parent_target_arn Greengrassv2Deployment#parent_target_arn}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/greengrassv2_deployment#tags Greengrassv2Deployment#tags}.

---

### Greengrassv2DeploymentDeploymentPolicies <a name="Greengrassv2DeploymentDeploymentPolicies" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPolicies.Initializer"></a>

```python
from cdktn_provider_awscc import greengrassv2_deployment

greengrassv2Deployment.Greengrassv2DeploymentDeploymentPolicies(
  component_update_policy: Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicy = None,
  configuration_validation_policy: Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicy = None,
  failure_handling_policy: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPolicies.property.componentUpdatePolicy">component_update_policy</a></code> | <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicy">Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicy</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/greengrassv2_deployment#component_update_policy Greengrassv2Deployment#component_update_policy}. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPolicies.property.configurationValidationPolicy">configuration_validation_policy</a></code> | <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicy">Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicy</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/greengrassv2_deployment#configuration_validation_policy Greengrassv2Deployment#configuration_validation_policy}. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPolicies.property.failureHandlingPolicy">failure_handling_policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/greengrassv2_deployment#failure_handling_policy Greengrassv2Deployment#failure_handling_policy}. |

---

##### `component_update_policy`<sup>Optional</sup> <a name="component_update_policy" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPolicies.property.componentUpdatePolicy"></a>

```python
component_update_policy: Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicy
```

- *Type:* <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicy">Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicy</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/greengrassv2_deployment#component_update_policy Greengrassv2Deployment#component_update_policy}.

---

##### `configuration_validation_policy`<sup>Optional</sup> <a name="configuration_validation_policy" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPolicies.property.configurationValidationPolicy"></a>

```python
configuration_validation_policy: Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicy
```

- *Type:* <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicy">Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicy</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/greengrassv2_deployment#configuration_validation_policy Greengrassv2Deployment#configuration_validation_policy}.

---

##### `failure_handling_policy`<sup>Optional</sup> <a name="failure_handling_policy" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPolicies.property.failureHandlingPolicy"></a>

```python
failure_handling_policy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/greengrassv2_deployment#failure_handling_policy Greengrassv2Deployment#failure_handling_policy}.

---

### Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicy <a name="Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicy" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicy.Initializer"></a>

```python
from cdktn_provider_awscc import greengrassv2_deployment

greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicy(
  action: str = None,
  timeout_in_seconds: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicy.property.action">action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/greengrassv2_deployment#action Greengrassv2Deployment#action}. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicy.property.timeoutInSeconds">timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/greengrassv2_deployment#timeout_in_seconds Greengrassv2Deployment#timeout_in_seconds}. |

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicy.property.action"></a>

```python
action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/greengrassv2_deployment#action Greengrassv2Deployment#action}.

---

##### `timeout_in_seconds`<sup>Optional</sup> <a name="timeout_in_seconds" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicy.property.timeoutInSeconds"></a>

```python
timeout_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/greengrassv2_deployment#timeout_in_seconds Greengrassv2Deployment#timeout_in_seconds}.

---

### Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicy <a name="Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicy" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicy.Initializer"></a>

```python
from cdktn_provider_awscc import greengrassv2_deployment

greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicy(
  timeout_in_seconds: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicy.property.timeoutInSeconds">timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/greengrassv2_deployment#timeout_in_seconds Greengrassv2Deployment#timeout_in_seconds}. |

---

##### `timeout_in_seconds`<sup>Optional</sup> <a name="timeout_in_seconds" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicy.property.timeoutInSeconds"></a>

```python
timeout_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/greengrassv2_deployment#timeout_in_seconds Greengrassv2Deployment#timeout_in_seconds}.

---

### Greengrassv2DeploymentIotJobConfiguration <a name="Greengrassv2DeploymentIotJobConfiguration" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import greengrassv2_deployment

greengrassv2Deployment.Greengrassv2DeploymentIotJobConfiguration(
  abort_config: Greengrassv2DeploymentIotJobConfigurationAbortConfig = None,
  job_executions_rollout_config: Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfig = None,
  timeout_config: Greengrassv2DeploymentIotJobConfigurationTimeoutConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfiguration.property.abortConfig">abort_config</a></code> | <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfig">Greengrassv2DeploymentIotJobConfigurationAbortConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/greengrassv2_deployment#abort_config Greengrassv2Deployment#abort_config}. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfiguration.property.jobExecutionsRolloutConfig">job_executions_rollout_config</a></code> | <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfig">Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/greengrassv2_deployment#job_executions_rollout_config Greengrassv2Deployment#job_executions_rollout_config}. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfiguration.property.timeoutConfig">timeout_config</a></code> | <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfig">Greengrassv2DeploymentIotJobConfigurationTimeoutConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/greengrassv2_deployment#timeout_config Greengrassv2Deployment#timeout_config}. |

---

##### `abort_config`<sup>Optional</sup> <a name="abort_config" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfiguration.property.abortConfig"></a>

```python
abort_config: Greengrassv2DeploymentIotJobConfigurationAbortConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfig">Greengrassv2DeploymentIotJobConfigurationAbortConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/greengrassv2_deployment#abort_config Greengrassv2Deployment#abort_config}.

---

##### `job_executions_rollout_config`<sup>Optional</sup> <a name="job_executions_rollout_config" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfiguration.property.jobExecutionsRolloutConfig"></a>

```python
job_executions_rollout_config: Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfig">Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/greengrassv2_deployment#job_executions_rollout_config Greengrassv2Deployment#job_executions_rollout_config}.

---

##### `timeout_config`<sup>Optional</sup> <a name="timeout_config" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfiguration.property.timeoutConfig"></a>

```python
timeout_config: Greengrassv2DeploymentIotJobConfigurationTimeoutConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfig">Greengrassv2DeploymentIotJobConfigurationTimeoutConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/greengrassv2_deployment#timeout_config Greengrassv2Deployment#timeout_config}.

---

### Greengrassv2DeploymentIotJobConfigurationAbortConfig <a name="Greengrassv2DeploymentIotJobConfigurationAbortConfig" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfig.Initializer"></a>

```python
from cdktn_provider_awscc import greengrassv2_deployment

greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfig(
  criteria_list: IResolvable | typing.List[Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStruct] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfig.property.criteriaList">criteria_list</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStruct">Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStruct</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/greengrassv2_deployment#criteria_list Greengrassv2Deployment#criteria_list}. |

---

##### `criteria_list`<sup>Optional</sup> <a name="criteria_list" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfig.property.criteriaList"></a>

```python
criteria_list: IResolvable | typing.List[Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStruct]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStruct">Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStruct</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/greengrassv2_deployment#criteria_list Greengrassv2Deployment#criteria_list}.

---

### Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStruct <a name="Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStruct" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStruct.Initializer"></a>

```python
from cdktn_provider_awscc import greengrassv2_deployment

greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStruct(
  action: str = None,
  failure_type: str = None,
  min_number_of_executed_things: typing.Union[int, float] = None,
  threshold_percentage: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStruct.property.action">action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/greengrassv2_deployment#action Greengrassv2Deployment#action}. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStruct.property.failureType">failure_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/greengrassv2_deployment#failure_type Greengrassv2Deployment#failure_type}. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStruct.property.minNumberOfExecutedThings">min_number_of_executed_things</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/greengrassv2_deployment#min_number_of_executed_things Greengrassv2Deployment#min_number_of_executed_things}. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStruct.property.thresholdPercentage">threshold_percentage</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/greengrassv2_deployment#threshold_percentage Greengrassv2Deployment#threshold_percentage}. |

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStruct.property.action"></a>

```python
action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/greengrassv2_deployment#action Greengrassv2Deployment#action}.

---

##### `failure_type`<sup>Optional</sup> <a name="failure_type" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStruct.property.failureType"></a>

```python
failure_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/greengrassv2_deployment#failure_type Greengrassv2Deployment#failure_type}.

---

##### `min_number_of_executed_things`<sup>Optional</sup> <a name="min_number_of_executed_things" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStruct.property.minNumberOfExecutedThings"></a>

```python
min_number_of_executed_things: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/greengrassv2_deployment#min_number_of_executed_things Greengrassv2Deployment#min_number_of_executed_things}.

---

##### `threshold_percentage`<sup>Optional</sup> <a name="threshold_percentage" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStruct.property.thresholdPercentage"></a>

```python
threshold_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/greengrassv2_deployment#threshold_percentage Greengrassv2Deployment#threshold_percentage}.

---

### Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfig <a name="Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfig" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfig.Initializer"></a>

```python
from cdktn_provider_awscc import greengrassv2_deployment

greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfig(
  exponential_rate: Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRate = None,
  maximum_per_minute: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfig.property.exponentialRate">exponential_rate</a></code> | <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRate">Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRate</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/greengrassv2_deployment#exponential_rate Greengrassv2Deployment#exponential_rate}. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfig.property.maximumPerMinute">maximum_per_minute</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/greengrassv2_deployment#maximum_per_minute Greengrassv2Deployment#maximum_per_minute}. |

---

##### `exponential_rate`<sup>Optional</sup> <a name="exponential_rate" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfig.property.exponentialRate"></a>

```python
exponential_rate: Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRate
```

- *Type:* <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRate">Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRate</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/greengrassv2_deployment#exponential_rate Greengrassv2Deployment#exponential_rate}.

---

##### `maximum_per_minute`<sup>Optional</sup> <a name="maximum_per_minute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfig.property.maximumPerMinute"></a>

```python
maximum_per_minute: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/greengrassv2_deployment#maximum_per_minute Greengrassv2Deployment#maximum_per_minute}.

---

### Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRate <a name="Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRate" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRate.Initializer"></a>

```python
from cdktn_provider_awscc import greengrassv2_deployment

greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRate(
  base_rate_per_minute: typing.Union[int, float] = None,
  increment_factor: typing.Union[int, float] = None,
  rate_increase_criteria: Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRate.property.baseRatePerMinute">base_rate_per_minute</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/greengrassv2_deployment#base_rate_per_minute Greengrassv2Deployment#base_rate_per_minute}. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRate.property.incrementFactor">increment_factor</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/greengrassv2_deployment#increment_factor Greengrassv2Deployment#increment_factor}. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRate.property.rateIncreaseCriteria">rate_increase_criteria</a></code> | <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria">Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/greengrassv2_deployment#rate_increase_criteria Greengrassv2Deployment#rate_increase_criteria}. |

---

##### `base_rate_per_minute`<sup>Optional</sup> <a name="base_rate_per_minute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRate.property.baseRatePerMinute"></a>

```python
base_rate_per_minute: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/greengrassv2_deployment#base_rate_per_minute Greengrassv2Deployment#base_rate_per_minute}.

---

##### `increment_factor`<sup>Optional</sup> <a name="increment_factor" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRate.property.incrementFactor"></a>

```python
increment_factor: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/greengrassv2_deployment#increment_factor Greengrassv2Deployment#increment_factor}.

---

##### `rate_increase_criteria`<sup>Optional</sup> <a name="rate_increase_criteria" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRate.property.rateIncreaseCriteria"></a>

```python
rate_increase_criteria: Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria
```

- *Type:* <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria">Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/greengrassv2_deployment#rate_increase_criteria Greengrassv2Deployment#rate_increase_criteria}.

---

### Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria <a name="Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria.Initializer"></a>

```python
from cdktn_provider_awscc import greengrassv2_deployment

greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria(
  number_of_notified_things: typing.Union[int, float] = None,
  number_of_succeeded_things: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria.property.numberOfNotifiedThings">number_of_notified_things</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/greengrassv2_deployment#number_of_notified_things Greengrassv2Deployment#number_of_notified_things}. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria.property.numberOfSucceededThings">number_of_succeeded_things</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/greengrassv2_deployment#number_of_succeeded_things Greengrassv2Deployment#number_of_succeeded_things}. |

---

##### `number_of_notified_things`<sup>Optional</sup> <a name="number_of_notified_things" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria.property.numberOfNotifiedThings"></a>

```python
number_of_notified_things: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/greengrassv2_deployment#number_of_notified_things Greengrassv2Deployment#number_of_notified_things}.

---

##### `number_of_succeeded_things`<sup>Optional</sup> <a name="number_of_succeeded_things" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria.property.numberOfSucceededThings"></a>

```python
number_of_succeeded_things: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/greengrassv2_deployment#number_of_succeeded_things Greengrassv2Deployment#number_of_succeeded_things}.

---

### Greengrassv2DeploymentIotJobConfigurationTimeoutConfig <a name="Greengrassv2DeploymentIotJobConfigurationTimeoutConfig" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfig.Initializer"></a>

```python
from cdktn_provider_awscc import greengrassv2_deployment

greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfig(
  in_progress_timeout_in_minutes: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfig.property.inProgressTimeoutInMinutes">in_progress_timeout_in_minutes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/greengrassv2_deployment#in_progress_timeout_in_minutes Greengrassv2Deployment#in_progress_timeout_in_minutes}. |

---

##### `in_progress_timeout_in_minutes`<sup>Optional</sup> <a name="in_progress_timeout_in_minutes" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfig.property.inProgressTimeoutInMinutes"></a>

```python
in_progress_timeout_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/greengrassv2_deployment#in_progress_timeout_in_minutes Greengrassv2Deployment#in_progress_timeout_in_minutes}.

---

## Classes <a name="Classes" id="Classes"></a>

### Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference <a name="Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import greengrassv2_deployment

greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.resetMerge">reset_merge</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.resetReset">reset_reset</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_merge` <a name="reset_merge" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.resetMerge"></a>

```python
def reset_merge() -> None
```

##### `reset_reset` <a name="reset_reset" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.resetReset"></a>

```python
def reset_reset() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.property.mergeInput">merge_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.property.resetInput">reset_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.property.merge">merge</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.property.reset">reset</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdate">Greengrassv2DeploymentComponentsConfigurationUpdate</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `merge_input`<sup>Optional</sup> <a name="merge_input" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.property.mergeInput"></a>

```python
merge_input: str
```

- *Type:* str

---

##### `reset_input`<sup>Optional</sup> <a name="reset_input" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.property.resetInput"></a>

```python
reset_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `merge`<sup>Required</sup> <a name="merge" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.property.merge"></a>

```python
merge: str
```

- *Type:* str

---

##### `reset`<sup>Required</sup> <a name="reset" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.property.reset"></a>

```python
reset: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Greengrassv2DeploymentComponentsConfigurationUpdate
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdate">Greengrassv2DeploymentComponentsConfigurationUpdate</a>

---


### Greengrassv2DeploymentComponentsMap <a name="Greengrassv2DeploymentComponentsMap" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsMap.Initializer"></a>

```python
from cdktn_provider_awscc import greengrassv2_deployment

greengrassv2Deployment.Greengrassv2DeploymentComponentsMap(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsMap.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsMap.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsMap.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsMap.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsMap.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsMap.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsMap.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsMap.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsMap.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsMap.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsMap.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsMap.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsMap.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsMap.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsMap.get"></a>

```python
def get(
  key: str
) -> Greengrassv2DeploymentComponentsOutputReference
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsMap.get.parameter.key"></a>

- *Type:* str

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsMap.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsMap.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsMap.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.Mapping[<a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponents">Greengrassv2DeploymentComponents</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsMap.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsMap.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsMap.property.internalValue"></a>

```python
internal_value: IResolvable | typing.Mapping[Greengrassv2DeploymentComponents]
```

- *Type:* cdktn.IResolvable | typing.Mapping[<a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponents">Greengrassv2DeploymentComponents</a>]

---


### Greengrassv2DeploymentComponentsOutputReference <a name="Greengrassv2DeploymentComponentsOutputReference" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import greengrassv2_deployment

greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_key: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.Initializer.parameter.complexObjectKey">complex_object_key</a></code> | <code>str</code> | the key of this item in the map. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_key`<sup>Required</sup> <a name="complex_object_key" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* str

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.putConfigurationUpdate">put_configuration_update</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.putRunWith">put_run_with</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.resetComponentVersion">reset_component_version</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.resetConfigurationUpdate">reset_configuration_update</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.resetRunWith">reset_run_with</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_configuration_update` <a name="put_configuration_update" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.putConfigurationUpdate"></a>

```python
def put_configuration_update(
  merge: str = None,
  reset: typing.List[str] = None
) -> None
```

###### `merge`<sup>Optional</sup> <a name="merge" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.putConfigurationUpdate.parameter.merge"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/greengrassv2_deployment#merge Greengrassv2Deployment#merge}.

---

###### `reset`<sup>Optional</sup> <a name="reset" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.putConfigurationUpdate.parameter.reset"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/greengrassv2_deployment#reset Greengrassv2Deployment#reset}.

---

##### `put_run_with` <a name="put_run_with" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.putRunWith"></a>

```python
def put_run_with(
  posix_user: str = None,
  system_resource_limits: Greengrassv2DeploymentComponentsRunWithSystemResourceLimits = None,
  windows_user: str = None
) -> None
```

###### `posix_user`<sup>Optional</sup> <a name="posix_user" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.putRunWith.parameter.posixUser"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/greengrassv2_deployment#posix_user Greengrassv2Deployment#posix_user}.

---

###### `system_resource_limits`<sup>Optional</sup> <a name="system_resource_limits" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.putRunWith.parameter.systemResourceLimits"></a>

- *Type:* <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimits">Greengrassv2DeploymentComponentsRunWithSystemResourceLimits</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/greengrassv2_deployment#system_resource_limits Greengrassv2Deployment#system_resource_limits}.

---

###### `windows_user`<sup>Optional</sup> <a name="windows_user" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.putRunWith.parameter.windowsUser"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/greengrassv2_deployment#windows_user Greengrassv2Deployment#windows_user}.

---

##### `reset_component_version` <a name="reset_component_version" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.resetComponentVersion"></a>

```python
def reset_component_version() -> None
```

##### `reset_configuration_update` <a name="reset_configuration_update" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.resetConfigurationUpdate"></a>

```python
def reset_configuration_update() -> None
```

##### `reset_run_with` <a name="reset_run_with" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.resetRunWith"></a>

```python
def reset_run_with() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.property.configurationUpdate">configuration_update</a></code> | <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference">Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.property.runWith">run_with</a></code> | <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference">Greengrassv2DeploymentComponentsRunWithOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.property.componentVersionInput">component_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.property.configurationUpdateInput">configuration_update_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdate">Greengrassv2DeploymentComponentsConfigurationUpdate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.property.runWithInput">run_with_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWith">Greengrassv2DeploymentComponentsRunWith</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.property.componentVersion">component_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponents">Greengrassv2DeploymentComponents</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `configuration_update`<sup>Required</sup> <a name="configuration_update" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.property.configurationUpdate"></a>

```python
configuration_update: Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference">Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference</a>

---

##### `run_with`<sup>Required</sup> <a name="run_with" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.property.runWith"></a>

```python
run_with: Greengrassv2DeploymentComponentsRunWithOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference">Greengrassv2DeploymentComponentsRunWithOutputReference</a>

---

##### `component_version_input`<sup>Optional</sup> <a name="component_version_input" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.property.componentVersionInput"></a>

```python
component_version_input: str
```

- *Type:* str

---

##### `configuration_update_input`<sup>Optional</sup> <a name="configuration_update_input" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.property.configurationUpdateInput"></a>

```python
configuration_update_input: IResolvable | Greengrassv2DeploymentComponentsConfigurationUpdate
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdate">Greengrassv2DeploymentComponentsConfigurationUpdate</a>

---

##### `run_with_input`<sup>Optional</sup> <a name="run_with_input" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.property.runWithInput"></a>

```python
run_with_input: IResolvable | Greengrassv2DeploymentComponentsRunWith
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWith">Greengrassv2DeploymentComponentsRunWith</a>

---

##### `component_version`<sup>Required</sup> <a name="component_version" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.property.componentVersion"></a>

```python
component_version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Greengrassv2DeploymentComponents
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponents">Greengrassv2DeploymentComponents</a>

---


### Greengrassv2DeploymentComponentsRunWithOutputReference <a name="Greengrassv2DeploymentComponentsRunWithOutputReference" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import greengrassv2_deployment

greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.putSystemResourceLimits">put_system_resource_limits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.resetPosixUser">reset_posix_user</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.resetSystemResourceLimits">reset_system_resource_limits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.resetWindowsUser">reset_windows_user</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_system_resource_limits` <a name="put_system_resource_limits" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.putSystemResourceLimits"></a>

```python
def put_system_resource_limits(
  cpus: typing.Union[int, float] = None,
  memory: typing.Union[int, float] = None
) -> None
```

###### `cpus`<sup>Optional</sup> <a name="cpus" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.putSystemResourceLimits.parameter.cpus"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/greengrassv2_deployment#cpus Greengrassv2Deployment#cpus}.

---

###### `memory`<sup>Optional</sup> <a name="memory" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.putSystemResourceLimits.parameter.memory"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/greengrassv2_deployment#memory Greengrassv2Deployment#memory}.

---

##### `reset_posix_user` <a name="reset_posix_user" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.resetPosixUser"></a>

```python
def reset_posix_user() -> None
```

##### `reset_system_resource_limits` <a name="reset_system_resource_limits" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.resetSystemResourceLimits"></a>

```python
def reset_system_resource_limits() -> None
```

##### `reset_windows_user` <a name="reset_windows_user" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.resetWindowsUser"></a>

```python
def reset_windows_user() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.property.systemResourceLimits">system_resource_limits</a></code> | <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference">Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.property.posixUserInput">posix_user_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.property.systemResourceLimitsInput">system_resource_limits_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimits">Greengrassv2DeploymentComponentsRunWithSystemResourceLimits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.property.windowsUserInput">windows_user_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.property.posixUser">posix_user</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.property.windowsUser">windows_user</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWith">Greengrassv2DeploymentComponentsRunWith</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `system_resource_limits`<sup>Required</sup> <a name="system_resource_limits" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.property.systemResourceLimits"></a>

```python
system_resource_limits: Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference">Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference</a>

---

##### `posix_user_input`<sup>Optional</sup> <a name="posix_user_input" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.property.posixUserInput"></a>

```python
posix_user_input: str
```

- *Type:* str

---

##### `system_resource_limits_input`<sup>Optional</sup> <a name="system_resource_limits_input" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.property.systemResourceLimitsInput"></a>

```python
system_resource_limits_input: IResolvable | Greengrassv2DeploymentComponentsRunWithSystemResourceLimits
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimits">Greengrassv2DeploymentComponentsRunWithSystemResourceLimits</a>

---

##### `windows_user_input`<sup>Optional</sup> <a name="windows_user_input" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.property.windowsUserInput"></a>

```python
windows_user_input: str
```

- *Type:* str

---

##### `posix_user`<sup>Required</sup> <a name="posix_user" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.property.posixUser"></a>

```python
posix_user: str
```

- *Type:* str

---

##### `windows_user`<sup>Required</sup> <a name="windows_user" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.property.windowsUser"></a>

```python
windows_user: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Greengrassv2DeploymentComponentsRunWith
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWith">Greengrassv2DeploymentComponentsRunWith</a>

---


### Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference <a name="Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import greengrassv2_deployment

greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.resetCpus">reset_cpus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.resetMemory">reset_memory</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cpus` <a name="reset_cpus" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.resetCpus"></a>

```python
def reset_cpus() -> None
```

##### `reset_memory` <a name="reset_memory" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.resetMemory"></a>

```python
def reset_memory() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.property.cpusInput">cpus_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.property.memoryInput">memory_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.property.cpus">cpus</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.property.memory">memory</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimits">Greengrassv2DeploymentComponentsRunWithSystemResourceLimits</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cpus_input`<sup>Optional</sup> <a name="cpus_input" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.property.cpusInput"></a>

```python
cpus_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory_input`<sup>Optional</sup> <a name="memory_input" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.property.memoryInput"></a>

```python
memory_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cpus`<sup>Required</sup> <a name="cpus" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.property.cpus"></a>

```python
cpus: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory`<sup>Required</sup> <a name="memory" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.property.memory"></a>

```python
memory: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Greengrassv2DeploymentComponentsRunWithSystemResourceLimits
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimits">Greengrassv2DeploymentComponentsRunWithSystemResourceLimits</a>

---


### Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference <a name="Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import greengrassv2_deployment

greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.resetAction">reset_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.resetTimeoutInSeconds">reset_timeout_in_seconds</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_action` <a name="reset_action" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.resetAction"></a>

```python
def reset_action() -> None
```

##### `reset_timeout_in_seconds` <a name="reset_timeout_in_seconds" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.resetTimeoutInSeconds"></a>

```python
def reset_timeout_in_seconds() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.property.actionInput">action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.property.timeoutInSecondsInput">timeout_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.property.timeoutInSeconds">timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicy">Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.property.actionInput"></a>

```python
action_input: str
```

- *Type:* str

---

##### `timeout_in_seconds_input`<sup>Optional</sup> <a name="timeout_in_seconds_input" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.property.timeoutInSecondsInput"></a>

```python
timeout_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `timeout_in_seconds`<sup>Required</sup> <a name="timeout_in_seconds" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.property.timeoutInSeconds"></a>

```python
timeout_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicy
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicy">Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicy</a>

---


### Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference <a name="Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import greengrassv2_deployment

greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.resetTimeoutInSeconds">reset_timeout_in_seconds</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_timeout_in_seconds` <a name="reset_timeout_in_seconds" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.resetTimeoutInSeconds"></a>

```python
def reset_timeout_in_seconds() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.property.timeoutInSecondsInput">timeout_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.property.timeoutInSeconds">timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicy">Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `timeout_in_seconds_input`<sup>Optional</sup> <a name="timeout_in_seconds_input" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.property.timeoutInSecondsInput"></a>

```python
timeout_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeout_in_seconds`<sup>Required</sup> <a name="timeout_in_seconds" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.property.timeoutInSeconds"></a>

```python
timeout_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicy
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicy">Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicy</a>

---


### Greengrassv2DeploymentDeploymentPoliciesOutputReference <a name="Greengrassv2DeploymentDeploymentPoliciesOutputReference" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import greengrassv2_deployment

greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.putComponentUpdatePolicy">put_component_update_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.putConfigurationValidationPolicy">put_configuration_validation_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.resetComponentUpdatePolicy">reset_component_update_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.resetConfigurationValidationPolicy">reset_configuration_validation_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.resetFailureHandlingPolicy">reset_failure_handling_policy</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_component_update_policy` <a name="put_component_update_policy" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.putComponentUpdatePolicy"></a>

```python
def put_component_update_policy(
  action: str = None,
  timeout_in_seconds: typing.Union[int, float] = None
) -> None
```

###### `action`<sup>Optional</sup> <a name="action" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.putComponentUpdatePolicy.parameter.action"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/greengrassv2_deployment#action Greengrassv2Deployment#action}.

---

###### `timeout_in_seconds`<sup>Optional</sup> <a name="timeout_in_seconds" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.putComponentUpdatePolicy.parameter.timeoutInSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/greengrassv2_deployment#timeout_in_seconds Greengrassv2Deployment#timeout_in_seconds}.

---

##### `put_configuration_validation_policy` <a name="put_configuration_validation_policy" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.putConfigurationValidationPolicy"></a>

```python
def put_configuration_validation_policy(
  timeout_in_seconds: typing.Union[int, float] = None
) -> None
```

###### `timeout_in_seconds`<sup>Optional</sup> <a name="timeout_in_seconds" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.putConfigurationValidationPolicy.parameter.timeoutInSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/greengrassv2_deployment#timeout_in_seconds Greengrassv2Deployment#timeout_in_seconds}.

---

##### `reset_component_update_policy` <a name="reset_component_update_policy" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.resetComponentUpdatePolicy"></a>

```python
def reset_component_update_policy() -> None
```

##### `reset_configuration_validation_policy` <a name="reset_configuration_validation_policy" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.resetConfigurationValidationPolicy"></a>

```python
def reset_configuration_validation_policy() -> None
```

##### `reset_failure_handling_policy` <a name="reset_failure_handling_policy" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.resetFailureHandlingPolicy"></a>

```python
def reset_failure_handling_policy() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.property.componentUpdatePolicy">component_update_policy</a></code> | <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference">Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.property.configurationValidationPolicy">configuration_validation_policy</a></code> | <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference">Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.property.componentUpdatePolicyInput">component_update_policy_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicy">Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.property.configurationValidationPolicyInput">configuration_validation_policy_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicy">Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.property.failureHandlingPolicyInput">failure_handling_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.property.failureHandlingPolicy">failure_handling_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPolicies">Greengrassv2DeploymentDeploymentPolicies</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `component_update_policy`<sup>Required</sup> <a name="component_update_policy" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.property.componentUpdatePolicy"></a>

```python
component_update_policy: Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference">Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference</a>

---

##### `configuration_validation_policy`<sup>Required</sup> <a name="configuration_validation_policy" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.property.configurationValidationPolicy"></a>

```python
configuration_validation_policy: Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference">Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference</a>

---

##### `component_update_policy_input`<sup>Optional</sup> <a name="component_update_policy_input" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.property.componentUpdatePolicyInput"></a>

```python
component_update_policy_input: IResolvable | Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicy
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicy">Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicy</a>

---

##### `configuration_validation_policy_input`<sup>Optional</sup> <a name="configuration_validation_policy_input" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.property.configurationValidationPolicyInput"></a>

```python
configuration_validation_policy_input: IResolvable | Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicy
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicy">Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicy</a>

---

##### `failure_handling_policy_input`<sup>Optional</sup> <a name="failure_handling_policy_input" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.property.failureHandlingPolicyInput"></a>

```python
failure_handling_policy_input: str
```

- *Type:* str

---

##### `failure_handling_policy`<sup>Required</sup> <a name="failure_handling_policy" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.property.failureHandlingPolicy"></a>

```python
failure_handling_policy: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Greengrassv2DeploymentDeploymentPolicies
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPolicies">Greengrassv2DeploymentDeploymentPolicies</a>

---


### Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList <a name="Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList.Initializer"></a>

```python
from cdktn_provider_awscc import greengrassv2_deployment

greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStruct">Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStruct</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStruct]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStruct">Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStruct</a>]

---


### Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference <a name="Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import greengrassv2_deployment

greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.resetAction">reset_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.resetFailureType">reset_failure_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.resetMinNumberOfExecutedThings">reset_min_number_of_executed_things</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.resetThresholdPercentage">reset_threshold_percentage</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_action` <a name="reset_action" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.resetAction"></a>

```python
def reset_action() -> None
```

##### `reset_failure_type` <a name="reset_failure_type" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.resetFailureType"></a>

```python
def reset_failure_type() -> None
```

##### `reset_min_number_of_executed_things` <a name="reset_min_number_of_executed_things" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.resetMinNumberOfExecutedThings"></a>

```python
def reset_min_number_of_executed_things() -> None
```

##### `reset_threshold_percentage` <a name="reset_threshold_percentage" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.resetThresholdPercentage"></a>

```python
def reset_threshold_percentage() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.property.actionInput">action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.property.failureTypeInput">failure_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.property.minNumberOfExecutedThingsInput">min_number_of_executed_things_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.property.thresholdPercentageInput">threshold_percentage_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.property.failureType">failure_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.property.minNumberOfExecutedThings">min_number_of_executed_things</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.property.thresholdPercentage">threshold_percentage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStruct">Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStruct</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.property.actionInput"></a>

```python
action_input: str
```

- *Type:* str

---

##### `failure_type_input`<sup>Optional</sup> <a name="failure_type_input" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.property.failureTypeInput"></a>

```python
failure_type_input: str
```

- *Type:* str

---

##### `min_number_of_executed_things_input`<sup>Optional</sup> <a name="min_number_of_executed_things_input" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.property.minNumberOfExecutedThingsInput"></a>

```python
min_number_of_executed_things_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `threshold_percentage_input`<sup>Optional</sup> <a name="threshold_percentage_input" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.property.thresholdPercentageInput"></a>

```python
threshold_percentage_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `failure_type`<sup>Required</sup> <a name="failure_type" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.property.failureType"></a>

```python
failure_type: str
```

- *Type:* str

---

##### `min_number_of_executed_things`<sup>Required</sup> <a name="min_number_of_executed_things" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.property.minNumberOfExecutedThings"></a>

```python
min_number_of_executed_things: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `threshold_percentage`<sup>Required</sup> <a name="threshold_percentage" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.property.thresholdPercentage"></a>

```python
threshold_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStruct
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStruct">Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStruct</a>

---


### Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference <a name="Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import greengrassv2_deployment

greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.putCriteriaList">put_criteria_list</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.resetCriteriaList">reset_criteria_list</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_criteria_list` <a name="put_criteria_list" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.putCriteriaList"></a>

```python
def put_criteria_list(
  value: IResolvable | typing.List[Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStruct]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.putCriteriaList.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStruct">Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStruct</a>]

---

##### `reset_criteria_list` <a name="reset_criteria_list" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.resetCriteriaList"></a>

```python
def reset_criteria_list() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.property.criteriaList">criteria_list</a></code> | <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList">Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.property.criteriaListInput">criteria_list_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStruct">Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStruct</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfig">Greengrassv2DeploymentIotJobConfigurationAbortConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `criteria_list`<sup>Required</sup> <a name="criteria_list" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.property.criteriaList"></a>

```python
criteria_list: Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList
```

- *Type:* <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList">Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList</a>

---

##### `criteria_list_input`<sup>Optional</sup> <a name="criteria_list_input" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.property.criteriaListInput"></a>

```python
criteria_list_input: IResolvable | typing.List[Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStruct]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStruct">Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStruct</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Greengrassv2DeploymentIotJobConfigurationAbortConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfig">Greengrassv2DeploymentIotJobConfigurationAbortConfig</a>

---


### Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference <a name="Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import greengrassv2_deployment

greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.putRateIncreaseCriteria">put_rate_increase_criteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.resetBaseRatePerMinute">reset_base_rate_per_minute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.resetIncrementFactor">reset_increment_factor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.resetRateIncreaseCriteria">reset_rate_increase_criteria</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_rate_increase_criteria` <a name="put_rate_increase_criteria" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.putRateIncreaseCriteria"></a>

```python
def put_rate_increase_criteria(
  number_of_notified_things: typing.Union[int, float] = None,
  number_of_succeeded_things: typing.Union[int, float] = None
) -> None
```

###### `number_of_notified_things`<sup>Optional</sup> <a name="number_of_notified_things" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.putRateIncreaseCriteria.parameter.numberOfNotifiedThings"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/greengrassv2_deployment#number_of_notified_things Greengrassv2Deployment#number_of_notified_things}.

---

###### `number_of_succeeded_things`<sup>Optional</sup> <a name="number_of_succeeded_things" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.putRateIncreaseCriteria.parameter.numberOfSucceededThings"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/greengrassv2_deployment#number_of_succeeded_things Greengrassv2Deployment#number_of_succeeded_things}.

---

##### `reset_base_rate_per_minute` <a name="reset_base_rate_per_minute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.resetBaseRatePerMinute"></a>

```python
def reset_base_rate_per_minute() -> None
```

##### `reset_increment_factor` <a name="reset_increment_factor" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.resetIncrementFactor"></a>

```python
def reset_increment_factor() -> None
```

##### `reset_rate_increase_criteria` <a name="reset_rate_increase_criteria" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.resetRateIncreaseCriteria"></a>

```python
def reset_rate_increase_criteria() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.property.rateIncreaseCriteria">rate_increase_criteria</a></code> | <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference">Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.property.baseRatePerMinuteInput">base_rate_per_minute_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.property.incrementFactorInput">increment_factor_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.property.rateIncreaseCriteriaInput">rate_increase_criteria_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria">Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.property.baseRatePerMinute">base_rate_per_minute</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.property.incrementFactor">increment_factor</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRate">Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRate</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `rate_increase_criteria`<sup>Required</sup> <a name="rate_increase_criteria" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.property.rateIncreaseCriteria"></a>

```python
rate_increase_criteria: Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference">Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference</a>

---

##### `base_rate_per_minute_input`<sup>Optional</sup> <a name="base_rate_per_minute_input" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.property.baseRatePerMinuteInput"></a>

```python
base_rate_per_minute_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `increment_factor_input`<sup>Optional</sup> <a name="increment_factor_input" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.property.incrementFactorInput"></a>

```python
increment_factor_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rate_increase_criteria_input`<sup>Optional</sup> <a name="rate_increase_criteria_input" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.property.rateIncreaseCriteriaInput"></a>

```python
rate_increase_criteria_input: IResolvable | Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria">Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria</a>

---

##### `base_rate_per_minute`<sup>Required</sup> <a name="base_rate_per_minute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.property.baseRatePerMinute"></a>

```python
base_rate_per_minute: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `increment_factor`<sup>Required</sup> <a name="increment_factor" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.property.incrementFactor"></a>

```python
increment_factor: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRate
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRate">Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRate</a>

---


### Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference <a name="Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import greengrassv2_deployment

greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.resetNumberOfNotifiedThings">reset_number_of_notified_things</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.resetNumberOfSucceededThings">reset_number_of_succeeded_things</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_number_of_notified_things` <a name="reset_number_of_notified_things" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.resetNumberOfNotifiedThings"></a>

```python
def reset_number_of_notified_things() -> None
```

##### `reset_number_of_succeeded_things` <a name="reset_number_of_succeeded_things" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.resetNumberOfSucceededThings"></a>

```python
def reset_number_of_succeeded_things() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.numberOfNotifiedThingsInput">number_of_notified_things_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.numberOfSucceededThingsInput">number_of_succeeded_things_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.numberOfNotifiedThings">number_of_notified_things</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.numberOfSucceededThings">number_of_succeeded_things</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria">Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `number_of_notified_things_input`<sup>Optional</sup> <a name="number_of_notified_things_input" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.numberOfNotifiedThingsInput"></a>

```python
number_of_notified_things_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `number_of_succeeded_things_input`<sup>Optional</sup> <a name="number_of_succeeded_things_input" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.numberOfSucceededThingsInput"></a>

```python
number_of_succeeded_things_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `number_of_notified_things`<sup>Required</sup> <a name="number_of_notified_things" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.numberOfNotifiedThings"></a>

```python
number_of_notified_things: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `number_of_succeeded_things`<sup>Required</sup> <a name="number_of_succeeded_things" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.numberOfSucceededThings"></a>

```python
number_of_succeeded_things: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria">Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria</a>

---


### Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference <a name="Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import greengrassv2_deployment

greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.putExponentialRate">put_exponential_rate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.resetExponentialRate">reset_exponential_rate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.resetMaximumPerMinute">reset_maximum_per_minute</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_exponential_rate` <a name="put_exponential_rate" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.putExponentialRate"></a>

```python
def put_exponential_rate(
  base_rate_per_minute: typing.Union[int, float] = None,
  increment_factor: typing.Union[int, float] = None,
  rate_increase_criteria: Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria = None
) -> None
```

###### `base_rate_per_minute`<sup>Optional</sup> <a name="base_rate_per_minute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.putExponentialRate.parameter.baseRatePerMinute"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/greengrassv2_deployment#base_rate_per_minute Greengrassv2Deployment#base_rate_per_minute}.

---

###### `increment_factor`<sup>Optional</sup> <a name="increment_factor" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.putExponentialRate.parameter.incrementFactor"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/greengrassv2_deployment#increment_factor Greengrassv2Deployment#increment_factor}.

---

###### `rate_increase_criteria`<sup>Optional</sup> <a name="rate_increase_criteria" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.putExponentialRate.parameter.rateIncreaseCriteria"></a>

- *Type:* <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria">Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/greengrassv2_deployment#rate_increase_criteria Greengrassv2Deployment#rate_increase_criteria}.

---

##### `reset_exponential_rate` <a name="reset_exponential_rate" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.resetExponentialRate"></a>

```python
def reset_exponential_rate() -> None
```

##### `reset_maximum_per_minute` <a name="reset_maximum_per_minute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.resetMaximumPerMinute"></a>

```python
def reset_maximum_per_minute() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.property.exponentialRate">exponential_rate</a></code> | <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference">Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.property.exponentialRateInput">exponential_rate_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRate">Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.property.maximumPerMinuteInput">maximum_per_minute_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.property.maximumPerMinute">maximum_per_minute</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfig">Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `exponential_rate`<sup>Required</sup> <a name="exponential_rate" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.property.exponentialRate"></a>

```python
exponential_rate: Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference">Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference</a>

---

##### `exponential_rate_input`<sup>Optional</sup> <a name="exponential_rate_input" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.property.exponentialRateInput"></a>

```python
exponential_rate_input: IResolvable | Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRate
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRate">Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRate</a>

---

##### `maximum_per_minute_input`<sup>Optional</sup> <a name="maximum_per_minute_input" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.property.maximumPerMinuteInput"></a>

```python
maximum_per_minute_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `maximum_per_minute`<sup>Required</sup> <a name="maximum_per_minute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.property.maximumPerMinute"></a>

```python
maximum_per_minute: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfig">Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfig</a>

---


### Greengrassv2DeploymentIotJobConfigurationOutputReference <a name="Greengrassv2DeploymentIotJobConfigurationOutputReference" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import greengrassv2_deployment

greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.putAbortConfig">put_abort_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.putJobExecutionsRolloutConfig">put_job_executions_rollout_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.putTimeoutConfig">put_timeout_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.resetAbortConfig">reset_abort_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.resetJobExecutionsRolloutConfig">reset_job_executions_rollout_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.resetTimeoutConfig">reset_timeout_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_abort_config` <a name="put_abort_config" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.putAbortConfig"></a>

```python
def put_abort_config(
  criteria_list: IResolvable | typing.List[Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStruct] = None
) -> None
```

###### `criteria_list`<sup>Optional</sup> <a name="criteria_list" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.putAbortConfig.parameter.criteriaList"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStruct">Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStruct</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/greengrassv2_deployment#criteria_list Greengrassv2Deployment#criteria_list}.

---

##### `put_job_executions_rollout_config` <a name="put_job_executions_rollout_config" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.putJobExecutionsRolloutConfig"></a>

```python
def put_job_executions_rollout_config(
  exponential_rate: Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRate = None,
  maximum_per_minute: typing.Union[int, float] = None
) -> None
```

###### `exponential_rate`<sup>Optional</sup> <a name="exponential_rate" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.putJobExecutionsRolloutConfig.parameter.exponentialRate"></a>

- *Type:* <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRate">Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRate</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/greengrassv2_deployment#exponential_rate Greengrassv2Deployment#exponential_rate}.

---

###### `maximum_per_minute`<sup>Optional</sup> <a name="maximum_per_minute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.putJobExecutionsRolloutConfig.parameter.maximumPerMinute"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/greengrassv2_deployment#maximum_per_minute Greengrassv2Deployment#maximum_per_minute}.

---

##### `put_timeout_config` <a name="put_timeout_config" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.putTimeoutConfig"></a>

```python
def put_timeout_config(
  in_progress_timeout_in_minutes: typing.Union[int, float] = None
) -> None
```

###### `in_progress_timeout_in_minutes`<sup>Optional</sup> <a name="in_progress_timeout_in_minutes" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.putTimeoutConfig.parameter.inProgressTimeoutInMinutes"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/greengrassv2_deployment#in_progress_timeout_in_minutes Greengrassv2Deployment#in_progress_timeout_in_minutes}.

---

##### `reset_abort_config` <a name="reset_abort_config" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.resetAbortConfig"></a>

```python
def reset_abort_config() -> None
```

##### `reset_job_executions_rollout_config` <a name="reset_job_executions_rollout_config" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.resetJobExecutionsRolloutConfig"></a>

```python
def reset_job_executions_rollout_config() -> None
```

##### `reset_timeout_config` <a name="reset_timeout_config" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.resetTimeoutConfig"></a>

```python
def reset_timeout_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.property.abortConfig">abort_config</a></code> | <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference">Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.property.jobExecutionsRolloutConfig">job_executions_rollout_config</a></code> | <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference">Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.property.timeoutConfig">timeout_config</a></code> | <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference">Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.property.abortConfigInput">abort_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfig">Greengrassv2DeploymentIotJobConfigurationAbortConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.property.jobExecutionsRolloutConfigInput">job_executions_rollout_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfig">Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.property.timeoutConfigInput">timeout_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfig">Greengrassv2DeploymentIotJobConfigurationTimeoutConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfiguration">Greengrassv2DeploymentIotJobConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `abort_config`<sup>Required</sup> <a name="abort_config" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.property.abortConfig"></a>

```python
abort_config: Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference">Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference</a>

---

##### `job_executions_rollout_config`<sup>Required</sup> <a name="job_executions_rollout_config" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.property.jobExecutionsRolloutConfig"></a>

```python
job_executions_rollout_config: Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference">Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference</a>

---

##### `timeout_config`<sup>Required</sup> <a name="timeout_config" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.property.timeoutConfig"></a>

```python
timeout_config: Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference">Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference</a>

---

##### `abort_config_input`<sup>Optional</sup> <a name="abort_config_input" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.property.abortConfigInput"></a>

```python
abort_config_input: IResolvable | Greengrassv2DeploymentIotJobConfigurationAbortConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfig">Greengrassv2DeploymentIotJobConfigurationAbortConfig</a>

---

##### `job_executions_rollout_config_input`<sup>Optional</sup> <a name="job_executions_rollout_config_input" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.property.jobExecutionsRolloutConfigInput"></a>

```python
job_executions_rollout_config_input: IResolvable | Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfig">Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfig</a>

---

##### `timeout_config_input`<sup>Optional</sup> <a name="timeout_config_input" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.property.timeoutConfigInput"></a>

```python
timeout_config_input: IResolvable | Greengrassv2DeploymentIotJobConfigurationTimeoutConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfig">Greengrassv2DeploymentIotJobConfigurationTimeoutConfig</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Greengrassv2DeploymentIotJobConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfiguration">Greengrassv2DeploymentIotJobConfiguration</a>

---


### Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference <a name="Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import greengrassv2_deployment

greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.resetInProgressTimeoutInMinutes">reset_in_progress_timeout_in_minutes</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_in_progress_timeout_in_minutes` <a name="reset_in_progress_timeout_in_minutes" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.resetInProgressTimeoutInMinutes"></a>

```python
def reset_in_progress_timeout_in_minutes() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.property.inProgressTimeoutInMinutesInput">in_progress_timeout_in_minutes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.property.inProgressTimeoutInMinutes">in_progress_timeout_in_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfig">Greengrassv2DeploymentIotJobConfigurationTimeoutConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `in_progress_timeout_in_minutes_input`<sup>Optional</sup> <a name="in_progress_timeout_in_minutes_input" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.property.inProgressTimeoutInMinutesInput"></a>

```python
in_progress_timeout_in_minutes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `in_progress_timeout_in_minutes`<sup>Required</sup> <a name="in_progress_timeout_in_minutes" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.property.inProgressTimeoutInMinutes"></a>

```python
in_progress_timeout_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Greengrassv2DeploymentIotJobConfigurationTimeoutConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfig">Greengrassv2DeploymentIotJobConfigurationTimeoutConfig</a>

---



